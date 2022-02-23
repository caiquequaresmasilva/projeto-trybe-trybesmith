export interface IOrder {
  products: number[]
}
  
export interface INewOrder extends IOrder{
  userId: number,
}
  
export interface IResponseOrder{
  order: INewOrder
}