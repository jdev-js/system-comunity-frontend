import { BASE_URL } from './base-url'

export const request = async <T>(
  body: string,
  variables?: { input: Record<string, string> } | Record<string, string>
): Promise<[Error?, T?]> => {
  let bodyRequest

  if (variables) {
    bodyRequest = {
      query: body,
      variables,
    }
  } else {
    bodyRequest = {
      query: body,
    }
  }

  try {
    const res = await fetch(`${BASE_URL}`, {
      method: 'POST',
      body: JSON.stringify(bodyRequest),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (!res.ok) [new Error('error en la peticion, vuelva a intentar')]
    const data = (await res.json()) as T
    return [undefined, data]
  } catch (error) {
    if (error instanceof Error) return [error]
  }
  return [new Error('Unkhown error')]
}
