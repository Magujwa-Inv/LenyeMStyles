import { motion } from "framer-motion";
import "./index.css";

const featuredProducts = [
  {
    name: "Champagne Crystal Heels",
    category: "Luxury Heels",
    price: "E1,250",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Soft Nude Patent Pumps",
    category: "Signature Picks",
    price: "E1,180",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Gold Evening Sandals",
    category: "Occasion Wear",
    price: "E1,390",
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Structured Luxe Bag",
    category: "Accessories",
    price: "E1,550",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80",
  },
];

const collections = [
  {
    title: "Luxury Heels",
    text: "Sharp silhouettes, crystal finishes, glossy nudes and gold statement pairs.",
  },
  {
    title: "Elegant Bags",
    text: "Refined accessories designed to elevate every outfit with effortless class.",
  },
  {
    title: "Occasion Pieces",
    text: "Fashion made for entrances, dinners, events and unforgettable moments.",
  },
];

const styleShots = [
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
];

function SectionTitle({ overline, title, text }) {
  return (
    <div className="section-heading">
      <span>{overline}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function App() {
  return (
    <div className="site-shell">
      <header className="navbar">
        <div className="brand">LenyeMStyles</div>
        <nav>
          <a href="#collections">Collections</a>
          <a href="#featured">Featured</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-btn" href="#featured">
          Shop Now
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <p className="eyebrow">Light Luxury • Modern Fashion • Statement Class</p>
            <h1>Where elegance meets modern power.</h1>
            <p className="hero-text">
              LenyeMStyles curates premium fashion for women who want softness,
              sophistication and standout presence in every step.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#featured">
                Explore Collection
              </a>
              <a className="btn btn-secondary" href="#contact">
                Order on WhatsApp
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <strong>Luxury</strong>
                <span>Editorial feel</span>
              </div>
              <div>
                <strong>Modern</strong>
                <span>Clean movement</span>
              </div>
              <div>
                <strong>Elegant</strong>
                <span>Soft glam finish</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1 }}
          >
            <div className="hero-card large">
              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury fashion model"
              />
            </div>
            <div className="hero-card small top">
              <img
                src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury bag"
              />
            </div>
            <div className="hero-card small bottom">
              <img
                src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80"
                alt="Elegant heels"
              />
            </div>
          </motion.div>
        </section>

        <section className="marquee">
          <div className="marquee-track">
            <span>Luxury Heels</span>
            <span>Soft Glam</span>
            <span>Elegant Bags</span>
            <span>Occasion Wear</span>
            <span>Modern Fashion</span>
            <span>Luxury Heels</span>
            <span>Soft Glam</span>
            <span>Elegant Bags</span>
            <span>Occasion Wear</span>
            <span>Modern Fashion</span>
          </div>
        </section>

        <section className="collections-section" id="collections">
          <SectionTitle
            overline="Curated categories"
            title="A premium blend of elegance, shine and statement style."
            text="Every section is designed to feel clean and luxurious while letting the products carry the boldness."
          />

          <div className="collections-grid">
            {collections.map((item, index) => (
              <motion.article
                className="collection-card"
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
              >
                <div className="collection-number">0{index + 1}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="featured-section" id="featured">
          <SectionTitle
            overline="Featured now"
            title="Luxury picks designed to turn heads."
            text="A refined product showcase with soft tones, smooth hover motion and premium presentation."
          />

          <div className="product-grid">
            {featuredProducts.map((product, index) => (
              <motion.article
                className="product-card"
                key={product.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="product-image-wrap">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <span>{product.category}</span>
                  <h3>{product.name}</h3>
                  <div className="product-row">
                    <strong>{product.price}</strong>
                    <button>View</button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="banner-split">
          <motion.div
            className="banner-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span>Brand statement</span>
            <h2>This is not basic fashion. This is presence.</h2>
            <p>
              LenyeMStyles is built for women who want a soft luxury look with
              powerful detail. Clean presentation. Expensive feel. Memorable
              style.
            </p>
            <a className="btn btn-primary" href="#gallery">
              See the mood
            </a>
          </motion.div>

          <motion.div
            className="banner-image"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80"
              alt="Fashion mood"
            />
          </motion.div>
        </section>

        <section className="gallery-section" id="gallery">
          <SectionTitle
            overline="Style gallery"
            title="Luxury mood, feminine detail, modern class."
            text="This section should later be replaced with your own product and lifestyle images."
          />

          <div className="gallery-grid">
            {styleShots.map((image, index) => (
              <motion.div
                key={image}
                className={`gallery-item gallery-item-${index + 1}`}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55 }}
              >
                <img src={image} alt={`Fashion gallery ${index + 1}`} />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="contact-strip" id="contact">
          <div>
            <span>Ready to order?</span>
            <h2>Take LenyeMStyles to WhatsApp and close the sale fast.</h2>
          </div>
          <a
            className="btn btn-primary"
            href="https://wa.me/26800000000"
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp
          </a>
        </section>
      </main>

      <footer className="footer">
        <div>
          <h3>LenyeMStyles</h3>
          <p>Light luxury fashion for women who love elegance with presence.</p>
        </div>

        <div className="footer-links">
          <a href="#collections">Collections</a>
          <a href="#featured">Featured</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
