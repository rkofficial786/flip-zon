const FilterReducer = (state,action)=>{


    switch (action.type) {


        case "SET_LOADING":
        return {
          ...state,
          isLoading: true,
        };
  
      

        case "LOAD_FILTER_PRODUCT":
            
        return {
            ...state,
            isLoading:false,
            filterproduct : [...action.payload],
            allProducts : [...action.payload],
        }
          
        
        case "SET_GRIDVIEW" :

        return {
            ...state,
            grid_view : false ,
        }

        case "SET_LISTVIEW" :

        return {
            ...state,
            grid_view:true ,
        }

        case "UPDATE_FILTERS_VALUE":
            const { name, value } = action.payload;
      
            return {
              ...state,
              filters: {
                ...state.filters,
                [name]: value,
              },
            };
    
        default:
            return state ;
    }

}

export default FilterReducer