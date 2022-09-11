//  0x660730Ed8Ff015e8c0a2fC20C2b3336a7c773A96 deployed to
//  0x91a298f1f88f79af7729e8dc7a9ac3737496997232034a0037fe1476aa012eb5 transaction hash
//  0x660730Ed8Ff015e8c0a2fC20C2b3336a7c773A96
import { ethers } from "hardhat";

async function main() {
    const nftAmount = ethers.utils.parseEther('0.2');

    const nftContractAddress = '0x660730Ed8Ff015e8c0a2fC20C2b3336a7c773A96';

    const nftContract = await ethers.getContractAt(
        'Effigy',
        nftContractAddress
    );

    const mint = await nftContract.safeMint(
        '0xe61E4D6A5Bd95DD6384B0bfd6425616a16AF4AF1',
        1,
        'QmZMyVwUNS65qi6gKuqaw14uQsGmG1KMaw7AqvxaCn9xT2'
    )

    const mintTnxRcp = await mint.wait();
    console.log("Minted receipt", mintTnxRcp)
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });

