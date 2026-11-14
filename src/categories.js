// Kategori adı -> rozet ve çubuk renkleri (Tailwind sınıfları tam yazıldığı için derlemeye dahil olur)
export const CATEGORIES = {
  Market: { badge: 'bg-emerald-100 text-emerald-700', bar: 'bg-emerald-500' },
  Fatura: { badge: 'bg-amber-100 text-amber-700', bar: 'bg-amber-500' },
  Ulaşım: { badge: 'bg-sky-100 text-sky-700', bar: 'bg-sky-500' },
  Eğlence: { badge: 'bg-pink-100 text-pink-700', bar: 'bg-pink-500' },
  Sağlık: { badge: 'bg-rose-100 text-rose-700', bar: 'bg-rose-500' },
  Eğitim: { badge: 'bg-indigo-100 text-indigo-700', bar: 'bg-indigo-500' },
  Diğer: { badge: 'bg-slate-200 text-slate-700', bar: 'bg-slate-500' },
}

export const CATEGORY_NAMES = Object.keys(CATEGORIES)

export const formatTL = (n) =>
  new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(n)
