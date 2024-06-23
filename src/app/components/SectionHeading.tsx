import { Inter, Lato, Kalam } from "next/font/google";

const kalam = Kalam({subsets: ["latin"], weight: ["400"]})

export default function SectionHeading({title}:{title:string}) {
    return(
        <h1 className={`text-subhead-light dark:text-subhead-dark text-3xl ${kalam.className}`}>
            {title}
        </h1>
    )
}