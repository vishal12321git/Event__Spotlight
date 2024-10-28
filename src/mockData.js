const events = [
    {
      id: 1,
      name: "Music Concert",
      date: "2024-10-30",
      location: "City Park",
      description: "An amazing music concert featuring top artists.",
      image: "https://images.unsplash.com/photo-1468359601543-843bfaef291a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      name: "Art Exhibition",
      date: "2024-11-05",
      location: "Downtown Gallery",
      description: "Experience the latest works from local artists.",
      image: "https://plus.unsplash.com/premium_photo-1682088721334-3f9417c2fe8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      name: "Food Festival",
      date: "2024-11-10",
      location: "Main Street",
      description: "Taste dishes from around the world.",
      image: "https://plus.unsplash.com/premium_photo-1671148804515-c178c4daeb39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      name: "Tech Conference",
      date: "2024-11-15",
      location: "Convention Center",
      description: "The biggest tech conference of the year.",
      image: "https://images.unsplash.com/photo-1699962700166-be0200d7bf97?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 5,
      name: "Film Screening",
      date: "2024-11-20",
      location: "Cinema Hall",
      description: "Exclusive screening of an award-winning film.",
      image: "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 6,
      name: "Book Fair",
      date: "2024-11-25",
      location: "City Library",
      description: "A gathering for book lovers and authors.",
      image: "https://images.unsplash.com/photo-1631888722728-1578b7ba6dee?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 7,
      name: "Charity Run",
      date: "2024-11-28",
      location: "City Park",
      description: "A run for a good cause, open to all.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 8,
      name: "Cooking Workshop",
      date: "2024-12-02",
      location: "Cooking Studio",
      description: "Learn new recipes with a top chef.",
      image: "https://images.unsplash.com/photo-1605433247501-698725862cea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 9,
      name: "Photography Meetup",
      date: "2024-12-05",
      location: "Sunset Hill",
      description: "Capture beautiful landscapes with fellow photographers.",
      image: "https://images.unsplash.com/photo-1462926795244-b273f8a5454f?q=80&w=1906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 10,
      name: "Science Fair",
      date: "2024-12-10",
      location: "Science Museum",
      description: "Innovative projects by young scientists.",
      image: "https://images.unsplash.com/photo-1582513166998-56ed1ea02d13?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 11,
      name: "Yoga Retreat",
      date: "2024-12-15",
      location: "Mountain Lodge",
      description: "A weekend of relaxation and mindfulness.",
      image: "https://plus.unsplash.com/premium_photo-1713908832384-55726490c8e2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 12,
      name: "Comedy Night",
      date: "2024-12-20",
      location: "Laugh Factory",
      description: "A night filled with laughter and fun.",
      image: "https://plus.unsplash.com/premium_photo-1705883064233-e56b05f42b07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q29tZWR5fGVufDB8fDB8fHww"
    },
    {
      id: 13,
      name: "Wine Tasting",
      date: "2024-12-23",
      location: "Vineyard Valley",
      description: "Taste fine wines and learn about wine making.",
      image: "https://images.unsplash.com/photo-1513618827672-0d7c5ad591b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 14,
      name: "New Year's Gala",
      date: "2024-12-31",
      location: "Grand Hotel",
      description: "Ring in the new year with style.",
      image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 15,
      name: "Marathon",
      date: "2025-01-05",
      location: "City Stadium",
      description: "Challenge yourself in this annual marathon.",
      image: "https://plus.unsplash.com/premium_photo-1664304823165-888f56fc101b?q=80&w=1862&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 16,
      name: "Tech Workshop",
      date: "2025-01-10",
      location: "Tech Hub",
      description: "Hands-on workshop on the latest tech trends.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 17,
      name: "Fashion Show",
      date: "2025-01-15",
      location: "Fashion Plaza",
      description: "A showcase of the latest fashion designs.",
      image: "https://images.unsplash.com/photo-1605289355680-75fb41239154?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 18,
      name: "Classical Music Night",
      date: "2025-01-20",
      location: "Opera House",
      description: "An evening of classical music by renowned musicians.",
      image: "https://images.unsplash.com/photo-1543257455-a880cca3bb40?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 19,
        name: "Car Show",
        date: "2024-11-25",
        location: "Exhibition Grounds",
        description: "Showcase of vintage and new cars.",
        image: "https://plus.unsplash.com/premium_photo-1664303619183-6effc8cf1c01?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: 20,
        name: "Dance Show",
        date: "2024-12-03",
        location: "Dance Theater",
        description: "Experience beautiful dance performances.",
        image: "https://images.unsplash.com/photo-1533557252203-6ec9555fe200?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
  ];
  
  export default events;
  