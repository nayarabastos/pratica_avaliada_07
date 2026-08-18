export default function About() {
    return (
        <main className="grow w-full max-w-7xl mx-auto px-4 md:px-8 pt-24 md:pt-28 pb-12 md:pb-16 flex flex-col gap-12">
            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white rounded-xl  p-6 md:p-12 ">
                <div className="flex-1 flex flex-col gap-4">
                    <h1 className="text-3xl md:text-5xl font-bold text-blue-600">
                        Nossa Missão
                    </h1>
                    <p className="text-base text-slate-600">
                        Transformar o cenário empresarial através da
                        tecnologia. Na TechNexus, acreditamos que a inovação
                        não é apenas um diferencial, mas a espinha dorsal do
                        progresso sustentável. Desenvolvemos soluções
                        robustas, escaláveis e intuitivas que capacitam as
                        organizações a atingirem seu potencial máximo na era
                        digital.
                    </p>
                    <div className="mt-2">
                        
                    </div>
                </div>
                <div className="flex-1 w-full h-64 md:h-80 rounded-lg overflow-hidden border border-slate-200">
                    <img
                        className="w-full h-full object-cover"
                        alt="Reunião Tech Nexus"
                        src="https://i.imgur.com/o0jFxZT.png"
                    />
                </div>
            </section>
        </main>
    );
}