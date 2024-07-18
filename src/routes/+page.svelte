<script>
  import * as Avatar from '$lib/components/ui/avatar';
  import Badge from '$lib/components/ui/badge/badge.svelte';
  import { Button } from '$lib/components/ui/button';
  import { Separator } from '$lib/components/ui/separator';
  import * as HoverCard from '$lib/components/ui/hover-card';
  import Link from '../components/Link.svelte';
</script>

<div class="h-[calc(100vh-6rem)] flex flex-col justify-center items-center space-y-10 p-5">
  <h1 class="text-5xl sm:text-6xl md:text-8xl max-w-[80%] text-center font-semibold">
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
    <div class="flex justify-between space-x-2">
      <span> 👨‍💻 Working as Software Engineering Intern </span>
      <span class="text-gray-300 text-right flex justify-center items-center">
        @Ardoq
        <Avatar.Root class="h-6 w-6 ml-1">
          <Avatar.Image
            src="https://pbs.twimg.com/profile_images/1069955395794464768/nk8aLWb1_400x400.jpg"
            class="bg-white aspect-square"
          />
          <Avatar.Fallback>A</Avatar.Fallback>
        </Avatar.Root>
      </span>
    </div>
    <div class="flex justify-between space-x-10">
      <span class="mr-16">📚 Studying MSc Security and Cloud Computing (SECCLO)</span>
    </div>
    <div class="flex justify-between">
      <span class="ml-4">➾ 1st year <Badge class="mx-1" variant="secondary">Current</Badge></span>
      <span class="text-gray-300 text-right flex justify-center items-center">
        @Aalto University
        <Avatar.Root class="h-6 w-6 ml-1">
          <Avatar.Image
            src="https://pbs.twimg.com/profile_images/1069955395794464768/nk8aLWb1_400x400.jpg"
            class="bg-white aspect-square"
          />
          <Avatar.Fallback>A</Avatar.Fallback>
        </Avatar.Root>
      </span>
    </div>
    <div class="flex justify-between">
      <span class="ml-4">➾ 2nd year</span>
      <span class="text-gray-300 text-right flex justify-center items-center">
        @Denmark's Technical University
        <Avatar.Root class="h-6 w-6 ml-1">
          <Avatar.Image
            src="https://pbs.twimg.com/profile_images/1069955395794464768/nk8aLWb1_400x400.jpg"
            class="bg-white aspect-square"
          />
          <Avatar.Fallback>D</Avatar.Fallback>
        </Avatar.Root>
      </span>
    </div>
  </section>
  <section class="w-5/6 flex flex-col items-center space-y-1">
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
