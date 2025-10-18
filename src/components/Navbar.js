const navigation = [
    {
        name: "Home",
        href: "#"
    },
    {
        name: "Directing",
        href: "#"
    },
    {
        name: "Makeup",
        href: "#"
    },
    {
        name: "About",
        href: "#"
    },
    {
        name: "Contact",
        href: "#"
    }
]

export default function Navbar() {
    return (
        <nav className="navbar
            fixed top-0 left-0 
            w-full z-50 
            bg-gray-900 
        ">
            {/* Controls max width of contents and horizontal padding*/}
            <div className="
                max-w-7xl mx-auto
            ">
                {/* Controls flex layout */}
                <div className="
                    flex justify-center items-center
                    h-16 
                ">
                    {/* List of navbar items*/}
                    <ul className="
                        flex
                        space-x-6
                    ">
                        {navigation.map((item) => (
                            <li>
                                <a href={item.href}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

