# ExtreamClient

ExtreamClient is a JavaScript SDK for interacting with the Extream platform written in TypeScript

## Usage

```js
import { ExtreamClient } from 'ex-sdk'
const extreamClient = new ExtreamClient({
    auth: 'YOUR_AUTH_URL',
    gateway: 'YOUR_GATEWAY_URL',
    apiKey: 'YOUR_API_KEY'
  })

async myAuthenticationMethod () {
    await this.extreamClient.auth('rich@extream.app', 'password')
}

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
