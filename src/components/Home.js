import React from "react";
import "./Home.css";
import Product from "./Product";
const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__banner-img"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-2x._CB658860139_.jpg"
          alt="amazon banner"
        />
      </div>
      <div className="home__content">
        <div className="home__row">
          <Product
            img="https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg"
            title="Book Cover Design Formula"
            id={12541563}
            price="1,994.00"
            rating={5}
          />
          <Product
            img={"https://m.media-amazon.com/images/I/51oWvyUWJSL._UL1000_.jpg"}
            title="Fossil Gen 6 Men's Smartwatch with AMOLED Screen"
            id={12541513}
            price="24,995.00"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            img={"https://m.media-amazon.com/images/I/61jLiCovxVL._SL1500_.jpg"}
            title="Apple iPhone 13 Pro (128GB) - Sierra Blue"
            id={12141513}
            price="1,12,900.00"
            rating={5}
          />
          <Product
            img={"https://m.media-amazon.com/images/I/61N6Ai7RkJL._SL1500_.jpg"}
            title="Sony WH-CH710N Active Noise Cancelling Wireless Headphones"
            id={12541513}
            price="8,590.00"
            rating={4}
          />
          <Product
            img={"https://m.media-amazon.com/images/I/51R4rCjKI4L._UL1200_.jpg"}
            title="Puma RS-Z Multi FS"
            id={12541313}
            price="9,999.00"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            img={"https://m.media-amazon.com/images/I/61V7cDH8AAS._SL1188_.jpg"}
            title="Mi 4K Ultra HD Android Smart LED TV 4X"
            id={11541513}
            price="29,999.00"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
