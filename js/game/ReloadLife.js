async function reloadLife ()
{


    let myheaders = new Headers()
    let token = localStorage.getItem("Acess")

    myheaders.append("token-api", token)

    let reloadLife = await fetch('https://api-ninja-run-jkgrv.ondigitalocean.app/reload/' + user.get("ethAddress"), {
        headers: myheaders
    })
    let response   = await reloadLife.json()

    let life_nft = document.getElementById('life_nft')

    if (response.life === 4) 
    {
        life_nft.innerHTML = `Life 5`
    }
    else
    {
        let message =  document.getElementById('message_fail_reload')

        message.innerHTML = `${response.message}`
    }
}