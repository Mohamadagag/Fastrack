import React from "react";

const OurFleet = () => {
  return (
    <section className="container ourFleet-contaiener">
      <a href="#" className="section_title">
        <h1>Our Fleet</h1>
      </a>

      <div className="iframe-container">
        <iframe
          src="https://www.youtube.com/embed/hqKzj5tfSyY"
          className="absolute inset-0 w-full h-full"
        ></iframe>
      </div>
    </section>
  );
};

export default OurFleet;
