[@sublime-productions/extream-sdk](README.md) › [Globals](globals.md)

# @sublime-productions/extream-sdk

# ExtreamClient

ExtreamClient is a JavaScript SDK for interacting with the Extream platform written in TypeScript.

All async requests will be rejected if no response is received from the server in 10 seconds.

# Table of contents

A table of contents with all the classes, interfaces, types and enums is available [here](./globals.md)

## Usage

```js
import { ExtreamClient } from 'ex-sdk'

// create new ExtreamClient
const extreamClient = new ExtreamClient({
  auth: 'YOUR_AUTH_URL',
  gateway: 'YOUR_GATEWAY_URL',
  apiKey: 'YOUR_API_KEY'
})

// authenticate
const { accessToken } = await extreamClient.user.login('rich@extream.app', 'password')

// fetch user
const user = await extreamClient.user.fetchUser('rich@extream.app')

// connect to the server
extreamClient.connect(accessToken)

// The raw socket is exposed as a property
const { socket } = extreamClient

// Helpers exist to allow you to add listeners easily
// subscribe to a topic
this.extreamClient.on('some_topic', (val) => {
  console.log(val)
})

// emit topic
this.extreamClient.emit('some_topic', {
  someProperty: 'someValue'
})
```

## Build from source

```shell
npm install
npm run build
```

## Serving from source

In order to watch for changes you can run:
```shell
npm run serve
```

## Docs

[Typedoc](https://typedoc.org/) is used in order to generate documentation from code comments. To generate docs run `npm run docs`.
