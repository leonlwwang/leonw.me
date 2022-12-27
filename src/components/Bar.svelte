<script lang="ts">
    import { loading } from '../scripts/turbo';
</script>

<div class="loading-bar" class:show={$loading}></div>

<style>
    .show {
      opacity: 1;
      transform: translateX(0px);
    }
    div {
      position: fixed;
      width: 100%;
      top: 0px;
      left: 0px;
      height: 0.375rem;
      opacity: 0;
      transform: translateX(-100%);
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }
    .loading-bar {
      background-image: linear-gradient(to right, #8BD3E6, #E6A595, #85A1F2);
      background-size: 200% 200%;
      animation: gradient-move 1s infinite;
    }
    @keyframes gradient-move { 
      0%{background-position:left}
      50%{background-position:right}
      100%{background-position:left}
    }
</style>