<script lang="ts">
  export let variant: string;

  /*
let languages = [
    { name: 'Python', icon: 'devicon-python-plain' },
    { name: 'Java', icon: 'devicon-java-plain' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain' },
    { name: 'Svelte', icon: 'devicon-svelte-plain' },
    { name: 'Go', icon: 'devicon-go-plain' },
    { name: 'Scala', icon: 'devicon-scala-plain' },
    { name: 'HTML', icon: 'devicon-html5-plain' },
    { name: 'CSS', icon: 'devicon-css3-plain' }
  ];

  // let frameworks = ['React', 'Svelte', 'Node.js', 'Express', 'Flask', 'Spring'];
  let frameworks = [
    { name: 'React', icon: 'devicon-react-original' },
    { name: 'Svelte', icon: 'devicon-svelte-plain' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain' },
    { name: 'Express', icon: 'devicon-express-original' },
    { name: 'Flask', icon: 'devicon-flask-original' },
    { name: 'Spring', icon: 'devicon-spring-plain' }
  ];

  // let tools = ['PostgreSQL', 'Prisma', 'MongoDB', 'TensorFlow', 'AWS', 'Azure', 'Docker'];
  let tools = [
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
    { name: 'Prisma', icon: 'devicon-prisma-plain' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
    { name: 'TensorFlow', icon: 'devicon-tensorflow-plain' },
    { name: 'AWS', icon: 'devicon-amazonwebservices-plain' },
    { name: 'Azure', icon: 'devicon-azure-plain' },
    { name: 'Docker', icon: 'devicon-docker-plain' }
  ];
  */

  let variantOptions: { [key: string]: { name: string; icon: string } } = {
    python: {
      name: 'Python',
      icon: 'devicon-python-plain'
    },
    javascript: {
      name: 'Javascript',
      icon: 'devicon-javascript-plain'
    },
    java: {
      name: 'Java',
      icon: 'devicon-java-plain'
    },
    typescript: {
      name: 'Typescript',
      icon: 'devicon-typescript-plain'
    },
    svelte: {
      name: 'Svelte',
      icon: 'devicon-svelte-plain'
    },
    go: {
      name: 'Go',
      icon: 'devicon-go-plain'
    },
    scala: {
      name: 'Scala',
      icon: 'devicon-scala-plain'
    },
    html: {
      name: 'HTML',
      icon: 'devicon-html5-plain'
    },
    css: {
      name: 'CSS',
      icon: 'devicon-css3-plain'
    },
    react: {
      name: 'React',
      icon: 'devicon-react-original'
    },
    nodejs: {
      name: 'Node.js',
      icon: 'devicon-nodejs-plain'
    },
    express: {
      name: 'Express',
      icon: 'devicon-express-original'
    },
    flask: {
      name: 'Flask',
      icon: 'devicon-flask-original'
    },
    spring: {
      name: 'Spring',
      icon: 'devicon-spring-plain'
    },
    postgresql: {
      name: 'PostgreSQL',
      icon: 'devicon-postgresql-plain'
    },
    prisma: {
      name: 'Prisma',
      icon: 'devicon-prisma-plain'
    },
    mongodb: {
      name: 'MongoDB',
      icon: 'devicon-mongodb-plain'
    },
    tensorflow: {
      name: 'TensorFlow',
      icon: 'devicon-tensorflow-original'
    },
    aws: {
      name: 'AWS',
      icon: 'devicon-amazonwebservices-plain'
    },
    azure: {
      name: 'Azure',
      icon: 'devicon-azure-plain'
    },
    docker: {
      name: 'Docker',
      icon: 'devicon-docker-plain'
    },
    selenium: {
      name: 'Selenium',
      icon: 'devicon-selenium-plain'
    },
    reactnative: {
      name: 'React Native',
      icon: 'devicon-react-original'
    },
    sqlite: {
      name: 'SQLite',
      icon: 'devicon-sqlite-plain'
    },
    raspberry: {
      name: 'Raspberry Pi',
      icon: 'devicon-raspberrypi-plain'
    },
    heroku: {
      name: 'Heroku',
      icon: 'devicon-heroku-plain'
    },
    tailwind: {
      name: 'Tailwind',
      icon: 'devicon-tailwindcss-plain'
    },
    cpp: {
      name: 'C++',
      icon: 'devicon-cplusplus-plain'
    }
  };

  function getVariant(variantKey: string) {
    return variantOptions[variantKey] || { name: 'Unknown', icon: '' };
  }

  $: selectedVariant = getVariant(variant);
</script>

<span class="inline-block">
  <div class="flex items-center space-x-1 mx-1">
    <i class={selectedVariant.icon}></i>
    <span class="text-gray-300">{selectedVariant.name}</span>
  </div>
</span>
