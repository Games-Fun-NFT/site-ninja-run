const token_addres = "0xe9e7cea3dedca5984780bafc599bd69add087d56"

async function sendDeposit(object) {

    let myheaders = new Headers()
    let token = localStorage.getItem("Acess")

    myheaders.append("token-api", token)

    const response = await fetch('https://api-ninja-run-jkgrv.ondigitalocean.app/deposit', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "token-api": token
        },
        body: JSON.stringify(object)
    })
    
    const data = await response.json()

    let balanceFront = document.getElementById('balance')

    balanceFront.innerHTML = `Balance: ${data.info.balance_usdt}`

    

}

async function deposit() {
    const tokenBalance = document.getElementById("deposit_inp").value;

    const transferTo   = "0xcf6E314c681684006594D09dB96A9549b093D1Ae"
    console.log(tokenBalance)
    await Moralis.Web3.enableWeb3();
    _depositToken(transferTo, tokenBalance.replace(".", ""))
    
}


async function _depositToken(transferTo, depositValue) {
    const options = {
        type: "erc20",
        amount: Moralis.Units.Token(depositValue, "18"),
        receiver: transferTo,
        contract_address: token_addres,
        tokenId: 1
    }

    let result = await Moralis.transfer(options)
    
    let testUser = {
        user:  user.get("ethAddress"),
        balance: document.getElementById("deposit_inp").value,
        tnxHash: result.hash
    }

    console.log(result)

    await sendDeposit(testUser)
}
