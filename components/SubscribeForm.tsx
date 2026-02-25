"use client";

import { FormEvent, useState } from "react";
import RainbowFlowText from "@/components/RainbowFlowText";
import { subscribeFormEndpoint } from "@/lib/forms";

function isConfiguredEndpoint(endpoint: string) {
  return !endpoint.includes("REPLACE_WITH_SUBSCRIBE_FORM_ID");
}

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedEmail = email.trim();

    if (!normalizedEmail) {
      setFeedback({ type: "error", message: "Please enter your email." });
      return;
    }

    setIsSubmitting(true);
    setFeedback(null);

    try {
      if (!isConfiguredEndpoint(subscribeFormEndpoint)) {
        throw new Error("Subscription is not configured yet.");
      }

      const response = await fetch(subscribeFormEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email: normalizedEmail }),
      });

      let payload: { message?: string } = {};
      try {
        payload = (await response.json()) as { message?: string };
      } catch {
        payload = {};
      }

      if (!response.ok) {
        throw new Error(payload.message || "Unable to subscribe right now.");
      }

      setFeedback({
        type: "success",
        message: payload.message || "Thanks for subscribing!",
      });
      setEmail("");
    } catch (error) {
      const fallbackMessage = "Unable to subscribe right now. Please try again.";
      const message =
        error instanceof Error && error.message ? error.message : fallbackMessage;
      setFeedback({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form action={subscribeFormEndpoint} method="POST" onSubmit={handleSubmit} noValidate>
      <label>
        Your Email
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-invalid={feedback?.type === "error"}
          aria-describedby="subscribe-feedback"
        />
      </label>
      <button className="button secondary" type="submit" disabled={isSubmitting}>
        <RainbowFlowText
          className="button-label"
          text={isSubmitting ? "Submitting..." : "Subscribe"}
        />
      </button>
      <p
        id="subscribe-feedback"
        aria-live="polite"
        role={feedback?.type === "error" ? "alert" : "status"}
        className={feedback ? `form-feedback ${feedback.type}` : "form-feedback"}
      >
        {feedback?.message || ""}
      </p>
    </form>
  );
}
