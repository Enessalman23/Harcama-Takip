import { CATEGORIES, CATEGORY_NAMES, formatTL } from '../categories'

export default function ExpenseTable({ expenses, filter, onFilter, onDelete }) {
  const visible = filter === 'Hepsi' ? expenses : expenses.filter((e) => e.category === filter)
  const sorted = [...visible].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <section className="rounded-2xl bg-white p-5 shadow">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h2 className="font-semibold">Harcamalar</h2>
        <select
          aria-label="Kategori filtresi"
          className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm"
          value={filter}
          onChange={(e) => onFilter(e.target.value)}
        >
          <option>Hepsi</option>
          {CATEGORY_NAMES.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      {sorted.length === 0 ? (
        <p className="py-8 text-center text-slate-500">Henüz harcama yok. Yukarıdan ekleyebilirsin.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b text-slate-500">
              <tr>
                <th className="py-2">Tarih</th>
                <th>Açıklama</th>
                <th>Kategori</th>
                <th className="text-right">Tutar</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {sorted.map((e) => (
                <tr key={e.id} className="border-b last:border-0">
                  <td className="py-2.5 whitespace-nowrap">{new Date(e.date).toLocaleDateString('tr-TR')}</td>
                  <td>{e.title}</td>
                  <td>
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${CATEGORIES[e.category]?.badge}`}>
                      {e.category}
                    </span>
                  </td>
                  <td className="text-right font-medium whitespace-nowrap">{formatTL(e.amount)}</td>
                  <td className="text-right">
                    <button
                      onClick={() => onDelete(e.id)}
                      aria-label={`${e.title} harcamasını sil`}
                      className="rounded px-2 py-1 text-red-600 hover:bg-red-50"
                    >
                      Sil
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}
