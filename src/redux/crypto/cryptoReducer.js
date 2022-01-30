const initialState = {
    loader:false,
    cryptos:[],
    error:'',
    darkMode:false,
    filterCrypto:[],
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
        case "DARK_MODE" :
        return {
            ...state,
            darkMode:!state.darkMode,
        }
        case "FILTER_CRYPTO":
            const filter = state.cryptos.filter(crypto => crypto.name.includes(action.searchValue))
        default : return state;
    }
}
export default cryptoReducer;