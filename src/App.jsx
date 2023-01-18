import { useState, useEffect } from 'react'
import Header from './components/Header'
import ListExpenses from './components/ListExpenses'
import Modal from './components/Modal'
import { generateID } from './helpers'
import btnNewExp from './img/nuevo-gasto.svg'

function App() {

  const [budget, setBudget] = useState(0);
  const [isValidbudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const [expense, setExpense] = useState([]);

  const [expenseEdit, setExpenseEdit] = useState({});

  useEffect(() => {
    if (Object.keys(expenseEdit).length > 0) {
      handleNewExpense()
    }
  }, [expenseEdit])

  const handleNewExpense = () => {
    setModal(true);

    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  }

  const saveExpense = getExpense => {
    //console.log(expense);
    getExpense.id = generateID();
    getExpense.fecha = Date.now();
    setExpense([...expense, getExpense]);

    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        expense={expense}
        budget={budget}
        setBudget={setBudget}
        isValidbudget={isValidbudget}
        setIsValidBudget={setIsValidBudget}
      />
      {isValidbudget && (
        <>
          <main>
            <ListExpenses
              expense={expense}
              setExpenseEdit={setExpenseEdit}
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
      />}
    </div>
  )
}

export default App
