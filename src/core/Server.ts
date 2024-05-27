//import fs from 'node:fs'
import { Client as C } from 'growtopia.js'

import { CreateHTTPServer } from '@app/core'

export class Client {
    private client: C

    constructor() {
        this.client = new C({ https: { enable: false } })
    }


    public async start() {
        await CreateHTTPServer()
        await this.client.listen()
    }
}
