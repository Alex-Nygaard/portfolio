<script lang="ts">
  import { highlightedCategory, hoveredCategory } from '$lib/state/highlight';
  import { categoryColors } from '$lib/utils/categoryColors';

  export let header: string;
  export let categorizedCourses: Record<string, { label: string; courses: string[] }> = {};

  $: activeCategory = $highlightedCategory || $hoveredCategory;
  $: hasActive = activeCategory !== '';

  function getColor(cat: string): string {
    return categoryColors[cat] ?? '#4a5e7a';
  }
</script>

<style>
  .period-card {
    background-color: var(--c-surface);
    border: 1px solid var(--c-border);
    border-radius: 0.625rem;
    padding: 1rem 1.125rem;
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }

  .period-header {
    font-family: 'DM Mono', monospace;
    font-size: 0.625rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--c-text-muted);
    padding-bottom: 0.625rem;
    border-bottom: 1px solid var(--c-border);
  }

  .course-groups {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
  }

  .course-group {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .course-item {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    transition: opacity 0.2s;
  }

  .course-item.dimmed {
    opacity: 0.35;
  }

  .course-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    flex-shrink: 0;
    margin-top: 0.44rem;
    transition: box-shadow 0.2s;
  }

  .course-item:not(.dimmed) .course-dot {
    box-shadow: 0 0 4px var(--dot-glow);
  }

  .course-name {
    font-size: 0.8125rem;
    line-height: 1.45;
    color: var(--c-text-muted);
    transition: color 0.2s;
  }

  .course-item:not(.dimmed) .course-name {
    color: var(--c-text);
  }
</style>

<div class="period-card">
  <div class="period-header">{header}</div>
  <div class="course-groups">
    {#each Object.entries(categorizedCourses) as [category, { courses }]}
      <div class="course-group">
        {#each courses as course}
          {@const color = getColor(category)}
          <div
            class="course-item"
            class:dimmed={hasActive && activeCategory !== category}
            style="--dot-glow: {color}"
          >
            <span class="course-dot" style="background-color: {color}"></span>
            <span class="course-name">{course}</span>
          </div>
        {/each}
      </div>
    {/each}
  </div>
</div>
