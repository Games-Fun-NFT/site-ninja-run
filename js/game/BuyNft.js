const serverUrl = "https://cpovkemuvrve.usemoralis.com:2053/server";
const appId = "KgXX7vY0zeT0HYeQSo5KgQCQesReOWkgnoJAWJq3";
Moralis.start({ serverUrl, appId });

let user = Moralis.User.current();

async function buyNft ()
{

    let myheaders = new Headers()
    let token = localStorage.getItem("Acess")

    myheaders.append("token-api", token)


    let buyNft   = await fetch('http://localhost:1245/buy/' + user.get("ethAddress"), {
        headers: myheaders
    })
    let response = await buyNft.json()

    if (response.code === 200) 
    {
        let divNftContainer = document.getElementById('nft_container')
        divNftContainer.style.display = 'none'

        let divNftContainerWin = document.getElementById('nft_container_win')

        divNftContainerWin.style.display = 'flex'

        let life_nft = document.getElementById('life_nft').innerHTML = `Life ${response.life}`
    }



}

async function showNft()
{
    let myheaders = new Headers()
    let token = localStorage.getItem("Acess")

    myheaders.append("token-api", token)

    let buyNft   = await fetch('http://localhost:1245/show/' + user.get("ethAddress"), {
        headers: myheaders
    })

    let response = await buyNft.json()

    if (response.code === 200) 
    {
        let divNftContainer = document.getElementById('nft_container')
        divNftContainer.style.display = 'none'

        let divNftContainerWin = document.getElementById('nft_container_win')

        divNftContainerWin.style.display = 'flex'

        let life_nft = document.getElementById('life_nft')
        
        life_nft.innerHTML = `Life ${response.life}`

        console.log(response)
    }
    else 
    {
        let divNftContainer = document.getElementById('nft_container')
        divNftContainer.style.display = 'flex'

        let divNftContainerWin = document.getElementById('nft_container_win')

        divNftContainerWin.style.display = 'none'
    }

}

showNft()