<script>
    // @ts-nocheck

    import { browser } from "$app/environment";
    import { page } from "$app/stores";
    import { webVitals } from "$lib/vitals";
    import { PUBLIC_BASE_URL } from "$env/static/public";
    import { mustLogIn } from "../store.js";
    import { onMount } from "svelte";
    import { detectOS } from "$lib/util.js";

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

    let os = "";

    onMount(() => {
        loaded = true;
        document.getElementById("usernameInput").focus();
        os = detectOS();
    });
</script>

<svelte:head>
    <title>IIK3100 2023</title>
</svelte:head>

{#if loaded && $mustLogIn}
    <div class="alertBox">
        <h3>You must log in to view this page</h3>
        <button class="x" on:click={() => mustLogIn.set(false)}>×</button>
    </div>
{/if}

<form method="POST" autocomplete="off">
    <div class="elem">
        <label for="username">User Name or Email</label>
        <input type="text" name="username" id="usernameInput" />
    </div>
    <div class="elem">
        <label for="password">Password</label>
        <input type="password" name="password" />
    </div>
    <input type="hidden" name="os" value={os} />
    <div class="bottom">
        <a class="reset" href={link("reset_password")} on:click={() => mustLogIn.set(true)}
            >Forgot your password?</a
        >
        <button class="submit" type="submit">Submit</button>
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
        font-weight: bolder;
    }

    .bottom {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    div {
        margin: 9px 0;
    }

    .reset {
        color: var(--blue);
    }

    .submit {
        background-color: var(--blue);
        color: var(--background-color);
        border: none;
        padding: 10px;
        width: 100px;
        cursor: pointer;
    }

    .submit:hover {
        background-color: #0069d9;
    }

    .reset:hover {
        color: #0069d9;
    }

    .alertBox {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex: 0.05;
        width: 530px;
        margin: 0 auto;
        background-color: #f8d7da;
        border-color: #f5c6cb;
        color: #721c24;
        padding: 10px;
        border: 1px solid transparent;
        border-radius: 0.25rem;
        position: relative;
    }

    h3 {
        color: #721c24;
        text-align: center;
        padding: 0;
        margin: 0;
        font-weight: 400;
        font-size: 1rem;
    }

    .x {
        position: absolute;
        right: 10px;
        background-color: transparent;
        border: none;
        color: #7b6a6c;
        font-size: 1.5rem;
        cursor: pointer;
        font-size: 2rem;
    }
</style>
