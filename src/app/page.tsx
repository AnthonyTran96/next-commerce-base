import ButtonBase from '@/components/button';
import I18nMessage from '@/components/locales/i18-text';
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
        <I18nMessage id="coming-soon" />
      </div>
    </div>
  );
}
