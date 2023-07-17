import { createEffect, sample } from 'effector';
import { Maybe } from 'yup';
import { store } from '@/entities/store/factory/shop-factory.model';
import { $products } from '@/entities/store/items/model/shop.model';
import { pushFx } from '@/shared/lib/effector/effector-router';
import { checkoutForm } from './checkout.form';
import { CheckoutForm } from './checkout-form.interface';

const SUCCESS_URL = '/shop/success-order';

interface CreateOrder extends CheckoutForm {
  items: {
    product: Maybe<string>;
    quantity: Maybe<number>;
    title?: string;
  }[];
}

const checkout = store.domain('checkout');
export const setSuccessOrder = checkout.createEvent<boolean>();
export const $submitIsDisabled = checkout.createStore(true);
export const $submitted = checkout.createStore(false);

const createOrderFx = createEffect(
  async (order: { data: CreateOrder } | null) => {
    if (order) {
      const { data } = await fetch('/api/shop-order', {
        method: 'POST',
        body: JSON.stringify(order),
      }).then((res) => res.json());
      return data;
    }
  }
);

sample({
  source: checkoutForm.$form,
  fn: (form) => form.hasError,
  target: $submitIsDisabled,
});

sample({
  source: { formState: checkoutForm.$form, products: $products },
  fn: ({ formState, products }) =>
    products.length > 0 &&
    formState.submitted &&
    !formState.hasError &&
    !formState.hasOuterError &&
    true,
  target: $submitted,
});

sample({
  clock: $submitted,
  source: { formValues: checkoutForm.$values, products: $products },
  fn: ({ formValues, products }, submitted): { data: CreateOrder } | null =>
    submitted && formValues && products
      ? {
          data: {
            ...formValues,
            items: products.map((product) => ({
              product: product.id,
              quantity: product.quantity,
            })),
          },
        }
      : null,
  target: createOrderFx,
});

sample({
  clock: createOrderFx.done,
  fn: (submitted) => submitted && { url: SUCCESS_URL },
  target: pushFx,
});

checkout.onCreateStore((store) => store.reset(setSuccessOrder));
$products.reset(setSuccessOrder);
