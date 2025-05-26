const cocktails = [
    {
    category: " Handcrafted Specials",
    items: [
      { name: 'Signature Whiskey Sour', ingr: 'Whiskey, lemon, orange', desc: 'Maraschino cherries, egg white', img: '/images/kiens_signature.jpg' },
      { name: 'Old-fashioned', ingr: 'Whiskey, bitters, sugar', desc: 'Maraschino cherries, orange', img: '/images/old-fashioned.png' },
      { name: 'Peruvian Pisco Sour', ingr: 'Peruvian Pisco', desc: 'key lime, egg white', img: '/images/pisco-sour.png' },
      { name: 'Classic Margarita', ingr: 'Tequila, Grand Marnier', desc: 'lime juice', img: '/images/margarita.png' },
    ],
  },
  {
    category: 'Handcrafted Cocktails',
    items: [
      { name: 'Mojito', desc: 'Rum, lime, mint, soda', img: '/images/mojito.jpg' },
      { name: 'Mojito', desc: 'Rum, lime, mint, soda', img: '/images/mojito.jpg' },
      { name: 'Paloma', desc: 'Tequila, grapefruit, lime', img: '/images/paloma.jpg' },
      { name: 'Negroni', desc: 'Gin, Campari, vermouth', img: '/images/negroni.jpg' },
    ],
  },
    {
    category: 'Classic Refreshings',
    items: [
      { name: 'Cuba Libre', desc: 'Rum, Coca-Cola, lime juice', img: '/images/cuba-libre.png' },
      { name: 'Tom Collins', desc: 'Dry gin, lemon juice, club soda', img: '/images/tom-collins.png' },
      { name: 'Gin & Tonic', desc: 'Gin, Tonic water, lime', img: '/images/gin-tonic.png' },
      { name: 'Scotch & Soda', desc: 'Scotch, sparkling water, lemon', img: '/images/scotch-soda.png' },
    ],
  },
  {
    category: 'Fresh & Fruity',
    items: [
      { name: 'Cranberry Vodka', desc: 'Vokda, cranberry juice, lime', img: '/images/cran-vodka.png' },
      { name: 'Aperol Spritz', desc: 'Aperol, prosecco, soda', img: '/images/aperol_spritz.jpg' },
      { name: 'Tequila Sunrise', desc: 'Tequila, OJ, grenadine', img: '/images/tequila_sunrise.jpg' },
      { name: 'French 75', desc: 'Gin, lemon, champagne', img: '/images/french_75.jpg' },
      { name: 'Cosmopolitan', desc: 'Gin, tonic, cucumber', img: '/images/cucumber_gt.jpg' },
      { name: 'Rum Punch', desc: 'Rum, OJ, pineapple', img: '/images/rum_punch.jpg' },
    ],
  },
  {
    category: 'Beer & Wine',
    items: [
      { name: 'IPA', desc: 'Citrus-forward, 6.8%', img: '/images/ipa.jpg' },
      { name: 'Pilsner', desc: 'Crisp, light, 5%', img: '/images/pilsner.jpg' },
      { name: 'Stout', desc: 'Rich, chocolate, 7%', img: '/images/stout.jpg' },
      { name: 'Chardonnay', desc: 'Buttery, oaky', img: '/images/chardonnay.jpg' },
      { name: 'Pinot Noir', desc: 'Berry finish', img: '/images/pinot_noir.jpg' },
      { name: 'Rosé', desc: 'Dry, refreshing', img: '/images/rose.jpg' },
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#ededed] p-6 text-[black] font-serif">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-center">Feliz cumpleaños,</h1>
        <h1 className="text-4xl font-bold mb-6 text-center">MERY MADRID!</h1>
        <h2 className="text-2xl font-bold mb-2 text-center">Drink Menu</h2>
        {cocktails.map((section) => (
          <div key={section.category} className="mb-12 text-center">
            <hr className="w-[70%] mx-auto my-1 border-t-1 border-gray-500" />
            <h2 className="text-xl mb-2">{section.category}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {section.items.map((drink) => (
                <div
                  key={drink.name}
                  className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition"
                >
                  <img src={drink.img} alt={drink.name} className="w-full aspect-square object-cover" />
                  <div className="p-2">
                    <h3 className="text-[11px] sm:text-[12px] md:text-[12px] lg:text-[13px] font-bold">{drink.name}</h3>
                    <hr className="w-18 mx-auto my-1 border-t-1 border-gray-300" />
                    <p className="text-[9px] text-gray-500">{drink.ingr}</p>
                    <p className="text-[9px] text-gray-500">{drink.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}