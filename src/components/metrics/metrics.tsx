export default function Metrics() {
    return (
        <section className="w-full min-h-[50dvh] bg-[#F4F4F4] ">
            <div className="w-[80dvw] mx-auto flex flex-col gap-5 py-10 lg:py-0 lg:flex-row flex-wrap items-center min-h-[50dvh]">
                <div className="w-60">
                    <h1 className="text-3xl text-[#1C1C1C] font-bold">Insights and Performance Metrics</h1>
                </div>
                <div className="flex flex-row flex-wrap gap-5">
                    <div className="bg-[#1C1C1C] rounded-md w-72 h-32 flex flex-col items-center justify-center">
                        <span className="text-white font-bold text-lg">5000+</span>
                        <span className="text-xs text-white">Total Listings in the System</span>
                    </div>
                    <div className="bg-[#1C1C1C] rounded-md w-72 h-32 flex flex-col items-center justify-center">
                        <span className="text-white font-bold text-lg">1000+</span>
                        <span className="text-xs text-white">Active Listings</span>
                    </div>
                    <div className="bg-[#1C1C1C] rounded-md w-72 h-32 flex flex-col items-center justify-center">
                        <span className="text-white font-bold text-lg">30+</span>
                        <span className="text-xs text-white">Articles in the Blog</span>
                    </div>
                </div>
            </div>
        </section>
    )
}