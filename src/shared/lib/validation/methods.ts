import { addMethod, StringSchema } from 'yup';

import { phoneRegex } from '../constants/contants';

addMethod(StringSchema, 'phoneRu', function format() {
  return this.matches(phoneRegex, {
    message: 'Введите корректный номер телефона',
  });
});
