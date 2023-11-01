// @ts-nocheck
import { SvelteKitAuth } from "@auth/sveltekit";

export let requestIp;

export const handle = async ({ event, resolve }) => {
    requestIp = event.getClientAddress(); // IP from Client Request
    console.log("IP Address from Client Request: ", requestIp);

    // Return the requestIp along with the authentication result
    const authResult = await SvelteKitAuth({
        resolve
    })({ event, resolve });

    return authResult;
};

export default handle;
