async function showGitHubPersonal(){
  let response = await fetch('https://api.github.com/users/Risorick/repos')
  //json() retorna una promesa
  let listaRepos = await response.json();
  console.log(listaRepos);
}

//showGitHubPersonal();

function getRepos(){
  fetch('https://api.github.com/users/Risorick/repos')
    .then(response => response.json())
    .then(datos => {
      console.log(datos)
    })
}

getRepos();