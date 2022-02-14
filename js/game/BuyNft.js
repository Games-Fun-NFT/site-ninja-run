const serverUrl = "https://cpovkemuvrve.usemoralis.com:2053/server";
const appId = "KgXX7vY0zeT0HYeQSo5KgQCQesReOWkgnoJAWJq3";
Moralis.start({ serverUrl, appId });

let user = Moralis.User.current();

async function buyNft ()
{
    let buyNft   = await fetch('https://api-ninja-run.herokuapp.com/buy/' + user.get("ethAddress"))

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
    let buyNft   = await fetch('https://api-ninja-run.herokuapp.com/show/' + user.get("ethAddress"))

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