<script lang="ts">
  import * as Tabs from '$lib/components/ui/tabs';
  import { CalendarDays, Icon, MapPin } from 'svelte-hero-icons';
  import At from '$components/At.svelte';

  export let name: string;
  export let degree: string;
  export let time: string;
  export let location: string;
  export let logo: string;
  export let website: string;
  export let background: string;

  type Cell = { label: string; values: string[] };
  type Tab = { label: string; cells: Cell[] };

  export let tabs: Tab[] = [];

  export let thesis: {
    sectionTitle: string;
    title: string;
    subTitle: string | null;
    link: string;
  } | null = null;
</script>

<div class="h-fit relative p-8 z-10">
  <img
    src={background}
    alt={name + ' campus'}
    class="opacity-20 absolute left-0 top-0 w-full h-full object-cover object-center z-0"
    style="pointer-events: none;"
  />
  <div class="flex flex-wrap justify-between">
    <div>
      <h1 class="text-4xl font-semibold">{degree}</h1>
      <h2 class="text-2xl font-medium">{name}</h2>
    </div>
    <div class="flex flex-col gap-1 text-md text-gray-300">
      <div class="inline-flex items-center gap-2">
        <Icon src={CalendarDays} outline size="20" />
        <span>{time}</span>
      </div>
      <div class="inline-flex items-center gap-2">
        <Icon src={MapPin} size="20" />
        <span>{location}</span>
      </div>
    </div>
  </div>

  {#if tabs.length > 1}
    <Tabs.Root value={tabs[0].label} class="w-full relative pt-3">
      <div class="flex flex-wrap gap-2">
        {#each tabs as tab}
          <Tabs.List>
            <Tabs.Trigger value={tab.label}>
              <div class="flex space-x-2 items-center">
                <span>{tab.label}</span>
              </div>
            </Tabs.Trigger>
          </Tabs.List>
        {/each}
      </div>

      {#each tabs as tab}
        <Tabs.Content value={tab.label}>
          <div class="flex flex-wrap gap-4 max-w-4xl">
            {#each tab.cells as { label, values }}
              <div class="flex items-center w-5/12">
                <h3 class="flex items-center justify-center text-md font-semibold mr-8 h-[72px]">
                  {label}
                </h3>
                <div class="flex flex-col">
                  {#each values as value}
                    <span>{value}</span>
                  {/each}
                </div>
              </div>
            {/each}
          </div>
        </Tabs.Content>
      {/each}
    </Tabs.Root>
  {:else if tabs.length === 1}
    <div class={`grid grid-cols-${tabs[0].cells.length / 2} gap-4 space-y-2 pt-3`}>
      {#each tabs[0].cells as { label, values }}
        <div class="flex items-center">
          <h3 class="flex items-center text-md font-semibold min-w-32 h-[72px]">
            {label}
          </h3>
          <div class="flex flex-col">
            {#each values as value}
              <span>{value}</span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  {/if}

  <div class={`flex flex-wrap ${thesis === null ? 'justify-end' : 'justify-end'}`}>
    {#if thesis}
      <div class="flex-grow pt-3">
        <h3 class="font-semibold">{thesis.sectionTitle}</h3>
        <span class="font-bold pl-4">
          {thesis.title} (<At label="Paper" href={thesis.link} includeAt={false} />)
        </span>
        {#if thesis.subTitle}
          <h3 class="pl-4 font-light">{thesis.subTitle}</h3>
        {/if}
      </div>
    {/if}
    <a href={website} class="flex-shrink-0 mt-3">
      <img
        src={logo}
        alt={name + ' logo'}
        class="h-16 p-1 relative hover:scale-110 hover:cursor-pointer transition-all"
      />
    </a>
  </div>
</div>
