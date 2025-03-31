import ButtonBase from '@/components/button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NextCommerce | Nextjs E-commerce template',
  description: 'This is Home for NextCommerce Template'
  // other metadata
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20">
      <div className=" flex gap-10">
        <ButtonBase
          iconLeft={{ src: '/images/shopping-card-add_primary.png', alt: 'shopping-card-add' }}
        >
          Thêm vào giỏ
        </ButtonBase>
        <ButtonBase
          variant="secondary"
          iconLeft={{ src: '/images/shopping-card-add_secondary.png', alt: 'shopping-card-add' }}
        >
          Thêm vào giỏ
        </ButtonBase>
        <ButtonBase variant="whiteGhost">Thêm vào giỏ</ButtonBase>
        <ButtonBase
          iconLeft={{ src: '/images/shopping-card-add_primary.png', alt: 'shopping-card-add' }}
        />
        <ButtonBase
          variant="secondary"
          iconLeft={{ src: '/images/shopping-card-add_secondary.png', alt: 'shopping-card-add' }}
        />
      </div>
      <div className="flex gap-10">
        {/* <ProductCard
          sold={712}
          quantity={1000}
          name="Xịt Hold On Tăng cường Sinh lý nam "
          discount={29}
          isNew
          startPrice={2850000}
          endPrice={5350000}
          rating={4.5}
          rateCount={3176}
          image="https://feelex.vn/wp-content/uploads/2024/03/xit-keo-dai-XY-Value-Hold-on.jpg"
          hoverImage="https://feelex.vn/wp-content/uploads/2024/10/Bao-cao-su-rau-rong.jpg"
          href="https://www.facebook.com/"
        /> */}
      </div>
    </div>
  );
}
