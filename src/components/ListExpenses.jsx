import React from 'react'
import Expense from './Expense'

const ListExpenses = ({ expense, setExpenseEdit, deleteExpense }) => {
    return (
        <div className='listado-gastos contenedor'>
            <h2>{expense.length ? 'Gastos' : ''}</h2>

            {expense.map(gasto => (
                <Expense
                    key={gasto.id}
                    gasto={gasto}
                    setExpenseEdit={setExpenseEdit}
                    deleteExpense={deleteExpense}
                />
            ))}
        </div>
    )
}

export default ListExpenses
