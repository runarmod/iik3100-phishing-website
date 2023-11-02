// @ts-nocheck
import { SvelteKitAuth } from "@auth/sveltekit";

export let ip;

export const handle = async ({ event, resolve }) => {
    ip = event.getClientAddress(); // IP from Client Request

    // Return the ip along with the authentication result
    const authResult = await SvelteKitAuth({
        resolve
    })({ event, resolve });

    return authResult;
};

export default handle;
