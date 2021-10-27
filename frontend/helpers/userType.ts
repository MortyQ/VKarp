import { RegisterType } from './loginType'

export interface Post {
  // id?: number
  post: string
}

export interface UserType extends RegisterType {
  id: number | string
  motherLastName: string
  city: string
  study: string
  work: string
  statuses: string
  parents: string
  social: string
  hobbi: string
  book: string
  music: string
  statusProfile: string
  avatar: File | null
  gallery: File[]
  posts: Post[]
}
