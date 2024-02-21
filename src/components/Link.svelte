<script lang="ts">
  export let link: string;
  export let label: string = link;
  export let from_color: string = 'blue-600';
  export let via_color: string = 'green-500';
  export let to_color: string = 'indigo-400';
</script>

<a
  href={link}
  class="hover:underline font-bold bg-gradient-to-r from-{from_color} via-{via_color} to-{to_color} inline-block text-transparent bg-clip-text"
  >{label}</a
>
