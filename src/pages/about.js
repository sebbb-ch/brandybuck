import {Geist, Geist_Mono} from "next/font/google"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"]
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"]
});

export default function Home() {
    return (
        <div className={`
            flex flex-col
            min-h-screen 
            bg-white dark:bg-black 
            font-sans text-black dark:text-white
            ${geistSans.className} ${geistMono.className} 
        `}>
            <Navbar />

            <main className="
                flex-grow items-center justify-center
            ">

            </main>

            <Footer />
        </div>
    );
}
