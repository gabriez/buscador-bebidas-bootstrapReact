import { Row } from "react-bootstrap"
import useBebidas from "../context/BebidasProvider"
import Drink from "./Drink"
const DrinksList = () => {

    const {drinks} = useBebidas()
  return (
    <Row className="mt-5">
      {drinks.map(drink => (<Drink key={drink.idDrink} drink={drink}/>))}
    </Row>
  )
}

export default DrinksList
