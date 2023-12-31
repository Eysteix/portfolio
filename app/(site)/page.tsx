import { getProjects } from '@/sanity/sanity-utils'
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const projects = await getProjects( );
  return (
   <div>
      <h1 className='text-7xl font-extrabold'>Hello I&apos;m <span className='bg-gradient-to-r from-blue-500 via-purple-500 to-green-300 bg-clip-text text-transparent'>Marvel</span>!</h1>

      <p className='mt-3 text-slate-300 text-sl'>Hello everyone! Check out my projects!</p>
      <h2 className='mt-24 font-bold text-gray-700 text-3xl'  >My Projects</h2>

      <div className="mt-5 grid grid-cols-1 gap-8 md:grid-cols-2  lg:grid-cols-3 " >
      {
      projects.map((project) =>(
        <Link key={project._id}  href={`/projects/${project.slug}`} className='border border-gray-100 rounded-lg p-3 bg-slate-100 hover:scale-105 hover:border-blue-400 transition'>
         {
          project.image && (
            <Image
            src={project.image}

            alt={project.name}

            width={700}

            height={300}

             className='object-cover rounded-lg border border-gray-500 w-full h-[80%]'
             />
          )
         }


          <div className='font-extrabold bg-gradient-to-r from-blue-600 via-orange-500 bg-clip-text text-transparent text-2xl p-3'>{project.name}
          </div>
          </Link>
      ))
    }
      </div>
   </div>
  )
  }

