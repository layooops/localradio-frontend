import { Seo } from '@/shared/ui/seo/seo';

const Custom404Page = () => {
  return (
    <>
      <Seo templateTitle='Page Not Found' />
      <div className='my-auto flex min-h-screen w-full items-center  justify-between overflow-hidden px-3  text-[15vw] font-black uppercase leading-[0.75]'>
        <div className='flex flex-col'>
          <span>Page</span>
          <span>not</span>
          <span>found</span>
        </div>
        <div className='flex flex-col'>
          <span>404</span>
        </div>
      </div>
    </>
  );
};

export default Custom404Page;
