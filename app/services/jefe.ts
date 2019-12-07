export const GET_JEFE = `
    query getJefes{
        id
        firstname
        lastname
        ci
    }
`
export const CREATE_JEFE = `
    mutation createJefe($input: jefeInput!){
        createJefe(input: $input)
    }
`

export const DELETE_JEFE = `
    mutation deleteJefe($id: ID!){
        deleteJefe(id: $id)
    }
`
export const UPDATE_JEFE = `
    mutation updateJefe($id: ID!,$input: jefeInput){
        updateJefe(id: $id,input:$input)
    }
`

export interface Jefe {
  getJefe: {
    id: string
    firstname: string
    lastname: string
    ci: string
  }
}

export interface CreateJefe {
  createJefe: boolean
}
export interface DeleteJefe {
  deleteJefe: boolean
}
export interface UpdateJefe {
  updateJefe: boolean
}
