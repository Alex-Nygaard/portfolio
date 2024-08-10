<script lang="ts">
  import * as Avatar from '$lib/components/ui/avatar';
  import At from '$components/At.svelte';
  import Badge from '../../lib/components/ui/badge/badge.svelte';

  export let title: string;
  export let currentBadge: boolean;
  export let at: { label: string; link: string; logo?: string };
  export let children: { title: string; at: { label: string; link: string; logo?: string } }[] = [];
</script>

<div class="flex justify-between py-1">
  <span class="sm:mr-8">
    {title}
    {#if currentBadge}<Badge class="px-1" variant="secondary">Current</Badge>{/if}
  </span>
  {#if at}
    <span class="text-gray-300 text-right flex justify-center items-center">
      <At label={at.label} href={at.link} />
      <Avatar.Root class="h-6 w-6 ml-1">
        <Avatar.Image src={at.logo} class="bg-white aspect-square" />
        <Avatar.Fallback>A</Avatar.Fallback>
      </Avatar.Root>
    </span>
  {/if}
</div>

{#if children.length > 0}
  <div class="pl-5">
    {#each children as child}
      <svelte:self {...child} />
    {/each}
  </div>
{/if}
