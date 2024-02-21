<script>
  import Button from '$lib/components/ui/button/button.svelte';
  import { buttonVariants } from '$lib/components/ui/button';
  import '../app.pcss';
  import Separator from '$lib/components/ui/separator/separator.svelte';
</script>

<nav class="flex justify-between w-full h-24 items-center p-4 px-8">
  <a
    href="/"
    class="text-5xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"
  >
    {'<A />'}
  </a>
  <div class="flex h-7 items-center space-x-2">
    <Button href="/about" variant="ghost">About</Button>
    <Separator orientation="vertical" />
    <Button href="/experience" variant="ghost">Experience</Button>
    <Separator orientation="vertical" />
    <Button href="/education" variant="ghost">Education</Button>
    <Separator orientation="vertical" />
    <Button href="/projects" variant="ghost">Projects</Button>
    <Separator orientation="vertical" class="h-0" />
    <Button href="/contact">Contact</Button>
  </div>
</nav>

<slot />
