<script>
  import pfpSource from '$lib/images/pfp-transparent.png';
  import {
    Icon,
    AcademicCap,
    BookOpen,
    CalendarDays,
    Briefcase,
    Language,
    Wrench,
    CubeTransparent
  } from 'svelte-hero-icons';
  import Progress from '$lib/components/ui/progress/progress.svelte';
  import { Separator } from '$lib/components/ui/separator';
  // <span>Python</span>
  //     <span>Java</span>
  //     <span>JavaScript</span>
  //     <span>TypeScript</span>
  //     <span>Svelte</span>
  //     <span>Go</span>
  //     <span>Scala</span>
  //     <span>PostgreSQL</span>
  //     <span>Prisma</span>
  //     <span>MongoDB</span>
  //     <span>HTML</span>
  //     <span>CSS</span>
  //     <span>React</span>
  //     <span>Vue</span>
  //     <span>Node.js</span>
  //     <span>Express</span>
  //     <span>Flask</span>
  //     <span>Spring</span>
  //     <span>TensorFlow</span>
  //     <span>AWS</span>
  //     <span>Azure</span>
  //     <span>Docker</span>
  let technologies = [
    {
      name: 'Python',
      value: 90
    },
    {
      name: 'Java',
      value: 90
    },
    {
      name: 'JavaScript',
      value: 90
    },
    {
      name: 'TypeScript',
      value: 90
    },
    {
      name: 'Svelte',
      value: 90
    },
    {
      name: 'Go',
      value: 90
    },
    {
      name: 'Scala',
      value: 90
    },
    {
      name: 'PostgreSQL',
      value: 90
    },
    {
      name: 'Prisma',
      value: 90
    },
    {
      name: 'MongoDB',
      value: 90
    },
    {
      name: 'HTML',
      value: 90
    },
    {
      name: 'CSS',
      value: 90
    },
    {
      name: 'React',
      value: 90
    },
    {
      name: 'Vue',
      value: 90
    },
    {
      name: 'Node.js',
      value: 90
    },
    {
      name: 'Express',
      value: 90
    },
    {
      name: 'Flask',
      value: 90
    },
    {
      name: 'Spring',
      value: 90
    },
    {
      name: 'TensorFlow',
      value: 90
    },
    {
      name: 'AWS',
      value: 90
    },
    {
      name: 'Azure',
      value: 90
    },
    {
      name: 'Docker',
      value: 90
    }
  ];
</script>

<div class="flex items-center justify-center p-10 h-[calc(100vh-6rem)]">
  <div
    class="flex flex-row items-center justify-between bg-slate-900 shadow-lg rounded-lg overflow-hidden w-11/12"
  >
    <div class="flex flex-col p-8 w-3/4">
      <h2 class="text-2xl font-semibold">About Me</h2>
      <p class="mt-2 text-gray-400">
        Computer Science student at the Technical University of Delft. I like
      </p>
      <div class="flex flex-wrap">
        <div class="bg-gray-800 w-fit p-3 space-y-2 rounded-lg text-md m-4">
          <div class="flex space-x-2">
            <Icon src={AcademicCap} outline size="24" />
            <span>Technical University of Delft</span>
          </div>
          <div class="flex space-x-2 text-gray-300">
            <!-- <Icon src={BookOpen} outline size="24" /> -->
            <span>Computer Science and Engineering</span>
          </div>
          <div class="flex space-x-2 justify-end text-xs text-gray-400">
            <Icon src={CalendarDays} outline size="16" />
            <span>August 2021 - June 2024 (exp.)</span>
          </div>
          <Progress value={83} max={100} class="h-1 my-1" />
        </div>
        <div class="bg-gray-800 w-fit p-3 space-y-2 rounded-lg text-md m-4">
          <div class="flex space-x-2">
            <Icon src={Briefcase} outline size="24" />
            <span>Hammer Market Intelligence</span>
          </div>
          <div class="flex space-x-2 text-gray-300">
            <!-- <Icon src={BookOpen} outline size="24" /> -->
            <span>Junior Data Scientist</span>
          </div>
          <div class="flex space-x-2 justify-end text-xs text-gray-400">
            <Icon src={CalendarDays} outline size="16" />
            <span>March 2023 - present</span>
          </div>
          <Progress value={100} max={100} class="h-1 my-1" />
        </div>
      </div>

      <div class="flex flex-col w-5/6">
        <h1 class="text-xl font-semibold py-3">What's in my brain</h1>
        <div class="flex space-x-2 items-center text-lg">
          <Icon src={Language} outline size="18" />
          <span>Languages</span>
        </div>
        <div>
          <span>Python</span>
          <span>Java</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
        </div>
        <span>Python</span>
        <span>Java</span>
        <div class="flex space-x-2 items-center text-lg">
          <Icon src={CubeTransparent} outline size="18" />
          <span>Frameworks</span>
        </div>
        <div class="flex space-x-2 items-center text-lg">
          <Icon src={Wrench} outline size="18" />
          <span>Tools</span>
        </div>

        <!-- {#each technologies as tech}
          <div class="flex items-center justify-between w-1/2 pr-8">
            <span>{tech.name}</span>
            <Progress value={tech.value} max={100} class="h-1 w-1/2" />
          </div>
        {/each} -->
      </div>
    </div>
    <div class="w-64 h-64">
      <img src={pfpSource} alt="Profile" class="object-cover w-full h-full" />
    </div>
  </div>
</div>
