<script>
  import * as Avatar from '$lib/components/ui/avatar';
  import { Button } from '$lib/components/ui/button';
  import { Separator } from '$lib/components/ui/separator';
  import * as HoverCard from '$lib/components/ui/hover-card';
  import Link from '../components/Link.svelte';
</script>

<div class="h-[calc(100vh-6rem)] flex flex-col justify-center items-center space-y-10 p-5">
  <h1 class="text-8xl max-w-[80%] text-center font-semibold">
    Hi, I'm Alex<span class="text-blue-600">.</span>
  </h1>
  <section class="flex space-x-5">
    <Button
      href="https://sharing-with-alex.s3.eu-north-1.amazonaws.com/files/CV_alexander-nygaard.pdf"
      target="_blank"
      variant="outline">Download CV</Button
    >
    <Button href="/contact">Contact</Button>
  </section>
  <section class="space-y-2">
    <div class="flex justify-between">
      <span>👨‍💻 Working as Junior Data Scientist</span>
      <HoverCard.Root>
        <HoverCard.Trigger
          href="https://www.hammer-intel.com/"
          target="_blank"
          rel="noreferrer noopener"
          class="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
        >
          @Hammer
        </HoverCard.Trigger>
        <HoverCard.Content class="w-80">
          <div class="flex justify-between space-x-4">
            <Avatar.Root>
              <Avatar.Image
                src="https://pbs.twimg.com/profile_images/1069955395794464768/nk8aLWb1_400x400.jpg"
                class="bg-white aspect-video"
              />
              <Avatar.Fallback>H</Avatar.Fallback>
            </Avatar.Root>
            <div class="space-y-1">
              <h4 class="text-sm font-semibold">@Hammer Market Intelligence</h4>
              <p class="text-sm">Arnhem, Netherlands.</p>
              <div class="flex items-center pt-2">
                <span class="text-xs text-muted-foreground">April 2023 - present</span>
              </div>
            </div>
          </div>
        </HoverCard.Content>
      </HoverCard.Root>
    </div>
    <div class="flex justify-between space-x-10">
      <span>📚 Studying BSc Computer Science and Engineering</span>

      <HoverCard.Root>
        <HoverCard.Trigger
          href="https://www.tudelft.nl/en/"
          target="_blank"
          rel="noreferrer noopener"
          class="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
        >
          @TUDelft
        </HoverCard.Trigger>
        <HoverCard.Content class="w-80">
          <div class="flex justify-between space-x-4">
            <Avatar.Root>
              <Avatar.Image
                src="https://pbs.twimg.com/profile_images/1601657243115692033/UapB2p-q_400x400.jpg"
              />
              <Avatar.Fallback>TUD</Avatar.Fallback>
            </Avatar.Root>
            <div class="space-y-1">
              <h4 class="text-sm font-semibold">@TUDelft</h4>
              <p class="text-sm">Technical University of Delft, Netherlands.</p>
              <div class="flex items-center pt-2">
                <!-- <Calendar class="mr-2 h-4 w-4 opacity-70" />{' '} -->
                <span class="text-xs text-muted-foreground">August 2021 - June 2024 (exp.)</span>
                <!-- <span class="text-xs text-muted-foreground"> Finishing June 2024 </span> -->
              </div>
            </div>
          </div>
        </HoverCard.Content>
      </HoverCard.Root>
    </div>
  </section>
  <section class="max-w-lg flex flex-col items-center space-y-1">
    <div class="w-48 mb-7">
      <Separator />
    </div>

    <span>
      Let me tell you a little bit <Link link="/about" label="about me" />, or have a look at
      <Link link="/work" label="my work" />.
    </span>
    <span>
      You can take a look at my <Link link="/education" label="education" />, or check out my past
      <Link link="/projects" label="projects" />.
    </span>
  </section>
</div>
