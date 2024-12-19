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
        <section className="title-page flex flex-row justify-center items-center min-h-screen">
            <div className="flex flex-col justify-center items-center">
                <p className="the-text-main text-4xl md:px-28 md:text-6xl text-black justify-center items-center leading-tight md:pt-16">
                    Empowering <span className="fancy-gradient font-bold">products</span> with transparency, sustainability and unparalleled digitisation.
                </p>
                <p className="the-text-minor text-center text-effect px-4 md:px-48">
                    The first platform ever to completely <span className="underline underline-offset-4 decoration-gray-500 decoration-2">trace</span>, <span className="underline underline-offset-4 decoration-gray-500 decoration-2">evaluate</span> and <span className="underline underline-offset-4 decoration-gray-500 decoration-2">improve</span> the impact of your products.
                </p>
                <div className="button-container">
                    <button className="blue-button button-hover">
                        <a href="#trace" className="text-effect-b">Explore</a>
                    </button>
                    <button className="grey-button button-hover">
                        <p className="text-effect">Connect</p>
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
