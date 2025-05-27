import React from "react";

export const Faqs = () => {
  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }} align = "left">
      <h2>Frequently Asked Questions (FAQs)</h2>
      <div style={{ marginTop: "20px" }}>
        <h4>🔐 What are the login credentials?</h4>
        <p>
          The default username credential is <strong><code>M1</code></strong>. You can use this to log in and access
          user-specific features.
        </p>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h4>🏠 How can I edit my address?</h4>
        <p>
          You can edit your address using the <strong>"Edit Address Details"</strong> form available under the user text
          at the <strong>top-right corner</strong> of the page. Click your username and choose "Edit Details".
        </p>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h4>👤 How do I log in?</h4>
        <p>
          Click on the <strong>user image icon</strong> located in the <strong>top-right corner</strong> of the site. 
          A dropdown or modal will open with the <strong>Login</strong> option.
        </p>
      </div>
    </div>
  );
};
