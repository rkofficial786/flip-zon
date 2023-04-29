import { createContext, useContext, useEffect } from "react";
import { useProductContext } from "./productcontex";
import { useReducer } from "react";
import reducer from "../reducer/filterReducer"
import Spinner from "../helpers/Spinner";

const FilterContext =createContext()



const initialState ={
    isLoading: true,
    filterproduct: [],
    allProducts : [] ,
    grid_view: true ,
    filter : {text:"v",},
   
}



export const FilterContextProvider = ({children})=>{

    const {products}  = useProductContext()

  const [state,dispatch] =useReducer(reducer, initialState)
 
  useEffect(()=>{
    dispatch({ type: "SET_LOADING" });
    dispatch({ type: "LOAD_FILTER_PRODUCT", payload: products });
  },[products])


  function setgridview (){
    dispatch({type: "SET_GRIDVIEW"})
  }

  function setlistview (){
    dispatch({type: "SET_LISTVIEW"})
  }

  const updateFilterValue = (event) => {
    const name = event.target.name;
    const value = event.target.value;
  
    dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };
  
 

return (
    <FilterContext.Provider value={{...state,setgridview,setlistview,updateFilterValue}}>
    {state.isLoading ? <Spinner /> : children}
    </FilterContext.Provider>
)
}

export const useFilterContext = ()=>{
    return useContext(FilterContext)
}