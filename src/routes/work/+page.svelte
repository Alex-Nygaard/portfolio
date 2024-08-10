<script lang="ts">
  import * as Avatar from '$lib/components/ui/avatar';
  import Badge from '$lib/components/ui/badge/badge.svelte';
  import * as Card from '$lib/components/ui/card';
  import { CalendarDays, Icon } from 'svelte-hero-icons';

  import { MapPin, AtSymbol } from 'svelte-hero-icons';
  import Tech from '../../components/Tech.svelte';

  const works = [
    {
      role: 'Software Engineering Intern',
      current: true,
      company: 'Ardoq',
      location: 'Oslo, Norway',
      tech: {
        backend: ['clojure', 'redis', 'openai', 'docker'],
        frontend: ['react', 'typescript', 'javascript'],
      },
      time: 'April 2024 - June 2024 (3 months)',
      companyWebsite: '',
      companyAvatarLink: '',
    },
    {
      role: 'Backend Developer (Working Student)',
      current: false,
      company: 'Picnic Technologies',
      location: 'Amsterdam, Netherlands',
      tech: {
        backend: ['java'],
        frontend: [],
      },
      time: 'April 2024 - June 2024 (3 months)',
      companyWebsite: '',
      companyAvatarLink: '',
    },
    {
      role: 'Junior Data Scientist',
      current: false,
      company: 'Hammer Market Intelligence',
      location: 'Arnhem, Netherlands (hybrid)',
      tech: {
        backend: ['python', 'flask', 'selenium', 'docker'],
        frontend: ['typescript', 'react'],
      },
      time: 'April 2023 - April 2024 (1 year)',
      companyWebsite: 'https://www.hammer-intel.com/',
      companyAvatarLink:
        'https://pbs.twimg.com/profile_images/1069955395794464768/nk8aLWb1_400x400.jpg',
    },
    {
      role: 'Full-Stack Software Engineering Intern',
      current: false,
      company: 'Vera Connect',
      location: 'Rotterdam, Netherlands',
      tech: {
        backend: ['typescript', 'nodejs', 'prisma', 'postgresql', 'docker'],
        frontend: ['typescript', 'react', 'reactnative'],
      },
      time: 'April 2023 - June 2023 (3 months)',
      companyWebsite: 'https://www.veraconnect.app/',
      companyAvatarLink: 'https://www.veraconnect.app/logo.svg',
    },
  ];
</script>

<div class="flex flex-col items-center justify-center space-y-5 p-4">
  {#each works as work}
    <Card.Root class="bg-gray-900 w-[34rem] max-w-full">
      <Card.Header>
        <Card.Title class="">
          <div class="flex items-center space-x-3">
            <h2>{work.role}</h2>
            {#if work.current}
              <Badge variant="secondary">Current</Badge>
            {/if}
          </div>
        </Card.Title>
        <Card.Description>
          <div class="flex items-center space-x-1">
            <Icon src={AtSymbol} size="16" />
            <span>{work.company}</span>
          </div>
          <div class="flex items-center space-x-1">
            <Icon src={MapPin} size="16" />
            <span>{work.location}</span>
          </div>
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <div>
          <h2 class="text-md font-semibold">Technologies</h2>
          <div class="grid grid-cols-2 grid-rows-2 flex-col">
            <span>Backend ➾ </span>
            <span>
              {#each work.tech.backend as tech}
                <Tech variant={tech} />
              {/each}
            </span>
            <span>Frontend ➾ </span>
            <span>
              {#each work.tech.backend as tech}
                <Tech variant={tech} />
              {/each}
            </span>
          </div>
        </div>
      </Card.Content>
      <Card.Footer>
        <div class="flex justify-between items-end w-full">
          <div class="flex space-x-2 justify-end text-xs text-gray-400">
            <Icon src={CalendarDays} outline size="16" />
            <span>{work.time}</span>
          </div>
          <a href={work.companyWebsite}>
            <Avatar.Root>
              <Avatar.Image src={work.companyAvatarLink} class="bg-white aspect-video" />
              <Avatar.Fallback>{work.company[0]}</Avatar.Fallback>
            </Avatar.Root>
          </a>
        </div>
      </Card.Footer>
    </Card.Root>
  {/each}
</div>
