<script>
</script>

{#if true}
    <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path>
            <animate 
                attributeName="d"
                repeatCount="1"
                fill="freeze"
                dur="0.5s"
                values="M 7.48 8.126 L 7.281 25.375 L 7.205 40.909 L 12.844 40.906 L 37.156 40.906 L 42.653 40.88 L 42.719 8.219 L 7.48 8.126 Z;
                        M 24.974 8.126 L 7.281 25.375 L 13.003 25.377 L 12.844 40.906 L 37.156 40.906 L 37.022 24.901 L 42.719 24.872 L 24.974 8.126 Z"
            />
          </path>
        </g>
    </svg>
{:else}
    <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path>
            <animate 
                attributeName="d"
                repeatCount="1"
                fill="freeze"
                dur="0.333s"
                values="M 24.974 8.126 L 7.281 25.375 L 13.003 25.377 L 12.844 40.906 L 37.156 40.906 L 37.022 24.901 L 42.719 24.872 L 24.974 8.126 Z;
                        M 7.48 8.126 L 7.281 25.375 L 7.205 40.909 L 12.844 40.906 L 37.156 40.906 L 42.653 40.88 L 42.719 8.219 L 7.48 8.126 Z"
            />
          </path>
        </g>
    </svg>
{/if}

<style>
    path {
        fill: #2B2222;
    }
    svg {
        justify-self: center;
        position: relative;
        left: 1rem;
        width: 40px;
        height: 40px;
    }
</style>