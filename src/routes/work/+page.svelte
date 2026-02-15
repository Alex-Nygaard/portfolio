<script lang="ts">
  import Tech from '$components/tech/Tech.svelte';
  import ardoqLogo from '$lib/images/logos/ardoq.png';
  import picnicLogo from '$lib/images/logos/picnic.svg';
  import hammerLogo from '$lib/images/logos/hammer.png';

  const positions = [
    {
      role: 'Software Engineering Apprentice',
      isCurrent: true,
      company: { name: 'Ardoq', website: 'https://www.ardoq.com/', logo: ardoqLogo },
      location: 'Oslo, Norway',
      tech: {
        backend: ['clojure', 'postgresql'],
        frontend: ['typescript', 'react'],
        tools: ['github', 'jira', 'docker', 'circleci'],
      },
      time: 'Sep 2024 – Present',
    },
    {
      role: 'Software Engineering Intern',
      isCurrent: false,
      company: { name: 'Ardoq', website: 'https://www.ardoq.com/', logo: ardoqLogo },
      location: 'Oslo, Norway',
      tech: {
        backend: ['clojure', 'postgresql', 'redis'],
        frontend: ['typescript', 'react'],
        tools: ['github', 'jira', 'docker', 'circleci'],
      },
      time: 'Jul – Aug 2024',
    },
    {
      role: 'Backend Developer (Working Student)',
      isCurrent: false,
      company: { name: 'Picnic Technologies', website: 'https://picnic.app/', logo: picnicLogo },
      location: 'Amsterdam, Netherlands',
      tech: {
        backend: ['java', 'maven', 'spring'],
        frontend: [],
        tools: ['datadog', 'docker', 'github', 'grafana', 'jira', 'prometheus', 'teamcity'],
      },
      time: 'Apr – Jun 2024',
    },
    {
      role: 'Junior Data Scientist',
      isCurrent: false,
      company: { name: 'Hammer Market Intelligence', website: 'https://www.hammer-intel.com/', logo: hammerLogo },
      location: 'Arnhem, Netherlands (hybrid)',
      tech: {
        backend: ['docker', 'flask', 'python', 'selenium'],
        frontend: ['react', 'typescript'],
        tools: ['github'],
      },
      time: 'Apr 2023 – Apr 2024',
    },
    {
      role: 'Full-Stack Software Engineering Intern',
      isCurrent: false,
      company: { name: 'Vera Connect', website: 'https://www.veraconnect.app/', logo: 'https://www.veraconnect.app/logo.svg' },
      location: 'Rotterdam, Netherlands',
      tech: {
        backend: ['nodejs', 'postgresql', 'prisma', 'typescript'],
        frontend: ['react', 'reactnative', 'typescript'],
        tools: ['docker', 'gitlab'],
      },
      time: 'Apr – Jun 2023',
    },
  ];
</script>

<style>
  .work-page {
    max-width: 900px;
    margin: 0 auto;
    padding: 3rem 1.5rem 4rem;
  }

  .page-header {
    margin-bottom: 3rem;
  }

  .page-header h1 {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: clamp(2.5rem, 6vw, 4rem);
    letter-spacing: -0.04em;
    color: var(--c-text);
    line-height: 1.05;
    margin-top: 0.375rem;
  }

  /* ── Timeline ─────────────────── */
  .timeline {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .timeline::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.75rem;
    bottom: 0;
    width: 1px;
    background: linear-gradient(to bottom, var(--c-border-2), var(--c-border), transparent);
  }

  @media (min-width: 640px) {
    .timeline::before {
      left: 1.375rem;
    }
  }

  /* ── Timeline entry ───────────── */
  .entry {
    position: relative;
    padding: 0 0 2.5rem 1.5rem;
  }

  @media (min-width: 640px) {
    .entry {
      padding: 0 0 2.5rem 4rem;
    }
  }

  .entry:last-child {
    padding-bottom: 0;
  }

  /* Timeline dot */
  .entry-dot {
    position: absolute;
    left: -0.4375rem;
    top: 0.375rem;
    width: 0.875rem;
    height: 0.875rem;
    border-radius: 50%;
    background-color: var(--c-surface);
    border: 2px solid var(--c-border-2);
    z-index: 1;
  }

  @media (min-width: 640px) {
    .entry-dot {
      left: 0.9375rem;
    }
  }

  .entry-dot.current {
    background-color: var(--c-accent);
    border-color: var(--c-accent);
    box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
  }

  /* Entry card */
  .entry-card {
    background-color: var(--c-surface);
    border: 1px solid var(--c-border);
    border-radius: 0.75rem;
    padding: 1.25rem 1.375rem;
    transition: border-color 0.15s;
  }

  .entry-card:hover {
    border-color: var(--c-border-2);
  }

  .entry-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.875rem;
  }

  .entry-role {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 1.0625rem;
    color: var(--c-text);
    letter-spacing: -0.02em;
    line-height: 1.3;
  }

  .entry-meta {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    margin-bottom: 1rem;
  }

  .entry-company {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    font-size: 0.875rem;
    color: var(--c-text-muted);
  }

  .company-logo {
    width: 1.125rem;
    height: 1.125rem;
    object-fit: contain;
    border-radius: 0.125rem;
    background: white;
    padding: 1px;
  }

  .entry-location {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-family: 'DM Mono', monospace;
    font-size: 0.6875rem;
    color: var(--c-text-muted);
    letter-spacing: 0.02em;
  }

  .entry-time {
    font-family: 'DM Mono', monospace;
    font-size: 0.75rem;
    color: var(--c-text-muted);
    white-space: nowrap;
    flex-shrink: 0;
    padding-top: 0.125rem;
  }

  .current-tag {
    display: inline-block;
    font-family: 'DM Mono', monospace;
    font-size: 0.6rem;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: var(--c-accent);
    background-color: rgba(59, 130, 246, 0.1);
    border: 1px solid rgba(59, 130, 246, 0.25);
    padding: 0.15rem 0.45rem;
    border-radius: 9999px;
    margin-left: 0.5rem;
    vertical-align: middle;
  }

  /* ── Tech grid in entries ─────── */
  .tech-grid {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .tech-row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .tech-category {
    font-family: 'DM Mono', monospace;
    font-size: 0.6875rem;
    color: var(--c-text-muted);
    letter-spacing: 0.04em;
    min-width: 4rem;
    flex-shrink: 0;
  }

  .tech-items {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
  }
</style>

<main class="work-page">
  <header class="page-header animate-fade-up animate-fade-up-1">
    <p class="section-label">Experience</p>
    <h1>Work history</h1>
  </header>

  <div class="timeline">
    {#each positions as position, i}
      <article class="entry animate-fade-up" style="animation-delay: {0.05 + i * 0.07}s">
        <div class="entry-dot" class:current={position.isCurrent}></div>

        <div class="entry-card">
          <div class="entry-header">
            <div>
              <span class="entry-role">
                {position.role}
                {#if position.isCurrent}
                  <span class="current-tag">Current</span>
                {/if}
              </span>
            </div>
            <span class="entry-time">{position.time}</span>
          </div>

          <div class="entry-meta">
            <div class="entry-company">
              <img src={position.company.logo} alt={position.company.name} class="company-logo" />
              <a href={position.company.website} target="_blank" rel="noopener" style="color: inherit; text-decoration: none; hover:text-decoration: underline;">{position.company.name}</a>
            </div>
            <div class="entry-location">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              {position.location}
            </div>
          </div>

          <div class="tech-grid">
            {#if position.tech.backend && position.tech.backend.length > 0}
              <div class="tech-row">
                <span class="tech-category">Backend</span>
                <div class="tech-items">
                  {#each position.tech.backend as t}<Tech variant={t} />{/each}
                </div>
              </div>
            {/if}
            {#if position.tech.frontend && position.tech.frontend.length > 0}
              <div class="tech-row">
                <span class="tech-category">Frontend</span>
                <div class="tech-items">
                  {#each position.tech.frontend as t}<Tech variant={t} />{/each}
                </div>
              </div>
            {/if}
            {#if position.tech.tools && position.tech.tools.length > 0}
              <div class="tech-row">
                <span class="tech-category">Tools</span>
                <div class="tech-items">
                  {#each position.tech.tools as t}<Tech variant={t} />{/each}
                </div>
              </div>
            {/if}
          </div>
        </div>
      </article>
    {/each}
  </div>
</main>
