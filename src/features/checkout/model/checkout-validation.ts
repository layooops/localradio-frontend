import { string } from 'yup';

import { createObjectValidator } from '@/shared/form';
import { phoneRegex } from '@/shared/lib/constants/contants';

const minLengthMessage = (string: string) =>
  `${string} must be at least 2 characters`;
const requiredMessage = (string: string) => `${string} is required`;

const MIN_NAME_LENGTH = 2;
const PHONE_LENGTH = 6;

export const checkoutValidation = () =>
  createObjectValidator({
    firstName: string()
      .min(MIN_NAME_LENGTH, minLengthMessage('First name'))
      .required(requiredMessage('First name'))
      .nullable(),
    lastName: string()
      .min(MIN_NAME_LENGTH, minLengthMessage('Last name'))
      .required(requiredMessage('Last name'))
      .nullable(),
    email: string()
      .email('Email must be a valid')
      .required('Email is required')
      .nullable(),
    phone: string()
      .matches(phoneRegex, {
        message: 'Введите корректный номер телефона',
      })
      .required('Phone is a required field')
      .nullable(),
    city: string()
      .min(MIN_NAME_LENGTH, minLengthMessage('City'))
      .required('City is required')
      .nullable(),
    address: string()
      .min(MIN_NAME_LENGTH, minLengthMessage('address'))
      .required(requiredMessage('Full Address'))
      .nullable(),
    postcode: string()
      .required(requiredMessage('Postcode code'))
      .nullable()
      .length(PHONE_LENGTH, 'Postcode must be 6 digits'),
  });
