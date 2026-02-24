import { NextResponse } from "next/server";
import { subscribeFormEndpoint } from "@/lib/forms";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isConfiguredEndpoint(endpoint: string) {
  return !endpoint.includes("REPLACE_WITH_SUBSCRIBE_FORM_ID");
}

async function getEmailFromRequest(request: Request) {
  const contentType = request.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    const body = (await request.json()) as { email?: string };
    return body.email || "";
  }

  const form = await request.formData();
  const email = form.get("email");

  return typeof email === "string" ? email : "";
}

export async function POST(request: Request) {
  if (!isConfiguredEndpoint(subscribeFormEndpoint)) {
    return NextResponse.json(
      { message: "Subscription is not configured yet." },
      { status: 503 },
    );
  }

  try {
    const rawEmail = await getEmailFromRequest(request);
    const email = rawEmail.trim().toLowerCase();

    if (!email) {
      return NextResponse.json(
        { message: "Please provide an email address." },
        { status: 400 },
      );
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const upstreamResponse = await fetch(subscribeFormEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!upstreamResponse.ok) {
      return NextResponse.json(
        { message: "Unable to subscribe right now. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json(
      { message: "Thanks for subscribing!" },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { message: "Unable to subscribe right now. Please try again." },
      { status: 500 },
    );
  }
}
