import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Language = "en" | "sw" | "fr" | "es" | "de" | "ar";

export type Currency = "USD" | "EUR" | "GBP" | "KES" | "TZS" | "UGX" | "RWF" | "ZAR";

interface CurrencyInfo {
  code: Currency;
  symbol: string;
  rate: number; // rate against USD
}

export const CURRENCIES: Record<Currency, CurrencyInfo> = {
  USD: { code: "USD", symbol: "$", rate: 1 },
  EUR: { code: "EUR", symbol: "€", rate: 0.92 },
  GBP: { code: "GBP", symbol: "£", rate: 0.79 },
  KES: { code: "KES", symbol: "KSh ", rate: 129.5 },
  TZS: { code: "TZS", symbol: "TSh ", rate: 2580 },
  UGX: { code: "UGX", symbol: "USh ", rate: 3670 },
  RWF: { code: "RWF", symbol: "FRw ", rate: 1280 },
  ZAR: { code: "ZAR", symbol: "R ", rate: 18.4 },
};

const translations: Record<Language, Record<string, string>> = {
  en: {
    destinations: "Destinations",
    how_it_works: "How it works",
    installation: "Installation",
    help: "Help",
    login: "Login",
    portal: "Portal",
    get_esim: "Get an eSIM",
    explore: "Explore",
    support: "Support",
    company: "Company",
    all_plans: "All plans",
    installation_guide: "Installation guide",
    help_centre: "Help centre",
    faqs: "FAQs",
    contact_us: "Contact us",
    network_coverage: "Network coverage",
    about: "About Safari eSim",
    terms: "Terms & conditions",
    privacy: "Privacy policy",
    refund_policy: "Refund policy",
    rights_reserved: "All rights reserved.",
    my_esims: "My eSIMs",
    checkout: "Checkout",
    buy_now: "Buy Now",
    search: "Search country or region...",

    hero_eyebrow: "TRAVEL CONNECTIVITY, SIMPLIFIED",
    hero_title_1: "Go farther.",
    hero_title_2: "Stay connected.",
    hero_sub: "Get affordable eSIM data for your next adventure. Choose your destination, pay securely and receive your eSIM in minutes.",
    where_travelling: "Where are you travelling?",
    select_destination: "Select a destination",
    view_plans: "View plans",
    secure_payments: "Secure payments",
    instant_delivery: "Instant delivery",
    no_physical_sim: "No physical SIM",
    travel_freely: "Travel freely",
    lte_ready: "4G / LTE ready",
    popular_destinations: "POPULAR DESTINATIONS",
    popular_title: "Where will your next trip take you?",
    popular_sub: "We cover the places travellers ask for most. Only a few are shown here — explore the full destination catalogue for more.",
    explore_all_destinations: "Explore all destinations",
    why_safari: "WHY SAFARI ESIM",
    why_title: "A smoother way to travel connected.",
    local_coverage: "Local coverage",
    local_coverage_sub: "Connect through supported local networks in your destination.",
    instant_delivery_sub: "Your eSIM details are ready immediately after successful payment.",
    secure_by_design: "Secure by design",
    secure_by_design_sub: "Payments and account flows are built for a safe travel experience.",
    one_phone: "One phone, one experience",
    one_phone_sub: "Keep your physical SIM while Safari eSim handles your travel data.",
    ready_when: "READY WHEN YOU ARE",
    ready_title: "Choose your destination. We'll handle the connection.",
    ready_sub: "Browse plans, compare validity and data, and complete checkout in a few clicks.",
    browse_destinations: "Browse destinations",
    still_choosing: "Still choosing?",
    explore_all_plans: "Explore all Safari eSim plans.",
    browse_plans: "Browse plans",

    dest_heading: "Connect almost anywhere.",
    dest_sub: "Choose a country to see available eSIM plans, coverage and pricing.",
    all: "All",
    no_dest_found: "No destination found",
    try_another: "Try another country or region.",

    back_to_dest: "Back to destinations",
    data_plans: "Data Plans",
    select_plan: "Select a plan to proceed with checkout",
    validity: "Validity",
    coverage: "Coverage",
    network: "Network",
    activation_policy: "Activation Policy",
    price: "Price",
    order_summary: "Order Summary",
    payment_method: "Payment Method",
    mpesa_payment: "M-Pesa Express",
    card_payment: "Credit / Debit Card",
    pay_now: "Pay Now",
    days: "days",

    how_title: "How Safari eSIM Works",
    how_subtitle: "Three simple steps to stay connected anywhere on earth.",
    install_title: "eSIM Installation Guide",
    install_sub: "Step-by-step instructions for iOS and Android devices.",
    support_title: "How can we help you?",
    support_sub: "Search our help centre or contact customer support 24/7.",
  },
  sw: {
    destinations: "Maeneo",
    how_it_works: "Jinsi inavyofanya kazi",
    installation: "Mwongozo wa Kusakinisha",
    help: "Msaada",
    login: "Ingia",
    portal: "Tovuti ya Mtumiaji",
    get_esim: "Pata eSIM",
    explore: "Gundua",
    support: "Usaidizi",
    company: "Kampuni",
    all_plans: "Vifurushi Vyote",
    installation_guide: "Mwongozo wa Kusakinisha",
    help_centre: "Kituo cha Msaada",
    faqs: "Maswali Yanayoulizwa",
    contact_us: "Wasiliana Nasi",
    network_coverage: "Upatikanaji wa Mtandao",
    about: "Kuhusu Safari eSim",
    terms: "Vigezo na Masharti",
    privacy: "Sera ya Faragha",
    refund_policy: "Sera ya Kurejeshewa Hela",
    rights_reserved: "Haki zote zimehifadhiwa.",
    my_esims: "eSIM Zangu",
    checkout: "Lipia",
    buy_now: "Nunua Sasa",
    search: "Tafuta nchi au eneo...",

    hero_eyebrow: "MAWASILIANO YA SAFARI, YALIYORAHISISHRWA",
    hero_title_1: "Safiri mbali zaidi.",
    hero_title_2: "Baki umeunganishwa.",
    hero_sub: "Pata bando na data ya eSIM kwa bei nafuu kwa ajili ya safari yako. Chagua unapoenda, lipa kwa usalama na upokee eSIM yako kwa dakika chache.",
    where_travelling: "Unasafiri kwenda wapi?",
    select_destination: "Chagua eneo la safari",
    view_plans: "Ona vifurushi",
    secure_payments: "Malipo salama",
    instant_delivery: "Utoaji wa papo hapo",
    no_physical_sim: "Bila SIM ya plastiki",
    travel_freely: "Safiri kwa uhuru",
    lte_ready: "Tayari kwa 4G / LTE",
    popular_destinations: "MAENEO MASHUHURI",
    popular_title: "Safari yako ijayo itakupeleka wapi?",
    popular_sub: "Tunamudu maeneo wanayotembelea wasafiri zaidi. Angalia maeneo zaidi kwenye orodha yetu.",
    explore_all_destinations: "Tazama maeneo yote",
    why_safari: "KWA NINI SAFARI ESIM",
    why_title: "Njia rahisi zaidi ya kusafiri ukiwa umeunganishwa.",
    local_coverage: "Upatikanaji wa Mtandao wa Ndani",
    local_coverage_sub: "Jiunge kupitia mitandao ya ndani inayokubalika katika eneo lako la safari.",
    instant_delivery_sub: "Maelezo yako ya eSIM yatakuwa tayari mara tu baada ya kukamilisha malipo.",
    secure_by_design: "Usalama Uhakika",
    secure_by_design_sub: "Mfumo wa malipo na akaunti ulijengwa kwa ajili ya safari salama.",
    one_phone: "Simu moja, uzoefu mmoja",
    one_phone_sub: "Baki na SIM yako ya kawaida huku Safari eSim ikishughulikia data yako ya safari.",
    ready_when: "TAYARI WAKATI WOTE",
    ready_title: "Chagua unapoenda. Tutashughulikia muunganisho.",
    ready_sub: "Vinjari vifurushi, linganisha siku na data, kisha kamilisha malipo kwa kubofya mara chache.",
    browse_destinations: "Vinjari maeneo",
    still_choosing: "Bado unachagua?",
    explore_all_plans: "Tazama vifurushi vyote vya Safari eSim.",
    browse_plans: "Vinjari vifurushi",

    dest_heading: "Unganishwa karibu kila mahali.",
    dest_sub: "Chagua nchi ili uone vifurushi vya eSIM vilivyopo, upatikanaji na bei.",
    all: "Yote",
    no_dest_found: "Hakuna eneo lililopatikana",
    try_another: "Jaribu nchi au eneo lingine.",

    back_to_dest: "Rudi kwenye maeneo",
    data_plans: "Vifurushi vya Data",
    select_plan: "Chagua kifurushi ili uendelee na malipo",
    validity: "Muda wa Matumizi",
    coverage: "Upatikanaji",
    network: "Mtandao",
    activation_policy: "Sera ya Kuanzisha",
    price: "Bei",
    order_summary: "Muhtasari wa Oda",
    payment_method: "Njia ya Malipo",
    mpesa_payment: "M-Pesa Express",
    card_payment: "Kadi ya Benki (Credit / Debit)",
    pay_now: "Lipa Sasa",
    days: "siku",

    how_title: "Jinsi Safari eSIM Inavyofanya Kazi",
    how_subtitle: "Hatua tatu rahisi za kubaki umeunganishwa mahali popote duniani.",
    install_title: "Mwongozo wa Kusakinisha eSIM",
    install_sub: "Maelezo ya hatua kwa hatua kwa vifaa vya iOS na Android.",
    support_title: "Tukusaidie vipi?",
    support_sub: "Tafuta kwenye kituo chetu cha msaada au wasiliana na huduma kwa wateja masaa 24/7.",
  },
  fr: {
    destinations: "Destinations",
    how_it_works: "Comment ça marche",
    installation: "Installation",
    help: "Aide",
    login: "Connexion",
    portal: "Portail",
    get_esim: "Obtenir une eSIM",
    explore: "Explorer",
    support: "Assistance",
    company: "Entreprise",
    all_plans: "Tous les forfaits",
    installation_guide: "Guide d'installation",
    help_centre: "Centre d'aide",
    faqs: "FAQ",
    contact_us: "Nous contacter",
    network_coverage: "Couverture réseau",
    about: "À propos de Safari eSIM",
    terms: "Conditions générales",
    privacy: "Politique de confidentialité",
    refund_policy: "Politique de remboursement",
    rights_reserved: "Tous droits réservés.",
    my_esims: "Mes eSIMs",
    checkout: "Commander",
    buy_now: "Acheter maintenant",
    search: "Rechercher un pays...",

    hero_eyebrow: "CONNECTIVITÉ DE VOYAGE, SIMPLIFIÉE",
    hero_title_1: "Allez plus loin.",
    hero_title_2: "Restez connecté.",
    hero_sub: "Obtenez des données eSIM abordables pour votre prochaine aventure. Choisissez votre destination, payez en toute sécurité.",
    where_travelling: "Où voyagez-vous ?",
    select_destination: "Sélectionnez une destination",
    view_plans: "Voir les forfaits",
    secure_payments: "Paiements sécurisés",
    instant_delivery: "Livraison instantanée",
    no_physical_sim: "Pas de SIM physique",
    travel_freely: "Voyagez librement",
    lte_ready: "Prêt pour 4G / LTE",
    popular_destinations: "DESTINATIONS POPULAIRES",
    popular_title: "Où vous mènera votre prochain voyage ?",
    popular_sub: "Nous couvrons les destinations les plus demandées. Découvrez notre catalogue complet.",
    explore_all_destinations: "Explorer toutes les destinations",
    why_safari: "POURQUOI SAFARI ESIM",
    why_title: "Une façon plus fluide de voyager connecté.",
    local_coverage: "Couverture locale",
    local_coverage_sub: "Connectez-vous via les réseaux locaux pris en charge à votre destination.",
    instant_delivery_sub: "Vos détails eSIM sont prêts immédiatement après le paiement.",
    secure_by_design: "Sécurité intégrée",
    secure_by_design_sub: "Les paiements et la gestion du compte sont conçus pour un voyage sécurisé.",
    one_phone: "Un téléphone, une expérience",
    one_phone_sub: "Conservez votre SIM physique pendant que Safari eSim gère vos données de voyage.",
    ready_when: "PRÊT QUAND VOUS L'ÊTES",
    ready_title: "Choisissez votre destination. Nous gérons la connexion.",
    ready_sub: "Parcourez les forfaits, comparez la validité et les données, puis validez votre commande.",
    browse_destinations: "Parcourir les destinations",
    still_choosing: "Vous hésitez ?",
    explore_all_plans: "Découvrez tous les forfaits Safari eSim.",
    browse_plans: "Parcourir les forfaits",

    dest_heading: "Connectez-vous presque partout.",
    dest_sub: "Choisissez un pays pour voir les forfaits eSIM disponibles, la couverture et les prix.",
    all: "Tous",
    no_dest_found: "Aucune destination trouvée",
    try_another: "Essayez un autre pays ou région.",

    back_to_dest: "Retour aux destinations",
    data_plans: "Forfaits de Données",
    select_plan: "Sélectionnez un forfait pour passer à la commande",
    validity: "Validité",
    coverage: "Couverture",
    network: "Réseau",
    activation_policy: "Politique d'activation",
    price: "Prix",
    order_summary: "Récapitulatif de la commande",
    payment_method: "Moyen de paiement",
    mpesa_payment: "M-Pesa Express",
    card_payment: "Carte bancaire",
    pay_now: "Payer maintenant",
    days: "jours",

    how_title: "Comment fonctionne Safari eSIM",
    how_subtitle: "Trois étapes simples pour rester connecté partout dans le monde.",
    install_title: "Guide d'installation eSIM",
    install_sub: "Instructions étape par étape pour iOS et Android.",
    support_title: "Comment pouvons-nous vous aider ?",
    support_sub: "Recherchez dans notre centre d'aide ou contactez le support 24h/24 et 7j/7.",
  },
  es: {
    destinations: "Destinos",
    how_it_works: "Cómo funciona",
    installation: "Instalación",
    help: "Ayuda",
    login: "Iniciar sesión",
    portal: "Portal",
    get_esim: "Obtener una eSIM",
    explore: "Explorar",
    support: "Soporte",
    company: "Empresa",
    all_plans: "Todos los planes",
    installation_guide: "Guía de instalación",
    help_centre: "Centro de ayuda",
    faqs: "Preguntas frecuentes",
    contact_us: "Contacto",
    network_coverage: "Cobertura de red",
    about: "Acerca de Safari eSIM",
    terms: "Términos y condiciones",
    privacy: "Política de privacidad",
    refund_policy: "Política de reembolso",
    rights_reserved: "Todos los derechos reservados.",
    my_esims: "Mis eSIMs",
    checkout: "Pagar",
    buy_now: "Comprar ahora",
    search: "Buscar países...",

    hero_eyebrow: "CONECTIVIDAD DE VIAJE, SIMPLIFICADA",
    hero_title_1: "Ve más lejos.",
    hero_title_2: "Mantente conectado.",
    hero_sub: "Consigue datos eSIM asequibles para tu próxima aventura. Elige tu destino y paga de forma segura.",
    where_travelling: "¿A dónde viajas?",
    select_destination: "Selecciona un destino",
    view_plans: "Ver planes",
    secure_payments: "Pagos seguros",
    instant_delivery: "Entrega instantánea",
    no_physical_sim: "Sin SIM física",
    travel_freely: "Viaja libremente",
    lte_ready: "Listo para 4G / LTE",
    popular_destinations: "DESTINOS POPULARES",
    popular_title: "¿A dónde te llevará tu próximo viaje?",
    popular_sub: "Cubrimos los destinos más solicitados. Explora todo nuestro catálogo.",
    explore_all_destinations: "Explorar todos los destinos",
    why_safari: "POR QUÉ SAFARI ESIM",
    why_title: "La forma más fácil de viajar conectado.",
    local_coverage: "Cobertura local",
    local_coverage_sub: "Conéctate a redes locales compatibles en tu destino.",
    instant_delivery_sub: "Los detalles de tu eSIM están listos inmediatamente tras el pago.",
    secure_by_design: "Seguridad garantizada",
    secure_by_design_sub: "Pagos y gestión de cuenta diseñados para un viaje seguro.",
    one_phone: "Un teléfono, una experiencia",
    one_phone_sub: "Mantén tu SIM física mientras Safari eSim gestiona tus datos.",
    ready_when: "LISTO CUANDO TÚ LO ESTÉS",
    ready_title: "Elige tu destino. Nosotros nos encargamos de la conexión.",
    ready_sub: "Explora planes, compara duración y datos, y completa el pago en unos pocos clics.",
    browse_destinations: "Explorar destinos",
    still_choosing: "¿Todavía decidiendo?",
    explore_all_plans: "Explora todos los planes de Safari eSim.",
    browse_plans: "Explorar planes",

    dest_heading: "Conéctate en casi cualquier lugar.",
    dest_sub: "Elige un país para ver los planes eSIM disponibles, cobertura y precios.",
    all: "Todos",
    no_dest_found: "No se encontró el destino",
    try_another: "Prueba con otro país o región.",

    back_to_dest: "Volver a destinos",
    data_plans: "Planes de Datos",
    select_plan: "Selecciona un plan para continuar con la compra",
    validity: "Validez",
    coverage: "Cobertura",
    network: "Red",
    activation_policy: "Política de activación",
    price: "Precio",
    order_summary: "Resumen del pedido",
    payment_method: "Método de pago",
    mpesa_payment: "M-Pesa Express",
    card_payment: "Tarjeta de Crédito / Débito",
    pay_now: "Pagar ahora",
    days: "días",

    how_title: "Cómo funciona Safari eSIM",
    how_subtitle: "Tres sencillos pasos para estar conectado en cualquier parte del mundo.",
    install_title: "Guía de instalación de eSIM",
    install_sub: "Instrucciones paso a paso para dispositivos iOS y Android.",
    support_title: "¿Cómo podemos ayudarte?",
    support_sub: "Busca en nuestro centro de ayuda o contacta con soporte 24/7.",
  },
  de: {
    destinations: "Reiseziele",
    how_it_works: "Wie es funktioniert",
    installation: "Installation",
    help: "Hilfe",
    login: "Anmelden",
    portal: "Portal",
    get_esim: "eSIM kaufen",
    explore: "Entdecken",
    support: "Unterstützung",
    company: "Unternehmen",
    all_plans: "Alle Tarife",
    installation_guide: "Installationsanleitung",
    help_centre: "Hilfe-Center",
    faqs: "FAQ",
    contact_us: "Kontakt",
    network_coverage: "Netzabdeckung",
    about: "Über Safari eSIM",
    terms: "AGB",
    privacy: "Datenschutz",
    refund_policy: "Rückerstattungsrichtlinie",
    rights_reserved: "Alle Rechte vorbehalten.",
    my_esims: "Meine eSIMs",
    checkout: "Kasse",
    buy_now: "Jetzt kaufen",
    search: "Land suchen...",

    hero_eyebrow: "REISEKONNEKTIVITÄT, VEREINFACHT",
    hero_title_1: "Reisen Sie weiter.",
    hero_title_2: "Bleiben Sie verbunden.",
    hero_sub: "Günstige eSIM-Datenpakete für Ihr nächstes Abenteuer. Wählen Sie Ihr Reiseziel und zahlen Sie sicher.",
    where_travelling: "Wohin reisen Sie?",
    select_destination: "Reiseziel auswählen",
    view_plans: "Tarife anzeigen",
    secure_payments: "Sichere Zahlungen",
    instant_delivery: "Sofortige Lieferung",
    no_physical_sim: "Keine physische SIM",
    travel_freely: "Frei reisen",
    lte_ready: "4G / LTE bereit",
    popular_destinations: "BELIEBTE REISEZIELE",
    popular_title: "Wohin führt Ihre nächste Reise?",
    popular_sub: "Wir decken die beliebtesten Reiseziele ab. Entdecken Sie unseren gesamten Katalog.",
    explore_all_destinations: "Alle Reiseziele entdecken",
    why_safari: "WARUM SAFARI ESIM",
    why_title: "Eine entspanntere Art, auf Reisen verbunden zu bleiben.",
    local_coverage: "Lokale Abdeckung",
    local_coverage_sub: "Verbinden Sie sich über unterstützte lokale Mobilfunknetze an Ihrem Reiseziel.",
    instant_delivery_sub: "Ihre eSIM-Details stehen direkt nach der Zahlung zur Verfügung.",
    secure_by_design: "Sicherheit durch Design",
    secure_by_design_sub: "Zahlungen und Konten sind für eine sichere Reise entwickelt.",
    one_phone: "Ein Smartphone, ein Erlebnis",
    one_phone_sub: "Behalten Sie Ihre gewohnte SIM, während Safari eSim Ihre Reisedaten übernimmt.",
    ready_when: "BEREIT, WENN SIE ES SIND",
    ready_title: "Wählen Sie Ihr Reiseziel. Wir kümmern uns um die Verbindung.",
    ready_sub: "Tarife vergleichen, Laufzeit wählen und mit wenigen Klicks bestellen.",
    browse_destinations: "Reiseziele durchsuchen",
    still_choosing: "Noch unsicher?",
    explore_all_plans: "Entdecken Sie alle Safari eSim Tarife.",
    browse_plans: "Tarife durchsuchen",

    dest_heading: "Fast überall vernetzt.",
    dest_sub: "Wählen Sie ein Land, um verfügbare eSIM-Tarife, Netzabdeckung und Preise zu sehen.",
    all: "Alle",
    no_dest_found: "Kein Reiseziel gefunden",
    try_another: "Versuchen Sie ein anderes Land oder eine andere Region.",

    back_to_dest: "Zurück zu allen Reisezielen",
    data_plans: "Datenpakete",
    select_plan: "Wählen Sie einen Tarif, um zur Kasse zu gehen",
    validity: "Gültigkeit",
    coverage: "Abdeckung",
    network: "Netzwerk",
    activation_policy: "Aktivierungsrichtlinie",
    price: "Preis",
    order_summary: "Bestellübersicht",
    payment_method: "Zahlungsmethode",
    mpesa_payment: "M-Pesa Express",
    card_payment: "Kredit- / Debitkarte",
    pay_now: "Jetzt bezahlen",
    days: "Tage",

    how_title: "Wie Safari eSIM funktioniert",
    how_subtitle: "Drei einfache Schritte, um überall auf der Welt online zu bleiben.",
    install_title: "eSIM Installationsanleitung",
    install_sub: "Schritt-für-Schritt Anleitung für iOS und Android Geräte.",
    support_title: "Wie können wir Ihnen helfen?",
    support_sub: "Durchsuchen Sie unser Hilfe-Center oder kontaktieren Sie den Support rund um die Uhr.",
  },
  ar: {
    destinations: "الوجهات",
    how_it_works: "كيف يعمل",
    installation: "التثبيت",
    help: "المساعدة",
    login: "تسجيل الدخول",
    portal: "البوابة",
    get_esim: "احصل على eSIM",
    explore: "استكشف",
    support: "الدعم",
    company: "الشركة",
    all_plans: "جميع الباقات",
    installation_guide: "دليل التثبيت",
    help_centre: "مركز المساعدة",
    faqs: "الأسئلة الشائعة",
    contact_us: "اتصل بنا",
    network_coverage: "تغطية الشبكة",
    about: "عن Safari eSIM",
    terms: "الشروط والأحكام",
    privacy: "سياسة الخصوصية",
    refund_policy: "سياسة الاسترداد",
    rights_reserved: "جميع الحقوق محفوظة.",
    my_esims: "شرائحي eSIM",
    checkout: "الدفع",
    buy_now: "اشتر الآن",
    search: "ابحث عن دولة...",

    hero_eyebrow: "اتصالات السفر، بشكل مبسط",
    hero_title_1: "سافر أبعد.",
    hero_title_2: "ابق على اتصال.",
    hero_sub: "احصل على باقات بيانات eSIM بأسعار مناسبة لمغامرتك القادمة. اختر وجهتك ودفع بأمان واحصل على شريحتك خلال دقائق.",
    where_travelling: "إلى أين تسافر؟",
    select_destination: "اختر الوجهة",
    view_plans: "عرض الباقات",
    secure_payments: "دفع آمن",
    instant_delivery: "تسليم فوري",
    no_physical_sim: "بدون شريحة فعلية",
    travel_freely: "سافر بحرية",
    lte_ready: "جاهز لشبكة 4G / LTE",
    popular_destinations: "الوجهات الشائعة",
    popular_title: "إلى أين ستكون رحلتك القادمة؟",
    popular_sub: "نغطي الوجهات الأكثر طلباً من قبل المسافرين. استكشف دليل الوجهات الكامل للمزيد.",
    explore_all_destinations: "استكشف جميع الوجهات",
    why_safari: "لماذا SAFARI ESIM",
    why_title: "طريقة أكثر سلاسة للسفر متصلاً.",
    local_coverage: "تغطية محليّة",
    local_coverage_sub: "اتصل عبر شبكات المحمول المحلية المعتمدة في وجهتك.",
    instant_delivery_sub: "تفاصيل eSIM الخاصة بك جاهزة فوراً بعد نجاح عملية الدفع.",
    secure_by_design: "أمان مضمون",
    secure_by_design_sub: "تم بناء أنظمة الدفع والحسابات لتوفير تجربة سفر آمنة.",
    one_phone: "هاتف واحد، تجربة واحدة",
    one_phone_sub: "احتفظ بشريحتك التقليدية بينما تتولى Safari eSim بيانات سفرك.",
    ready_when: "جاهز عندما تكون جاهزاً",
    ready_title: "اختر وجهتك، وسنتكفل نحن بالاتصال.",
    ready_sub: "تصفح الباقات وقارن الصلاحية والحجم وأكمل عملية الدفع بنقرات بسيطة.",
    browse_destinations: "تصفح الوجهات",
    still_choosing: "هل لا تزال تختار؟",
    explore_all_plans: "استكشف جميع باقات Safari eSim.",
    browse_plans: "تصفح الباقات",

    dest_heading: "اتصل تقريباً في أي مكان.",
    dest_sub: "اختر دولة لعرض باقات eSIM المتاحة، التغطية والأسعار.",
    all: "الكل",
    no_dest_found: "لم يتم العثور على وجهات",
    try_another: "جرب دولة أو منطقة أخرى.",

    back_to_dest: "العودة إلى جميع الوجهات",
    data_plans: "باقات البيانات",
    select_plan: "اختر باقة للمتابعة إلى صفحة الدفع",
    validity: "الصلاحية",
    coverage: "التغطية",
    network: "الشبكة",
    activation_policy: "سياسة التفعيل",
    price: "السعر",
    order_summary: "ملخص الطلب",
    payment_method: "طريقة الدفع",
    mpesa_payment: "M-Pesa Express",
    card_payment: "بطاقة ائتمان / خصم",
    pay_now: "ادفع الآن",
    days: "أيام",

    how_title: "كيف يعمل Safari eSIM",
    how_subtitle: "ثلاث خطوات بسيطة للبقاء متصلاً في أي مكان حول العالم.",
    install_title: "دليل تثبيت eSIM",
    install_sub: "تعليمات خطوة بخطوة لأجهزة iOS و Android.",
    support_title: "كيف يمكننا مساعدتك؟",
    support_sub: "ابحث في مركز المساعدة أو تواصل مع الدعم الفني 24/7.",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  currency: Currency;
  setCurrency: (curr: Currency) => void;
  t: (key: string) => string;
  formatPrice: (amountUSD: number) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem("safari_lang") as Language) || "en";
  });

  const [currency, setCurrency] = useState<Currency>(() => {
    return (localStorage.getItem("safari_currency") as Currency) || "USD";
  });

  // Auto-detect user's country & currency based on timezone / browser locale on boot
  useEffect(() => {
    if (!localStorage.getItem("safari_currency")) {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      if (tz.includes("Nairobi") || tz.includes("Africa/Nairobi")) setCurrency("KES");
      else if (tz.includes("Dar_es_Salaam")) setCurrency("TZS");
      else if (tz.includes("Kampala")) setCurrency("UGX");
      else if (tz.includes("Kigali")) setCurrency("RWF");
      else if (tz.includes("Johannesburg")) setCurrency("ZAR");
      else if (tz.includes("London") || tz.includes("Europe/London")) setCurrency("GBP");
      else if (tz.includes("Berlin") || tz.includes("Paris") || tz.includes("Europe")) setCurrency("EUR");
    }
  }, []);

  const applyGoogleTranslate = (lang: Language) => {
    const cookieVal = lang === "en" ? "" : `/en/${lang}`;
    document.cookie = `googtrans=${cookieVal}; path=/;`;
    if (window.location.hostname) {
      document.cookie = `googtrans=${cookieVal}; path=/; domain=${window.location.hostname};`;
    }

    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      const selectEl = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
      if (selectEl) {
        if (selectEl.value !== lang) {
          selectEl.value = lang;
          selectEl.dispatchEvent(new Event("change"));
        }
        clearInterval(interval);
      }
      if (attempts > 15) clearInterval(interval);
    }, 200);
  };

  useEffect(() => {
    localStorage.setItem("safari_lang", language);
    // Support RTL layout if Arabic is selected
    if (language === "ar") {
      document.documentElement.dir = "rtl";
      document.documentElement.lang = "ar";
    } else {
      document.documentElement.dir = "ltr";
      document.documentElement.lang = language;
    }

    applyGoogleTranslate(language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem("safari_currency", currency);
  }, [currency]);

  // Inject Google Translate script dynamically as a seamless global fallback widget
  useEffect(() => {
    // Set cookie immediately before script injection so Google Translate reads it on load
    const currentSavedLang = (localStorage.getItem("safari_lang") as Language) || "en";
    if (currentSavedLang !== "en") {
      const cookieVal = `/en/${currentSavedLang}`;
      document.cookie = `googtrans=${cookieVal}; path=/;`;
      if (window.location.hostname) {
        document.cookie = `googtrans=${cookieVal}; path=/; domain=${window.location.hostname};`;
      }
    }

    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      (window as any).googleTranslateElementInit = () => {
        if ((window as any).google && (window as any).google.translate) {
          new (window as any).google.translate.TranslateElement(
            {
              pageLanguage: "en",
              layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false,
            },
            "google_translate_element"
          );

          setTimeout(() => {
            applyGoogleTranslate(language);
          }, 300);
        }
      };
    }
  }, []);


  const t = (keyOrText: string): string => {
    if (!keyOrText) return "";
    const langDict = translations[language] || translations["en"];
    
    // 1. Direct key match
    if (langDict[keyOrText]) return langDict[keyOrText];

    // 2. Reverse lookup in English dictionary if keyOrText is English phrase
    const enDict = translations["en"];
    const matchingKey = Object.keys(enDict).find(
      (k) => enDict[k] === keyOrText || k === keyOrText
    );
    if (matchingKey && langDict[matchingKey]) {
      return langDict[matchingKey];
    }

    return keyOrText;
  };

  const formatPrice = (amountUSD: number): string => {
    const curr = CURRENCIES[currency] || CURRENCIES["USD"];
    const converted = amountUSD * curr.rate;
    if (curr.code === "USD" || curr.code === "EUR" || curr.code === "GBP") {
      return `${curr.symbol}${converted.toFixed(2)}`;
    }
    return `${curr.symbol}${Math.round(converted).toLocaleString()}`;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        currency,
        setCurrency,
        t,
        formatPrice,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};


