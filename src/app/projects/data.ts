export const projects = [
  // --- Robotic Evolution Project ---
  {
    slug: "robotic-evolution",
    title: "Robotic Evolution: Complex Behaviours",
    description: "Final year thesis investigating the correlation between pathfinding algorithm parameters and efficiency using game tag simulation.",
    tech: ["Python", "Algorithms", "Simulation", "Research"],
    details: `I wrote a thesis that answers the question of whether the number of parameters a pathfinding algorithm takes directly correlates to its efficiency. Each pathfinding algorithm was tested using a simulation based on the game tag and was run 100 times to define each algorithm's average time to catch the runner. The different algorithms tested were random movement, Dijkstra's algorithm, A* algorithm and jump point search. The deliverables were able to show a strong correlation between efficiency and the number of parameters; as the parameters increased, the algorithm got better at catching the runner in the quickest number of cycles. The paper concludes that more parameters do equate to better efficiency when catching the runner within the simulation.`,
    image: "/globe.svg",
    date: "Sep 2020 - May 2021",
    institution: "Aston University"
  },

  // --- Fractured Knight Game Project ---
  {
    slug: "fractured-knight",
    title: "Adventure Game | Fractured Knight",
    description: "Team-developed game using Godot IDE and C game engine, implementing Scrum and Agile methodologies.",
    tech: ["Godot", "C", "Scrum", "Agile", "Game Development"],
    details: `Working in a team to develop a game using the Godot IDE and a C game engine. Using Scrum development framework and Agile. Develop game Structure and implement algorithms. Leader of the technical team - Process tasks and run the development. Learnt a new Language with ease.`,
    image: "/window.svg",
    date: "Sep 2018 - May 2019",
    institution: "Aston University"
  },
]; 