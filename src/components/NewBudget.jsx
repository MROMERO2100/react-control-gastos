import React from 'react'

const NewBudget = ({ budget, setBudget }) => {
    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form className='formulario'>
                <div className='campo'>
                    <label>Defina Presupuesto</label>
                    <input className='nuevo-presupuesto' type="number" placeholder='Agrega tu Presupuesto' min='0' value={budget}
                        onChange={e => setBudget(e.target.value)} />
                    <input type='submit' value='Agregar' />
                </div>
            </form>
        </div>
    )
}

export default NewBudget
