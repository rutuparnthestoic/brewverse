// Menu data used by both the homepage featured section and the full menu page
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: "hot-drinks" | "cold-drinks" | "food" | "bakery" | "seasonal";
  tags: string[];
  featured?: boolean;
}

export const menuCategories = [
  { id: "all", label: "All" },
  { id: "hot-drinks", label: "Hot Drinks" },
  { id: "cold-drinks", label: "Cold Drinks" },
  { id: "food", label: "Food & Bites" },
  { id: "bakery", label: "Bakery" },
  { id: "seasonal", label: "Seasonal" },
] as const;

export type CategoryId = (typeof menuCategories)[number]["id"];

export const menuItems: MenuItem[] = [
  // === HOT DRINKS ===
  {
    id: "velvet-caramel-latte",
    name: "Velvet Caramel Latte",
    description:
      "Silky espresso with house-made caramel and steamed oat milk, topped with a golden drizzle.",
    price: "$5.95",
    image: "/images/drink-caramel-latte.png",
    category: "hot-drinks",
    tags: ["Best Seller", "Oat Milk"],
    featured: true,
  },
  {
    id: "the-perfect-espresso",
    name: "The Perfect Espresso",
    description:
      "Double-shot single-origin espresso with a velvety golden crema. Pure, bold, unforgettable.",
    price: "$4.25",
    image: "/images/drink-espresso.png",
    category: "hot-drinks",
    tags: ["Classic"],
  },
  {
    id: "golden-chai",
    name: "Golden Chai",
    description:
      "Spiced chai brewed with cardamom, cinnamon, and star anise. Warming and aromatic.",
    price: "$5.75",
    image: "/images/drink-chai-latte.png",
    category: "hot-drinks",
    tags: ["Spiced"],
  },
  {
    id: "velvet-hot-chocolate",
    name: "Velvet Hot Chocolate",
    description:
      "Rich Belgian chocolate melted into steamed oat milk, topped with house whip and cocoa dust.",
    price: "$5.50",
    image: "/images/drink-hot-chocolate.png",
    category: "hot-drinks",
    tags: ["Comfort", "Oat Milk"],
  },

  // === COLD DRINKS ===
  {
    id: "zen-matcha",
    name: "Zen Matcha",
    description:
      "Ceremonial-grade matcha whisked with oat milk and a hint of vanilla. Calm in a cup.",
    price: "$6.25",
    image: "/images/drink-matcha-latte.png",
    category: "cold-drinks",
    tags: ["Fan Favorite", "Vegan"],
    featured: true,
  },
  {
    id: "midnight-cold-brew",
    name: "Midnight Cold Brew",
    description:
      "24-hour steeped cold brew with notes of dark chocolate and smoked maple.",
    price: "$5.50",
    image: "/images/drink-cold-brew.png",
    category: "cold-drinks",
    tags: ["New", "Strong"],
    featured: true,
  },
  {
    id: "berry-bliss-smoothie",
    name: "Berry Bliss Smoothie",
    description:
      "Wild blueberries, raspberries, and açaí blended with oat yogurt. Vibrant and refreshing.",
    price: "$6.95",
    image: "/images/drink-berry-smoothie.png",
    category: "cold-drinks",
    tags: ["Vegan", "Healthy"],
    featured: true,
  },
  {
    id: "iced-americano",
    name: "Classic Iced Americano",
    description:
      "Bold espresso over ice with cold filtered water. Clean, crisp, no-nonsense caffeine.",
    price: "$4.50",
    image: "/images/drink-iced-americano.png",
    category: "cold-drinks",
    tags: ["Classic"],
  },

  // === FOOD ===
  {
    id: "sunrise-avocado-toast",
    name: "Sunrise Avocado Toast",
    description:
      "Smashed avocado on sourdough with poached egg, microgreens, cherry tomatoes & everything seasoning.",
    price: "$9.95",
    image: "/images/food-avocado-toast.png",
    category: "food",
    tags: ["Brunch", "Vegetarian"],
  },
  {
    id: "garden-pesto-panini",
    name: "Garden Pesto Panini",
    description:
      "Grilled panini with fresh mozzarella, basil pesto, roasted vegetables & sun-dried tomatoes.",
    price: "$10.50",
    image: "/images/food-sandwich.png",
    category: "food",
    tags: ["Lunch", "Vegetarian"],
  },
  {
    id: "acai-power-bowl",
    name: "Açaí Power Bowl",
    description:
      "Organic açaí blend topped with granola, banana, berries, coconut flakes, chia seeds & honey.",
    price: "$11.25",
    image: "/images/food-acai-bowl.png",
    category: "food",
    tags: ["Healthy", "Vegan Option"],
  },

  // === BAKERY ===
  {
    id: "butter-croissant",
    name: "Butter Croissant",
    description:
      "Classic French butter croissant, hand-laminated with 27 layers. Flaky, golden, perfect.",
    price: "$4.25",
    image: "/images/food-croissant.png",
    category: "bakery",
    tags: ["Fresh Daily"],
  },
  {
    id: "double-choc-cookie",
    name: "Double Choc Chunk Cookie",
    description:
      "Oversized cookie loaded with dark and milk chocolate chunks. Crispy edges, gooey center.",
    price: "$3.95",
    image: "/images/food-cookie.png",
    category: "bakery",
    tags: ["Best Seller", "Indulgent"],
  },
  {
    id: "blueberry-crumb-muffin",
    name: "Blueberry Crumb Muffin",
    description:
      "Bursting with fresh blueberries and topped with a buttery brown sugar crumble. Baked fresh daily.",
    price: "$4.50",
    image: "/images/food-muffin.png",
    category: "bakery",
    tags: ["Fresh Daily"],
  },

  // === SEASONAL ===
  {
    id: "pumpkin-spice-latte",
    name: "Pumpkin Spice Latte",
    description:
      "Real pumpkin purée with warm spices, espresso, and steamed oat milk. The autumn icon, elevated.",
    price: "$6.50",
    image: "/images/drink-pumpkin-latte.png",
    category: "seasonal",
    tags: ["Seasonal", "Limited"],
  },
];
