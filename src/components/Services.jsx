import { motion } from "framer-motion";
import Service from "./uis/Service";

export default function Services() {
  return (
    <motion.section
      id="services"
      className=""
      initial={{ opacity: 0 , y: 100}}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 1, delay: 0.2 },
        y: 0,
      }}
    >
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-4xl font-bold text-center capitalize md:text-6xl lg:text-7xl mt-8">
          Nos Services
        </h1>

        <p className="max-w-2xl mx-auto my-6 text-center">
          Nous vous offrons plusieurs services pour vous accompagner dans vos
          opérations d'import-export. Nous vous facilitons l'accès aux marchés internationaux. Nous vous accompagnons dans vos achats et ventes de produits locaux. Nous vous assistons dans vos démarches de visa et de transfert d'argent. Nous vous trouvons des fournisseurs en chine, UAE, Europe. Nous vous assistons dans les procédures de cargo et de conseil.
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
            texte="Nous vous assistons dans les procédure visa pour la chine ,l'Europe et UAE.
"
            titre="Assistance visa"
            image="images/visa.png"
          />
          <Service
            texte="Nous vous accompagnons dans tout ce qui est incoterm,entreposage, assurance ,fret aérien,fret maritime ,fret routier .nous vous guarantissons la sécurisation de vos marchandises Jusqu'à votre destination
"
            titre="Cargo"
            image="images/cargo.png"
          />
          <Service
            texte="Nous vous accompagnons dans le paiement de divers facture à l'international."
            titre="Transfert d'argent"
            image="images/argent.png"
          />
          <Service
            texte="nos expert et consultant se plongerons sur vos dossier pour vous ressortir des conseils adaptés à vos marchés."
            titre="Conseils"
            image="images/conseil.png"
          />
        </div>
      </div>
    </motion.section>
  );
}
