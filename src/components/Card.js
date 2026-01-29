import Image from "next/image";

{/* Reusable card component for posters */}
export default function Card({
    title,
    subtitle,
    description,
    img_src,
    href
}) 
{
    const Wrapper = href ? "a" : "div";
    return (
        <Wrapper href={href} target="_blank" className="
            group relative grid 
            rounded-2xl bg-gray-900/90 p-6 m-2 
            overflow-hidden shadow-xl transition-all 
            hover:scale-[1.01] hover:shadow-2xl md:grid-cols-2
        ">
            {/* Image */}
            <div className="
                relative 
                h-56 w-full overflow-hidden rounded-xl md:h-full 
            ">
                <img src={img_src} alt={title} />
            </div>

            {/* Content */}
            <div className="
                flex flex-col justify-center
                gap-3 p-1 md:p-6
            ">
                {/* Title */}
                <h2 className="
                    text-2xl font-bold text-white md:text-3xl
                ">
                    {title}
                </h2>

                {/* Description */}
                <p className="
                    text-sm text-gray-300 
                ">
                    {description}
                </p>
            </div>
        </Wrapper>
    );
}
