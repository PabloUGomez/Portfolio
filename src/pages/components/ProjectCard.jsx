import ListarTech from './ListarTech'

export default function ProjectCard({ project }) {
  const { id, title, description, imageUrl, tech, year, state, link } = project
  let rowWrap = ''
  if (id % 2 === 0) {
    rowWrap = 'row-reverse;'
  } else {
    rowWrap = 'row-wrap;'
  }
  return (
    <>
      <div class='col-span-full'>
        <article
          class='group relative flex-col col-span-full flex items-center gap-2 space-y-2 py-12 md:flex-row flex-wrap md:flex-nowrap'
          style={{ 'flex-direction': rowWrap }}
        >
          <a
            href={`/projects/${title}`}
            class='aspect-video max-w-lg overflow-hidden cursor-pointer shadow-lg rounded-xl bg-muted'
          >
            <img
              alt={title}
              loading='lazy'
              width='850'
              decoding='async'
              data-nimg='1'
              class='transition-transform ease-out group-hover:scale-105'
              src={imageUrl}
            />
          </a>
          <div class='w-full bg-gradient-to-t to-transparent p-6'>
            <h2 class='text-xl font-extrabold text-pretty text-white md:text-2xl'>
              {description}
            </h2>
            <p class='mt-2 flex items-center gap-2 truncate'>
              {title} - {year}
              {state === 'live' && (
                <a
                  href={link}
                  target='_blank'
                  class='max-w-fit truncate rounded-full px-3 py-1 text-sm font-bold uppercase bg-green-500 text-green-800'
                >
                  live
                </a>
              )}
            </p>
            <div className='mt-4 flex flex-row gap-x-2 items-center'>
              {tech.map((t) => (
                <ListarTech key={t} tech={t} />
              ))}
            </div>
          </div>
        </article>
      </div>
    </>
  )
}