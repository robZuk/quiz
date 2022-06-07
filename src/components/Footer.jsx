import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="text-center py-3">
        created by <span className="footer-name">Robert Żuk</span> -{" "}
        <Link className="footer-link" to="https://devchallenges.io">
          devChallenges.io
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
