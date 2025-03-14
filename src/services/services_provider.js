const services = [
  {
    id: 1,
    link: "/services/1",
    className: "bg-blue-300",
    titre: "Achat et vente de produits tropicaux",
    image: "mais.jpg",
    texte:
      "Nous achetons et revendons des produits tropicaux, nous vous mettons en relation avec des acheteurs, ou nous prenons en charge vos achats. Zara Group est votre meilleur partenaire pour le commerce des produits tropicaux.",
    details:
      "Que vous soyez commerçant, agriculteur ou industriel, nous vous apportons des solutions adaptées pour l'achat et la vente de produits tropicaux tels que le soja, le sésame, le cacao, le maïs, le haricot, l'anacarde, le karité et bien d'autres encore.",
    points_clés: [
      "Achat et revente de produits tropicaux.",
      "Mise en relation avec des acheteurs sérieux et fiables.",
      "Gestion complète de vos achats pour un processus simplifié.",
    ],
    imagesServices : ['mais.jpg','haricot.jpg','ble.jpg','soja.jpg',],
    conclusion:
      "La solution est à portée de main. Cliquez ci-dessous pour accéder à nos services et répondre à vos besoins en produits tropicaux.",
  },

  {
    id: 2,
    link: "/services/2",
    className: "bg-blue-300",
    titre: "Représentation et achats internationaux",
    image: "representation.png",
    texte:
      "Nous prenons en charge l’ensemble de vos achats à l’international. Passez votre commande, et nous nous occupons du reste selon les termes du contrat.",
    details:
      "Grâce à notre réseau de collaborateurs et partenaires stratégiques, nous assurons une gestion complète et efficace de vos commandes. Que vous soyez chef d'entreprise, directeur d’une institution ou opérateur économique, nous vous accompagnons dans l'acquisition de vos équipements et matériels spécifiques.",
    points_clés: [
      "Gestion intégrale de vos achats internationaux.",
      "Réseau de partenaires fiables pour sécuriser vos transactions.",
      "Approvisionnement rapide et premium selon vos besoins.",
    ],
    imagesServices : ['v1.jpg','v2.jpg','v3.jpeg','voiture.jpg'],
    conclusion:
      "Besoin de camions, moteurs, voitures, matériels industriels… ? Vous êtes au bon endroit. Cliquez ci-dessous et profitez d’une solution rapide et efficace pour tous vos achats internationaux.",
  },
  {
    id: 3,
    link: "/services/3",
    titre: "Recherche de fournisseurs",
    image: "fournisseur.png",
    texte:
      "Nous vous aidons à trouver des fournisseurs fiables en Chine, aux Émirats arabes unis (UAE) et en Europe.",
    details:
      "Vous êtes commerçant, entrepreneur ou opérateur économique et vous recherchez des fournisseurs de confiance pour importer ou exporter des marchandises ? Nous vous accompagnons dans la mise en relation avec des partenaires stratégiques et vous guidons tout au long du processus d’approvisionnement.",
    points_clés: [
      "Accès à un réseau de fournisseurs qualifiés en Chine, UAE et Europe.",
      "Mise en relation sécurisée et accompagnement dans les négociations.",
      "Optimisation de votre chaîne d'approvisionnement pour des achats sereins.",
    ],
    imagesServices : ['f1.jpg','f2.jpg','f3.jpg','f4.jpg'],
    conclusion:
      "Vous ne savez pas par où commencer ? Cliquez ci-dessous, nous avons la solution à vos besoins.",
  },

  {
    id: 4,
    link: "/services/4",
    titre: "Assistance Visa",
    image: "visa.png",
    texte:
      "Nous vous assistons dans vos procédures de visa pour l'Europe, la Chine et les Émirats arabes unis (UAE).",
    details:
      "Nous vous accompagnons dans toutes les démarches administratives nécessaires pour votre demande de visa. De la constitution du dossier aux réservations essentielles, nous vous offrons un service clé en main pour maximiser vos chances d'obtention.",
    points_clés: [
      "📄 Assistance pour la constitution du dossier : invitations professionnelles, assurances voyage...",
      "🏨 Réservation d'hôtel et de billets d'avion pour faciliter votre demande.",
      "✅ Suivi et accompagnement personnalisé jusqu'à l'obtention de votre visa.",
    ],
    imagesServices : [],
    conclusion:
      "Vous êtes entrepreneur, salarié, commerçant ou opérateur économique et vous rencontrez des difficultés pour obtenir un visa ? Cliquez ci-dessous et laissez-nous vous accompagner vers votre destination.",
  },
  {
    id: 5,
    link: "/services/5",
    titre: "Service Cargo",
    image: "cargo.png",
    texte:
      "Nous vous accompagnons dans le transport de vos marchandises par fret aérien, maritime et routier.",
    details:
      "Zara Group prend en charge l’ensemble de vos expéditions en vous garantissant sécurité, rapidité et conformité aux réglementations internationales. Nous vous accompagnons également sur les aspects logistiques essentiels tels que les Incoterms, l'entreposage et l'assurance, pour un acheminement sans stress.",
    points_clés: [
      "✈️ Fret aérien, 🚢 fret maritime et 🚛 fret routier adaptés à vos besoins.",
      "📦 Sécurisation totale de vos marchandises jusqu'à destination.",
      "📜 Accompagnement sur les Incoterms, l'entreposage et l’assurance.",
    ],
    imagesServices : [],
    conclusion:
      "Avec Zara Group, vos marchandises arrivent intactes et dans les meilleurs délais. Cliquez ci-dessous et confiez-nous votre transport en toute sérénité.",
  },
  {
    id: 6,
    link: "/services/6",
    titre: "Transfert d'argent",
    image: "argent.png",
    texte:
      "Nous vous accompagnons dans le paiement de diverses factures à l'international.",
    details:
      "Zara Group facilite vos transactions financières à l’international avec des taux avantageux et un service sécurisé. Que ce soit pour régler des fournisseurs, effectuer des paiements d'entreprise ou envoyer de l'argent, nous vous garantissons rapidité et fiabilité.",
    points_clés: [
      "💰 Paiement sécurisé de vos factures à l’international.",
      "💱 Taux de change compétitifs pour optimiser vos transactions.",
      "⚡ Service rapide et fiable pour toutes vos opérations financières.",
    ],
    imagesServices : [],
    conclusion:
      "Besoin d’effectuer un paiement ou un transfert d’argent à l’international ? Cliquez ci-dessous et profitez d’un service simple, rapide et efficace.",
  },
  {
    id: 7,
    link: "/services/7",
    texte:
      "Nos experts et consultants se plongeront sur vos dossiers pour vous ressortir des conseils adaptés à vos marchés.",
    titre: "Conseils",
    image: "conseil.png",
    details:
      "Un accompagnement sur mesure pour des décisions stratégiques\n\nNos experts et consultants analysent en profondeur vos dossiers afin de vous fournir des conseils pertinents et personnalisés. Grâce à leur expertise sectorielle et à une approche rigoureuse, ils identifient les opportunités, anticipent les risques et vous orientent vers les meilleures décisions stratégiques.",
    points_clés: [
      "Analyse détaillée de votre marché : étude des tendances, concurrence, et positionnement.",
      "Recommandations adaptées : des solutions concrètes en phase avec vos objectifs.",
      "Accompagnement continu : un suivi et des ajustements en fonction de l’évolution de votre activité.",
    ],
    imagesServices : [],
    conclusion:
      "Nous transformons les défis en opportunités et vous donnons les clés pour une croissance durable. Faites le choix d’un conseil expert pour optimiser vos performances et sécuriser votre avenir.",
  },
];

// Fonction pour récupérer un service par son id
const getServiceById = function (id) {
  return services.find((service) => service.id === id);
};

// console.log(getServiceById(3))
export { getServiceById };
