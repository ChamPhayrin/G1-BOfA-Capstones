// Tech article page component with enhanced UX design
// that matches the homepage aesthetic
import { Link } from "react-router-dom";

export default function TechArticle({
  articleTitle,
  logo,
  definition,
  whyUse,
  steps,
  videoUrl,
  finalThoughts,
}) {
  return (
    <article className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen pb-16">
      {/* Article Header with Gradient Banner - matching homepage */}
      <header className="bg-gradient-to-r from-sky-600 to-slate-600 text-white py-10 px-6 shadow-lg w-full mb-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <h1 className="text-center font-bold text-4xl pt-5 lg:text-6xl">
            {articleTitle}
          </h1>
          {/* Logo centered over the bottom edge of the header */}
          <div className="flex justify-center mt-4 relative -mb-16">
            <div className="w-24 h-24 md:w-32 md:h-32 lg:w-38 lg:h-38 bg-white rounded-full p-4 shadow-xl">
              <img
                src={logo}
                alt={articleTitle}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main content container */}
      <main className="max-w-5xl mx-auto px-6 pt-10">
        {/* Definition Section with Card Design */}
        <section className="mb-10 mt-14">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-center font-bold text-3xl mb-6 lg:text-5xl text-gray-800">
              What Is{" "}
              <span className="bg-gradient-to-r from-sky-600 to-slate-600 bg-clip-text text-transparent">
                {articleTitle}
              </span>
              ?
            </h2>
            <div className="prose prose-lg lg:prose-xl max-w-none">
              <p className="text-gray-700">{definition}</p>
            </div>
          </div>
        </section>

        {/* Why Use It Section with Card & Icons */}
        <section className="mb-10">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-center font-bold text-3xl mb-6 lg:text-5xl text-gray-800">
              Why You'd Use It
            </h2>
            <p className="text-xl text-center mb-8 text-gray-700">
              Here's why you might actually love {articleTitle}:
            </p>
            {/* Reasons with icon bullets */}
            <ul className="space-y-5">
              {whyUse.map((reason, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-sky-600 to-slate-600 rounded-full flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg lg:text-xl">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Step by Step Instructions Section */}
        <section className="mb-10">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-center font-bold text-3xl mb-6 lg:text-5xl text-gray-800">
              How To Get Started With {articleTitle}
            </h2>
            <p className="mb-8 text-lg text-gray-700">
              Here's step by step instructions on how to access and use{" "}
              {articleTitle}. Follow the listed instructions from top to bottom,
              or find specifically what you're looking for:
            </p>

            {/* Quick Jump Navigation for Steps */}
            <div className="mb-10 p-4 bg-gray-50 rounded-lg">
              <p className="font-medium mb-3 text-gray-700">
                Jump to a section:
              </p>
              <div className="flex flex-wrap gap-2">
                {steps.map((step, index) => (
                  <a
                    key={index}
                    href={`#step-${index}`}
                    className="px-3 py-1 bg-gradient-to-r from-sky-600 to-slate-600 text-white text-sm rounded-full hover:from-sky-700 hover:to-slate-700 transition-colors"
                  >
                    {step.title}
                  </a>
                ))}
              </div>
            </div>

            {/* Steps with visually distinct sections */}
            <div className="space-y-10">
              {steps.map((step, index) => (
                <div
                  key={index}
                  id={`step-${index}`}
                  className="pt-4 border-t border-gray-200 first:border-t-0"
                >
                  {/* Step Number and Title */}
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-sky-600 to-slate-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {step.title}
                    </h3>
                  </div>

                  {/* Instructions in an ordered list */}
                  <ol className="space-y-4 ml-14 list-decimal">
                    {step.instructions.map((instruction, i) => (
                      <li key={i} className="text-gray-700 text-lg">
                        {instruction}
                      </li>
                    ))}
                  </ol>

                  {/* Conditionally render tip for step, if applicable */}
                  {step.tip && (
                    <div className="mt-6 ml-14 p-4 bg-amber-50 rounded-lg border-l-4 border-amber-400">
                      <div className="flex items-start">
                        <span className="text-2xl mr-2" aria-hidden="true">
                          💡
                        </span>
                        <p className="text-amber-800">
                          <span className="font-bold">Tip:</span> {step.tip}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Embedded Video Section */}
        <section className="mb-10">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-center font-bold text-3xl mb-6 lg:text-5xl text-gray-800">
              Need Help?
            </h2>
            <p className="mb-6 text-lg text-center text-gray-700">
              Sometimes, seeing it in action is easier. Watch this step-by-step
              video tutorial:
            </p>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="w-full aspect-video"
                src={videoUrl}
                title={`${articleTitle} Tutorial Video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Final Thoughts Section */}
        <section className="mb-10">
          <div className="bg-gradient-to-r from-sky-600 to-slate-600 text-white rounded-xl shadow-md p-8">
            <h2 className="text-center font-bold text-3xl mb-6 lg:text-5xl">
              Final Thoughts
            </h2>
            <p className="text-lg lg:text-xl">{finalThoughts}</p>
          </div>
        </section>

        {/* Call to Action - matches homepage style */}
        <section className="mb-10">
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  Ready to Explore More Technologies?
                </h2>
                <p className="text-gray-600 mb-6">
                  Check out our other guides to help you connect with family and
                  friends through technology.
                </p>
                <Link
                  to="/articles"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-sky-600 to-slate-600 text-white font-medium rounded-lg shadow-md hover:from-sky-700 hover:to-slate-700 transition-colors"
                >
                  Browse More Guides
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
              <div className="md:w-1/3">
                <div className="bg-gradient-to-r from-sky-600/10 to-slate-600/10 p-6 rounded-xl">
                  <div className="w-16 h-16 bg-gradient-to-r from-sky-600 to-slate-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                    Need Help?
                  </h3>
                  <p className="text-gray-600 text-center">
                    Our team is here to provide personal assistance with any
                    technology questions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </article>
  );
}
