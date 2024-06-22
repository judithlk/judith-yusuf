export default function Wrapper({children}:{children: React.ReactNode}) {
    return (
        <div className="w-[80%] md:w-[60%] lg:w-[50%] md:text-xl space-y-12 m-auto pb-16">
            {children}
        </div>
    )
}