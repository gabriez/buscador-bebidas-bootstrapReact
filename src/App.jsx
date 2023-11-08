import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { CategoriaProvider } from './context/CategoriasProvider'
import Form from './components/Form'
import ModalDrink from './components/ModalDrink'
import DrinksList from './components/DrinksList'
import { BebidasProvider } from './context/BebidasProvider'


function App() {

  return (
    <CategoriaProvider>
      <BebidasProvider>

        <header className="py-5">
          <h1>Buscador de bébidas</h1>
        </header>

        <Container className='mt-5'>
          <Form/>
          <DrinksList/>
          <ModalDrink/>
        </Container>
      </BebidasProvider>
    </CategoriaProvider>
  )
}

export default App
