import Typewriter from "./Typewriter";

export default function Hero({onclick}){
    return(
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container mx-auto flex flex-col items-center px-4 py-32 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                <h1 className="text-4xl font-bold leading-none sm:text-5xl">
                    Predict Your Home's Value with {<Typewriter text = "Confidence" delay = {100} />}
                </h1>
                <p className="px-8 mt-8 mb-12 text-lg">
                    Effortlessly estimate the market value of any property. Our advanced AI-driven tool provides accurate and reliable predictions to help you make informed real estate decisions.
                </p>
                <div className="flex flex-col flex-wrap justify-center md:flex-row">
                    <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50" onClick={onclick}>Get Started</button>
                    <button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-900 dark:border-gray-300">Learn More</button>
                </div>
            </div>
        </section>
    )
}
