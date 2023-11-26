import clsx from 'clsx';
import dynamic from 'next/dynamic';
import localFont from 'next/font/local';
import { MainFooter } from '../../main-footer/ui/main-footer';
import { MainHeader } from '../../main-header/ui/main-header';

const SearchModal = dynamic(() =>
  import('@/features/search/ui/search-modal').then(
    (module) => module.SearchModal,
  ),
);
const BottomPlayer = dynamic(() =>
  import('@/widgets/players/bottom-player/ui/bottom-player').then(
    (module) => module.BottomPlayer,
  ),
);
const CartModal = dynamic(() =>
  import('@/features/cart/add-to-cart/ui/cart-modal').then(
    (mod) => mod.CartModal,
  ),
);

const myFont = localFont({
  src: '../../../.././../../public/fonts/PPRightGroteskWideVariable.ttf',
  variable: '--font-right-grotesk',
});

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={clsx(myFont.className, 'flex min-h-screen flex-col')}>
      {/* TODO: заменить, когда пофиксят эту проблему https://github.com/vercel/next.js/issues/43674 */}
      <style jsx global>{`
        :root {
          --font-right-grotesk: ${myFont.style.fontFamily};
        }
      `}</style>
      <MainHeader />
      <CartModal />
      <SearchModal />
      {children}
      <MainFooter />
      <BottomPlayer />
    </div>
  );
}
