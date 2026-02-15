<script lang="ts">
  import { highlightedCategory, hoveredCategory } from '$lib/state/highlight';
  import { Badge } from '$lib/components/ui/badge';

  export let category: string;
  export let label: string;
</script>

<div
  class="flex items-center space-x-2 w-fit whitespace-nowrap"
  on:click={() => highlightedCategory.update((prev) => (prev === category ? '' : category))}
  on:mouseenter={() => hoveredCategory.set(category)}
  on:mouseleave={() => hoveredCategory.set('')}
  role="presentation"
>
  <Badge variant={$highlightedCategory === category || $hoveredCategory === category ? 'default' : 'secondary'}>
    {label}
  </Badge>
</div>
