import React from "react";

const RequiredDocs = () => {
  return (
    <section className="container welcome welcome-docs">
      <h1>What are the required documents for renting a car in France?</h1>
      <p>
        The required documents differ for tourists or residents. Here’s a brief
        about the needed papers for renting your dream car.
      </p>

      <div className="required-docs-container">
        <div className="requied-docs requied-docs1">
          <h2>If you are a resident, you'll need:</h2>
          <p>Valid driving license</p>
          <p>French ID</p>
        </div>
        <div className="requied-docs requied-docs1">
          <h2>If you’re a tourist, you’ll need:</h2>
          <p>Passport</p>
          <p>International driving license that is valid France</p>
        </div>
      </div>

      <a href="#">Browse our FAQs</a>
    </section>
  );
};

export default RequiredDocs;
