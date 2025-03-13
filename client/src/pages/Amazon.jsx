import TechArticle from "./TechArticle";

export default function Amazon() {
  // This object holds data we will pass as a prop to our TechArticle components, this will make our articles dynamic
  const amazonData = {
    articleTitle: "Amazon",
    definition:
      "Amazon is like a giant shopping mall, but instead of walking from store to store, you can shop from the comfort of your home.\n\n" +
      "Need groceries, clothes, books, or electronics? Amazon has it all.\n" +
      "Want fast shipping? Many items arrive in one or two days.\n" +
      "Prefer not dealing with crowded stores? Order online and get it delivered to your door.\n\n" +
      "Amazon makes shopping easier, faster, and often cheaper than going to a physical store.",

    whyUse: [
      "Shop from home – No need to drive to the store or stand in long lines.",
      "Find almost anything – Clothes, food, books, tools, electronics—Amazon has it all.",
      "Read reviews before you buy – See what other shoppers say before making a decision.",
      "Fast, reliable delivery – Many items arrive in one or two days.",
      "Safe & secure payments – Pay with your debit/credit card, or even use gift cards.",
    ],

    steps: [
      {
        title: "Opening Amazon",
        instructions: [
          "Open your internet browser (Google Chrome, Safari, or Microsoft Edge).",
          "Click on the address bar at the top.",
          "Type www.amazon.com and press Enter.",
        ],
        tip: "You’re now on Amazon’s homepage!",
      },
      {
        title: "Creating an Amazon Account",
        instructions: [
          "On the Amazon homepage, click 'Sign In' (top-right corner).",
          "Click 'Create Your Amazon Account'.",
          "Enter your name, email, and a password (write it down somewhere safe!).",
          "Follow the instructions and verify your email if asked.",
        ],
        tip: "If you ever forget your password, click 'Forgot Password?' on the login screen to reset it.",
      },
      {
        title: "Searching for Items on Amazon",
        instructions: [
          "Click on the Search Bar at the top of the Amazon page.",
          "Type what you’re looking for (example: 'Comfortable walking shoes for seniors') and press Enter.",
          "Browse through the options—click on an item to see details.",
          "Scroll down to read customer reviews and ratings before buying.",
        ],
        tip: "Look for items with lots of good reviews (4 stars or more).",
      },
      {
        title: "Adding Items to Your Cart",
        instructions: [
          "When you find something you like, click 'Add to Cart'.",
          "If you want more items, continue shopping.",
          "Click the 🛒 Cart icon (top-right corner) to review your selections.",
        ],
        tip: "You can remove items anytime before you pay.",
      },
      {
        title: "Placing an Order",
        instructions: [
          "In your cart, click 'Proceed to Checkout'.",
          "Enter your shipping address (where Amazon will deliver your order).",
          "Choose a payment method (credit/debit card, Amazon gift card, or bank account).",
          "Click 'Place Your Order'—you're done!",
        ],
        tip: "If you don’t want to type in your card info every time, check 'Save this payment method'.",
      },
      {
        title: "Tracking Your Order",
        instructions: [
          "Click 'Returns & Orders' (top-right corner of Amazon’s page).",
          "Find your most recent order.",
          "Click 'Track Package' to see when it will arrive.",
        ],
        tip: "Amazon will email you updates about your order’s progress.",
      },
      {
        title: "Returning an Item (If Needed)",
        instructions: [
          "Click 'Returns & Orders' at the top.",
          "Find the item you want to return and click 'Return or Replace Items'.",
          "Choose a reason for the return and follow Amazon’s instructions.",
          "Amazon will either give you a refund or replacement, depending on the item.",
        ],
        tip: "Many items can be returned for free within 30 days!",
      },
    ],
    videoUrl: "https://www.youtube.com/embed/iSvRIeYYNl4?si=f-csC8pyq0pPIpA6",
    finalThoughts:
      "Amazon makes shopping easier, faster, and more convenient than ever. No need to drive to the store—everything comes to you. Find great deals and read reviews before buying. Fast, secure, and easy to use. Give it a try—soon, you’ll be ordering with confidence!",
  };

  // Using spread operator to dynamically make all key:value pairs props in our component
  return <TechArticle {...amazonData} />;
}
