import { useForm } from 'effector-react-form';
import { Field } from '@/shared/form';
import type { FormField } from '../../model/checkout.form';
import { checkoutForm } from '../../model/checkout.form';

interface FormBlock {
  title: string;
  data: FormField[];
}

export const CheckoutFormBlock = ({ title, data }: FormBlock) => {
  const { controller } = useForm({
    form: checkoutForm,
  });
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex'>
        <h5 className='text-[1.2rem] font-medium uppercase leading-none  md:text-[1.5rem] 2xl:text-[1.9rem]'>
          {title}
        </h5>
      </div>

      <div className='grid gap-2 lg:gap-3.5 2xl:gap-3.5'>
        {data.map(({ name, ...rest }) => (
          <Field.TextInput
            key={name}
            {...rest}
            use={controller({
              name: checkoutForm.getName(name),
            })}
          />
        ))}
      </div>
    </div>
  );
};
