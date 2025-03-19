import TechArticle from "./TechArticle";

export default function Gmail() {
  // This object holds data we will pass as a prop to our TechArticle components, this will make our articles dynamic
  const gmailData = {
    articleTitle: "Gmail",
    logo: "gmail-logo.png",
    definition:
      "Think of Gmail as your personal mailbox—but online. Instead of waiting for letters to come in the mail, emails arrive instantly on your computer or phone. No stamps, no waiting, no trips to the post office—just type, send, and your message arrives in seconds. It’s perfect for staying in touch with family, sending messages to businesses, or signing up for things like doctor’s appointments and newsletters.\n\nGmail is like your home mailbox, but faster, safer, and always available.",

    whyUse: [
      "Keep in touch with family & friends – Send messages to kids, grandkids, or old friends without worrying about losing their number.",
      "Get important updates – Many businesses, doctors, and banks use email to send appointment reminders, receipts, or updates—this way, you never miss anything.",
      "Safer than regular mail – Unlike paper mail that can get lost or stolen, Gmail keeps your messages private and secure.",
      "Use it for everything – Want to sign up for Facebook, shop online, or get digital coupons? Most websites ask for an email—this is where Gmail comes in!",
      "It's completely free!",
    ],

    steps: [
      {
        title: "Opening Gmail",
        instructions: [
          "Open your internet browser (Google Chrome, Safari, or Microsoft Edge).",
          "Click on the address bar at the top.",
          "Type www.gmail.com and press Enter.",
        ],
        tip: "If you already have an account, this will take you straight to your inbox. If not, you’ll see a sign-up or login screen.",
      },
      {
        title: "Creating a Gmail Account (Skip if you have one!)",
        instructions: [
          "Click 'Create account' (you’ll see this below the login box).",
          "Choose 'For myself' when asked what type of account you want.",
          "Fill in your first and last name.",
          "Choose an email address—this will be like your 'home address' for email.",
          "Pick a password (write this down somewhere safe!).",
          "Enter your phone number (optional, but recommended) so you can recover your account if you forget your password.",
          "Follow the instructions, then click 'Next' until you reach your inbox.",
        ],
        tip: "Choose an email address that is simple and easy to remember, like 'MarySmith1948@gmail.com'.",
      },
      {
        title: "Logging In to Gmail",
        instructions: [
          "Go to www.gmail.com.",
          "Type your email address and click 'Next'.",
          "Enter your password and click 'Next'.",
        ],
        tip: "If you don’t want to type your password every time, check the box that says 'Stay signed in' before clicking Next.",
      },
      {
        title: "Sending an Email (Super Easy!)",
        instructions: [
          "In Gmail, click on the ✏️ 'Compose' button (usually in the top-left corner).",
          "A new message box will pop up.",
          "Click where it says 'To', then type the email address of the person you want to message.",
          "Click the 'Subject' box and type what your email is about (example: 'Grandma’s Recipe').",
          "Click the big empty box and type your message.",
          "Click the 'Send' button (it looks like a little paper airplane).",
        ],
        tip: "If you forget to add something to your email, you can click 'Undo' right after sending!",
      },
      {
        title: "Reading an Email Someone Sent You",
        instructions: [
          "When you log into Gmail, you’ll see a list of emails.",
          "Click on any email to open and read it.",
          "If you want to reply, click 'Reply', type your message, then hit 'Send'.",
        ],
        tip: "If an email looks suspicious (asking for money or personal info), do not open or reply—just delete it.",
      },
    ],

    videoUrl: "https://www.youtube.com/embed/CtRgwJaW2N4?si=kuBo5ZSKIKV6Eocj",
    finalThoughts:
      "Gmail is just like writing letters—but easier, faster, and more secure. No waiting, no stamps, no lost mail. See messages instantly from family & businesses. Super simple to use, even if you’re new to technology. Give it a try, and soon, you’ll be the one helping others with email!",
  };

  // Using spread operator to dynamically make all key:value pairs props in our component
  return <TechArticle {...gmailData} />;
}
