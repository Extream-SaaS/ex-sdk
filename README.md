# ExtremeClient

ExtremeClient is a JavaScript SDK for interacting with the Extreme platform written in TypeScript

## Usage

```js
import { ExtremeClient } from '../../../sdk'
const extremeClient = new ExtremeClient({
    auth: 'YOUR_AUTH_URL',
    gateway: 'YOUR_GATEWAY_URL',
    apiKey: 'YOUR_API_KEY'
  })

async myAuthenticationMethod () {
    await this.extremeClient.auth('rich@extream.app', 'password')
}

```

## Build from source

```shell
yarn
yarn build
```