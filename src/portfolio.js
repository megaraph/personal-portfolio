/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "RaphaelMurillo",
  title: "Hello, I'm Raph",
  subTitle: emoji(
    "An up and coming and passionate software developer 👨‍💻 who has experience in building Web applications and software solutions with Python / Django / Javascript and other frameworks"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1pdSRLAo9lV-0kdp_bVAznZH1tjMFD-b6/view?usp=sharing", // Set to empty to hide the button
  resumeName: "MURILLO-resume.pdf",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/megaraph",
  linkedin: "https://www.linkedin.com/in/raphael-m-860261246/",
  gmail: "raphaelmurillo633@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/raphael.murillo.9",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: emoji("LIFELONG LEARNER 😎. PASSIONATE IN DIFFERNT TECHNOLOGIES."),
  skills: [
    emoji("⚡ Develop interactive User Interfaces for web applications"),
    emoji("⚡ Integration of third party services using APIs"),
    emoji(
      "⚡ Handle data quality issues, such as missing values and inconsistencies."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "electronics",
      fontAwesomeClassname: "fas fa-robot"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "De La Salle University",
      logo: require("./assets/images/dlsuLogo.png"),
      subHeader: "BS in Biomedical Engineering",
      duration: "Sep 2024 - Present"
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "De La Salle University - Integrated School",
      logo: require("./assets/images/dlsuLogo.png"),
      subHeader: "SHS, STEM",
      duration: "Sep 2022 - Sep 2024",
      desc: "Took up STEM during SHS. Successfully published research paper to an international conference.",
      descBullets: [
        "General Excellence - Silver (with High Honors)",
        "Outstanding Research Award",
        "Outstanding Organization Member",
        "Exemplary Conduct Award"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Data Analytics",
      progressPercentage: "70%"
    },
    {
      Stack: "Electronics",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: true, // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Personal Projects",
  subtitle: "PROJECTS THAT I WORKED ON DURING MY FREE TIME",
  projects: [
    {
      image: require("./assets/images/hourglass.png"),
      projectName: "Hourglass",
      projectDesc:
        "Hourglass is a chrome extension made with JavaScript that automates tab switching based on your schedule",
      footerLink: [
        {
          name: "Visit Source",
          url: "https://github.com/megaraph/tab-scheduler"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/johnianNetwork.png"),
      projectName: "Johnian Network",
      projectDesc:
        "The Johnian Network was a discussion site where anyone can post comments and share images in different themed boards",
      footerLink: [
        {
          name: "Visit Source",
          url: "https://github.com/megaraph/johnian-network"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters",

  achievementsCards: [
    {
      title: "IEEE Published Author",
      subtitle:
        "Published a paper in the 2023 IEEE 15th International Conference on Humanoid, Nanotechnology, Information Technology, Communication and Control, Environment, and Management (HNICEM)",
      image: require("./assets/images/ieeeLogo.jpg"),
      imageAlt: "IEEE Logo",
      footerLink: [
        {
          name: "View Paper",
          url: "https://ieeexplore.ieee.org/document/10589040"
        }
      ]
    },
    {
      title: "2022 World Youth Coders Hackathon (Participant)",
      subtitle:
        "Developed an application that lets people earn points, rank up, and complete challenges to gamify electricity saving.",
      image: require("./assets/images/wcc.jpeg"),
      imageAlt: "World Coding Club Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1PV4OGRl2MMmgnAxRKPYyXZedLnfnJBVN/view?usp=sharing"
        },
        {
          name: "View Source",
          url: "https://github.com/megaraph/summerventure"
        }
      ]
    },
    {
      title: "RAISE Hackathon (Participant)",
      subtitle:
        "Investigated the relationship between dengue outreaks and several variables such as weather patterns, population density, and historical data.",
      image: require("./assets/images/bcmuLogo.jpg"),
      imageAlt: "Birhmingham City University",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1_A27lQA8YQbEp3CLJicF6pNWaeEaCzHs/view"
        }
      ]
    },
    {
      title: "CS50x (Completer)",
      subtitle:
        "Completed CS50x, including ten problem sets, ten labs, and one final project.",
      image: require("./assets/images/harvardLogo.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://certificates.cs50.io/1488bde8-f380-4a61-8906-fab47b1e63d4.pdf?size=letter"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or need to contact me? My Inbox is open for all.",
  number: "raph_murillo@dlsu.edu.ph",
  email_address: "raphaelmurillo633@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
