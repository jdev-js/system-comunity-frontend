export const LOGIN = `
  mutation login($username: String!,$password: String!){
    login(username: $username, password: $password){
      id
      firstname
      lastname
      role
    }
  }
`

export const GET_USERS = `
query{
  getUsers{
    id
    firstname
    lastname
    phone
    username
    password
    street
    role
    countJefes
  }
}
`

export const GET_USER = `
query getUser($id: ID!){
  getUser(id: $id){
    id
    firstname
    lastname
    phone
    username
    password
    street
    role
  }
}
`

export const REGISTER_USER = `
  mutation register($input: UserInput){
    register(input: $input)
  }
`

export const UPDATE_USER = `
  mutation updateUser($id: ID!,$input: UserInput){
    updateUser(id: $id,input: $input)
  }
`
export const DELETE_USER = `
  mutation deleteUser($id: ID!){
    deleteUser(id: $id)
  }
`

export interface DataLogin {
  data: {
    login: {
      id: string
      firstname: string
      lastname: string
      role: string
    }
  }
  errors?: Array<{ message: string }>
}

export interface User {
  id: string
  firstname: string
  lastname: string
  countJefes?: number
  phone: string
  username: string
  password: string
  street: string
  role: string
}

export interface UserView {
  id: string
  firstname: string
  lastname: string
  phone: string
  username: string
  password: string
  street: string
  role: string
  countJefes: number
}

export interface GetUsers {
  data: {
    getUsers: UserView[]
  }
  errors?: Array<{ message: string }>
}

export interface GetUser {
  data: {
    getUser: User
  }
  errors?: Array<{ message: string }>
}

export interface DeleteUser {
  data: {
    deleteUser: boolean
  }
  errors?: Array<{ message: string }>
}
export interface UpdateUser {
  data: {
    updateUser: boolean
  }
  errors?: Array<{ message: string }>
}

export interface CreateUser {
  data: { register: boolean }
  errors?: Array<{ message: string }>
}
