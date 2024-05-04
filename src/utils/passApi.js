import config from '../config.json';


export async function getPassById(passId) {

  const url = new URL(`${config.API_HOST}/passwords/${passId}`);

  let response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.status === 200) {
    return(await response.json())
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
    return(await response.json())
  } else {
    console.log(response.status + response.statusText);
  }
}

export async function createPass(passData) {

  const url = new URL(`${config.API_HOST}/passwords`);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(passData)
  })

  if (response.status === 200) {
    return response;
  } else {
    console.log(response.status + response.statusText)
  }
}

export async function updatePass(passId, passData) {

  const url = new URL(`${config.API_HOST}/passwords/${passId}`);

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(passData)
  })

  if (response.status === 200) {
    return response;
  } else {
    console.log(response.status + response.statusText);
  }
}

export async function delatePass(passId) {
  const url = new URL(`${config.API_HOST}/passwords/${passId}`);

  const response = await fetch(url, {
    method: "DELETE"
  })

  if (response.status === 200) {
    return response;
  } else {
    console.log(response.status + response.statusText)
  }
}