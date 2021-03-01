import React, { useEffect, useState } from "react";
import "./Coin.css";

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  const [smallscreen, setSmallScreen] = useState(false);

  const changeBackground = () => {
    if (window.innerWidth <= 960) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
  };

  useEffect(() => {
    changeBackground();
  }, []);

  window.addEventListener("resize", changeBackground);

  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          {smallscreen === true ? null : (
            <p className="coin-symbol">{symbol}</p>
          )}
        </div>
        <div className="coin-data">
          <p className="coin-price">${price}</p>
          {smallscreen === true ? null : (
            <p className="coin-volume">${volume.toLocaleString()}</p>
          )}

          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
          )}

          {smallscreen === true ? null : (
            <p className="coin-marketcap">
              Mkt Cap: ${marketcap.toLocaleString()}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Coin;
