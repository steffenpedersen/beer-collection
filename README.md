# Beer Collection 🍺

* [Run Project](#run-project)
* [Folder Structure](#folder-structure)
* [About](#about)
  * [Vue CLI](#vue-cli)
  * [How It Works](#how-it-works)
* [Further Development](#further-development)
  * [TypeScript](#typescript)
  * [Styling](#styling)
  * [Axios POST](#axios-post)
  * [Tests](#tests)
  * [UX](#ux)



## Run Project

This is how you setup the project. You need to make a `.env` file with an environment variable. This has the API key for BreweryDB. You then need to `source` the `.env` file. When you have done that, you can `npm install` and `npm run serve`.

### Setup `.env` file

```sh
VUE_APP_API_KEY=
```

### Source `.env` file

```sh
source .env
```

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

## Folder Structure

Here is a list with a description of the content of the folders. I have mostly used the structure from Vue Cli.

* `root`: ...
  * `public`: ...
  * `src`: ...
    * `assets`: ...
    * `components`: ...
    * `store`: ...

## About

### Vue CLI

I have used the Vue CLI with a basic preset and then added Vuex, Vue Router and Axios.

I chose to use the state management and pattern library Vuex for a centralised store for all components. This project is not that big - but it's nice with a single source of truth for data/state. And we also don't need to pass down props through components.

### How It Works

## Further Development

I have written down a few thoughts on possible further development.

### TypeScript

I could have chose to use TypeScript, but it would maybe be too much setup for such a small application.

### Styling

I haven't paid that much attention to styling of the application. I have made a [BEMIT Boilerplate](https://github.com/steffenpedersen/bemit-boilerplate), which could be a possible setup.

### Axios POST

I wanted to `POST` a request to BreweryDB. I couldn't do that due to restrictions on their API.

```sh
{
    "message": "READ ONLY MODE: The beer has been successfully added and is waiting to be approved by our administrators.",
    "status": "success"
}
```

### Tests

It would be great to make tests and especially integration tests. This should be done to check that we're getting a 200 response from the API. We chould do this with the Mocha test framework.

### UX

This is of course a prototype and the UX is not that great. We could do a tonne of improvements with a few things as pagination and even hover effects.
