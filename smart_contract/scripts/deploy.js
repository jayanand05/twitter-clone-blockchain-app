const hre = require("hardhat");

async function main() {
  const profileImageFactory = await hre.ethers.getContractFactory(
    "ProfileImageNfts"
  );
  const profileImageContract = await profileImageFactory.deploy();

  await profileImageContract.deployed();

  console.log(
    "Profile Image Minter deployed to:",
    profileImageContract.address
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
