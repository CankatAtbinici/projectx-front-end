import { getAccessToken, getRefreshToken, setAccessToken, setRefreshToken } from './auth.service';

export function getAuthHeader() {
  const accessToken = getAccessToken();
  if (accessToken) {
    return {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    };
  }
  return {};
}

export function setAuthTokens(response) {
  setAccessToken(response.data.access_token);
  setRefreshToken(response.data.refresh_token);
}

export function clearAuthTokens() {
  setAccessToken(null);
  setRefreshToken(null);
}

