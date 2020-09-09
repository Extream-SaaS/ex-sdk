# ExtreamClient

ExtreamClient is a JavaScript SDK for interacting with the Extream platform written in TypeScript

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
const { accessToken } = await this.extreamClient.authenticate('rich@extream.app', 'password')

// fetch user
const user = await this.extreamClient.fetchUser('rich@extream.app')

// connect to the server
this.extreamClient.connect(accessToken)

// subscribe to a topic
this.extreamClient.on('some_topic', (val) => {
  console.log(val)
})

// emit topic
this.extreamClient.emit('some_emit_event', {
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
