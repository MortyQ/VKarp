export interface RegisterType {
  firstName: string
  lastName: string
  birthday: string
  sex: string
  phoneNumber: string
  password: string
  email: string
  username: string
}

export interface LoginSignIn {
  identifier: string
  password: string
  jwt?: string
}
