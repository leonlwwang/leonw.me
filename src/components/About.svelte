<script>
    export let src = null;
</script>

<div id="main-box">
    <div class="box-child">
        <figure>
            <img id="portrait" {src} alt="me-voronoi"/>
        </figure>
        {#if src != null}
            <div style="width: 50%;">
                <a id="reference" href="https://www.mattkeeter.com/projects/swingline/" target="_blank" rel="noreferrer">
                    <span id="caption" style="margin-top: -1rem; margin-left: 2.5rem; display: block; text-align: left; font-size: 0.6rem;">
                        weighted voronoi stippling
                    </span>
                </a>
            </div>
        {/if}
    </div>
    <div id="about-text" style="width: 50%;">
        <div id="pad" style="padding: 5rem;">
            <h3> I'm a third-year student studying Statistics & Computer Science at the University of Illinois at Urbana-Champaign. </h3>
            <h4> 
                I currently work as a web developer intern at the Daily Illini.
                This summer, I'm interning at United Airlines as a Digital Technology intern!
            </h4>
            <p>
                I like combining creativity, art, and programming, designing elegant software solutions, and open-source projects.
            </p>
            <p>
                I also produce and songwrite under Night High, my independent artist project. My favorite DAW is Ableton Live!
            </p>
            <p><b>Interested in more?</b>
                Check out my links below! 	
                &#9759;
            </p>
        </div>
    </div>
</div>

<style>
    #main-box {
        display: flex; 
        margin-top: 2rem; 
        justify-content: center;
    }
    .box-child {
        width: 50%;
    }
    figure {
        display: flex;
        justify-content: center;
    }
    #reference, #reference:visited {
        color: inherit;
        text-decoration: none;
    }
    #reference:hover {
        text-decoration: underline;
    }
    #portrait {
        border-left: 1px dashed; 
        border-bottom: 1px dashed; 
        width: 100%; 
        height: auto;
    }
    p {
        text-align: left;
    }
    #about-text {
        display: flex;
        align-content: center;
    }
    @media screen and (max-width: 768px) {
        #about-text {
            width: 90% !important;
            padding: 1.5rem;
        }
        #main-box {
            display: block;
            margin-top: 4rem !important;
        }
        .box-child {
            width: 100%;
        }
        #reference:hover {
            text-decoration: none;
        }
        #caption {
            font-size: 0.4rem !important;
        }
        #pad {
            padding: 0rem !important;
        }
        p {
            font-size: 0.8rem;
            text-align: left !important;
            padding: 0rem !important;
        }
	}
</style>