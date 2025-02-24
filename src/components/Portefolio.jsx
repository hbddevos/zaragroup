
export default function Portefolio() {
  return (
    <section className="">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-4xl font-semibold text-center  capitalize sm:text-6xl md:text-6xl lg:text-7xl md:tracking-tight">Gallery Bento box
        </h1>

        <p className="mt-4 text-center text-gray-500 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
        </p>


        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div>
                <img className="object-cover w-full rounded-lg h-96 "
                    src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
                    alt="" />
                <h2 className="mt-4 text-xl font-semibold  capitalize">Best website
                    collections</h2>
                <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Website</p>
            </div>

            <div>
                <img className="object-cover w-full rounded-lg h-96 "
                    src="https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    alt="" />
                <h2 className="mt-4 text-xl font-semibold  capitalize">Block of Ui kit
                    collections</h2>
                <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Ui kit</p>
            </div>

            <div>
                <img className="object-cover w-full rounded-lg h-96 "
                    src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="" />
                <h2 className="mt-4 text-xl font-semibold  capitalize">Ton’s of mobile mockup
                </h2>
                <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Mockups</p>
            </div>
        </div>
    </div>
</section>
  )
}
