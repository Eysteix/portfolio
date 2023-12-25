import { getPage} from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react";

type Props = {
   params: {slug: string}
}

console.log(getPage)

export default async function  Page({params}: Props){

    const page = await getPage(params.slug);

    console.log(page)

    return (
        <div>
        <h1>
            {page.title}
        </h1>

        <p className="text-lg text-gray-700 ">
            <PortableText value={page.content}/></p>
        </div>
    )
}
