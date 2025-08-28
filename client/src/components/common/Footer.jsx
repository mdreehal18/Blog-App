import React from "react";
// import "./Footer.css";

function Footer() {
  return (
    <footer className="section bg-footer mt-3 py-2" style={{ backgroundColor: "#2c2f34" }}>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <div>
              <h6 className="footer-heading text-uppercase text-white mb-2">
                Social-Media
              </h6>
              <ul className="list-unstyled footer-link mb-2">
                <li><a href="">Instagram</a></li>
                <li><a href="">Facebook</a></li>
                <li><a href="">Linkedin</a></li>
                <li><a href="">Twitter</a></li>
              </ul>
            </div>
          </div>

          <div className="col-sm-3">
            <div>
              <h6 className="footer-heading text-uppercase text-white mb-2">
                Resources
              </h6>
              <ul className="list-unstyled footer-link mb-2">
                <li><a href="">Wikipedia</a></li>
                <li><a href="">React blog</a></li>
                <li><a href="">Term &amp; Service</a></li>
                <li><a href="">Angular dev</a></li>
              </ul>
            </div>
          </div>

          <div className="col-sm-2">
            <div>
              <h6 className="footer-heading text-uppercase text-white mb-2">Help</h6>
              <ul className="list-unstyled footer-link mb-2">
                <li><a href="">Sign Up</a></li>
                <li><a href="">Login</a></li>
                <li><a href="">Terms of Services</a></li>
                <li><a href="">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="col-sm-4">
            <div>
              <h6 className="footer-heading text-uppercase text-white mb-2">
                Contact Us
              </h6>
              <p className="contact-info mb-1">
                Contact us if need help with anything
              </p>
              <p className="contact-info mb-0">+91 7842593156</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-3">
        <p className="footer-alt mb-0" style={{ fontSize: "13px" }}>
          2025 ©Reeh18, All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
