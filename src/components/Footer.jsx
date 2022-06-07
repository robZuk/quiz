import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="text-center py-3">
        created by <span className="footer-name">Robert Żuk</span> -{" "}
        <a
          className="footer-link"
          href="https://devchallenges.io"
          target="_blank"
          rel="noreferrer"
        >
          devChallenges.io
        </a>
      </div>
    </footer>
  );
};

export default Footer;
