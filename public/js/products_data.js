const productsData = [
    {
        "id": "101",
        "name": "Brewcraft Ethiopian Light Roast",
        "category": "Coffee Powders",
        "price": "850.00",
        "image": "/assets/products/ethiopian-roast.png",
        "description": "Single-origin light roast with floral notes. Available in Whole Bean, Fine, Medium, Coarse."
    },
    {
        "id": "102",
        "name": "Brewcraft Colombian Medium Roast",
        "category": "Coffee Powders",
        "price": "850.00",
        "image": "/assets/products/colombian-roast.png",
        "description": "Smooth and balanced medium roast. Available in Whole Bean, Fine, Medium, Coarse."
    },
    {
        "id": "103",
        "name": "Brewcraft Brazilian Dark Roast",
        "category": "Coffee Powders",
        "price": "850.00",
        "image": "/assets/products/brazilian-roast.png",
        "description": "Rich and intense dark roast. Available in Whole Bean, Fine, Medium, Coarse."
    },
    {
        "id": "104",
        "name": "Brewcraft Indian Monsoon Malabar",
        "category": "Coffee Powders",
        "price": "950.00",
        "image": "/assets/products/indian-roast.png",
        "description": "Unique low-acidity bean exposed to monsoon winds. Available in Whole Bean, Fine, Medium, Coarse."
    },
    {
        "id": "105",
        "name": "Brewcraft House Blend",
        "category": "Coffee Powders",
        "price": "750.00",
        "image": "/assets/products/house-roast.png",
        "description": "Our signature daily blend. Available in Whole Bean, Fine, Medium, Coarse."
    },
    {
        "id": "106",
        "name": "Brewcraft Espresso Blend",
        "category": "Coffee Powders",
        "price": "850.00",
        "image": "/assets/products/espresso-blend.png",
        "description": "Perfectly crafted for espresso shots. Available in Whole Bean, Fine, Medium, Coarse."
    },
    {
        "id": "107",
        "name": "Brewcraft Breakfast Blend",
        "category": "Coffee Powders",
        "price": "750.00",
        "image": "/assets/products/breakfast-blend.png",
        "description": "Bright and energizing morning cup. Available in Whole Bean, Fine, Medium, Coarse."
    },
    {
        "id": "201",
        "name": "Brewcraft Cold Brew Classic",
        "category": "Ready-to-Drink",
        "price": "250.00",
        "image": "/assets/products/cold-brew.png",
        "description": "Smooth cold brew, ready to drink."
    },
    {
        "id": "202",
        "name": "Brewcraft Cold Brew Mocha",
        "category": "Ready-to-Drink",
        "price": "280.00",
        "image": "/assets/products/Mocha.png",
        "description": "Cold brew with a touch of rich chocolate."
    },
    {
        "id": "203",
        "name": "Brewcraft Iced Latte",
        "category": "Ready-to-Drink",
        "price": "280.00",
        "image": "/assets/products/iced-latte.png",
        "description": "Creamy iced latte for hot days."
    },
    {
        "id": "204",
        "name": "Brewcraft Nitro Cold Brew",
        "category": "Ready-to-Drink",
        "price": "320.00",
        "image": "/assets/products/nitro-brew.png",
        "description": "Nitrogen-infused for a creamy texture."
    },
    {
        "id": "301",
        "name": "Brewcraft Ceramic Mug (300ml)",
        "category": "Accessories",
        "price": "550.00",
        "image": "/assets/products/ceramic-mug.jpg",
        "description": "Classic ceramic mug for your daily brew."
    },
    {
        "id": "302",
        "name": "Brewcraft Ceramic Mug (450ml)",
        "category": "Accessories",
        "price": "650.00",
        "image": "/assets/products/ceramic.jpg",
        "description": "Extra large mug for serious coffee lovers."
    },
    {
        "id": "303",
        "name": "Brewcraft Double-Wall Glass Cup",
        "category": "Accessories",
        "price": "850.00",
        "image": "/assets/products/double-wall.jpg",
        "description": "Keeps coffee hot while staying cool to the touch."
    },
    {
        "id": "304",
        "name": "Brewcraft Travel Mug",
        "category": "Accessories",
        "price": "1150.00",
        "image": "/assets/products/ss-tumbler.jpg",
        "description": "Leak-proof travel mug for coffee on the go."
    },
    {
        "id": "305",
        "name": "Brewcraft Insulated Stainless Steel Tumbler",
        "category": "Accessories",
        "price": "1350.00",
        "image": "/assets/products/ss-tumbler.jpg",
        "description": "Maintains temperature for hours."
    },
    {
        "id": "401",
        "name": "Brewcraft French Press (350ml)",
        "category": "Brewing Tools",
        "price": "1450.00",
        "image": "/assets/products/french-press-small.png",
        "description": "Classic immersion brewer for a rich cup."
    },
    {
        "id": "402",
        "name": "Brewcraft French Press (600ml)",
        "category": "Brewing Tools",
        "price": "1850.00",
        "image": "/assets/products/french-press-large.png",
        "description": "Larger capacity French Press for sharing."
    },
    {
        "id": "403",
        "name": "Brewcraft Pour-Over Dripper",
        "category": "Brewing Tools",
        "price": "1150.00",
        "image": "/assets/products/drip-coffee.png",
        "description": "V60 Style dripper for precise brewing."
    },
    {
        "id": "404",
        "name": "Brewcraft Cold Brew Maker",
        "category": "Brewing Tools",
        "price": "1650.00",
        "image": "/assets/products/cold-brew.jpg",
        "description": "Make smooth cold brew at home easily."
    },
    {
        "id": "405",
        "name": "Brewcraft Manual Coffee Grinder",
        "category": "Brewing Tools",
        "price": "2150.00",
        "image": "/assets/products/manual-coffee-grinder.jpg",
        "description": "Adjustable ceramic burr grinder."
    },
    {
        "id": "406",
        "name": "Brewcraft Digital Coffee Scale",
        "category": "Brewing Tools",
        "price": "1650.00",
        "image": "/assets/products/coffee-digital-scale.jpg",
        "description": "Precision scale with timer for perfect brewing."
    },
    {
        "id": "407",
        "name": "Brewcraft Measuring Scoop",
        "category": "Brewing Tools",
        "price": "350.00",
        "image": "/assets/products/coffee-measuring-scoop.jpg",
        "description": "Stainless steel scoop for consistent dosing."
    },
    {
        "id": "501",
        "name": "Brewcraft Drip Coffee Maker",
        "category": "Coffee Machines",
        "price": "4200.00",
        "image": "/assets/products/drip.jpg",
        "description": "Reliable automatic drip brewer."
    },
    {
        "id": "502",
        "name": "Brewcraft Capsule Coffee Machine",
        "category": "Coffee Machines",
        "price": "6500.00",
        "image": "/assets/products/capsule.jpg",
        "description": "Quick and convenient capsule system."
    },
    {
        "id": "503",
        "name": "Brewcraft Espresso Machine \u2013 Basic",
        "category": "Coffee Machines",
        "price": "12500.00",
        "image": "/assets/products/basic-espresso-machine.jpg",
        "description": "Great entry-level home espresso machine."
    },
    {
        "id": "504",
        "name": "Brewcraft Espresso Machine \u2013 Pro",
        "category": "Coffee Machines",
        "price": "32000.00",
        "image": "/assets/products/complex-espresso-machine.jpg",
        "description": "Professional grade machine for the serious barista."
    },
    {
        "id": "601",
        "name": "Brewcraft Coffee Machine Descaler",
        "category": "Accessories",
        "price": "650.00",
        "image": "/assets/products/descaler.jpg",
        "description": "Keep your machine running smoothly."
    },
    {
        "id": "602",
        "name": "Brewcraft Cleaning Brush Set",
        "category": "Accessories",
        "price": "550.00",
        "image": "/assets/products/brush-set.jpg",
        "description": "Essential brushes for grinder and machine maintenance."
    },
    {
        "id": "701",
        "name": "Brewcraft Starter Coffee Kit",
        "category": "Bundles",
        "price": "2450.00",
        "image": "/assets/products/coffee-kit.png",
        "description": "Includes House Blend, Mug, and Scoop."
    },
    {
        "id": "702",
        "name": "Brewcraft Home Barista Kit",
        "category": "Bundles",
        "price": "7500.00",
        "image": "/assets/products/home-barista-kit.png",
        "description": "French Press, Grinder, Scale, and 2 bags of beans."
    },
    {
        "id": "703",
        "name": "Brewcraft Office Coffee Kit",
        "category": "Bundles",
        "price": "4800.00",
        "image": "/assets/products/office-kit.png",
        "description": "Bulk drip coffee, filters, and cups for the team."
    },
    {
        "id": "801",
        "name": "Brewcraft Tote Bag",
        "category": "Accessories",
        "price": "850.00",
        "image": "/assets/products/tote-bag.png",
        "description": "Stylish canvas tote for your coffee runs."
    },
    {
        "id": "802",
        "name": "Brewcraft Coffee Scoop Keychain",
        "category": "Accessories",
        "price": "250.00",
        "image": "/assets/products/key-chain.png",
        "description": "Mini scoop keychain, always be ready."
    },
    {
        "id": "999",
        "name": "Viva Special Blend",
        "category": "Coffee Powders",
        "price": "500.00",
        "image": "/assets/logo.png",
        "description": "A special blend for the external examination."
    }
];
window.productsData = productsData;