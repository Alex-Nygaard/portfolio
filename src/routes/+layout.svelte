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

<div class="flex flex-col w-full h-full">
  <nav class="flex justify-between w-full h-24 items-center p-4 px-8">
    <a
      href="/"
      class="text-5xl whitespace-nowrap font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"
    >
      {'<A />'}
    </a>
    <div class="sm:flex h-7 items-center hidden">
      <Button href="/about" variant="ghost">
        <span class="underline">A</span>bout
      </Button>
      <Separator orientation="vertical" />
      <Button href="/work" variant="ghost">
        <span class="underline">W</span>ork
      </Button>
      <Separator orientation="vertical" />
      <Button href="/education" variant="ghost">
        <span class="underline">E</span>ducation
      </Button>
      <Separator orientation="vertical" />
      <Button href="/projects" variant="ghost">
        <span class="underline">P</span>rojects
      </Button>
      <Separator orientation="vertical" class="h-0" />
      <Button class="ml-2" href="/contact">
        <span class="underline">C</span>ontact
      </Button>
    </div>
    <div class="flex sm:hidden">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button variant="ghost" class="ml-4">
            <Icon src={Bars3} />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <a href="/about">
            <DropdownMenu.Item>
              About
              <DropdownMenu.Shortcut>A</DropdownMenu.Shortcut>
            </DropdownMenu.Item>
          </a>
          <a href="/work">
            <DropdownMenu.Item>
              Work
              <DropdownMenu.Shortcut>W</DropdownMenu.Shortcut>
            </DropdownMenu.Item>
          </a>
          <a href="/education">
            <DropdownMenu.Item>
              Education
              <DropdownMenu.Shortcut>E</DropdownMenu.Shortcut>
            </DropdownMenu.Item>
          </a>
          <a href="/projects">
            <DropdownMenu.Item>
              Projects
              <DropdownMenu.Shortcut>P</DropdownMenu.Shortcut>
            </DropdownMenu.Item>
          </a>
          <a href="/contact">
            <DropdownMenu.Item>
              Contact
              <DropdownMenu.Shortcut>C</DropdownMenu.Shortcut>
            </DropdownMenu.Item>
          </a>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  </nav>

  <slot />
</div>
