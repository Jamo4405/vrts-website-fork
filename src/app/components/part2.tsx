import Image from "next/image";
import "./part2.css";

export default function Part2() {
    return (
        <>
            <section className="flex flex-col gap-16 text-stone-600 py-10">
                <h2 className="heading-big">Evaluate</h2>
                <p className="text-center"><span className="font-medium">Quantify</span> supply chain sustainability and
                    secondary market resale values all within the
                    VERITAS dashboard.</p>
                <div className="flex flex-col md:flex-row gap-8 md:gap-5">
                    <div className="w-full flex flex-col gap-2.5">
                        <div className="w-full p-2.5 border border-gray-200 flex flex-col gap-1.5">
                            <h3 className="heading-medium">Environmental Impact<span
                                className="text-gray-400"> (optional)</span></h3>
                            <div
                                className="w-fit rounded-full bg-green-200 border border-green-600 text-green-600 flex items-center pl-1 pr-2 gap-1">
                                <Image className="filter-green-600" src={"./icons/tree.svg"} alt={"tree icon"}
                                       height={24} width={24}/>
                                <div className="text-sm">Carbon Footprint</div>
                            </div>
                            <div className="flex items-center pt-2.5 gap-1 text-sm">
                                <div className="border border-gray-200 px-2 py-1">1.7</div>
                                <div>kg CO2/Product</div>
                                <div className="rounded-md bg-gray-50 ml-2.5 px-2 py-1 text-brand-blue">modify</div>
                            </div>
                        </div>
                        <div className="text-gray-400 text-sm"><span className="underline">Estimate</span> your carbon
                            footprint.
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-2.5">
                        <div className="w-full p-2.5 border border-gray-200 flex flex-col gap-1.5">
                            <div className="w-full flex items-center gap-1.5">
                                <div
                                    className="w-fit rounded-full bg-gray-200 flex items-center pl-2 pr-3 py-1.5 gap-1">
                                    <Image className="filter-stone-600" src={"./icons/tree.svg"} alt={"tree icon"}
                                           height={24} width={24}/>
                                    <div className="text-sm font-medium">Greenhouse Gas Emissions</div>
                                </div>
                                <div className="flex-1 h-9 rounded-full bg-gray-200 flex justify-center">
                                    <Image className="filter-stone-600 mt-0.5" src={"./icons/arrow_down.svg"} alt={"arrow down icon"} height={20} width={20}/>
                                </div>
                            </div>
                            <div className="h-9 rounded-full bg-gray-200"/>
                            <div className="h-9 rounded-full bg-gray-200"/>
                        </div>
                        <div className="text-gray-400 text-sm"><span className="underline">Convey</span> your
                            sustainability in
                            the DPP below.
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-2.5">
                        <div className="w-full p-2.5 border flex flex-col gap-1.5">
                            <div className="w-full flex items-center gap-1.5">
                                <div style={{backgroundColor: "#EDF6FDA1", border: "1px solid #084b7830", color: "#ADB5FE"}}
                                    className="w-fit rounded-full flex items-center pl-2 pr-3 py-1.5 gap-1">
                                    <Image className="filter-ADB5FE" src={"./icons/arrow_upward.svg"} alt={"tree icon"}
                                           height={20} width={20}/>
                                    <div className="text-sm font-medium">47%</div>
                                </div>
                            </div>
                            <div style={{color: "#ADB5FE"}}>The terry-towel shirt (green) has gone up in price on eBay and 2 others.</div>
                        </div>
                        <div className="text-gray-400 text-sm"><span className="underline">Determine</span> your most
                            successful products on the resell markets.
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}