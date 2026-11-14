import { useState } from 'react'
import useLocalStorage from './hooks/useLocalStorage'
import SummaryCards from './components/SummaryCards'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'

export default function App() {
  const [expenses, setExpenses] = useLocalStorage('harcamalar', [])
  const [filter, setFilter] = useState('Hepsi')

  const addExpense = (expense) => setExpenses((list) => [...list, expense])
  const deleteExpense = (id) => setExpenses((list) => list.filter((e) => e.id !== id))

  return (
    <main className="mx-auto max-w-4xl space-y-6 px-4 py-8">
      <header>
        <h1 className="text-3xl font-bold">Harcama Takipçisi</h1>
        <p className="text-slate-500">Harcamalarını ekle, kategoriye göre takip et. Veriler tarayıcında saklanır.</p>
      </header>
      <SummaryCards expenses={expenses} />
      <ExpenseForm onAdd={addExpense} />
      <ExpenseTable expenses={expenses} filter={filter} onFilter={setFilter} onDelete={deleteExpense} />
    </main>
  )
}
