<script lang="ts">
  import Project from '../../components/Project.svelte';
  import tudelftCampus from '$lib/images/campuses/tudelft.jpeg';
  import quizzzImage from '$lib/images/projects/quizzz.png';
  import eeImage from '$lib/images/projects/ee.png';
  import portfolioImage from '$lib/images/projects/portfolio.png';
  import memoryImage from '$lib/images/projects/memory.png';
  import bookInventoryImage from '$lib/images/projects/book-inventory.png';
  import martianImage from '$lib/images/projects/martian.jpg';
</script>

<style>
  .projects-page {
    max-width: 1100px;
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

  .projects-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  @media (min-width: 560px) {
    .projects-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 900px) {
    .projects-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>

<main class="projects-page">
  <header class="page-header animate-fade-up animate-fade-up-1">
    <p class="section-label">Portfolio</p>
    <h1>Past projects</h1>
  </header>

  <div class="projects-grid">
    <div class="animate-fade-up animate-fade-up-2">
      <Project
        name="Quizzz app"
        description="A multiplayer desktop quiz application for raising awareness on energy consumption and sustainable consumer practices."
        image={quizzzImage}
        technologies={['java', 'spring']}
        link="https://github.com/Alex-Nygaard/OOPP-Quizzz"
        dates="Sep 2021 – Feb 2022"
      />
    </div>
    <div class="animate-fade-up animate-fade-up-2" style="animation-delay: 0.1s">
      <Project
        name="Marketplace platform"
        description="An online marketplace platform for buying and selling second-hand items with your peers."
        image={tudelftCampus}
        technologies={['python', 'flask', 'html', 'css', 'sqlite']}
        link="https://github.com/Alex-Nygaard/Marketplace-platform"
        dates="Nov 2020 – May 2021"
      />
    </div>
    <div class="animate-fade-up animate-fade-up-2" style="animation-delay: 0.15s">
      <Project
        name="Deepfake detection study"
        description="Extended Essay comparing 129 models from 3 different deep learning architectures (CNN, RNN, MLP)."
        image={eeImage}
        technologies={['python', 'tensorflow']}
        link="https://github.com/Alex-Nygaard/EE-Project"
        dates="Feb – Sep 2020"
      />
    </div>
    <div class="animate-fade-up animate-fade-up-2" style="animation-delay: 0.2s">
      <Project
        name="Portfolio"
        description="Portfolio website built with SvelteKit and TypeScript. Deployed on Cloudflare."
        image={portfolioImage}
        technologies={['svelte', 'typescript', 'tailwind']}
        link="https://github.com/Alex-Nygaard/portfolio"
        dates="Dec 2022 – present"
      />
    </div>
    <div class="animate-fade-up animate-fade-up-2" style="animation-delay: 0.25s">
      <Project
        name="Memory Game"
        description="A browser-based memory game where users compete against each other to match the most pairs."
        image={memoryImage}
        technologies={['html', 'css', 'javascript', 'nodejs']}
        link="https://github.com/Alex-Nygaard/MemoryGame"
        dates="Nov 2021 – Jan 2022"
      />
    </div>
    <div class="animate-fade-up animate-fade-up-2" style="animation-delay: 0.3s">
      <Project
        name="Book inventory"
        description="A personal desktop book-keeping inventory system with a documented case study."
        image={bookInventoryImage}
        technologies={['python']}
        link="https://github.com/Alex-Nygaard/Book-Inventory"
        dates="Dec 2019 – Mar 2020"
      />
    </div>
    <div class="animate-fade-up animate-fade-up-2" style="animation-delay: 0.35s">
      <Project
        name="Martian IOT communication"
        description="A communication and translation system for messaging between Earth, Moon, and Mars."
        image={martianImage}
        technologies={['cpp']}
        link="https://github.com/Alex-Nygaard/martianUnit2Project"
        dates="Sep – Dec 2019"
      />
    </div>
  </div>
</main>
