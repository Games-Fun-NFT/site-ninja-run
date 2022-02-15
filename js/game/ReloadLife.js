async function reloadLife ()
{


    let myheaders = new Headers()
    let token = localStorage.getItem("Acess")

    myheaders.append("token-api", token)

    

    let reloadLife = await fetch('http://localhost:1245/reload/' + user.get("ethAddress"), {
        headers: myheaders
    })
    let response   = await reloadLife.json()

    console.log(response)

    let life_nft = document.getElementById('life_nft')

    if (response.life === 5) 
    {
        life_nft.innerHTML = `Life 5`
    }
    else
    {
        let message =  document.getElementById('message_fail_reload')

        message.innerHTML = `${response.message}`
    }
}