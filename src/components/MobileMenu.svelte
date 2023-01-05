<script lang="ts">
    export let menu : boolean = null;
    let currPage : string = window.location.pathname;
</script>

{#if menu != null}
    <div class="{menu ? 'active' : 'inactive'}" id="menu" style="display: flex; background: #FFEEDF; width: 100%; height: 100%;">
        <nav style="display: flex;">
            <a rel="prefetch" href="/about">
                {#if currPage === "/about"}
                    <span style="font-size: 1.25rem;">&#9758; </span>
                {/if}
                About
            </a>
            <a rel="prefetch" href="/projects">
                {#if currPage === "/projects"}
                    <span style="font-size: 1.25rem;">&#9758; </span>
                {/if}
                Projects
            </a>
            <a rel="prefetch" href="/blog">
                {#if currPage === "/blog"}
                    <span style="font-size: 1.25rem;">&#9758; </span>
                {/if}
                Blog
            </a>
        </nav>
    </div>
{/if}

<style>
    div {
        z-index: 750;
        position: fixed;
        top: 0;
        left: 0;
    }
    .active {
        animation: drop 0.5s;
        animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    @keyframes drop {
        0% { 
            transform: translateY(-100%);
            opacity: 0;
        }
        100% { 
            transform: translateY(0px);
            opacity: 1;
        }
    }
    .inactive {
        opacity: 0;
        animation: pull 0.5s;
        animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    @keyframes pull {
        0% { 
            transform: translateY(0px);
            opacity: 1;
        }
        100% { 
            transform: translateY(-100%);
            opacity: 0;
        }
    }
    nav {
        width: 100%;
        padding: 6rem;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    a, a:visited {
        font-family: 'SF-Pro';
        margin-top: 2rem;
        margin-bottom: 2rem;
        text-decoration: none;
        color: inherit;
    }
</style>
