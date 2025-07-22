// app/api/register/lookup/route.ts
import { google } from "googleapis";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");

  if (!token) return Response.json({ error: "Token is required" }, { status: 400 });

  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  try {
    const sheet = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range: "Responses!A2:Z",
    });

    const rows = sheet.data.values ?? [];
    const headers = rows[0];
    const match = rows.find(row => row.includes(token));

    if (!match) return Response.json({ error: "Not found" }, { status: 404 });

    return Response.json({ data: match });
  } catch (err) {
    console.error("Lookup error:", err);
    return Response.json({ error: "Lookup failed" }, { status: 500 });
  }
}
