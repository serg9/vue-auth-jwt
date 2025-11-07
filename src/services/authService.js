import { jwtDecode } from 'jwt-decode'

const TOKEN_KEY = 'auth_token'
const USER_KEY = 'auth_user'
const TOKEN_EXPIRY_HOURS = 24

const base64UrlEncode = (str) => btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')

const generateMockJWT = (payload) => {
  const header = { alg: 'HS256', typ: 'JWT' }
  const encodedHeader = base64UrlEncode(JSON.stringify(header))
  const encodedPayload = base64UrlEncode(JSON.stringify(payload))
  const signature = base64UrlEncode(`signature_${Date.now()}`)

  return `${encodedHeader}.${encodedPayload}.${signature}`
}

const decodeJWT = (token) => {
  try {
    return jwtDecode(token)
  } catch {
    return null
  }
}

const isTokenExpired = (token) => {
  try {
    const { exp } = jwtDecode(token)
    return !exp || exp <= Math.floor(Date.now() / 1000)
  } catch {
    return true
  }
}

const clearStorage = () => {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(USER_KEY)
}

const getToken = () => {
  const token = localStorage.getItem(TOKEN_KEY)

  if (token && isTokenExpired(token)) {
    clearStorage()
    return null
  }

  return token
}

const getUser = () => {
  const data = localStorage.getItem(USER_KEY)
  return data ? JSON.parse(data) : null
}

const TEST_USERS = {
  'admin@test.com': { password: 'admin123', role: 'admin' },
  'user@test.com': { password: 'user123', role: 'user' },
}

const getUserRole = (email, password) => {
  const testUser = TEST_USERS[email]

  if (testUser && testUser.password === password) {
    return testUser.role
  }

  return email.includes('admin') ? 'admin' : 'user'
}

const login = async (email, password) => {
  await new Promise((resolve) => setTimeout(resolve, 500))

  if (!email || !password) {
    throw new Error('Invalid credentials')
  }

  const role = getUserRole(email, password)
  const now = Math.floor(Date.now() / 1000)

  const payload = {
    sub: email,
    email,
    role,
    iat: now,
    exp: now + TOKEN_EXPIRY_HOURS * 60 * 60,
  }

  const token = generateMockJWT(payload)
  const user = { email, role }

  localStorage.setItem(TOKEN_KEY, token)
  localStorage.setItem(USER_KEY, JSON.stringify(user))

  return { token, user }
}

const logout = () => clearStorage()

export default {
  login,
  logout,
  getToken,
  getUser,
  decodeJWT,
  isTokenExpired,
}
