<script lang="ts">
  import ddLogo from '$lib/images/logos/tech/dd.svg';
  import teamCityLogo from '$lib/images/logos/tech/teamcity.svg';

  export let variant: string;

  type Variant = {
    name: string;
    icon?: string;
    customIcon?: string;
  };

  let variantOptions: { [key: string]: Variant } = {
    python: {
      name: 'Python',
      icon: 'devicon-python-plain',
    },
    javascript: {
      name: 'Javascript',
      icon: 'devicon-javascript-plain',
    },
    java: {
      name: 'Java',
      icon: 'devicon-java-plain',
    },
    typescript: {
      name: 'Typescript',
      icon: 'devicon-typescript-plain',
    },
    svelte: {
      name: 'Svelte',
      icon: 'devicon-svelte-plain',
    },
    go: {
      name: 'Go',
      icon: 'devicon-go-plain',
    },
    scala: {
      name: 'Scala',
      icon: 'devicon-scala-plain',
    },
    html: {
      name: 'HTML',
      icon: 'devicon-html5-plain',
    },
    css: {
      name: 'CSS',
      icon: 'devicon-css3-plain',
    },
    react: {
      name: 'React',
      icon: 'devicon-react-original',
    },
    nodejs: {
      name: 'Node.js',
      icon: 'devicon-nodejs-plain',
    },
    express: {
      name: 'Express',
      icon: 'devicon-express-original',
    },
    flask: {
      name: 'Flask',
      icon: 'devicon-flask-original',
    },
    spring: {
      name: 'Spring',
      icon: 'devicon-spring-plain',
    },
    postgresql: {
      name: 'PostgreSQL',
      icon: 'devicon-postgresql-plain',
    },
    prisma: {
      name: 'Prisma',
      icon: 'devicon-prisma-plain',
    },
    mongodb: {
      name: 'MongoDB',
      icon: 'devicon-mongodb-plain',
    },
    tensorflow: {
      name: 'TensorFlow',
      icon: 'devicon-tensorflow-original',
    },
    aws: {
      name: 'AWS',
      icon: 'devicon-amazonwebservices-plain',
    },
    azure: {
      name: 'Azure',
      icon: 'devicon-azure-plain',
    },
    docker: {
      name: 'Docker',
      icon: 'devicon-docker-plain',
    },
    selenium: {
      name: 'Selenium',
      icon: 'devicon-selenium-plain',
    },
    reactnative: {
      name: 'React Native',
      icon: 'devicon-react-original',
    },
    sqlite: {
      name: 'SQLite',
      icon: 'devicon-sqlite-plain',
    },
    raspberry: {
      name: 'Raspberry Pi',
      icon: 'devicon-raspberrypi-plain',
    },
    heroku: {
      name: 'Heroku',
      icon: 'devicon-heroku-plain',
    },
    tailwind: {
      name: 'Tailwind',
      icon: 'devicon-tailwindcss-plain',
    },
    cpp: {
      name: 'C++',
      icon: 'devicon-cplusplus-plain',
    },
    clojure: {
      name: 'Clojure',
      icon: 'devicon-clojure-line',
    },
    redis: {
      name: 'Redis',
      icon: 'devicon-redis-plain',
    },
    haskell: {
      name: 'Haskell',
      icon: 'devicon-haskell-plain',
    },
    jira: {
      name: 'Jira',
      icon: 'devicon-jira-plain',
    },
    prometheus: {
      name: 'Prometheus',
      icon: 'devicon-prometheus-original',
    },
    grafana: {
      name: 'Grafana',
      icon: 'devicon-grafana-plain',
    },
    datadog: {
      name: 'Datadog',
      customIcon: ddLogo,
    },
    teamcity: {
      name: 'TeamCity',
      customIcon: teamCityLogo,
    },
    maven: {
      name: 'Maven',
      icon: 'devicon-maven-plain',
    },
    github: {
      name: 'GitHub',
      icon: 'devicon-github-original',
    },
    gitlab: {
      name: 'GitLab',
      icon: 'devicon-gitlab-plain',
    },
    circleci: {
      name: 'CircleCI',
      icon: 'devicon-circleci-plain',
    },
    pytorch: {
      name: 'PyTorch',
      icon: 'devicon-pytorch-original',
    },
    sveltekit: {
      name: 'SvelteKit',
      icon: 'devicon-svelte-plain',
    },
    gcp: {
      name: 'GCP',
      icon: 'devicon-googlecloud-plain',
    },
  };

  function getVariant(variantKey: string) {
    return (
      variantOptions[variantKey] || {
        name: variantKey.charAt(0).toUpperCase() + variantKey.slice(1),
      }
    );
  }

  $: selectedVariant = getVariant(variant);
</script>

<span class="flex items-center space-x-1 mx-1 text-gray-300">
  {#if selectedVariant.icon}
    <i class={selectedVariant.icon}></i>
  {:else if selectedVariant.customIcon}
    <img src={selectedVariant.customIcon} alt={selectedVariant.name} class="h-4 w-4 grayscale" />
  {/if}
  <span class="text-gray-300">{selectedVariant.name}</span>
</span>
