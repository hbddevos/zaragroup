import Service from "./uis/Service";

export default function Services() {
  return (
    <section id="services" className="">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-4xl font-bold text-center capitalize md:text-6xl lg:text-7xl mt-8">
          Nos Services
        </h1>

        <p className="max-w-2xl mx-auto my-6 text-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque enim
          expedita quos cum odio ipsa, exercitationem illum pariatur maxime
          animi deleniti repudiandae amet id, autem labore dolorem, incidunt
          dicta repellat!
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
          <Service
            className="bg-blue-300"
            texte="Nous achetons et revendon des produits, ou vous
                mettons en relation avec des acheteurs ou encore nous occupons de vos achats des produits locaux."
            titre="Vente de produit locaux"
            image="images/local.png"
          />
          <Service
            className="bg-blue-300"
            texte="Nous nous occupons de tout pour vous concernant vos achats a l'international. La seule chose chose que vous ayez a faire est de passer la commande de votre et nous nous occupons du reste. Et vous livrons après paiement."
            titre="Representation"
            image="images/representation.png"
          />
          <Service
            texte="Nous vous trouvons des fournisseur en
                chine ,UAE, Europe"
            titre="Recherche de Fournisseur"
            image="images/fournisseur.png"
          />
          <Service
            texte="Nous vous trouvons des fournisseur en
                chine ,UAE, Europe"
            titre="Assistance visa"
            image="images/visa.png"
          />
          <Service
            texte="Nous vous trouvons des fournisseur en
                chine ,UAE, Europe."
            titre="Cargo"
            image="images/cargo.png"
          />
          <Service
            texte="Nous vous trouvons des fournisseur en
                chine ,UAE, Europe"
            titre="Transfert d'argent"
            image="images/argent.png"
          />
          <Service
            texte="Nous vous trouvons des fournisseur en
                chine ,UAE, Europe."
            titre="Conseils"
            image="images/conseil.png"
          />
        </div>
      </div>
    </section>
  );
}
