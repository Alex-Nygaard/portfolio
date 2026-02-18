<style>
  .home {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: calc(100dvh - 3.75rem);
    position: relative;
    overflow: hidden;
  }

  /* Decorative background glow */
  .home::before {
    content: '';
    position: absolute;
    top: -20%;
    right: -10%;
    width: 55%;
    height: 70%;
    background: radial-gradient(ellipse at center, rgba(59,130,246,0.07) 0%, rgba(29,78,216,0.04) 50%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }

  .hero {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 1.5rem 3rem;
    width: 100%;
  }

  .hero-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'DM Mono', monospace;
    font-size: 0.8125rem;
    color: var(--c-text-muted);
    letter-spacing: 0.04em;
    margin-bottom: 1.5rem;
  }

  .eyebrow-indicator {
    width: 0.5rem;
    height: 0.5rem;
    background-color: var(--c-accent);
    border-radius: 50%;
    box-shadow: 0 0 8px var(--c-accent);
    animation: pulse 2.5s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  .hero-title {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    line-height: 1.0;
    letter-spacing: -0.04em;
    margin-bottom: 2rem;
  }

  .hero-hi {
    display: block;
    font-size: clamp(2.5rem, 7vw, 5rem);
    color: var(--c-text-muted);
    font-weight: 600;
  }

  .hero-name {
    display: block;
    font-size: clamp(4rem, 14vw, 9.5rem);
    color: var(--c-text);
  }

  .hero-dot {
    color: var(--c-accent);
  }

  .hero-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.625rem;
    margin-bottom: 2.25rem;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 3rem;
  }

  .hero-actions-sep {
    width: 1px;
    height: 2rem;
    background-color: var(--c-border-2);
    margin: 0 0.125rem;
  }

  .btn-social {
    width: 2.5rem;
    height: 2.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: var(--c-surface);
    border: 1px solid var(--c-border);
    border-radius: 0.5rem;
    color: var(--c-text-muted);
    text-decoration: none;
    transition: background-color 0.15s, border-color 0.15s, color 0.15s, transform 0.15s;
    flex-shrink: 0;
  }

  .btn-social:hover {
    background-color: var(--c-surface-2);
    border-color: var(--c-border-2);
    color: var(--c-text);
    transform: translateY(-2px);
  }

  .hero-divider {
    height: 1px;
    background: linear-gradient(to right, var(--c-border-2), var(--c-border), transparent);
    margin-bottom: 2rem;
    max-width: 640px;
  }

  .hero-nav {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
    max-width: 640px;
  }

  @media (min-width: 480px) {
    .hero-nav {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  .hero-nav-item {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding: 0.875rem 1rem;
    background-color: var(--c-surface);
    border: 1px solid var(--c-border);
    border-radius: 0.5rem;
    text-decoration: none;
    transition: background-color 0.15s, border-color 0.15s, transform 0.15s;
  }

  .hero-nav-item:hover {
    background-color: var(--c-surface-2);
    border-color: var(--c-border-2);
    transform: translateY(-2px);
  }

  .hero-nav-num {
    font-family: 'DM Mono', monospace;
    font-size: 0.6875rem;
    color: var(--c-text-muted);
    letter-spacing: 0.05em;
  }

  .hero-nav-label {
    font-family: 'Syne', sans-serif;
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--c-text);
  }

  .hero-nav-arrow {
    font-size: 0.875rem;
    color: var(--c-accent);
    transition: transform 0.15s;
  }

  .hero-nav-item:hover .hero-nav-arrow {
    transform: translateX(3px);
  }
</style>

<main class="home">
  <section class="hero">
    <p class="hero-eyebrow animate-fade-up animate-fade-up-1">
      <span class="eyebrow-indicator"></span>
      Software Engineer · MSc Security & Cloud Computing
    </p>

    <h1 class="hero-title animate-fade-up animate-fade-up-2">
      <span class="hero-hi">Hi, I'm</span>
      <span class="hero-name">Alex<span class="hero-dot">.</span></span>
    </h1>

    <div class="hero-pills animate-fade-up animate-fade-up-3">
      <span class="status-pill">
        <span class="pill-dot pill-dot--green"></span>
        SWE Apprentice · Ardoq
      </span>
      <span class="status-pill">
        <span class="pill-dot pill-dot--blue"></span>
        MSc SECCLO · DTU
      </span>
    </div>

    <div class="hero-actions animate-fade-up animate-fade-up-4">
      <a
        href="https://sharing-with-alex.s3.eu-north-1.amazonaws.com/files/CV_alexander-nygaard.pdf+"
        target="_blank"
        class="btn-outline"
      >
        Download CV
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
      </a>
      <a href="/contact" class="btn-primary">
        Get in touch
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
      </a>
      <span class="hero-actions-sep" aria-hidden="true"></span>
      <a
        href="https://github.com/alexandernygard"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-social"
        aria-label="GitHub profile"
      >
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      </a>
      <a
        href="https://www.linkedin.com/in/alexandernygard/"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-social"
        aria-label="LinkedIn profile"
      >
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
      </a>
    </div>

    <div class="hero-divider animate-fade-up animate-fade-up-5"></div>

    <nav class="hero-nav animate-fade-up animate-fade-up-6" aria-label="Explore">
      <a href="/about" class="hero-nav-item">
        <span class="hero-nav-num">01</span>
        <span class="hero-nav-label">About</span>
        <span class="hero-nav-arrow">→</span>
      </a>
      <a href="/work" class="hero-nav-item">
        <span class="hero-nav-num">02</span>
        <span class="hero-nav-label">Work</span>
        <span class="hero-nav-arrow">→</span>
      </a>
      <a href="/education" class="hero-nav-item">
        <span class="hero-nav-num">03</span>
        <span class="hero-nav-label">Education</span>
        <span class="hero-nav-arrow">→</span>
      </a>
      <a href="/projects" class="hero-nav-item">
        <span class="hero-nav-num">04</span>
        <span class="hero-nav-label">Projects</span>
        <span class="hero-nav-arrow">→</span>
      </a>
    </nav>
  </section>
</main>
