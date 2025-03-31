import Image from 'next/image';
import Link from 'next/link';

interface Props {
  name: string;
  rating: number;
  rateCount: number;
  startPrice: number;
  endPrice: number;
  quantity: number;
  sold: number;
  isNew: boolean;
  discount?: number;
  image: string;
  hoverImage: string;
  currency?: string;
  href: string;
}

const ProductCard = (props: Props) => {
  const {
    name,
    rating,
    rateCount,
    startPrice,
    endPrice,
    quantity,
    sold,
    isNew,
    discount,
    image,
    hoverImage,
    currency = 'VND',
    href
  } = props;
  return (
    <Link
      href={href}
      className="flex min-w-[270px] flex-col gap-8 rounded-radius-m border-weight-s border-grey-700 p-6 transition-all duration-200 hover:-translate-y-8"
    >
      <Image src={image} alt="Mô tả ảnh" width={250} height={420} className="h-auto w-full" />
      <div>
        <p>{name}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
