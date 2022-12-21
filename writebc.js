const {ethers} = require("ethers");
const provider=new ethers.providers.JsonRpcProvider("https://goerli.infura.io/v3/b296ed319d494dbf8ccdd63ea88705ef");
const address="0x1c2d479508ea99cbc8a2a7c74df7104e05749912";
const abi=[
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
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
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
const writecontract=async()=>{
    const 
}
