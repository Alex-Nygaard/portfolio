<script lang="ts">
  import { page } from '$app/stores';
  import '../app.pcss';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  function handleKeyDown(event: KeyboardEvent) {
    const tag = (event.target as HTMLElement)?.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;
    switch (event.key) {
      case 'h': goto('/'); break;
      case 'a': goto('/about'); break;
      case 'w': goto('/work'); break;
      case 'e': goto('/education'); break;
      case 'p': goto('/projects'); break;
      case 'c': goto('/contact'); break;
    }
  }

  onMount(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  let menuOpen = false;

  const navLinks = [
    { href: '/about',     label: 'About',     key: 'A' },
    { href: '/work',      label: 'Work',       key: 'W' },
    { href: '/education', label: 'Education',  key: 'E' },
    { href: '/projects',  label: 'Projects',   key: 'P' },
  ];
</script>

<div style="min-height: 100dvh; display: flex; flex-direction: column;">
  <header class="nav-header">
    <nav class="nav-inner">
      <!-- Logo -->
      <a href="/" class="nav-logo" aria-label="Home">{'<A/>'}</a>

      <!-- Desktop links -->
      <div class="nav-links-desktop">
        {#each navLinks as link}
          <a
            href={link.href}
            class="nav-link"
            class:active={$page.url.pathname === link.href}
          >
            {link.label}<span class="nav-key">{link.key.toLowerCase()}</span>
          </a>
        {/each}
        <a
          href="/contact"
          class="nav-contact-btn"
          class:active={$page.url.pathname === '/contact'}
        >
          Contact<span class="nav-key">c</span>
        </a>
      </div>

      <!-- Mobile burger -->
      <button
        class="nav-mobile-btn"
        on:click={() => (menuOpen = !menuOpen)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        {#if menuOpen}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        {:else}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        {/if}
      </button>
    </nav>

    <!-- Mobile dropdown -->
    {#if menuOpen}
      <div class="nav-mobile-menu">
        {#each navLinks as link}
          <a
            href={link.href}
            class="nav-mobile-link"
            on:click={() => (menuOpen = false)}
          >
            {link.label}
            <span class="nav-mobile-shortcut">{link.key}</span>
          </a>
        {/each}
        <a
          href="/contact"
          class="nav-mobile-link"
          on:click={() => (menuOpen = false)}
        >
          Contact
          <span class="nav-mobile-shortcut">C</span>
        </a>
      </div>
    {/if}
  </header>

  <slot />
</div>
