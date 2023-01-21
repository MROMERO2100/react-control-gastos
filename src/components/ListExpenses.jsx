import React from 'react'
import Expense from './Expense'

const ListExpenses = ({ expense, setExpenseEdit, deleteExpense, filter, expensesFiltered }) => {
    return (
        <div className='listado-gastos contenedor'>
            {
                filter ? (
                    <>
                        <h2>{expensesFiltered.length ? 'Gastos' : 'No hay Gastos Registrados en Esta Categoria'}</h2>
                        {
                            expensesFiltered.map(gasto => (
                                <Expense
                                    key={gasto.id}
                                    gasto={gasto}
                                    setExpenseEdit={setExpenseEdit}
                                    deleteExpense={deleteExpense}
                                />
                            ))
                        }
                    </>
                ) :
                    (
                        <>
                            <h2>{expense.length ? 'Gastos' : 'No hay Gastos Registrados'}</h2>
                            {
                                expense.map(gasto => (
                                    <Expense
                                        key={gasto.id}
                                        gasto={gasto}
                                        setExpenseEdit={setExpenseEdit}
                                        deleteExpense={deleteExpense}
                                    />
                                ))
                            }
                        </>
                    )
            }
        </div>
    )
}

export default ListExpenses
