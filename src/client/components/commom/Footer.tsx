import React from "react";

const Footer = (): JSX.Element => {
  return (
    <div className="col footer">
      <div className="row">
        <div className="col-2">
          <div className="footer--heading">About</div>
          <ul>
            <li className="footer--option">
              <a href="/">Contact Us</a>
            </li>
            <li className="footer--option">
              <a href="/">About Us</a>
            </li>
            <li className="footer--option">
              <a href="/">Careers</a>
            </li>
            <li className="footer--option">
              <a href="/">Blogs</a>
            </li>
          </ul>
        </div>
        <div className="col-2">
          <div className="footer--heading">Help</div>
          <ul>
            <li className="footer--option">
              <a href="/">Payments</a>
            </li>
            <li className="footer--option">
              <a href="/">Shipping</a>
            </li>
            <li className="footer--option">
              <a href="/">Cancellation & Returns</a>
            </li>
            <li className="footer--option">
              <a href="/">FAQs</a>
            </li>
          </ul>
        </div>
        <div className="col-2">
          <div className="footer--heading">Policy</div>
          <ul>
            <li className="footer--option">
              <a href="/">Return</a>
            </li>
            <li className="footer--option">
              <a href="/">Cancellation</a>
            </li>
            <li className="footer--option">
              <a href="/">Privacy</a>
            </li>
            <li className="footer--option">
              <a href="/">Security</a>
            </li>
          </ul>
        </div>
        <div className="col-2">
          <div className="footer--heading">Social</div>
          <ul>
            <li className="footer--option">
              <a href="/">Facebook</a>
            </li>
            <li className="footer--option">
              <a href="/">Twitter</a>
            </li>
            <li className="footer--option">
              <a href="/">Youtube</a>
            </li>
            <li className="footer--option">
              <a href="/">Instagram</a>
            </li>
          </ul>
        </div>
        <div className="col-4 address">
          <div className="footer--heading">Address</div>
          <div>
            <p>EBazaar Private Limited</p>
            <p>XYZ Building</p>
            <p>ABC Road</p>
            <p>Bangalore, 560100</p>
            <p>Karnataka, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
