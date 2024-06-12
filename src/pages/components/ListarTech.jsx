import Astro from './icons/Astro.jsx'
import React from './icons/React.jsx'
import Tailwind from './icons/Tailwind.jsx'
import TypeScript from './icons/TypeScript.jsx'
import Svelte from './icons/Svelte.jsx'
import Vite from './icons/Vite.jsx'
import JavaScript from './icons/JavaScript.jsx'
import NextJs from './icons/NextJs.jsx'
import Prisma from './icons/Prisma.jsx'
import SQLite from './icons/SQLite.jsx'
import Stripe from './icons/Stripe.jsx'

export default function ListarTech({ tech }) {
  return (
    <>
      {tech === 'NextJs' && (
        <span className='rounded-lg p-1 hover:bg-white/25'>
          <NextJs />
        </span>
      )}
      {tech === 'Astro' && (
        <span className='rounded-lg p-1 hover:bg-white/25'>
          <Astro class='size-7' />
        </span>
      )}
      {tech === 'React' && (
        <span className='rounded-lg p-1 hover:bg-white/25'>
          <React class='size-7' />
        </span>
      )}
      {tech === 'Tailwind' && (
        <span className='rounded-lg p-1 hover:bg-white/25'>
          <Tailwind class='size-7' />
        </span>
      )}
      {tech === 'TypeScript' && (
        <span className='rounded-lg p-1 hover:bg-white/25'>
          <TypeScript class='size-7' />
        </span>
      )}
      {tech === 'Svelte' && (
        <span className='rounded-lg p-1 hover:bg-white/25'>
          <Svelte class='size-7' />
        </span>
      )}
      {tech === 'Vite' && (
        <span className='rounded-lg p-1 hover:bg-white/25'>
          <Vite class='size-7' />
        </span>
      )}
      {tech === 'JavaScript' && (
        <span className='rounded-lg p-1 hover:bg-white/25'>
          <JavaScript class='size-7' />
        </span>
      )}
      {tech === 'Prisma' && (
        <span className='rounded-lg p-1 hover:bg-white/25'>
          <Prisma class='size-7' />
        </span>
      )}
      {tech === 'SQLite' && (
        <span className='rounded-lg p-1 hover:bg-white/25'>
          <SQLite class='size-7' />
        </span>
      )}
      {tech === 'Stripe' && (
        <span className='rounded-lg p-1 hover:bg-white/25'>
          <Stripe class='size-7' />
        </span>
      )}
    </>
  )
}
