
import './App.css'
import Carts from './Carts';
import { useGlobalContext } from './context'

function App() {

  const { amount, clearCart, total } = useGlobalContext();

  return (
    <>
      <h2>Reduce</h2>
      <h2>{ amount }</h2>
      <h2>{ total }</h2>
      
      <Carts />

      <button onClick={() => clearCart()}>clealAll</button>
        
    </>
  )
}

export default App
