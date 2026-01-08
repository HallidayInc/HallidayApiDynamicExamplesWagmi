# Halliday API Examples with Dynamic and Wagmi

Halliday Payments API integration examples using a Dynamic embedded wallet. This project uses the Vite React template and the Dynamic React SDK. The Halliday API is accessed over HTTP directly without using the Halliday SDK. To connect the Dynamic embedded wallet to the app, Wagmi is used with the Dynamic SDK.

### Keys

Get a Dynamic environment ID: https://app.dynamic.xyz/

Get a Halliday API key: https://halliday.xyz/contact

### Setup

This example app implements Base and Story mainnet. The Dynamic account must have those chains enabled for the embedded wallets. This can be configured in the dashboard using the toggles here: https://app.dynamic.xyz/dashboard/chains-and-networks#evm.

### Run

Create the `.env` files and supplant the Dynamic and Halliday keys. There is an `env.example` file for reference.

```
VITE_DYNAMIC_ENVIRONMENT_ID=_your_dynamic_environment_id_here_
VITE_HALLIDAY_API_KEY=_your_api_key_here_
```

Run the app using the command line:

```
npm install
npm run dev
```