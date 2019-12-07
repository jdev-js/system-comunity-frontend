import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import './main.css'

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error)
  return (
    <Layout>
      <div>
        <h1>There was is error</h1>
        <p>404</p>
        <hr />
      </div>
    </Layout>
  )
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}
