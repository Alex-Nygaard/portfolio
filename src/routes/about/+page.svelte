<script>
  import pfpSource from '$lib/images/pfp-transparent.png';
  import {
    Icon,
    AcademicCap,
    CalendarDays,
    Briefcase,
    Language,
    Wrench,
    CubeTransparent,
    BookOpen,
  } from 'svelte-hero-icons';
  import Progress from '$lib/components/ui/progress/progress.svelte';
  import * as Tabs from '$lib/components/ui/tabs';
  import Tech from '$components/tech/Tech.svelte';
  import TechContainer from '$components/tech/TechContainer.svelte';
  import TechCategories from '$components/tech/TechCategories.svelte';
  import TechCategorySeparator from '$components/tech/TechCategorySeparator.svelte';

  let languages = [
    'python',
    'java',
    'javascript',
    'typescript',
    'svelte',
    'go',
    'scala',
    'clojure',
    'haskell',
    'html',
    'css',
  ].sort();
  let frameworks = [
    'react',
    'sveltekit',
    'nodejs',
    'express',
    'flask',
    'spring',
    'tensorflow',
    'pytorch',
  ].sort();
  let tools = [
    'postgresql',
    'prisma',
    'mongodb',
    'redis',
    'aws',
    'azure',
    'docker',
    'github',
    'gitlab',
    'jira',
    'gcp',
  ].sort();
</script>

<div class="flex items-center justify-center p-10 flex-grow">
  <div
    class="flex flex-wrap min-[900px]:flex-nowrap justify-center min-[900px]:justify-evenly items-center bg-gray-900 shadow-lg rounded-lg overflow-hidden max-w-full"
  >
    <div class="h-full flex-shrink-0">
      <img src={pfpSource} alt="Profile" class="w-96 h-auto" />
      <!-- TODO: replace with https://sharing-with-alex.s3.eu-north-1.amazonaws.com/images/pfp-transparent.png-->
    </div>
    <div class="flex flex-col min-w-80 p-5 max-w-[46rem] gap-2">
      <h2 class="text-2xl font-semibold">About Me</h2>
      <p class="text-gray-400 min-w-0">
        Security and Cloud Computing student at Aalto University. I like working with backend
        technologies, learning about cloud infrastructure and exploring machine learning topics.
      </p>
      <div class="flex flex-wrap justify-center">
        <div class="bg-gray-800 w-72 p-3 space-y-2 rounded-lg text-md m-2">
          <div class="flex space-x-2">
            <Icon src={AcademicCap} outline size="24" />
            <span>SECCLO Joint Master's Degree</span>
          </div>
          <div class="flex space-x-2 text-gray-300">
            <span>Security and Cloud Computing</span>
          </div>
          <div class="flex space-x-2 justify-end text-xs text-gray-400">
            <Icon src={CalendarDays} outline size="16" />
            <span>September 2024 - June 2026 (exp.)</span>
          </div>
          <Progress value={40} max={100} class="h-1 my-1" />
        </div>
        <div class="bg-gray-800 w-72 p-3 space-y-2 rounded-lg text-md m-2">
          <div class="flex space-x-2">
            <Icon src={Briefcase} outline size="24" />
            <span>Ardoq</span>
          </div>
          <div class="flex space-x-2 text-gray-300">
            <span>Software Engineering Apprentice</span>
          </div>
          <div class="flex space-x-2 justify-end text-xs text-gray-400">
            <Icon src={CalendarDays} outline size="16" />
            <span>September 2024 - Present</span>
          </div>
          <Progress value={100} max={100} class="h-1 my-1" />
        </div>
      </div>

      <div class="flex flex-col font-hack h-fit w-full">
        <h1 class="text-xl font-semibold py-3 font-sans text-center">🧠 Some stuff I know</h1>

        <TechCategories>
          <TechCategorySeparator header="📚 Languages" />
          <TechContainer>
            {#each languages as language}
              <Tech variant={language} />
            {/each}
          </TechContainer>
          <TechCategorySeparator header="🧩 Frameworks" />
          <TechContainer>
            {#each frameworks as framework}
              <Tech variant={framework} />
            {/each}
          </TechContainer>
          <TechCategorySeparator header="🛠️ Tools" />
          <TechContainer>
            {#each tools as tool}
              <Tech variant={tool} />
            {/each}
          </TechContainer>
        </TechCategories>
      </div>
    </div>
  </div>
</div>
