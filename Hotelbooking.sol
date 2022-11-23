// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract Hotelbooking{
    address payable owner;
    string public ownername;
    enum Status {Occupied,Vacant}
    Status public currentstatus;
    event Occupy(address _occupant,uint _value);
    constructor(string memory _name) public {
        owner=payable(msg.sender);

        
        currentstatus=Status.Vacant;
        ownername=_name;

    }
    modifier isRoomavacant{
        require(currentstatus==Status.Vacant,"Sorry the room is occupied");
        _;
    }
    modifier costs(uint _amount)
    {
        require(msg.value>= _amount,"Sorry you do not have enough ether");
        _;
    }
    function booking() payable public isRoomavacant costs(2 ether){
        currentstatus=Status.Occupied;
        (bool sent,bytes memory data)=owner.call{value:msg.value}("");
        require(true);
        emit Occupy(msg.sender,msg.value);
    }
}