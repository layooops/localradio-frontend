import { createNameHelper, FormValidateParams } from 'effector-react-form';
import type { ValidationError } from 'yup';
import { object } from 'yup';

export function createObjectValidator<Values extends object, Meta>(obj: {
  [K in keyof Values]?: any;
}) {
  const schema = object(obj);
  const nameHelper = createNameHelper<Values>();
  const validate = ({ values }: FormValidateParams<Values, Meta>) => {
    const errors: { [key: string]: string } = {};

    try {
      schema.validateSync(values, { strict: true, abortEarly: false });
    } catch (error) {
      const errorsArr = (error as ValidationError).inner;
      if (errorsArr.length > 0) {
        errorsArr.forEach((error) => {
          if (error.path !== undefined) {
            errors[nameHelper.getStr(error.path as keyof Values)] =
              error.message;
          }
        });
      }
    }

    return errors;
  };

  return validate;
}
