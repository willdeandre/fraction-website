import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { first, last, email, message, inquiryType } = await req.json();

  const { error } = await resend.emails.send({
    from: "Fraction Contact <onboarding@resend.dev>",
    to: "contact@fractionllc.com",
    subject: `New inquiry: ${inquiryType ?? "General"} — ${first} ${last}`,
    replyTo: email,
    text: `Name: ${first} ${last}\nEmail: ${email}\nInquiry Type: ${inquiryType ?? "Not selected"}\n\nMessage:\n${message}`,
  });

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
