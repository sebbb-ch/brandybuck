import {Geist, Geist_Mono} from "next/font/google"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

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
        <div 
            className={`${geistSans.className} ${geistMono.className} font-sans bg-white dark:bg-black text-black dark:text-white min-h-screen`}
        >
            <main>
                <Navbar />
                <Hero />
            </main>
        </div>
    );
}
