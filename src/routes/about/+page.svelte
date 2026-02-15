<script>
  import pfpSource from '$lib/images/pfp-transparent.png';
  import Tech from '$components/tech/Tech.svelte';

  let languages = [
    'python', 'java', 'javascript', 'typescript', 'svelte',
    'go', 'scala', 'clojure', 'haskell', 'html', 'css',
  ].sort();

  let frameworks = [
    'react', 'sveltekit', 'nodejs', 'express',
    'flask', 'spring', 'tensorflow', 'pytorch',
  ].sort();

  let tools = [
    'postgresql', 'prisma', 'mongodb', 'redis',
    'aws', 'azure', 'docker', 'github', 'gitlab', 'jira', 'gcp',
  ].sort();
</script>

<style>
  .about-page {
    max-width: 1100px;
    margin: 0 auto;
    padding: 3rem 1.5rem 4rem;
  }

  /* ── Header ───────────────────── */
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
  }

  /* ── Two-column layout ─────────── */
  .about-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  @media (min-width: 768px) {
    .about-grid {
      grid-template-columns: 280px 1fr;
      align-items: start;
    }
  }

  /* ── Profile column ────────────── */
  .profile-col {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .profile-photo-wrap {
    border-radius: 0.75rem;
    overflow: hidden;
    background-color: var(--c-surface);
    border: 1px solid var(--c-border);
    aspect-ratio: 4 / 5;
  }

  .profile-photo-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    display: block;
  }

  .info-card {
    background-color: var(--c-surface);
    border: 1px solid var(--c-border);
    border-radius: 0.625rem;
    padding: 1rem 1.125rem;
  }

  .info-card-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.375rem;
  }

  .info-card-icon {
    color: var(--c-text-muted);
    flex-shrink: 0;
  }

  .info-card-title {
    font-family: 'Syne', sans-serif;
    font-weight: 600;
    font-size: 0.9375rem;
    color: var(--c-text);
    line-height: 1.3;
  }

  .info-card-sub {
    font-size: 0.8125rem;
    color: var(--c-text-muted);
    margin-bottom: 0.625rem;
  }

  .info-card-date {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    font-family: 'DM Mono', monospace;
    font-size: 0.6875rem;
    color: var(--c-text-muted);
    margin-bottom: 0.5rem;
  }

  .progress-bar-track {
    height: 3px;
    background-color: var(--c-border-2);
    border-radius: 9999px;
    overflow: hidden;
  }

  .progress-bar-fill {
    height: 100%;
    border-radius: 9999px;
    background: linear-gradient(to right, #1d4ed8, #60a5fa);
    transition: width 0.8s ease;
  }

  .current-badge {
    display: inline-block;
    font-family: 'DM Mono', monospace;
    font-size: 0.625rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--c-accent);
    background-color: rgba(59, 130, 246, 0.1);
    border: 1px solid rgba(59, 130, 246, 0.25);
    padding: 0.1rem 0.45rem;
    border-radius: 9999px;
    margin-left: 0.375rem;
    vertical-align: middle;
  }

  /* ── Content column ────────────── */
  .content-col {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .bio-text {
    font-size: 1.0625rem;
    line-height: 1.7;
    color: var(--c-text-muted);
    max-width: 56ch;
  }

  /* ── Tech stack ────────────────── */
  .tech-section h2 {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--c-text);
    letter-spacing: -0.02em;
    margin-bottom: 1.25rem;
  }

  .tech-group {
    margin-bottom: 1.5rem;
  }

  .tech-group:last-child {
    margin-bottom: 0;
  }

  .tech-group-label {
    font-family: 'DM Mono', monospace;
    font-size: 0.6875rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--c-text-muted);
    margin-bottom: 0.625rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .tech-group-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: var(--c-border);
  }

  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
</style>

<main class="about-page">
  <header class="page-header animate-fade-up animate-fade-up-1">
    <p class="section-label" style="margin-bottom: 0.625rem;">About me</p>
    <h1>Software engineer,<br>builder &amp; tinkerer.</h1>
  </header>

  <div class="about-grid">
    <!-- Left: photo + status cards -->
    <aside class="profile-col animate-fade-up animate-fade-up-2">
      <div class="profile-photo-wrap">
        <img src={pfpSource} alt="Alex Nygaard" />
      </div>

      <!-- SECCLO -->
      <div class="info-card">
        <div class="info-card-header">
          <svg class="info-card-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
          <span class="info-card-title">SECCLO Joint Master's</span>
        </div>
        <div class="info-card-sub">Security &amp; Cloud Computing · DTU</div>
        <div class="info-card-date">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
          Sep 2024 – Jun 2026 (exp.) · Year 2
        </div>
        <div class="progress-bar-track">
          <div class="progress-bar-fill" style="width: 80%"></div>
        </div>
      </div>

      <!-- Ardoq -->
      <div class="info-card">
        <div class="info-card-header">
          <svg class="info-card-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          <span class="info-card-title">Ardoq <span class="current-badge">Current</span></span>
        </div>
        <div class="info-card-sub">Software Engineering Apprentice</div>
        <div class="info-card-date">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
          Sep 2024 – Present
        </div>
        <div class="progress-bar-track">
          <div class="progress-bar-fill" style="width: 100%"></div>
        </div>
      </div>
    </aside>

    <!-- Right: bio + tech -->
    <div class="content-col">
      <div class="animate-fade-up animate-fade-up-3">
        <p class="bio-text">
          Security and Cloud Computing student in my second year at DTU, Denmark.
          I like working with backend technologies, cloud infrastructure, and exploring
          machine learning topics. Currently apprenticing at Ardoq in Oslo, where I work
          with Clojure, TypeScript, and React.
        </p>
      </div>

      <section class="tech-section animate-fade-up animate-fade-up-4">
        <h2>Things I work with</h2>

        <div class="tech-group">
          <div class="tech-group-label">Languages</div>
          <div class="tech-tags">
            {#each languages as lang}
              <Tech variant={lang} />
            {/each}
          </div>
        </div>

        <div class="tech-group">
          <div class="tech-group-label">Frameworks</div>
          <div class="tech-tags">
            {#each frameworks as fw}
              <Tech variant={fw} />
            {/each}
          </div>
        </div>

        <div class="tech-group">
          <div class="tech-group-label">Tools & Cloud</div>
          <div class="tech-tags">
            {#each tools as tool}
              <Tech variant={tool} />
            {/each}
          </div>
        </div>
      </section>
    </div>
  </div>
</main>
