import ProductCurrectData from "@/components/productsCards/ProductCurrectData";
import BreadCrumbs from "@/components/featers/breadCrumbs/BreadCrumbs";
import ProductsCardsCustom from "@/components/productsCards/ProductCardsCustom";
import PromoSection from "@/components/promoSection/PromoSection";
const CatalogPage = () => {
  return (
    <div>
      <BreadCrumbs />
      <PromoSection title="Каталог" />
      <ProductCurrectData />
    </div>
  );
};

export default CatalogPage;
