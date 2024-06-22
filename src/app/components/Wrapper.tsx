export default function Wrapper({children}:{children: React.ReactNode}) {
    return (
        <div className="w-[80%] md:w-[60%] lg:w-[55%] space-y-12 m-auto">
            {children}
        </div>
    )
}