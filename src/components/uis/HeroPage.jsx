// eslint-disable-next-line react/prop-types
function HeroPage({ titre_service, serviceImage }) {
  return (
    <div
      className="py-32 mx-auto mt-px text-left px-4 md:max-w-none md:text-center"
      style={{
        backgroundImage: `url(/images/${serviceImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "rgba(0,0,0,0.7)",
        backgroundBlendMode: "overlay",
        backgroundPosition: "center",
      }}
    >
      <h1 className=" font-bold leading-10 tracking-tight text-center text-white">
        <span className="text-xl sm:text-2xl md:text-4xl lg:text-6xl">
          Services
        </span><br /> <span className="text-xl">{titre_service}</span>
      </h1>
    </div>
  );
}

export default HeroPage;
