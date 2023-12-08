import Navigation from "./Navigation";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <div>
        <Navigation />
      </div>
      <div className={styles.mainSection}>
        <div className={styles.maingrid}>
          <div>
            <div className={styles.web3Image}>
              <img
                src="/assets/images/image-web-3-desktop.jpg"
                alt="big-img"
                className={styles.web3Image}
              />
            </div>
            <div className={styles.web3}>
              <div className={styles.futureWeb3}>
                <h1> The Bright Future of Web 3.0?</h1>
              </div>
              <div className={styles.web3Text}>
                <p>
                  {" "}
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button className={styles.webButton}>Read More</button>
              </div>
            </div>
          </div>
          <div className={styles.newContainer}>
            <div className={styles.new}>
              <h1>New</h1>
              <div className={styles.newText}>
                <a href="https://www.carwow.co.uk/blog/hydrogen-vs-electric-cars#gref">
                  Hydrogen VS Electric Cars
                </a>
                <p> Will hydrogen-fueled cars ever catch up to EVs?</p>
              </div>
              <hr />
              <div className={styles.newText}>
                <a href="https://victorycto.com/ai-generated-art-pros-and-cons/#:~:text=Cons%20of%20AI%20Generated%20Art&text=While%20AI%20can%20create%20realistic,using%20machines%20to%20create%20art.">
                  The Downsides of AI Artistry
                </a>

                <p>
                  {" "}
                  What are the possible adverse effects of on-demand AI image
                  generation?
                </p>
              </div>
              <hr />
              <div className={styles.newText}>
                <a href="https://www.fastcompany.com/90830822/vc-funding-is-drying-up-how-founders-can-fundraise-regardless#:~:text=Aspiring%20entrepreneurs%20are%20facing%20a,they%20are%20willing%20to%20make.">
                  Is VC Funding Drying Up?
                </a>

                <p>
                  Private funding by VC firms is down 50% YOY. We take a look at
                  what that means.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <div>
            {" "}
            <img
              src="/assets/images/image-retro-pcs.jpg"
              className={styles.footerImg}
              alt="some"
            />
          </div>
          <div>
            <h1> 01</h1>
            <h4>Reviving Retro PCs</h4>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>

        <div className={styles.footerContent}>
          <div>
            {" "}
            <img
              src="/assets/images/image-top-laptops.jpg"
              className={styles.footerImg}
              alt="another"
            />
          </div>

          <div>
            <h1> 02</h1>
            <h4>Top 10 Laptops of 2022</h4>
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </div>

        <div className={styles.footerContent}>
          <div>
            <img
              src="/assets/images/image-gaming-growth.jpg"
              className={styles.footerImg}
              alt="also"
            />
          </div>

          <div>
            <h1> 03</h1>
            <h4>The Growth of Gaming</h4>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
