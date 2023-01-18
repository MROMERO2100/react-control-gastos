import { useState } from 'react'
import Header from './components/Header'


function App() {

  const [budget, setBudget] = useState(0);
  const [isValidbudget, setIsValidBudget] = useState(false);

  return (
    <div>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidbudget={isValidbudget}
        setIsValidBudget={setIsValidBudget} />
    </div>
  )
}

export default App
