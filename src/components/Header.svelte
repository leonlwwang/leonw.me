<header>
    <nav>
        <a id="home" href="/">
            <slot/>
        </a>
        <ul>
            <li>
                <a href="../about">About</a>
            </li>
            <li>
                <a href="../projects">Projects</a>
            </li>
            <li>
                <a href="../blog">Blog</a>
            </li>
        </ul>
    </nav>
</header>

<style>
    #home {
        position: relative;
        left: 1rem;
    }
    nav {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem;
        align-items: center;
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
    ul, li {
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: 1.5rem;
        margin-left: 4rem;
    }
</style>