# shopEco

A clean, responsive storefront for discovering everyday products. shopEco loads product data from an API, lets shoppers search by product name, and presents product images, prices, and stock quantities in a simple catalog.

## Features

- Responsive storefront layout
- Product catalog with images, prices, and stock quantities
- Live product search
- Loading, empty, and API error states
- API endpoint configured through an environment variable

## Built with

- React
- Axios
- Create React App

## Getting started

### Requirements

- Node.js and npm
- Access to a product API with a response containing a `carts` array and a `products` array on its first cart

### Install

```bash
npm install
```

### Configure the API

Create a `.env` file in the project root:

```env
REACT_APP_API_URL=https://dummyjson.com/carts
```

The app reads products from `carts[0].products`. Keep `.env` out of version control; it is ignored by Git. After changing environment variables, restart the development server.

> Create React App embeds `REACT_APP_*` values into the client bundle. Do not put secrets or private API keys in these variables.

### Start the development server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the local development server |
| `npm test -- --watchAll=false` | Run tests once (the project currently has no test files) |
| `npm run build` | Create an optimized production build in `build/` |

## Deployment

Run `npm run build` and deploy the generated `build/` directory to a static hosting provider. Configure `REACT_APP_API_URL` in the provider's build environment as well; the local `.env` file is ignored and is not included in the deployment.

## Project structure

```text
src/
  components/
    Header/       Brand and product search
    Product/      Product list and product cards
    Hero.js       Storefront hero section
  App.js          API loading and product search state
  App.css         Storefront styles
  index.css       Global styles
```
