import { CONTACT } from '@/lib/seo';

export const FAQ_GROUPS = [
  {
    group: 'Orders & Shipping',
    items: [
      {
        q: 'How do I place an order?',
        a: 'Browse our collections, add items to your cart, and proceed to checkout. You can pay via UPI, credit/debit card, net banking, or Cash on Delivery. Once your order is confirmed, you will receive an email and SMS confirmation with your order details.',
      },
      {
        q: 'How do I track my order?',
        a: 'Once your order is dispatched, you will receive an SMS and email notification with a tracking link. You can click the link to view real-time shipment status from our courier partner.',
      },
      {
        q: 'How long does delivery take?',
        a: 'Orders are dispatched within 24–48 business hours of confirmation (Monday to Saturday). After dispatch, delivery takes 3–5 business days to metro cities, 4–6 business days to tier-2 cities, 5–8 business days to tier-3 cities and rural areas, and 7–10 business days to North-East India and remote locations.',
      },
      {
        q: 'Do you deliver across India?',
        a: 'Yes, we deliver to all serviceable pin codes across India. Enter your pin code at checkout to confirm availability and estimated delivery dates for your area.',
      },
      {
        q: 'Is there a shipping charge?',
        a: 'No. Shipping is free on every order, prepaid or Cash on Delivery, with no minimum order value.',
      },
      {
        q: 'Where should I come to shop offline?',
        a: `Come to our shop at ${CONTACT.address}. Timings: 10 AM to 7 PM. Call ${CONTACT.phone} or visit ${CONTACT.mapsUrl}.`,
      },
    ],
  },
  {
    group: 'Payments',
    items: [
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit and debit cards (Visa, Mastercard, Rupay), UPI (Google Pay, PhonePe, Paytm), net banking, and Cash on Delivery (COD). All online payments are processed through a secure, PCI-DSS compliant payment gateway.',
      },
      {
        q: 'Is Cash on Delivery (COD) available?',
        a: 'Yes, COD is available on eligible orders across most pin codes in India. There is no extra charge for Cash on Delivery. COD availability is displayed at checkout.',
      },
      {
        q: 'Are my payment details secure?',
        a: 'Absolutely. We use 256-bit SSL encryption and partner with RBI-compliant payment gateways to ensure your financial information is fully protected. We never store your card details on our servers.',
      },
    ],
  },
  {
    group: 'Returns & Refunds',
    items: [
      {
        q: 'What is your return policy?',
        a: 'You can request a return within 7 days of delivery. The product must be unused, free of scratches, cracks or stains, and returned in its original packaging. Products bought in a clearance or final sale cannot be returned. Received a damaged or wrong item? Contact us within 48 hours of delivery for a free replacement or full refund.',
      },
      {
        q: 'How do I initiate a return?',
        a: `Contact our support team at ${CONTACT.email} or call ${CONTACT.phone} with your order number. Once approved, we will schedule a pickup from your delivery address within 2–3 business days.`,
      },
      {
        q: 'When will I receive my refund?',
        a: 'Refunds are initiated within 48 hours of receiving and inspecting the returned item. The amount is credited to your original payment method within 5–7 business days. For COD orders, refunds are processed to your bank account.',
      },
      {
        q: 'Can I exchange a product instead of returning it?',
        a: 'Yes. Within the 7-day return window you can exchange for a different colour or model, subject to stock availability. Contact our support team to start an exchange. If the variant you want is unavailable, we will refund you instead.',
      },
    ],
  },
  {
    group: 'Products & Care',
    items: [
      {
        q: 'What products do you sell?',
        a: 'Plastic chairs, plastic stools and tables, household plastic items, steel furniture, steel racks and other steel products — at affordable retail and wholesale prices.',
      },
      {
        q: 'Do you deliver across India?',
        a: 'Yes. We ship to serviceable pin codes across India. Delivery timelines depend on your location and the courier partner assigned to your order.',
      },
      {
        q: 'Do you take bulk orders for shops, offices or events?',
        a: `Yes. For bulk plastic chairs, plastic products or steel items for shops, offices, restaurants, function halls or events, call or WhatsApp us on ${CONTACT.phone} for special rates.`,
      },
      {
        q: 'Are your products good quality?',
        a: 'Yes. Every item we sell is checked for strength and finish, and sourced from trusted manufacturers. We stand behind the quality of what we dispatch.',
      },
      {
        q: 'How should I care for plastic and steel products?',
        a: 'Wipe plastic with a damp cloth and mild soap; avoid sharp objects and long exposure to strong heat. Keep steel dry when possible and wipe clean after use. Care tips are on each product page.',
      },
    ],
  },
];

/** Shown in the sitewide FAQ block above the footer */
export const FOOTER_FAQ_ITEMS = [
  FAQ_GROUPS[0].items[0],
  FAQ_GROUPS[0].items[2],
  FAQ_GROUPS[0].items[3],
  FAQ_GROUPS[1].items[0],
  FAQ_GROUPS[1].items[1],
  FAQ_GROUPS[2].items[0],
  FAQ_GROUPS[3].items[2],
];