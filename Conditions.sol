// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract Conditions{
    uint[] arr=[1,2,3,4,5,6,7,8,9,10];
    address public owner;
    constructor(){
        owner=msg.sender;
    }
    
    function checkevenodd(uint _num) public pure returns(bool) {
        if(_num%2==0){
            return true;
        }
        else{
            return false;
        } 
    }
    function arraycheck() public view returns(uint) {
        uint count=0;
        for(uint i=0;i<arr.length;i++)
        {
            if(arr[i]%2==0){
                count++;
            }
        }
        return count;
    }
    function isOwner() public view returns(bool){
        return(owner==msg.sender);
    }
}