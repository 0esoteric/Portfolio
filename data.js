// Data for the portfolio
const skillsData = [
    { name: 'React', level: 95, category: 'frontend', icon: 'code' },
    { name: 'Next.js', level: 84, category: 'frontend', icon: 'zap' },
    { name: 'Node.js', level: 88, category: 'backend', icon: 'server' },
    { name: 'Express', level: 85, category: 'backend', icon: 'server' },
    { name: 'PostgreSQL', level: 80, category: 'backend', icon: 'database' },
    { name: 'Docker', level: 78, category: 'tools', icon: 'package' },
    { name: 'Postman', level: 84, category: 'tools', icon: 'package' },
    { name: 'AWS', level: 72, category: 'tools', icon: 'cloud' },
    { name: 'Git', level: 92, category: 'tools', icon: 'git-branch' },
    { name: 'MongoDB', level: 82, category: 'backend', icon: 'database' },
    { name: 'TypeScript', level: 90, category: 'languages', icon: 'file-code' },
    { name: 'Tailwind CSS', level: 93, category: 'frontend', icon: 'palette' },
    { name: 'Redux', level: 79, category: 'frontend', icon: 'palette' },
    { name: 'Bootstrap', level: 95, category: 'frontend', icon: 'palette' },
    { name: 'JavaScript', level: 95, category: 'languages', icon: 'file-code' },
    { name: 'Python', level: 85, category: 'languages', icon: 'file-code' },
    { name: 'JAVA', level: 85, category: 'languages', icon: 'file-code' },
   
];

const projectsData = [
    {
        id: '1',
        title: 'CRYPTO-NEST',
        description: 'Real-time crypto tracker with live market data, investment wallet, and smart filtering.',
        longDescription: 'Built a real-time cryptocurrency tracker with a responsive dashboard, mini-wallet, live API integration, and full MERN stack with secure auth and dynamic routing.',
        category: 'fintech',
        technologies: ['React', 'Node.js', 'Express.js', 'Material UI' , 'MongoDB', 'Restful APIs'],
        imageUrl: 'assets/Crypto_Img.png',
        demoUrl: 'https://crypro-nest.netlify.app/',
        githubUrl: 'https://github.com/0esoteric/Crypto',
        featured: true
    },
    {
        id: '2',
        title: 'Noema',
        description: 'A visionary productivity and self-discovery platform- a true digital extension of the mind',
        longDescription: 'Enable journals, smart task management, and AI-generated monthly insights. Builds a personalized knowledge graph by mapping user thoughts, actions, and habits. Architecture planned for AI integration to analyze journals, tasks and research data',
        category: 'productivity',
        technologies: ['React.js', 'Node.js', 'Express.js', 'chart.js', 'figma', "tailwindcss"],
        imageUrl: 'assets/Noema_img.png',
        demoUrl: 'https://example.com/cosmic-explorer',
        githubUrl: 'https://github.com/example/cosmic-explorer',
        featured: true
    },
    {
        id: '3',
        title: 'Film Liber',
        description: 'A hybrid review platform for both books and movies, a unique all-in-one solution.',
        longDescription: 'Integrated external APIs to fetch live media data and user reviews. Built withReact and integrated various APIs for data fetching.',
        category: 'entertainment',
        technologies: ['React', 'Node.js','RESTful APIs', 'Express.js', 'MongoDB', 'Axios', 'tailwindcss'],
        imageUrl: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
        demoUrl: 'https://example.com/dashboard',
        githubUrl: 'https://github.com/example/dashboard',
        featured: false
    },
    {
        id: '4',
        title: 'Asset Detective',
        description: 'Crafted an expense tracker that simplifies the way you manage your finances.',
        longDescription: 'Developed an Ultimate Expense Tracker, a full-stack MERN (MongoDB, Express, React, Node.js) application for efficient expense management.Implemented RESTful APIs to ensure smooth data handling, real-time updates, and secure CRUD operations. Designed a user-friendly, responsive UI to help users track expenses, view insights, and maintain financial control seamlessly.',
        category: 'fintech',
        technologies: ['React.js', 'MongoDB', 'Express.js', 'Node.js', 'Tailwind CSS'],
        imageUrl: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
        demoUrl: 'https://example.com/fitness-app',
        githubUrl: 'https://github.com/example/fitness-tracker',
        featured: false
    }
];

const experienceData = [
    {
        id: '1',
        title: 'Web Developer Intern',
        company: 'CETPA Infotech Pvt. Ltd.',
        period: '2024 Jan - 2024 Feb',
        description: [
            'ReactJS components, utilized JSX and state management.',
            'Improved front-end performance and APIintegration following best practices.',
            'Gained hands-on experience with mini projects',
        ],
        technologies: ['React.js', 'API Integration', 'React-router-dom', 'HTML5', 'CSS3', 'JavaScript', 'JSX', 'State Management',  ],
        type: 'work'
    },
   
    {
        id: '2',
        title: 'B-TECH in Computer Science',
        company: 'IMS Engineering College, Ghaziabad',
        period: '2015 - 2019',
        description: [
            'Graduating with currently 7.8 CGPA',
            'Skilled in DSA, full-stack web development, and modern tools',
            'Participated actively in college cultural and tech events',
            'Built real-world projects blending logic, design, and usability'
        ],
        technologies: ['Java', 'C', 'Python', 'Machine Learning', 'Data Structures', 'DBMS', 'Computer Networks', 'Operating Systems', 'Web Development'],
        type: 'education'
    },
    {
        id: '3',
        title: 'Intermediate',
        company: 'Ch. Chhabildass Public School, Ghaziabad',
        period: '2021 - 2022',
        description: [],
        technologies: ['Java', 'Python', 'C', 'HTML', 'CSS', 'JavaScript'],
        type: 'education'
    },
    {
        id: '4',
        title: 'High School',
        company: 'Ch. Chhabildass Public School, Ghaziabad',
        period: '2020 - 2021',
        description: [],
        technologies: [],
        type: 'education'
    }
];

const achievementsData = [
    {
        id: '1',
        title: '250+ Leetcode Problems Solved',
        description: '',
        date: '2024',
        category: 'milestone',
        icon: 'star',
        url: 'https://leetcode.com/u/0_esoteric/'
    },
    {
        id: '2',
        title: 'Best Task Master',
        description: 'Secured 2nd place in the coding club "Runtime Hackers',
        date: '2023',
        category: 'award',
        icon: 'trophy',
        url: 'https://example.com/hackathon'
    },
    {
        id: '3',
        title: 'AWS Certified Solutions Architect',
        description: 'Professional certification demonstrating expertise in AWS cloud architecture',
        date: '2023',
        category: 'certification',
        icon: 'award',
        url: ''
    }
];
