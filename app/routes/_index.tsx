import { useNavigate } from '@remix-run/react'
import { useEffect } from 'react'
import useAuth from '~/hooks/useAuth'
import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  const Auth = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    if (Auth?.auth === null) {
      navigate('/login')
    } else {
      navigate('/admin')
    }
  })

  return <div></div>
}
