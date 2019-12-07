export const GET_MIEMBRO = `
    query getMiembros{
        id
        firstname
        lastname
        ci
    }
`
export const CREATE_MIEMBRO = `
    mutation createMiembro($ciJefe: String!,$input: miembroInput!){
        createMiembro(ciJefe:$ciJefe,input:$input)
    }
`
export const DELETE_MIEMBRO = `
    mutation deleteMiembro($id: ID!){
        deleteMiembro(id: $id)
    }
`
export const UPDATE_MIEMBRO = `
    mutation updateMiembro($id: ID!,$input: miembroInput){
        updateMiembro(id: $id, input: $input)
    }
`

export interface Miembro {
  id: string
  firstname: string
  lastname: string
  ci: string
}

export interface CreateMiembro {
  createMiembro: boolean
}
export interface DeleteMiembro {
  deleteMiembro: boolean
}
export interface UpdateMiembro {
  updateMiembro: boolean
}
