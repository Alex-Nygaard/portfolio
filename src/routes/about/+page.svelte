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
    CubeTransparent,
  } from 'svelte-hero-icons';
  import Progress from '$lib/components/ui/progress/progress.svelte';
  import { Separator } from '$lib/components/ui/separator';
  import * as Tabs from '$lib/components/ui/tabs';
  import Tech from '../../components/Tech.svelte';

  let languages = [
    'python',
    'java',
    'javascript',
    'typescript',
    'svelte',
    'go',
    'scala',
    'html',
    'css',
  ];
  let frameworks = ['react', 'svelte', 'nodejs', 'express', 'flask', 'spring'];
  let tools = ['postgresql', 'prisma', 'mongodb', 'tensorflow', 'aws', 'azure', 'docker'];
</script>

<div class="flex items-center justify-center p-10">
  <div
    class="flex flex-wrap min-[900px]:flex-nowrap justify-center min-[900px]:justify-evenly items-center bg-gray-900 shadow-lg rounded-lg overflow-hidden max-w-full"
  >
    <div class="h-full flex-shrink-0">
      <img src={pfpSource} alt="Profile" class="w-96 h-auto" />
      <!-- TODO: replace with https://sharing-with-alex.s3.eu-north-1.amazonaws.com/images/pfp-transparent.png-->
    </div>
    <div class="flex flex-col min-w-80 p-5 max-w-[46rem]">
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
            <!-- <Icon src={BookOpen} outline size="24" /> -->
            <span>Security and Cloud Computing</span>
          </div>
          <div class="flex space-x-2 justify-end text-xs text-gray-400">
            <Icon src={CalendarDays} outline size="16" />
            <span>September 2024 - June 2026 (exp.)</span>
          </div>
          <Progress value={5} max={100} class="h-1 my-1" />
        </div>
        <div class="bg-gray-800 w-72 p-3 space-y-2 rounded-lg text-md m-2">
          <div class="flex space-x-2">
            <Icon src={Briefcase} outline size="24" />
            <span>Ardoq</span>
          </div>
          <div class="flex space-x-2 text-gray-300">
            <!-- <Icon src={BookOpen} outline size="24" /> -->
            <span>Software Engineering Intern</span>
          </div>
          <div class="flex space-x-2 justify-end text-xs text-gray-400">
            <Icon src={CalendarDays} outline size="16" />
            <span>July 2024 - August 2024 (exp.)</span>
          </div>
          <Progress value={50} max={100} class="h-1 my-1" />
        </div>
      </div>

      <div class="flex flex-col font-hack h-48 w-full">
        <h1 class="text-lg font-semibold py-3 font-sans">🧠 Some stuff I know</h1>
        <Tabs.Root value="languages" class="">
          <Tabs.List>
            <Tabs.Trigger value="languages">
              <div class="flex space-x-2 items-center">
                <Icon src={Language} outline size="18" />
                <span>Languages</span>
              </div>
            </Tabs.Trigger>
            <Tabs.Trigger value="frameworks">
              <div class="flex space-x-2 items-center">
                <Icon src={CubeTransparent} outline size="18" />
                <span>Frameworks</span>
              </div>
            </Tabs.Trigger>
            <Tabs.Trigger value="tools">
              <div class="flex space-x-2 items-center">
                <Icon src={Wrench} outline size="18" />
                <span>Tools</span>
              </div>
            </Tabs.Trigger>
          </Tabs.List>
          <div class="p-2 max-w-[38rem]">
            <Tabs.Content value="languages">
              <div class="text-gray-300 flex flex-wrap">
                {#each languages as lang}
                  <Tech variant={lang} />
                {/each}
              </div>
            </Tabs.Content>
            <Tabs.Content value="frameworks">
              <div class="text-gray-300 flex flex-wrap">
                {#each frameworks as fw}
                  <Tech variant={fw} />
                {/each}
              </div>
            </Tabs.Content>
            <Tabs.Content value="tools">
              <div class="text-gray-300 flex flex-wrap">
                {#each tools as tool}
                  <Tech variant={tool} />
                {/each}
              </div>
            </Tabs.Content>
          </div>
        </Tabs.Root>
      </div>
    </div>
  </div>
</div>
