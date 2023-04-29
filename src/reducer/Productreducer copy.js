const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        
      };

    case "SET_API_DATA":
      const featureData = action.payload.filter((current) => {
        return current.featured === true;
      });

      return {
        ...state,
        
        products: action.payload,
        featureProducts: featureData,
      };

    case "SET_SINGLE_DATA":
      return {
        ...state,
        singleproduct: action.payload,
        
      };


      

    default:
      return state;
  }
};
export default ProductReducer;
