<script lang="ts">
  import * as Avatar from '$lib/components/ui/avatar';
  import Badge from '$lib/components/ui/badge/badge.svelte';
  import * as Card from '$lib/components/ui/card';
  import { CalendarDays, Icon } from 'svelte-hero-icons';

  import { MapPin, AtSymbol } from 'svelte-hero-icons';
  import Tech from '../../components/Tech.svelte';
</script>

<div class="flex flex-col items-center justify-center space-y-5 p-4">
  <Card.Root class="bg-gray-900 w-[34rem]">
    <Card.Header>
      <Card.Title class="">
        <div class="flex items-center space-x-3">
          <h2>Junior Data Scientist</h2>
          <Badge variant="secondary">Current</Badge>
        </div>
      </Card.Title>
      <Card.Description>
        <div class="flex items-center space-x-1">
          <Icon src={AtSymbol} size="16" />
          <span> Hammer Market Intelligence </span>
        </div>
        <div class="flex items-center space-x-1">
          <Icon src={MapPin} size="16" />
          <span>Arnhem, Netherlands</span>
        </div>
      </Card.Description>
    </Card.Header>
    <Card.Content>
      <div>
        <h2 class="text-lg">Technologies</h2>
        <p>
          Backend: <Tech variant="python" /> with <Tech variant="flask" /> and <Tech
            variant="selenium"
          />.
        </p>
        <p>
          Frontend: <Tech variant="typescript" /> and <Tech variant="javascript" /> with
          <Tech variant="react" />.
        </p>
      </div>
    </Card.Content>
    <Card.Footer>
      <div class="flex justify-between items-end w-full">
        <div class="flex space-x-2 justify-end text-xs text-gray-400">
          <Icon src={CalendarDays} outline size="16" />
          <span>April 2023 - present</span>
        </div>
        <a href="https://www.hammer-intel.com/">
          <Avatar.Root>
            <Avatar.Image
              src="https://pbs.twimg.com/profile_images/1069955395794464768/nk8aLWb1_400x400.jpg"
              class="bg-white aspect-video"
            />
            <Avatar.Fallback>H</Avatar.Fallback>
          </Avatar.Root>
        </a>
      </div>
    </Card.Footer>
  </Card.Root>

  <Card.Root class="bg-gray-900 w-[34rem]">
    <Card.Header>
      <Card.Title class="">
        <div class="flex items-center space-x-3">
          <h2>Full-Stack Software Engineer</h2>
          <!-- <Badge variant="secondary">Current</Badge> -->
        </div>
      </Card.Title>
      <Card.Description>
        <div class="flex items-center space-x-1">
          <Icon src={AtSymbol} size="16" />
          <span> Vera Connect </span>
        </div>
        <div class="flex items-center space-x-1">
          <Icon src={MapPin} size="16" />
          <span>Rotterdam, Netherlands</span>
        </div>
      </Card.Description>
    </Card.Header>
    <Card.Content>
      <div>
        <h2 class="text-lg">Technologies</h2>
        <p>
          Backend: <Tech variant="typescript" /> with <Tech variant="nodejs" />,
          <Tech variant="express" />, <Tech variant="postgresql" /> and <Tech variant="prisma" />
        </p>
        <p>
          Frontend: <Tech variant="typescript" /> and <Tech variant="javascript" /> with
          <Tech variant="react" /> and <Tech variant="reactnative" />.
        </p>
      </div>
    </Card.Content>
    <Card.Footer>
      <div class="flex justify-between items-end w-full">
        <div class="flex space-x-2 justify-end text-xs text-gray-400">
          <Icon src={CalendarDays} outline size="16" />
          <span>March 2023 - Jul 2023</span>
        </div>
        <a href="https://www.veraconnect.app/">
          <Avatar.Root>
            <Avatar.Image
              src="https://www.veraconnect.app/logo.svg"
              class="bg-white aspect-video"
            />
            <Avatar.Fallback>H</Avatar.Fallback>
          </Avatar.Root>
        </a>
      </div>
    </Card.Footer>
  </Card.Root>
</div>
