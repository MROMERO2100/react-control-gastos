import { useState, useEffect } from 'react'
import { formatearMonto } from '../helpers'

const BudgetControl = ({ budget, expense }) => {

    const [balance, setBalance] = useState(0);
    const [amountExpense, setAmountExpense] = useState(0);

    useEffect(() => {
        const totalAmountExpense = expense.reduce((total, gasto) => gasto.cantidad + total, 0)
        const totalBalance =(budget-totalAmountExpense);
        
        setAmountExpense(totalAmountExpense);
        setBalance(totalBalance);
    }, [expense])

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <p>Grafica va Aca</p>
            </div>
            <div className='contenido-presupuesto'>
                <p><span>Presupuesto: </span> {formatearMonto(budget)}</p>
                <p><span>Gastos:      </span> {formatearMonto(amountExpense)}</p>
                <p><span>Disponible:  </span> {formatearMonto(balance)}</p>
            </div>
        </div>
    )
}

export default BudgetControl
