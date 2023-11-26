import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/entities/shop/lib/types/product.interface';
import { CartCalculation } from './cart-calculation';
import { CartItemRemoveButton } from './cart-item-remove-button';

export const CartItem = ({ product }: { product: Product }) => {
  const { attributes, selectedSize, quantity } = product;

  return (
    <div className='first flex  w-full  flex-col border-b border-black py-1.5     font-medium last:border-b-0  md:py-3 lg:p-3.5  lg:hover:bg-white/50  2xl:p-5'>
      <div className='flex flex-col'>
        <div className='flex w-full flex-1'>
          <div className='relative aspect-square h-[100px] w-[100px] xl:h-[120px] xl:w-[120px]   2xl:h-[150px] 2xl:w-[150px]'>
            <Link href={`/shop/products/${attributes?.slug}`}>
              <Image
                src={attributes?.images.data[0].attributes?.url ?? ''}
                alt=''
                fill
                style={{ objectFit: 'cover' }}
              />
            </Link>
          </div>

          <div className='w-full px-1.5 leading-none lg:px-3'>
            <div className='flex h-full flex-col gap-1.5'>
              <div className='flex h-full  flex-col justify-between gap-1.5 md:gap-3'>
                <div className='flex flex-col gap-0.5 text-[0.95rem]  lg:gap-1.5 2xl:gap-2'>
                  <div className='flex justify-between'>
                    <Link
                      className=' hover:text-secondary-dark'
                      href={`/shop/products/${attributes?.slug}`}
                    >
                      {attributes?.title}
                    </Link>
                    <div>{attributes?.price} ₽</div>
                  </div>

                  {selectedSize && (
                    <div className='  text-[0.875rem] text-gray-color'>
                      Size: {selectedSize}
                    </div>
                  )}
                </div>

                <div className='flex flex-col gap-1.5 text-[0.95rem] md:gap-3'>
                  <div className='flex w-full flex-wrap items-end'>
                    <CartCalculation
                      productId={product.id}
                      selectedSize={selectedSize}
                      productQuantity={quantity}
                      soldout={product.attributes?.soldout}
                    />
                    <CartItemRemoveButton
                      productId={product.id}
                      selectedSize={selectedSize}
                      attributes={attributes?.attributes}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
