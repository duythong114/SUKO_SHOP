const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Suko eCommerce";
const APP_SLOGAN =
  process.env.NEXT_PUBLIC_APP_SLOGAN || "Spend less, enjoy more.";
const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  "An ecommerce app with Next.js, Tailwind CSS, and TypeScript.";

const PAGE_SIZE = Number(process.env.PAGE_SIZE || 9);

const FREE_SHIPPING_MIN_PRICE = Number(
  process.env.FREE_SHIPPING_MIN_PRICE || 35
);

export {
  APP_NAME,
  APP_SLOGAN,
  APP_DESCRIPTION,
  PAGE_SIZE,
  FREE_SHIPPING_MIN_PRICE,
};


