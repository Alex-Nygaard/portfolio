<script lang="ts">
  import tudelftCampus from '$lib/images/tudelft-campus.jpeg';
  import tudelftLogo from '$lib/images/tudelft-logo.png';
  import uwcisakCampus from '$lib/images/uwcisak-campus.jpeg';
  import uwcisakLogo from '$lib/images/uwcisak-logo.png';
  import kgCampus from '$lib/images/kg-campus.jpeg';
  import kgLogo from '$lib/images/kg-logo.png';
  import { CalendarDays, Icon, MapPin } from 'svelte-hero-icons';
  import * as Tabs from '$lib/components/ui/tabs';

  let years = ['2023-2024', '2022-2023', '2021-2022'];
  let subjects: { [key: string]: { quarter: string; courses: string[] }[] } = {
    '2023-2024': [
      {
        quarter: 'Q1',
        courses: ['Exchange Semester @ HKUST (HK)']
      },
      {
        quarter: 'Q2',
        courses: ['Exchange Semester @ HKUST (HK)']
      },
      {
        quarter: 'Q3 (now)',
        courses: ['Functional Programming', 'Collaborative AI', 'Human Computer Interaction']
      }
    ],
    '2022-2023': [
      {
        quarter: 'Q1',
        courses: ['Big Data Processing', 'Computer Graphics', 'Machine Learning']
      },
      {
        quarter: 'Q2',
        courses: ['Algorithm Design', 'Data Mining', 'Software Engineering Methods']
      },
      {
        quarter: 'Q3',
        courses: [
          'Automata Computability and Complexity',
          'Computational Intelligence',
          'Concepts of Programming Languages'
        ]
      },
      {
        quarter: 'Q4',
        courses: ['Software Project']
      }
    ],
    '2021-2022': [
      {
        quarter: 'Q1',
        courses: ['Computer Organisation', 'Object-oriented Programming', 'Reasoning and Logic']
      },
      {
        quarter: 'Q2',
        courses: ['Algorithms and Data Structures', 'Calculus', 'Web and Database Technology']
      },
      {
        quarter: 'Q3',
        courses: ['Information and Data Management', 'Linear Algebra', 'OOP Project']
      },
      {
        quarter: 'Q4',
        courses: [
          'Computer Networks',
          'Probability Theory and Statistics',
          'Software Quality and Testing'
        ]
      }
    ]
  };
</script>

<div class="w-full space-y-2">
  <div class="h-fit relative">
    <img
      src={tudelftCampus}
      alt="tudelft library"
      class="opacity-20 absolute left-0 top-0 w-full h-full object-cover object-center"
    />
    <div class="w-full relative p-8">
      <div class="flex justify-between">
        <div>
          <h1 class="text-4xl font-semibold">Technical University of Delft</h1>
          <h2 class="text-2xl font-medium">BSc Computer Science and Engineering</h2>
        </div>
        <div>
          <div class="flex space-x-2 text-md text-gray-300">
            <Icon src={CalendarDays} outline size="24" />
            <span>August 2021 - June 2024 (exp.)</span>
          </div>
          <div class="flex items-center space-x-1 text-md text-gray-300">
            <Icon src={MapPin} size="24" />
            <span>Delft, Netherlands</span>
          </div>
        </div>
      </div>

      <Tabs.Root value="2023-2024" class="w-full">
        <div class="space-x-3 my-3">
          {#each years as year}
            <Tabs.List>
              <Tabs.Trigger value={year}>
                <div class="flex space-x-2 items-center">
                  <!-- <Icon src={CalendarDays} outline size="18" /> -->
                  <span>{year}</span>
                </div>
              </Tabs.Trigger>
            </Tabs.List>
          {/each}
        </div>

        {#each years as year}
          <Tabs.Content value={year}>
            <div class="grid grid-cols-2 grid-rows-2 flex-col space-y-2 max-w-[45rem]">
              {#each subjects[year] as { quarter, courses }}
                <div class="flex items-center">
                  <h3 class="text-md font-semibold w-16">{quarter}</h3>
                  <div class="flex flex-col">
                    {#each courses as course}
                      <span>{course}</span>
                    {/each}
                  </div>
                </div>
                <!-- <Accordion.Root>
                  <Accordion.Item value={quarter}>
                    <Accordion.Trigger>
                      <div class="flex space-x-2 items-center">
                        <Icon src={CalendarDays} outline size="18" />
                        <span>{quarter}</span>
                      </div>
                    </Accordion.Trigger>
                    <Accordion.Content>
                      <ul class="list-disc list-inside">
                        {#each courses as course}
                          <li>{course}</li>
                        {/each}
                      </ul>
                    </Accordion.Content>
                  </Accordion.Item>
                </Accordion.Root> -->
              {/each}
            </div>
          </Tabs.Content>
        {/each}
      </Tabs.Root>
      <div class="flex justify-end">
        <a href="https://tudelft.nl/en">
          <img
            src={tudelftLogo}
            alt="tudelft logo"
            class="w-32 h-auto relative hover:scale-110 transition-all"
          />
        </a>
      </div>
    </div>
  </div>
  <div class="h-fit relative">
    <img
      src={uwcisakCampus}
      alt="uwc isak campus"
      class="opacity-20 absolute left-0 top-0 w-full h-full object-cover object-center"
    />
    <div class="w-full relative p-8">
      <div class="flex justify-between">
        <div>
          <h1 class="text-4xl font-semibold">UWC ISAK Japan</h1>
          <h2 class="text-2xl font-medium">International Baccalaureate Diploma</h2>
        </div>
        <div>
          <div class="flex space-x-2 text-md text-gray-300">
            <Icon src={CalendarDays} outline size="24" />
            <span>August 2019 - May 2021</span>
          </div>
          <div class="flex items-center space-x-1 text-md text-gray-300">
            <Icon src={MapPin} size="24" />
            <span>Karuizawa, Japan</span>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-between items-center">
        <div class="my-3 grid grid-rows-2 grid-cols-[min-content_1fr] gap-2">
          <span class="flex items-center w-32">Higher Levels</span>
          <span>Computer Science, Math AA, Global Politics</span>
          <span class="flex items-center w-32">Standard Levels</span>
          <span>Physics, English LL, Norwegian</span>
        </div>
        <div class="flex justify-end">
          <a href="https://uwcisak.jp/">
            <img
              src={uwcisakLogo}
              alt="uwcisak logo"
              class="w-32 h-auto relative hover:scale-110 transition-all"
            />
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="h-fit relative">
    <img
      src={kgCampus}
      alt="uwc isak campus"
      class="opacity-20 absolute left-0 top-0 w-full h-full object-cover object-center"
    />
    <div class="w-full relative p-8">
      <div class="flex justify-between">
        <div>
          <h1 class="text-4xl font-semibold">Kristelig Gymnasium</h1>
          <h2 class="text-2xl font-medium">Certificate of Competence</h2>
        </div>
        <div>
          <div class="flex space-x-2 text-md text-gray-300">
            <Icon src={CalendarDays} outline size="24" />
            <span>August 2018 - June 2019</span>
          </div>
          <div class="flex items-center space-x-1 text-md text-gray-300">
            <Icon src={MapPin} size="24" />
            <span>Oslo, Norway</span>
          </div>
        </div>
      </div>
      <div class="flex justify-end">
        <a href="https://www.kg.vgs.no/">
          <img
            src={kgLogo}
            alt="uwcisak logo"
            class="w-24 h-auto relative hover:scale-110 transition-all"
          />
        </a>
      </div>
    </div>
  </div>
</div>
