export const founderInboxEmail = "founder@purposepath.media";

const defaultContact =
  "https://formspree.io/f/mgolrlpe";
const defaultSubscribe =
  "https://formspree.io/f/xgolrloo";

export const contactFormEndpoint =
  process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_URL || defaultContact;
export const subscribeFormEndpoint =
  process.env.NEXT_PUBLIC_FORMSPREE_SUBSCRIBE_URL || defaultSubscribe;

export const contactFormSubject = "PurposePath contact inquiry";
export const subscribeFormSubject = "PurposePath subscribe request";

export function getFormspreeRoutingFields(subject: string) {
  return {
    _to: founderInboxEmail,
    _subject: subject,
  };
}
