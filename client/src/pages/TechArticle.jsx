// Tech article page component that will be placed with props inside of other page components that are specific towards each technology for example, Facebook

export default function TechArticle() {
  return (
    <article className="text-lg">
      {/* Article Header, Tech Heading */}
      <h1 className="text-center font-bold text-4xl pt-5">Facebook</h1>
      {/* Definition Section */}
      <section>
        <h2 className="text-center font-bold text-3xl pt-10">
          What Is Facebook?
        </h2>
        <p>
          Think of Facebook like a giant community bulletin board, but instead
          of walking down to the local center to check it, you can see it from
          the comfort of your home. It’s a place where your kids and grandkids
          post pictures—so you don’t have to wait for holiday cards in the mail.
          It lets you stay in touch with old friends—maybe even that buddy from
          high school or a cousin you haven’t seen in years. You can join groups
          for hobbies you love—gardening, classic cars, cooking, church groups,
          you name it. In short? Facebook helps you stay connected without
          having to figure out texting, group chats, or a hundred different
          apps.
        </p>
      </section>
      {/* Why Use It Section */}
      <section>
        <h2 className="text-center font-bold text-3xl pt-10">
          Why You'd Use It
        </h2>
        <p>Here’s why you might actually love Facebook:</p>
        <ul>
          <li>
            See your grandkids grow up – Instead of waiting for family to send
            photos, you’ll see them in real time. First steps, birthdays, school
            plays—it’s all there!
          </li>
          <li>
            Reconnect with old friends – Ever wonder what happened to your best
            friend from the 70s? Facebook makes it easy to find them.
          </li>
          <li>
            Join communities for things you love – Love classic cars, knitting,
            cooking, music, or church groups? There are Facebook groups where
            people just like you share tips and chat daily.
          </li>
          <li>
            Easier than you think – If you can dial a phone or send a letter,
            you can use Facebook. It’s just a few clicks.
          </li>
        </ul>
      </section>

      {/* Step by Step Instructions Section */}
      <section>
        <h2 className="text-center font-bold text-3xl pt-10">
          How To Get Started With Facebook
        </h2>
        <p>
          Here's step by step instructions on how to access and use Facebook.
          Follow the listed instructions from top to bottom, or find
          specifically what you're looking for:
        </p>
        {/* Could have in page links that will bring user to the <h3> of their choice. */}
        {/* Find a way to iterate over instructions so ordered list is only as long as it needs to be, likely using .map() */}
        <h3 className="text-lg font-semibold pt-4">Getting to Facebook</h3>
        <ol>
          <li>
            Open Google, Safari, or whatever internet browser you use (it's the
            place where you type in website names).
          </li>
          <li>Type www.facebook.com and press Enter.</li>
          <li>
            You’ll see a big blue screen with "Log In" and "Sign Up" options.
          </li>
        </ol>

        <h3 className="text-lg font-semibold pt-4">
          Making an Account (Skip this if you already have one)
        </h3>
        <ol>
          <li>Click “Sign Up”.</li>
          <li>
            Enter your name, email, and a password you’ll remember (write it
            down if needed).
          </li>
          <li>
            Facebook will send you an email or text message—just click the link
            inside to confirm.
          </li>
        </ol>
        <p>
          📻 Tip: Pick a password that’s easy for you but hard for others. A
          trick? Try "SunnyFlorida2024!" if you love Florida, or
          "ClassicCars1958!" if you’re a car fan.
        </p>

        <h3 className="text-lg font-semibold pt-4">Logging In</h3>
        <ol>
          <li>Go to www.facebook.com.</li>
          <li>Enter your email and password.</li>
          <li>Click Log In—you’re in!</li>
        </ol>
        <p>
          📻 Tip: If you want Facebook to remember your password so you don’t
          type it every time, check the little box that says "Remember Me".
        </p>

        <h3 className="text-lg font-semibold pt-4">
          Seeing Your Family’s Photos
        </h3>
        <ol>
          <li>Once logged in, click on the Search Bar at the top.</li>
          <li>Type in your son's, daughter’s, or grandkid’s name.</li>
          <li>Click their profile and hit "Add Friend".</li>
          <li>
            Once they accept, their photos and posts will start showing up on
            your News Feed.
          </li>
        </ol>
        <p>
          📻 Tip: Your "News Feed" is the main page on Facebook where you’ll see
          everything your family and friends post. You don’t have to do
          anything—just scroll down to see updates.
        </p>

        <h3 className="text-lg font-semibold pt-4">
          Posting a Message or Commenting
        </h3>
        <ol>
          <li>Click inside the box that says "What's on your mind?"</li>
          <li>Type your message, like “Happy Birthday, Emma! 🎂”</li>
          <li>Click "Post"—your message is now visible to your friends.</li>
        </ol>
        <p>Or, if you see a family photo and you want to comment:</p>
        <ol>
          <li>Click “Comment” under the photo.</li>
          <li>
            Type your message, like "You look so grown up! Love, Grandma ❤️".
          </li>
          <li>Hit Enter to post it.</li>
        </ol>
        <p>
          📻 Tip: You can “Like” a post by clicking the 👍 thumbs-up button.
          It’s like giving a friendly nod or a smile in real life.
        </p>
      </section>

      {/* Embedded Video Section */}
      <section>
        <h2 className="text-center font-bold text-3xl pt-10">Need Help?</h2>
        <p>
          Sometimes, seeing it in action is easier. Watch this step-by-step
          video tutorial:
        </p>
        <iframe
          className="w-1/1 h-auto min-h-[250px]"
          src="https://www.youtube.com/embed/xu8rh9Ref4Y?si=920-UcZz0JDkCM5"
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
