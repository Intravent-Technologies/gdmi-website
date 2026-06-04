import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    console.log(`[Newsletter] New subscriber: ${email}`);

    // TODO: Integrate with Mailchimp / Brevo / ConvertKit
    // const apiKey = process.env.NEWSLETTER_API_KEY;
    // await fetch('https://api.brevo.com/v3/contacts', {
    //   method: 'POST',
    //   headers: { 'api-key': apiKey, 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email, listIds: [1] }),
    // });

    return NextResponse.json(
      { message: "Successfully subscribed" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
