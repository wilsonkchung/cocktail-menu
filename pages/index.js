const cocktails = [
    {
    category: " Handcrafted Specials",
    items: [
      { name: 'Signature Whiskey Sour', ingr: 'Whiskey, lemon, orange', desc: 'Maraschino cherries, egg white', img: '/images/kiens_signature.jpg' },
      { name: 'Peruvian Pisco Sour', ingr: 'Peruvian Pisco', desc: 'key lime, egg white', img: '/images/pisco-sour.png' },
      { name: 'Old-fashioned', ingr: 'Whiskey, bitters, sugar', desc: 'Maraschino cherries, orange', img: '/images/old-fashioned.png' },
      { name: 'Manhattan', ingr: '', desc: '', img: '/images/manhanttan.png' },
    ],
  },
  {
    category: 'Handcrafted Cocktails',
    items: [
      { name: 'Classic Margarita', ingr: 'Tequila, orange liqueur', desc: 'lime juice', img: '/images/margarita.png' },
      { name: 'Negroni', desc: 'Gin, Campari, vermouth', img: '/images/negroni.jpg' },
      { name: 'Sidecar', desc: '', img: '/images/.png' },
      { name: 'Moscow Mule', desc: '', img: '/images/.png' },
    ],
  },
    {
    category: 'Bubbly & Refreshings',
    items: [
      { name: 'Cuba Libre', desc: 'Rum, Coca-Cola, lime juice', img: '/images/cuba-libre.png' },
      { name: 'Scotch & Soda', desc: 'Scotch, sparkling water, lemon', img: '/images/scotch-soda.png' },
      { name: 'Gin & Tonic', desc: 'Gin, Tonic water, lime', img: '/images/gin-tonic.png' },
      { name: 'Tom Collins', desc: 'Dry gin, lemon juice, club soda', img: '/images/tom-collins.png' },
      { name: 'Aperol Spritz', desc: 'Aperol, prosecco, soda', img: '/images/aperol-spritz.png' },
      { name: 'French 75', desc: 'Gin, champagne, lemon juice', img: '/images/french75.png' },
      { name: 'Mimosa', desc: 'Prosecco, orange, strawberry', img: '/images/mimosa.png' },
      
      
      { name: 'Mojito', desc: 'Rum, lime, mint, soda', img: '/images/mojito.png' }
    ],
  },
  {
    category: 'Fresh & Fruity',
    items: [
      { name: 'Mai Tai', desc: 'Rum, orange curaçao, orgeat', img: '/images/maitai.png' },
      { name: 'Rum Punch', desc: 'Rum, pineapple, orange, lime', img: '/images/rum-punch.png' },
      { name: 'Shaken Daiquiri', desc: 'Rum, strawberies, lime', img: '/images/strawberry-daiquiri.png' },
      { name: 'Malibu Bay Breeze', desc: 'Rum, coconut, cranberry, pineapple', img: '/images/malibu.png' },
      { name: 'Paloma', desc: 'Tequila, grapefruit juice, lime', img: '/images/paloma.png' },
      { name: 'Tequila Sunrise', desc: 'Tequila, orange, grenadine', img: '/images/tequila-sunrise.png' },
      { name: 'Cosmopolitan', desc: 'Vodka, Cointreau, cranberry', img: '/images/cosmo.png' },
      { name: 'Cranberry Vodka', desc: 'Vokda, cranberry, lime', img: '/images/cran-vodka.png' }
    ],
  },
  {
    category: 'In-House Beer & Wine',
    items: [
      { name: 'Red Wine', img: '/images/.png' },
      { name: 'White Wine', img: '/images/.png' },
      { name: 'Sangria', img: '/images/.png' },
      { name: 'Moscato', img: '/images/.png' },
      { name: 'Prosecco', img: '/images/.png' },
      { name: '', img: '/images/.png' },
      { name: 'Lager Beer', img: '/images/.png' },
      { name: 'Dark Beer', img: '/images/.png' },
    ],
  },
  {
    category: 'Non-Alcoholic',
    items: [
      { name: 'Cranberry Juice', img: '/images/.png' },
      { name: 'Grapefruit Juice', img: '/images/.png' },
      { name: 'Orange Juice', img: '/images/.png' },
      { name: 'Pineapple Juice', img: '/images/.png' },
      { name: 'Coca-Cola', img: '/images/.png' },
      { name: 'Orange Soda', img: '/images/.png' },
      { name: 'Sprite', img: '/images/.png' },
      { name: 'Ginger Ale', img: '/images/.png' },
      { name: 'Root Beer', img: '/images/.png' },
      { name: 'Ginger Beer', img: '/images/.png' },
      { name: 'Tonic Water', img: '/images/.png' },
      { name: 'Club Soda', img: '/images/.png' },
      { name: 'Shirlery Temple', img: '/images/.png' },
      { name: 'Roy Rogers', img: '/images/.png' },
    ]
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#ededed] p-6 text-[black] font-serif">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-center">Feliz cumpleaños,</h1>
        <h1 className="text-4xl font-bold mb-6 text-center">MERY MADRID!</h1>
        <h2 className="text-2xl font-bold mb-4 text-center">Drink Menu</h2>
        {cocktails.map((section) => (
          <div key={section.category} className="mb-12 text-center">
            <hr className="w-[70%] mx-auto my-1 border-t-1 border-gray-500" />
            <h2 className="text-xl mb-4">{section.category}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {section.items.map((drink) => (
                <div
                  key={drink.name}
                  className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition"
                >
                  {/* Show image only if not Beer & Wine and Non-Alcoholic */}
                  {!['In-House Beer & Wine', 'Non-Alcoholic'].includes(section.category) && (
                    <img src={drink.img} alt={drink.name} className="w-full aspect-square object-cover" />
                  )}
                  <div className="p-2">
                    <h3 className="text-[12px] sm:text-[12px] md:text-[12px] lg:text-[13px] font-bold">{drink.name}</h3>
                    {/* Show line only if not Beer & Wine and Non-Alcoholic */}
                    {!['In-House Beer & Wine', 'Non-Alcoholic'].includes(section.category) && (
                      <hr className="w-18 mx-auto my-1 border-t-1 border-gray-300" />
                    )}
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