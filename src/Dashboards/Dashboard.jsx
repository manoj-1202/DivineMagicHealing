import OrdersSection from './OrdersSection';
import CustomersSection from './CustomersSection';
import ProductsSection from './ProductsSection';

const Dashboard = () => {
  return (
    <div className="space-y-6">
    
      <OrdersSection />
      <CustomersSection />
      <ProductsSection />
    </div>
  );
};
