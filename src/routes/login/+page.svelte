<script>
    // @ts-nocheck

    import { browser } from "$app/environment";
    import { page } from "$app/stores";
    import { webVitals } from "$lib/vitals";
    import { PUBLIC_BASE_URL } from "$env/static/public";
    import { mustLogIn } from "../store.js";
    import { onMount } from "svelte";

    function link(name) {
        return PUBLIC_BASE_URL + "/login?next" + encodeURIComponent("=" + name + "?");
    }

    let loaded = false;

    export let data;

    $: if (browser && data?.analyticsId) {
        webVitals({
            path: $page.url.pathname,
            params: $page.params,
            analyticsId: data.analyticsId
        });
    }

    onMount(() => {
        loaded = true;
    });
</script>

<svelte:head>
    <title>IIK3100 2023</title>
</svelte:head>

{#if loaded && $mustLogIn}
    <h3>You must log in to view this page</h3>
{/if}

<form method="POST" autocomplete="off">
    <div class="elem">
        <label for="username">User Name or Email</label>
        <input type="text" name="username" />
    </div>
    <div class="elem">
        <label for="password">Password</label>
        <input type="password" name="password" />
    </div>
    <div class="bottom">
        <a href={link("reset_password")} on:click={() => mustLogIn.set(true)}
            >Forgot your password?</a
        >
        <button type="submit">Submit</button>
    </div>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 0.05;
        width: 550px;
        margin: 0 auto;
    }

    label {
        color: var(--text-color-dark);
        font-weight: 600;
    }

    input {
        padding: 10px;
        margin: 10px 0;
        border: 2px solid #ced4da;
        background: #f0f0f0;
        height: 35px;
    }

    input:focus {
        border: 2px solid #28a745;
        outline: none;
        transition: ease 0.3s;
        background: #f9f9f9;
    }

    .elem {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .bottom {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    div {
        margin: 9px 0;
    }

    a {
        color: var(--blue);
    }

    button {
        background-color: var(--blue);
        color: var(--background-color);
        border: none;
        padding: 10px;
        width: 100px;
        cursor: pointer;
    }

    button:hover {
        background-color: #0069d9;
    }

    a:hover {
        color: #0069d9;
    }

    h3 {
        color: red;
        text-align: center;
    }
</style>
