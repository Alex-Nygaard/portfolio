<script lang="ts">
  import aaltoLogo from '$lib/images/logos/aalto.png';
  import aaltoCampus from '$lib/images/campuses/aalto.jpg';
  import tudelftCampus from '$lib/images/campuses/tudelft.jpeg';
  import tudelftLogo from '$lib/images/logos/tudelft.png';
  import uwcisakCampus from '$lib/images/campuses/uwcisak.jpeg';
  import uwcisakLogo from '$lib/images/logos/uwcisak.png';
  import kgCampus from '$lib/images/campuses/kg.jpeg';
  import kgLogo from '$lib/images/logos/kg.png';
  import SchoolEntry from '$components/schools/SchoolEntry_v2.svelte';
  import Courses from '$components/schools/Courses.svelte';
  import Year from '$components/schools/Year.svelte';
  import School from '$components/schools/School.svelte';
  import Years from '$components/schools/Years.svelte';
  import Legend from '$components/schools/Legend.svelte';
  import LegendOption from '$components/schools/LegendOption.svelte';
</script>

<School
  name="Aalto University & Technical University of Denmark"
  background={aaltoCampus}
  preDegreeNote="Erasmus Mundus Joint Master"
  degree="MSc Security and Cloud Computing (SECCLO)"
  location="Helsinki & Copenhagen"
  time="2024-2026 (exp.)"
>
  <Legend>
    <LegendOption category="seccloCloud" label="Cloud ☁️" />
    <LegendOption category="seccloSecurity" label="Security 🔒️" />
    <LegendOption category="seccloWebDev" label="Web Dev 🧑‍💻" />
    <LegendOption category="seccloResearch" label="Research 🔬" />
    <LegendOption category="seccloWork" label="Work 💼" />
  </Legend>
  <Years>
    <Year header="Year 1" time="2024-2025" location="Helsinki, Finland">
      <Courses
        header="Semester 1"
        categorizedCourses={{
          seccloCloud: {
            label: '☁️',
            courses: [
              'Cloud Software and Systems',
              'Designing and Building Scalable Web Applications',
            ],
          },
          seccloSecurity: {
            label: '🔒',
            courses: ['Information Security', 'Network Security', 'Cryptography'],
          },
          seccloWebDev: {
            label: '🧑‍💻',
            courses: ['Web Software Development'],
          },
          seccloWork: {
            label: '💼',
            courses: ['Internship'],
          },
        }}
      />
      <Courses
        header="Semester 2"
        categorizedCourses={{
          seccloCloud: {
            label: '☁️',
            courses: ['Big Data Platforms', 'Microservice architectures and serverless computing'],
          },
          seccloSecurity: {
            label: '🔒',
            courses: ['Platform Security'],
          },
          seccloResearch: {
            label: '🔬',
            courses: [
              'Seminar in Computer Science',
              'Academic Communication for MSc Students',
              'SECCLO Summer School ☀️',
            ],
          },
          seccloWork: {
            label: '💼',
            courses: ['Internship'],
          },
        }}
      />
    </Year>
    <Year header="Year 2" time="2025-2026" location="Copenhagen, Denmark">
      <Courses
        header="Semester 1"
        categorizedCourses={{
          seccloSecurity: {
            label: '🔒',
            courses: ['Ethical Hacking', 'Cybersecurity Fundamentals', 'Program Analysis'],
          },
          seccloResearch: {
            label: '🔬',
            courses: ['Research Topics in Cybersecurity', 'Model Checking'],
          },
        }}
      />
      <Courses
        header="Semester 2"
        categorizedCourses={{
          seccloResearch: {
            label: '🔬',
            courses: ['Master Thesis Project'],
          },
        }}
      />
    </Year>
  </Years>
</School>

<School
  name="Technical University of Delft"
  background={tudelftCampus}
  degree="BSc Computer Science and Engineering"
  location="Delft, Netherlands"
  time="August 2021 - June 2024"
>
  <Legend>
    <LegendOption category="tudelftMath" label="Math 🧮" />
    <LegendOption category="tudelftSystems" label="Systems 🛠️" />
    <LegendOption category="tudelftSoftware" label="Software Development 🧑‍💻" />
    <LegendOption category="tudelftModels" label="Computational Theory 💻" />
    <LegendOption category="tudelftData" label="Data and AI 🤖" />
    <LegendOption category="tudelftExchange" label="Exchange ✈️" />
    <LegendOption category="tudelftResearch" label="Research 🔬" />
  </Legend>
  <Years>
    <Year header="Year 1">
      <Courses
        header="Quarter 1"
        categorizedCourses={{
          tudelftMath: {
            label: '🧮',
            courses: ['Reasoning and Logic'],
          },
          tudelftSystems: {
            label: '🛠️',
            courses: ['Computer Organisation'],
          },
          tudelftSoftware: {
            label: '🧑‍💻',
            courses: ['Object-oriented Programming'],
          },
        }}
      />
      <Courses
        header="Quarter 2"
        categorizedCourses={{
          tudelftMath: {
            label: '🧮',
            courses: ['Calculus'],
          },
          tudelftSoftware: {
            label: '🧑‍💻',
            courses: ['OOP Project'],
          },
          tudelftData: {
            label: '🤖',
            courses: ['Web and Database Technology'],
          },
        }}
      />
      <Courses
        header="Quarter 3"
        categorizedCourses={{
          tudelftMath: {
            label: '🧮',
            courses: ['Linear Algebra'],
          },
          tudelftModels: {
            label: '💻',
            courses: ['Algorithms and Data Structures'],
          },
          tudelftData: {
            label: '🤖',
            courses: ['Information and Data Management'],
          },
        }}
      />
      <Courses
        header="Quarter 4"
        categorizedCourses={{
          tudelftMath: {
            label: '🧮',
            courses: ['Probability Theory and Statistics'],
          },
          tudelftSystems: {
            label: '🛠️',
            courses: ['Computer Networks'],
          },
          tudelftSoftware: {
            label: '🧑‍💻',
            courses: ['Software Quality and Testing'],
          },
        }}
      />
    </Year>
    <Year header="Year 2">
      <Courses
        header="Quarter 1"
        categorizedCourses={{
          tudelftSoftware: {
            label: '🧑‍💻',
            courses: ['Software Engineering Methods'],
          },
          tudelftData: {
            label: '🤖',
            courses: ['Big Data Processing', 'Machine Learning'],
          },
        }}
      />
      <Courses
        header="Quarter 2"
        categorizedCourses={{
          tudelftMath: {
            label: '🧮',
            courses: ['Computer Graphics'],
          },
          tudelftModels: {
            label: '💻',
            courses: ['Algorithm Design'],
          },
          tudelftData: {
            label: '🤖',
            courses: ['Data Mining'],
          },
        }}
      />
      <Courses
        header="Quarter 3"
        categorizedCourses={{
          tudelftSoftware: {
            label: '🧑‍💻',
            courses: ['Concepts of Programming Languages'],
          },
          tudelftModels: {
            label: '💻',
            courses: ['Automata Computability and Complexity'],
          },
          tudelftData: {
            label: '🤖',
            courses: ['Computational Intelligence'],
          },
        }}
      />
      <Courses
        header="Quarter 4"
        categorizedCourses={{
          tudelftSoftware: {
            label: '🧑‍💻',
            courses: ['Software Project 💼'],
          },
        }}
      />
    </Year>
    <Year header="Year 3">
      <Courses
        header="Quarter 1"
        categorizedCourses={{
          tudelftExchange: {
            label: '✈️',
            courses: ['Exchange Semester @ Hong Kong University of Science and Technology'],
          },
        }}
      />
      <Courses
        header="Quarter 2"
        categorizedCourses={{
          tudelftExchange: {
            label: '✈️',
            courses: ['Exchange Semester @ Hong Kong University of Science and Technology'],
          },
        }}
      />
      <Courses
        header="Quarter 3"
        categorizedCourses={{
          tudelftSoftware: {
            label: '🧑‍💻',
            courses: ['Functional Programming', 'Human Computer Interaction'],
          },
          tudelftData: {
            label: '🤖',
            courses: ['Collaborative AI'],
          },
        }}
      />
      <Courses
        header="Quarter 4"
        categorizedCourses={{
          tudelftResearch: {
            label: '🔬',
            courses: ['Thesis Project'],
          },
        }}
      />
    </Year>
  </Years>
</School>

<School
  name="UWC ISAK Japan"
  background={uwcisakCampus}
  degree="International Baccalaureate Diploma"
  location="Karuizawa, Japan"
  time="August 2019 - May 2021"
>
  <Legend>
    <LegendOption category="uwcisakMath" label="Math 🧮" />
    <!--    <LegendOption category="uwcisakCS" label="CS 💻" />-->
    <!--    <LegendOption category="uwcisakPolitics" label="Politics 🌍" />-->
    <!--    <LegendOption category="uwcisakEnglish" label="English 📚" />-->
    <!--    <LegendOption category="uwcisakPhysics" label="Physics 🔭" />-->
    <!--    <LegendOption category="uwcisakNorwegian" label="Norwegian 🇳🇴" />-->
    <LegendOption category="uwcisakSciences" label="Sciences 🔭" />
    <LegendOption category="uwcisakHumanities" label="Humanities 🏛️" />
  </Legend>
  <Year header="Courses">
    <Courses
      header="Higher Level"
      categorizedCourses={{
        uwcisakMath: {
          label: '🧮',
          courses: ['Mathematics: Analysis and Approaches'],
        },
        uwcisakSciences: {
          label: '🔭',
          courses: ['Computer Science'],
        },
        uwcisakHumanities: {
          label: '🏛️',
          courses: ['Global Politics'],
        },
      }}
    />
    <Courses
      header="Standard Level"
      categorizedCourses={{
        uwcisakHumanities: {
          label: '📚',
          courses: ['English Language and Literature', 'Norwegian Language and Literature'],
        },
        uwcisakSciences: {
          label: '🔭',
          courses: ['Physics'],
        },
      }}
    />
  </Year>
</School>

<School
  name="Kristelig Gymnasium"
  background={kgCampus}
  degree="Certificate of Competence"
  location="Oslo, Norway"
  time="August 2018 - June 2019"
></School>
