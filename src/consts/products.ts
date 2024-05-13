// products.ts

export interface Product {
    name: string;
    category: string;
    description: string;
    price: number;
    image: string;
  }
  
  const products: Product[] = [
    {
      name: "Ensalada César",
      category: "entradas",
      description: "Deliciosa ensalada César con pollo a la parrilla, crutones y aderezo.",
      price: 12.99,
      image: "/img/special/coctel.png"
    },
    {
      name: "Filete de salmón",
      category: "cocteles",
      description: "Filete de salmón fresco a la parrilla con vegetales al vapor.",
      price: 18.99,
      image: "/img/special/coctel.png"
    },
    {
      name: "Pastel de chocolate",
      category: "cocteles",
      description: "Pastel de chocolate caliente con helado de vainilla.",
      price: 6.99,
      image: "/img/special/coctel.png"
    }
    // Agrega más productos según sea necesario
  ];
  


  export default products;
  