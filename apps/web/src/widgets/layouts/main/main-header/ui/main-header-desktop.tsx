import { Button } from '@local-radio/ui';
import { useUnit } from 'effector-react';
import Image from 'next/image';
import NextLink from 'next/link';
import {
  $isOpenedCartModal,
  openCartModalEv,
} from '@/entities/cart/model/cart.model';
import { $totalQuantity } from '@/entities/shop/model/shop.model';
import { openSearchModalEv } from '@/features/search/model/search.model';
import Heart from '@/icons/heart.png';
import { Icon } from '@/shared/ui/icons';
import { SearchIconX } from '@/shared/ui/icons/icons/search-icon';
import { HeaderStreamPlayerWithMemo } from '@/widgets/players/stream/ui/header-stream-player';
import { HeaderLinkWithMemo } from './header-link';
import { HeaderLinkWrapperWithMemo } from './header-link-wrapper';
import { HeaderMenuButton } from './header-menu-button';

export const MainHeaderDesktop = () => {
  return (
    <div className='grid h-[var(--header-height)] grid-cols-3 items-center justify-between gap-2 bg-primary uppercase md:justify-between lg:flex  lg:h-auto lg:bg-transparent lg:pl-3.5 2xl:pl-5'>
      <div className='flex h-full items-center self-start group-hover:border-secondary-dark lg:hidden'>
        <HeaderMenuButton />
      </div>
      <NextLink
        href='/'
        className=' relative flex h-6  cursor-pointer px-1.5 md:px-3 lg:hidden '
        aria-label='Home'
      >
        <Icon.SmallLogo />
      </NextLink>
      <div className=' hidden items-center gap-1 rounded-lg      bg-primary   p-0.5 lg:flex'>
        <HeaderLinkWithMemo text='Archive' href='/archive' />
        <HeaderLinkWithMemo text='Releases' href='/releases' />
        <HeaderLinkWithMemo text='Events' href='/events' />
        <HeaderLinkWithMemo text='About' href='/about' />
        <SearchButton />
      </div>
      <div className='hidden w-full lg:block'>
        <HeaderStreamPlayerWithMemo />
      </div>
      <div className=' flex h-full items-center justify-end gap-2 lg:gap-[1rem] xl:gap-[1.2rem] 2xl:gap-[1.6rem]'>
        <div className='flex h-full items-center gap-2 px-1.5 lg:hidden lg:gap-[1rem] xl:gap-[1.2rem] 2xl:gap-[1.6rem]'>
          <CartButton isMobile={true} />
        </div>

        <div className='  hidden h-full items-center gap-2 lg:flex lg:gap-[1rem]   xl:gap-[1.2rem] 2xl:gap-[1.6rem]'>
          <div className=' hidden items-center gap-1 rounded-lg bg-primary  p-0.5 lg:flex'>
            <HeaderLinkWrapperWithMemo>
              <NextLink
                href='https://bit.ly/lrsite'
                className='flex h-full items-center  uppercase lg:px-2 2xl:px-3 '
              >
                Donate
                <span className='relative mb-0.5 w-[1.1rem] pl-1 text-red-color'>
                  <Image
                    src={Heart}
                    alt=''
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                  />
                </span>
              </NextLink>
            </HeaderLinkWrapperWithMemo>
            <HeaderLinkWithMemo text='Shop' href='/shop' />
            <CartButton isMobile={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

const SearchButton = () => {
  const { openSearchModal } = useUnit({
    openSearchModal: openSearchModalEv,
  });
  return (
    <HeaderLinkWrapperWithMemo>
      <button
        title='Search Button'
        type='button'
        onClick={() => openSearchModal(true)}
        className='justify-self-start rounded-full stroke-black lg:hidden lg:px-2  2xl:px-3 '
      >
        <SearchIconX className='h-[1.15rem] w-[1.15rem] 2xl:h-[1.35rem] 2xl:w-[1.35rem] ' />
      </button>
    </HeaderLinkWrapperWithMemo>
  );
};
const CartButton = ({ isMobile = false }: { isMobile: boolean }) => {
  const { quantity, openCartModal, isOpenedCartModal } = useUnit({
    quantity: $totalQuantity,
    openCartModal: openCartModalEv,
    isOpenedCartModal: $isOpenedCartModal,
  });
  const openModal = () => openCartModal(!isOpenedCartModal);
  if (isMobile)
    return (
      <HeaderLinkWrapperWithMemo>
        <button
          title='Mobile Cart Button'
          type='button'
          onClick={openModal}
          className='relative aspect-square h-[18px] w-[18px] justify-self-start rounded-full stroke-black transition-colors lg:hidden lg:px-2 2xl:h-6 2xl:w-6 2xl:px-3 '
        >
          <Icon.CartIcon />
          <span className='absolute  -right-1 -top-1 text-[10px] font-medium'>
            {quantity}
          </span>
        </button>
      </HeaderLinkWrapperWithMemo>
    );
  return (
    <HeaderLinkWrapperWithMemo>
      <Button
        title='Cart Button'
        type='button'
        onClick={openModal}
        className='whitespace-nowrap uppercase lg:px-2  2xl:px-3'
      >
        Cart {quantity && `(${quantity})`}
      </Button>
    </HeaderLinkWrapperWithMemo>
  );
};
