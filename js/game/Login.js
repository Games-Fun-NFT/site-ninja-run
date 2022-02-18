const serverUrl = "https://cpovkemuvrve.usemoralis.com:2053/server";
const appId = "KgXX7vY0zeT0HYeQSo5KgQCQesReOWkgnoJAWJq3";
Moralis.start({ serverUrl, appId });

let user = Moralis.User.current();

let loginBtn  = document.getElementById('login')
let logoutBtn = document.getElementById('logout')


async function login() {
    if (!user) 
    {
      user = await Moralis.authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) 
        {
          registerLogin(user.get("ethAddress"))
        })
        .catch(function (error) 
        {
          console.log(error);
        });
    }
    else 
    {
        await showUser ()
        console.log(user.get("ethAddress"))
    }
}

async function registerLogin(user) {
    let sendLogin = await fetch('https://api-ninja-run-jkgrv.ondigitalocean.app/register' + '/' + user)

    let response  = await sendLogin.json()

    console.log(response)

    if (response.message === 1) {
        window.location.reload()
    }
}

let count = 0

async function showUser () {
    let reciveLogin = await fetch('https://api-ninja-run-jkgrv.ondigitalocean.app/user' + '/' +user.get("ethAddress"))

    let dataLogin   = await reciveLogin.json()

    let addressFront = document.getElementById('address')
    let balanceFront = document.getElementById('balance')
    let token_acess  = document.getElementById('token_acess')
    let balanceToken = document.getElementById('balance-token')


    localStorage.setItem("Acess", dataLogin.token)

    
    let show_token   = document.getElementById('show_token')

    show_token.addEventListener('click', () => {
        
        count = count + 1

        if (count === 1) {
            token_acess.innerHTML = `Token Login: ${dataLogin.showUserDB[0].token_acess}`
        }
        else if (count === 2) {
            count = 0
            token_acess.innerHTML = 'Token Login: *****'
        }
    })

    addressFront.innerHTML = dataLogin.showUserDB[0].address.substring(0,6) + '...'
    balanceFront.innerHTML = `Balance Busd: ${dataLogin.showUserDB[0].balance_usdt}`
    balanceToken.innerHTML = `Balance Token: ${dataLogin.showUserDB[0].balance_token}`

    document.getElementById('login').style.display = 'none';
    document.getElementById('logout').style.display = 'inline';


}

async function logOut() {
  await Moralis.User.logOut();
  window.location.reload()
}

login()

document.getElementById('logout').style.display = 'none';
document.getElementById("login").onclick = login
document.getElementById("logout").onclick = logOut