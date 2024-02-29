<script lang="ts">
  import Button from '$lib/components/ui/button/button.svelte';
  import { buttonVariants } from '$lib/components/ui/button';
  import '../app.pcss';
  import Separator from '$lib/components/ui/separator/separator.svelte';
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { Bars3, Icon } from 'svelte-hero-icons';

  function handleKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'h':
        goto('/');
        break;
      case 'a':
        goto('/about');
        break;
      case 'w':
        goto('/work');
        break;
      case 'e':
        goto('/education');
        break;
      case 'p':
        goto('/projects');
        break;
      case 'c':
        goto('/contact');
        break;
    }
  }

  onMount(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  let navIsOpen = false;
</script>

<nav class="flex justify-between w-full h-24 items-center p-4 px-8">
  <a
    href="/"
    class="text-5xl whitespace-nowrap font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"
  >
    {'<A />'}
  </a>
  <div class="sm:flex h-7 items-center hidden">
    <Button href="/about" variant="ghost">About</Button>
    <Separator orientation="vertical" />
    <Button href="/work" variant="ghost">Work</Button>
    <Separator orientation="vertical" />
    <Button href="/education" variant="ghost">Education</Button>
    <Separator orientation="vertical" />
    <Button href="/projects" variant="ghost">Projects</Button>
    <Separator orientation="vertical" class="h-0" />
    <Button href="/contact">Contact</Button>
  </div>
  <div class="flex sm:hidden">
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="ghost" class="ml-4">
          <Icon src={Bars3} />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item href="/about">
          About
          <DropdownMenu.Shortcut>A</DropdownMenu.Shortcut>
        </DropdownMenu.Item>
        <DropdownMenu.Item href="/work">
          Work
          <DropdownMenu.Shortcut>W</DropdownMenu.Shortcut>
        </DropdownMenu.Item>
        <DropdownMenu.Item href="/education"
          >Education
          <DropdownMenu.Shortcut>E</DropdownMenu.Shortcut>
        </DropdownMenu.Item>
        <DropdownMenu.Item href="/projects"
          >Projects
          <DropdownMenu.Shortcut>P</DropdownMenu.Shortcut>
        </DropdownMenu.Item>
        <DropdownMenu.Item href="/contact"
          >Contact
          <DropdownMenu.Shortcut>C</DropdownMenu.Shortcut>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  </div>
</nav>

<slot />
