<script lang="ts">
  import { Icon, MapPin } from 'svelte-hero-icons';

  export let location: string;
</script>

<div class="inline-flex items-center gap-2 text-gray-300">
  <Icon src={MapPin} size="20" />
  <span>{location}</span>
</div>
