const TOKEN_KEY = 'auth_token'
const USER_KEY = 'auth_user'

function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token)
}

function setUser(user) {
  localStorage.setItem(USER_KEY, JSON.stringify(user))
}

function getToken() {
  return localStorage.getItem(TOKEN_KEY)
}

function getUser() {
  const raw = localStorage.getItem(USER_KEY)
  return raw ? JSON.parse(raw) : null
}

function clear() {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(USER_KEY)
}

async function login(email, password) {
  if (!email || !password) {
    throw new Error('Invalid credentials')
  }
  const role = email.includes('admin') ? 'admin' : 'user'
  const token = `token_${Date.now()}`
  const user = { email, role }
  setToken(token)
  setUser(user)
  return { token, user }
}

function logout() {
  clear()
}

export default {
  login,
  logout,
  getToken,
  getUser
}


