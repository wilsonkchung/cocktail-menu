const cocktails = [
    {
    category: " Artisan Specials",
    category_es: "- Especiales Artesanales -",
    items: [
      { name: 'Whiskey Sour', ingr: 'Whiskey, egg white, orange', desc: 'Maraschino cherries, lemon', img: '/images/kiens_signature.jpg' },
      { name: 'Pisco Sour', ingr: 'Peruvian Pisco', desc: 'Key lime, egg white', img: '/images/pisco-sour.png' },
      { name: 'Old-fashioned', ingr: 'Whiskey, bitters, sugar', desc: 'Maraschino cherries, orange', img: '/images/old-fashioned.png' },
      { name: 'Manhattan', ingr: 'Whiskey, sweet vermouth', desc: 'Maraschino cherries, bitters', img: '/images/manhattan.png' }
    ]
  },
  {
    category: 'Handcrafted Cocktails',
    category_es: "- Cócteles Hechos a Mano -",
    items: [
      { name: 'Cosmopolitan', ingr: 'Vodka, Cointreau', desc: 'Cranberry juice, lime juice', img: '/images/cosmo.png' },
      { name: 'Old Cuban', ingr: 'Rum, champange, bitters', desc: 'Lime juice, mint leaves', img: '/images/old-cuban.png' },
      { name: 'Classic Martini', ingr: 'Gin or Vodka, dry vermouth', desc: 'Lemon peel or olives', img: '/images/martinis.png' },
      { name: 'Espresso Martini', ingr: 'Vodka, coffee liqueur', desc: 'Espresso shot', img: '/images/espresso-martini.png' },
      { name: 'Amaretto Sour', ingr: 'Amaretto liqueur, Bourbon', desc: 'Lemon juice, egg white', img: '/images/amaretto-sour.png' },
      { name: 'Negroni', ingr: 'Gin, Campari', desc: 'Sweet vermouth, orange', img: '/images/negroni.png' },
      { name: 'Classic Margarita', ingr: 'Tequila, orange liqueur',desc: 'Lime juice, salt', img: '/images/margarita.png' },
      { name: 'Moscow Mule', ingr: 'Vodka, ginger beer', desc: 'Lime juice, mint leaves', img: '/images/moscow-mule.png' }
    ]
  },
  {
    category: 'Fresh & Fruity',
    category_es: "- Fresco y Afrutado -",
    items: [
      { name: 'Mai Tai', ingr: 'Dark rum, light rum, orgeat', desc: 'orange curaçao, lime, mint', img: '/images/maitai.png' },
      { name: 'Shaken Daiquiri', ingr: 'Light Rum, lime juice', desc: 'Strawberry-infused syrup', img: '/images/strawberry-daiquiri.png' },
      { name: 'Rum Punch', ingr: 'Dark rum, light rum', desc: 'pineapple, orange, lime', img: '/images/rum-punch.png' },
      { name: 'Malibu Bay Breeze', ingr: 'Malibu Coconu Rum', desc: 'cranberry, pineapple', img: '/images/malibu.png' },
      { name: 'Paloma', ingr: 'Tequila, grapefruit juice', desc: 'Lime juice, sea salt', img: '/images/paloma.png' },
      { name: 'Tequila Sunrise', ingr: 'Tequila, orange juice', desc: 'Grenadine syrup, cherries', img: '/images/tequila-sunrise.png' },
      { name: 'Cranberry Vodka', ingr: 'Vodka, cranberry juice', desc: 'Lime', img: '/images/cran-vodka.png' },
      { name: 'S*x on the Beach', ingr: 'Vodka, Peach schnapps', desc: 'Cranberry, orange, pineapple', img: '/images/beach.png' }
    ]
  },
  {
    category: 'Sparklings & Refreshings',
    category_es: "- Espumosos y Refrescantes -",
    items: [
      { name: 'Aperol Spritz', desc: 'Aperol, prosecco, soda', img: '/images/aperol-spritz.png' },
      { name: 'French 75', desc: 'Gin, champagne, lemon juice', img: '/images/french75.png' },
      { name: 'Mimosa', desc: 'Prosecco, orange, strawberry', img: '/images/mimosa.png' },
      { name: 'Mojito', desc: 'Rum, lime, mint, soda', img: '/images/mojito.png' },
      { name: 'Cuba Libre', desc: 'Rum, Coca-Cola, lime juice', img: '/images/cuba-libre.png' },
      { name: 'Scotch & Soda', desc: 'Scotch, sparkling water, lemon', img: '/images/scotch-soda.png' },
      { name: 'Gin & Tonic', desc: 'Gin, Tonic water, lime', img: '/images/gin-tonic.png' },
      { name: 'Tom Collins', desc: 'Dry gin, lemon juice, club soda', img: '/images/tom-collins.png' }
    ]
  },
  {
    category: 'Wine & Beer',
    category_es: "- Vino y Cerveza -",
    items: [
      { name: 'Red Wine', img: '/images/red-wine.png' },
      { name: 'White Wine', img: '/images/white-wine.png' },
      { name: 'Sangria', img: '/images/sangria.png' },
      { name: 'Moscato', img: '/images/moscato.png' },
      { name: 'Prosecco', img: '/images/prosecco.png' },
      { name: 'Champagne', img: '/images/champagne.png' },
      { name: 'Lager Beer', img: '/images/lager-beer.png' },
      { name: 'Dark Beer', img: '/images/dark-beer.png' }
    ]
  },
  {
    category: 'Non-Alcoholic',
    category_es: "- Sin Alcohol -",
    items: [
      { sub_category: 'Mocktails for Kids', 
        sub_category_es: "- Cócteles para Niños -",
        items: [
          { name: 'Fruit Punch', ingr: 'Orange, pineapple, cranberry', desc: 'Ginger Ale, strawberry, Lime', img: '/images/fruit-punch.png' },
          { name: 'STR. Lemonade', ingr: 'Fresh strawberries', desc: 'Lemon Juice, sugar syrup', img: '/images/strawberry-lemonade.png' },
          { name: 'Shirlery Temple', ingr: 'Sprite or Ginger Ale', desc: 'Grenadine syrup, cherries', img: '/images/shirley-temple.png' },
          { name: 'Roy Rogers', ingr: 'Coca-Cola', desc: 'Grenadine syrup, cherries', img: '/images/roy-rogers.png' }
        ]
      },
      { sub_category: 'Juices & Sodas', 
        sub_category_es: "- Jugos y Gaseosas -",
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
          { name: 'Club Soda', img: '/images/.png' }
        ]
      }
    ]
  }
];

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


export default function Home() {
  const router = useRouter();
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      // Remove the hash without reload
      router.replace('/', undefined, { shallow: true });

      // Scroll after a short delay (allows DOM to settle)
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#ededed] p-6 text-[black] font-serif">
      <div className="max-w-6xl mx-auto">
        <div className="text-center flex flex-col sm:flex-row justify-center flex-wrap gap-x-2 mb-6 bg-gradient-to-r from-orange-400 via-pink-500 to-red-400 bg-clip-text text-transparent animate-pulse drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
          <h1 className="text-4xl sm:text-6xl font-bold mb-2">Feliz cumpleaños,</h1>
          <h1 className="text-5xl sm:text-6xl font-bold text-red-500">Mery Madrid!</h1>
        </div>

          <h1 className="">
          </h1>
        
        <h1 className="text-2xl sm:text-3xl font-bold mb-0 text-center">Drink Menu</h1>
        <h1 className="text-xl sm:text-2xl font-medium mb-4 text-center italic">- Menú de Bebidas -</h1>

        <div className="text-xs sm:text-sm font-semibold text-center mb-8 space-y-2">
          <div className="flex flex-col gap-1 max-w-md mx-auto">
            <a href="#artisan-specials" className="flex justify-between border px-4 py-2 rounded-xl hover:text-orange-500 bg-gradient-to-r from-orange-200 via-pink-300 to-red-300 active:scale-80">
              <span className="text-left">Artisan Specials</span>
              <span className="text-right">Especiales Artesanales</span>
            </a>
            <a href="#handcrafted-cocktails" className="flex justify-between border px-4 py-2 rounded-xl hover:text-orange-500 bg-gradient-to-r from-orange-200 via-pink-300 to-red-300 active:scale-80">
              <span className="text-left">Handcrafted Cocktails</span>
              <span className="text-right">Cócteles Hechos a Mano</span>
            </a>
            <a href="#fresh-&-fruity" className="flex justify-between border px-4 py-2 rounded-xl hover:text-orange-500 bg-gradient-to-r from-orange-200 via-pink-300 to-red-300 active:scale-80">
              <span className="text-left">Fresh & Fruity</span>
              <span className="text-right">Fresco y Afrutado</span>
            </a>
            <a href="#sparklings-&-refreshings" className="flex justify-between border px-4 py-2 rounded-xl hover:text-orange-500 bg-gradient-to-r from-orange-200 via-pink-300 to-red-300 active:scale-80">
              <span className="text-left">Sparklings & Refreshings</span>
              <span className="text-right">Espumosos y Refrescantes</span>
            </a>
            <a href="#wine-&-beer" className="flex justify-between border px-4 py-2 rounded-xl hover:text-orange-500 bg-gradient-to-r from-orange-200 via-pink-300 to-red-300 active:scale-80">
              <span className="text-left">Wine & Beer</span>
              <span className="text-right">Vino y Cerveza</span>
            </a>
            <a href="#non-alcoholic" className="flex justify-between border px-4 py-2 rounded-xl hover:text-orange-500 bg-gradient-to-r from-orange-200 via-pink-300 to-red-300 active:scale-80">
              <span className="text-left">Mocktails for Kids</span>
              <span className="text-right">Cócteles para Niños</span>
            </a>
            <a href="#non-alcoholic" className="flex justify-between border px-4 py-2 rounded-xl hover:text-orange-500 bg-gradient-to-r from-orange-200 via-pink-300 to-red-300 active:scale-80">
              <span className="text-left">Juices & Sodas</span>
              <span className="text-right">Jugos y Gaseosas</span>
            </a>
          </div>
        </div>

        {cocktails.map((section) => (
          <div key={section.category} id={section.category.toLowerCase().replace(/\s+/g, '-')} className="mb-12 text-center">
            <hr className="w-[75%] mx-auto my-2 border-t-1 border-gray-500" />
            <h2 className="text-lg sm:text-xl font-semibold mb-0">{section.category}</h2>
            <h2 className="text-base sm:text-lg font-medium mb-4 italic">{section.category_es}</h2>

            {section.items[0]?.sub_category ? (
              section.items.map((group) => (
                <div key={group.sub_category} className="mb-6">
                  <h3 className="text-sm sm:text-base font-medium mt-8">{group.sub_category}</h3>
                  <h3 className="text-xs sm:text-sm font-normal mb-4 italic">{group.sub_category_es}</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {group.items.map((drink, index) => (
                      <div key={`${drink.name}-${index}`} className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition">
                        {/* ✅ Only show image if it's the "Mocktails for Kids" group */}
                        {section.category === 'Non-Alcoholic' && group.sub_category === 'Mocktails for Kids' && (
                          <img src={drink.img} alt={drink.name} className="w-full aspect-square object-cover" />
                        )}
                        <div className="p-2">
                          <h4 className="text-base sm:text-lg font-medium">{drink.name}</h4>
                          {!['Juices & Sodas'].includes(group.sub_category) && (
                            <hr className="w-18 mx-auto my-2 border-t-1 border-gray-500" />
                          )}
                          <p className="text-[10px] sm:text-[11px] text-gray-500">{drink.ingr}</p>
                          <p className="text-[10px] sm:text-[11px] text-gray-500">{drink.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (

              // Normal section with flat items
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {section.items.map((drink) => (
                  <div
                    key={drink.name}
                    className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition"
                  >
                    {/* Show image only if not Non-Alcoholic */}
                    {!['Non-Alcoholic'].includes(section.category) && (
                      <img src={drink.img} alt={drink.name} className="w-full aspect-square object-cover" />
                    )}
                    <div className="p-2">
                      <h4 className="text-base sm:text-lg font-medium">{drink.name}</h4>
                      {/* Show line only if not Wine & Beer */}
                      {!['Wine & Beer'].includes(section.category) && (
                        <hr className="w-18 mx-auto my-2 border-t-1 border-gray-500" />
                      )}
                      <p className="text-[10px] sm:text-[11px] text-gray-500">{drink.ingr}</p>
                      <p className="text-[10px] sm:text-[11px] text-gray-500">{drink.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Footer goes here, INSIDE the return block */}
      <footer className="text-black text-center text-sm py-2 mt-18">
        © {new Date().getFullYear()} Kien Chung. All rights reserved.
      </footer>
      
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-15 right-6 bg-orange-500 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 active:scale-80 ${
          showScroll ? 'opacity-85' : 'opacity-0 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        Back to top ↑
      </button>
    </div>
  );
}