import TechArticle from "./TechArticle";

export default function YouTube() {
  // This object holds data we will pass as a prop to our TechArticle components, this will make our articles dynamic
  const youtubeData = {
    articleTitle: "YouTube",
    definition:
      "Think of YouTube like your own personal TV, but instead of flipping through channels, you can watch exactly what you want, whenever you want. Want to learn how to bake the perfect apple pie? YouTube has a video for that. Need to fix something around the house? YouTube has thousands of step-by-step guides. Just want to relax and watch funny videos or old TV clips? YouTube has endless entertainment.\n\nYouTube is like a giant library of videos on every topic you can imagine.",

    whyUse: [
      "Learn anything – Cooking, gardening, fixing things, history, music—it's all there!",
      "Watch old shows & music – Find classic TV shows, songs, and performances from your younger years.",
      "Stay informed – Watch news clips, educational talks, and helpful tips.",
      "It’s completely free – You don’t need to pay to watch videos!",
    ],

    steps: [
      {
        title: "Opening YouTube",
        instructions: [
          "Open your internet browser (Google Chrome, Safari, or Microsoft Edge).",
          "Click on the address bar at the top.",
          "Type www.youtube.com and press Enter.",
        ],
        tip: "YouTube works best in Google Chrome, but any modern browser will work fine.",
      },
      {
        title: "Searching for Videos",
        instructions: [
          "You'll see a big search bar at the top of the page.",
          "Click inside that box and type what you want to watch.",
          "Example searches: 'How to bake an apple pie', 'Classic Frank Sinatra songs', 'Exercises for seniors', 'How to set up a Facebook account'.",
          "Press Enter or click the 🔍 Search button.",
          "Click on a video thumbnail (picture) to watch it.",
        ],
        tip: "Videos from trusted sources like cooking channels or news stations are often the best ones.",
      },
      {
        title: "Playing & Pausing a Video",
        instructions: [
          "To play a video: Click on it.",
          "To pause the video: Click on the video again (or press the spacebar).",
          "To make it bigger: Click the 🔳 square button in the bottom right corner (this is 'Full Screen' mode).",
        ],
        tip: "If a video is too loud or too quiet, use the volume button at the bottom of the video.",
      },
      {
        title: "Subscribing to a Channel (Optional, but Fun!)",
        instructions: [
          "Click on a video from someone you like.",
          "Under the video, click 'Subscribe' (it’s a red button).",
          "Now, their videos will show up on your YouTube homepage!",
        ],
        tip: "You don’t have to subscribe to watch videos—this just makes it easier to find them later.",
      },
    ],

    videoUrl: "https://www.youtube.com/embed/i2xxV91um8w?si=1nRuW1I9AwngaSdg",
  };

  // Using spread operator to dynamically make all key:value pairs props in our component
  return <TechArticle {...youtubeData} />;
}
