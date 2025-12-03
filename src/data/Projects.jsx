// export const projectInfo = [
//   {
//     image: "/images/Project/project1.avif",
//     name: "Project 1",
//   },
//   {
//     image: "/images/Project/project2.avif",
//     name: "Project 2",
//   },
//   {
//     image: "/images/Project/project3.avif",
//     name: "Project 3",
//   },
//   {
//     image: "/images/Project/project4.avif",
//     name: "Project 4",
//   },
// ];

export const projects = [
  {
    slug: "ecommerce-website",
    name: "E-commerce Website",
    shortDesc: "A modern full-stack e-commerce platform.",
    image: "/images/Project/project1.avif",
    technologies: ["React", "Node.js", "MongoDB"],
    description: `
      This is a full-stack e-commerce application with
      dynamic products, cart system, payment system,
      admin dashboard and responsive UI.
    `,
    gallery: ["/images/Project/project1.avif", "/images/Project/project1.avif"],
  },

  {
    slug: "portfolio-website",
    name: "Portfolio Website",
    shortDesc: "A modern 3D animated portfolio.",
    image: "/projects/portfolio.png",
    technologies: ["Next.js", "GSAP", "Three.js"],
    description: `
      This portfolio contains animations, 3D effects,
      smooth scroll and clean code structure.
    `,
  },

  {
    slug: "hotel-booking-system",
    name: "Hotel Booking System",
    shortDesc: "Room booking + online payments + admin panel.",
    image: "/projects/hotel.png",
    technologies: ["React", "Express", "MySQL"],
    description: `
      A booking web app with room management,
      booking schedule, customer login and hotel admin dashboard.
    `,
  },

  {
    slug: "chat-application",
    name: "Chat App",
    shortDesc: "Real-time chat with authentication.",
    image: "/projects/chat.png",
    technologies: ["Socket.io", "Node.js", "MongoDB"],
    description: `
      Real-time messaging app with typing indicators,
      online status and private chat rooms.
    `,
  },
];
