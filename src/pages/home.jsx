import {
    SectionHeading,
    SubHeading,
    LargerSectionHeading,
} from "../templates/basicUIComponents";
import Typewriter from "typewriter-effect";
import config from "../config";

const Home = () => {
    return (
        <>
            <div className="p-8 space-y-6 text-center justify-center items-center flex-grow align-middle">
                <div className="mt-20">
                    <LargerSectionHeading text={config.home.heading} />
                </div>
                <div className="text-2xl text-white font-bold mb-4">
                    <Typewriter
                        options={{
                            strings: [
                                "AI/ML Enthusiast",
                                "Full Stack Developer",
                                "Hacker",
                                "Tech Innovator",
                                "Gamer at Heart",
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                <SectionHeading text="UMass Amherst" />
                <SubHeading text={config.home.subHeading} />
                <button
                    onClick={() => (window.location.href = "/#contact")}
                    className="bg-purple-600 flex mx-auto text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300  dark:bg-purple-500 dark:hover:bg-purple-600 dark:text-black"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-zap mr-2 h-5 w-5"
                    >
                        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                    </svg>
                    {config.home.buttonLabel}
                </button>
            </div>
        </>
    );
};

export default Home;
