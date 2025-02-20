<script lang="ts">
  import { highlightedCategory } from '$lib/state/highlight';
  import { Badge } from '$lib/components/ui/badge';

  export let category: string;
  export let label: string;
</script>

<div
  class="flex items-center space-x-2 w-fit whitespace-nowrap"
  on:click={() => highlightedCategory.update((prev) => (prev === category ? '' : category))}
  role="presentation"
>
  <Badge variant={$highlightedCategory === category ? 'default' : 'secondary'}>
    {label}
  </Badge>
</div>
