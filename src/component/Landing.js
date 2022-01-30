import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../assets/Loader";
//actions
import { fetchCrypto } from "../redux/crypto/cryptoAction";
import Coin from "./Coin";
import Header from "./Header";
const Landing = () => {
  const data = useSelector((state) => state.cryptoState);
  const [searchValue, setSearchValue] = useState("");
  const [filterCoin, setFilterCoin] = useState("");
  const dispatch = useDispatch();
  const searchHandler = (e) => {
    setSearchValue(e.target.value);
    const lg = data.cryptos.filter((coin) =>coin.name.toLowerCase().includes(e.target.value.toLowerCase()));
    setFilterCoin({...filterCoin,cryptos:lg})
    
  };
  useEffect(() => {
    dispatch(fetchCrypto());
  }, []);
  useEffect(() => {
    setFilterCoin(data);
  }, [data]);
  return (
    <div>
      <header>
        <Header />
      </header>
      <section className="font-RobotoM">
        {Object.keys(filterCoin).length ? (
          filterCoin.loader ? (
            <Loader />
          ) : filterCoin.error ? (
            <h1>{filterCoin.error}</h1>
          ) : (
            <div className={`${data.darkMode ? "bg-[#060930]": "bg-[#f1faee]"}`}>
              <div
                className={`
                  
                 h-44 flex justify-center transition-colors	duration-100`}
              >
                <input
                  className={`w-[40%] 
                  ${
                    data.darkMode ? "bg-[#f1faee] text-[#060930] shadow-[#f1faee]  focus:shadow-[#060930] placeholder:text-sky-400" : "placeholder:text-blue-50 text-blue-50 bg-sky-400"
                  }	  focus:shadow-xl	 focus:shadow-[#fff8f354] font-sans rounded-sm text-lg font-semibold  h-1/4 pl-3 placeholder:text-lg placeholder:font-semibold  focus:outline-none self-center shadow-md`}
                  type="text"
                  value={searchValue}
                  onChange={searchHandler}
                  placeholder="Search"
                />
              </div>
              <section className="font-sans  flex flex-col items-center">
                {filterCoin.cryptos.map((coin) => {
                  return (
                    <Coin
                      key={coin.id}
                      name={coin.name}
                      image={coin.image}
                      symbol={coin.symbol}
                      price={coin.current_price}
                      marketCap={coin.market_cap}
                      priceChange={coin.price_change_percentage_24h}
                    />
                  );
                })}
              </section>
            </div>
          )
        ) : (
          ""
        )}
      </section>
    </div>
  );
};

export default Landing;

// bg-[#f4f9f9] 