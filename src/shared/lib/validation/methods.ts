import { addMethod, StringSchema } from 'yup';

import { PHONE_REGEX } from '../constants/contants';

addMethod(StringSchema, 'phoneRu', function format() {
  return this.matches(PHONE_REGEX, {
    message: 'Введите корректный номер телефона',
  });
});
