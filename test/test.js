const { ethers } = require("hardhat");
const { assert, expect } = require("chai");

describe("NFT", function () {
  let NFTFactory, contract;
  beforeEach(async function () {
    NFTFactory = await ethers.getContractFactory("NFT");
    contract = await NFTFactory.deploy();
  });

  it("Should have empty string after deployment", async function () {
    const myURI = "ipfs://QmPtCUySBLQEtCaEYn9vT8pnN8kY5gHWDSddkv7cXr61kn/";
    const expectedURI = await contract._baseURI();

    assert.equal(expectedURI, myURI);
  });

  /*it("Should update note", async function () {
    const myNote = "Dias note";
    await contract.setNote(myNote);
    const currentNote = await contract.getNote();
    expect(myNote).to.be.equal(currentNote);
  });

  it("Should revert if string has less than 5 characters", async function () {
    await expect(contract.setNote("Dias")).to.be.revertedWith(
      "Should have at least 5 characters"
    );
  });

  it("Should emit event for setnote function", async function () {
    await expect(contract.setNote("Dias Note")).to.emit(
      contract,
      "NoteSubmitted"
    );
  });*/
});