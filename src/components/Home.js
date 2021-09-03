import React from "react";

function Home() {
  return (
    <div className="App">
      <img
        src="https://cdn.iconscout.com/icon/free/png-512/shopping-cart-442-1151214.png"
        alt="cart"
        width="60px"
      />
      <div className="cart-wrapper">
        <div className="img-wrapper">
          <img
            src="https://www.pngitem.com/pimgs/m/525-5259250_apple-ios-13-iphone-hd-png-download-apple.png"
            alt="img"
            width="400px"
          />
        </div>
        <div className="text-wrapper">
          <span>Iphone X</span>
          <span>Price : $800</span>
        </div>
        <div className="btn-wrapper">
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
