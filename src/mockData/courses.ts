const courses = [
  {
    // _id: '0',
    name: 'Ultimate React Course',
    heading:
      'A Step-by-Step Guide to Building Modern Web Apps with React and TypeScript',
    description:
      "React is the most popular JavaScript library for building front-ends. It was created by Facebook and is widely used for building web, mobile, and desktop apps.\n With so many uses, it's one of best the tools to learn these days.\nThe problem is: React is complicated and most books and courses confuse learners or show outdated ways of using React that nobody uses anymore. That's why I've created this series for you.\nI've put together what I've learned about React over the last 5 years into a series of easy-to-understand videos packed with the latest best practices and techniques using real-world examples and a full-blown production-grade project.",
    image: '/react.jpg',
    instructor: 'Mosh Hamedani',
    instructor_description:
      "Hi! My name is Mosh Hamedani. I'm a software engineer with two decades of experience. I've taught millions of people how to code and how to become professional software engineers through my online courses and YouTube channel.",
    price: 1000,
    prerequisites:
      "You don't need prior knowledge of React to take this course. However, you should have some basic knowledge of web development, including HTML, CSS, and modern JavaScript.",
    level: 'beginner',
    duration: 8,
  },
  {
    // _id: '1',
    name: 'The Ultimate C++ course',
    heading: 'Master Modern C++: Go from Novice to Professional',
    description:
      "C++ is the language of choice for video games, embedded systems, IoT devices, high-performance apps, operating systems, database management systems, compilers, and so on. It's also the father of many languages like C#, Java, and JavaScript.\nWith so many uses, it's one of the best languages to learn these days.\nThe problem is: C++ is complicated and most books and courses fail to explain it properly, in simple words, the way most people can understand. That's why I've created this series for you.\nI've put together what I've learned about C++ over the last 20 years into a series of easy-to-follow videos packed with real-world examples and exercises.",
    image: '/c++.jpg',
    instructor: 'Mosh Hamedani',
    instructor_description:
      "Hi! My name is Mosh Hamedani. I'm a software engineer with two decades of experience. I've taught millions of people how to code and how to become professional software engineers through my online courses and YouTube channel.",
    price: 1000,
    prerequisites:
      "Don’t worry if you’re a complete beginner. You don’t need any experience with C++ or programming in general! From the beginning, I'll hold your hands and teach you everything you need to know.",
    level: 'beginner',
    duration: 12,
  },
  {
    // _id: '2',
    name: 'The Ultimate Typescript course',
    heading: 'Learn to make your JavaScript applications scale',
    description:
      "TypeScript has never been so popular! It's an essential language for building large-scalable applications. That's why more and more companies are looking for developers who know TypeScript well.\nIf you're a JavaScript developer and want to upgrade your skills for better job opportunities, you must have TypeScript on your resume. That's what this course is all about!\nIn under 5 hours, you'll learn everything you need to know to effectively use TypeScript in front-end and back-end development. You'll see how TypeScript boosts your productivity and helps you write more maintainable and robust code with fewer bugs.\nIf you're looking for a comprehensive, well-organized, and step-by-step TypeScript course that takes you from zero to hero, you're in the right place. Enroll now to get started!",
    image: '/typescript.jpg',
    instructor: 'Mosh Hamedani',
    instructor_description:
      "Hi! My name is Mosh Hamedani. I'm a software engineer with two decades of experience. I've taught millions of people how to code and how to become professional software engineers through my online courses and YouTube channel.",
    price: 1000,
    prerequisites:
      'To take this course, you need basic familiarity with JavaScript concepts such as variables and constants, arrays, objects, functions, and so on. No prior TypeScript knowledge is required as everything is covered from the ground up.',
    level: 'beginner',
    duration: 5,
  },
  {
    // _id: '3',
    name: 'The Complete Node.js Course',
    heading:
      'Learn to build highly-scalable, fast and secure RESTful APIs with Node, Express, and MongoDB.',
    description:
      "Want to learn Node.js, but are tired of wordy and slow instructors who talk to you like you've never coded before?\nThen I have the perfect course for you. A Node course that’s finally different from the rest.\nA perfect mix of theory and practice with no waffling.\nLearn to build RESTful APIs with Node, Express and MongoDB with confidence.\nIncludes best practices that pros apply, as well as going over common mistakes that many Node.js developers make.",
    image: '/nodejs.png',
    instructor: 'Mosh Hamedani',
    instructor_description:
      "Hi! My name is Mosh Hamedani. I'm a software engineer with two decades of experience. I've taught millions of people how to code and how to become professional software engineers through my online courses and YouTube channel.",
    price: 1000,
    prerequisites:
      "You don't need any familiarity with Node, Express or MongoDB. You just need some basic familiarity with JavaScript.",
    level: 'beginner',
    duration: 15,
  },
  {
    // _id: '4',
    name: 'The Ultimate Git Course',
    heading:
      'A Step-by-Step Guide to Building Modern Web Apps with React and TypeScript',
    description:
      "Git is the most popular Version Control System (VCS) in the world. It helps you track your project history, revert back your code in case of mistakes, and work effectively in a team.\nThat's why it's listed in almost every job description for a software or DevOps engineer!\nThe problem is: Git is a bit complex. I've seen seasoned developers using Git for years and still have no idea how Git really works.\nThat's why I've created this course. To help you understand Git inside out and use it with confidence. Once you understand how Git works, using Git commands should be a breeze.\nNo more copy/pasting Git commands from StackOverflow and hoping everything magically works! You'll be in control of the commands!",
    image: '/git.jpg',
    instructor: 'Mosh Hamedani',
    instructor_description:
      "Hi! My name is Mosh Hamedani. I'm a software engineer with two decades of experience. I've taught millions of people how to code and how to become professional software engineers through my online courses and YouTube channel.",
    price: 1000,
    prerequisites:
      'The course covers everything you need to know to go from Git zero to Git hero.',
    level: 'beginner',
    duration: 5,
  },
  {
    // _id: '5',
    name: 'The Ultimate HTML/CSS Course',
    heading: 'Master the Fundamentals of Web Development with HTML5 and CSS3',
    description:
      "Have you always wanted to learn web development but didn't know where to start? Tired of lengthy, boring and outdated courses? This course is for you.\nA fun, highly-practical and step-by-step course that teaches you modern HTML5/CSS3 from scratch. Learn the fundamentals in just 3 hours so you're ready for more advanced concepts covered in the second part of this course.\nThis is the HTML5/CSS3 course I wish I had when I was learning web development!\nWhether you’re an absolute beginner wanting to learn web development from scratch, or you know a bit of HTML5/CSS3 and need a refresher course to fill the gaps, this course will help you achieve your goals.",
    image: '/html_css.jpg',
    instructor: 'Mosh Hamedani',
    instructor_description:
      "Hi! My name is Mosh Hamedani. I'm a software engineer with two decades of experience. I've taught millions of people how to code and how to become professional software engineers through my online courses and YouTube channel.",
    price: 1000,
    prerequisites:
      'The course covers everything you need to know to go from zero to hero.',
    level: 'beginner',
    duration: 5,
  },
];

export default courses;
