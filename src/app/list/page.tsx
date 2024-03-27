'use client'
 
import { Metadata } from 'next';
import { useSearchParams } from 'next/navigation'

export const metadata: Metadata = {
  title: "List",
  description: "This is List page shop",
  keywords: ['shop', 'ecommerce', 'sell',"card"]
};
 
export default function SortProducts() {
  const searchParams = useSearchParams()
 
  function updateSorting(sortOrder: string) {
    const params = new URLSearchParams(searchParams.toString())
    params.set('sort', sortOrder)
    window.history.pushState(null, '', `?${params.toString()}`)
  }
 
  return (
    <>
      <button onClick={() => updateSorting('asc')}>Sort Ascending</button>
      <button onClick={() => updateSorting('desc')}>Sort Descending</button>
    </>
  )
}