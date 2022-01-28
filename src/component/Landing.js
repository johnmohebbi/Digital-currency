import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../assets/Loader";
//actions
import { fetchCrypto } from "../redux/crypto/cryptoAction";
import Coin from "./Coin";
const Landing = () => {
  const data = useSelector((state) => state.cryptoState);
  const [searchValue,setSearchValue] = useState('');
  const [filterCoin,setFilterCoin] = useState('');
  const dispatch = useDispatch();
  const searchHandler = (e)=>{
    setSearchValue(e.target.value)
  }
  // console.log(filterCoin);
  useEffect(() => {
    dispatch(fetchCrypto());
    
  }, []);
  useEffect(()=>{
    if(searchValue) {
     const filter = data.cryptos.filter(coin => coin.name.toLowerCase().includes(searchValue.toLowerCase()))
     setFilterCoin({...filterCoin,cryptos:filter})
    
    }
    if(searchValue === '') {
      setFilterCoin({...data})
     }
  },[searchValue])
  
  useEffect(()=>{
    
    setFilterCoin(data);
   
  },[data])
  return (
    <div>
      {
          Object.keys(filterCoin).length ?
           
            filterCoin.loader ?
            <Loader /> :
            filterCoin.error ?
            <h1>{filterCoin.error}</h1> :
            
            <div>
              <label>search:</label>
              <input type="text" value={searchValue} onChange={searchHandler}/>
            <section>
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
                })
              }
            </section>
          </div>
          : ""
          
      }
   
    </div> 
  );
};

export default Landing;
