const KEYS = {
  TOKEN: 'auth_token',
  USER: 'auth_user',
}

const saveAuth = (token, user) => {
  localStorage.setItem(KEYS.TOKEN, token)
  localStorage.setItem(KEYS.USER, JSON.stringify(user))
}

const getToken = () => localStorage.getItem(KEYS.TOKEN)

const getUser = () => {
  const data = localStorage.getItem(KEYS.USER)
  return data ? JSON.parse(data) : null
}

const clearAuth = () => {
  localStorage.removeItem(KEYS.TOKEN)
  localStorage.removeItem(KEYS.USER)
}

export default {
  saveAuth,
  getToken,
  getUser,
  clearAuth,
}
