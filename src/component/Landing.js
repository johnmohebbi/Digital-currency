import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
//actions
import { fetchCrypto } from '../redux/crypto/cryptoAction';
const Landing = () => {
    const data = useSelector(state => state.cryptoState);
    const dispatch = useDispatch();
    // console.log(data);
    useEffect(()=>{
        dispatch(fetchCrypto())
    },[])
    return (
        <div>
            {
            data.loader ? 
            <h1>Loading ...</h1> :
            data.error ? 
            <h1>{data.error}</h1> :
            data.cryptos.map(crypto => {
              return  <h1 key={crypto.id}>{crypto.name}</h1>
            })
            }
        </div>
    );
};

export default Landing;