function Location() {
  return (
    <div className="page">
      <div className="location-header">
        <h1>Find Us</h1>
      </div>

      <div className="location-content">
        <div className="location-info">
          <h2>Address</h2>
          <p>128 Ember Lane</p>
          <p>Salisbury, NC 28144</p>
          <p className="phone">(704) 555-2187</p>

          <h2>Hours of Operation</h2>
          <div>
            <div className="hours-row">
              <span className="day">Monday – Thursday</span>
              <span className="time">4:00 PM – 9:00 PM</span>
            </div>
            <div className="hours-row">
              <span className="day">Friday</span>
              <span className="time">4:00 PM – 10:30 PM</span>
            </div>
            <div className="hours-row">
              <span className="day">Saturday</span>
              <span className="time">11:30 AM – 10:30 PM</span>
            </div>
            <div className="hours-row">
              <span className="day">Sunday</span>
              <span className="time">11:30 AM – 8:00 PM</span>
            </div>
          </div>

          <h2>Getting Here</h2>
          <p>
            Located just minutes from downtown Salisbury, Ember & Fig offers
            convenient street parking and a small private lot behind the
            building. We’re right near the local theater district, making us a
            perfect stop for dinner before or after a night out.
          </p>
        </div>

        <div className="map-container">
          <div className="map-placeholder">
            <p>
              📍 Google Maps embed goes here
              <br />
              <small>(See instructions in the code comments)</small>
            </p>
          </div>

          {/* UNCOMMENT THIS in Week 4 and replace the URL:
          <iframe
            title="Restaurant Location"
            src="YOUR_GOOGLE_MAPS_EMBED_URL_HERE"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          */}
        </div>
      </div>
    </div>
  );
}

export default Location;