<script lang="ts">
  import Tech from '$components/tech/Tech.svelte';

  export let variants: string[];
</script>

<div class="flex flex-wrap gap-2">
  {#each variants as variant}
    <Tech {variant} />
  {/each}
</div>
