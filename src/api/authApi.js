import config from '../config.json';


export async function signin(loginData) {

  const url = new URL(`${config.API_HOST}/auth/signin`);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
  })

  const data = await response.json();

  if (data.accessToken) {
    localStorage.setItem('user', JSON.stringify(data));
    return("Signed in as " + data.username);
  }
  return data.message;
}

export function logout() {
  localStorage.removeItem("user");
}

export async function signup(signupData) {
  const url = new URL(`${config.API_HOST}/auth/signup`);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json', 
    },
    body: JSON.stringify(signupData),
  })

  const data = await response.json();

  return data.message;
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem("user"));
}