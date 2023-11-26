import { createForm } from 'effector-react-form';
import type { InputProps } from '@/shared/ui/inputs/types/input.interface';
import type { CheckoutForm } from './checkout-form.interface';
import { checkoutValidation } from './checkout-validation';

export interface FormField extends Omit<InputProps, 'name'> {
  name: keyof CheckoutForm;
}

export const contactFormFields: FormField[] = [
  {
    name: 'firstName',
    autoComplete: 'given-name',
    placeholder: 'First name',
    required: true,
  },
  {
    name: 'lastName',
    autoComplete: 'family-name',
    placeholder: 'Last name',
    required: true,
  },
  {
    name: 'email',
    autoComplete: 'username',
    placeholder: 'Email',
    required: true,
    type: 'email',
  },
  {
    mask: '+{7} (000) 000-00-00',
    inputMode: 'numeric',
    type: 'tel',
    autoComplete: 'tel',
    placeholder: 'Phone',
    name: 'phone',
  },
];

export const regionFormFields: FormField[] = [
  {
    name: 'city',
    autoComplete: 'home city',
    required: true,
    placeholder: 'City',
  },
  {
    name: 'address',
    autoComplete: 'street-address',
    placeholder: 'Full Address',
    required: true,
  },
  {
    name: 'postcode',
    placeholder: 'Postcode',
    mask: '000000',
    inputMode: 'numeric',
    autoComplete: 'postal-code',
    type: 'number',
    required: true,
  },
];

export const checkoutForm = createForm<CheckoutForm>({
  initialValues: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    address: '',
    postcode: '',
  },
  validate: checkoutValidation(),
});
