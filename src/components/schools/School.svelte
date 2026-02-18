<script lang="ts">
  export let name: string;
  export let degree: string;
  export let preDegreeNote: string = '';
  export let time: string = '';
  export let location: string = '';
</script>

<style>
  .school-block {
    padding-bottom: 3.5rem;
    margin-bottom: 3.5rem;
    border-bottom: 1px solid var(--c-border);
  }

  .school-block:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .school-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 1rem 2rem;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--c-border);
  }

  .school-pre-note {
    display: inline-block;
    font-family: 'DM Mono', monospace;
    font-size: 0.6875rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--c-accent);
    margin-bottom: 0.5rem;
  }

  .school-degree {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: clamp(1.25rem, 2.5vw, 1.625rem);
    letter-spacing: -0.03em;
    color: var(--c-text);
    line-height: 1.2;
    margin-bottom: 0.25rem;
  }

  .school-name {
    font-family: 'Syne', sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--c-text-muted);
    line-height: 1.4;
  }

  .school-meta {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.3rem;
    flex-shrink: 0;
    margin-left: auto;
  }

  .school-meta-item {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    font-family: 'DM Mono', monospace;
    font-size: 0.6875rem;
    color: #7a95b0;
    letter-spacing: 0.02em;
  }
</style>

<div class="school-block">
  <div class="school-header">
    <div>
      {#if preDegreeNote}
        <span class="school-pre-note">{preDegreeNote}</span>
      {/if}
      <h2 class="school-degree">{degree}</h2>
      <p class="school-name">{name}</p>
    </div>
    <div class="school-meta">
      {#if time}
        <span class="school-meta-item">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
          {time}
        </span>
      {/if}
      {#if location}
        <span class="school-meta-item">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          {location}
        </span>
      {/if}
    </div>
  </div>
  <slot />
</div>
