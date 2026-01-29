// React imports
import {Geist, Geist_Mono} from "next/font/google";
import {useState} from 'react';

// Internal imports
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"]
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"]
});

export default function Contact() {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    async function handle_submit(e) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submit_form(answer);
            setStatus('success');
        } catch (err) {
            setStatus('typing');
            setErr(err);
        }
    };

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
                <h2> This is the contact page </h2>

                {/* Form */}
                <form onSubmit={handle_submit}>
                    {/* Text input */}
                    <textarea
                        value="Default"
                    />
                    <br />

                    {/* Submission button */}
                    <button>
                        Submit
                    </button>
                </form>
            </main>

            <Footer />
        </div>
    );
}


function submit_form(answer) {

}

