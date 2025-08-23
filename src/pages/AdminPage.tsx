import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const AdminPage: React.FC = () => {
  const { content, isLoading } = useLanguage();

  if (isLoading) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Content Management Preview</h1>
      <p>This shows the current content loaded from the CMS:</p>

      <div
        style={{
          background: "#f5f5f5",
          padding: "1rem",
          borderRadius: "8px",
          marginTop: "2rem",
        }}
      >
        <h2>Hero Section</h2>
        <p>
          <strong>English Headline:</strong>{" "}
          {content?.hero?.headline_en || "Not loaded"}
        </p>
        <p>
          <strong>German Headline:</strong>{" "}
          {content?.hero?.headline_de || "Not loaded"}
        </p>
        <p>
          <strong>Background Image:</strong>{" "}
          {content?.hero?.background_image || "Not loaded"}
        </p>
      </div>

      <div
        style={{
          background: "#f5f5f5",
          padding: "1rem",
          borderRadius: "8px",
          marginTop: "1rem",
        }}
      >
        <h2>About Section</h2>
        <p>
          <strong>English Headline:</strong>{" "}
          {content?.about?.headline_en || "Not loaded"}
        </p>
        <p>
          <strong>German Headline:</strong>{" "}
          {content?.about?.headline_de || "Not loaded"}
        </p>
      </div>

      <div
        style={{
          background: "#f5f5f5",
          padding: "1rem",
          borderRadius: "8px",
          marginTop: "1rem",
        }}
      >
        <h2>Products</h2>
        <p>
          <strong>Section Headline (EN):</strong>{" "}
          {content?.products?.headline_en || "Not loaded"}
        </p>
        <p>
          <strong>X.Hand Name (EN):</strong>{" "}
          {content?.products?.xhand?.name_en || "Not loaded"}
        </p>
        <p>
          <strong>X.Hand Images:</strong>{" "}
          {content?.products?.xhand?.images?.length || 0} images
        </p>
      </div>

      <div
        style={{
          marginTop: "2rem",
          padding: "1rem",
          background: "#e3f2fd",
          borderRadius: "8px",
        }}
      >
        <h3>🎉 Next Steps for Full CMS Setup:</h3>
        <ol>
          <li>
            Sign up for a free account at{" "}
            <a href="https://tina.io" target="_blank" rel="noopener noreferrer">
              tina.io
            </a>
          </li>
          <li>Connect your GitHub repository</li>
          <li>Add your TinaCMS credentials to the environment variables</li>
          <li>Deploy your site with TinaCMS enabled</li>
          <li>Visit /admin on your live site to start editing!</li>
        </ol>
      </div>

      <div
        style={{
          marginTop: "2rem",
          padding: "1rem",
          background: "#f3e5f5",
          borderRadius: "8px",
        }}
      >
        <h3>📝 What you'll be able to edit:</h3>
        <ul>
          <li>✅ All headlines and text content</li>
          <li>✅ Product descriptions and names</li>
          <li>✅ Contact information</li>
          <li>✅ Upload and manage product images</li>
          <li>✅ Background images</li>
          <li>✅ Both English and German content</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminPage;
