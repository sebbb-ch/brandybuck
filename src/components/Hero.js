import Image from "next/image";

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center px-4 py-20 sm:flex-row sm:justify-between sm:gap-12">

            {/* Left Project */}
            <div className="w-full sm:w-1/3 flex justify-center mb-8 sm:mb-0">
            <div className="max-w-xs border rounded-lg overflow-hidden shadow-md">
            <div className="p-4 text-center">
                <h3 className="font-semibold">Project A</h3>
                <p className="text-sm text-gray-500">Short description</p>
              </div>
            </div>
          </div>

          {/* Center Profile */}
          <div className="w-full sm:w-1/3 text-center flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-2">Alana Areyzaga</h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm">
                Chicago-born filmmaker. SFX makeup artist. Aspiring woodland creature. Currently residing in the magic land of North Hollywood.
            </p>
          </div>

          {/* Right Project */}
          <div className="w-full sm:w-1/3 flex justify-center mt-8 sm:mt-0">
            <div className="max-w-xs border rounded-lg overflow-hidden shadow-md">
              <div className="p-4 text-center">
                <h3 className="font-semibold">Project B</h3>
                <p className="text-sm text-gray-500">Short description</p>
              </div>
            </div>
          </div>
        </section>
    );
}

