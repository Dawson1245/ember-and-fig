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
          <iframe
            title="Restaurant Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4381.609814320462!2d-80.458034895252!3d35.65667138733178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1777546387734!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Location;