<script lang="ts">
  import LocationInfo from '$components/icons/LocationInfo.svelte';
  import CalendarInfo from '$components/icons/CalendarInfo.svelte';

  export let name: string;
  export let background: string;
  export let degree: string;
  export let preDegreeNote: string = '';

  export let time: string = '';
  export let location: string = '';
</script>

<div class="h-fit relative p-4 z-10 space-y-4">
  <img
    src={background}
    alt={name + ' campus'}
    class="opacity-20 absolute left-0 top-0 w-full h-full object-cover object-center z-0"
    style="pointer-events: none;"
  />
  <div class="flex flex-wrap justify-between gap-1">
    <div>
      {#if preDegreeNote}
        <span class="text-lg italic">{preDegreeNote}</span>
      {/if}
      <h1 class="text-3xl font-semibold">{degree}</h1>
      <h2 class="text-2xl font-medium">{name}</h2>
    </div>
    <div class="flex flex-col gap-1 text-md text-gray-300">
      {#if time}
        <CalendarInfo {time} />
      {/if}
      {#if location}
        <LocationInfo {location} />
      {/if}
    </div>
  </div>
  <slot />
</div>
