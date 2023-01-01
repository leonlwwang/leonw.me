<script lang="ts">
    let hover : boolean = null;

    function idle(e) {
      hover = false;
    }
    function active(e) {
      hover = true;
    }
</script>

<div on:mouseenter={active} on:mouseleave={idle}>
    <slot hover={hover}></slot>
</div>