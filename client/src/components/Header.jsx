import image from '../assets/download.png'
export default function Header(){
    return(
        <>
            <header className="p-4 bg-slate-900 text-gray-100">
                <div className="container flex justify-between h-10 mx-auto">
                    <a rel="noopener noreferrer" href="/" aria-label="Back to homepage" className="flex items-center p-2">
                        <img className="h-16" src={image} alt="Symbol"/>
                    </a>
                    <ul className="items-stretch hidden space-x-3 md:flex">
                        <li className="flex">
                            <a rel="noopener noreferrer" href="/" className="flex items-center px-4 -mb-1 dark:border-">Home</a>
                        </li>
                        
                        <li className="flex">
                            <a rel="noopener noreferrer" href="/predict" className="flex items-center px-4 -mb-1 dark:border-">Predict </a>
                        </li>
                        <li className="flex">
                            <a rel="noopener noreferrer" href="/about" className="flex items-center px-4 -mb-1 dark:border-">About</a>
                        </li>
                        <li className="flex">
                            <a rel="noopener noreferrer" href="https://github.com/techcsispit/House-Price-Prediction/" className="flex items-center px-4 -mb-1 dark:border-">Github</a>
                        </li>
                    </ul>
                    <button className="flex justify-end p-4 md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </>
    )
}