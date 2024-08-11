<script lang="ts">
  import ardoqLogo from '$lib/images/logos/ardoq.png';
  import aaltoLogo from '$lib/images/logos/aalto.png';
  import dtuLogo from '$lib/images/logos/dtu.png';
  import SummaryElement from '$components/summary/SummaryElement.svelte';

  const entries = [
    {
      title: '👨‍💻 Working as Software Engineering Intern',
      at: {
        label: 'Ardoq',
        link: 'https://www.ardoq.com/',
        logo: ardoqLogo,
      },
    },
    {
      title: '📚 Studying MSc Security and Cloud Computing (SECCLO)',
      children: [
        {
          title: '➾ 1st year',
          currentBadge: true,
          at: {
            label: 'Aalto University',
            link: 'https://www.aalto.fi/en',
            logo: aaltoLogo,
          },
        },
        {
          title: '➾ 2nd year',
          at: {
            label: "Denmark's Technical University",
            link: 'https://www.dtu.dk/english/',
            logo: dtuLogo,
          },
        },
      ],
    },
  ];
</script>

<section class="w-5/6 sm:w-fit">
  {#each entries as entry}
    <SummaryElement {...entry} />
  {/each}
</section>
