import type { Product } from '@/entities/shop/lib/types/product.interface';

import { useState } from 'react';
import { useUnit } from 'effector-react';

import { $totalPrice } from '@/entities/shop/model/shop.model';
import { CartItem } from '@/features/cart/add-to-cart/ui/cart-item';
import { clsxm } from '@/shared/lib/helpers/clsxm';
import { Icon } from '@/shared/ui/icons';

interface CheckoutOrderSummaryProps {
  products: Product[];
}

export const CheckoutOrderSummary = ({
  products,
}: CheckoutOrderSummaryProps) => {
  const { totalPrice } = useUnit({
    totalPrice: $totalPrice,
  });
  const [openedList, openList] = useState(false);

  const hasProducts = Array.isArray(products);

  return (
    <div className='flex  flex-col gap-3 border-y-2 border-black  py-3  font-medium uppercase leading-none lg:hidden'>
      <button
        onClick={() => openList((prev) => !prev)}
        className='flex  flex-wrap justify-between gap-1.5'
      >
        <div>Order summary</div>
        <div className='flex items-center gap-1'>
          {totalPrice} ₽
          <div
            className={clsxm('w-4 stroke-black transition duration-100', {
              'rotate-180': openedList,
            })}
          >
            <Icon.ArrowIcon />
          </div>
        </div>
      </button>

      {hasProducts && (
        <div className={clsxm({ hidden: !openedList })}>
          {products.map((product, i) => (
            <CartItem
              key={product.attributes?.title && product.attributes.title + i}
              product={product}
            />
          ))}
        </div>
      )}
    </div>
  );
};
