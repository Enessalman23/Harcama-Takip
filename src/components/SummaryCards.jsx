import { useState } from 'react'
import { CATEGORIES, formatTL } from '../categories'

export default function SummaryCards({ expenses }) {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0)

  // Ay bilgisi bileşen ilk oluşturulurken bir kez hesaplanır, örn. "2026-11"
  const [thisMonth] = useState(() => new Date().toISOString().slice(0, 7))
  const monthTotal = expenses
    .filter((e) => e.date.startsWith(thisMonth))
    .reduce((sum, e) => sum + e.amount, 0)

  const byCategory = expenses.reduce((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + e.amount
    return acc
  }, {})
  const sorted = Object.entries(byCategory).sort((a, b) => b[1] - a[1])

  return (
    <section className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-amber-400 p-5 text-zinc-950 shadow-lg shadow-amber-500/10">
          <p className="text-sm font-medium opacity-70">Toplam harcama</p>
          <p className="mt-1 text-3xl font-bold">{formatTL(total)}</p>
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
          <p className="text-sm text-zinc-400">Bu ay</p>
          <p className="mt-1 text-2xl font-semibold">{formatTL(monthTotal)}</p>
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
          <p className="text-sm text-zinc-400">Kayıt sayısı</p>
          <p className="mt-1 text-2xl font-semibold">{expenses.length}</p>
        </div>
      </div>

      {sorted.length > 0 && (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
          <h2 className="mb-3 font-semibold">Kategorilere göre dağılım</h2>
          <ul className="space-y-2">
            {sorted.map(([cat, amount]) => (
              <li key={cat}>
                <div className="flex justify-between text-sm">
                  <span>{cat}</span>
                  <span className="text-zinc-400">{formatTL(amount)}</span>
                </div>
                <div className="mt-1 h-2 rounded-full bg-zinc-800">
                  <div
                    className={`h-2 rounded-full ${CATEGORIES[cat]?.bar ?? 'bg-zinc-400'}`}
                    style={{ width: `${(amount / total) * 100}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}
