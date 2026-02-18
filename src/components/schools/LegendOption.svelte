<script lang="ts">
  import { highlightedCategory, hoveredCategory } from '$lib/state/highlight';
  import { categoryColors } from '$lib/utils/categoryColors';

  export let category: string;
  export let label: string;

  $: color = categoryColors[category] ?? '#4a5e7a';
  $: isActive = $highlightedCategory === category || $hoveredCategory === category;
</script>

<style>
  .legend-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.25rem 0.625rem 0.25rem 0.5rem;
    background-color: var(--c-surface);
    border: 1px solid var(--c-border);
    border-radius: 9999px;
    cursor: pointer;
    transition: background-color 0.15s, border-color 0.15s, color 0.15s;
    font-family: 'DM Mono', monospace;
    font-size: 0.6875rem;
    letter-spacing: 0.02em;
    color: var(--c-text-muted);
    user-select: none;
    white-space: nowrap;
  }

  .legend-pill:hover,
  .legend-pill.active {
    background-color: var(--c-surface-2);
    border-color: var(--c-border-2);
    color: var(--c-text);
  }

  .legend-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    flex-shrink: 0;
    transition: box-shadow 0.15s;
  }

  .legend-pill.active .legend-dot,
  .legend-pill:hover .legend-dot {
    box-shadow: 0 0 5px var(--dot-color);
  }
</style>

<button
  class="legend-pill"
  class:active={isActive}
  style="--dot-color: {color}"
  on:click={() => highlightedCategory.update((prev) => (prev === category ? '' : category))}
  on:mouseenter={() => hoveredCategory.set(category)}
  on:mouseleave={() => hoveredCategory.set('')}
>
  <span class="legend-dot" style="background-color: {color}"></span>
  {label}
</button>
