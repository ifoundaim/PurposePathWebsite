import { subscribeFormEndpoint } from "@/lib/forms";
import RainbowFlowText from "@/components/RainbowFlowText";

export default function SubscribeForm() {
  return (
    <form action={subscribeFormEndpoint} method="POST">
      <label>
        Your Email
        <input type="email" name="email" placeholder="Your Email" required />
      </label>
      <button className="button secondary" type="submit">
        <RainbowFlowText className="button-label" text="Subscribe" />
      </button>
    </form>
  );
}
