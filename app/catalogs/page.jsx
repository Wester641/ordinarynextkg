import ProductCurrectData from "@/components/productsCards/ProductCurrectData";
import ProductsCardsCustom from "@/components/productsCards/ProductCardsCustom";
import PromoSection from "@/components/promoSection/PromoSection";
const CatalogPage = () => {
  return (
    <div>
      <PromoSection title="Каталог" />
      <ProductCurrectData />
    </div>
  );
};

export default CatalogPage;
