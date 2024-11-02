# 🏗 CryptoAid + Scaffold-ETH 2

> **This is a customized version of the Scaffold-ETH 2 repository, modified to integrate with [QuickNode](https://www.quicknode.com/signup?utm_source=qn-github&utm_campaign=qn-scaffold).**

🛠 **QuickNode Enhanced**: This version of Scaffold-ETH comes pre-configured to use QuickNode's high-speed blockchain infrastructure for an enhanced dApp development experience.

- 🚀 **QuickNode HTTP/WSS Provider**: Easily connect to Ethereum networks using QuickNode's robust and scalable nodes.
- 📦 **Customized QuickNode Setup**: We've adapted the configuration and deployment setup to align with QuickNode's services.
- 🌐 **Global Node Network**: Benefit from QuickNode's global network of nodes to ensure your dApp performs consistently and reliably across the globe.

🧪 An open-source, up-to-date toolkit for building decentralized applications (dApps) on the Ethereum blockchain. It's designed to make it easier for developers to create and deploy smart contracts and build user interfaces that interact with those contracts.

⚙️ Built using NextJS, RainbowKit, Hardhat, Wagmi, and Typescript.

- ✅ **Contract Hot Reload**: Your frontend auto-adapts to your smart contract as you edit it.
- 🔥 **Burner Wallet & Local Faucet**: Quickly test your application with a burner wallet and local faucet.
- 🔐 **Integration with Wallet Providers**: Connect to different wallet providers and interact with the Ethereum network.

![Debug Contracts tab](https://github.com/scaffold-eth/scaffold-eth-2/assets/55535804/1171422a-0ce4-4203-bcd4-d2d1941d198b)

## About CryptoAid

CryptoAid is a decentralized app to manage your fundraising campaigns. Whether you are a student, an entrepreneur, or facing a health challenge, appropriate funds at the right time can help you overcome challenges and come back stronger in life.

The application allows you to share the URL of your campaign within your circle, enabling your friends and relatives to easily donate any amount they choose. If they don't have a wallet, they can create one on the fly, fund it, and make the donation.

The app is locally tested on Hardhat but can easily be distributed to QuickNode.

## Challenges

- **Why QuickNode is Required**: QuickNode provides robust and scalable nodes that enhance the performance and reliability of your dApp.
- **Initial Setup**: Built multiple use cases, but most were too grand for my entry-level knowledge. Luckily, Scaffold-ETH simplified most of the initial setup problems I was struggling with.
- **Fetching Campaigns**: Getting back a list of campaigns was a problem as it would cost a lot more gas. Nested calls in React `useEffect` were causing infinite loops, which I could not fix within the time constraints of the hackathon. Currently, the contract loads all campaigns in a single call.

## Future

The app will also help distribute funds within your circle or to people you need to pay out in groups. It can also give away NFTs to the top 3 donors or based on a lucky draw.

## Requirements

Before you begin, you need to install the following tools:

- [Node (v18 LTS)](https://nodejs.org/en/download/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Getting Started

1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-repo/cryptoaid.git
   cd cryptoaid
   yarn install
   ```

**Step 2**: Setup for Deployment on Mainnet/Testnet


To deploy the smart contract to a production blockchain like Ethereum mainnet, you can use QuickNode. Follow the steps below to integrate QuickNode with your dApp.

  2.1: Sign up for a QuickNode account if you haven't already: [QuickNode Sign Up](https://www.quicknode.com/signup?utm_source=qn-github&utm_campaign=qn-scaffold)<br/>
  2.2: Once you have your QuickNode account, click the **Create an Endpoint** button, select any EVM chain (mainnet or testnet based on your preference), and configure your endpoint. Copy the HTTP Provider URL and keep it handy)<br/>
  2.3: Navigate to the `.env.example` files located in both `packages/nextjs` and `packages/hardhat` directories. Then rename both files to `.env`)<br/>
  2.4: Set the `QUICKNODE_ENDPOINT` environment variable with your QuickNode HTTP Provider URL like so:<br/>

```sh
# .env file
QUICKNODE_ENDPOINT=your_quicknode_http_provider_url_here
```

**Step 3**: Run a local network in the first terminal

```sh
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

**Step 4**: On a second terminal, deploy the test contract:

```sh
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

**Step 5**: On a third terminal, start your NextJS app:

```sh
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the `Debug Contracts` page. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

Run smart contract test with `yarn hardhat:test`

- Edit your smart contract `YourContract.sol` in `packages/hardhat/contracts`
- Edit your frontend in `packages/nextjs/pages`
- Edit your deployment scripts in `packages/hardhat/deploy`

## Configure Mainnet/Testnet Deployment

First, you will need to replace the `DEPLOYER_PRIVATE_KEY` placeholder in the `hardhat/.env` file with your actual private key. Make sure you have enough funds in your deployer account in order to pay for the transaction. If you are using testnet, you can retrieve testnet funds from the [QuickNode Multi-Chain Faucet](https://faucet.quicknode.com/?utm_source=qn-github&utm_campaign=qn-scaffold).

To deploy the sample smart contract, run the following command:

```sh
yarn deploy --network myquicknode
```

> This name "myquicknode" is configured in the **hardhat.config.js** file and references the blockchain network your QuickNode endpoint is configured to (e.g. mainnet or testnet).

Additionally, if you want to run the scaffold frontend against your configured QuickNode endpoint, you'll need to update the `nextjs/scaffold.config.ts` file, specifically line 14, to update the `targetNetwork` to the blockchain you're using (e.g. mainnet, goerli, sepolia, etc.).

## Documentation

To get the most out of QuickNode, visit our [documentation](https://www.quicknode.com/docs/welcome?utm_source=qn-github&utm_campaign=qn-scaffold).

For understanding Scaffold-ETH specifics, you can still refer to the original Scaffold-ETH [documentation](https://docs.scaffoldeth.io/).
