import { authContex } from '../context/Auth'
import { useContext } from 'react'

export default function useAuth(){
    return useContext(authContex)
}