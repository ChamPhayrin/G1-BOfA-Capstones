import React from "react";
import Welcome from "../components/Welcome";
import SocialCard from "../components/SocialCard";
import Article from "../components/Article";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-5 bg-gray-50 w-full">
      {/* Hero Image */}
      <div className="w-full max-w-6xl">
        <img
          src="https://www.familyeducation.com/sites/default/files/2019-07/iStock-958689848.jpg"
          alt="Elderly people using technology"
          className="w-full h-72 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Home Title */}
      <h1 className="text-5xl font-bold mt-10">Home</h1>

      {/* Welcome Section */}
      <div className="mt-6 w-3/4 max-w-4xl">
        <Welcome text="Technology isn’t just for the young—it’s for everyone! Stay connected, explore new opportunities, and discover how easy and fun it can be to learn and engage online. Join us today and take the first step toward mastering the digital world!" />
      </div>

      {/* Social Cards */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 w-3/4 max-w-4xl">
        {/* Facebook */}
        <SocialCard
          logo="f"
          title="Facebook"
          text="Connect with family, discover new communities, and share moments that matter."
          buttonText="Visit Facebook"
          onClick={() => window.open("https://www.facebook.com", "_blank")}
        />

        {/* Gmail */}
        <SocialCard
          logo="📧"
          title="Gmail"
          text="Stay in touch and manage your emails easily with Gmail."
          buttonText="Check Inbox"
          onClick={() => window.open("https://mail.google.com", "_blank")}
        />

        {/* YouTube */}
        <SocialCard
          logo="▶️"
          title="YouTube"
          text="Watch, learn, and explore millions of videos on YouTube."
          buttonText="Watch Now"
          onClick={() => window.open("https://www.youtube.com", "_blank")}
        />

        {/* Google */}
        <SocialCard
          logo="🔍"
          title="Google"
          text="Search for anything, find answers, and explore the web."
          buttonText="Search Now"
          onClick={() => window.open("https://www.google.com", "_blank")}
        />
      </div>

      {/* Articles Section */}
      <h2 className="text-3xl font-bold mt-16">Latest Tech Articles</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 w-3/4 max-w-4xl">
        {/* Article 1: Online Safety */}
        <Article
          category="Online Safety"
          title="5 Tips To Keep Seniors Safe Online"
          description="Discover essential tips to protect yourself from online threats."
          link="https://www.linkedin.com/pulse/5-tips-keep-seniors-safe-online-amica-senior-lifestyles-ox6oc"
        />

        {/* Article 2: Supporting Technology Use */}
        <Article
          category="Technology Support"
          title="Supporting Older People to Use Technology"
          description="Learn how to assist seniors in embracing modern technology safely."
          link="https://www.linkedin.com/pulse/supporting-older-people-use-technology-michael-jeffrey-xyrhc"
        />

        {/* Article 3: Protecting Against Scams */}
        <Article
          category="Fraud Protection"
          title="Protecting Seniors From Scams"
          description="Understand common scams targeting seniors and how to avoid them."
          link="https://www.linkedin.com/pulse/protecting-seniors-from-scams-eydle-aph2e"
        />

        {/* Article 4: Social Media Safety */}
        <Article
          category="Social Media Safety"
          title="Review Online Safety Tips for Seniors"
          description="Stay safe on social media platforms with these essential tips."
          link="https://www.linkedin.com/pulse/stay-safe-online-2025-6-simple-cybersecurity-tips-kevin-richardson-xodmc/"
        />
      </div>
    </div>
  );
};

export default Home;
