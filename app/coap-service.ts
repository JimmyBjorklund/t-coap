import * as coap from 'coap';


export class CoapService {
    private server: any;

    constructor(
    ) {
        this.server = coap.createServer();

        this.server.on('request',this.coapRequest);

        this.server.listen(5683, () => {
            console.log("Coap service running on port 5683");
        });
    }

    private coapRequest = async (req: coap.IncomingMessage, res: any) : Promise<void> => {
    }
}