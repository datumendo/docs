---
outline: deep
---

# Migrate existing IPFS / Arweave / HTTP links

Our app allows you to automatically download files from any decentralized or web storage and upload them to BNB Greenfield storage, the entire process happens in your browser and you are in the full control of the process.

Additionally, as the first step for NFT contracts migration we've created a service that allows you to enter the contract address (currently limited to iterable implementations) and fetch all the metadata and image links to then automatically upload them to a BNB Greenfield bucket of your choosing in your account. The image links are automatically populated in the metadata jsons so no additional manual input is needed, which means that when the process is finished - you are ready to create your own NFT contract that utilizes the updated links.

The next iteration of Datumendo development is focused on creating a protocol for NFT contracts migration to BNB Greenfield, allowing you to deploy an updated contract which allows users to lock in their token and get a new one with the links pointing to BNB Greenfield. At any point in time users can also retrieve the original NFT if they so desire, so this protocol is completely safe to use in case someone is conserned for their digital property

## ERC721 contract links migration

Datumendo allows to automatically fetch all the images and metadata json files for existing NFT contracts and automatically upload files and updated metadata to BNB Greenfield bucket. Just follow these simple steps:

1) Connect your web3 wallet with enough tokens on BNB Greenfield (or testnet) to store your files

2) Select the contract you'd like to fetch files from. Right now we support ERC721Iterable implementations but working on proividing a unified solution for any ERC721 token

![An image](/img/select-contract.png)

3) Once all the URLs are fetched - we begin the upload process. If the image was already uploaded and there is a metadata upload for the same filename in queue - we automatically adjust the JSON to reflect updated BNB Greenfield link

![An image](/img/upload-files.png)

4) Check the logs for the upload links, all the files should be in the bucket you've selected!
