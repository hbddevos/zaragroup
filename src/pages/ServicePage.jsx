import { useParams } from "react-router";
import { getServiceById } from "../services/services_provider";
import HeroPage from "../components/uis/HeroPage";
import GalleryService from "../components/GalleryService";

function ServicePage() {
  let { id } = useParams();

  let service = getServiceById(parseInt(id));

  // console.log(service,);
  return (
    <>
    
      <HeroPage titre_service={service.titre} serviceImage={service.image} />
      <section className="max-sm:px-8 md:px-32 ">
        <div>
          <h2 className="text-[48px] leading-10 my-20 text-center">
            {service.titre}
          </h2>
          <p className="text-lg">{service.details}</p>
          <div className="my-10 flex max-md:flex-col justify-between items-center">
            <div className="mr-7">
              <h3 className="text-2xl font-bold">Comment ça fonctionne ?</h3>
              <ul className="text-lg">
                {service.points_clés.map((pt) => (
                  <li key={service.id} className="list-decimal my-5">
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <img
              className="max-md:w-full lg:w-2/4 object-cover align-middle h-80"
              alt={service.titre}
              // sizes="(max-width: 479px) 100vw, (max-width: 991px) 95vw, (max-width: 1279px) 97vw, 1200px"
              src={`/images/${service.image}`}
              // srcSet="https://assets-global.website-files.com/63a43a1633ad3e2a969a6958/63b3c28493e49f9d97eb700a_service-single-image-1-p-500.jpg 500w, https://assets-global.website-files.com/63a43a1633ad3e2a969a6958/63b3c28493e49f9d97eb700a_service-single-image-1-p-800.jpg 800w, https://assets-global.website-files.com/63a43a1633ad3e2a969a6958/63b3c28493e49f9d97eb700a_service-single-image-1-p-1080.jpg 1080w, https://assets-global.website-files.com/63a43a1633ad3e2a969a6958/63b3c28493e49f9d97eb700a_service-single-image-1.jpg 1199w"
            />
          </div>
          <div className="my-10 text-lg">
            <p>{service.conclusion}</p>
          </div>
        </div>
      </section>
      <GalleryService imagesServices={service.imagesServices} />
    </>
  );
}

export default ServicePage;
