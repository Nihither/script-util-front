import config from '../config.json';


export async function getPassById(passId) {
  const url = new URL(`${config.API_HOST}/passwords/${passId}`);

  let response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    return(response.json())
  } else {
    return(response.status + response.statusText)
  }
}

export async function searchPass(searchString) {
  const url = new URL(`${config.API_HOST}/passwords?`)
  const params = new URLSearchParams({
    'searchString': searchString,
  });

  let response = await fetch(url + params, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (response.status === 200) {
    return(response.json())
  } else {
    console.log(response.status + response.statusText);
  }
}