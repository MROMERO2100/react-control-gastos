import { useState, useEffect } from 'react'

const ExpenseFilter = ({ filter, setFilter }) => {
    return (
        <div className='filtros sombra contenedor'>
            <label>Filtrar Por Categoria </label>
            <select
                value={filter}
                onChange={e => setFilter(e.target.value)}
            >
                <option value=''>-- Mostrar Todos --</option>
                <option value='ahorro'>Ahorro</option>
                <option value='comida'>Comida</option>
                <option value='casa'>Casa</option>
                <option value='gastos'>Gastos Varios</option>
                <option value='salud'>Salud</option>
                <option value='ocio'>Ocio</option>
                <option value='suscripciones'>Suscripciones</option>
            </select>
        </div>
    )
}

export default ExpenseFilter
