export const signout = e => {
    e.preventDefault()
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    localStorage.removeItem('user_type')
    window.location = "/";
  }