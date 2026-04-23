import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      {/* ============================================================
          HERO SECTION
          TODO: Replace the name, tagline, and button text with yours.
          ============================================================ */}
      <section className="hero">
        <h1>Ember & Fig</h1>
        <p className="tagline">Where Fire Meets Flavor</p>
        <Link to="/menu" className="cta-button">
          View Our Menu
        </Link>
      </section>

      {/* ============================================================
          WELCOME SECTION
          TODO: Write 1-2 paragraphs about YOUR restaurant.
          What makes it special? What's your story?
          ============================================================ */}
      <section className="welcome-section">
        <div className="welcome-text">
          <h2>Welcome</h2>
          <p>
            At Ember & Fig, we bring the bold, sun-soaked flavors of the Mediterranean to life through modern fusion and open-flame
            cooking. Our menu features a vibrant mix of small plates, fire-grilled mains, and handcrafted flatbreads—everything from 
            charred lemon hummus and crispy halloumi bites to harissa-glazed salmon and smoky eggplant flatbread. Each dish is 
            thoughtfully prepared over an open flame, creating deep, rich flavors you cant replicate any other way. With a warm, rustic 
            atmosphere and shared tables designed to bring people together, Ember & Fig is more than just a meal—it's an experience centered 
            around connection, comfort, and unforgettable flavor.
          </p>
          <p style={{ marginTop: "1rem" }}>
            Our story is rooted in a love for simple ingredients elevated through fire and creativity. Inspired by traditional
            Mediterranean cooking and reimagined with a modern twist, we focus on fresh herbs, seasonal produce, and bold spices to
            craft dishes that feel both familiar and exciting. From the soft glow of firelight to the lively yet intimate setting, every
            detail is designed to make guests feel at home. Whether you're celebrating a special occasion or just enjoying a relaxed night
            out, Ember & Fig offers a dining experience that’s warm, inviting, and full of life.
          </p>
        </div>
        <div className="welcome-image">
          {/* TODO: Replace with an <img> tag once you add images in Week 4 */}
          📸 Add your restaurant photo here
        </div>
      </section>

      {/* ============================================================
          FEATURE CARDS
          TODO: Change the icons, titles, and descriptions below
          to highlight 3 things that make YOUR restaurant special.
          ============================================================ */}
      <section>
        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">🔥</div>
            <h3>Open-Flame Cooking</h3>
            <p>Every dish is crafted over an open flame, bringing out bold, smoky flavors that make each bite unforgettable.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🥖</div>
            <h3>Fresh Mediterranean Ingredients</h3>
            <p>We use vibrant herbs, seasonal produce, and authentic spices to create dishes inspired by modern Mediterranean cuisine.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✨</div>
            <h3>Warm, Shared Experience</h3>
            <p>Our cozy, fire-lit space and shared tables are designed to bring people together for a relaxed and memorable dining experience.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
