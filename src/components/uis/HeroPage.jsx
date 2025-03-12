// eslint-disable-next-line react/prop-types
function HeroPage({titre_service, serviceImage}) {
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
      <h1 className="text-xl font-bold leading-10 tracking-tight text-center text-white  sm:text-2xl md:text-4xl lg:text-6xl">
        Zara Group {">"} Services {'>'} {titre_service}
      </h1>
      
    </div>
  );
}

export default HeroPage;
