import { useState } from 'react'
import { CATEGORY_NAMES } from '../categories'

const today = () => new Date().toISOString().slice(0, 10)

export default function ExpenseForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState(CATEGORY_NAMES[0])
  const [date, setDate] = useState(today())
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const value = parseFloat(String(amount).replace(',', '.'))
    if (!title.trim()) return setError('Açıklama boş olamaz.')
    if (!Number.isFinite(value) || value <= 0) return setError('Tutar 0’dan büyük bir sayı olmalı.')

    onAdd({ id: crypto.randomUUID(), title: title.trim(), amount: value, category, date })
    setTitle('')
    setAmount('')
    setError('')
  }

  const input =
    'w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400'

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
      <h2 className="mb-4 font-semibold">Yeni harcama ekle</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="text-sm">
          Açıklama
          <input className={input} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Örn. Haftalık market" />
        </label>
        <label className="text-sm">
          Tutar (₺)
          <input className={input} inputMode="decimal" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0,00" />
        </label>
        <label className="text-sm">
          Kategori
          <select className={input} value={category} onChange={(e) => setCategory(e.target.value)}>
            {CATEGORY_NAMES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
        <label className="text-sm">
          Tarih
          <input type="date" className={input} value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
      </div>
      {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
      <button className="mt-4 rounded-lg bg-amber-400 px-5 py-2 font-semibold text-zinc-950 hover:bg-amber-300">
        Ekle
      </button>
    </form>
  )
}
