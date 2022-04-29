class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}

async function demoGithubUser() {
  let user;
  let name = prompt("Enter a name?:", "vanimar");
  user = await loadJson(`https://api.github.com/users/${name}`);
  alert(`Nombre completo: ${user.name}.`);
  return user;
}

demoGithubUser();
