import React from 'react'

export default function Header() {
  return (
    <header>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Namma</span>
            <span className='text-slate-700'>Mane</span>
        </h1>
        <form>
            <input type="text" placeholder='search...' />
        </form>
    </header>
  )
}
