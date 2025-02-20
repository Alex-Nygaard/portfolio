<script lang="ts">
  import { CalendarDays, Icon } from 'svelte-hero-icons';

  export let time: string;
</script>

<div class="inline-flex items-center gap-2 text-gray-300">
  <Icon src={CalendarDays} outline size="20" />
  <span>{time}</span>
</div>
