<script>
    import "./styles.css";
    import "@fontsource/lato";
    import "@fontsource/raleway/500.css";
    import Header from "./Header.svelte";
    import Disclaimer from "./Disclaimer.svelte";
    import { showDisclaimer } from "./store";
    import { onMount } from "svelte";

    onMount(() => {
        if (localStorage.getItem("showDisclaimer") === "false") {
            showDisclaimer.set(false);
        }
    });
</script>

{#if $showDisclaimer}
    <div class="disclaimer">
        <Disclaimer />
    </div>
{/if}

<div class="app">
    <Header />

    <div class="jumbo">
        <h1>Login</h1>
    </div>

    <main>
        <slot />
    </main>

    <footer>
        <p>Powered by CTFd</p>
    </footer>
</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        width: 100%;
        max-width: 64rem;
        margin: 0 auto;
        box-sizing: border-box;
    }

    footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 12px;
        font-size: 0.8rem;
        font-weight: 400;
        color: #6c757d;
        font-family: Lato, LatoOffline, sans-serif;
    }

    .jumbo {
        width: 100%;
        height: 190px;
        background-color: var(--header-color);
        color: var(--background-color);
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Raleway, RalewayOffline, sans-serif;
        font-weight: 500;
        letter-spacing: 2px;
    }

    .disclaimer {
        position: absolute;

        width: 100vw;
        height: 100vh;
        transform: translateX(25%) translateY(25%);

        z-index: 100;
    }

    h1 {
        font-size: 2.5rem;
    }

    @media (min-width: 480px) {
        footer {
            padding: 12px 0;
        }
    }
</style>
