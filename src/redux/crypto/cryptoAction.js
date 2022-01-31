import axios from "axios";

const fetchCryptoRequest = () =>{
    return {
        type:"FETCH_CRYPTO_REQUEST",
    };
}
const fetchCryptoSuccess = (data) =>{
    return {
        type:"FETCH_CRYPTO_SUCCESS",
        payload:data
    };
}
const fetchCryptoError = (error) =>{
    return {
        type:"FETCH_CRYPTO_ERROR",
        payload:error
    };
}
const fetchCrypto = () =>{
    return (dispatch) =>{
        dispatch(fetchCryptoRequest())
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false")
            .then(response =>{
                dispatch(fetchCryptoSuccess(response.data))
            })
            .catch(error =>{
                dispatch(fetchCryptoError(error.message))
            })
    }
}
const changeDarkMode = () =>{
    return {
        type:"DARK_MODE",
    };
}

export {
    fetchCrypto,
    changeDarkMode,
}