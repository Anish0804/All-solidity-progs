// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract main{
    address payable public user=payable(0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2);

    function ethertransfer() payable public{

    }
    function getbalance() public view returns(uint){
        return address(this).balance;
    }
    function sendether() public{
        user.transfer(1 ether);
    }
    function userbalance() public view returns(uint){
        return user.balance;
    }
}