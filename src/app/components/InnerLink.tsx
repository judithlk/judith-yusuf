import Link from "next/link"

export default function InnerLink({href, children, target}:{href:any, children:React.ReactNode, target:string}) {
    return (
        <Link href={href} className="text-link-light dark:text-link-dark hover:underline font-semibold" target={target}>
            {children}
        </Link>
    )
}