import "./part1.css";
import Image from "next/image";

export default function Part1() {
    return (
        <>
            <div className="fixed w-screen top-0 left-0 flex items-center p-4 md:p-10 z-50">
                <div className="flex items-center gap-2">
                    <Image src={"/logo.png"} alt={"logo"} width={60} height={60}/>
                    <p className="text-effect text-3xl md:text-5xl">VERITAS ®</p>
                </div>
                <div className="flex-grow" />
                {/* Mobile */}
                <div className="md:hidden flex">

                </div>
                {/* Desktop */}
                <div className="hidden md:flex">
                    <div className="nav-bar flex flex-row items-center">
                        <div className="nav-l nav-bar flex flex-row items-center">
                            <a href="#home" className="nav-mini-text text-effect underline-effect">
                                HOME
                            </a>
                            <a href="#features" className="nav-mini-text text-effect underline-effect">
                                FEATURES
                            </a>
                            <a href="#use-cases" className="nav-mini-text text-effect underline-effect">
                                USE CASES
                            </a>
                        </div>
                        <div className="nav-r">
                            <a
                            href="mailto:jamyson@vrts.world?subject=Interested%20In%20VERITAS%20®&body=Hello%20Veritas%20%C2%AE%20team,%0A%0AWe%20are%20interested%20in%20your%20product%20and%20would%20love%20to%20chat!!%0A%0ACheers!"
                            className="nav-mini-text-b text-effect-b underline-effect-b"
                            >
                                CONNECT
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="the-header fixed top-0 left-0 w-full z-10">
            <section className="flex flex-row justify-between items-center the-header-adjustment">
                <div className="flex flex-row justify-start items-center">
                    <Image src={"/logo.png"} alt={"logo"} className={"the-logo"} width={400} height={360} />
                    <p className="the-font-text text-effect">VERITAS ®</p>
                </div>
                <div className="nav-bar flex flex-row items-center">
                    <div className="nav-l nav-bar flex flex-row items-center">
                        <p className="nav-mini-text text-effect underline-effect">
                            <span>HOME</span>
                        </p>
                        <p className="nav-mini-text text-effect underline-effect">
                            FEATURES
                        </p>
                        <p className="nav-mini-text text-effect underline-effect">
                            USE CASES
                        </p>
                    </div>
                    <div className="nav-r">
                        <p className="nav-mini-text-b text-effect-b underline-effect-b">
                            ABOUT US
                        </p>
                    </div>
                </div>
            </section>
        </div>*/}
        
        <section className="the-problem flex flex-col justify-center items-center">
            <div className="ticket-items flex flex-col md:flex-row">
                <div className="individual-tickets ticket-width w-full md:w-auto px-4 mb-8 md:mb-0 relative">
                    <img src="/int-1.png" className="the-ticket w-full max-w-[300px] mx-auto"></img>
                    <p className="text-gray-400 text-sm text-center pt-5">
                        <span className="underline">US$250B</span> are lost each year due to counterfeit products.
                    </p>
                    <span className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 text-effect text-l">
                        1
                    </span>
                </div>
                <div className="individual-tickets ticket-width w-full md:w-auto px-4 mb-8 md:mb-0 relative">
                    <img src="/int-2.png" className="the-ticket w-full max-w-[300px] mx-auto"></img>
                    <p className="text-gray-400 text-sm text-center pt-5">
                        <span className="underline">Only 19%</span> of companies in the fashion industry have visibility over their value chain.
                    </p>
                    <span className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 text-effect text-l">
                        2
                    </span>
                </div>
                <div className="individual-tickets ticket-width w-full md:w-auto px-4 relative">
                    <img src="/int-3.png" className="the-ticket w-full max-w-[300px] mx-auto"></img>
                    <p className="text-gray-400 text-sm text-center pt-5">
                        <span className="underline">1M</span> deaths each year are caused by counterfeit medicines.
                    </p>
                    <span className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 text-effect text-l">
                        3
                    </span>
                </div>
            </div>

            <p className="the-text-main text-4xl md:px-28 md:text-6xl text-black justify-center items-center leading-tight md:pt-16">
                Today&apos;s products are broken ...
            </p>

            {/* Second set of ticket-items - hidden on small screens */}
            <div className="ticket-items flex flex-col md:flex-row pt-[15vh]">
                <div className="individual-tickets ticket-width w-full md:w-auto px-4 mb-8 md:mb-0 relative">
                <img src="/int-4.png" className="the-ticket w-full max-w-[300px] mx-auto"></img>
                <p className="text-gray-400 text-sm text-center pt-5">
                    Yet <span className="underline">75%</span> of consumers care about a products’ country of origin.
                </p>
                <span className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 text-effect text-l">
                    4
                </span>
                </div>
                <div className="individual-tickets ticket-width w-full md:w-auto px-4 mb-8 md:mb-0 relative">
                <img src="/int-5.png" className="the-ticket w-full max-w-[300px] mx-auto"></img>
                <p className="text-gray-400 text-sm text-center pt-5">
                    The resale market is expected to <span className="underline">double</span> in volume by 2027.
                </p>
                <span className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 text-effect text-l">
                    5
                </span>
                </div>
                <div className="individual-tickets ticket-width w-full md:w-auto px-4 relative">
                <img src="/int-6.png" className="the-ticket w-full max-w-[300px] mx-auto"></img>
                <p className="text-gray-400 text-sm text-center pt-5">
                    The EU is mandating Digital Product Passports starting in <span className="underline">2026</span>.
                </p>
                <span className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 text-effect text-l">
                    6
                </span>
                </div>
            </div>
        </section>

        <section id="home" className="title-page flex flex-row justify-center items-center min-h-screen">
            <div className="flex flex-col justify-center items-center">
                <p className="the-text-main text-4xl md:px-28 md:text-6xl text-black justify-center items-center leading-tight md:pt-16">
                    <span className="hidden md:inline">So </span>VERITAS ® empowers <span className="fancy-gradient font-bold">products</span> with transparency, sustainability and unparalleled digitisation.
                </p>
                <p className="the-text-minor text-center text-effect px-4 md:px-48">
                    We <span className="underline underline-offset-4 decoration-gray-500 decoration-2">trace</span>, <span className="underline underline-offset-4 decoration-gray-500 decoration-2">evaluate</span> and <span className="underline underline-offset-4 decoration-gray-500 decoration-2">improve</span> the impact of your products.
                </p>
                <div className="button-container">
                    <button className="blue-button button-hover">
                        <a href="#trace" className="text-effect-b">Explore</a>
                    </button>
                    <button className="grey-button button-hover">
                        <a
                            href="mailto:jamyson@vrts.world?subject=Interested%20In%20VERITAS%20®&body=Hello%20Veritas%20%C2%AE%20team,%0A%0AWe%20are%20interested%20in%20your%20product%20and%20would%20love%20to%20chat!!%0A%0ACheers!"
                            className="nav-mini-text-b text-effect-b"
                            >
                            <p className="text-effect">Connect</p>

                        </a>
                    </button>
                </div>
            </div>
        </section>
        <section id="trace" className="trace ">
            <div className="">
                <p className="underline underline-offset-4 decoration-gray-500 text-effect header-text-minor">trace</p>
                <div className="flex flex-col justify-center items-center">
                    <p className="stand-text-minor text-effect">
                        <span className="font-bold">Seamlessly</span> integrate your Enterprise Resource Platform into VERITAS to manage all your supply chain actors in a single place.
                    </p>
                    <img src="/dashboard1.png" className="the-dashboard-class object-cover"></img>
                    <p className="stand-text-minor text-effect">
                        <span className="font-bold">Track</span> the movement of every product across your entire supply chain.
                    </p>
                    <img src="/dashboard2.png" className="the-dashboard-class object-cover"></img>
                </div>
            </div>
        </section>
        </>
    );
}
