// app/api/register/lookup-by-email/route.ts
import { google } from "googleapis";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get("email");
  if (!email) return Response.json({ error: "Email is required" }, { status: 400 });

  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range: "Responses!A2:Z",
    });

    const rows = response.data.values ?? [];
    const headers = rows[0];
    const match = rows.find((row) => row.includes(email));

    if (!match) return Response.json({ error: "Not found" }, { status: 404 });

    return Response.json({ data: match });
  } catch (err) {
    console.error("Email lookup error:", err);
    return Response.json({ error: "Lookup failed" }, { status: 500 });
  }
}
