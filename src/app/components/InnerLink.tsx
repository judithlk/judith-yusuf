import Link from "next/link"

export default function InnerLink({href, children}:{href:any, children:React.ReactNode}) {
    return (
        <Link href={href} className="text-link-light hover:underline font-semibold">
            {children}
        </Link>
    )
}