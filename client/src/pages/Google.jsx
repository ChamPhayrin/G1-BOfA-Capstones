import TechArticle from "./TechArticle";

export default function Google() {
  // This object holds data we will pass as a prop to our TechArticle components, this will make our articles dynamic
  const googleData = {
    articleTitle: "Google",
    definition:
      "Think of Google like a super-smart librarian who can find answers to anything you ask—instantly.\n\n" +
      "Ever wondered what time your favorite TV show comes on? Google can tell you.\n" +
      "Want to find a great recipe for apple pie? Google has thousands of them.\n" +
      "Need to look up the weather, directions, or nearby restaurants? Google does it all.\n\n" +
      "Google is like a giant book of knowledge, always open, always ready to help.",

    whyUse: [
      "Find answers to anything – Whether it’s health advice, recipes, or history, Google knows it.",
      "Check the news & weather – Stay updated without waiting for the newspaper.",
      "Find places & directions – Never get lost again—Google can give you step-by-step directions.",
      "Learn how to do something – Need to fix a leaky faucet? Learn with Google’s step-by-step guides.",
      "Completely free – No signup, no cost, just type and search.",
    ],

    steps: [
      {
        title: "Opening Google",
        instructions: [
          "Open your internet browser (Google Chrome, Safari, or Microsoft Edge).",
          "Click on the address bar at the top.",
          "Type www.google.com and press Enter.",
        ],
        tip: "You’re now on Google’s homepage!",
      },
      {
        title: "Searching for Anything",
        instructions: [
          "You'll see a big white box in the middle of the screen.",
          "Click inside that box and type what you want to know.",
          "Example searches: 'Best apple pie recipe', 'What’s the weather today?', 'How to send an email on Gmail', 'What year did Elvis Presley die?'.",
          "Press Enter or click the 🔍 Search button.",
          "Click on the result that looks most helpful.",
        ],
        tip: "The first few results are usually the best ones.",
      },
      {
        title: "Finding Directions on Google",
        instructions: [
          "Type 'Directions to [place]' (example: 'Directions to Walmart').",
          "Google will show a map with the best route.",
          "Click 'Start' if using a smartphone, and Google will guide you step by step!",
        ],
        tip: "Google Maps integration makes it easy to navigate anywhere!",
      },
      {
        title: "Finding Images & Videos",
        instructions: [
          "Looking for a picture? Type what you want in Google (example: 'Golden Retriever puppies').",
          "Click 'Images' at the top.",
          "Want to watch a video? Type your topic, then click 'Videos' or go to YouTube.com.",
        ],
        tip: "Google can search for specific media like images and videos with a single click!",
      },
    ],

    videoUrl: "https://www.youtube.com/embed/UIxJ3aCb25k?si=kw8ed0LoVHUlRkXf",
  };

  // Using spread operator to dynamically make all key:value pairs props in our component
  return <TechArticle {...googleData} />;
}
