<script lang="ts">
  import SchoolList from '$components/schools/SchoolList.svelte';
</script>

<style>
  .education-page {
    max-width: 1100px;
    margin: 0 auto;
    padding: 3rem 1.5rem 5rem;
  }

  .page-header {
    margin-bottom: 3.5rem;
  }

  .page-header h1 {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: clamp(2.5rem, 6vw, 4rem);
    letter-spacing: -0.04em;
    color: var(--c-text);
    line-height: 1.05;
  }
</style>

<main class="education-page">
  <header class="page-header animate-fade-up animate-fade-up-1">
    <p class="section-label" style="margin-bottom: 0.625rem;">Education</p>
    <h1>Academic<br>background.</h1>
  </header>
  <SchoolList />
</main>
