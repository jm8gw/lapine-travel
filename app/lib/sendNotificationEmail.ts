import nodemailer from "nodemailer";

export async function sendNotificationEmail({
    formData,
    type,
  }: {
    formData: Record<string, any>;
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
    type === "new" ? "📝 New Registration Submitted" : "🔄 Registration Updated";

  const message = {
    from: `"Lapine PR Registration Site" <${process.env.NOTIF_EMAIL_USER!}>`,
    to: process.env.NOTIF_EMAIL_TO!,
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
        <li><strong>Guest Name:</strong> ${formData.guestName}</li>
        <li><strong>Arrival Date:</strong> ${formData.arrivalDate}</li>
        <li><strong>Departure Date:</strong> ${formData.departureDate}</li>
        <li><strong>Special Requirements:</strong> ${
            formData.specialRequirements || "None"
        }</li>
        </ul>
        <p>Check the Google Sheet for full registration details.</p>
    `,
  };

  await transporter.sendMail(message);
}
