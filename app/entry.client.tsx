import { RemixBrowser } from '@remix-run/react'
import { startTransition, StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { AuthProvider } from './context/Auth'

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <AuthProvider>
        <RemixBrowser />
      </AuthProvider>
    </StrictMode>
  )
})
