// products.ts

export interface Product {
  label: { es: string; en: string; fr: string};
  name: string;
  category: { es: string; en: string; fr: string};
  description: { es: string; en: string; fr: string};
  price: number;
  image: string;
}
  
  const products: Product[] = [
    {
      label: {es:"Hamburguesas",en:"Burgers",fr:"Burgers"},
      name: "Jackpot Jalapeño Burger",
      category: {es:"hamburguesas", en:"burgers", fr:"burgers"},
      description: {es:"Una hamburguesa picante con queso pepper jack, jalapeños en rodajas y una salsa especial de chipotle", en:"A spicy burger with pepper jack cheese, sliced jalapeños, and a special chipotle sauce", fr:"Un burger épicé avec du fromage pepper jack, des jalapeños tranchés et une sauce chipotle spéciale"},
      price: 3500,
      image: "/img/special/coctel.png"
    },
    {
      label: {es:"Hamburguesas",en:"Burgers",fr:"Burgers"},
      name: "High Roller Hawaiian Burger", 
      category: {es:"hamburguesas", en:"burgers", fr:"burgers"},
      description: {es:"Una deliciosa combinación de jamón, piña a la parrilla, queso provolone y salsa teriyaki.", en:"A delicious combination of ham, grilled pineapple, provolone cheese, and teriyaki sauce.", fr:"Une délicieuse combinaison de jambon, ananas grillé, fromage provolone et sauce teriyaki."},
      price: 3800,
      image: "/img/special/coctel.png"
    },
    {
      label: {es:"Hamburguesas",en:"Burgers",fr:"Burgers"},
      name: "The Strip Steakhouse Burger",
      category: {es:"hamburguesas", en:"burgers", fr:"burgers"},
      description: {es:"Una hamburguesa gourmet con queso azul, cebolla crujiente, y una reducción de vino tinto.", en:"A gourmet burger with blue cheese, crispy onions, and a red wine reduction.", fr:"Un burger gourmet avec du fromage bleu, des oignons croustillants et une réduction de vin rouge."},
      price: 4400,
      image: "/img/special/coctel.png"
    },
    {
      label: {es:"Hamburguesas",en:"Burgers",fr:"Burgers"},
      name: "Lucky 7 BBQ Burger",
      category: {es:"hamburguesas", en:"burgers", fr:"burgers"},
      description: {es:"Una hamburguesa de cerdo desmenuzado con salsa barbacoa casera, aros de cebolla y pepinillos.", en:"A pulled pork burger with homemade BBQ sauce, onion rings, and pickles.", fr:"Un burger de porc effiloché avec sauce BBQ maison, rondelles d'oignon et cornichons."},
      price: 3500,
      image: "/img/special/coctel.png"
    },
    {
      label: {es:"Hamburguesas",en:"Burgers",fr:"Burgers"},
      name: "Vegas Vic Volcano Burger",
      category: {es:"hamburguesas", en:"burgers", fr:"burgers"},
      description: {es:"Una hamburguesa explosiva con chili con carne, queso nacho fundido y jalapeños encurtidos", en:"An explosive burger with chili con carne, melted nacho cheese, and pickled jalapeños", fr:"Un burger explosif avec chili con carne, fromage nacho fondu et jalapeños marinés"},
      price: 3700,
      image: "/img/special/coctel.png"
    },
    {
      label: {es:"Platillos fuertes", en:"Main dishes", fr:"Plats principaux"},
      name: "Blackjack Mac & Cheese",
      category: {es:"entradas", en:"appetizers", fr:"entrées"},
      description: {es:"Macarrones con queso horneados con una mezcla de quesos gourmet y cubiertos con migajas de pan crujientes.", en:"Macaroni and cheese baked with a blend of gourmet cheeses and topped with crispy bread crumbs.", fr:"Macaroni au fromage cuit au four avec un mélange de fromages gourmet et garni de chapelure croustillante."},
      price: 400,
      image: "/img/special/coctel.png"
    },
    {
      label: {es:"Platillos fuertes", en:"Main dishes", fr:"Plats principaux"},
      name: "Lucky Seven Seafood Paella",
      category: {es:"entradas", en:"appetizers", fr:"entrées"},
      description: {es:"Una paella española abundante con camarones, mejillones, calamares y chorizo, cocinados con azafrán y guisantes.", en:"A hearty Spanish paella with shrimp, mussels, calamari, and chorizo, cooked with saffron and peas.", fr:"Une paella espagnole copieuse avec des crevettes, des moules, des calmars et du chorizo, cuite avec du safran et des petits pois."},
      price: 100,
      image: "/img/special/coctel.png"
    },
    {
      label: {es:"Platillos fuertes", en:"Main dishes", fr:"Plats principaux"},
      name: "Sin City Bourbon Glazed Salmon",
      category: {es:"entradas", en:"appetizers", fr:"entrées"},
      description: {es:"Filete de salmón a la parrilla con glaseado de bourbon y miel, acompañado de puré de coliflor y espárragos asados", en:"Grilled salmon fillet with bourbon and honey glaze, served with cauliflower puree and roasted asparagus", fr:"Filet de saumon grillé avec glaçage au bourbon et au miel, servi avec purée de chou-fleur et asperges rôties"},
      price: 300,
      image: "/img/special/coctel.png"
    },
    {
      label: {es:"Platillos fuertes", en:"Main dishes", fr:"Plats principaux"},
      name: "High Roller Ribeye Steak",
      category: {es:"entradas", en:"appetizers", fr:"entrées"},
      description: {es:"Un jugoso filete ribeye a la parrilla con una salsa de vino tinto y hierbas, acompañado de papas al gratén y espárragos grillados", en:"A juicy grilled ribeye steak with a red wine and herb sauce, served with scalloped potatoes and grilled asparagus", fr:"Un juteux steak de côte de bœuf grillé avec une sauce au vin rouge et aux herbes, servi avec des pommes de terre gratinées et des asperges grillées"},
      price: 200,
      image: "/img/special/coctel.png"
    },
    {
      label: {es:"Pastas", en:"Pastas", fr:"Pâtes"},
      name: "Penne al Póker Picante",
      category: {es:"pastas", en:"pastas", fr:"pâtes"},
      description: {es:"Penne cocidos al dente y mezclados con una salsa de tomate picante, salchichas italianas y pimientos, para dar un toque de emoción como en una partida de póker.", en:"Penne cooked al dente and mixed with a spicy tomato sauce, Italian sausage, and peppers, to add a touch of excitement like in a poker game.", fr:"Penne cuits al dente et mélangés avec une sauce tomate épicée, de la saucisse italienne et des poivrons, pour ajouter une touche d'excitation comme dans une partie de poker."},
      price: 400,
      image: "/img/special/coctel.png"
    },
    {
      label: {es:"Pastas", en:"Pastas", fr:"Pâtes"},
      name: "Rigatoni de Ruleta Rusa",
      category: {es:"pastas", en:"pastas", fr:"pâtes"},
      description: {es:"Rigatoni servidos con una salsa cremosa de vodka y tomate, con trozos de panceta crujiente para añadir un toque de riesgo", en:"Rigatoni served with a creamy vodka and tomato sauce, with crispy bacon pieces to add a touch of risk", fr:"Rigatoni servis avec une sauce crémeuse à la vodka et à la tomate, avec des morceaux de bacon croustillant pour ajouter une touche de risque"},
      price: 300,
      image: "/img/special/coctel.png"
    },
    {
      label: {es:"Pastas", en:"Pastas", fr:"Pâtes"},
      name: "Fettuccine del Flop Florentino",
      category: {es:"pastas", en:"pastas", fr:"pâtes"},
      description: {es:"Fettuccine cubiertos con una salsa de espinacas y queso parmesano, inspirados en el flop en una mesa de póker.", en:"Fettuccine covered with a spinach and parmesan cheese sauce, inspired by the flop on a poker table.", fr:"Fettuccine couverts d'une sauce aux épinards et au fromage parmesan, inspirés par le flop sur une table de poker."},
      price: 200,
      image: "/img/special/coctel.png"
    },
    {
      label: {es:"Pastas", en:"Pastas", fr:"Pâtes"},
      name: "Linguine del Lujo del Lago",
      category: {es:"pastas", en:"pastas", fr:"pâtes"},
      description: {es:" Linguine con una cremosa salsa de gambas y vieiras, evocando la elegancia de los casinos de alta gama situados junto a lagos.", en:"Linguine with a creamy shrimp and scallop sauce, evoking the elegance of high-end casinos located next to lakes.", fr:"Linguine avec une sauce crémeuse aux crevettes et aux pétoncles, évoquant l'élégance des casinos haut de gamme situés à côté des lacs."},
      price: 200,
      image: "/img/special/coctel.png"
    },
    {
      label: {es:"Pastas", en:"Pastas", fr:"Pâtes"},
      name: "Spaghetti del Straight Flush",
      category: {es:"pastas", en:"pastas", fr:"pâtes"},
      description: {es:"Spaghetti con una salsa de almejas y vino blanco, evocando la sensación de estar en la cima con una escalera real en la mano.", en:"Spaghetti with a clam and white wine sauce, evoking the feeling of being on top with a royal flush in hand.", fr:"Spaghetti avec une sauce aux palourdes et au vin blanc, évoquant le sentiment d'être au sommet avec une quinte flush royale en main."},
      price: 200,
      image: "/img/special/coctel.png"
    },
    {
      label: {es:"Pastas", en:"Pastas", fr:"Pâtes"},
      name: "Tortellini de Tesoro Italiano",
      category: {es:"pastas", en:"pastas", fr:"pâtes"},
      description: {es:"Tortellini rellenos de queso ricotta y espinacas, bañados en una salsa de tomate casera, como un tesoro escondido en la mesa de un casino italiano.", en:"Tortellini filled with ricotta cheese and spinach, bathed in a homemade tomato sauce, like a treasure hidden on the table of an Italian casino.", fr:"Tortellini farcis au fromage ricotta et aux épinards, baignés dans une sauce tomate maison, comme un trésor caché sur la table d'un casino italien."},
      price: 200,
      image: "/img/special/coctel.png"
    },
    {
      label: {es:"Cócteles", en:"Cocktails", fr:"Cocktails"},
      name: "Cravings",
      category: {es:"cocteles", en:"cocktails", fr:"cocktails"},
      description: {es:"Vodka 42 Below, fernet Branca, licor de durazno y jugo de limón", en:"Vodka 42 Below, fernet Branca, peach liqueur, and lemon juice", fr:"Vodka 42 Below, fernet Branca, liqueur de pêche et jus de citron"},
      price: 400,
      image: "/img/special/coctel.png"
    },
    {
      label: {es:"Cócteles", en:"Cocktails", fr:"Cocktails"},
      name: "Rising Sun",
      category: {es:"cocteles", en:"cocktails", fr:"cocktails"},
      description: {es:"El aperitivo perfecto Aperol, jugo de limón, bíteres de naranja y azúcar", en:"The perfect aperitif Aperol, lemon juice, orange bitters, and sugar", fr:"L'apéritif parfait Aperol, jus de citron, bitters d'orange et sucre"},
      price: 100,
      image: "/img/special/coctel.png"
    },
    {
      label: {es:"Cócteles", en:"Cocktails", fr:"Cocktails"},
      name: "Violet Rain",
      category: {es:"cocteles", en:"cocktails", fr:"cocktails"},
      description: {es:"La bebida antes conocida como Contempo Cointreau", en:"The drink formerly known as Contempo Cointreau", fr:"La boisson autrefois connue sous le nom de Contempo Cointreau"},
      price: 300,
      image: "/img/special/coctel.png"
    },
    {
      label: {es:"Cócteles", en:"Cocktails", fr:"Cocktails"},
      name: "Prosecco Paraiso",
      category: {es:"cocteles", en:"cocktails", fr:"cocktails"},
      description: {es:"Una probadita del paraíso. Lichi y licor de granada", en:"A taste of paradise. Lychee and pomegranate liqueur", fr:"Un avant-goût du paradis. Litchi et liqueur de grenade"},
      price: 200,
      image: "/img/special/coctel.png"
    },
    {
      label: {es:"Cócteles", en:"Cocktails", fr:"Cocktails"},
      name: "Temptation",
      category: {es:"cocteles", en:"cocktails", fr:"cocktails"},
      description: {es:"Manzanas frescas, burbon Maker's, Applejack y durazno", en:"Fresh apples, Maker's bourbon, Applejack, and peach", fr:"Pommes fraîches, bourbon Maker's, Applejack et pêche"},
      price: 200,
      image: "/img/special/coctel.png"
    },
    {
      label: {es:"Cócteles", en:"Cocktails", fr:"Cocktails"},
      name: "Jasmine Abode",
      category: {es:"cocteles", en:"cocktails", fr:"cocktails"},
      description: {es:"Ginebra South Gin, té de jazmín, Lillet Blanc, bénédictine con lichi", en:"South Ginebra Gin, jasmine tea, Lillet Blanc, Benedictine with lychee", fr:"Ginebra South Gin, thé au jasmin, Lillet Blanc, bénédictine avec litchi"},
      price: 300,
      image: "/img/special/coctel.png"
    },
    {
      label: {es:"Postres", en:"Desserts", fr:"Desserts"},
      name: "Dados de Chocolate ",
      category: {es:"postres", en:"desserts", fr:"desserts"},
      description: {es:"Brownies en forma de dados decorados con puntos blancos de glaseado de chocolate.", en:"Brownies shaped like dice decorated with white chocolate icing dots.", fr:"Brownies en forme de dés décorés de points de glaçage au chocolat blanc."},
      price: 400,
      image: "/img/special/coctel.png"
    },
    {
      label: {es:"Postres", en:"Desserts", fr:"Desserts"},
      name: "Ruleta de Fresas ",
      category: {es:"postres", en:"desserts", fr:"desserts"},
      description: {es:"Una tarta de fresas con forma de ruleta, con rodajas de fresas dispuestas alrededor del borde para simular los números.", en:"A strawberry tart shaped like a roulette wheel, with strawberry slices arranged around the edge to simulate the numbers.", fr:"Une tarte aux fraises en forme de roue de roulette, avec des tranches de fraises disposées autour du bord pour simuler les numéros."},
      price: 100,
      image: "/img/special/coctel.png"
    },
    {
      label: {es:"Postres", en:"Desserts", fr:"Desserts"},
      name: "Tarta Royal Flush de Frambuesa",
      category: {es:"postres", en:"desserts", fr:"desserts"},
      description: {es:"Una tarta de frambuesa con capas de crema y glaseado de frambuesa en la parte superior para representar un flush real.", en:"A raspberry tart with layers of cream and raspberry icing on top to represent a royal flush.", fr:"Une tarte aux framboises avec des couches de crème et de glaçage aux framboises sur le dessus pour représenter une quinte flush royale."},
      price: 300,
      image: "/img/special/coctel.png"
    },
    {
      label: {es:"Postres", en:"Desserts", fr:"Desserts"},
      name: "Jackpot de Chocolate y Caramelo",
      category: {es:"postres", en:"desserts", fr:"desserts"},
      description: {es:"Un pastel de chocolate decadente con un centro de caramelo líquido que se vierte como un jackpot al cortarlo.", en:"A decadent chocolate cake with a liquid caramel center that pours out like a jackpot when cut.", fr:"Un gâteau au chocolat décadent avec un centre de caramel liquide qui se verse comme un jackpot lorsqu'il est coupé."},
      price: 200,
      image: "/img/special/coctel.png"
    },
    {
      label: {es:"Postres", en:"Desserts", fr:"Desserts"},
      name: "Tréboles de la Suerte de Menta",
      category: {es:"postres", en:"desserts", fr:"desserts"},
      description: {es:"Trufas de chocolate con sabor a menta cubiertas de polvo de cacao y decoradas con un trébol de azúcar verde.", en:"Mint-flavored chocolate truffles covered in cocoa powder and decorated with a green sugar shamrock.", fr:"Truffes au chocolat à la menthe couvertes de poudre de cacao et décorées d'un trèfle en sucre vert."},
      price: 200,
      image: "/img/special/coctel.png"
    },
    {
      label: {es:"Postres", en:"Desserts", fr:"Desserts"},
      name: "Montaña de Premios de Helado",
      category: {es:"postres", en:"desserts", fr:"desserts"},
      description: {es:"Una gran copa de helado con una variedad de toppings como nueces, chocolate rallado, salsa de caramelo y cerezas en la cima, simulando una montaña de premios.", en:"A large sundae with a variety of toppings like nuts, grated chocolate, caramel sauce, and cherries on top, simulating a mountain of prizes.", fr:"Un grand sundae avec une variété de garnitures comme des noix, du chocolat râpé, de la sauce caramel et des cerises sur le dessus, simulant une montagne de prix."},
      price: 200,
      image: "/img/special/coctel.png"
    },
    {
      label: {es:"Menú de niños", en:"Kids Menu", fr:"Menu Enfants"},
      name: "Pizzas Baraja",
      category: {es:"niños", en:"kids", fr:"enfants"},
      description: {es:"Prepara mini pizzas en forma de cartas de póker usando masa de pizza y cortadores de galletas en forma de corazones, diamantes, picas y tréboles. ", en:"Make mini pizzas in the shape of poker cards using pizza dough and cookie cutters in the shape of hearts, diamonds, spades, and clubs.", fr:"Faites des mini pizzas en forme de cartes de poker en utilisant de la pâte à pizza et des emporte-pièces en forme de cœurs, de carreaux, de piques et de trèfles."},
      price: 400,
      image: "/img/special/coctel.png"
    },
    {
      label: {es:"Menú de niños", en:"Kids Menu", fr:"Menu Enfants"},
      name: "Ruleta de Mini hamburguesas",
      category: {es:"niños", en:"kids", fr:"enfants"},
      description: {es:"Mini hamburguesas en una bandeja giratoria para recrear la emoción de la ruleta. ", en:"Mini burgers on a rotating tray to recreate the excitement of roulette.", fr:"Mini burgers sur un plateau tournant pour recréer l'excitation de la roulette."},
      price: 100,
      image: "/img/special/coctel.png"
    },
    {
      label: {es:"Menú de niños", en:"Kids Menu", fr:"Menu Enfants"},
      name: "Hot Dogs Dados",
      category: {es:"niños", en:"kids", fr:"enfants"},
      description: {es:"Prepara hot dogs en miniatura y córtalos en trozos pequeños para que parezcan dados. ", en:"Make mini hot dogs and cut them into small pieces to make them look like dice.", fr:"Faites des mini hot dogs et coupez-les en petits morceaux pour qu'ils ressemblent à des dés."},
      price: 300,
      image: "/img/special/coctel.png"
    },
    {
      label: {es:"Menú de niños", en:"Kids Menu", fr:"Menu Enfants"},
      name: "Nuggets de Oro",
      category: {es:"niños", en:"kids", fr:"enfants"},
      description: {es:"Nuggets de pollo o pescado, servidos en platos decorados con brillantina dorada para simular el lujo de ganar en el casino", en:"Chicken or fish nuggets, served on plates decorated with gold glitter to simulate the luxury of winning at the casino", fr:"Nuggets de poulet ou de poisson, servis sur des assiettes décorées de paillettes dorées pour simuler le luxe de gagner au casino"},
      price: 200,
      image: "/img/special/coctel.png"
    },
    {
      label: {es:"Menú de niños", en:"Kids Menu", fr:"Menu Enfants"},
      name: "Palitos de Queso Jackpot",
      category: {es:"niños", en:"kids", fr:"enfants"},
      description: {es:"Palitos de queso caseros o comprados en tienda y sírvelos en un plato con forma de dados. Los niños pueden disfrutar sumergiéndolos en salsa marinara o salsa de queso.", en:"Homemade or store-bought cheese sticks and serve them on a dice-shaped plate. Kids can enjoy dipping them in marinara sauce or cheese sauce.", fr:"Bâtonnets de fromage faits maison ou achetés en magasin et servis sur une assiette en forme de dé. Les enfants peuvent les tremper dans de la sauce marinara ou de la sauce au fromage."},
      price: 200,
      image: "/img/special/coctel.png"
    },
    {
      label: {es:"Acompañamientos", en:"Sides", fr:"Accompagnements"},
      name: "Ruleta Rusa de Salsas Picantes",
      category: {es:"acompañamientos", en:"sides", fr:"accompagnements"},
      description: {es:"Macarrones con queso horneados con una mezcla de quesos gourmet y cubiertos con migajas de pan crujientes.", en:"Macaroni and cheese baked with a blend of gourmet cheeses and topped with crispy bread crumbs.", fr:"Macaroni au fromage cuit au four avec un mélange de fromages gourmet et garni de chapelure croustillante."},
      price: 400,
      image: "/img/special/coctel.png"
    },
    {
      label: {es:"Acompañamientos", en:"Sides", fr:"Accompagnements"},
      name: "Aros de oro",
      category: {es:"acompañamientos", en:"sides", fr:"accompagnements"},
      description: {es:"Aros de cebolla dorados y crujientes que le dan un toque especial a tu comida.", en:"Golden and crispy onion rings that add a special touch to your meal.", fr:"Des rondelles d'oignon dorées et croustillantes qui ajoutent une touche spéciale à votre repas."},
      price: 100,
      image: "/img/special/coctel.png"
    },
    {
      label: {es:"Acompañamientos", en:"Sides", fr:"Accompagnements"},
      name: "Full House de Salchipapas",
      category: {es:"acompañamientos", en:"sides", fr:"accompagnements"},
      description: {es:"Una combinación ganadora de papas fritas y salchichas, con una selección de salsas variadas para acompañar", en:"A winning combination of French fries and sausages, with a selection of various sauces to accompany", fr:"Une combinaison gagnante de frites et de saucisses, avec une sélection de différentes sauces pour accompagner"},
      price: 300,
      image: "/img/special/coctel.png"
    },
    {
      label: {es:"Acompañamientos", en:"Sides", fr:"Accompagnements"},
      name: "Verde Vegas",
      category: {es:"acompañamientos", en:"sides", fr:"accompagnements"},
      description: {es:"Una ensalada vibrante con ingredientes frescos y coloridos, como hojas verdes, tomates cherry, pepino, queso y mango. ", en:"A vibrant salad with fresh and colorful ingredients, like green leaves, cherry tomatoes, cucumber, cheese, and mango.", fr:"Une salade vibrante avec des ingrédients frais et colorés, comme des feuilles vertes, des tomates cerises, du concombre, du fromage et de la mangue."},
      price: 200,
      image: "/img/special/coctel.png"
    },

    
    
  ];
  


  export default products;
  