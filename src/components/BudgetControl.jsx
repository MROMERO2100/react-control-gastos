import { useState, useEffect } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css";
import { formatearMonto } from '../helpers'

const BudgetControl = ({ budget, expense }) => {

    const [porcentaje, setPorcentaje] = useState(0);
    const [balance, setBalance] = useState(0);
    const [amountExpense, setAmountExpense] = useState(0);

    useEffect(() => {
        const totalAmountExpense = expense.reduce((total, gasto) => gasto.cantidad + total, 0)
        const totalBalance = (budget - totalAmountExpense);

        //PORCENTAJE GASTADO
        const newPorcentaje = (((balance - totalBalance) / balance) * 100).toFixed(2);

        setAmountExpense(totalAmountExpense);
        setBalance(totalBalance);
        setTimeout(() => {
            setPorcentaje(newPorcentaje);
        }, 1000);
    }, [expense])

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <CircularProgressbar
                    value={porcentaje}
                />
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
