import nodemailer from "nodemailer";

// types/RegistrationFormData.ts
export interface RegistrationFormData {
    attendeeName: string;
    guestName: string;
    email: string;
    phone: string;
    //attendeeTshirtSize: string;
    //guestTshirtSize: string;
    arrivalDate: string;
    //arrivalAirline: string;
    arrivalFlightNumber: string;
    arrivalTime: string;
    departureDate: string;
    //departureAirline: string;
    departureFlightNumber: string;
    departureTime: string;
    //departureAirport: string;
    roomType: string;
    oceanView: string;
    checkInDate: string;
    checkOutDate: string;
    eventAttendance: Record<string, boolean>;
    foodAllergies: string;
    mobilityIssues: string;
    additionalNotes: string;
    token: string;
    guestHasDifferentArrivalFlight?: boolean;
    guestArrivalDate?: string;
    guestArrivalAirline?: string;
    guestArrivalFlightNumber?: string;
    guestArrivalTime?: string;
    guestHasDifferentDepartureFlight?: boolean;
    guestDepartureDate?: string;
    //guestDepartureAirline?: string;
    guestDepartureFlightNumber?: string;
    guestDepartureTime?: string;
  } 


export async function sendNotificationEmail({
    formData,
    type,
  }: {
    formData: RegistrationFormData;
    type: "new" | "updated";
  }) {
  const transporter = nodemailer.createTransport({
    host: process.env.NOTIF_EMAIL_HOST!,
    port: Number(process.env.NOTIF_EMAIL_PORT!),
    secure: process.env.NOTIF_EMAIL_SECURE! === "true",
    auth: {
      user: process.env.NOTIF_EMAIL_USER!,
      pass: process.env.NOTIF_EMAIL_PASS!,
    },
  });

  const heading =
    type === "new" ? "Hello! Someone submitted a new registration on the Lapine PR site:" : "Hello! Someone updated their registration on the Lapine PR site:";

  const message = {
    from: `"Lapine PR Registration Site" <${process.env.NOTIF_EMAIL_USER!}>`,
    to: [
        process.env.NOTIF_EMAIL_TO!,
        process.env.NOTIF_EMAIL_TO_OTHER!,
      ],
    subject:
        type === "new" ? `New Lapine PR Registration from ${formData.attendeeName}` : `Updated Lapine PR Registration for ${formData.attendeeName}`,
    text: `
        New registration submitted:

        Attendee: ${formData.attendeeName}
        Email: ${formData.email}
        Phone: ${formData.phone}

        ...and more!
            `,
    // html: `
    //   <h3>New Retreat Registration Submitted</h3>
    //   <p><strong>Attendee:</strong> ${formData.attendeeName}</p>
    //   <p><strong>Email:</strong> ${formData.email}</p>
    //   <p><strong>Phone:</strong> ${formData.phone}</p>
    //   <p>Check the spreadsheet for full details.</p>
    // `,
    html: `
        <h2>${heading}</h2>
        <p>${
        type === "new"
            ? "A new registration has been submitted:"
            : "An existing registration has been updated:"
        }</p>
        <ul>
        <li><strong>Name:</strong> ${formData.attendeeName}</li>
        <li><strong>Email:</strong> ${formData.email}</li>
        <li><strong>Phone:</strong> ${formData.phone}</li>
        <li><strong>Guest Name:</strong> ${formData.guestName|| "N/A"} </li>
        <li><strong>Arrival Date:</strong> ${formData.arrivalDate  || "None"}</li>
        <li><strong>Departure Date:</strong> ${formData.departureDate  || "None"}</li>
        <li><strong>Dietary Restrictions:</strong> ${
            formData.foodAllergies || "None"
        }</li>
        <li><strong>Accessibility Needs:</strong> ${
            formData.mobilityIssues || "None"
        }</li>
        <li><strong>Additional Notes:</strong> ${
            formData.additionalNotes || "None"
        }</li>
        </ul>
        <p>Check the Google Sheet for full registration details: </p>
        <p>
            <a href="https://docs.google.com/spreadsheets/d/1HDQztcmneiuqMZw6UVEAjH0vhub9LhtdoBL3UZF5YF0/edit?usp=sharing" target="_blank">
                Lapine PR Retreat Registrations
            </a>
        </p>
        <p>Thank you! 🏖️</p>
    `,
  };

  await transporter.sendMail(message);
}
