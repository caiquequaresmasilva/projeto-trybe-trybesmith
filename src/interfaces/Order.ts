export interface IOrder {
  products: number[]
}
  
export interface INewOrder extends IOrder{
  userId: number | undefined,
}
export interface INewOrderId extends INewOrder{
  id: number
}
  
export interface IResponseOrder{
  order: INewOrder
}