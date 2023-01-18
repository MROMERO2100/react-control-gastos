import { useState } from 'react'
import Message from './Message';

const NewBudget = ({ budget, setBudget, setIsValidBudget }) => {
    const [mensaje, setMensaje] = useState('');

    const handleBudget = (e) => {
        e.preventDefault();
        if (!budget || budget < 0) {
            setMensaje('Datos no validos')
            return
        }
        setMensaje('');
        setIsValidBudget(true);
    }
    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form onSubmit={handleBudget} className='formulario'>
                <div className='campo'>
                    <label>Defina Presupuesto</label>
                    <input className='nuevo-presupuesto' type="number" placeholder='Agrega tu Presupuesto' min='0' value={budget}
                        onChange={e => setBudget(Number(e.target.value))} />
                    <input type='submit' value='Agregar' />
                    {mensaje && <Message tipo='error'> {mensaje}</Message>}
                </div>
            </form>
        </div>
    )
}

export default NewBudget
