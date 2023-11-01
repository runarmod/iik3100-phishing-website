<script>
    // @ts-nocheck
    import "@fontsource/lato/300.css";
    import "@fontsource/lato/400.css";
    import { link } from "$lib/util";
    import { mustLogIn } from "./store.js";
</script>

<header>
    <div class="wrapper">
        <nav>
            <ul>
                <li>
                    <a href={link("home")} on:click={() => mustLogIn.set(true)} class="home"
                        >IIK3100 2023</a
                    >
                </li>
                <li>
                    <a href={link("users")} on:click={() => mustLogIn.set(true)}>Users</a>
                </li>
                <li>
                    <a href={link("scoreboard")} on:click={() => mustLogIn.set(true)}>Scoreboard</a>
                </li>
                <li>
                    <a href={link("challenges")} on:click={() => mustLogIn.set(true)}>Challenges</a>
                </li>
            </ul>
        </nav>

        <div class="corner">
            <a
                href={link("register")}
                on:click={() => mustLogIn.set(true)}
                class="log"
                id="register"
            >
                Register
            </a>
            <a href="/login" on:click={() => mustLogIn.set(false)} class="log" id="login">
                Login
            </a>
        </div>
    </div>
</header>

<style>
    header {
        background: var(--header-color);
        color: var(--text-color);
        font-family: "Lato", "LatoOffline", sans-serif;
    }

    .wrapper {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;

        padding-top: 0.75rem;
        padding-left: 3em;
        font-size: 0.8rem;
        font-weight: 600;
    }

    .home {
        color: var(--background-color);
        font-size: 1.25rem;
        font-weight: 400;
    }

    nav {
        display: flex;
        justify-content: center;
    }

    ul {
        position: relative;
        padding: 0;
        margin: 0;
        height: 3em;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        background-size: contain;
    }

    li {
        position: relative;
        height: 100%;
    }

    nav a {
        display: flex;
        height: 100%;
        align-items: center;
        padding: 0 0.5rem;
        color: var(--text-color);
        text-decoration: none;
        transition: color 0.2s linear;
    }

    a {
        font-family: "Lato", "LatoOffline", sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    a:hover {
        color: var(--text-color-hover);
    }

    .corner {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 1rem;
        gap: 30px;
    }

    #register:before {
        content: "";
        background-image: url("/register.png");
        background-size: 100% 100%;
        display: inline-block;

        height: 20px;
        width: 24px;

        position: relative;
        top: 3px;
        right: 2px;
    }

    #login:before {
        content: "";
        background-image: url("/login.png");
        background-size: 100% 100%;
        display: inline-block;

        height: 18px;
        width: 22px;

        position: relative;
        top: 3px;
        right: 2px;
    }
</style>
