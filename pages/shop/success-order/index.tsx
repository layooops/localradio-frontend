import { useEffect } from 'react';
import { useUnit } from 'effector-react';

import Link from 'next/link';

import { setSuccessOrder } from '@/features/checkout/model/checkout.model';
import { ARROW_RIGHT_SYMBOL } from '@/shared/lib/constants/contants';
import { ArchiveSecondHeader } from '@/shared/ui/headings/archive-second-header';

const Page = () => {
  const { setSuccess } = useUnit({ setSuccess: setSuccessOrder });

  useEffect(() => {
    setSuccess(true);
  }, [setSuccess]);

  return (
    <div>
      <ArchiveSecondHeader text='Order Received' />
      <div className='flex flex-col gap-8 px-1.5 md:px-3 lg:px-3.5'>
        <p className='text-xl font-normal'>
          We will send you an email with the payment link (including shipping
          cost).
        </p>
        <Link className='font-medium' href='/'>
          Explore more {ARROW_RIGHT_SYMBOL}
        </Link>
      </div>
    </div>
  );
};

export default Page;
