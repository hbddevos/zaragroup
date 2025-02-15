import useMarquee from "../hooks/useMarquee";


// eslint-disable-next-line react/prop-types
const Drapeau = ({ items, speed = 50 }) => {
    const marqueeRef = useMarquee(speed);
  
    return (
      <div className="overflow-hidden whitespace-nowrap w-full pt-24">
        <div ref={marqueeRef} className="flex w-max">
          {[...items, ...items].map((item, index) => (
            <div key={index} className="mx-4">
                <img src={ item } className="size-48 rounded-2xl" alt="" />
            </div>
          ))}
        </div>
      </div>
    );
  };
  

  export default Drapeau;