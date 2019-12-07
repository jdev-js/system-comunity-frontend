export const LOGIN = `
  mutation login($username: String!,$password: String!){
    login(username: $username, password: $password){
      id
      firstname
      lastname
    }
  }
`
export const REGISTER = `
  mutation register($input: registerInput!){
    register(input: $input)
  }
`

export interface DataLogin {
  login: {
    id: string
    firstname: string
    lastname: string
  }
}

export interface DataRegister {
  register: boolean
}
