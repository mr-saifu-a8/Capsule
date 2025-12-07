
import React from "react";
import { FaDribbble, FaInstagram, } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export default function Footer1() {
  return (
    <section className="footer-section">
     
      {/* LEFT TEXT */}
      <div className="footer-left">
        <p className="left-paragraph">
          This website is just the concept
          <br />
          work done by—Moyra to showcase
          <br />
          our capabilities.
        </p>

        <p className="left-paragraph">
          If you would like to outsource a similar
          <br />
          website project—
          <a className="underline-link" href="#contact">
            contact us.
          </a>
        </p>
      </div>

      {/* RIGHT MENU */}
      <nav className="footer-right" aria-label="footer menu">
        <div>Welcome</div>
        <div>Introduction</div>
        <div>Houses</div>
        <div>
          Why Capsules<span className="reg">®</span>
        </div>
        <div>Activities</div>
        <div>Feedback</div>
      </nav>

      {/* BOTTOM LEFT SOCIAL ICONS */}
      <div className="social-wrap">
        <div className="social">
          <CiLinkedin />
        </div>
        <div className="social">
          <FaInstagram />
        </div>
        <div className="social">
          <FaDribbble />
        </div>
        <div className="social">Bē</div>
      </div>

      {/* BOTTOM RIGHT SMALL TEXT */}
      <div className="footer-caption">
        Meet Capsules®—modern and cozy
        <br />
        houses, in the California desert.
      </div>
    </section>
  );
}
