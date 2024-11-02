import { ethers } from "hardhat";
import { expect } from "chai";

describe("SplitExpenses", function () {
  let splitExpenses: any;
  let owner: any;
  let addr1: any;
  let addr2: any;


  beforeEach(async function () {
    [owner, addr1, addr2, addr3] = await ethers.getSigners();
    const SplitExpenses = await ethers.getContractFactory("SplitExpenses");
    splitExpenses = await SplitExpenses.deploy();
    await splitExpenses.deployed();
  });

  it("should add a friend", async function () {
    await splitExpenses.addFriend("Alice", addr1.address);
    const friend = await splitExpenses.getFriend(addr1.address);
    expect(friend.name).to.equal("Alice");
    expect(friend.walletAddress).to.equal(addr1.address);
    expect(friend.exists).to.be.true;
  });

  it("should create an expense", async function () {
    await splitExpenses.addFriend("Alice", addr1.address);
    await splitExpenses.addFriend("Bob", addr2.address);

    await splitExpenses.createExpense("Dinner", ethers.utils.parseEther("1.0"), [addr1.address, addr2.address]);
    const expenses = await splitExpenses.getExpenses();
    expect(expenses.length).to.equal(1);
    expect(expenses[0].description).to.equal("Dinner");
    expect(expenses[0].amount).to.equal(ethers.utils.parseEther("1.0"));
    expect(expenses[0].payer).to.equal(owner.address);
    expect(expenses[0].participants).to.include(addr1.address);
    expect(expenses[0].participants).to.include(addr2.address);
    expect(expenses[0].settled).to.be.false;
  });

  it.skip("should settle an expense with 1% commission", async function () {
    await splitExpenses.addFriend("Alice", addr1.address);
    await splitExpenses.addFriend("Bob", addr2.address);

    await splitExpenses.createExpense("Dinner", ethers.utils.parseEther("1.0"), [addr1.address, addr2.address]);
    const expenseId = 0;
    const participantShare = ethers.utils.parseEther("0.5");
    const commission = ethers.utils.parseEther("0.01");

    await splitExpenses.connect(addr1).settleExpense(expenseId, { value: participantShare });
    const expense = await splitExpenses.getExpenses();
    expect(expense[0].settled).to.be.true;

    const ownerBalance = await ethers.provider.getBalance(owner.address);
    expect(ownerBalance).to.equal(commission);
  });

  it("should settle an expense with 1% commission", async function () {
    const [ payer, participant] = await ethers.getSigners();

    const SplitExpenses = await ethers.getContractFactory("SplitExpenses");
    const splitExpenses = await SplitExpenses.deploy();
    await splitExpenses.deployed();

    // Add a friend
    // await splitExpenses.connect(payer).addFriend("Payer", payer.address);
    await splitExpenses.connect(payer).addFriend("Participant", participant.address);

    // Create an expense
    await splitExpenses.connect(payer).createExpense("Dinner", ethers.utils.parseEther("1"), [participant.address]);

    // Settle the expense
    await expect(
      splitExpenses.connect(payer).settleExpense(0, { value: ethers.utils.parseEther("1") })
    ).to.emit(splitExpenses, "ExpenseSettledLog")
      .withArgs(payer.address, ethers.utils.parseEther("1"), ethers.utils.parseEther("0.01"));
  });
});