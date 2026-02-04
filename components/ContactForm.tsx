import { contactFormEndpoint } from "@/lib/forms";

export default function ContactForm() {
  return (
    <form action={contactFormEndpoint} method="POST">
      <label>
        Name
        <input type="text" name="name" placeholder="Name" required />
      </label>
      <label>
        Email
        <input type="email" name="email" placeholder="Email" required />
      </label>
      <label>
        Message
        <textarea
          name="message"
          placeholder="Type your message..."
          rows={5}
          required
        />
      </label>
      <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <input type="checkbox" name="terms" required />
        I accept the Terms
      </label>
      <button className="button" type="submit">
        Submit
      </button>
      <p className="subtitle" style={{ marginTop: "12px" }}>
        Thank you for your submission! We appreciate your interest and will be
        in touch shortly to discuss your goals.
      </p>
    </form>
  );
}
