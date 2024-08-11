<script lang="ts">
  export let label: string;
  export let href: string;
  export let includeAt: boolean = true;
</script>

<a {href} class="underline underline-offset-4">{includeAt ? '@' : ''}{label}</a>
