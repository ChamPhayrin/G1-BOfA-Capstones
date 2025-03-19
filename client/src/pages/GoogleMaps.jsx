import TechArticle from "./TechArticle";

export default function GoogleMaps() {
  // This object holds data we will pass as a prop to our TechArticle components, this will make our articles dynamic
  const googleMapsData = {
    articleTitle: "Google Maps",
    logo: "google-maps-logo.png",
    definition:
      "Think of Google Maps like a digital map and personal guide all in one.\n\n" +
      "Need to find the fastest route to the store? Google Maps will show you.\n" +
      "Want to see what a place looks like before you go? Google Maps has pictures.\n" +
      "Visiting family? Google Maps gives step-by-step directions to get there.\n\n" +
      "It’s like having a GPS, a paper map, and a travel guide—all in your pocket.",

    whyUse: [
      "Find addresses easily – No need to guess or ask for directions.",
      "Get turn-by-turn directions – Whether driving, walking, or taking the bus, Google Maps tells you exactly where to go.",
      "See how long a trip will take – Know before you leave!",
      "Check traffic conditions – Avoid slowdowns and accidents.",
      "Look up restaurants, stores, and landmarks – Find places near you with one search.",
    ],

    steps: [
      {
        title: "Opening Google Maps",
        instructions: [
          "Open your internet browser (Google Chrome, Safari, or Microsoft Edge).",
          "Click on the address bar at the top.",
          "Type www.google.com/maps and press Enter.",
        ],
        tip: "You’re now on Google Maps!",
      },
      {
        title: "How to Find a Place",
        instructions: [
          "You'll see a big search bar at the top of the page.",
          "Click inside that box and type where you want to go.",
          "Example searches: 'Walmart near me', '123 Main Street, Springfield', 'Best Italian restaurant in town'.",
          "Press Enter or click the 🔍 Search button.",
          "Google Maps will show you the location on a map.",
        ],
        tip: "Click on a location’s name to see photos, reviews, and hours of operation.",
      },
      {
        title: "How to Get Directions",
        instructions: [
          "Click the blue 'Directions' button.",
          "In the 'Starting point' box, type your home address.",
          "In the 'Destination' box, type where you want to go.",
          "Click the 🚗 car icon for driving directions.",
          "Google Maps will show step-by-step directions.",
        ],
        tip: "If you're walking or taking the bus, click the 🚶‍♂️ walking icon or 🚌 bus icon instead.",
      },
      {
        title: "How to Use Street View",
        instructions: [
          "Search for an address or place.",
          "Click on the small picture in the bottom left (this is Street View).",
          "A real-life photo of the location will appear!",
          "Click and drag to 'walk' down the street.",
        ],
        tip: "This is great for checking out a store, hotel, or neighborhood before visiting.",
      },
    ],

    videoUrl: "https://www.youtube.com/embed/tui9hq9lfsU?si=-z3XnD_l67n1S4jd",
    finalThoughts:
      "Google Maps is your personal guide to anywhere you want to go. No more getting lost, no more bad directions. Find places, get directions, and see locations before you go. Give it a try, and soon, you’ll be navigating like a pro!",
  };

  // Using spread operator to dynamically make all key:value pairs props in our component
  return <TechArticle {...googleMapsData} />;
}
