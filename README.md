<p align="center">
  <img width="206" alt="devstat logo" src="http://devstat.io/icon.png"><br><br>

  <a href="https://travis-ci.org/luhagel/devstat-web"><img src="https://travis-ci.org/luhagel/devstat-web.svg?branch=master" alt="Build Status" /></a>
</p>

## Devstat.io

Devstat.io takes the fuzz out of hiring great developers.

## Usage

- [Run](#run)
- [Components](#components)
- [Store](#store)
  - [Store naming conventions](#store-naming-conventions)
  
### Run

Once you have installed the dependencies, you can use `yarn dev` to run a development server.

### Source code

The source code should be placed in `src`; public/static files should be placed in `public` so they can be included in the build process.

Because of [webpack's config](https://github.com/diegohaz/arc/blob/5c752968c52d013f7218b514021eae08f6ddf07c/webpack.config.js#L19-L21), we can import our source modules without relative paths.
```js
import { Button, HomePage } from 'components' // src/components
import App from 'components/App' // src/components/App
import routes from 'routes' // src/routes
```

### Components

This project leverages the [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) methodology to create a scalable and easy to maintain component folder structure. See [why](https://github.com/diegohaz/arc#why).

This is possible because all components are dynamically exported on [`src/components/index.js`](src/components/index.js) and imported in a way that Atomic Design structure doesn't matter:

```js
import { Button, Hero, HomePage, PageTemplate } from 'components'
```

To understand better the Atomic Design methodology, you can refer to the [`src/components`](src/components) folder here and the [Pattern Lab Demo](http://demo.patternlab.io/), which this project is based on. Basically, you can think this way:

- An **atom** is a native html tag or a React Component that renders an html tag
- A **molecule** is a group of atoms
- An **organism** is a group of atoms, molecules and/or other organisms
- A **page** is... a page, where you will put mostly organisms
- A **template** is a layout to be used on pages


### Store

Here lives all the state management of the app.

- `actions` are the messages dispatched throughout the application to perform state changes. [Learn more](http://redux.js.org/docs/basics/Actions.html);
- `reducer` listens to the actions and translates the state changes to the store. [Learn more](http://redux.js.org/docs/basics/Reducers.html);
- `selectors` are used by the application to get parts of the current state. [Learn more](http://redux.js.org/docs/recipes/ComputingDerivedData.html);
- `sagas` listen to the actions and are responsible for performing side effects, like data fetching, caching etc. [Learn more](https://github.com/yelouafi/redux-saga).

To add a new store, just create a new folder with actions, reducer, selectors and/or sagas. Webpack will automatically import them to your project (how? See [`src/store/actions.js`](src/store/actions.js), [`src/store/reducer.js`](src/store/reducer.js), [`src/store/sagas.js`](src/store/sagas.js) and [`src/store/selectors.js`](src/store/selectors.js)).

#### Store naming conventions

The store on this boilerplate follows some naming conventions. You don't need to follow them, but it will work better if you do.

- `actions` should start with the store name (e.g. `MODAL_OPEN` for `modal` store, `POST_LIST_REQUEST` for `post` store) and end with `REQUEST`, `SUCCESS` or `FAILURE` if this is an async operation;
- `action creators` should have the same name of their respective actions, but in camelCase (e.g. `modalOpen`). Async actions should group `request`, `success` and `failure` in a object (e.g. `postList.request`, `postList.success`, `postList.failure`);
- `worker sagas` should start with the operation name (e.g. `openModal`, `requestPostList`).
