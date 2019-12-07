export const GAS_REGISTER = `
mutation createGas($idUser: ID!,$input: GasInput){
    createGas(idUser: $idUser,input: $input)
}
`
export const DELETE_GAS = `
mutation deleteGas($id: ID!){
    deleteGas(id: $id)
}
`

export const UPDATE_GAS = `
mutation updateGas($id: ID!,$input: GasInput){
    updateGas(id: $id, input: $input)
}
`

export const GET_GAS_ALL = `
query{
    getGasAll{
        id
        ciJefeFamily
        numberHome
        sizeLengthGas
        totalCilindros
        gasComunal
        gasCoperativa
    }
}
`

export const GET_GAS_USER = `
query getGasUser($idUser: ID!){
    getGasUser(idUser: $idUser){
        id
        ciJefeFamily
        numberHome
        sizeLengthGas
        totalCilindros
        gasComunal
        gasCoperativa
    }
}
`

export const GET_GAS = `
query getGas($id: ID!){
    getGas(id: $id){
        id
        ciJefeFamily
        numberHome
        sizeLengthGas
        totalCilindros
        gasComunal
        gasCoperativa
    }
}
`

export interface Gas {
  id: string
  ciJefeFamily: string
  numberHome: string
  sizeLengthGas: string
  totalCilindros: string
  gasComunal: string
  gasCoperativa: string
}

export interface CreateGas {
  data: {
    createGas: boolean
  }
  errors?: Array<{ message: string }>
}

export interface DeleteGas {
  data: {
    deleteGas: boolean
  }
  errors?: Array<{ message: string }>
}

export interface UpdateGas {
  data: {
    updateGas: boolean
  }
  errors?: Array<{ message: string }>
}

export interface GetGas {
  data: {
    getGas: Gas
  }
  errors?: Array<{ message: string }>
}

export interface GetGasAll {
  data: {
    getGasAll: Gas[]
  }
  errors?: Array<{ message: string }>
}

export interface GetGasUser {
  data: {
    getGasUser: Gas[]
  }
  errors?: Array<{ message: string }>
}
