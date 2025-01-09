import nodemailer from "nodemailer";

export async function POST(request) {
  const { user_email, user_message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail", // or your email service provider
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: user_email,
    to: process.env.RECEIVER_EMAIL,
    subject: "New Enquiry",
    html: `<p>${user_message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
