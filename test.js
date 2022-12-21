const {ethers} = require("ethers");
const provider=new ethers.providers.JsonRpcProvider("https://goerli.infura.io/v3/b296ed319d494dbf8ccdd63ea88705ef");
const address="0xbca902bc15d913fdf23311b6775e9d0c0a640f32";
const abi=[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_useradd",
				"type": "address"
			}
		],
		"name": "accountbalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_val",
				"type": "uint256"
			}
		],
		"name": "changevalue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractbalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getblockadd",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "numwrite",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
const queryblock= async () =>{
    const blockno=await provider.getBlockNumber();
    console.log("Current block number is :",blockno);
}
const readcontract= async() =>{
    const contractinfo=new ethers.Contract(address,abi,provider);
   // const contractname=await contractinfo.name();
    //console.log("The name of the contract is : ",contractname);
    const bignumvalue=await contractinfo.numwrite();
    const smallnumvalue=bignumvalue.toString();
    console.log("The num value of contract is : ",smallnumvalue);
	const depadd=await contractinfo.connect("0xb1E3923004d9AA3C1F7Da6C638a33E1aa4c68448").getblockadd();
	console.log("The address of the contract deployer is : ",depadd);
}


//queryblock();
//writecontract();
readcontract();