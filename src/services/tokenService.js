import { jwtDecode } from 'jwt-decode'

const base64UrlEncode = (str) => btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')

const createMockToken = (payload) => {
  const header = base64UrlEncode(JSON.stringify({ alg: 'HS256', typ: 'JWT' }))
  const body = base64UrlEncode(JSON.stringify(payload))
  const signature = base64UrlEncode(`signature_${Date.now()}`)

  return `${header}.${body}.${signature}`
}

const decode = (token) => {
  try {
    return jwtDecode(token)
  } catch {
    return null
  }
}

const isExpired = (token) => {
  const decoded = decode(token)
  return !decoded?.exp || decoded.exp <= Math.floor(Date.now() / 1000)
}

const createPayload = (email, role, expiryHours = 24) => ({
  sub: email,
  email,
  role,
  iat: Math.floor(Date.now() / 1000),
  exp: Math.floor(Date.now() / 1000) + expiryHours * 3600,
})

export default {
  createMockToken,
  createPayload,
  decode,
  isExpired,
}
