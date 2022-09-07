//import axios from "axios";
// cambiamos axios por fetch

export class HttpClient {

    async get(url: string) {
        const resp = await fetch(url)
        const data = await resp.json()

        return {data, status: resp.status}
    }
}