const portfolioProjects = [
    {
        id: 1,
        title: "Grand Royale Hotel Management",
        description: "A comprehensive hotel management system for booking, room service, and staff coordination.",
        category: "Management",
        tags: ["React", "Node.js", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 2,
        title: "MediCare Clinic System",
        description: "Electronic health records and appointment scheduling for modern healthcare facilities.",
        category: "Healthcare",
        tags: ["Vue.js", "Django", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 3,
        title: "RetailFlow POS",
        description: "Cloud-based point of sale system with real-time inventory tracking for retail chains.",
        category: "E-commerce",
        tags: ["React Native", "Express", "MongoDB"],
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 4,
        title: "FinSecure Banking Gateway",
        description: "High-security payment processing gateway adhering to PCI-DSS compliance standards.",
        category: "FinTech",
        tags: ["Go", "React", "Redis"],
        image: "https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 5,
        title: "EduLearn LMS",
        description: "Interactive learning management system supporting video courses and automated grading.",
        category: "Education",
        tags: ["Next.js", "Supabase", "Tailwind"],
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 6,
        title: "SmartWarehouse Tracker",
        description: "IoT-enabled warehouse management dashboard for automated guided vehicles (AGVs).",
        category: "Logistics",
        tags: ["Angular", "Python", "MQTT"],
        image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c1590a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 7,
        title: "HR Connect Portal",
        description: "Employee onboarding and payroll management portal for enterprise companies.",
        category: "Management",
        tags: ["React", "NestJS", "MySQL"],
        image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 8,
        title: "FoodBite Delivery App",
        description: "Cross-platform food delivery app linking local restaurants with freelance drivers.",
        category: "Mobile",
        tags: ["Flutter", "Firebase", "Stripe API"],
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 9,
        title: "PropertyFinder CRM",
        description: "Real estate listing platform with virtual tours and agent scheduling tools.",
        category: "Real Estate",
        tags: ["Next.js", "Prisma", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 10,
        title: "AutoRepair Garage OS",
        description: "Operational software for auto repair shops covering invoicing and part ordering.",
        category: "Management",
        tags: ["Vue.js", "Laravel", "MySQL"],
        image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 11,
        title: "StockPredict AI",
        description: "Machine learning dashboard visualizing stock trends based on historical market data.",
        category: "AI/ML",
        tags: ["Python", "TensorFlow", "React"],
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 12,
        title: "CryptoWallet Secure",
        description: "Non-custodial cryptocurrency wallet with multi-chain support.",
        category: "Web3",
        tags: ["React Native", "Solidity", "Ethers.js"],
        image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 13,
        title: "AgriTech Crop Monitor",
        description: "Drone imagery analysis tool for precision agriculture and crop yield prediction.",
        category: "AgriTech",
        tags: ["Python", "OpenCV", "Vue.js"],
        image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 14,
        title: "TaskMaster Pro",
        description: "Project management software similar to Jira with kanban boards and time tracking.",
        category: "Productivity",
        tags: ["React", "GraphQL", "Node.js"],
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 15,
        title: "FitTrack Personal Trainer",
        description: "Fitness application building custom workout routines using user biometric data.",
        category: "Health & Fitness",
        tags: ["Swift", "CoreData", "Firebase"],
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 16,
        title: "Lumina Smart Home",
        description: "Mobile controller for smart home devices including thermostats, lights, and locks.",
        category: "IoT",
        tags: ["React Native", "AWS IoT", "Node.js"],
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 17,
        title: "Chef's Recipe Hub",
        description: "Community-driven recipe sharing platform with ingredient scaling and shopping lists.",
        category: "Social Network",
        tags: ["Ruby on Rails", "PostgreSQL", "Stimulus"],
        image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 18,
        title: "EventTix Ticketing",
        description: "High-concurrency ticket sales platform handling thousands of simultaneous purchases.",
        category: "Entertainment",
        tags: ["Go", "React", "RabbitMQ"],
        image: "https://images.unsplash.com/photo-1540039155732-6114a4286105?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 19,
        title: "LegalDoc Analyzer",
        description: "NLP tool scanning corporate legal documents for anomalous clauses and risks.",
        category: "LegalTech",
        tags: ["Python", "spaCy", "React"],
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 20,
        title: "FleetManager GPS",
        description: "Real-time GPS tracking and maintenance scheduling for logistics fleets.",
        category: "Logistics",
        tags: ["Angular", "Google Maps API", "Node.js"],
        image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 21,
        title: "Vintage Vibe E-Store",
        description: "Boutique e-commerce platform for vintage clothing with AR try-on features.",
        category: "E-commerce",
        tags: ["Shopify Plus", "React", "Three.js"],
        image: "https://images.unsplash.com/photo-1555529902-5261145633bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 22,
        title: "CodeCollab IDE",
        description: "Web-based collaborative code editor with real-time syncing and terminal access.",
        category: "Developer Tools",
        tags: ["TypeScript", "WebSockets", "Docker"],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 23,
        title: "CharityFund Raiser",
        description: "Crowdfunding platform for non-profits featuring transparent fund tracking.",
        category: "FinTech",
        tags: ["Vue.js", "Ruby on Rails", "Stripe"],
        image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 24,
        title: "Virtual Classroom Plus",
        description: "Zoom alternative specifically tailored for primary education and remote learning.",
        category: "Education",
        tags: ["WebRTC", "React", "Socket.io"],
        image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 25,
        title: "AeroReserve Flight Booking",
        description: "Global flight search and booking engine aggregating data from hundreds of airlines.",
        category: "Travel",
        tags: ["Next.js", "Java Spring", "Redis"],
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 26,
        title: "DentalSync Practice System",
        description: "Patient management system for dental offices tracking x-rays and treatments.",
        category: "Healthcare",
        tags: ["C#", ".NET Core", "React"],
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 27,
        title: "GamerStats Hub",
        description: "Analytics platform aggregating player statistics across popular competitive games.",
        category: "Gaming",
        tags: ["Vue.js", "Python Fast API", "MongoDB"],
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 28,
        title: "EcoFootprint Calculator",
        description: "Application helping businesses measure and offset their carbon emissions.",
        category: "Sustainability",
        tags: ["React", "D3.js", "Node.js"],
        image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 29,
        title: "Artisan Marketplace",
        description: "Peer-to-peer marketplace allowing local artisans to sell handmade goods worldwide.",
        category: "E-commerce",
        tags: ["Svelte", "Supabase", "Tailwind"],
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 30,
        title: "PayrollMaster Enterpise",
        description: "Multi-currency payroll software for global teams handling tax compliance automatically.",
        category: "Management",
        tags: ["Angular", "Java", "Oracle"],
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 31,
        title: "PetGuard Vet Portal",
        description: "Veterinary clinic software tracking animal health histories and vaccination schedules.",
        category: "Healthcare",
        tags: ["React", "Express", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1628009368231-7bb7cbcb8122?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 32,
        title: "PodcastStream Audio",
        description: "Podcast hosting and streaming platform with monetization options for creators.",
        category: "Media",
        tags: ["Next.js", "AWS S3", "GraphQL"],
        image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 33,
        title: "GymGenius Access",
        description: "RFID and QR-code access control system for 24/7 fitness centers.",
        category: "IoT",
        tags: ["C++", "React Native", "Firebase"],
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 34,
        title: "Restaurant TableMap",
        description: "Interactive floor plan software for restaurant hosts to manage reservations and seating.",
        category: "Management",
        tags: ["Vue.js", "Fabric.js", "Node.js"],
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 35,
        title: "LanguageLearn AI",
        description: "AI conversational partner app helping users practice new languages via voice chat.",
        category: "AI/ML",
        tags: ["React", "OpenAI API", "Web Speech API"],
        image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 36,
        title: "AutoInsurance QuoteBot",
        description: "Chatbot and form wizard providing instant, dynamic car insurance quotes.",
        category: "FinTech",
        tags: ["React", "Django", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 37,
        title: "LocalGov Citizen Portal",
        description: "Municipal application allowing citizens to report potholes, graffiti, and town issues.",
        category: "Government",
        tags: ["React Native", "Node.js", "MongoDB"],
        image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 38,
        title: "BreweryBatch Controller",
        description: "Industrial monitoring system tracking temperature and fermentation metrics for breweries.",
        category: "Manufacturing",
        tags: ["Vue.js", "Python", "Raspberry Pi"],
        image: "https://images.unsplash.com/photo-1505075936515-2f16d123b371?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 39,
        title: "WeddingWisdom Planner",
        description: "All-in-one suite for couples managing guest lists, RSVPs, and vendor contracts.",
        category: "Productivity",
        tags: ["React", "Firebase", "Tailwind"],
        image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 40,
        title: "SecureDoc Signature",
        description: "E-signature platform utilizing blockchain tech to guarantee document immutability.",
        category: "Web3",
        tags: ["Next.js", "Ethereum", "IPFS"],
        image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 41,
        title: "CityTransit Live",
        description: "Interactive city map showing live locations of buses and trains via GPS.",
        category: "Travel",
        tags: ["Angular", "Mapbox", "WebSockets"],
        image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 42,
        title: "MindfulMeditation App",
        description: "Wellness app featuring audio tracks, breathing guides, and a mood tracker.",
        category: "Health & Fitness",
        tags: ["React Native", "ExoPlayer", "Node.js"],
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 43,
        title: "FreelanceInvoice Pro",
        description: "Invoicing and expense tracking tailored specifically for independent contractors.",
        category: "FinTech",
        tags: ["Vue.js", "Laravel", "MySQL"],
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 44,
        title: "MuseumAudio Guide",
        description: "Location-aware mobile app acting as a personalized docent in art museums.",
        category: "Education",
        tags: ["Swift", "CoreLocation", "Sanity CMS"],
        image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 45,
        title: "SupplyChain Trace",
        description: "Dashboard allowing companies to trace raw materials from source to shelf.",
        category: "Logistics",
        tags: ["React", "D3.js", "Golang"],
        image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c1590a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 46,
        title: "Orchard Fruit Sorter",
        description: "Computer vision application classifying fruit quality on industrial conveyor belts.",
        category: "AI/ML",
        tags: ["Python", "PyTorch", "OpenCV"],
        image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 47,
        title: "MovieTheater Kiosk",
        description: "Touchscreen interface software for self-service ticket and concession purchases.",
        category: "Entertainment",
        tags: ["Electron", "React", "Node.js"],
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 48,
        title: "LibraryCatalog DB",
        description: "Digital lending library system supporting DRM books, audio, and physical copies.",
        category: "Education",
        tags: ["Vue.js", "Express", "MongoDB"],
        image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 49,
        title: "AutoDealership Sales",
        description: "CRM and inventory management linking online auto sales directly to lot inventory.",
        category: "E-commerce",
        tags: ["Next.js", "GraphQL", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    },
    {
        id: 50,
        title: "SurveyBuilder Pro",
        description: "Drag-and-drop tool creating branching logic surveys and polling forms.",
        category: "Productivity",
        tags: ["React", "Redux", "Ruby on Rails"],
        image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        github: "#",
        live: "#"
    }
];
