import { useState } from "react";
import useCategoria from "../context/CategoriasProvider"
import { Button, Row, Col, Form as BootstrapForm, Alert } from "react-bootstrap"
import useBebidas from "../context/BebidasProvider";


const Form = () => {
    const {categories} = useCategoria();
    const {getDrinks} = useBebidas()
    const [search, setSearch] = useState(
        {
            categoria: '',
            nombre: ''
        }
    );
    const [error, setError] = useState('');

    const handleChange = e => {
        const {name, value} = e.target;
        setSearch(prevState => ({
            ...prevState, [name] : value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        if ( Object.values(search).includes('')){ 
            setError('Todos los campos son obligatorios');
            return; 
        }
        setError('')
        getDrinks(search)

    }


  return (
    <BootstrapForm onSubmit={handleSubmit}>
        {error && <Alert variant="danger" className="text-center"> {error} </Alert>}
        <Row>
            <Col md={6}>
                <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label htmlFor='nombre' >Nombre de la bebida</BootstrapForm.Label>
                    <BootstrapForm.Control
                        type="text"
                        placeholder="Ej: Tequila, Vodka, etc"
                        name="nombre"
                        id='nombre'
                        value={search.nombre}
                        onChange={handleChange}
                    />
                </BootstrapForm.Group>
            </Col>
            <Col md={6}>
            <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label htmlFor='categoria' >Categoría de la bebida</BootstrapForm.Label>
                    <BootstrapForm.Select
                        id="categoria"
                        name="categoria"
                        onChange={handleChange}
                        value={search.categoria}

                    >
                        <option value=''> - Selecciona la categoría -</option>
                        {categories.map(
                            item => (
                                <option
                                    key={item.strCategory}
                                    value={item.strCategory}
                                >
                                    {item.strCategory}
                                </option>
                            )
                        )}
                    </BootstrapForm.Select>
                </BootstrapForm.Group>
            </Col>
        </Row>
        <Row className="justify-content-end">
            <Col md={3}>
                <Button
                    variant='danger'
                    className="text-uppercase w-100"
                    type='submit'
                >
                    Buscar bebidas
                </Button>
            </Col>
        </Row>
    </BootstrapForm>
  )
}

export default Form
