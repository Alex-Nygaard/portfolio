<script lang="ts">
  import { Separator } from '$lib/components/ui/separator';

  export let header;
</script>

<div class="flex flex-col items-start justify-center space-y-1">
  <span class="font-bold text-gray-300">
    {header}
  </span>
  <Separator class="flex justify-center w-11/12" />
</div>
