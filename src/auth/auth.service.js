export function getAccessToken() {
  return localStorage.getItem('access_token');
}

export function getRefreshToken() {
  return localStorage.getItem('refresh_token');
}

export function setAccessToken(accessToken) {
  if (accessToken) {
    localStorage.setItem('access_token', accessToken);
  } else {
    localStorage.removeItem('access_token');
  }
}

export function setRefreshToken(refreshToken) {
  if (refreshToken) {
    localStorage.setItem('refresh_token', refreshToken);
  } else {
    localStorage.removeItem('refresh_token');
  }
}
