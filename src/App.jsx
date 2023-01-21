import { useState, useEffect } from 'react'
import Header from './components/Header'
import ListExpenses from './components/ListExpenses'
import Modal from './components/Modal'
import ExpenseFilter from './components/ExpenseFilter'
import { generateID } from './helpers'
import btnNewExp from './img/nuevo-gasto.svg'

function App() {
  const [budget, setBudget] = useState(Number(localStorage.getItem('budget')) ?? 0);
  const [isValidbudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const [expense, setExpense] = useState(localStorage.getItem('expense') ? JSON.parse(localStorage.getItem('expense')) : []);
  const [expenseEdit, setExpenseEdit] = useState({});

  const [filter, setFilter] = useState('');
  const [expensesFiltered, setexpensesFiltered] = useState([]);

  useEffect(() => {
    if (Object.keys(expenseEdit).length > 0) {
      setModal(true);
      setTimeout(() => {
        setAnimateModal(true);
      }, 500);
    }
  }, [expenseEdit])

  useEffect(() => {
    localStorage.setItem('budget', budget ?? 0);
  }, [budget])

  useEffect(() => {
    localStorage.setItem('expense', JSON.stringify(expense) ?? []);
  }, [expense])

  useEffect(() => {
    if (filter) {
      const expensesFiltered = expense.filter(newExpenses => newExpenses.categoria ===filter );
      setexpensesFiltered(expensesFiltered);
    }
  }, [filter])

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem('budget'));
    if (budgetLS > 0) {
      setIsValidBudget(true);
    }
  }, [])

  const handleNewExpense = () => {
    setModal(true);
    setExpenseEdit({})

    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  }

  const saveExpense = getExpense => {
    //console.log(expense);
    if (getExpense.id) {
      //UPDATE EXPENSE
      const expenseEdit = expense.map(gastoState => gastoState.id === getExpense.id ? getExpense : gastoState)
      setExpense(expenseEdit);
      setExpenseEdit({});
    } else {
      //NEW EXPENSE
      getExpense.id = generateID();
      getExpense.fecha = Date.now();
      setExpense([...expense, getExpense]);
    }
    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  }

  const deleteExpense = id => {
    //console.log('Eliminando Gasto ID: ' + id);
    const expenseEdit = expense.filter(gasto => gasto.id !== id)
    setExpense(expenseEdit);
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        expense={expense}
        setExpense={setExpense}
        budget={budget}
        setBudget={setBudget}
        isValidbudget={isValidbudget}
        setIsValidBudget={setIsValidBudget}
      />
      {isValidbudget && (
        <>
          <main>
            <ExpenseFilter
              filter={filter}
              setFilter={setFilter}
            />
            <ListExpenses
              expense={expense}
              setExpenseEdit={setExpenseEdit}
              deleteExpense={deleteExpense}
              filter={filter}
              expensesFiltered={expensesFiltered}

            />
          </main>
          <div className='nuevo-gasto'>
            <img src={btnNewExp}
              alt='Icono Agrega Gasto'
              onClick={handleNewExpense}
            />
          </div>
        </>
      )}
      {modal && <Modal
        setModal={setModal}
        animateModal={animateModal}
        setAnimateModal={setAnimateModal}
        saveExpense={saveExpense}
        expenseEdit={expenseEdit}
        setExpenseEdit={setExpenseEdit}
      />}
    </div>
  )
}

export default App
