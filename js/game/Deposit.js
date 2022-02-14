const token_addres = "0xe9e7cea3dedca5984780bafc599bd69add087d56"

async function sendDeposit(object) {
    const response = await fetch('https://api-ninja-run-jkgrv.ondigitalocean.app/deposit', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(object)
    })
    
    const data = await response.json()

    let balanceFront = document.getElementById('balance')

    console.log(data)

    balanceFront.innerHTML = `Balance: ${data.info.balance_usdt}`

    

}

async function deposit() {
    const tokenBalance = document.getElementById("deposit_inp").value;

    const transferTo   = "0x9E9D87422Add0d4Aa050235A0B5115Fb5593C2ff"
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

    console.log(result)

    let testUser = {
        user:  user.get("ethAddress"),
        balance: document.getElementById("deposit_inp").value,
        tnxHash: result.hash
    }

    await sendDeposit(testUser)
}
