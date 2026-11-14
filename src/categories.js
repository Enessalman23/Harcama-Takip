// Kategori adı -> rozet ve çubuk renkleri (Tailwind sınıfları tam yazıldığı için derlemeye dahil olur)
export const CATEGORIES = {
  Market: { badge: 'bg-emerald-500/15 text-emerald-300', bar: 'bg-emerald-400' },
  Fatura: { badge: 'bg-red-500/15 text-red-300', bar: 'bg-red-400' },
  Ulaşım: { badge: 'bg-sky-500/15 text-sky-300', bar: 'bg-sky-400' },
  Eğlence: { badge: 'bg-pink-500/15 text-pink-300', bar: 'bg-pink-400' },
  Sağlık: { badge: 'bg-teal-500/15 text-teal-300', bar: 'bg-teal-400' },
  Eğitim: { badge: 'bg-lime-500/15 text-lime-300', bar: 'bg-lime-400' },
  Diğer: { badge: 'bg-zinc-500/20 text-zinc-300', bar: 'bg-zinc-400' },
}

export const CATEGORY_NAMES = Object.keys(CATEGORIES)

export const formatTL = (n) =>
  new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(n)
