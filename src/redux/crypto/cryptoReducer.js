const initialState = {
    loader:false,
    cryptos:[],
    error:'',
}
const cryptoReducer = (state=initialState,action) =>{
    switch(action.type) {
        case "FETCH_CRYPTO_REQUEST" :
            return {
                ...state,
                loader:true,
            }
        case "FETCH_CRYPTO_SUCCESS" :
            return {
                ...state,
                cryptos:action.payload,
                loader:false,
            }
        case "FETCH_CRYPTO_ERROR" :
            return {
                error:action.payload,
                loader:false,
                cryptos:[],
            }
        default : return state;
    }
}
export default cryptoReducer;