export default function Tool({children}:{children:React.ReactNode}) {
    return(
        <h1 className="text-link-light dark:text-link-dark font-semibold hover:underline mx-3 md:text-xl md:mx-5 my-2">    
            {children}
        </h1>
    )
}