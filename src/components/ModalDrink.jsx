import { Modal, Image } from "react-bootstrap"
import useBebidas from "../context/BebidasProvider"
import Spinner from 'react-bootstrap/Spinner';

const ModalDrink = () => {
    const {modal, handleModalClick, drinkData, loading} = useBebidas();
    
    const showIngredients = () => {
        let ingredientsList = []; 
        for ( let i = 1; i <= 15; i++) {
            if (drinkData[`strIngredient${i}`] !== null) ingredientsList.push((<li> {drinkData[`strIngredient${i}`]} </li>))
        }
        return ingredientsList;
    }

    return (
        <Modal
            show={modal}
            onHide={handleModalClick}
        >
               
            {
                loading ? <Spinner animation="border" variant="primary" className="m-auto my-5"/>:
                (
                    <>
                    <Image
                        src={drinkData.strDrinkThumb}
                        alt={`Imagen receta ${drinkData.strDrink}`}
                    />
                    <Modal.Header>
                        <Modal.Title>{drinkData.strDrink}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    <div className="p-3">
                        <h2>Instrucciones</h2>
                        {drinkData.strInstructions}
                        <h2>Ingredientes y cantidad</h2>
                        <ul>
                            {showIngredients()}
                        </ul>
                    </div>
                    </Modal.Body>

                    </>
                )

            }
        </Modal>
        )
}

export default ModalDrink
