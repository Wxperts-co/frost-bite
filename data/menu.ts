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
  { id: "soft-serve", name: "Cones & Cups", emoji: "🍦", desc: "Creamy classic soft serve" },
  { id: "hard-ice-cream", name: "Hard Ice Cream", emoji: "🍧", desc: "Scooped to order" },
  { id: "shakes", name: "Shakes", emoji: "🥤", desc: "Thick & hand-spun" },
  { id: "sundaes", name: "Sundaes", emoji: "🍨", desc: "Delicious soft serve sundaes" },
  { id: "frost-specialties", name: "Frost Specialties", emoji: "✨", desc: "Freshly made soft serve specialties" },
  { id: "frost", name: "Frost", emoji: "❄️", desc: "Signature frozen treats" },
  { id: "specialty-frost", name: "Specialty Frost", emoji: "🌀", desc: "Freshly made signature frost creations" },
  { id: "floats", name: "Floats", emoji: "🥤", desc: "Soft serve floating in your favorite soda" },
  { id: "dipping-dots", name: "Dippin Dots", emoji: "🟡", desc: "The ice cream of the future" },
  { id: "slushies", name: "Slushies", emoji: "🧊", desc: "Icy & refreshing slushies" },
  { id: "freezes", name: "Freezes", emoji: "🥤", desc: "Cool & satisfying freezes" },
  { id: "sides", name: "Sides", emoji: "🍟", desc: "Perfect complements to your meal. Add sauce $.25 extra." },
  { id: "combos", name: "Combos", emoji: "🍔", desc: "All combos include fries & small drink" },
  { id: "beverages", name: "Beverages", emoji: "🥤", desc: "Thirst-quenching drinks" },
  { id: "burgers", name: "Burgers, Hot Dogs & More", emoji: "🍔", desc: "Hot & fresh grill items. Add cheese $.50 extra." },
  { id: "kids-meal", name: "Kids Meal", emoji: "🧸", desc: "Perfect portions for kids" },
];

// Menu Data for each category with full descriptions
export const menuData: Record<string, MenuItem[]> = {
  "soft-serve": [
    {
      name: "Chocolate Vanilla Twist",
      price: "Jr: $1.99 | Sm: $2.49 | Med: $2.99 | Lg: $3.49 | Soft Serve: $3.99",
      desc: "Chocolate and vanilla soft serve blend.",
      image: "/images/menu/items/chocolate-vanilla-twist.jpg",
      popular: true,
      rating: "100%",
      reviews: 6
    },
    {
      name: "Vanilla",
      price: "Jr: $1.99 | Sm: $2.49 | Med: $2.99 | Lg: $3.49 | Soft Serve: $3.99",
      desc: "Creamy classic vanilla soft serve.",
      image: "/images/menu/items/vanilla-soft-serve.jpg"
    },
    {
      name: "Chocolate",
      price: "Jr: $1.99 | Sm: $2.49 | Med: $2.99 | Lg: $3.49 | Soft Serve: $3.99",
      desc: "Rich, creamy chocolate soft serve.",
      image: "/images/menu/items/chocolate-soft-serve.jpg",
      popular: true,
      rating: "100%",
      reviews: 8
    },
  ],

  "hard-ice-cream": [
    { name: "Blue Panda", price: "1 Sc: $3.19 | 2 Sc: $4.49 | 3 Sc: $4.59 | Waffle: $4.89", desc: "Creamy blue panda ice cream.", image: "/images/menu/items/blue-panda.jpg" },
    { name: "Superman", price: "1 Sc: $3.19 | 2 Sc: $4.49 | 3 Sc: $4.59 | Waffle: $4.89", desc: "Vibrant and colorful kid-favorite flavor.", image: "/images/menu/items/superman-ice-cream.jpg" },
    { name: "Mint Chocolate", price: "1 Sc: $3.19 | 2 Sc: $4.49 | 3 Sc: $4.59 | Waffle: $4.89", desc: "Cool mint ice cream loaded with chocolate chunks.", image: "/images/menu/items/mint-chocolate.jpg" },
    { name: "NSA Butterpecan", price: "1 Sc: $3.19 | 2 Sc: $4.49 | 3 Sc: $4.59 | Waffle: $4.89", desc: "No Sugar Added butter pecan ice cream.", image: "/images/menu/items/nsa-butterpecan.jpg" },
    { name: "Strawberry", price: "1 Sc: $3.19 | 2 Sc: $4.49 | 3 Sc: $4.59 | Waffle: $4.89", desc: "Classic strawberry ice cream made with real strawberries.", image: "/images/menu/items/strawberry-ice-cream.jpg", popular: true },
    { name: "Coffee", price: "1 Sc: $3.19 | 2 Sc: $4.49 | 3 Sc: $4.59 | Waffle: $4.89", desc: "Rich and robust coffee ice cream.", image: "/images/menu/items/coffee-ice-cream.jpg" },
    { name: "Orange Sherbet", price: "1 Sc: $3.19 | 2 Sc: $4.49 | 3 Sc: $4.59 | Waffle: $4.89", desc: "Light and refreshing orange sherbet.", image: "/images/menu/items/orange-sherbet.jpg" },
    { name: "Vanilla", price: "1 Sc: $3.19 | 2 Sc: $4.49 | 3 Sc: $4.59 | Waffle: $4.89", desc: "Classic rich vanilla scooped ice cream.", image: "/images/menu/items/vanilla-ice-cream.jpg", popular: true },
    { name: "Chocolate", price: "1 Sc: $3.19 | 2 Sc: $4.49 | 3 Sc: $4.59 | Waffle: $4.89", desc: "Creamy, decadent chocolate scooped ice cream.", image: "/images/menu/items/chocolate-ice-cream.png", popular: true }
  ],

  "shakes": [
    { name: "Chocolate Shake", price: "Jr: $3.69 | Sm: $4.19 | Med: $4.99 | Lg: $5.99", desc: "Rich chocolate milkshake.", image: "/images/menu/items/chocolate-shake.jpg", popular: true },
    { name: "Oreo Shake", price: "Jr: $3.69 | Sm: $4.19 | Med: $4.99 | Lg: $5.99", desc: "Creamy milkshake blended with Oreo cookies.", image: "/images/menu/items/oreo-shake.jpg", popular: true },
    { name: "Peanut Butter Shake", price: "Jr: $3.69 | Sm: $4.19 | Med: $4.99 | Lg: $5.99", desc: "Creamy peanut butter milkshake.", image: "/images/menu/items/peanut-butter-shake.jpg", popular: true },
    { name: "Strawberry Shake", price: "Jr: $3.69 | Sm: $4.19 | Med: $4.99 | Lg: $5.99", desc: "Creamy blend of strawberries and milk.", image: "/images/menu/items/strawberry-shake.jpg", popular: true },
    { name: "Butterscotch Shake", price: "Jr: $3.69 | Sm: $4.19 | Med: $4.99 | Lg: $5.99", desc: "Sweet, buttery butterscotch milkshake.", image: "/images/menu/items/butterscotch-shake.jpg" },
    { name: "Marshmallow Shake", price: "Jr: $3.69 | Sm: $4.19 | Med: $4.99 | Lg: $5.99", desc: "Sweet, creamy marshmallow milkshake.", image: "/images/menu/items/marshmallow-shake.jpg" },
    { name: "Coffee Shake", price: "Jr: $3.69 | Sm: $4.19 | Med: $4.99 | Lg: $5.99", desc: "Rich coffee-flavored milkshake.", image: "/images/menu/items/coffee-shake.jpg" },
    { name: "Vanilla Shake", price: "Jr: $3.69 | Sm: $4.19 | Med: $4.99 | Lg: $5.99", desc: "Creamy classic vanilla milkshake.", image: "/images/menu/items/vanilla-shake.jpg", popular: true },
    { name: "Chocolate Chip Shake", price: "Jr: $3.69 | Sm: $4.19 | Med: $4.99 | Lg: $5.99", desc: "Creamy milkshake with chocolate chips.", image: "/images/menu/items/chocolate-chip-shake.jpg", popular: true },
    { name: "Pineapple Shake", price: "Jr: $3.69 | Sm: $4.19 | Med: $4.99 | Lg: $5.99", desc: "Sweet pineapple milkshake.", image: "/images/menu/items/pineapple-shake.jpg" },
    { name: "Lemon Shake", price: "Jr: $3.69 | Sm: $4.19 | Med: $4.99 | Lg: $5.99", desc: "Refreshing lemon milkshake.", image: "/images/menu/items/lemon-shake.jpg" },
    { name: "Cherry Shake", price: "Jr: $3.69 | Sm: $4.19 | Med: $4.99 | Lg: $5.99", desc: "Sweet cherry milkshake.", image: "/images/menu/items/cherry-shake.jpg" },
    { name: "Blueberry Shake", price: "Jr: $3.69 | Sm: $4.19 | Med: $4.99 | Lg: $5.99", desc: "Sweet blueberry milkshake.", image: "/images/menu/items/blueberry-shake.jpg" },
    { name: "Hot Fudge Shake", price: "Jr: $3.69 | Sm: $4.19 | Med: $4.99 | Lg: $5.99", desc: "Rich and creamy milkshake with hot fudge.", image: "/images/menu/items/hot-fudge-shake.jpg", popular: true },
    { name: "Mint Shake", price: "Jr: $3.69 | Sm: $4.19 | Med: $4.99 | Lg: $5.99", desc: "Cool and refreshing mint milkshake.", image: "/images/menu/items/mint-shake.jpg" },
    { name: "Raspberry Shake", price: "Jr: $3.69 | Sm: $4.19 | Med: $4.99 | Lg: $5.99", desc: "Delicious raspberry milkshake.", image: "/images/menu/items/raspberry-shake.jpg" },
    { name: "Black Raspberry Shake", price: "Jr: $3.69 | Sm: $4.19 | Med: $4.99 | Lg: $5.99", desc: "Rich black raspberry milkshake.", image: "/images/menu/items/black-raspberry-shake.jpg" },
    { name: "Banana Shake", price: "Jr: $3.69 | Sm: $4.19 | Med: $4.99 | Lg: $5.99", desc: "Creamy banana milkshake.", image: "/images/menu/items/banana-shake.jpg" }
  ],

  "sundaes": [
    { name: "Chocolate ", price: "Sm: $3.89 | Med: $4.59 | Lg: $4.99", desc: "Classic chocolate sundae.", image: "/images/menu/items/chocolate-sundae.jpg" },
    { name: "Oreo ", price: "Sm: $3.89 | Med: $4.59 | Lg: $4.99", desc: "Sundae topped with Oreo crumbs.", image: "/images/menu/items/oreo-sundae.jpg", popular: true },
    { name: "Peanut Butter ", price: "Sm: $3.89 | Med: $4.59 | Lg: $4.99", desc: "Sundae topped with peanut butter sauce.", image: "/images/menu/items/peanut-butter-sundae.jpg" },
    { name: "Strawberry ", price: "Sm: $3.89 | Med: $4.59 | Lg: $4.99", desc: "Sundae topped with sweet strawberry sauce.", image: "/images/menu/items/strawberry-sundae.jpg", popular: true },
    { name: "Butterscotch ", price: "Sm: $3.89 | Med: $4.59 | Lg: $4.99", desc: "Sundae topped with rich butterscotch.", image: "/images/menu/items/butterscotch-sundae.jpg" },
    { name: "Marshmallow ", price: "Sm: $3.89 | Med: $4.59 | Lg: $4.99", desc: "Sundae topped with sweet marshmallow.", image: "/images/menu/items/marshmallow-sundae.jpg" },
    { name: "Vanilla ", price: "Sm: $3.89 | Med: $4.59 | Lg: $4.99", desc: "Classic vanilla soft serve sundae.", image: "/images/menu/items/vanilla-sundae.jpg" },
    { name: "Chocolate Chip ", price: "Sm: $3.89 | Med: $4.59 | Lg: $4.99", desc: "Sundae topped with chocolate chips.", image: "/images/menu/items/chocolate-chip-sundae.jpg" },
    { name: "Pineapple ", price: "Sm: $3.89 | Med: $4.59 | Lg: $4.99", desc: "Sundae topped with sweet pineapple toppings.", image: "/images/menu/items/pineapple-sundae.jpg" },
    { name: "Lemon ", price: "Sm: $3.89 | Med: $4.59 | Lg: $4.99", desc: "Zesty lemon sundae.", image: "/images/menu/items/lemon-sundae.jpg" },
    { name: "Cherry ", price: "Sm: $3.89 | Med: $4.59 | Lg: $4.99", desc: "Sundae topped with sweet cherry toppings.", image: "/images/menu/items/cherry-sundae.jpg" },
    { name: "Blueberry ", price: "Sm: $3.89 | Med: $4.59 | Lg: $4.99", desc: "Sundae topped with blueberry sauce.", image: "/images/menu/items/blueberry-sundae.jpg" },
    { name: "Mint ", price: "Sm: $3.89 | Med: $4.59 | Lg: $4.99", desc: "Cool mint-flavored sundae.", image: "/images/menu/items/mint-sundae.jpg" },
    { name: "Raspberry ", price: "Sm: $3.89 | Med: $4.59 | Lg: $4.99", desc: "Sundae topped with sweet raspberry.", image: "/images/menu/items/raspberry-sundae.jpg" },
    { name: "Black Raspberry ", price: "Sm: $3.89 | Med: $4.59 | Lg: $4.99", desc: "Delicious black raspberry sundae.", image: "/images/menu/items/black-raspberry-sundae.jpg" },
    { name: "Banana ", price: "Sm: $3.89 | Med: $4.59 | Lg: $4.99", desc: "Sundae topped with fresh banana slices.", image: "/images/menu/items/banana-sundae.jpg" }
  ],

  "frost-specialties": [
    { name: "Banana Split", price: "$5.99", desc: "Classic banana split sundae with fresh banana, strawberry, chocolate syrup, and whip.", image: "/images/menu/items/banana-split-special.jpg" },
    { name: "Fudge Brownie Supreme", price: "$5.99", desc: "Decadent fudge brownie pieces served over creamy soft serve.", image: "/images/menu/items/fudge-brownie-supreme-special.jpg" },
    { name: "Nut Parfait", price: "$5.99", desc: "Layered soft serve with chocolate fudge and crunchy mixed nuts.", image: "/images/menu/items/nut-parfait-special.jpg" },
    { name: "Turtle", price: "$5.99", desc: "Warm caramel, chocolate fudge, and pecans over soft serve.", popular: true, image: "/images/menu/items/turtle-special.jpg" },
    { name: "Strawberry Shortcake", price: "$5.99", desc: "Sweet strawberries over soft sponge cake and soft serve.", image: "/images/menu/items/strawberry-shortcake-special.jpg" },
    { name: "Mocha Mudslide", price: "$5.99", desc: "A rich coffee, chocolate fudge, and cookie crumb creation.", image: "/images/menu/items/mocha-mudslide-special.jpg" }
  ],

  "frost": [
    { name: "Cookie Dough Frost", price: "Jr: $4.29 | Sm: $4.89 | Med: $5.49 | Lg: $6.49", desc: "Blended soft serve with cookie dough chunks.", image: "/images/menu/items/cookie-dough-frost.jpg", popular: true },
    { name: "Oreo Frost", price: "Jr: $4.29 | Sm: $4.89 | Med: $5.49 | Lg: $6.49", desc: "Blended soft serve with Oreo crumbs.", image: "/images/menu/items/oreo-frost.jpg", popular: true },
    { name: "Reese's Frost", price: "Jr: $4.29 | Sm: $4.89 | Med: $5.49 | Lg: $6.49", desc: "Blended soft serve with Reese's Peanut Butter Cup chunks.", image: "/images/menu/items/reeses-frost.jpg", popular: true },
    { name: "M&M Frost", price: "Jr: $4.29 | Sm: $4.89 | Med: $5.49 | Lg: $6.49", desc: "Blended soft serve with mini M&M candies.", image: "/images/menu/items/mm-frost.jpg", popular: true },
    { name: "Snickers Frost", price: "Jr: $4.29 | Sm: $4.89 | Med: $5.49 | Lg: $6.49", desc: "Blended soft serve with Snickers chunks.", image: "/images/menu/items/snickers-frost.jpg" },
    { name: "Strawberry Frost", price: "Jr: $4.29 | Sm: $4.89 | Med: $5.49 | Lg: $6.49", desc: "Blended soft serve with sweet strawberries.", image: "/images/menu/items/strawberry-frost.jpg" },
    { name: "Mint Frost", price: "Jr: $4.29 | Sm: $4.89 | Med: $5.49 | Lg: $6.49", desc: "Blended soft serve with cool mint flavor.", image: "/images/menu/items/mint-frost.jpg" },
    { name: "Heath Frost", price: "Jr: $4.29 | Sm: $4.89 | Med: $5.49 | Lg: $6.49", desc: "Blended soft serve with crunchy Heath bar pieces.", image: "/images/menu/items/heath-frost.jpg" },
    { name: "NY Cheesecake Frost", price: "Jr: $4.29 | Sm: $4.89 | Med: $5.49 | Lg: $6.49", desc: "Blended soft serve with NY cheesecake chunks.", image: "/images/menu/items/ny-cheesecake.jpg" },
    { name: "Butterfinger Frost", price: "Jr: $4.29 | Sm: $4.89 | Med: $5.49 | Lg: $6.49", desc: "Blended soft serve with crunchy Butterfinger pieces.", image: "/images/menu/items/butterfinger-frost.jpg" },
    { name: "Apple Pie Frost", price: "Jr: $4.29 | Sm: $4.89 | Med: $5.49 | Lg: $6.49", desc: "Blended soft serve with spiced apple pie filling.", image: "/images/menu/items/apple-pie-frost.jpg" },
    { name: "Nerds Frost", price: "Jr: $4.29 | Sm: $4.89 | Med: $5.49 | Lg: $6.49", desc: "Blended soft serve with crunchy Nerds candy.", image: "/images/menu/items/nerds-frost.jpg" },
    { name: "Banana Frost", price: "Jr: $4.29 | Sm: $4.89 | Med: $5.49 | Lg: $6.49", desc: "Blended soft serve with fresh banana.", image: "/images/menu/items/banana-frost.jpg" },
    { name: "Brownie Frost", price: "Jr: $4.29 | Sm: $4.89 | Med: $5.49 | Lg: $6.49", desc: "Blended soft serve with rich brownie pieces.", image: "/images/menu/items/brownie-frost.jpg" },
    { name: "Chocolate Chip Frost", price: "Jr: $4.29 | Sm: $4.89 | Med: $5.49 | Lg: $6.49", desc: "Blended soft serve with chocolate chips.", image: "/images/menu/items/chocolate-chip-frost.jpg" }
  ],

  "specialty-frost": [
    { name: "Fudge Brownie Supreme Frost", price: "$6.99", desc: "Rich fudge swirled with creamy vanilla and topped with chunks of decadent brownie.", image: "/images/menu/items/fudge-brownie-frost.jpg", popular: true },
    { name: "Turtle Frost", price: "$6.99", desc: "Creamy vanilla soft serve topped with crunchy pecans and a drizzle of caramel, layered over rich chocolate fudge.", image: "/images/menu/items/turtle-frost.jpg", popular: true },
    { name: "Banana Split Frost", price: "$6.99", desc: "Creamy vanilla ice cream topped with fresh banana slices, strawberries, and a drizzle of chocolate syrup.", image: "/images/menu/items/banana-split-frost.jpg", popular: true },
    { name: "Pumpkin Pie Frost", price: "$6.99", desc: "Seasonal pumpkin pie flavor. Fall Exclusive.", image: "/images/menu/items/pumpkin-pie-frost.jpg" }
  ],

  "floats": [
    { name: "Coke ", price: "Sm: $4.19 | Med: $4.99 | Lg: $5.99", desc: "Classic Coke with creamy vanilla soft serve floating inside.", image: "/images/menu/items/coke-float.jpg" },
    { name: "Diet Coke ", price: "Sm: $4.19 | Med: $4.99 | Lg: $5.99", desc: "Diet Coke with creamy vanilla soft serve.", image: "/images/menu/items/diet-coke-float.jpg" },
    { name: "Sprite ", price: "Sm: $4.19 | Med: $4.99 | Lg: $5.99", desc: "Sprite with creamy vanilla soft serve.", image: "/images/menu/items/sprite-float.jpg" },
    { name: "Mellow Yellow ", price: "Sm: $4.19 | Med: $4.99 | Lg: $5.99", desc: "Mellow Yellow with creamy vanilla soft serve.", image: "/images/menu/items/mellow-yellow-float.jpg" },
    { name: "Root Beer ", price: "Sm: $4.19 | Med: $4.99 | Lg: $5.99", desc: "Root Beer with creamy vanilla soft serve.", image: "/images/menu/items/root-beer-float.jpg" },
    { name: "Pibb ", price: "Sm: $4.19 | Med: $4.99 | Lg: $5.99", desc: "Pibb Xtra with creamy vanilla soft serve.", image: "/images/menu/items/pibb-float.jpg" }
  ],

  "dipping-dots": [
    { name: "Chocolate ", price: "$5.25", desc: "Rich chocolate flavored Dippin Dots.", image: "/images/menu/items/chocolate-dipping-dots.jpg" },
    { name: "Cookies & Cream ", price: "$5.25", desc: "Classic cookies and cream flavored Dippin Dots.", image: "/images/menu/items/cookies-cream-dipping-dots.jpg" },
    { name: "Rainbow ", price: "$5.25", desc: "Vibrant and fruity rainbow flavored Dippin Dots.", image: "/images/menu/items/rainbow-dipping-dots.jpg" },
    { name: "Cookie Dough ", price: "$5.25", desc: "Sweet cookie dough flavored Dippin Dots.", image: "/images/menu/items/cookie-dough-dipping-dots.jpg" },
    { name: "Cotton Candy ", price: "$5.25", desc: "Sweet spun-sugar flavor cotton candy Dippin Dots.", image: "/images/menu/items/cotton-candy-dipping-dots.jpg" },
    { name: "Birthday Cake ", price: "$5.25", desc: "Celebratory birthday cake flavored Dippin Dots.", image: "/images/menu/items/birthday-cake-dipping-dots.jpg" },
    { name: "Banana Split ", price: "$5.25", desc: "Fruity banana split flavored Dippin Dots.", image: "/images/menu/items/banana-split-dipping-dots.jpg" }
  ],

  "slushies": [
    { name: "Rainbow Slushy", price: "Jr: $2.09 | Sm: $2.69 | Med: $3.09 | Lg: $3.49", desc: "Vibrant multicolored rainbow slushy.", image: "/images/menu/items/rainbow-slushy.jpg", popular: true },
    { name: "Lemon Lime Slushy", price: "Jr: $2.09 | Sm: $2.69 | Med: $3.09 | Lg: $3.49", desc: "Tangy and sweet lemon lime slushy.", image: "/images/menu/items/lemon-lime-slushy.jpg" },
    { name: "Grape Slushy", price: "Jr: $2.09 | Sm: $2.69 | Med: $3.09 | Lg: $3.49", desc: "Sweet grape-flavored slushy.", image: "/images/menu/items/grape-slushy.jpg" },
    { name: "Orange Slushy", price: "Jr: $2.09 | Sm: $2.69 | Med: $3.09 | Lg: $3.49", desc: "Fruity orange-flavored slushy.", image: "/images/menu/items/orange-slushy.jpg" },
    { name: "Blue Raspberry Slushy", price: "Jr: $2.09 | Sm: $2.69 | Med: $3.09 | Lg: $3.49", desc: "Sweet and sour blue raspberry slushy.", image: "/images/menu/items/blue-raspberry-slushy.jpg", popular: true },
    { name: "Cherry Slushy", price: "Jr: $2.09 | Sm: $2.69 | Med: $3.09 | Lg: $3.49", desc: "Fruity cherry-flavored slushy.", image: "/images/menu/items/cherry-slushy.jpg" }
  ],

  "freezes": [
    { name: "Blue Raspberry Freeze", price: "Sm: $4.19 | Med: $4.99 | Lg: $5.99", desc: "Icy blue raspberry freeze.", image: "/images/menu/items/blue-raspberry-freeze.jpg" },
    { name: "Cherry Freeze", price: "Sm: $4.19 | Med: $4.99 | Lg: $5.99", desc: "Icy sweet cherry freeze.", image: "/images/menu/items/cherry-freeze.jpg" },
    { name: "Lemon Lime Freeze", price: "Sm: $4.19 | Med: $4.99 | Lg: $5.99", desc: "Icy citrusy lemon lime freeze.", image: "/images/menu/items/lemon-lime-freeze.jpg" },
    { name: "Orange Freeze", price: "Sm: $4.19 | Med: $4.99 | Lg: $5.99", desc: "Icy refreshing orange freeze.", image: "/images/menu/items/orange-freeze.jpg" },
    { name: "Grape Freeze", price: "Sm: $4.19 | Med: $4.99 | Lg: $5.99", desc: "Icy sweet grape freeze.", image: "/images/menu/items/grape-freeze.jpg" },
    { name: "Lemonade Freeze", price: "Sm: $4.19 | Med: $4.99 | Lg: $5.99", desc: "Icy sweet lemonade freeze.", image: "/images/menu/items/lemonade-freeze.jpg" }
  ],

  "sides": [
    { name: "French Fries", price: "$2.99", desc: "Crispy golden french fries.", image: "/images/menu/items/french-fries.jpg" },
    { name: "Cheese Fries", price: "$3.74", desc: "Golden french fries smothered in warm cheese sauce.", image: "/images/menu/items/cheese-fries.jpg" },
    { name: "Mozzarella Cheese Sticks", price: "$5.19", desc: "Crispy breaded mozzarella cheese sticks.", image: "/images/menu/items/mozzarella-sticks.jpg" },
    { name: "Mac & Cheese Bites", price: "$5.49", desc: "Crispy breaded macaroni and cheese bites.", image: "/images/menu/items/mac-cheese-bites.jpg" },
    { name: "Spicy Cheese Balls", price: "$5.49", desc: "Crispy spicy cheddar cheese balls.", image: "/images/menu/items/spicy-cheese-balls.jpg" },
    { name: "Zucchini", price: "$5.19", desc: "Fresh breaded zucchini slices fried golden.", image: "/images/menu/items/zucchini.jpg" },
    { name: "Mushrooms", price: "$5.19", desc: "Crispy breaded mushrooms fried to perfection.", image: "/images/menu/items/fried-mushrooms.jpg" },
    { name: "Onion Rings", price: "$5.19", desc: "Sweet onion rings in a crispy batter.", image: "/images/menu/items/onion-rings.jpg" },
    { name: "Tater Kegs", price: "$5.49", desc: "Jumbo stuffed tater tots.", image: "/images/menu/items/tater-kegs.jpg" },
    { name: "Cheese Curds", price: "$5.49", desc: "Wisconsin white cheddar cheese curds fried golden.", image: "/images/menu/items/cheese-curds.jpg" }
  ],

  "combos": [
    { name: "Double Cheese Burger Combo", price: "$10.99", desc: "Double cheese burger combo. Includes fries & small drink.", image: "/images/menu/items/double-cheeseburger-combo.jpg" },
    { name: "Tenderloins Combo", price: "$10.49", desc: "Crispy pork tenderloin combo. Includes fries & small drink.", image: "/images/menu/items/tenderloins-combo.jpg" }
  ],

  "beverages": [
    { name: "Coke", price: "Jr: $2.09 | Sm: $2.29 | Med: $2.49 | Lg: $2.89", desc: "Classic Coca-Cola.", image: "/images/menu/items/coke.jpg" },
    { name: "Diet Coke", price: "Jr: $2.09 | Sm: $2.29 | Med: $2.49 | Lg: $2.89", desc: "Sugar-free Diet Coke.", image: "/images/menu/items/diet-coke.jpg" },
    { name: "Sprite", price: "Jr: $2.09 | Sm: $2.29 | Med: $2.49 | Lg: $2.89", desc: "Lemon-lime Sprite.", image: "/images/menu/items/sprite.jpg" },
    { name: "Mellow Yellow", price: "Jr: $2.09 | Sm: $2.29 | Med: $2.49 | Lg: $2.89", desc: "Citrus-flavored Mello Yello.", image: "/images/menu/items/mellow-yellow.jpg" },
    { name: "Pibb Xtra", price: "Jr: $2.09 | Sm: $2.29 | Med: $2.49 | Lg: $2.89", desc: "Spicy cherry Pibb Xtra.", image: "/images/menu/items/pibb-xtra.jpg" },
    { name: "Root Beer", price: "Jr: $2.09 | Sm: $2.29 | Med: $2.49 | Lg: $2.89", desc: "Rich and creamy Root Beer.", image: "/images/menu/items/root-beer.jpg" },
    { name: "Lemonade", price: "Jr: $2.09 | Sm: $2.29 | Med: $2.49 | Lg: $2.89", desc: "Refreshing sweet lemonade.", image: "/images/menu/items/lemonade.jpg" },
    { name: "Sweet Tea", price: "Jr: $2.09 | Sm: $2.29 | Med: $2.49 | Lg: $2.89", desc: "Southern-style sweet tea.", image: "/images/menu/items/sweet-tea.jpg" },
    { name: "Unsweetened Tea", price: "Jr: $2.09 | Sm: $2.29 | Med: $2.49 | Lg: $2.89", desc: "Classic unsweetened iced tea.", image: "/images/menu/items/unsweetened-tea.jpg" }
  ],

  "burgers": [
    { name: "Grilled Chicken", price: "$5.99", desc: "Juicy grilled chicken breast on a soft bun.", image: "/images/menu/items/grilled-chicken.jpg" },
    { name: "Breaded Chicken", price: "$5.99", desc: "Crispy breaded chicken breast on a soft bun.", image: "/images/menu/items/breaded-chicken.jpg" },
    { name: "Spicy Chicken Sandwich", price: "$5.99", desc: "Spicy breaded chicken breast on a soft bun.", image: "/images/menu/items/spicy-chicken.jpg" },
    { name: "BBQ Sandwich", price: "$5.99", desc: "Tender, saucy pulled barbecue pork on a bun.", image: "/images/menu/items/bbq-sandwich.jpg" },
    { name: "Fish Sandwich", price: "$6.99", desc: "Golden fried fish fillet with lettuce on a bun.", image: "/images/menu/items/fish-sandwich.jpg" },
    { name: "Chicken Wrap", price: "$6.99", desc: "Crispy chicken with lettuce and dressing in a warm wrap.", image: "/images/menu/items/chicken-wrap.jpg" },
    { name: "Hamburger", price: "$5.59", desc: "Single classic hamburger patty on a bun.", image: "/images/menu/items/hamburger.jpg" },
    { name: "Double Burger", price: "$6.99", desc: "Double hamburger patties on a bun.", image: "/images/menu/items/double-hamburger.jpg" },
    { name: "Cheese Burger", price: "$6.34", desc: "Single classic cheeseburger with melted american cheese.", image: "/images/menu/items/cheeseburger.jpg" },
    { name: "Double Cheese Burger", price: "$7.99", desc: "Double cheeseburger patties with melted cheese.", image: "/images/menu/items/double-cheeseburger.jpg" },
    { name: "Chicken Salad", price: "$5.99", desc: "Cold, creamy chicken salad served fresh.", image: "/images/menu/items/chicken-salad.jpg" },
    { name: "Tenderloins", price: "$6.49", desc: "Giant crispy breaded pork tenderloin on a bun.", image: "/images/menu/items/tenderloins.jpg" },
    { name: "Hot Dog", price: "$3.99", desc: "Classic grilled hot dog in a soft bun.", image: "/images/menu/items/hot-dog.jpg" },
    { name: "Corn Dog", price: "$3.39", desc: "Sweet honey-battered fried corn dog.", image: "/images/menu/items/corn-dog.jpg" },
    { name: "Chicken Tenders", price: "$5.99", desc: "Crispy breaded chicken breast tenders.", image: "/images/menu/items/chicken-tenders.jpg" }
  ],

  "kids-meal": [
    { name: "Hot Dog ", price: "$6.99", desc: "Kid's hot dog meal.", image: "/images/menu/items/kids-hot-dog.jpg" },
    { name: "Corn Dog ", price: "$6.99", desc: "Kid's corn dog meal.", image: "/images/menu/items/kids-corn-dog.jpg" },
    { name: "Burger ", price: "$6.99", desc: "Kid's hamburger meal.", image: "/images/menu/items/kids-burger.jpg" },
    { name: "Chicken Tenders ", price: "$6.99", desc: "Kid's chicken tenders meal.", image: "/images/menu/items/kids-chicken-tenders.jpg" }
  ]
};

// Get category by id
export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(cat => cat.id === id);
};

// Get menu items by category id
export const getMenuByCategory = (id: string): MenuItem[] => {
  return menuData[id] || [];
};