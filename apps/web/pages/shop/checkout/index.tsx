import { CheckoutPage } from '@/pages/checkout-page/ui/checkout-page';
import { Seo } from '@/shared/ui/seo/seo';

const Page = () => {
  return (
    <>
      <Seo templateTitle='Checkout' />
      <CheckoutPage />
    </>
  );
};

export default Page;
