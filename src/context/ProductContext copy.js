// import axios from "axios";
// import { createContext, useContext, useEffect, useReducer } from "react";
// import reducer from "../reducer/Productreducer";
// import api_data from "../Apidata";

// const AppContext = createContext();

// const API_URL = "https://api.pujakaitem.com/api/products";

// const initialState = {
//   isloading: false,
//   isError: false,
//   products: [],
//   featureProducts: [],
//   issingleloading:false,
//   singleproduct:{},
// };


// export function AppProvider({ children }) {


//   const [state, dispatch] = useReducer(reducer, initialState);

//   async function getProducts(api) {
//     dispatch({type: "SET_LOADING"})
//     const resp = await axios.get(api)
//    const products = await resp.data ;
//    dispatch({type:"SET_API_DATA",payload:products})
 
   
//   }

 

//   async function getSingleProduct(api) {
//     dispatch({type: "SET_SINGLE_LOADING"})
//     const resp = await axios.get(api)
//     const singleproduct = await resp.data ;
    
//    dispatch({type:"SET_SINGLE_DATA",payload:singleproduct})

   
//   }

  


//   useEffect(() => {
//     getProducts(API_URL);
//   }, []);

//   // Return the provider with the value and children
//   return (
//     <AppContext.Provider value={{ ...state,getSingleProduct }}>{children}</AppContext.Provider>
//   );
// }

// // Create the custom hook to use the context
// export function useProductContext() {
//   // Use the useContext hook to access the AppContext
//   const context = useContext(AppContext);

//   // If the context is undefined, throw an error
//   if (!context) {
//     throw new Error("useAppContext must be used within an AppProvider");
//   }

//   // Return the context
//   return context;
// }
