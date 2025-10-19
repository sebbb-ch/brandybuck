import { FaInstagram, FaLinkedin, FaImdb, FaYoutube } from "react-icons/fa";

const socials =  [
    { 
        name: "Instagram", 
        href: "https://www.instagram.com/sfx.alana/?hl=en",
        icon: <FaInstagram />
    },
    { 
        name: "Linkedin", 
        href: "https://www.linkedin.com/in/alana-areyzaga-b2b2b8230/",
        icon: <FaLinkedin />
    },
    { 
        name: "Youtube", 
        href: "https://www.youtube.com/@789alleycat789",
        icon: <FaYoutube />
    },
    { 
        name: "IMDb", 
        href: "https://www.imdb.com/name/nm7186282/",
        icon: <FaImdb />
    },
];

export default function Footer() {
    return (
        <footer className="footer">
            {/* Controls max width of contents and horizontal padding*/}
            <div className="
                max-w-7xl mx-auto py-10
            ">
                {/* Controls flex layout*/}
                <div className="
                    flex place-content-center
                    text-2xl space-x-4
                ">
                    {socials.map((item) => (
                        <a 
                            key={item.name}
                            href={item.href}
                            target="_blank"
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>
            </div>

        </footer>
    );
}

