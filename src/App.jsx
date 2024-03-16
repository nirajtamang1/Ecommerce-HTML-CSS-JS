import "./App.css";
import logo from "./images/logo.png";
import gadget from "./images/gadget.jpg";
import laptop from "./images/laptop.jpg";
import mouse from "./images/mouse.jpg";
import keyboard from "./images/keyboard.jpg";

function App() {
  return (
    <>
      <header className="section-navbar">
        <section>
          <div className="head container">
            <div className="head_txt">
              <p>Free shipping, 30-day return guarantee</p>
            </div>

            <div className="sing_in_up">
              <a href="#">SIGN IN</a>
              <a href="#">SIGN UP</a>
            </div>
          </div>
          <div className="container">
            <div className="navbar-brand">
              <a href="index.html">
                <img
                  src={logo}
                  alt=""
                  className="logo"
                  style={{ width: "20%", height: "auto" }}
                />
              </a>
            </div>
            <nav className="navbar">
              <ul>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/about.html" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/products.html" className="nav-link">
                    products
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/contact.html" className="nav-link">
                    contact
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/addToCart.html"
                    className="nav-link add-to-cart-button"
                    id="cartValue"
                  >
                    <i class="fa-solid fa-cart-shopping"> 0 </i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </header>

      {/* Start home hero section  */}
      <main>
        <section className="section-hero">
          <div className="container grid grid-two--cols">
            <div className="section-hero-content">
              <p className="hero-subheading">
                Exploret the latest in Tech Industries
              </p>
              <h1 className="hero-heading">
                Your Destination for Cutting-Edge Gadgets
              </h1>
              <p className="hero-para">
                Welcome to eCommerceStore, your ultimate destination for
                cutting-edge gadgets! Explores the latest in tech innovaton and
                style with us. Shop now and discover a world of possibilities!
              </p>
            </div>
            <div className="section-hero-image">
              <figure>
                <img src={gadget} alt="" style={{ backgroundColor: "blue" }} />
              </figure>
            </div>
          </div>
          <div class="custom-shape-divider-bottom-1710499936">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </section>
      </main>
      {/* End home hero section  */}

      {/* start Extra Product Section  */}
      <section className="section-extra-product">
        <div className="container grid grid-three-cols">
          <div className="div-extra grid grid-two--cols">
            <div className="extra-text">
              <p>new year sale</p>
              <h3>get and extra 50% off</h3>
              <a href="#">Show more</a>
            </div>
            <div className="extra-img extra-laptop">
              <img src={laptop} alt="" />
            </div>
          </div>
          <div className="div-extra grid grid-two--cols">
            <div className="extra-text">
              <p>new year sale</p>
              <h3>get and extra 50% off</h3>
              <a href="#">Show more</a>
            </div>
            <div className="extra-img extra-laptop">
              <img src={keyboard} alt="" />
            </div>
          </div>
          <div className="div-extra grid grid-two--cols">
            <div className="extra-text">
              <p>new year sale</p>
              <h3>get and extra 50% off</h3>
              <a href="#">Show more</a>
            </div>
            <div className="extra-img extra-laptop">
              <img src={mouse} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* End Extra Product Section  */}

      {/* Footer Section Start  */}
      <footer className="section-footer">
        <div className="footer-container container">
          <div className="content_1">
            <img src={logo} alt="logo" />
            <p>
              Wecolme to Ecommerce, websites, your ultimated destination for
              cutting-edge gadgets!
            </p>
            <img src="" alt="" />
          </div>
          <div className="content_2">
            <h4>Shopping</h4>
            <a href="#">Computer Store</a>
            <a href="#">Laptop Store</a>
            <a href="#">Accessories Store</a>
          </div>
          <div className="content_3">
            <h4>Experience</h4>
            <a href="./contact.html">Contact us</a>
            <a href="" target="_blank">
              Payment Method
            </a>
            <a href="" target="_blank">
              Delivery{" "}
            </a>
            <a href="" target="_blank">
              Return and Exchange
            </a>
          </div>
          <div className="content_4">
            <h4>NewsLetter</h4>
            <p>
              Be the first to know about new <br />
              arrivals, sales and promos!
            </p>
            <div className="f-mail">
              <input type="email" placeholder="Your Email" />
              <i class="bx bx-envelope"></i>
            </div>
            <hr />
          </div>
        </div>
        <div className="f-design">
          <div className="f-design-txt">
            <p>Design and Code By Ecommerce Websites</p>
          </div>
        </div>
      </footer>
      {/* Footer Section End  */}
    </>
  );
}

export default App;
