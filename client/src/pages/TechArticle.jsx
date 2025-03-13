// Tech article page component that will be placed with props inside of other page components that are specific towards each technology for example, Facebook

// Props are in Facebook component, spread out from facebookData obj.
export default function TechArticle({
  articleTitle,
  definition,
  whyUse,
  steps,
  videoUrl,
}) {
  return (
    <article className="text-lg">
      {/* Article Header, Tech Heading */}
      <h1 className="text-center font-bold text-4xl pt-5">{articleTitle}</h1>
      {/* Definition Section */}
      <section>
        <h2 className="text-center font-bold text-3xl pt-10">
          What Is {articleTitle}?
        </h2>
        <p>{definition}</p>
      </section>
      {/* Why Use It Section */}
      <section>
        <h2 className="text-center font-bold text-3xl pt-10">
          Why You'd Use It
        </h2>
        <p>Here’s why you might actually love {articleTitle}:</p>
        {/* Mapping over whyUse array to make a <li> for each reason */}
        <ul className="space-y-5">
          {/* reason is the content for each reason. index is built into map, used as key for each list item */}
          {whyUse.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
      </section>

      {/* Step by Step Instructions Section */}
      <section>
        <h2 className="text-center font-bold text-3xl pt-10">
          How To Get Started With {articleTitle}
        </h2>
        <p className="mb-4">
          Here's step by step instructions on how to access and use{" "}
          {articleTitle}. Follow the listed instructions from top to bottom, or
          find specifically what you're looking for:
        </p>

        {/* Could have in page LINKS that will bring user to the <h3> of their choice. */}

        {/* Mapping over Step by Step instructions */}
        {steps.map((step, index) => (
          <div key={index} className="mb-8">
            {/* Step Title */}
            <h3 className="text-lg font-semibold pt-4">{step.title}</h3>

            {/* Mapping Over Instructions */}
            <ol className="space-y-4">
              {/* For each step, we'll map over the instructions array to list each list item */}
              {step.instructions.map((instruction, i) => (
                <li key={i}>{instruction}</li>
              ))}
            </ol>

            {/* Conditionally render tip for step, if applicable */}
            {step.tip && <p>📻 Tip: {step.tip}</p>}
          </div>
        ))}
      </section>

      {/* Embedded Video Section */}
      <section>
        <h2 className="text-center font-bold text-3xl pt-10">Need Help?</h2>
        <p>
          Sometimes, seeing it in action is easier. Watch this step-by-step
          video tutorial:
        </p>
        <iframe
          className="w-full h-auto min-h-[250px]"
          src={videoUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </section>

      {/* Final Thoughts Section */}
      <section>
        <h2 className="text-center font-bold text-3xl pt-10">Final Thoughts</h2>
        <p>
          Final Thoughts Facebook might seem tricky at first, but once you get
          the hang of it, it's just like reading the newspaper—except your
          family, friends, and favorite hobbies are all inside. Give it a try,
          and soon enough, you’ll be the one showing others how it’s done!
        </p>
      </section>
    </article>
  );
}
