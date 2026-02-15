<style>
  .contact-page {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: calc(100dvh - 3.75rem);
  }

  .contact-inner {
    max-width: 700px;
    margin: 0 auto;
    padding: 4rem 1.5rem;
    width: 100%;
  }

  .contact-title {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: clamp(3rem, 10vw, 6.5rem);
    letter-spacing: -0.05em;
    line-height: 1.0;
    color: var(--c-text);
    margin-bottom: 0.5rem;
  }

  .contact-title span {
    color: var(--c-accent);
  }

  .contact-sub {
    font-size: 1rem;
    color: var(--c-text-muted);
    margin-bottom: 3rem;
    max-width: 38ch;
  }

  /* ── Contact links ──────────── */
  .contact-links {
    display: flex;
    flex-direction: column;
    gap: 0;
    border-top: 1px solid var(--c-border);
  }

  .contact-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem 0;
    border-bottom: 1px solid var(--c-border);
    text-decoration: none;
    color: var(--c-text);
    transition: color 0.15s;
  }

  .contact-link:hover {
    color: var(--c-accent);
  }

  .contact-link-left {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .contact-link-icon {
    width: 2.5rem;
    height: 2.5rem;
    background-color: var(--c-surface);
    border: 1px solid var(--c-border);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--c-text-muted);
    flex-shrink: 0;
    transition: background-color 0.15s, border-color 0.15s, color 0.15s;
  }

  .contact-link:hover .contact-link-icon {
    background-color: var(--c-surface-2);
    border-color: var(--c-border-2);
    color: var(--c-accent);
  }

  .contact-link-label {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 1.375rem;
    letter-spacing: -0.02em;
  }

  .contact-link-detail {
    font-family: 'DM Mono', monospace;
    font-size: 0.75rem;
    color: var(--c-text-muted);
    margin-top: 0.125rem;
  }

  .contact-link-arrow {
    font-size: 1.25rem;
    color: var(--c-text-muted);
    transition: transform 0.15s, color 0.15s;
  }

  .contact-link:hover .contact-link-arrow {
    transform: translate(4px, -4px);
    color: var(--c-accent);
  }
</style>

<main class="contact-page">
  <div class="contact-inner">
    <h1 class="contact-title animate-fade-up animate-fade-up-1">
      Let's<br><span>talk.</span>
    </h1>
    <p class="contact-sub animate-fade-up animate-fade-up-2">
      Reach out via email or connect on LinkedIn. Always happy to chat about
      engineering, security, or cool projects.
    </p>

    <div class="contact-links animate-fade-up animate-fade-up-3">
      <!-- Email -->
      <a href="mailto:alexander.k.nygard@gmail.com" class="contact-link">
        <div class="contact-link-left">
          <div class="contact-link-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </div>
          <div>
            <div class="contact-link-label">Email</div>
            <div class="contact-link-detail">alexander.k.nygard@gmail.com</div>
          </div>
        </div>
        <span class="contact-link-arrow">↗</span>
      </a>

      <!-- LinkedIn -->
      <a href="https://www.linkedin.com/in/alex-nygard/" target="_blank" rel="noopener" class="contact-link">
        <div class="contact-link-left">
          <div class="contact-link-icon">
            <i class="devicon-linkedin-plain" style="font-size: 1.125rem;"></i>
          </div>
          <div>
            <div class="contact-link-label">LinkedIn</div>
            <div class="contact-link-detail">linkedin.com/in/alex-nygard</div>
          </div>
        </div>
        <span class="contact-link-arrow">↗</span>
      </a>

      <!-- WhatsApp -->
      <a href="https://wa.me/4790016100" target="_blank" rel="noopener" class="contact-link">
        <div class="contact-link-left">
          <div class="contact-link-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          </div>
          <div>
            <div class="contact-link-label">WhatsApp</div>
            <div class="contact-link-detail">+47 900 16 100</div>
          </div>
        </div>
        <span class="contact-link-arrow">↗</span>
      </a>
    </div>
  </div>
</main>
