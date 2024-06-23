export default function Wrapper({children}:{children: React.ReactNode}) {
    return (
        <div className="w-[75%] sm:w-[70%] md:w-[55%] lg:w-[50%] md:text-xl text-black dark:text-gray-300 space-y-12 m-auto pb-16">
            {children}
        </div>
    )
}