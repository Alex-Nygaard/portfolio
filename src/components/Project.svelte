<script lang="ts">
  import Tech from '$components/tech/Tech.svelte';

  export let name: string;
  export let description: string;
  export let image: string;
  export let technologies: string[];
  export let link: string;
  export let dates: string;
</script>

<style>
  .project-card {
    background-color: var(--c-surface);
    border: 1px solid var(--c-border);
    border-radius: 0.75rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: border-color 0.15s, transform 0.2s;
  }

  .project-card:hover {
    border-color: var(--c-border-2);
    transform: translateY(-3px);
  }

  .project-image {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    display: block;
    border-bottom: 1px solid var(--c-border);
  }

  .project-body {
    padding: 1.125rem 1.25rem;
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 0.625rem;
  }

  .project-name {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    color: var(--c-text);
    letter-spacing: -0.02em;
    line-height: 1.35;
  }

  .project-description {
    font-size: 0.8125rem;
    color: var(--c-text-muted);
    line-height: 1.55;
    flex: 1;
  }

  .project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
  }

  .project-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0.625rem;
    border-top: 1px solid var(--c-border);
    margin-top: auto;
  }

  .project-dates {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-family: 'DM Mono', monospace;
    font-size: 0.6875rem;
    color: var(--c-text-muted);
  }

  .project-link {
    color: var(--c-text-muted);
    text-decoration: none;
    transition: color 0.15s;
    display: flex;
    align-items: center;
  }

  .project-link:hover {
    color: var(--c-text);
  }
</style>

<article class="project-card">
  <img src={image} alt={name} class="project-image" loading="lazy" />

  <div class="project-body">
    <span class="project-name">{name}</span>
    <p class="project-description">{description}</p>

    {#if technologies && technologies.length > 0}
      <div class="project-tech">
        {#each technologies as tech}
          <Tech variant={tech} />
        {/each}
      </div>
    {/if}

    <div class="project-footer">
      <div class="project-dates">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
        {dates}
      </div>
      <a href={link} target="_blank" rel="noopener" class="project-link" aria-label="View on GitHub">
        <i class="devicon-github-original" style="font-size: 1.25rem;"></i>
      </a>
    </div>
  </div>
</article>
