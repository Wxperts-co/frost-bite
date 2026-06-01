// data/menu.ts

export interface MenuItem {
  name: string;
  price: string;
  desc: string;
  image?: string;
  popular?: boolean;
  rating?: string;
  reviews?: number;
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
  desc: string;
}

// Categories with emoji icons
export const categories: Category[] = [
  { id: "soft-serve", name: "Soft-Serve Cups", emoji: "🍦", desc: "Creamy classic soft serve" },
  { id: "hard-ice-cream", name: "Hard Ice Cream", emoji: "🍧", desc: "Scooped to order" },
  { id: "shakes", name: "Shakes", emoji: "🥤", desc: "Thick & hand-spun" },
  { id: "frost", name: "Frost", emoji: "❄️", desc: "Signature frozen treats" },
  { id: "specialty-frost", name: "Specialty Frost", emoji: "✨", desc: "Unique frost creations. Each specialty frost is made fresh to order." },
  { id: "slushies", name: "Slushies", emoji: "🧊", desc: "Icy & refreshing" },
  { id: "freezes", name: "Freezes", emoji: "🥤", desc: "Cool & satisfying" },
  { id: "beverages", name: "Beverages", emoji: "🥤", desc: "Drinks & more" },
  { id: "burgers", name: "Burgers, Hot Dogs & More", emoji: "🍔", desc: "Cheese sauce available for an additional charge." },
  { id: "sides", name: "Sides", emoji: "🍟", desc: "Sauce for an additional charge." },
];

// Menu Data for each category with full descriptions
export const menuData: Record<string, MenuItem[]> = {
  "soft-serve": [
    {
      name: "Chocolate Vanilla Twist",
      price: "$2.85",
      desc: "Chocolate and vanilla soft serve blend. Choose from Junior, Small, Medium, or Large cups.",
      image: "/images/menu/items/chocolate-vanilla-twist.jpg",
      popular: true,
      rating: "100%",
      reviews: 6
    },
    {
      name: "Vanilla",
      price: "$2.85",
      desc: "Creamy soft serve in various cup sizes: Junior, Small, Medium, or Large.",
      image: "/images/menu/items/vanilla-soft-serve.jpg"
    },
    {
      name: "Chocolate",
      price: "$2.85",
      desc: "Rich, creamy chocolate soft serve. Available in Junior, Small, Medium, or Large cups.",
      image: "/images/menu/items/chocolate-soft-serve.jpg",
      popular: true,
      rating: "100%",
      reviews: 8
    },
  ],

  "hard-ice-cream": [
        { name: "Blue Panda", price: "$4.60", desc: "Blue Panda ice cream. Choice of one or two scoops.", image: "/images/menu/items/blue-panda.jpg" },
    { name: "Superman", price: "$4.60", desc: "Brightly colored ice cream with size options: One Scoop or Two Scoops.", image: "/images/menu/items/superman-ice-cream.jpg" },
    { name: "Mint Chocolate", price: "$4.60", desc: "Cool, refreshing mint ice cream with chocolate chunks. Available in one or two scoops.", image: "/images/menu/items/mint-chocolate.jpg" },
    { name: "NSA Butterpecan", price: "$4.60", desc: "Butter pecan ice cream with choice of one or two scoops. Classic, nutty flavor.", image: "/images/menu/items/nsa-butterpecan.jpg" },
       { name: "Strawberry", price: "$4.60", desc: "Strawberry ice cream. Choice of one or two scoops.", image: "/images/menu/items/strawberry-ice-cream.jpg", popular: true },
    { name: "Coffee", price: "$4.60", desc: "Rich and creamy coffee ice cream. Choice of one or two scoops.", image: "/images/menu/items/coffee-ice-cream.jpg" },
    { name: "Orange Sherbet", price: "$4.60", desc: "Orange sherbet with option for one or two scoops.", image: "/images/menu/items/orange-sherbet.jpg" },
    { name: "Vanilla", price: "$4.85", desc: "Smooth and creamy vanilla ice cream with choice of one or two scoops.", image: "/images/menu/items/vanilla-ice-cream.jpg", popular: true },
    { name: "Chocolate", price: "$4.60", desc: "Rich and creamy ice cream. Choose between one scoop or two scoops.", image: "/images/menu/items/chocolate-ice-cream.png", popular: true },
  ],

  shakes: [
    { name: "Chocolate ", price: "$5.30", desc: "Rich chocolate milkshake. Choice of Junior, Small, Medium, or Large.", image: "/images/menu/items/chocolate-shake.jpg", popular: true },
    { name: "Oreo ", price: "$5.30", desc: "Creamy milkshake blended with Oreo cookies. Available in Junior, Small, Medium, and Large sizes.", image: "/images/menu/items/oreo-shake.jpg", popular: true },
    { name: "Peanut Butter ", price: "$5.30", desc: "Peanut butter milkshake: Available in junior, small, medium, and large sizes.", image: "/images/menu/items/peanut-butter-shake.jpg", popular: true },
    { name: "Strawberry ", price: "$5.30", desc: "Creamy blend of strawberries and milk. Available in junior, small, medium, and large sizes.", image: "/images/menu/items/strawberry-shake.jpg", popular: true },
    { name: "Butterscotch ", price: "$5.30", desc: "Butterscotch milkshake available in Junior, Small, Medium, and Large sizes. Sweet, creamy delight in various quantities.", image: "/images/menu/items/butterscotch-shake.jpg" },
    { name: "Marshmallow", price: "$5.30", desc: "Marshmallow milkshake. Available in sizes: Junior, Small, Medium, Large.", image: "/images/menu/items/marshmallow-shake.jpg" },
    { name: "Coffee ", price: "$5.30", desc: "", image: "/images/menu/items/coffee-shake.jpg" },
    { name: "Vanilla ", price: "$5.30", desc: "Creamy vanilla milkshake. Choice of Junior, Small, Medium, or Large.", image: "/images/menu/items/vanilla-shake.jpg", popular: true },
        { name: "Chocolate Chip ", price: "$5.30", desc: "Rich chocolate chip milkshake. Size choices: Junior, Small, Medium, Large.", image: "/images/menu/items/chocolate-chip-shake.jpg", popular: true },
    { name: "Pineapple ", price: "$5.30", desc: "Pineapple milkshake: Available in Junior, Small, Medium, or Large sizes.", image: "/images/menu/items/pineapple-shake.jpg" },
    { name: "Lemon ", price: "$5.30", desc: "", image: "/images/menu/items/lemon-shake.jpg" },
    { name: "Cherry ", price: "$5.30", desc: "Cherry milkshake. Various sizes: Junior, Small, Medium, Large.", image: "/images/menu/items/cherry-shake.jpg" },
    { name: "Blueberry ", price: "$5.30", desc: "Blueberry milkshake. Choose from Junior, Small, Medium, or Large sizes.", image: "/images/menu/items/blueberry-shake.jpg" },
    { name: "Hot Fudge ", price: "$5.30", desc: "Rich and creamy milkshake with hot fudge, available in Junior, Small, Medium, or Large sizes.", image: "/images/menu/items/hot-fudge-shake.jpg", popular: true },
    { name: "Mint ", price: "$5.30", desc: "Cool mint milkshake available in various sizes: junior, small, medium, large.", image: "/images/menu/items/mint-shake.jpg" },
    { name: "Raspberry ", price: "$5.30", desc: "Raspberry milkshake. Available in Junior, Small, Medium, or Large sizes.", image: "/images/menu/items/raspberry-shake.jpg" },
    { name: "Black Raspberry ", price: "$5.30", desc: "Black raspberry milkshake. Choice of Junior, Small, Medium, or Large.", image: "/images/menu/items/black-raspberry-shake.jpg" },

    { name: "Banana ", price: "$5.30", desc: "Creamy banana milkshake available in various sizes: Junior, Small, Medium, Large.", image: "/images/menu/items/banana-shake.jpg" },
  ],

  frost: [
    { name: "Cookie Dough ", price: "$6.15", desc: "Choice of sizes: Junior, Small, Medium, Large.", image: "/images/menu/items/cookie-dough-frost.jpg", popular: true },
    { name: "Oreo ", price: "$6.15", desc: "Oreo cookie pieces in your choice of Junior, Small, Medium, or Large Frost.", image: "/images/menu/items/oreo-frost.jpg", popular: true },
    { name: "Reese's ", price: "$6.15", desc: "Reese's: Cold treat with chocolate and peanut butter flavors. Available sizes: Junior, Small, Medium, Large.", image: "/images/menu/items/reeses-frost.jpg", popular: true },
    { name: "M&M ", price: "$6.15", desc: "Candy-coated chocolate bites. Available in Junior, Small, Medium, and Large Frost sizes.", image: "/images/menu/items/mm-frost.jpg", popular: true },
    { name: "Snickers ", price: "$6.15", desc: "Snickers candy available in four sizes: Junior, Small, Medium, Large.", image: "/images/menu/items/snickers-frost.jpg" },
    { name: "Strawberry ", price: "$6.15", desc: "Sweet strawberries blended into a refreshing treat. Available in Junior, Small, Medium, or Large Frost.", image: "/images/menu/items/strawberry-frost.jpg" },
    { name: "Mint ", price: "$6.15", desc: "Mint beverage available in various sizes: Junior, Small, Medium, Large.", image: "/images/menu/items/mint-frost.jpg" },
    { name: "Heath ", price: "$6.15", desc: "Tea served cold with a variety of size options. Choose from Junior Frost, Small Frost, Medium Frost, or Large Frost.", image: "/images/menu/items/heath-frost.jpg" },
    { name: "NY Cheesecake ", price: "$6.15", desc: "New York style cheesecake frost. Sizes: Junior Frost, Small Frost, Medium Frost, Large .", image: "/images/menu/items/ny-cheesecake.jpg" },
    { name: "Butterfinger ", price: "$6.15", desc: "Butterfinger: Junior, Small, Medium, or Large sizes available.", image: "/images/menu/items/butterfinger-frost.jpg" },
    { name: "Apple Pie ", price: "$6.15", desc: "Warm apple pie with a choice of Junior, Small, Medium, or Large Frost size.", image: "/images/menu/items/apple-pie-frost.jpg" },
    { name: "Nerds ", price: "$6.15", desc: "Small, colorful candy pieces. Available in Junior, Small, Medium, and Large sizes.", image: "/images/menu/items/nerds-frost.jpg" },
    { name: "Banana ", price: "$6.15", desc: "", image: "/images/menu/items/banana-frost.jpg" },
  ],

  "specialty-frost": [
    { name: "Banana Split Frost", price: "$10.00", desc: "Creamy vanilla ice cream topped with fresh banana slices, strawberries, and a drizzle of chocolate syrup.", image: "/images/menu/items/banana-split-frost.jpg", popular: true },
    { name: "Fudge Brownie Supreme Frost", price: "$10.00", desc: "Rich fudge swirled with creamy vanilla and topped with chunks of decadent brownie.", image: "/images/menu/items/fudge-brownie-frost.jpg", popular: true },
    { name: "Turtle Frost", price: "$10.00", desc: "Creamy vanilla soft serve topped with crunchy pecans and a drizzle of caramel, layered over rich chocolate fudge.", image: "/images/menu/items/turtle-frost.jpg", popular: true },

  ],

  slushies: [
    { name: "Rainbow Slushy", price: "$3.00", desc: "A vibrant, colorful blend of flavors in a refreshing slushy. Available in various sizes: Junior, Small, Medium, Large.", image: "/images/menu/items/rainbow-slushy.jpg", popular: true },
    { name: "Lemon Lime Slushy", price: "$3.00", desc: "Refreshing lemon-lime slushy available in Junior, Small, Medium, or Large sizes.", image: "/images/menu/items/lemon-lime-slushy.jpg" },
    { name: "Grape Slushy", price: "$3.00", desc: "Grape-flavored slushy. Available in junior, small, medium, or large sizes.", image: "/images/menu/items/grape-slushy.jpg" },
    { name: "Orange Slushy", price: "$3.00", desc: "Orange slushy Refreshing orange-flavored ice drink. Available in Junior, Small, Medium, and Large sizes.", image: "/images/menu/items/orange-slushy.jpg" },

    { name: "Blue Raspberry Slushy", price: "$3.00", desc: "Blue raspberry slushy available in junior, small, medium, and large sizes.", image: "/images/menu/items/blue-raspberry-slushy.jpg", popular: true },
    { name: "Cherry Slushy", price: "$3.00", desc: "Cherry slushy. Available in Junior, Small, Medium, and Large sizes.", image: "/images/menu/items/cherry-slushy.jpg" },
  ],

  freezes: [
    { name: "Orange ", price: "$6.00", desc: "Orange Juice Freeze: Available in small, medium, or large sizes. Refreshing citrus flavor.", image: "/images/menu/items/orange-freeze.jpg" },
    { name: "Lemon Lime ", price: "$6.00", desc: "Lemon-lime frozen drink available in small, medium, or large sizes.", image: "/images/menu/items/lemon-lime-freeze.jpg" },
    { name: "Grape ", price: "$6.00", desc: "Chilled grape juice slushie. Available in small, medium, or large.", image: "/images/menu/items/grape-freeze.jpg" },
    { name: "Lemonade ", price: "$6.00", desc: "Icy, refreshing freeze. Choice of small, medium, or large.", image: "/images/menu/items/lemonade-freeze.jpg", popular: true },

    { name: "Blue Raspberry ", price: "$6.00", desc: "Blue raspberry beverage available in three sizes: Small, Medium, Large.", image: "/images/menu/items/blue-raspberry-freeze.jpg", popular: true },
    { name: "Cherry ", price: "$6.00", desc: "Chilled cherry-flavored beverage. Sizes: Small, Medium, Large.", image: "/images/menu/items/cherry-freeze.jpg" },
  ],

  beverages: [
    { name: "Root Beer", price: "$3.00", desc: "Refreshingly sweet soda with sizes ranging from junior to large.", image: "/images/menu/items/root-beer.jpg" },
    { name: "Unsweetened Tea", price: "$3.00", desc: "Pure, refreshing tea. Various sizes available. Junior, Small, Medium, Large..", image: "/images/menu/items/unsweetened-tea.jpg" },
    { name: "Sweet Tea", price: "$3.00", desc: "Choice of size: Junior, Small, Medium, Large.", image: "/images/menu/items/sweet-tea.jpg", popular: true },
    { name: "Lemonade", price: "$3.00", desc: "Citrus refreshment in sizes from junior to large.", image: "/images/menu/items/lemonade.jpg", popular: true },
    { name: "Mellow Yellow", price: "$3.00", desc: "Citrus-flavored soda. Junior, small, medium, or large size available.", image: "/images/menu/items/mellow-yellow.jpg" },
    { name: "Pibb Xtra", price: "$3.00", desc: "An intensely flavored, refreshing, spicy cherry alternative to regular cola.", image: "/images/menu/items/pibb-xtra.jpg" },

    { name: "Coke", price: "$3.00", desc: "The cold, refreshing, sparkling classic that America loves.", image: "/images/menu/items/coke.jpg" },
    { name: "Diet Coke", price: "$3.00", desc: "A crisp, refreshing taste you know and love with zero calories.", image: "/images/menu/items/diet-coke.jpg" },
    // { name: "Sprite", price: "$3.00", desc: "Crisp, refreshing lemon-lime soda. Available in Small, Medium, or Large.", image: "/images/menu/items/sprite.jpg" },
  ],

  burgers: [
        { name: "Tenderloins", price: "$9.30", desc: "Crispy breaded chicken tenders with fresh lettuce and tomato, served on a soft bun.", image: "/images/menu/items/tenderloins.jpg", popular: true },
    { name: "Cheeseburger", price: "$9.10", desc: "Classic beef patty topped with melted cheese, served on a grilled bun.", image: "/images/menu/items/cheeseburger.jpg", popular: true },
    { name: "Double Cheeseburger", price: "$11.45", desc: "Double the beef, double the cheese, this juicy cheeseburger is sure to satisfy your cravings.", image: "/images/menu/items/double-cheeseburger.jpg", popular: true },
        { name: "Chicken Tenders", price: "$8.60", desc: "Crispy, seasoned chicken strips that are perfect for dipping.", image: "/images/menu/items/chicken-tenders.jpg", popular: true },
    { name: "BBQ Sandwich", price: "$8.60", desc: "Tender, shredded barbecue meat in a soft bun.", image: "/images/menu/items/bbq-sandwich.jpg" },
    { name: "Hot Dog", price: "$5.75", desc: "Juicy, grilled sausage nestled in a soft bun", image: "/images/menu/items/hot-dog.jpg", popular: true },
    { name: "Grilled Chicken ", price: "$8.60", desc: "Juicy, perfectly grilled chicken with a hint of herbs and spices.", image: "/images/menu/items/grilled-chicken.jpg" },
    { name: "Corn Dog", price: "$4.85", desc: "Battered and deep-fried sausage on a stick", image: "/images/menu/items/corn-dog.jpg" },

    { name: "Hamburger", price: "$8.00", desc: "Juicy beef patty topped with crisp lettuce, fresh tomato slices, and tangy pickles, all nestled in a soft bun.", image: "/images/menu/items/hamburger.jpg" },
       { name: "Fish Sandwich", price: "$10.00", desc: "Freshly battered fish on a toasted bun", image: "/images/menu/items/fish-sandwich.jpg", popular: true },
    { name: "Chicken Wrap", price: "$10.00", desc: "Tender chicken enveloped in a fresh, soft tortilla with crisp veggies and zesty sauce.", image: "/images/menu/items/chicken-wrap.jpg", popular: true },
    { name: "Double Hamburger", price: "$10.00", desc: "Two beef patties layered with cheddar cheese, fresh lettuce, tomato, pickles, and a dollop of mayonnaise in a soft bun.", image: "/images/menu/items/double-hamburger.jpg" },
        { name: "Chicken Salad", price: "$8.60", desc: "Freshly tossed greens with seasoned chicken, and crisp veggies", image: "/images/menu/items/chicken-salad.jpg" },
    { name: "Spicy Chicken Sandwich", price: "$8.60", desc: "Spicy breaded chicken fillet with lettuce and mayo on a toasted bun.", image: "/images/menu/items/spicy-chicken.jpg", popular: true },
    { name: "Breaded Chicken Sandwich", price: "$8.60", desc: "Crispy breaded chicken breast with fresh lettuce and tomato slices on a soft bun.", image: "/images/menu/items/breaded-chicken.jpg" },
  ],

  sides: [
        { name: "Fried Mushrooms", price: "$7.45", desc: "Savor our selection of finely seasoned, freshly picked mushrooms.", image: "/images/menu/items/fried-mushrooms.jpg" },
    { name: "Onion Rings", price: "$7.45", desc: "Crispy golden-fried onion rings, perfectly seasoned for a savory crunch.", image: "/images/menu/items/onion-rings.jpg", popular: true },
    { name: "Spicy Cheese Balls", price: "$7.85", desc: "Spicy cheese balls - crispy on the outside, gooey and spicy on the inside.", image: "/images/menu/items/spicy-cheese-balls.jpg" },
    { name: "Cheese Curds", price: "$7.85", desc: "Golden Fried Cheese Balls - Crispy Outside, Gooey Inside", image: "/images/menu/items/cheese-curds.jpg", popular: true },
    { name: "Mozzarella Cheese Sticks", price: "$7.45", desc: "Golden, crispy breaded mozzarella sticks, perfect for a quick and satisfying side.", image: "/images/menu/items/mozzarella-sticks.jpg" },
    { name: "Mac & Cheese Bites", price: "$7.85", desc: "Crispy bites filled with creamy macaroni and cheese, a perfect appetizer or snack.", image: "/images/menu/items/mac-cheese-bites.jpg" },
    { name: "Tater Kegs", price: "$7.85", desc: "Crispy, golden-brown tater tots with a soft, fluffy interior, garnished with a sprinkle of fresh chives.", image: "/images/menu/items/tater-kegs.jpg" },
    { name: "Zucchini", price: "$7.45", desc: "Fresh zucchini slices battered and fried until crispy. Served with ranch dressing.", image: "/images/menu/items/zucchini.jpg" },

    { name: "French Fries", price: "$4.30", desc: "Crispy golden strips of deliciousness served hot and seasoned to perfection.", image: "/images/menu/items/french-fries.jpg", popular: true, rating: "100%", reviews: 13 },
    { name: "Cheese Fries", price: "$5.35", desc: "Golden fries topped with melted cheese, perfect for snacking or sharing.", image: "/images/menu/items/cheese-fries.jpg" },
  ],
};

// Get category by id
export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(cat => cat.id === id);
};

// Get menu items by category id
export const getMenuByCategory = (id: string): MenuItem[] => {
  return menuData[id] || [];
};