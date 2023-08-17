import { useEffect } from 'react';
import { useUnit } from 'effector-react';

import { useRouter } from 'next/router';

import { $products } from '@/entities/shop/model/shop.model';
import { CheckoutForm } from '@/features/checkout/ui/forms/checkout-form';
import { CheckoutOrderSummary } from '@/features/checkout/ui/order-summary';
import { ArchiveSecondHeader } from '@/shared/ui/headings/archive-second-header';

export const CheckoutPage = () => {
  const { products } = useUnit({
    products: $products,
  });
  const router = useRouter();

  const hasProducts = Array.isArray(products);

  // TODO: Проверить как работает
  useEffect(() => {
    !hasProducts && router.push('/shop');
  }, [router, hasProducts]);

  if (hasProducts)
    return (
      <div className='flex flex-1'>
        <div className=' flex flex-1  lg:gap-3.5'>
          <div className='flex flex-1 flex-col'>
            <ArchiveSecondHeader text='Checkout' variant='shop' />
            <div className='flex  flex-col gap-3.5 px-1.5 md:px-3  lg:px-3.5'>
              <CheckoutOrderSummary products={products} />
              <div className=' mb-5 flex w-full flex-col gap-1.5 lg:w-[calc(100%-450px)]  lg:gap-3.5 xl:w-[calc(100%-550px)] 2xl:w-[calc(100%-650px)]  2xl:gap-5'>
                <CheckoutForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  return null;
};
