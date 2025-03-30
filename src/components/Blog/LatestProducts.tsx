import { Product } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';

const LatestProducts = ({ products }: { products: Product[] }) => {
  return (
    <div className="mt-7.5 rounded-xl bg-white shadow-1">
      <div className="border-b border-gray-3 px-4 py-4.5 sm:px-6">
        <h2 className="text-lg font-medium text-dark">Latest Products</h2>
      </div>

      <div className="p-4 sm:p-6">
        <div className="flex flex-col gap-6">
          {/* <!-- product item --> */}
          {products.slice(0, 3).map((product, key) => (
            <div className="flex items-center gap-6" key={key}>
              <div className="flex h-22.5 w-full max-w-[90px] items-center justify-center rounded-[10px] bg-gray-3">
                <Image
                  src={product.imgs?.thumbnails?.[0] || ''}
                  alt="product"
                  width={74}
                  height={74}
                />
              </div>

              <div>
                <h3 className="mb-1 font-medium text-dark duration-200 ease-out hover:text-blue">
                  <Link href="/shop-details"> {product.title} </Link>
                </h3>
                <p className="text-custom-sm">Price: ${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;
