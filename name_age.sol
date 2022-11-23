// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract name_age{
    uint  public age;
    string public name;
    uint public sge;
    constructor(uint _newage){
        age=_newage;
        name="Anish";
    }
    function getage() view public returns(uint){
        return age;
    }
    function getname() view public returns(string memory)
    {
        return name;
    
    }
    function modifyage() public {
        age=age+10;
    }
    function setname() public{
        name="Abhinandan";
    }
    function setnameback() public{
        name="Anish";
    }
}