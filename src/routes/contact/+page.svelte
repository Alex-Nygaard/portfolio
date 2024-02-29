<script lang="ts">
  import { Envelope, Icon, ChatBubbleLeftEllipsis } from 'svelte-hero-icons';
</script>

<div
  class="w-full h-[calc(100vh-6rem)] flex flex-col items-center justify-center p-5 text-gray-300"
>
  <h1 class="text-7xl font-semibold">Let's talk<span class="text-blue-600">.</span></h1>
  <div class="flex flex-col items-center justify-center text-4xl space-y-10 p-10">
    <div class="flex items-center space-x-2 relative hover:scale-110 transition-all">
      <Icon src={Envelope} outline size="32" />
      <span><a href="mailto:alexander.k.nygard@gmail.com" target="_blank">Email</a></span>
    </div>

    <div class="flex items-center space-x-2 relative hover:scale-110 transition-all">
      <i class="devicon-linkedin-plain"></i>
      <span><a href="https://www.linkedin.com/in/alex-nygard/" target="_blank">LinkedIn</a></span>
    </div>
    <div class="flex items-center space-x-2 hover:scale-110 transition-all">
      <Icon src={ChatBubbleLeftEllipsis} outline size="32" />
      <span><a href="https://wa.me/4790016100" target="_blank">WhatsApp</a></span>
    </div>
  </div>
</div>
