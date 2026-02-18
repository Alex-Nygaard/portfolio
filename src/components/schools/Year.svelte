<script lang="ts">
  export let header: string;
  export let time: string = '';
  export let location: string = '';
</script>

<style>
  .year-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .year-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .year-label {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--c-accent);
    white-space: nowrap;
  }

  .year-meta {
    display: flex;
    align-items: center;
    gap: 0.875rem;
  }

  .year-meta-item {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-family: 'DM Mono', monospace;
    font-size: 0.625rem;
    color: #7a95b0;
    letter-spacing: 0.02em;
    white-space: nowrap;
  }

  .year-rule {
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--c-border-2), var(--c-border), transparent);
  }

  .year-periods {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    gap: 0.875rem;
  }
</style>

<div class="year-section">
  <div class="year-header">
    <span class="year-label">{header}</span>
    {#if time || location}
      <div class="year-meta">
        {#if time}
          <span class="year-meta-item">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
            {time}
          </span>
        {/if}
        {#if location}
          <span class="year-meta-item">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            {location}
          </span>
        {/if}
      </div>
    {/if}
    <div class="year-rule"></div>
  </div>
  <div class="year-periods">
    <slot />
  </div>
</div>
