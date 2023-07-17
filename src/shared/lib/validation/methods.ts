import { addMethod, StringSchema } from 'yup';
import { phoneRegex } from '../constants/common';

addMethod(StringSchema, 'phoneRu', function format() {
  return this.matches(phoneRegex, {
    message: 'Введите корректный номер телефона',
  });
});
