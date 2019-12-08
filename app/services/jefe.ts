export const GET_JEFES_ALL = `
  query{
    getJefesAll{
      id
      firstname
      lastname
      age
      ci
      address
      typeDocument
      numberHome
      street
      dateNacimiento
      sexo
      numberBuy
      discapacity
      phone
    }
  } 
`

export const GET_JEFES = `
  query getJefes($idUser: ID!){
    getJefes(idUser: $idUser){
      id
      firstname
      lastname
      phone
      address
      ci
      age
      street
      typeDocument
      numberHome
      numberBuy
      sexo
      discapacity
      dateNacimiento
    }
  }
`

export const GET_JEFE = `
  query getJefe($id: ID!){
    getJefe(id: $id){
      id
      firstname
      lastname
      age
      ci
      address
      typeDocument
      numberHome
      street
      dateNacimiento
      sexo
      numberBuy
      discapacity
      phone
    }
  } 
`

export const CREATE_JEFE = `
  mutation createJefe($idUser: ID!,$input: JefeInput){
    createJefe(idUser: $idUser,input: $input)
  }
`

export const DELETE_JEFE = `
  mutation deleteJefe($id: ID!){
    deleteJefe(id: $id)
  }
`
export const UPDATE_JEFE = `
  mutation updateJefe($id: ID!,$input: JefeInput){
    updateJefe(id: $id,input:$input)
  }
`

export interface Jefe {
  id: string
  firstname: string
  lastname: string
  age: string
  ci: string
  address: string
  typeDocument: string
  numberHome: string
  street: string
  dateNacimiento: string
  sexo: string
  numberBuy: string
  discapacity: string
  phone: string
}

export interface GetJefes {
  data: {
    getJefes: Jefe[]
  }
  errors?: Array<{ message: string }>
}

export interface GetJefesAll {
  data: {
    getJefesAll: Jefe[]
  }
  errors?: Array<{ message: string }>
}

export interface GetJefe {
  data: {
    getJefe: Jefe
  }
  errors?: Array<{ message: string }>
}

export interface CreateJefe {
  data: {
    createJefe: boolean
  }
  errors?: Array<{ message: string }>
}

export interface DeleteJefe {
  data: {
    deleteJefe: boolean
  }
  errors?: Array<{ message: string }>
}

export interface UpdateJefe {
  data: {
    updateJefe: boolean
  }
  errors?: Array<{ message: string }>
}
