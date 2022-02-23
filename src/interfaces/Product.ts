export interface IProduct {
  name:string,
  amount:string
}

export interface INewProduct extends IProduct{
  id: number
}

export interface IResponseProd{
  item: INewProduct
}