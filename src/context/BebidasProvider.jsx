import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

const BebidasContext = createContext();

export default function useBebidas () {
    return useContext(BebidasContext);
}

export const BebidasProvider = ({children}) => {
    const [drinks, setDrinks] = useState([]);
    const [modal, setModal] = useState(false);
    const [idDrink, setIdDrink] = useState(null);
    const [drinkData, setDrinkData] = useState({})
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getDrinkModal = async () => {
            if (!idDrink) return; 
            setLoading(true);
            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
                const {data} = await axios(url);
                setDrinkData(data.drinks[0])
              
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        getDrinkModal()

    }, [idDrink])

    const getDrinks = async search => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search.nombre}&c=${search.categoria}`
            const {data} = await axios(url);
            setDrinks(data.drinks)
        } catch (error) {
            console.error(error);
        }
    }

    const handleModalClick = () =>{
        setModal(!modal);
    }

    const handleIdDrink = id => setIdDrink(id);

  return (
    <BebidasContext.Provider value={
        {getDrinks, drinks, modal, handleModalClick, handleIdDrink, drinkData, loading}}
    >
        {children}
    </BebidasContext.Provider>
  )  
}