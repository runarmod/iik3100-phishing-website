<script>
    import { showDisclaimer } from "./store.js";

    function closeDisclaimer() {
        showDisclaimer.set(false);
        localStorage.setItem("showDisclaimer", "false");
    }
</script>

<div class="box">
    <h1>Disclaimer</h1>
    <p>
        This is a demo phishing site for <a href="https://iik3100.hackingarena.no/"
            >iik3100.hackingarena.no</a
        >.<br />
        <b><em>DO NOT USE REAL CREDENTIALS!</em></b>
        <br />
        Check out the code on
        <a href="https://github.com/runarmod/iik3100-phishing-website">GitHub</a>.
    </p>
    <button on:click={closeDisclaimer}> Close </button>
</div>

<style>
    h1 {
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }

    .box {
        width: 50%;
        height: 250px;
        background-color: red;
        color: var(--background-color);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        box-shadow: 0 0 40px 0 rgba(0, 0, 0, 1);
    }

    p {
        text-align: center;
    }

    button {
        background-color: var(--header-color);
        color: var(--background-color);
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        font-size: 1rem;
        cursor: pointer;
    }

    a {
        color: gold;
    }
</style>
