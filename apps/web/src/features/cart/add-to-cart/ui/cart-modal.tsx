import { useUnit } from 'effector-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {
  $isOpenedCartModal,
  openCartModalEv,
} from '@/entities/cart/model/cart.model';
import {
  $products,
  $totalPrice,
  $totalQuantity,
} from '@/entities/shop/model/shop.model';
import { DEFAULT_QUANTITY } from '@/shared/lib/constants/contants';
import { clsxm } from '@/shared/lib/helpers/clsxm';
import { useScroll } from '@/shared/lib/hooks/use-scroll.hook';
import { Icon } from '@/shared/ui/icons';
import { CartItem } from './cart-item';

const MIN_TOTAL_PRICE = 0; // TODO: Вынести куда-то. Вообще собрать все константы связанные с товарами / магазином

export const CartModal = () => {
  const {
    products,
    totalPrice,
    totalQuantity,
    isOpenedCartModal: isOpenedCart,
    openCartModal,
  } = useUnit({
    products: $products,
    totalPrice: $totalPrice,
    totalQuantity: $totalQuantity,
    isOpenedCartModal: $isOpenedCartModal,
    openCartModal: openCartModalEv,
  });

  const path = usePathname();
  const { visible } = useScroll();
  useEffect(() => {
    !isOpenedCart && path === '/shop/checkout' && openCartModal(true);
  }, [isOpenedCart, openCartModal, path]);

  const router = useRouter();

  useEffect(() => {
    isOpenedCart &&
      router.events.on('routeChangeComplete', () => {
        openCartModal(false);
      });
  }, [router.events, isOpenedCart, openCartModal]);

  const cartModalClasses = clsxm(
    'fixed right-0 z-[15] flex max-h-screen  w-full flex-1 flex-col border-black bg-primary text-black   backdrop-blur-[69px] transition-all duration-300 lg:h-auto',
    ' top-[calc(30px+2px)] xxs:top-[calc(60px+2px)] lg:top-0 lg:w-[450px] lg:justify-between  lg:border-b-2 lg:border-l-2 lg:pb-0 xl:w-[550px] 2xl:w-[650px]',
    {
      'top-[calc(var(--header-height)+30px)] xxs:top-[calc(var(--header-height)+60px)] lg:top-[var(--header-height)]':
        visible,
    },

    { 'hidden lg:flex': path === '/shop/checkout' },
  );

  const hasProducts = Array.isArray(products);

  return (
    <div
      style={{
        transform: isOpenedCart ? 'translateY(0)' : 'translateY(-200%)',
      }}
      className={cartModalClasses}
    >
      <div className='flex flex-1 flex-col'>
        <div className='flex  items-center  justify-between px-1.5 text-[0.95rem] font-normal leading-none sm:text-[1.05rem] md:px-3 lg:px-3.5 2xl:text-[1.15rem]'>
          <div className='flex items-center gap-1 py-3 text-[1.85rem] font-semibold uppercase  sm:text-[2.3rem] lg:text-[3rem] xl:py-5'>
            Cart ({totalQuantity ? totalQuantity : DEFAULT_QUANTITY})
          </div>
          {path !== '/shop/checkout' && (
            <button
              aria-label='Close Modal'
              type='button'
              onClick={() => {
                openCartModal(false);
              }}
              className='w-4'
            >
              <Icon.CloseIcon weight='bold' />
            </button>
          )}
        </div>
        <div className='flex h-full flex-col px-1.5 md:px-3 lg:px-0'>
          {hasProducts
            ? products.map((product) => (
                <CartItem
                  key={
                    product.attributes &&
                    product.attributes.slug + product.attributes.title
                  }
                  product={product}
                />
              ))
            : null}
        </div>
        <div className='flex flex-col justify-end'>
          {totalPrice !== undefined &&
            totalPrice !== null &&
            totalPrice > MIN_TOTAL_PRICE && (
              <div className='my-4 flex items-center justify-between px-1.5 text-[0.95rem] md:px-3 lg:px-3.5 xl:text-[1.15rem]'>
                <div>Total: {totalPrice} ₽</div>
              </div>
            )}

          <div className='flex w-full flex-col gap-4 text-[0.95rem] uppercase  xl:text-[1.15rem]'>
            <div
              className={clsxm('block pt-4 text-center', {
                hidden: hasProducts,
              })}
            >
              Your cart is empty
            </div>
            <Link
              className='border-t-2 border-black bg-black py-3 text-center font-medium text-primary hover:bg-secondary-dark  hover:text-black'
              href={
                path !== '/shop/checkout' && hasProducts
                  ? '/shop/checkout'
                  : '/shop'
              }
            >
              {path !== '/shop/checkout' && hasProducts
                ? 'Checkout'
                : path === '/shop/checkout'
                  ? 'Back to shopping'
                  : 'Start Shopping'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
