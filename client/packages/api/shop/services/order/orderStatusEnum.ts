import { registerEnumType } from 'type-graphql';

export enum OrderStatusEnum {
  RECEIVED = 'Recibido',
  PROCESSING = 'EnProceso',
  ON_THE_WAY = 'EnCamino',
  DELIVERED = 'Entregado',
}

registerEnumType(OrderStatusEnum, {
  name: 'Product Type',
  description: 'These are the supported enums for order status',
});
