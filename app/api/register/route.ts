import { google } from "googleapis";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const {
    attendeeName,
    guestName,
    email,
    phone,
    attendeeTshirtSize,
    guestTshirtSize,
    arrivalDate,
    arrivalAirline,
    arrivalFlightNumber,
    arrivalTime,
    departureDate,
    departureAirline,
    departureFlightNumber,
    departureTime,
    departureAirport,
    roomType,
    checkInDate,
    checkOutDate,
    eventAttendance,
    foodAllergies,
    mobilityIssues,
    additionalNotes,
    token: providedToken
  } = body;

  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"]
  });

  const sheets = google.sheets({ version: "v4", auth });

  const rowValues = [
    new Date().toISOString(),
    email,
    attendeeName,
    guestName,
    phone,
    attendeeTshirtSize,
    guestTshirtSize,
    arrivalDate,
    arrivalAirline,
    arrivalFlightNumber,
    arrivalTime,
    departureDate,
    departureAirline,
    departureFlightNumber,
    departureTime,
    departureAirport,
    roomType,
    checkInDate,
    checkOutDate,
    serializeEvents(eventAttendance),
    foodAllergies,
    mobilityIssues,
    additionalNotes,
    providedToken || generateToken(email),
  ];

  try {
    const spreadsheetId = process.env.GOOGLE_SHEET_ID!;

    if (providedToken) {
      // Update existing row
      const sheetData = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: "Responses!A2:Z"
      });

      const rows = sheetData.data.values ?? [];
      console.log("Looking for token:", providedToken);
      console.log("Fetched rows:", JSON.stringify(rows));
      const rowIndex = rows.findIndex(row => row[row.length - 1]?.trim() === providedToken.trim());

      if (rowIndex === -1) {
        return Response.json({ error: "Token not found" }, { status: 404 });
      }

      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `Responses!A${rowIndex + 2}`, // offset for header row
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [rowValues]
        }
      });

      return Response.json({ success: true, updated: true });
    } else {
      // Append new row
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: "Responses!A1",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [rowValues]
        }
      });

      return Response.json({ success: true, token: rowValues[rowValues.length - 1] });
    }
  } catch (err) {
    console.error("Sheet error:", err);
    return Response.json({ error: "Failed to write to sheet" }, { status: 500 });
  }
}

function serializeEvents(events: Record<string, boolean>): string {
  return Object.entries(events)
    .filter(([_, value]) => value)
    .map(([key]) => key)
    .join(", ");
}

function generateToken(email: string): string {
  return Buffer.from(email + Date.now()).toString("base64");
}
