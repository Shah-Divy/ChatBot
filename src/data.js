// const data = {
//   chatinit: {
//     title: ["Hello <span class='emoji'> &#128075;</span>", "I am Mr. Chatbot", "How can I help you?"],
//     options: ["9th Grade", "10th Grade", "12th Grade"]
//   },
//   '9th': {
//     title: ["Please select your maths level"],
//     options: ['Basic Maths', 'Standard Maths'],
//     details: {
//       'Basic Maths': {
//         title: "Basic Math (Optional)",
//         description: `This option exists in some boards and caters to students who might not need advanced math for their chosen field. It focuses on the practical application of math concepts in everyday life. You'll learn core skills like calculations, working with different number systems, and basic geometry. The topics covered might overlap with standard math initially, but with a less in-depth approach. This option might be suitable if you're pursuing non-science streams like commerce or arts.`
//       },
//       'Standard Maths': {
//         title: "Standard Math",
//         description: `This is the most common option for 9th graders in India. It offers a comprehensive curriculum that dives deeper into core mathematical concepts. You'll encounter topics like algebra (polynomials, linear equations), geometry (exploring shapes and their properties), and even statistics and probability. Standard math emphasizes not just memorization, but also understanding the logic behind the calculations. This prepares you for more advanced math studies in higher grades, especially if you're considering a science or engineering path.`
//       }
//     }
//   },
//   '10th': {
//     title: ["Please select your stream"],
//     options: ["Science Stream", "Commerce Stream", "Arts Stream", "Diploma Programs"],
//   },
//   'science': {
//     title: ["Choose your interest"],
//     options: ["Physics, Chemistry, Biology (PCB)", "Mathematics (Mandatory)", "Computer Science", "Psychology", "Engineering Drawing (depending on the board)"],
//   },
//   'commerce': {
//     title: ["Commerce Stream"],
//     options: ["Accountancy", "Business Studies", "Economics (MEC)", "English (Mandatory)", "Mathematics (focuses on applications in commerce)", "Statistics", "Computer Science", "Psychology (depending on the board)"],
//   },
//   'arts': {
//     title: ["Arts Stream"],
//     options: ["English (Mandatory)", "History", "Political Science", "Geography", "Psychology", "Sociology", "Literature", "Fine Arts", "Music"],
//   },
//   'diploma': {
//     title: ["Diploma Programs"],
//     options: ["Varies depending on the chosen diploma"],
//   }
// };

// export default data;
const data = {
  chatinit: {
    title: ["Hello <span class='emoji'> &#128075;</span>", "I am Mr. Chatbot", "How can I help you?"],
    options: ["9th Grade", "10th Grade", "12th Grade"]
  },
  '9th': {
    title: ["Please select your maths level"],
    options: ['Basic Maths', 'Standard Maths'],
    details: {
      'Basic Maths': {
        title: "Basic Math (Optional)",
        description: `This option exists in some boards and caters to students who might not need advanced math for their chosen field. It focuses on the practical application of math concepts in everyday life. You'll learn core skills like calculations, working with different number systems, and basic geometry. The topics covered might overlap with standard math initially, but with a less in-depth approach. This option might be suitable if you're pursuing non-science streams like commerce or arts.`
      },
      'Standard Maths': {
        title: "Standard Math",
        description: `This is the most common option for 9th graders in India. It offers a comprehensive curriculum that dives deeper into core mathematical concepts. You'll encounter topics like algebra (polynomials, linear equations), geometry (exploring shapes and their properties), and even statistics and probability. Standard math emphasizes not just memorization, but also understanding the logic behind the calculations. This prepares you for more advanced math studies in higher grades, especially if you're considering a science or engineering path.`
      }
    }
  },
  '10th': {
    title: ["Please select your stream"],
    options: ["Science Stream", "Commerce Stream", "Arts Stream", "Diploma Programs"],
  },
  'science': {
    title: ["Choose your interest"],
    options: ["Physics, Chemistry, Biology (PCB)", "Physics, Chemistry, Mathematics (PCM)", "Computer Science", "Psychology", "Engineering Drawing (depending on the board)"],
    details: {
      'Physics, Chemistry, Biology (PCB)': {
        focus: "PCB stands for Physics, Chemistry, and Biology. This stream delves into the fascinating world of living organisms, exploring their fundamental principles, interactions with the environment, and the intricate processes that govern them.",
        coreSubjects: "Physics and Chemistry provide a strong foundation in the laws of nature and the properties of matter. However, Biology takes center stage. You'll explore cellular processes, anatomy, physiology, genetics, and ecology, fostering a deep understanding of life on a microscopic and macroscopic scale.",
        careerOptions: `PCB equips you for a diverse range of medical and biology-related professions. Some prominent options include:
        - Medical Professionals: Doctor (allopathic, dental, veterinary), Surgeon, Radiologist
        - Life Sciences: Pharmacist, Biotechnologist, Microbiologist, Geneticist, Ecologist
        - Research & Development: Research Scientist (Biological Sciences), Medical Laboratory Technologist
        - Healthcare: Dietician/Nutritionist, Public Health Specialist`
      },
      'Physics, Chemistry, Mathematics (PCM)': {
        focus: "PCM stands for Physics, Chemistry, and Mathematics. This stream emphasizes understanding the fundamental principles of physics, the very fabric of our universe. You'll delve into the properties of matter, from subatomic particles to galaxies.  Mathematics becomes the key tool, developing your analytical and problem-solving skills to tackle complex challenges.",
        coreSubjects: "Physics and Chemistry form the foundation, providing insights into the laws of nature and the behavior of matter. However, Mathematics takes center stage. You'll learn advanced mathematical concepts and techniques, equipping you to analyze problems logically and arrive at solutions.",
        careerOptions: `PCM opens doors to a plethora of engineering and technology-related fields. Some prominent options include:
        - Engineering: Mechanical, Civil, Electrical, Computer Science, Aerospace, etc.
        -Technical Fields: Architect, Pilot, Data Scientist, Statistician, Actuary
        - Physical Sciences: Physicist, Mathematician, Research Scientist (Physical Sciences)
        - Technology: Software Developer, Robotics Engineer, Technology Entrepreneur`
      }
    }
  },
  'commerce': {
    title: ["Choose your interest"],
    options: ["Accountancy", "Business Studies", "Economics (MEC)", "English (Mandatory)", "Mathematics (focuses on applications in commerce)", "Statistics", "Computer Science", "Psychology (depending on the board)"],
  },
  'arts': {
    title: ["Choose your interest"],
    options: ["English (Mandatory)", "History", "Political Science", "Geography", "Psychology", "Sociology", "Literature", "Fine Arts", "Music"],
  },
  'diploma': {
    title: ["Choose your interest"],
    options: ["Varies depending on the chosen diploma"],
  }
};

export default data;
