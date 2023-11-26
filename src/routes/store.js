import { writable } from "svelte/store";

export const mustLogIn = writable(false);
export const showDisclaimer = writable(true);
