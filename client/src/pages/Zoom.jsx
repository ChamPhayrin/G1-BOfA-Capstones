import TechArticle from "./TechArticle";

export default function Zoom() {
  // This object holds data we will pass as a prop to our TechArticle components, this will make our articles dynamic
  const zoomData = {
    articleTitle: "Zoom",
    definition:
      "Think of Zoom like a phone call—but with video.\n\n" +
      "Want to see your grandkids’ faces when you talk to them? Zoom lets you do that.\n" +
      "Need to chat with your doctor, church group, or book club? Many now meet over Zoom.\n" +
      "Want to stay connected without traveling? Zoom lets you talk face-to-face from anywhere.\n\n" +
      "Zoom is like having a family gathering, but without anyone having to leave home.",

    whyUse: [
      "See and hear loved ones in real time – No more waiting for visits.",
      "Join church services, book clubs, or family reunions from home – Many groups now meet online.",
      "Talk to doctors without going to the office – Many healthcare providers offer virtual visits.",
      "Works on any device – Use it on a computer, tablet, or smartphone.",
      "It’s free for personal use – No need to pay for casual calls.",
    ],

    steps: [
      {
        title: "Opening Zoom",
        instructions: [
          "Open your internet browser (Google Chrome, Safari, or Microsoft Edge).",
          "Click on the address bar at the top.",
          "Type www.zoom.us and press Enter.",
        ],
        tip: "If you’re using a phone or tablet, download the Zoom app from the App Store or Google Play.",
      },
      {
        title: "Joining a Zoom Meeting",
        instructions: [
          "If a family member, doctor, or group invites you to a Zoom call, they will send you a link.",
          "Click on the Zoom link in your email or message.",
          "A new window will open. Click 'Join with Video' so people can see you.",
          "Click 'Join with Computer Audio' so you can hear and speak.",
        ],
        tip: "If you don’t have a link, click 'Join a Meeting' on the Zoom website and type in the Meeting ID and Passcode (usually sent in an email).",
      },
      {
        title: "Starting Your Own Zoom Call",
        instructions: [
          "Go to www.zoom.us and click 'Sign Up' (it’s free!).",
          "Enter your email, name, and password to create an account.",
          "Once signed in, click 'New Meeting' to start a call.",
          "Click 'Invite' and send the link to your family or friends.",
        ],
        tip: "You can also schedule meetings in advance by clicking 'Schedule' and picking a date and time.",
      },
      {
        title: "Using Zoom’s Basic Features",
        instructions: [
          "Turning Your Camera On/Off – Click the 📷 camera icon at the bottom of the screen.",
          "Muting & Unmuting – Click the 🎤 microphone icon to mute/unmute yourself.",
          "Chatting in Zoom – Click the 💬 'Chat' button to type messages if you don’t want to talk.",
          "Leaving a Call – Click the 'Leave Meeting' button when you're done.",
        ],
        tip: "If the video freezes or you can’t hear, leave the meeting and rejoin—it usually fixes the problem.",
      },
    ],

    videoUrl: "https://www.youtube.com/embed/Fx7P8qbCyCk?si=tl2cLI6i3FFOuMqF",
    finalThoughts:
      "Zoom makes staying connected easier than ever. See and talk to family & friends anytime. Join doctor appointments, church services, and social groups from home. No complicated setup—just click a link and join!",
  };

  // Using spread operator to dynamically make all key:value pairs props in our component
  return <TechArticle {...zoomData} />;
}
