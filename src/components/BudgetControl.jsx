import { useState, useEffect } from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css";
import { formatearMonto } from '../helpers'

const BudgetControl = ({ budget, setBudget, expense, setExpense, setIsValidBudget }) => {

    const [balance, setBalance] = useState(0);
    const [amountExpense, setAmountExpense] = useState(0);
    const [porcentaje, setPorcentaje] = useState(0);

    useEffect(() => {
        const totalAmountExpense = expense.reduce((total, gasto) => gasto.cantidad + total, 0)
        const totalBalance = (budget - totalAmountExpense);

        //PORCENTAJE GASTADO
        const newPorcentaje = (((budget - totalBalance) / budget) * 100).toFixed(2);

        setAmountExpense(totalAmountExpense);
        setBalance(totalBalance);
        setTimeout(() => {
            setPorcentaje(newPorcentaje);
        }, 1000);
    }, [expense])

    const handelResetApp = () => {
        const result = confirm('Esta seguro que desea reiniciar el presupuesto y los gatos.?');
        if (result) {
            setBudget([]);
            setExpense([]);
            setIsValidBudget(false);
        }
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <CircularProgressbar
                    value={porcentaje}
                    //text={`${Number.isFinite(porcentaje) ? porcentaje : amountExpense}% Gastado`}
                    text={Number.isFinite(porcentaje) ? porcentaje + ' % Gastado' : formatearMonto(amountExpense)+' Gastados'}
                    styles={buildStyles({
                        pathColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
                        trailColor: '#F5F5F5',
                        textColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
                    })}
                />
            </div>
            <div className='contenido-presupuesto'>
                <button className='reset-app' type='button' onClick={handelResetApp}

                >
                    Reiniciar App
                </button>
                <p><span>Presupuesto: </span> {formatearMonto(budget)}</p>
                <p><span>Gastos:      </span> {formatearMonto(amountExpense)}</p>
                <p className={`${balance < 0 ? 'negativo' : ''}`}><span>Disponible:  </span> {formatearMonto(balance)}</p>
            </div>
        </div>
    )
}

export default BudgetControl
