import { projects } from '@/store/projects'
import ProjectCard from '@/pages/ProjectCard'

export default function Projects() {
  return (
    <>
      <section class='mx-auto grid max-w-5xl grid-cols-1 gap-4 px-8 sm:grid-cols-2 lg:grid-cols-3 lg:px-0 '>
        <div class='col-span-full mx-auto mb-8 mt-32 flex flex-col items-center space-y-4 text-center'>
          <p class='font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>
            Projects and Products
          </p>
          <p class='sm:text-lg sm:leading-7'>
            List of all the featured products or side projects I have
          </p>
        </div>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>
    </>
  )
}
