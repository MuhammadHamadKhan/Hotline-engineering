// All machines live here. To add a machine, add one more item to this list.
//
// Needed for every machine:
//   slug              the end of the link: slug "dough-divider" opens /product/dough-divider
//   name, category, shortDescription, image   (used on the cards)
//
// Optional (a section is hidden when its field is missing):
//   images            list of photos for the detail page gallery (first one is shown big)
//   quickFacts        3 or 4 short facts next to the photo: { label, value }
//   description       a longer text about the machine
//   features          list of short points
//   specs             rows of the specifications table: { label, value }
//   catalog           path of a PDF in public/catalogs/ (shows the "Download Catalog" button)
//
// Photos go in public/images/products/  (example: "/images/products/dough-divider.jpg")
// IMPORTANT: the numbers below are SAMPLE values. Replace them with the client's real data.
import video from "../assets/productVideo.mp4";
export const products = [
  {
    slug: "dough-divider",
    name: "Dough Divider Machine",
    category: "Bakery Machinery",
    shortDescription: "Cuts dough into equal pieces for rolls, naan, paratha and more.",
    video:video, 
    image: "https://medatechindustries.com/wp-content/uploads/2025/05/Front-copy-600x600.jpg", // TEMPORARY: belongs to another company, replace before launch
    images: [ "https://medatechindustries.com/wp-content/uploads/2025/05/Front-copy-600x600.jpg","https://medatechindustries.com/wp-content/uploads/2025/12/bcjpg4-150x150.jpg"],
    quickFacts: [
      { label: "Capacity", value: "1,800 pieces per hour" },
      { label: "Power", value: "1.5 kW" },
      { label: "Material", value: "Stainless steel" },
    ],
    description:
      "This machine cuts a block of dough into pieces of the same weight, so every roll, naan or paratha comes out the same size. It saves hours of hand work in a busy bakery and keeps your portions and your costs under control.",
    features: [
      "Equal pieces every time",
      "Easy to clean stainless steel body",
      "Adjustable piece weight",
      "Safety cover over the moving parts",
    ],
    specs: [
      { label: "Piece weight", value: "30 g to 200 g" },
      { label: "Power", value: "1.5 kW" },
      { label: "Voltage", value: "220 V, 50 Hz" },
      { label: "Dimensions", value: "60 x 70 x 120 cm" },
      { label: "Weight", value: "120 kg" },
    ],
    catalog: "",
  },
  {
    slug: "dough-sheeter",
    name: "Dough Sheeter Machine",
    category: "Bakery Machinery",
    shortDescription: "Rolls dough into smooth, even sheets for samosa, pizza and pastry.",
    image: "https://medatechindustries.com/wp-content/uploads/2024/04/RG1-600x600.jpg", // TEMPORARY: belongs to another company, replace before launch
    images: [],
    quickFacts: [
      { label: "Roller width", value: "50 cm" },
      { label: "Power", value: "0.75 kW" },
      { label: "Material", value: "Stainless steel" },
    ],
    description:
      "The dough sheeter rolls dough into smooth sheets of the thickness you choose. It is used for samosa and spring roll sheets, pastry, pizza bases and more.",
    features: [
      "Adjustable sheet thickness",
      "Two-way rolling",
      "Removable flour tray",
    ],
    specs: [
      { label: "Roller width", value: "50 cm" },
      { label: "Sheet thickness", value: "1 mm to 20 mm" },
      { label: "Power", value: "0.75 kW" },
      { label: "Weight", value: "95 kg" },
    ],
    catalog: "",
  },
  {
    slug: "jalebi-maker",
    name: "Jalebi Making Machine",
    category: "Sweets Machinery",
    shortDescription: "Makes even jalebi in large batches with less work.",
    image: "https://medatechindustries.com/wp-content/uploads/2024/06/left-corner-4-600x600.jpg", // TEMPORARY: belongs to another company, replace before launch
    images: [],
    quickFacts: [
      { label: "Output", value: "Large batches" },
      { label: "Power", value: "1.1 kW" },
      { label: "Material", value: "Stainless steel" },
    ],
    description:
      "This machine drops batter in even spirals into the hot oil, so every jalebi has the same size and shape. It lets a small team make large orders without tiring out.",
    features: [
      "Even size and shape",
      "Easy to clean",
      "Simple controls",
    ],
    specs: [
      { label: "Power", value: "1.1 kW" },
      { label: "Voltage", value: "220 V, 50 Hz" },
      { label: "Weight", value: "70 kg" },
    ],
    catalog: "",
  },
  {
    slug: "barfi-maker",
    name: "Barfi Maker Machine",
    category: "Sweets Machinery",
    shortDescription: "Shapes and cuts barfi into clean, same-size pieces.",
    image: "https://medatechindustries.com/wp-content/uploads/2024/06/left-top-2-600x600.jpg", // TEMPORARY: belongs to another company, replace before launch
  },
  {
    slug: "rasgulla-maker",
    name: "Rasgulla and Gulab Jamun Machine",
    category: "Sweets Machinery",
    shortDescription: "Rounds rasgulla and gulab jamun quickly and evenly.",
    image: "https://medatechindustries.com/wp-content/uploads/2024/06/front-conveyor-1-600x600.jpg", // TEMPORARY: belongs to another company, replace before launch
  },
  {
    slug: "bowl-chopper",
    name: "Meat and Vegetable Bowl Chopper",
    category: "Restaurant Machinery",
    shortDescription: "Chops meat and vegetables fast for busy restaurant kitchens.",
    image: "https://medatechindustries.com/wp-content/uploads/2026/05/Nimko-Dryer-600x600.jpg", // TEMPORARY: belongs to another company, replace before launch
  },
  {
    slug: "nut-slicer",
    name: "Nut Slicer Machine",
    category: "Restaurant Machinery",
    shortDescription: "Slices almonds and other nuts thin and even.",
    image: "https://medatechindustries.com/wp-content/uploads/2025/11/BS9-600x600.jpg", // TEMPORARY: belongs to another company, replace before launch
  },
  {
    slug: "pizza-dough-sheeter",
    name: "Pizza Dough Sheeter",
    category: "Pizzeria Machinery",
    shortDescription: "Gives pizza dough an even thickness every time.",
    image: "https://medatechindustries.com/wp-content/uploads/2024/05/Front-1-600x600.jpg", // TEMPORARY: belongs to another company, replace before launch
  },
];

// Finds one machine by its slug (returns undefined if there is none)
export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}

// Other machines from the same category first, then any others, to fill the list
export function getRelatedProducts(product, count = 4) {
  const others = products.filter((item) => item.slug !== product.slug);
  const sameCategory = others.filter((item) => item.category === product.category);
  const rest = others.filter((item) => item.category !== product.category);
  return [...sameCategory, ...rest].slice(0, count);
}