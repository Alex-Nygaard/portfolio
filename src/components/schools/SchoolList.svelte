<script lang="ts">
  import aaltoLogo from '$lib/images/logos/aalto.png';
  import aaltoCampus from '$lib/images/campuses/aalto.jpg';
  import tudelftCampus from '$lib/images/campuses/tudelft.jpeg';
  import tudelftLogo from '$lib/images/logos/tudelft.png';
  import uwcisakCampus from '$lib/images/campuses/uwcisak.jpeg';
  import uwcisakLogo from '$lib/images/logos/uwcisak.png';
  import kgCampus from '$lib/images/campuses/kg.jpeg';
  import kgLogo from '$lib/images/logos/kg.png';
  import SchoolEntry from '$components/schools/SchoolEntry.svelte';

  const schools = [
    {
      name: 'Aalto University',
      degree: 'MSc Security and Cloud Computing - SECCLO Erasmus Mundus Joint Master',
      time: 'August 2024 - June 2026 (exp.)',
      location: 'Helsinki, Finland',
      logo: aaltoLogo,
      website: 'https://www.aalto.fi/en',
      background: aaltoCampus,
      tabs: [
        {
          label: '2024-2025',
          cells: [
            {
              label: 'Semester 1',
              values: ['TODO'],
            },
          ],
        },
      ],
    },
    {
      name: 'Technical University of Delft',
      degree: 'BSc Computer Science and Engineering',
      time: 'August 2021 - June 2024',
      location: 'Delft, Netherlands',
      logo: tudelftLogo,
      website: 'https://www.tudelft.nl/en',
      background: tudelftCampus,
      thesis: {
        sectionTitle: 'Thesis',
        title: 'Improving the Accuracy of Federated Learning Simulations',
        subTitle:
          'Using Traces from Real-world Deployments to Enhance the Realism of Simulation Environments',
        link: 'http://resolver.tudelft.nl/uuid:ab2ab1e4-5690-4fbe-a578-fb077fe3f801',
      },
      tabs: [
        {
          label: '2023-2024',
          cells: [
            { label: 'Q1', values: ['Exchange Semester @ HKUST (HK)'] },
            { label: 'Q2', values: ['Exchange Semester @ HKUST (HK)'] },
            {
              label: 'Q3',
              values: ['Functional Programming', 'Collaborative AI', 'Human Computer Interaction'],
            },
            { label: 'Q4', values: ['Thesis Project'] },
          ],
        },
        {
          label: '2022-2023',
          cells: [
            {
              label: 'Q1',
              values: ['Big Data Processing', 'Computer Graphics', 'Machine Learning'],
            },
            {
              label: 'Q2',
              values: ['Algorithm Design', 'Data Mining', 'Software Engineering Methods'],
            },
            {
              label: 'Q3',
              values: [
                'Automata Computability and Complexity',
                'Computational Intelligence',
                'Concepts of Programming Languages',
              ],
            },
            { label: 'Q4', values: ['Software Project'] },
          ],
        },
        {
          label: '2021-2022',
          cells: [
            {
              label: 'Q1',
              values: [
                'Computer Organisation',
                'Object-oriented Programming',
                'Reasoning and Logic',
              ],
            },
            {
              label: 'Q2',
              values: ['Algorithms and Data Structures', 'Calculus', 'Web and Database Technology'],
            },
            {
              label: 'Q3',
              values: ['Information and Data Management', 'Linear Algebra', 'OOP Project'],
            },
            {
              label: 'Q4',
              values: [
                'Computer Networks',
                'Probability Theory and Statistics',
                'Software Quality and Testing',
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'UWC ISAK Japan',
      degree: 'International Baccalaureate Diploma',
      time: 'August 2019 - May 2021',
      location: 'Karuizawa, Japan',
      logo: uwcisakLogo,
      website: 'https://uwcisak.jp/',
      background: uwcisakCampus,
      thesis: {
        sectionTitle: 'Extended Essay (EE)',
        title: 'A comparison study on detection of Deepfakes using ANNs',
        subTitle: 'Comparing the performance of CNNs, LSTMs, GRUs, and MLPs on detecting deepfakes',
        link: 'https://github.com/Alex-Nygaard/EE-Project',
      },
      tabs: [
        {
          label: 'Courses',
          cells: [
            {
              label: 'Higher Level',
              values: [
                'Mathematics: Analysis and Approaches',
                'Computer Science',
                'Global Politics',
              ],
            },
            {
              label: 'Standard Level',
              values: [
                'English Language and Literature',
                'Physics',
                'Norwegian Language and Literature',
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'Kristelig Gymnasium',
      degree: 'Certificate of Competence',
      time: 'August 2018 - June 2019',
      location: 'Oslo, Norway',
      logo: kgLogo,
      website: 'https://www.kg.vgs.no/',
      background: kgCampus,
    },
  ];
</script>

<div class="w-full space-y-2">
  {#each schools as school}
    <SchoolEntry {...school} />
  {/each}
</div>
