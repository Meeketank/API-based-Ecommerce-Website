
import { ProductCard } from './components/ProductCard';

function additemtocart() {

  }

  function showproductdescription() {
    alert(setData.description)
  }


const Product = ({ data, showproductdescription, additemtocart }) => {
  return (
    <div className="Product_List">
      {
        data.length > 0 ? (
          data.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              showproductdescription={() => showproductdescription(item.description)}
              additemtocart={additemtocart}
            />
          ))
        ) : (<p>Loading...</p>)
      }
    </div>
  );
};

export {Product}