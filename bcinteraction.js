const {ethers}= require ("ethers");
const provider =new ethers.providers.JsonRpcProvider("https://goerli.infura.io/v3/aa64df93ea8c4938a218c5cf4de22a1f");
const walletaddress="0xb1E3923004d9AA3C1F7Da6C638a33E1aa4c68448";
const contabi=[
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
	}
];

const contractinteraction= async ()=>{
    const walletdetails=new ethers.Contract(walletaddress,contabi,provider);
    const namevar=await walletdetails.name();
    console.log("Name present in contract is : ",namevar);
}
const queryblock= async () =>{
    const blockno=await provider.getCode("0xb1E3923004d9AA3C1F7Da6C638a33E1aa4c68448");
    console.log("Current block number is :",blockno);
}

contractinteraction();