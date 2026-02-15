<script lang="ts">
  import { Separator } from '$lib/components/ui/separator';
  import { highlightedCategory, hoveredCategory } from '$lib/state/highlight';

  export let header: string;
  export let categorizedCourses: Record<
    string,
    {
      label: string;
      courses: string[];
    }
  > = {};
</script>

<div class="flex flex-col">
  <span class="font-semibold">{header}</span>
  <div class="grid grid-cols-[auto_auto_1fr] gap-2 items-center">
    {#each Object.keys(categorizedCourses) as category}
      <span
        class="relative transition-all duration-200"
        class:scale-130={$highlightedCategory === category || $hoveredCategory === category}
      >
        {categorizedCourses[category].label}
      </span>
      <Separator orientation="vertical" class="h-5/6 bg-gray-500" />
      <div class="space-y-1">
        {#each categorizedCourses[category].courses as course}
          <div
            class="w-fit rounded-lg p-1 transition-all duration-200"
            class:bg-gray-700={$highlightedCategory === category || $hoveredCategory === category}
            class:bg-opacity-50={$highlightedCategory === category || $hoveredCategory === category}
          >
            {course}
          </div>
        {/each}
      </div>
    {/each}
  </div>
  <!--  -->
  <!--  {#each courses as course}-->
  <!--    <div class="flex flex-col text-gray-300">-->
  <!--      <span class="mt-1 ml-2 min-w-64">{course}</span>-->
  <!--    </div>-->
  <!--  {/each}-->
</div>
