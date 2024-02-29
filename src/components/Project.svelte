<script lang="ts">
  import * as Card from '$lib/components/ui/card';
  import { CalendarDays, Icon } from 'svelte-hero-icons';
  import Tech from '../components/Tech.svelte';

  export let name: string;
  export let description: string;
  export let image: string;
  export let technologies: string[];
  export let link: string;
  export let dates: string;
</script>

<div class="p-3">
  <Card.Root class="bg-gray-900 w-[26rem] h-[28rem] flex flex-col justify-between">
    <Card.Header class="pb-1">
      <Card.Title class="">
        <img src={image} alt={name} class="rounded-lg w-full h-52 object-cover" />
        <h2 class="text-xl mt-4">{name}</h2>
      </Card.Title>
    </Card.Header>
    <Card.Content class="flex flex-col space-y-2 pb-1">
      <span class="text-gray-200">{description}</span>
      <div class="flex flex-wrap">
        {#each technologies as tech}
          <Tech variant={tech} />
        {/each}
      </div>
    </Card.Content>
    <Card.Footer>
      <div class="flex w-full justify-between items-center">
        <div class="flex space-x-2 text-sm text-gray-300">
          <Icon src={CalendarDays} outline size="20" />
          <span>{dates}</span>
        </div>
        <a href={link} target="”_blank”" class="text-gray-300 text-3xl">
          <i class="devicon-github-original"></i>
        </a>
      </div>
    </Card.Footer>
  </Card.Root>
</div>
