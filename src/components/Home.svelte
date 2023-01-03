<script>
  import Hoverable from './Hoverable.svelte';
</script>

<Hoverable let:hover={active}>
  <div id="home" class:active>
    {#if active === null}
      <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" style="width: 40px; height: 40px;">
        <g>
          <path d="M 7.48 8.126 L 7.281 25.375 L 7.205 40.909 L 12.844 40.906 L 37.156 40.906 L 42.653 40.88 L 42.719 8.219 L 7.48 8.126 Z"/>
        </g>
      </svg>
    {:else if active === true}
      <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" style="width: 40px; height: 40px;">
        <g>
          <path>
            <animate 
                attributeName="d"
                repeatCount="1"
                fill="freeze"
                dur="0.4s"
                calcMode="spline"
                keyTimes="0; 1"
                keySplines="0.0 0.0 0.58 1.0"
                values="M 7.48 8.126 L 7.281 25.375 L 7.205 40.909 L 12.844 40.906 L 37.156 40.906 L 42.653 40.88 L 42.719 8.219 L 7.48 8.126 Z;
                        M 24.974 8.126 L 7.281 25.375 L 13.003 25.377 L 12.844 40.906 L 37.156 40.906 L 37.022 24.901 L 42.719 24.872 L 24.974 8.126 Z"
            />
          </path>
        </g>
      </svg>
    {:else}
      <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" style="width: 40px; height: 40px;">
        <g>
          <path>
            <animate 
                attributeName="d"
                repeatCount="1"
                fill="freeze"
                dur="0.4s"
                keyTimes="0; 1"
                keySplines="0.42 0.0 1.0 1.0"
                values="M 24.974 8.126 L 7.281 25.375 L 13.003 25.377 L 12.844 40.906 L 37.156 40.906 L 37.022 24.901 L 42.719 24.872 L 24.974 8.126 Z;
                        M 7.48 8.126 L 7.281 25.375 L 7.205 40.909 L 12.844 40.906 L 37.156 40.906 L 42.653 40.88 L 42.719 8.219 L 7.48 8.126 Z"
            />
          </path>
        </g>
      </svg>
    {/if}
  </div>
</Hoverable>

<style>
    path {
      fill: #2B2222;
    }
    #home {
      opacity: 0.15;
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 0.5s;
    }
    #home:hover {
      opacity: 1;
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 0.5s;
    }
</style>