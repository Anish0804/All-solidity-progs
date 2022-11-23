// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;
contract stru{
    struct School{
        uint roll;
        string name;
    }
    School public s;
    constructor(uint _roll,string memory _name)
    {
        s.roll=_roll;
        s.name=_name;
    }
     // School public s1=School(2,"Abhinandan");
    function change() public{
        School memory s1=School(2,"Abhinandan");
        s=s1;
    }
    function change_back(uint _roll,string memory _name) public{
        School memory s2=School(_roll,_name);
        s=s2;        
    }
}