// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract Counter {
    mapping(uint => Book) public books;
    mapping(address => mapping(uint => Book) )public mybooks; 
    struct Book{
        string bookname;
        string author;
    }
    function addbook(uint _id,string memory _bookname,string memory _author) public{
        books[_id]=Book(_bookname,_author);
    }
    function addmybook(uint _id,string memory _bookname,string memory _author) public{
        mybooks[msg.sender][_id]=Book(_bookname,_author);
    }
}