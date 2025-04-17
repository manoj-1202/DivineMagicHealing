// import React from 'react';
// import { useParams } from 'react-router-dom';

// const products = [
//   {
//     id: 1,
//     name: 'Reiki Healing Crystal',
//     description: 'A powerful crystal infused with Reiki energy for daily balance.',
//     image: '/images/crystal1.jpg',
//     price: '₹499',
//   },
//   {
//     id: 2,
//     name: 'Aura Cleansing Spray',
//     description: 'Natural essential oil blend to refresh your aura and space.',
//     image: '/images/spray.jpg',
//     price: '₹299',
//   },
//   {
//     id: 3,
//     name: 'Chakra Balancing Bracelet',
//     description: 'Handcrafted with natural stones aligned to all 7 chakras.',
//     image: '/images/bracelet.jpg',
//     price: '₹399',
//   },
//   // Add more...
// ];

// const ProductsData = () => {
//   const { id } = useParams();
//   const product = products.find((item) => item.id.toString() === id);

//   if (!product) {
//     return <div className="text-center text-red-500 mt-10">Product not found</div>;
//   }

//   return (
//     <div className="w-full py-12 bg-white border-t">
//       <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
//         <img src={product.image} alt={product.name} className="w-full md:w-1/2 rounded-xl shadow-md" />
//         <div className="flex-1">
//           <h2 className="text-3xl sm:text-4xl font-bold mb-4">{product.name}</h2>
//           <p className="text-gray-700 text-lg mb-6">{product.description}</p>
//           <div className="text-2xl font-semibold text-green-600 mb-4">{product.price}</div>
//           <button className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition duration-300">
//             Proceed to Buy
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductsData


export const products = [
  {
    id: 1,
    name: 'Reiki Healing Crystal',
    description: 'A powerful crystal infused with Reiki energy for daily balance.',
    image: '/images/crystal1.jpg',
    price: '₹499',
  },
  {
    id: 2,
    name: 'Aura Cleansing Spray',
    description: 'Natural essential oil blend to refresh your aura and space.',
    image: '/images/spray.jpg',
    price: '₹299',
  },
  {
    id: 3,
    name: 'Chakra Balancing Bracelet',
    description: 'Handcrafted with natural stones aligned to all 7 chakras.',
    image: '/images/bracelet.jpg',
    price: '₹399',
  },
];