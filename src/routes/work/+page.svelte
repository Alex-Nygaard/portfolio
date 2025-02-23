<script lang="ts">
  import * as Avatar from '$lib/components/ui/avatar';
  import Badge from '$lib/components/ui/badge/badge.svelte';
  import * as Card from '$lib/components/ui/card';
  import { CalendarDays, Icon } from 'svelte-hero-icons';

  import { MapPin, AtSymbol } from 'svelte-hero-icons';
  import TechContainer from '$components/tech/TechContainer.svelte';

  import ardoqLogo from '$lib/images/logos/ardoq.png';
  import picnicLogo from '$lib/images/logos/picnic.svg';
  import hammerLogo from '$lib/images/logos/hammer.png';
  import Tech from '$components/tech/Tech.svelte';

  const positions = [
    {
      role: 'Software Engineering Apprentice',
      isCurrent: true,
      company: {
        name: 'Ardoq',
        website: 'https://www.ardoq.com/',
        logo: ardoqLogo,
      },
      location: 'Oslo, Norway',
      tech: {
        backend: ['clojure', 'postgresql'],
        frontend: ['typescript', 'react'],
        tools: ['github', 'jira', 'docker', 'circleci'],
      },
      time: 'September 2024 - Present',
    },
    {
      role: 'Software Engineering Intern',
      isCurrent: false,
      company: {
        name: 'Ardoq',
        website: 'https://www.ardoq.com/',
        logo: ardoqLogo,
      },
      location: 'Oslo, Norway',
      tech: {
        backend: ['clojure', 'postgresql', 'redis'],
        frontend: ['typescript', 'react'],
        tools: ['github', 'jira', 'docker', 'circleci'],
      },
      time: 'July 2024 - August 2024 (3 months)',
    },
    {
      role: 'Backend Developer (Working Student)',
      isCurrent: false,
      company: {
        name: 'Picnic Technologies',
        website: 'https://picnic.app/',
        logo: picnicLogo,
      },
      location: 'Amsterdam, Netherlands',
      tech: {
        backend: ['java', 'maven', 'spring'],
        frontend: [],
        tools: ['datadog', 'docker', 'github', 'grafana', 'jira', 'prometheus', 'teamcity'],
      },
      time: 'April 2024 - June 2024 (3 months)',
    },
    {
      role: 'Junior Data Scientist',
      isCurrent: false,
      company: {
        name: 'Hammer Market Intelligence',
        website: 'https://www.hammer-intel.com/',
        logo: hammerLogo,
      },
      location: 'Arnhem, Netherlands (hybrid)',
      tech: {
        backend: ['docker', 'flask', 'python', 'selenium'],
        frontend: ['react', 'typescript'],
        tools: ['github'],
      },
      time: 'April 2023 - April 2024 (1 year)',
    },
    {
      role: 'Full-Stack Software Engineering Intern',
      isCurrent: false,
      company: {
        name: 'Vera Connect',
        website: 'https://www.veraconnect.app/',
        logo: 'https://www.veraconnect.app/logo.svg',
      },
      location: 'Rotterdam, Netherlands',
      tech: {
        backend: ['nodejs', 'postgresql', 'prisma', 'typescript'],
        frontend: ['react', 'reactnative', 'typescript'],
        tools: ['docker', 'gitlab'],
      },
      time: 'April 2023 - June 2023 (3 months)',
    },
  ];
</script>

<div class="flex flex-col items-center justify-center space-y-5 p-4">
  {#each positions as position}
    <Card.Root class="bg-gray-900 w-[34rem] max-w-full">
      <Card.Header>
        <Card.Title class="">
          <div class="flex items-center space-x-3">
            <h2>{position.role}</h2>
            {#if position.isCurrent}
              <Badge variant="secondary">Current</Badge>
            {/if}
          </div>
        </Card.Title>
        <Card.Description>
          <div class="flex items-center space-x-1">
            <Icon src={AtSymbol} size="16" />
            <span>{position.company.name}</span>
          </div>
          <div class="flex items-center space-x-1">
            <Icon src={MapPin} size="16" />
            <span>{position.location}</span>
          </div>
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <div>
          <h2 class="text-md font-semibold mb-2">Technologies</h2>
          <div class="grid grid-cols-[auto_1fr] gap-2">
            {#if position.tech.backend && position.tech.backend.length > 0}
              <span class="font-bold">Backend</span>
              <TechContainer>
                {#each position.tech.backend as tech}
                  <Tech variant={tech} />
                {/each}
              </TechContainer>
            {/if}
            {#if position.tech.frontend && position.tech.frontend.length > 0}
              <span class="font-bold">Frontend</span>
              <TechContainer>
                {#each position.tech.frontend as tech}
                  <Tech variant={tech} />
                {/each}
              </TechContainer>
            {/if}
            {#if position.tech.tools && position.tech.tools.length > 0}
              <span class="font-bold">Tools</span>
              <TechContainer>
                {#each position.tech.tools as tech}
                  <Tech variant={tech} />
                {/each}
              </TechContainer>
            {/if}
          </div>
        </div>
      </Card.Content>
      <Card.Footer>
        <div class="flex justify-between items-end w-full">
          <div class="flex space-x-2 justify-end text-xs text-gray-400">
            <Icon src={CalendarDays} outline size="16" />
            <span>{position.time}</span>
          </div>
          <a href={position.company.website}>
            <Avatar.Root>
              <Avatar.Image src={position.company.logo} class="bg-white" />
              <Avatar.Fallback>{position.company.name.charAt(0)}</Avatar.Fallback>
            </Avatar.Root>
          </a>
        </div>
      </Card.Footer>
    </Card.Root>
  {/each}
</div>
