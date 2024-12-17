import "./part1.css";

export default function Part1() {
    return (
        <>
        <header className="the-header fixed top-0 left-0 w-full z-10">
            <section className="flex flex-row justify-between items-center the-header-adjustment">
                <div className="flex flex-row justify-start items-center">
                    <img src="/logo.png" className="the-logo"/>
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
        </header>
        <section className="title-page flex flex-row justify-center items-center min-h-screen">
            <div className="flex flex-col justify-center items-center">
                <p className="the-text-main text-black justify-center items-center leading-tight">
                    Empowering <span className="fancy-gradient font-bold">products</span> with transparency, sustainability and unparalleled digitisation.
                </p>
                <p className="the-text-minor text-center text-effect">
                    The first platform ever to completely <span className="underline underline-offset-4 decoration-gray-500 decoration-2">trace</span>, <span className="underline underline-offset-4 decoration-gray-500 decoration-2">evaluate</span> and <span className="underline underline-offset-4 decoration-gray-500 decoration-2">improve</span> the impact of your products.
                </p>
                <div className="button-container">
                    <button className="blue-button button-hover">
                        <p className="text-effect-b">Explore</p>
                    </button>
                    <button className="grey-button button-hover">
                        <p className="text-effect">Connect</p>
                    </button>
                </div>
            </div>
        </section>
        <section className="trace ">
            <div className="">
                <p className="underline underline-offset-4 decoration-gray-500 text-effect header-text-minor">trace</p>
                <div className="flex flex-col justify-center items-center">
                    <p className="stand-text-minor text-effect">
                        <span className="font-bold">Seamlessly</span> integrate your Enterprise Resource Platform into VERITAS to manage all your supply chain actors in a single place.
                    </p>
                    <img src="/dashboard1.png" className="the-dashboard-class"></img>
                    <p className="stand-text-minor text-effect">
                        <span className="font-bold">Track</span> the movement of every product across your entire supply chain.
                    </p>
                    <img src="/dashboard2.png" className="the-dashboard-class"></img>
                </div>
            </div>
        </section>
        </>
    );
}
