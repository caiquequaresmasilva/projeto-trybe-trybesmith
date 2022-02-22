export interface IUser {
  username: string,
  classe: string,
  level: number,
  password: string,
}

export interface INewUser extends IUser {
  id:number
}