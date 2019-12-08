export const GET_MIEMBROS = `
query getMiembros($ciJefe: String!){
  getMiembros(ciJefe: $ciJefe){
    id
    firstname
    lastname
    phone
    age
    dateNacimiento
    ciJefeFamily
    discapacity
    ci
    sexo
  }
}
`

export const GET_MIEMBROS_USER = `
query getMiembrosUser($idUser: ID!){
  getMiembrosUser(idUser: $idUser){
    id
    firstname
    lastname
    phone
    age
    dateNacimiento
    ciJefeFamily
    discapacity
    ci
    sexo
  }
}
`

export const GET_MIEMBROS_ALL = `
query{
  getMiembrosAll{
    id
    firstname
    lastname
    phone
    age
    dateNacimiento
    ciJefeFamily
    discapacity
    ci
    sexo
  }
}
`

export const GET_MIEMBRO = `
query getMiembro($id: ID!){
  getMiembro(id: $id){
    id
    firstname
    lastname
    phone
    age
    dateNacimiento
    ciJefeFamily
    discapacity
    ci
    sexo
  }
}
`

export const CREATE_MIEMBRO = `
    mutation createMiembro($idUser: ID!,$input: MiembroInput){
        createMiembro(idUser: $idUser, input:$input)
    }
`
export const DELETE_MIEMBRO = `
    mutation deleteMiembro($id: ID!){
        deleteMiembro(id: $id)
    }
`
export const UPDATE_MIEMBRO = `
    mutation updateMiembro($id: ID!,$input: MiembroInput){
        updateMiembro(id: $id, input: $input)
    }
`

export interface GetMiembros {
  data: {
    getMiembros: Miembro[]
  }
  errors?: Array<{ message: string }>
}

export interface GetMiembrosAll {
  data: {
    getMiembrosAll: Miembro[]
  }
  errors?: Array<{ message: string }>
}

export interface GetMiembrosUser {
  data: {
    getMiembrosUser: Miembro[]
  }
  errors?: Array<{ message: string }>
}

export interface GetMiembro {
  data: {
    getMiembro: Miembro
  }
}

export interface Miembro {
  id: string
  firstname: string
  lastname: string
  phone: string
  age: string
  dateNacimiento: string
  ciJefeFamily: string
  discapacity: string
  ci: string
  sexo: string
}

export interface CreateMiembro {
  data: { createMiembro: boolean }
  errors?: Array<{ message: string }>
}
export interface DeleteMiembro {
  data: { deleteMiembro: boolean }
  errors?: Array<{ message: string }>
}
export interface UpdateMiembro {
  data: { updateMiembro: boolean }
  errors?: Array<{ message: string }>
}
