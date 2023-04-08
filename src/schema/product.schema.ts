import { object, string, TypeOf } from 'zod';

const params = {
  params: object({
    productId: string({
      required_error: 'productId is required',
    }),
  }),
};

export const getProductSchema = object({
  ...params,
});

export type ReadProductInput = TypeOf<typeof getProductSchema>;
