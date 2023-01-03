<script lang="ts">
    import MobileMenu from "./MobileMenu.svelte";
    import { onMount } from "svelte";

    let open : boolean = null;
    function handleClick() {
        if (open) { open = false; }
        else { open = true; }
    }

    onMount(() => {
        window.onscroll = function() { scrolling() };
        var header = document.getElementById("mobileHeader");
        var scroll = header.offsetTop;
        function scrolling() {
            if (window.pageYOffset > scroll) {
                header.style.backgroundColor = 'aliceblue';
                header.style.borderBottom = '1px solid';
                header.style.borderBottomColor = '#2B2222';
            } else {
                header.style.backgroundColor = '#FFEEDF';
                header.style.borderBottom = '1px solid';
                header.style.borderBottomColor = '#FFEEDF';
            }
        }
    });
</script>

<header class="header" id="mobileHeader">
    <nav>
        <a rel="prefetch" id="home" href="/">
            <div id="home-mobile">
                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" style="width: 30px; height: 30px;">
                  <g>
                    <path d="M 24.974 8.126 L 7.281 25.375 L 13.003 25.377 L 12.844 40.906 L 37.156 40.906 L 37.022 24.901 L 42.719 24.872 L 24.974 8.126 Z"/>
                  </g>
                </svg>
            </div>
        </a>
        <ul id="navbar">
            <li>
                <svg on:click={handleClick} on:keypress={()=>{}} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 19px; height: 19px;">
                    {#if open === null}
                        <svg>
                            <path d="M 24 24.005 L 23.986 11.979 L 24.013 0 L 20.188 0 L 11.976 0.006 L 3.666 0.007 L 0 0.007 L 0.016 12.021 L -0.008 24.015 L 3.781 24 L 12.018 23.994 L 20.303 23.999 L 24 24.005 Z"/>
                        </svg>
                    {:else if open === true}
                        <svg>
                            <path>
                                <animate 
                                attributeName="d"
                                repeatCount="1"
                                fill="freeze"
                                dur="0.4s"
                                calcMode="spline"
                                keyTimes="0; 1"
                                keySplines="0.075 0.82 0.165 1"
                                values="M 24 24.005 L 23.986 11.979 L 24.013 0 L 20.188 0 L 11.976 0.006 L 3.666 0.007 L 0 0.007 L 0.016 12.021 L -0.008 24.015 L 3.781 24 L 12.018 23.994 L 20.303 23.999 L 24 24.005 Z;
                                        M 24 20.188 L 15.685 11.979 L 23.98 3.688 L 20.188 0 L 11.976 8.318 L 3.666 -0.008 L 0 3.781 L 8.321 12.021 L 0.01 20.351 L 3.781 24 L 12.018 15.682 L 20.32 23.997 L 24 20.188 Z"
                                />
                            </path>
                        </svg>
                    {:else}
                        <svg>
                            <path>
                                <animate 
                                attributeName="d"
                                repeatCount="1"
                                fill="freeze"
                                dur="0.4s"
                                calcMode="spline"
                                keyTimes="0; 1"
                                keySplines="0.4 0 0.5 1"
                                values="M 24 20.188 L 15.685 11.979 L 23.98 3.688 L 20.188 0 L 11.976 8.318 L 3.666 -0.008 L 0 3.781 L 8.321 12.021 L 0.01 20.351 L 3.781 24 L 12.018 15.682 L 20.32 23.997 L 24 20.188 Z;
                                        M 24 24.005 L 23.986 11.979 L 24.013 0 L 20.188 0 L 11.976 0.006 L 3.666 0.007 L 0 0.007 L 0.016 12.021 L -0.008 24.015 L 3.781 24 L 12.018 23.994 L 20.303 23.999 L 24 24.005 Z"
                                />
                            </path>
                        </svg>
                    {/if}
                </svg>
            </li>
        </ul>
    </nav>
</header>

{#if open === null}
    <MobileMenu/>
{:else if open === true}
    <MobileMenu menu={true}/>
{:else}
    <MobileMenu menu={false}/>
{/if}

<style>
    path {
        fill: #2B2222;
    }
    #home {
        position: relative;
        left: 0rem;
    }
    nav {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem;
        align-items: center;
        margin-top: 0.1rem;
    }
    a {
        color: inherit;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 2rem;
        height: 2rem;
    }
    a:hover { text-decoration: underline; }
    a:visited { color: inherit; }
    #navbar {
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: 0.5rem;
        margin-block-end: 0em;
        margin-block-start: 0em;
    }
    header {
        z-index: 1000;
        background: #FFEEDF;
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 0.5s;
    }
    #home-mobile {
        margin-left: 0.25rem;
        display: flex;
    }
    li {
        height: 18px;
    }
</style>