import React from './React.jsx'
import Astro from './Astro.jsx'

export default function Footer() {
  return(
    <footer>
      <div class='flex items-center justify-center'>
        <div class='mb-28 mt-10 flex flex-col items-center justify-center gap-2.5'>
          <div class='flex h-9 w-70 items-center justify-center gap-2 rounded-lg px-3 border border-slate-800 bg-gradient-to-b from-transparent to-black/20 text-sm font-medium text-neutral-100 text-opacity-80 shadow'>
            <p>Cooked with love in</p>
            <img
              class='size-5 rounded-full'
              src='/argIcon.png'
              alt='Bandera de Argentina'
            />
            with{' '}
            <span class='flex justify-center items-center gap-x-2'>
            <Astro class='size-5' />
              &<React class='size-5' />
            </span>
          </div>
          <div class='mt-3 text-xs font-medium leading-none text-white text-opacity-30'>
            © Pablo Gomez - 2024
          </div>
        </div>
      </div>
    </footer>
  )
}
