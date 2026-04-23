function About() {
  return (
    <div className="page">
      <div className="about-header">
        <h1>About Ember & Fig</h1>
        <p className="subtitle">Where Fire Meets Flavor</p>
      </div>

      <div className="about-story">
        <p>
          Ember & Fig began with a simple idea: that the best meals come from
          fire, fresh ingredients, and shared moments. Founded by longtime
          friends who bonded over late-night cooking and travel through coastal
          Mediterranean towns, the restaurant was inspired by the warmth of
          open-fire kitchens and the way food brings people together. What
          started as backyard gatherings around a grill slowly grew into a dream
          of creating a space where others could experience that same energy.
        </p>
        <p>
          After years of experimenting with flavors and techniques, Ember & Fig
          opened its doors as a modern take on Mediterranean dining. Blending
          traditional recipes with bold, creative twists, the restaurant quickly
          became known for its flame-grilled dishes, vibrant small plates, and
          inviting atmosphere. Through challenges and growth, one thing remained
          constant: a commitment to quality, creativity, and genuine hospitality.
        </p>
        <p>
          Today, Ember & Fig is more than just a place to eat—it’s a place to
          connect. Our mission is to create an experience that feels warm,
          welcoming, and full of life. From the glow of the fire to the shared
          tables and lively conversations, we want every guest to leave with not
          just a great meal, but a memorable moment worth coming back for.
        </p>
      </div>

      <div className="about-divider"></div>

      <div className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-avatar">🔥</div>
            <h3>Lucas Maren</h3>
            <p className="role">Head Chef & Co-Founder</p>
            <p>
              Lucas is the creative force behind Ember & Fig’s signature
              open-flame dishes, blending Mediterranean tradition with bold,
              modern flavors.
            </p>
          </div>
          <div className="team-card">
            <div className="team-avatar">🌿</div>
            <h3>Elena Costa</h3>
            <p className="role">General Manager</p>
            <p>
              Elena brings warmth and energy to every guest experience, ensuring
              the restaurant feels just as welcoming as it does unforgettable.
            </p>
          </div>
          <div className="team-card">
            <div className="team-avatar">🍷</div>
            <h3>Adrian Vale</h3>
            <p className="role">Beverage Director</p>
            <p>
              Adrian curates a thoughtful selection of wines and drinks designed
              to perfectly complement the rich, fire-driven flavors of the menu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
