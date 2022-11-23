// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract arraytest{
    uint[] public arr;
    function insert(uint _val) public {
        arr.push(_val);
    }
    function popelement() public {
        arr.pop();
    }
    function length() public view returns(uint){
        return arr.length;
    }
}