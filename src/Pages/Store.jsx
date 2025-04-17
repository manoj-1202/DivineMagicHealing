import { products } from "../Data/StoreData";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Store = () => {
  return (
    <div className="w-full py-12 bg-gray-50 border-t font-title">
      

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-center text-black text-3xl sm:text-3xl lg:text-3xl font-semibold mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Energy Products Store
        </motion.h2>

        {/* Back button */}
                <div className="w-full px-4 sm:px-6 lg:px-8 mb-4">
                  <h3 className="text-center sm:text-left text-black text-base sm:text-lg font-medium">
                    <Link
                      to="/"
                      className="hover:underline hover:text-gray-500 transition-colors duration-200"
                    >
                      Home
                    </Link>
                    <span className="mx-2">|</span>
                    <span className="text-gray-500">Store</span>
                  </h3>
                </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {products.map((product) => (
              <motion.div
                key={product.id}
                className="bg-gray-200 p-4  text-black  rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl sm:text-3xl md:text-base font-semibold mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <div className="text-lg font-bold text-green-600 mb-4">
                  {product.price}
                </div>
                <Link to={`/Product/${product.id}`}>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-600 transition-colors duration-300">
                    Buy Now
                  </button>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Store;
