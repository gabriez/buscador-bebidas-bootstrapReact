import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

const CategoriaContext = createContext();

export default function useCategoria () {
    return useContext(CategoriaContext);
}

export const CategoriaProvider = ({children}) => {
    const [categories, setCategories] = useState([]);

    useEffect(
        () => {
            const getCategories = async () => {
                try {
                    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
                    const {data} = await axios(url);
                    setCategories(data.drinks)
                } catch (error) {
                    console.error(error);
                }
            }
            getCategories();
        }, []
    )

  return (
    <CategoriaContext.Provider value={{categories}}>
        {children}
    </CategoriaContext.Provider>
  )  
}