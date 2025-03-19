import TechArticle from "./TechArticle";

export default function Facebook() {
  // This object holds data we will pass as a prop to our TechArticle components, this will make our articles dynamic
  const facebookData = {
    // FB Heading
    articleTitle: "Facebook",
    logo: "fb-logo.png",
    // What's FB
    definition:
      "Think of Facebook like a giant community bulletin board, but instead of walking down to the local center to check it, you can see it from the comfort of your home. It’s a place where your kids and grandkids post pictures—so you don’t have to wait for holiday cards in the mail. It lets you stay in touch with old friends—maybe even that buddy from high school or a cousin you haven’t seen in years. You can join groups for hobbies you love—gardening, classic cars, cooking, church groups, you name it. In short? Facebook helps you stay connected without having to figure out texting, group chats, or a hundred different apps.",
    // List of reasons to use FB
    whyUse: [
      "See your grandkids grow up – Instead of waiting for family to send photos, you’ll see them in real time. First steps, birthdays, school plays—it’s all there!",
      "Reconnect with old friends – Ever wonder what happened to your best friend from the 70s? Facebook makes it easy to find them.",
      "Join communities for things you love – Love classic cars, knitting, cooking, music, or church groups? There are Facebook groups where people just like you share tips and chat daily.",
      "Easier than you think – If you can dial a phone or send a letter, you can use Facebook. It’s just a few clicks.",
    ],
    steps: [
      {
        title: "Getting to Facebook",
        instructions: [
          "Open Google, Safari, or whatever internet browser you use (it's the place where you type in website names).",
          "Type www.facebook.com and press Enter.",
          'You’ll see a big blue screen with "Log In" and "Sign Up" options.',
        ],
      },
      {
        title: "Making an Account (Skip this if you already have one)",
        instructions: [
          "Click “Sign Up”.",
          "Enter your name, email, and a password you’ll remember (write it down if needed).",
          "Facebook will send you an email or text message—just click the link inside to confirm.",
        ],
        tip: 'Pick a password that’s easy for you but hard for others. A trick? Try "SunnyFlorida2024!" if you love Florida, or "ClassicCars1958!" if you’re a car fan.',
      },
      {
        title: "Logging In",
        instructions: [
          "Go to www.facebook.com.",
          "Enter your email and password.",
          "Click Log In—you’re in!",
        ],
        tip: 'If you want Facebook to remember your password so you don’t type it every time, check the little box that says "Remember Me".',
      },
      {
        title: "Seeing Your Family’s Photos",
        instructions: [
          "Once logged in, click on the Search Bar at the top.",
          "Type in your son's, daughter’s, or grandkid’s name.",
          'Click their profile and hit "Add Friend".',
          "Once they accept, their photos and posts will start showing up on your News Feed.",
        ],
        tip: 'Your "News Feed" is the main page on Facebook where you’ll see everything your family and friends post. You don’t have to do anything—just scroll down to see updates.',
      },
      {
        title: "Posting a Message",
        instructions: [
          'Click inside the box that says "What\'s on your mind?"',
          "Type your message, like “Happy Birthday, Emma! 🎂”",
          'Click "Post"—your message is now visible to your friends.',
        ],
      },
      {
        title: "Posting a Comment",
        instructions: [
          "Click “Comment” under the photo.",
          'Type your message, like "You look so grown up! Love, Grandma ❤️".',
          "Hit Enter to post it.",
        ],
      },
    ],
    videoUrl: "https://www.youtube.com/embed/xu8rh9Ref4Y?si=920-UcZz0JDkCM5",
    finalThoughts:
      "Facebook might seem tricky at first, but once you get the hang of it, it's just like reading the newspaper—except your family, friends, and favorite hobbies are all inside. Give it a try, and soon enough, you’ll be the one showing others how it’s done!",
  };

  // Using spread operator to dynamically make all key:value pairs props in our component
  return <TechArticle {...facebookData} />;
}
