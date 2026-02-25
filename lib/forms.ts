const defaultContact =
  "https://formspree.io/f/REPLACE_WITH_CONTACT_FORM_ID";
const defaultSubscribe =
  "https://formspree.io/f/xgolrloo";

export const contactFormEndpoint =
  process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_URL || defaultContact;
export const subscribeFormEndpoint =
  process.env.NEXT_PUBLIC_FORMSPREE_SUBSCRIBE_URL || defaultSubscribe;
