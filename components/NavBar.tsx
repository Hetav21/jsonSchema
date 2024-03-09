import Link from 'next/link'

export default function () {
    return (
        <main style={{display: 'flex'}} className="z-10 xl:rounded-xl pt-4 mx-auto" >
        <header className="w-full bg-white fixed top-0 z-[170] shadow-xl drop-shadow-lg">
        <div className="w-full flex md:justify-between items-center ml-8 2xl:px-12 py-4">
            <a className="" href="/"><img src="https://json-schema.org/img/logos/logo-blue.svg" className="h-12 mr-2 "></img></a>
            <div className="flex justify-end mr-8 w-full">
                <Link href="/" className="hidden lg:block hover:underline font-semibold p-2 md:p-4 text-slate-600 hover:text-primary">Welcome Page</Link>
                <Link href="/docs" className="hidden lg:block hover:underline font-semibold p-2 md:p-4 text-slate-600 hover:text-primary">Docs</Link>
                <Link href="/validate" className="hidden lg:block hover:underline font-semibold p-2 md:p-4 text-slate-600 hover:text-primary">Validation</Link>
        <div className="flex items-center justify-end mr-8"></div>
        </div>
        </div>
        </header>
        </main>
    )
}