import React from 'react'
import BudgetControl from './BudgetControl'
import NewBudget from './NewBudget'
BudgetControl

const Header = ({ budget, setBudget, isValidbudget, setIsValidBudget }) => {
    return (
        <header>
            <h1>Planificador de Gastos</h1>
            {isValidbudget ?
                (<BudgetControl
                    budget={budget}
                />)
                :
                (<NewBudget
                    budget={budget}
                    setBudget={setBudget}
                    setIsValidBudget={setIsValidBudget}
                />)
            }
        </header>
    )
}

export default Header
