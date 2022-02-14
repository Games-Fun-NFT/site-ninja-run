async function reloadLife ()
{
    let reloadLife = await fetch('https://api-ninja-run-jkgrv.ondigitalocean.app/reload/' + user.get("ethAddress"))

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