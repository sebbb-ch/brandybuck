/**
 * References
 *
 * https://joshuaboshell.com/director
 * https://drive.google.com/drive/u/0/folders/1OalAyz1dGSaiYlSG-EpQkB6Ny8JAu5zX
 */
import {Geist, Geist_Mono} from "next/font/google"
import Navbar   from "../components/Navbar"
import Footer   from "../components/Footer"
import Card     from "../components/Card"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"]
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"]
});

export default function Directing() {
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
                
                <div className="
                    max-w-2xl
                ">
                    <Card 
                        title="Decrescendo"
                        subtitle="Feature film"
                        description="A feature film about a female pianist"
                        img_src="../../public/directing/decrescendo.jpg"
                        href="https://youtu.be/SmBw9BXRD40?list=RDSmBw9BXRD40"
                    />
                    <Card 
                        title="Decrescendo"
                        subtitle="Feature film"
                        description="A feature film about a female pianist"
                        img_src="../../public/directing/decrescendo.jpg"
                        href="https://youtu.be/SmBw9BXRD40?list=RDSmBw9BXRD40"
                    />
                    <Card 
                        title="Decrescendo"
                        subtitle="Feature film"
                        description="A feature film about a female pianist"
                        img_src="../../public/directing/decrescendo.jpg"
                        href="https://youtu.be/SmBw9BXRD40?list=RDSmBw9BXRD40"
                    />
                    <Card 
                        title="Decrescendo"
                        subtitle="Feature film"
                        description="A feature film about a female pianist"
                        img_src="../../public/directing/decrescendo.jpg"
                        href="https://youtu.be/SmBw9BXRD40?list=RDSmBw9BXRD40"
                    />
                    <Card 
                        title="Decrescendo"
                        subtitle="Feature film"
                        description="A feature film about a female pianist"
                        img_src="../../public/directing/decrescendo.jpg"
                        href="https://youtu.be/SmBw9BXRD40?list=RDSmBw9BXRD40"
                    />
                </div>

            </main>

            <Footer />
        </div>
    );
}
