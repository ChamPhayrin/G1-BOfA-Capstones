// Import ArticlePrev Component
import ArticlePrev from "../components/ArticlePrev";

// Page component holding all of our articles
export default function Articles() {
  // Holds data on our different articles for us to pass as props when mapping over each to create list of ArticlePrev components
  const articleData = [
    {
      technology: "Facebook",
      desc: "Connect with friends, family, and the world!",
      logo: "fb-logo.png",
    },
    {
      technology: "Zoom",
      desc: "Meet, chat, and collaborate from anywhere!",
      logo: "zoom-logo.png",
    },
    {
      technology: "Google",
      desc: "Search, explore, and discover everything online!",
      logo: "google-logo.png",
    },
    {
      technology: "Gmail",
      desc: "Fast, free, and secure email for everyone!",
      logo: "gmail-logo.png",
    },
    {
      technology: "Amazon",
      desc: "Shop millions of products, fast and easy!",
      logo: "amazon-logo.png",
    },
    {
      technology: "YouTube",
      desc: "Watch, learn, and share videos worldwide!",
      logo: "youtube-logo.webp",
    },
    {
      technology: "Google Maps",
      desc: "Navigate your world with ease!",
      logo: "google-maps-logo.png",
    },
  ];

  return (
    <main className="p-4">
      <h1
        className="text-center text-4xl font-bold mt-6 mb-3"
        aria-label="Technology Articles"
      >
        Tech Articles
      </h1>
      <h2
        className="text-center text-2xl mb-8"
        aria-label="Explore our guides on essential technology"
      >
        Read our articles to learn how to use fundamental technologies which are
        essential in our modern world!
      </h2>

      {articleData.map((article, index) => (
        <ArticlePrev
          key={index}
          technology={article.technology}
          desc={article.desc}
          logo={article.logo}
        />
      ))}
    </main>
  );
}
