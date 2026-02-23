import { subscribeFormEndpoint } from "@/lib/forms";

export default function SubscribeForm() {
  return (
    <form action={subscribeFormEndpoint} method="POST">
      <label>
        Your Email
        <input type="email" name="email" placeholder="Your Email" required />
      </label>
      <button className="button secondary" type="submit">
        <span className="button-label">Subscribe</span>
      </button>
    </form>
  );
}
