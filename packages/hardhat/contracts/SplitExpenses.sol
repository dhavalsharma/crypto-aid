// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";

contract SplitExpenses {
    address public owner = 0x59BD59aA6E42Ea46B9a16C7859E28619F5973d73;

    struct Friend {
        string name;
        address walletAddress;
        bool exists;
    }

    struct Expense {
        uint256 expenseId;
        string description;
        uint256 amount;
        address payer;
        address[] participants;
        bool settled;
    }

    mapping(address => Friend) public friends;
    address[] public friendList;
    Expense[] public expenses;

    event FriendAdded(address indexed walletAddress, string name);
    event ExpenseCreated(uint256 expenseId, string description, uint256 amount);
    event ExpenseSettled(uint256 expenseId);
    event ExpenseSettledLog(address indexed payer, uint256 amount, uint256 commission);

    function addFriend(string memory _name, address _walletAddress) public {
        require(!friends[_walletAddress].exists, "Friend already exists");
        friends[_walletAddress] = Friend(_name, _walletAddress, true);
        friendList.push(_walletAddress);
        emit FriendAdded(_walletAddress, _name);
    }

    function createExpense(
        string memory _description,
        uint256 _amount,
        address[] memory _participants
    ) public {
        console.log("Description: %s, Amount: %s", _description, _amount);
        for (uint256 i = 0; i < _participants.length; i++) {
            console.log("Participant %s: %s", i, _participants[i]);
        }

        require(_participants.length > 0, "Need at least one participant");
        uint256 expenseId = expenses.length;
        expenses.push(
            Expense({
                expenseId: expenseId,
                description: _description,
                amount: _amount,
                payer: msg.sender,
                participants: _participants,
                settled: false
            })
        );
        emit ExpenseCreated(expenseId, _description, _amount);
    }

    function settleExpense(uint256 _expenseId) public payable {
        require(_expenseId < expenses.length, "Expense does not exist");
        Expense storage expense = expenses[_expenseId];
        require(!expense.settled, "Expense already settled");
        require(msg.sender == expense.payer, "Only the payer can settle the expense");

        uint256 commission = expense.amount / 100; // 1% commission
        uint256 remainingAmount = expense.amount - commission;
        uint256 participantShare = remainingAmount / (expense.participants.length + 1); // +1 for the payer

        emit ExpenseSettledLog(msg.sender, expense.amount, commission);
        console.log("Amount received: ", msg.value, participantShare, remainingAmount);

        if (!expense.settled) {
            payable(owner).transfer(commission); // Transfer commission to owner
            expense.settled = true;
        }

        for (uint256 i = 0; i < expense.participants.length; i++) {
            payable(expense.participants[i]).transfer(participantShare); // Transfer participant's share
        }
        emit ExpenseSettled(_expenseId);
    }

    function getFriends() public view returns (address[] memory) {
        return friendList;
    }

    function getFriend(address _walletAddress) public view returns (Friend memory) {
        return friends[_walletAddress];
    }

    function getExpenses() public view returns (Expense[] memory) {
        console.log("Expenses lemgth: %s", expenses.length);
        return expenses;
    }

    function getExpense(uint256 _expenseId) public view returns (Expense memory) {
    require(_expenseId < expenses.length, "Expense does not exist");
    return expenses[_expenseId];
}
}
