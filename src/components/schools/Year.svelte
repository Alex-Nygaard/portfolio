<script lang="ts">
  import { Separator } from '$lib/components/ui/separator';
  import CalendarInfo from '$components/icons/CalendarInfo.svelte';
  import LocationInfo from '$components/icons/LocationInfo.svelte';

  export let header: string;
  export let time: string = '';
  export let location: string = '';
</script>

<div class="w-full gap-4">
  <div class="flex flex-col justify-center items-center gap-1">
    <span class="font-bold text-gray-300">{header}</span>
    <Separator class="w-11/12" />
    {#if time || location}
      <div class="flex flex-wrap space-x-4">
        {#if time}
          <CalendarInfo {time} />
        {/if}
        {#if location}
          <LocationInfo {location} />
        {/if}
      </div>
    {/if}
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
    <slot />
  </div>
</div>
