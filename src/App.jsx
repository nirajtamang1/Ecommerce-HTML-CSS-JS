import "./App.css";
import logo from "./images/logo.png";
import gadget from "./images/gadget.jpg";

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
        </section>
      </main>
      {/* End home hero section  */}
    </>
  );
}

export default App;
