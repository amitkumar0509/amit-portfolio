import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY ?? "");

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = (await request.json()) as {
      name: string;
      email: string;
      company?: string;
      message: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL) {
      return NextResponse.json(
        { error: "Email service not configured." },
        { status: 503 }
      );
    }

    await resend.emails.send({
      from: "AI Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL,
      subject: `New portfolio message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company ?? "N/A"}\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to send message." },
      { status: 500 }
    );
  }
}
