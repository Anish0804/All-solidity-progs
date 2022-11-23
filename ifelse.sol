// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract ifelsecheck{
    bool public check;

    function checktruefalse(uint _val) public returns(bool){
        if(_val>10)
        {
            check=true;
        }
        else{
            check=false;
        }
        return check;
    }
}