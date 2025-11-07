import tokenService from './tokenService'
import storageService from './storageService'

const MOCK_USERS = {
  'admin@test.com': { password: 'admin123', role: 'admin' },
  'user@test.com': { password: 'user123', role: 'user' },
}

const validateCredentials = (email, password) => {
  const user = MOCK_USERS[email]
  return user?.password === password ? user.role : null
}

const login = async (email, password) => {
  await new Promise((resolve) => setTimeout(resolve, 500))

  const role = validateCredentials(email, password)
  if (!role) throw new Error('Invalid credentials')

  const payload = tokenService.createPayload(email, role)
  const token = tokenService.createMockToken(payload)
  const user = { email, role }

  storageService.saveAuth(token, user)

  return { token, user }
}

const logout = () => storageService.clearAuth()

const getToken = () => {
  const token = storageService.getToken()

  if (token && tokenService.isExpired(token)) {
    storageService.clearAuth()
    return null
  }

  return token
}

const getUser = () => storageService.getUser()

const decodeJWT = (token) => tokenService.decode(token)

const isTokenExpired = (token) => tokenService.isExpired(token)

export default {
  login,
  logout,
  getToken,
  getUser,
  decodeJWT,
  isTokenExpired,
}
