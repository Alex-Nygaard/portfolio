<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Separator } from '$lib/components/ui/separator';
  import Link from '../components/Link.svelte';
  import SummaryList from '$components/summary/SummaryList.svelte';
</script>

<div class="min-h-[calc(100vh-6rem)] flex flex-col justify-center items-center space-y-10 p-5">
  <h1
    class="text-5xl sm:text-7xl md:text-8xl text-center font-semibold transition-all duration-300 ease-in-out"
  >
    Hi, I'm Alex<span class="text-blue-600">.</span>
  </h1>
  <section class="flex space-x-5">
    <Button
      href="https://sharing-with-alex.s3.eu-north-1.amazonaws.com/files/CV_alexander-nygaard.pdf"
      target="_blank"
      variant="outline"
      >Download CV
    </Button>
    <Button href="/contact">Contact</Button>
  </section>

  <SummaryList />

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
