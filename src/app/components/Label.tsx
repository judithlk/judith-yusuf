export default function Label({title}:{title:string}) {
    return(
        
            <h3 className="inline-block mx-1 my-1 rounded-full px-2 py-1 text-xs text-white bg-label-light dark:bg-label-light dark:hover:bg-label-hover-dark dark:hover:text-link-light cursor-none">{title}</h3>
    )
}