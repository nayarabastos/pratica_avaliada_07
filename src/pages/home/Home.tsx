export default function Home() {
    return (
        <main className="grow w-full max-w-7xl mx-auto px-4 md:px-8 pt-24 md:pt-28 pb-12 md:pb-16 flex flex-col gap-12">
            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white rounded-xl  p-6 md:p-12 ">
                <div className="flex-1 flex flex-col gap-4">
                    <h1 className="text-3xl md:text-5xl font-bold text-blue-600">
                        Inovando o Futuro Digital
                    </h1>
                    <p className="text-base text-slate-600">
                        Construímos soluções tecnológicas inteligentes que
                        aceleram a transformação da sua empresa. Precisão
                        enterprise com a agilidade de uma startup moderna
                    </p>
                    <div className="mt-2">
                        <button className="bg-blue-600 text-white text-base px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium cursor-pointer">
                            Saiba Mais
                        </button>
                    </div>
                </div>
                <div className="flex-1 w-full h-64 md:h-80 rounded-lg overflow-hidden border border-slate-200">
                    <img
                        className="w-full h-full object-cover"
                        alt="Cidade Futurística"
                        src="https://i.imgur.com/mwwHRPa.jpeg"
                    />
                </div>
            </section>
        </main>
    );
}