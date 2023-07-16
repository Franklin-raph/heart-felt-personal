import giftImage from "../../assets/images/fi-sr-gift.png"
import BackToTop from '../../components/back-to-top/BackToTop'

const Footer = () => {
  return (
    <div style={{ position:"relative" }}>
        <div className="customize parent-container-padding">
        <h1>Customise Gift Card for free</h1>
        <p>Express your love, so easy! </p>
        <a href="#">Get Started</a>
      </div>

      <div className="footer-links parent-container-padding">
        <div>
          <h4>Product</h4>
          <ul>
            <li>
              <a href="#">Fashion</a>
            </li>
            <li>
              <a href="#">Gadgets</a>
            </li>
            <li>
              <a href="#">Home Appliances</a>
            </li>
            <li>
              <a href="#">Office & Work Tools</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Features</h4>
          <ul>
            <li>
              <a href="#">Customize</a>
            </li>
            <li>
              <a href="#">Delivery</a>
            </li>
            <li>
              <a href="#">Apply Coupon</a>
            </li>
            <li>
              <a href="#">Referral Bonus</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>
              <a href="#">Get Help</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <a href="/contact-us">Contact Us</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Transparency</h4>
          <ul>
            <li>
              <a href="terms-of-use">Terms & Conditions</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/cookie-policy">Cookies</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Subscribe to newsletter</h4>
          <div className="form flex-center">
            <input type="text" placeholder="Enter your email"/>
            <input type="button" value="Subscribe"/>
          </div>
          <div className="socials flex-start g-1">
            <a href="#"><i class="ri-facebook-fill"></i></a>
            <a href="#"><i class="ri-twitter-fill"></i></a>
            <a href="#"><i class="ri-youtube-fill"></i></a>
            <a href="#"><i class="ri-linkedin-box-fill"></i></a>
            <a href="#"><i class="ri-instagram-fill"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-text parent-container-padding flex-between">
        <div className="flex-center">
          <div className="flex-center">
            <img src={giftImage} alt="" />
            <h4>GiftCard</h4>
          </div>
          <p>&copy; 1995-2023 Giftcard inc. All Rights Reserved</p>
        </div>
        <div className="flex-center g-4">
          <a href="#">Product</a>
          <a href="#">Features</a>
          <a href="#">Support</a>
        </div>
      </div>
      <BackToTop />
    </div>
  )
}

export default Footer