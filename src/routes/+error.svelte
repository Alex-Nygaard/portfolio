<script>
  import Button from '$lib/components/ui/button/button.svelte';
</script>

<div class="h-[calc(100vh-6rem)] flex flex-col justify-center items-center text-red-600 space-y-5">
  <h1 class="text-5xl">{'<404>'}</h1>
  <h1 class="text-7xl">Not Found</h1>
  <Button href="/" variant="destructive">Go Home</Button>
</div>
