// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;
 contract array_check{
     string[] public myarr= ["Anish","Abhinandan","Ajay"];
     function addvalue(string memory _myarray) public{
         myarr.push(_myarray);
     }
    function showcount() public view returns(uint arraylength){
        return myarr.length;
    }
 }