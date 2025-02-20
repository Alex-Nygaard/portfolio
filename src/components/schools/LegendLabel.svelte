<script lang="ts">
  export let category: string;
  export let label: string;
  export let color: string = '';
</script>

<span
  class="w-3 h-3 rounded-full"
  class:bg-red-500={color === 'red'}
  class:bg-green-500={color === 'green'}
  class:bg-yellow-500={color === 'yellow'}
  class:bg-blue-500={color === 'blue'}
></span>
