import { Col, Card, Button } from "react-bootstrap"
import useBebidas from "../context/BebidasProvider";

const Drink = ({drink}) => {
    const {handleModalClick, handleIdDrink} = useBebidas();

  return (
    <Col className="mb-4" md={6} lg={3}>
      <Card className="h-100 ">
        <Card.Img 
            variant='top'
            src={drink.strDrinkThumb}
            alt={`Imagen de ${drink.strDrink}`}
        />
        <Card.Body> 
            <Card.Title>{drink.strDrink}</Card.Title>   
            
        </Card.Body>
        <Button
            variant='warning'
            className="m-auto mb-2 text-uppercase mt-2"
            style={{width: '90%'}}
            onClick={()=>{
                handleModalClick()
                handleIdDrink(drink.idDrink)
            }}
        >
                Ver Receta
        </Button>
      </Card>
    </Col>
  )
}

export default Drink
