import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

 type Props = {
    params:{project:string};
 };

export default async function Project({params}:Props){


    const slug = params.project;

    const project = await getProject(slug);

    return <div >
        <header className="flex items-center justify-between align-middle p-3">
       <h1 className="bg-gradient-to-l from-green-500 to-blue-300 bg-clip-text text-transparent text-5xl font-extrabold"> {project.name}</h1>

       <a href={project.url} title="View Project" target="_blank" rel="nopener noreferrer" className="bg-gray-100 rounded-lg text-gray-500 font-bold p-3 hover:text-blue-500 transition hover:border-blue-200 hover:border-2 whitespace-nowrap">
        View Project
       </a>
        </header>

      {/* content goes here */}

     <p className="text-lg text-gray-700 "><PortableText value={project.content}/></p>

     <Image src={project.image} alt={project.name}  width={1920} height={1080} className="mt-10 border-2 border-gray-700 object-cover rounded-xl"/>

        </div>
}
