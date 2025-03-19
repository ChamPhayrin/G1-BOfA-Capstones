// Tech article page component that will be placed with props inside of other page components that are specific towards each technology for example, Facebook

// Props are in Facebook component, spread out from facebookData obj.
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
    <article className="text-lg p-4 text-center md:pl-14 md:pr-14 lg:pl-20 lg:pr-20">
      {/* Article Header, Tech Heading */}
      <h1 className="text-center font-bold text-4xl pt-5 lg:text-6xl">
        {articleTitle}
      </h1>
      {/* Logo centered in page in <div> */}
      <div className="flex justify-center">
        <img
          src={logo}
          alt={articleTitle}
          className="w-24 h-24 md:w-32 md:h-32 lg:w-38 lg:h-38"
        />
      </div>
      {/* Definition Section */}
      <section className="mb-10">
        <h2 className="text-center font-bold text-3xl pt-10 mb-5 lg:text-5xl">
          What Is {articleTitle}?
        </h2>
        <p className="lg:text-2xl">{definition}</p>
      </section>
      {/* Why Use It Section */}
      <section className="mb-10">
        <h2 className="text-center font-bold text-3xl pt-10 mb-5 lg:text-5xl">
          Why You'd Use It
        </h2>
        <p className="lg:text-3xl">
          Here’s why you might actually love {articleTitle}:
        </p>
        {/* Mapping over whyUse array to make a <li> for each reason */}
        <ul className="space-y-5 text-left lg:text-2xl">
          {/* reason is the content for each reason. index is built into map, used as key for each list item */}
          {whyUse.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
      </section>

      {/* Step by Step Instructions Section */}
      <section className="mb-10">
        <h2 className="text-center font-bold text-3xl pt-10 mb-5 lg:text-5xl">
          How To Get Started With {articleTitle}
        </h2>
        <p className="mb-4 lg:text-2xl">
          Here's step by step instructions on how to access and use{" "}
          {articleTitle}. Follow the listed instructions from top to bottom, or
          find specifically what you're looking for:
        </p>

        {/* Could have in page LINKS that will bring user to the <h3> of their choice. */}

        {/* Mapping over Step by Step instructions */}
        {steps.map((step, index) => (
          <div key={index} className="mb-8">
            {/* Step Title */}
            <h3 className="text-lg font-semibold pt-4 lg:text-3xl">
              {step.title}
            </h3>

            {/* Mapping Over Instructions */}
            <ol className="space-y-4 text-left lg:text-2xl">
              {/* For each step, we'll map over the instructions array to list each list item */}
              {step.instructions.map((instruction, i) => (
                <li key={i}>{instruction}</li>
              ))}
            </ol>

            {/* Conditionally render tip for step, if applicable */}
            {step.tip && (
              <p className="text-left mt-6 lg:text-2xl bg-amber-50">
                📻 Tip: {step.tip}
              </p>
            )}
          </div>
        ))}
      </section>

      {/* Embedded Video Section */}
      <section className="mb-10">
        <h2 className="text-center font-bold text-3xl pt-10 mb-5 lg:text-5xl">
          Need Help?
        </h2>
        <p className="lg:text-2xl">
          Sometimes, seeing it in action is easier. Watch this step-by-step
          video tutorial:
        </p>
        <iframe
          className="w-full h-auto min-h-[250px]"
          src={videoUrl}
          title={`${articleTitle} Tutorial Video`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </section>

      {/* Final Thoughts Section */}
      <section className="mb-10">
        <h2 className="text-center font-bold text-3xl pt-10 mb-5 lg:text-5xl">
          Final Thoughts
        </h2>
        <p className="lg:text-2xl">{finalThoughts}</p>
      </section>
    </article>
  );
}
