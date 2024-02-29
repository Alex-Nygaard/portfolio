<script lang="ts">
  import Project from '../../components/Project.svelte';
  import tudelftCampus from '$lib/images/tudelft-campus.jpeg';

  import quizzzImage from '$lib/images/projects/quizzz.png';
  import marketplaceImage from '$lib/images/projects/marketplace.png';
  import eeImage from '$lib/images/projects/ee.png';
  import portfolioImage from '$lib/images/projects/portfolio.png';
  import memoryImage from '$lib/images/projects/memory.png';
  import isaknowImage from '$lib/images/projects/isaknow.png';
  import bookInventoryImage from '$lib/images/projects/book-inventory.png';
  import martianImage from '$lib/images/projects/martian.jpg';
</script>

<div class="w-full flex flex-wrap items-center justify-center">
  <Project
    name="Quizzz app"
    description="A multiplayer desktop quiz application for raising awareness on energy consumption and sustainable consumer practices."
    image={quizzzImage}
    technologies={['java', 'spring']}
    link="https://github.com/Alex-Nygaard/OOPP-Quizzz"
    dates="September 2021 - February 2022"
  />
  <Project
    name="Marketplace platform"
    description="An online marketplace platform for buying and selling second-hand items with your peers."
    image={tudelftCampus}
    technologies={['python', 'flask', 'html', 'css', 'sqlite']}
    link="https://github.com/Alex-Nygaard/Marketplace-platform"
    dates="November 2020 - May 2021"
  />
  <Project
    name="A comparison study on detection of Deepfakes using ANNs"
    description="Extended Essay comparing 129 models from 3 different DL architectures (CNN, RNN, MLP)"
    image={eeImage}
    technologies={['python', 'tensorflow']}
    link="https://github.com/Alex-Nygaard/EE-Project"
    dates="February 2020 - September 2020"
  />
  <Project
    name="Portfolio"
    description="Portfolio website built with Svelte and TypeScript. Hosted on Heroku."
    image={portfolioImage}
    technologies={['svelte', 'typescript', 'tailwind', 'heroku']}
    link="https://github.com/Alex-Nygaard/portfolio"
    dates="December 2022 - present"
  />
  <Project
    name="Memory Game"
    description="A browser-based memory game, where users compete against each other to get the most correct pairs of images."
    image={memoryImage}
    technologies={['html', 'css', 'javascript', 'nodejs']}
    link="https://github.com/Alex-Nygaard/MemoryGame"
    dates="November 2021 - January 2022"
  />
  <Project
    name="Book inventory"
    description="A personal desktop book-keeping inventory system (with documentation of the case study)."
    image={bookInventoryImage}
    technologies={['python']}
    link="https://github.com/Alex-Nygaard/Book-Inventory"
    dates="December 2019 - March 2020"
  />
  <Project
    name="Martian IOT communication"
    description="A communication and translation system to communicate between the earth, moon and mars."
    image={martianImage}
    technologies={['cpp']}
    link="https://github.com/Alex-Nygaard/martianUnit2Project"
    dates="September 2019 - December 2019"
  />
</div>
