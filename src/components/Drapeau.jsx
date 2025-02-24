import useMarquee from "../hooks/useMarquee";


// eslint-disable-next-line react/prop-types
const Drapeau = ({ items, speed = 50 }) => {
    const marqueeRef = useMarquee(speed);
  
    return (
      <div className="overflow-hidden whitespace-nowrap w-full pt-24">
        <h2 className="mb-12 text-7xl max-sm:text-2xl text-center font-bold">Les pays partenaire <br /> d&apos;affaire</h2>
        <div ref={marqueeRef} className="flex w-max">
          {[...items, ...items].map((item, index) => (
            <div key={index} className="mx-4 flex flex-col items-center">
                <img src={ item.img } className="size-20 rounded-2xl mb-4" alt="" />
                <h2 className="font-medium text-xl">{item.pays}</h2>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

  export default Drapeau;