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
  username: "Ganesh Korada",
  title: "Hi all, I'm Ganesh",
  subTitle: emoji(
    "An AWS Certified Cloud Practitioner and Computer Science student with strong skills in cloud computing and AWS services. Hands-on experience in designing and deploying scalable cloud solutions and machine learning applications using technologies like Python, Docker, and Terraform. Demonstrates proficiency in cloud security, automation, and performance optimization through various real-time and cloud-integrated projects."
  ),
  resumeLink:
    "/Ganesh_Korada_Resume.pdf", // Resume download link
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ganesh572004",
  linkedin: "https://www.linkedin.com/in/ganesh-korada-2115b4303/",
  gmail: "ganeshkorada572004@gmail.com",
  instagram: "https://www.instagram.com/ganesh_korada572004/",
  gitlab: "",
  facebook: "https://www.facebook.com/profile.php?id=100091624745355",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Cloud Engineer, Software Engineer, Web Developer, Tech Explorer",
  skills: [
    emoji("⚡ AWS (EC2, S3, Lambda, RDS, CloudWatch), Cloud Infrastructure, Cloud Security"),
    emoji("⚡ Deployment Strategies (CI/CD), VPC, Auto-scaling, Monitoring, Performance Optimization"),
    emoji("⚡ Python, Java, C++, Git, Containerization (Docker, Kubernetes)")
  ],
  softwareSkills: [
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Kubernetes", fontAwesomeClassname: "fas fa-network-wired" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "C++", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "MySQL", fontAwesomeClassname: "fas fa-database" }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Bennett University",
      logo: require("./assets/images/bennettLogo.png"), // Updated to Bennett University logo
      link: "https://www.bennett.edu.in",
      subHeader: "B-Tech in Computer Science and Engineering",
      duration: "",
      desc: "Pursuing B-Tech in Computer Science and Engineering.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Cloud Computing Skills",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming & DevOps Abilities",
      progressPercentage: "65%"
    },
    {
      Stack: "Certifications & Professional Development",
      progressPercentage: "90%"
    },
    {
      Stack: "Application & Web Development",
      progressPercentage: "50%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Cloud Intern",
      company: "Corizo by Wipro",
      companylogo: require("./assets/images/Corizo logo.png"), // Replaced missing logo with Corizo logo
      date: "3 months",
      desc: "Worked as a Cloud Intern, gaining hands-on experience in cloud infrastructure, automation, and deployment strategies."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */


// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/drowsiness detection logo.png"),
      projectName: "Drowsiness Detection",
      projectDesc: "Developed a real-time Drowsiness Detection system using YOLOv5 and CNN, integrated with CloudWatch for real-time monitoring, deployed with Python and OpenCV.",
      footerLink: [
        { name: "GitHub Repository", url: "https://github.com/ganesh572004/Drowsiness-detection" }
      ]
    },
    {
      image: require("./assets/images/Employee Management logo.png"),
      projectName: "Employee Management",
      projectDesc: "Implemented admin-level access and real-time updates using Python Flask and MySQL, focusing on cloud-based backend development and data security.",
      footerLink: [
        { name: "GitHub Repository", url: "https://github.com/ganesh572004/Employee-Management-" }
      ]
    },
    {
      image: require("./assets/images/Plant Disease Detection logo.png"),
      projectName: "Plant Disease Detection",
      projectDesc: "Implemented a CNN model to classify plant diseases, deployed as a Streamlit web app on AWS, demonstrating cloud deployment and scalability.",
      footerLink: [
        { name: "GitHub Repository", url: "https://github.com/ganesh572004/Plant-Diesase-Detection" }
      ]
    },
    {
      image: require("./assets/images/Shopsmart ecommerces website logo.png"),
      projectName: "Shopsmart ecommerces website",
      projectDesc: "Developed a full-stack e-commerce website, demonstrating skills in web development and cloud hosting.",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Supervised Machine Learning",
      subtitle: "Completed the Supervised Machine Learning course.",
      image: require("./assets/images/Supervised Machine Learning logo.png"),
      imageAlt: "Supervised Machine Learning Certificate",
      footerLink: [
  { name: "Certification", url: "https://www.coursera.org/account/accomplishments/verify/JZLICPKNMJZT" },
  { name: "Download PDF", url: "https://www.coursera.org/account/accomplishments/certificate/JZLICPKNMJZT" }
      ]
    },
    {
      title: "Corizo Training Certificate",
      subtitle: "Completed Corizo's professional training program.",
      image: require("./assets/images/Corizo Training Certificate logo.png"),
      imageAlt: "Corizo Training Certificate",
      footerLink: [
  { name: "Certification", url: "https://credentials.corizo.in/credential/d0c439dd-312e-4f97-ac58-7335cd354650?view=recipient" },
  { name: "Download PDF", url: "/Ganesh_korada_Training_Certificate_Corizo_certificate.pdf" }
      ]
    },
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle: "Successfully completed the AWS Certified Cloud Practitioner certification.",
      image: require("./assets/images/AWS Certified Cloud Practitioner logo.png"),
      imageAlt: "AWS Certified Cloud Practitioner Logo",
      footerLink: [
  { name: "Certification", url: "https://www.credly.com/badges/b61b78ce-f251-4d33-b371-6e129ee1dd3d" }
      ]
    },
    {
      title: "AWS Academy Graduate",
      subtitle: "Completed AWS Academy Cloud Foundations course.",
      image: require("./assets/images/AWS Academy Graduate logo.png"),
      imageAlt: "AWS Academy Graduate Logo",
    footerLink: [
  { name: "Certification", url: "https://www.credly.com/badges/d8dbbd93-85a9-4401-ad21-516942145633/public_url" },
  { name: "Download PDF", url: "/AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations_Badge20250826-30-j2bifl.pdf" }
    ]
    },
    {
      title: "Improving Deep Neural Networks",
      subtitle: "Completed the Coursera course 'Improving Deep Neural Networks' by deeplearning.ai.",
      image: require("./assets/images/Improving Deep Neural Networks logo.png"),
      imageAlt: "Deep Learning Logo",
    footerLink: [
  { name: "Certification", url: "https://www.coursera.org/account/accomplishments/verify/DPYZZIWPAL1M" },
  { name: "Download PDF", url: "/Improving%20Deep%20Neural%20Networks.pdf" }
    ]
    },
    {
      title: "AWS Cloud Technical Essentials",
      subtitle: "Completed AWS Cloud Technical Essentials course.",
      image: require("./assets/images/AWS Cloud Technical Essentials logo.png"),
      imageAlt: "AWS Cloud Technical Essentials Logo",
    footerLink: [
  { name: "Certification", url: "https://www.coursera.org/account/accomplishments/verify/E1SO9IJ0WKVA" },
  { name: "Download PDF", url: "/AWS%20Cloud%20Technical%20Essentials.pdf" }
    ]
    },
    {
      title: "Digital business - Act on the digital world",
      subtitle: "Completed the course 'Digital business - Act on the digital world'.",
      image: require("./assets/images/Digital business - Act on the digital world logo.png"),
      imageAlt: "Digital Business Logo",
    footerLink: [
  { name: "Certification", url: "https://www.coursera.org/account/accomplishments/verify/BKLE3AXQFABV" },
  { name: "Download PDF", url: "/Digital%20business%20-%20Act%20on%20the%20digital%20world.pdf" }
    ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "",
  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: "",
  subtitle: "",
  podcast: [],
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
    "Want to discuss a project or just say hi? My inbox is open!",
  number: "7569102138",
  email_address: "ganeshkorada572004@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  splashScreen,
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  workExperiences,
  // openSource,
  achievementSection,
  blogSection,
  talkSection,
  contactInfo,
  educationInfo,
  isHireable,
  twitterDetails,
  resumeSection,
  bigProjects
};
