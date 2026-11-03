import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/common/Container";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Breadcrumb from "../components/product/BreadCumb";
import ProductGallery from "../components/product/ProductGallery";
import ProductInfo from "../components/product/ProductInfo";
import ProductDetails from "../components/product/ProductDetails";
import SpecsTable from "../components/product/SpecsTable";
import NotFoundPage from "./NotFoundPage";
import { getProductBySlug } from "../data/products";
import QuoteForm from "../components/product/QuoteForm";
import MobileQuoteBar from "../components/product/MobileQuotebar";

export default function ProductDetailPage() {
  // Reads the last part of the link: /product/dough-divider gives slug = "dough-divider"
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  // Shows the machine name in the browser tab
  useEffect(() => {
    if (product) document.title = `${product.name} | Your Company`;
  }, [product]);

  // No machine with this slug: show the Not Found page
  if (!product) return <NotFoundPage />;

  // Use the photo list if the machine has one, otherwise its card photo
  const images =
    product.images && product.images.length > 0
      ? product.images
      : product.image
      ? [product.image]
      : [];

  const hasDetails =
    Boolean(product.description) || (product.features && product.features.length > 0);
  const hasSpecs = product.specs && product.specs.length > 0;

  return (
    <>
      <Navbar />
      <main className="bg-white">
        <Container className="py-5 sm:py-8 lg:py-10">
         

          {/* Photo on the left, details on the right. On phones: photo first, then details. */}
          <div className="mt-5 grid gap-6 sm:mt-8 lg:grid-cols-2 lg:gap-12">
          <ProductGallery
  key={product.slug}
  images={images}
  video={product.video}
  videoPoster={product.videoPoster}
  videoRatio={product.videoRatio}
  name={product.name}
/>
            <ProductInfo product={product} />
          </div>

          {/* Description and features on the left, specifications on the right */}
          {(hasDetails || hasSpecs) && (
            <div className="mt-10 grid gap-8 border-t border-border pt-8 lg:mt-14 lg:grid-cols-5 lg:gap-12 lg:pt-12">
              {hasDetails && (
                <div className={hasSpecs ? "lg:col-span-3" : "lg:col-span-5"}>
                  <ProductDetails description={product.description} features={product.features} />
                </div>
              )}
              {hasSpecs && (
                <div className={hasDetails ? "lg:col-span-2" : "lg:col-span-5"}>
                  <SpecsTable specs={product.specs} />
                </div>
              )}
            </div>
          )}

       <QuoteForm key={product.slug} product={product} />
          {/* Part 5: related machines go here */}
        </Container>
      </main>
    <Footer />
<MobileQuoteBar name={product.name} />

    </>
  );
}