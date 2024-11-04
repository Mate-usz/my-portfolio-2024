export default function Experiences() {
  const experiences = [
    {
      company: "Be | Shaping the Future",
      role: "Frontend Software Engineer (Full-time)",
      image: "/BE_logo.png",
      startDate: "Oct 2023",
      endDate: "May 2024",
      description: [
        "Developed various features for a new application that had to have all bank necessary features using Angular.",
        "Built multilanguage support for the notification editor.",
        "Worked with the backend team to improve the communication between the frontend and the backend.",
      ],
    },
    {
      company: "Blue Reply",
      role: "Frontend Developer (External Consultant)",
      image: "/blue-reply.png",
      startDate: "Mar 2022",
      endDate: "Sep 2023",
      description: [
        "Developed new pages and maintained the webapp for a well known assurance company using React.",
        "Built new features and improved the user experience for a banking application using Angular and Java for the backend.",
        "Helped other teams in finding solutions for their problems.",
      ],
    },
    {
      company: "Lipari Technology",
      role: "Software Developer (Full-time)",
      image: "/LT_white.png",
      startDate: "Feb 2022",
      endDate: "Sep 2023",
      description: [
        "Joined as a Developer to consolidate their team and bring value for clients",
        "Improved my frontend and backend skills.",
      ],
    },
  ];

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold">Esperienze</h2>
      <div className="mt-4 border rounded-lg p-4">
        {experiences.map((exp, index) => (
          <div key={index} className="flex space-x-4 mb-4">
            <img
              src={exp.image}
              alt="Logo Azienda"
              className="w-12 h-12 rounded object-contain bg-white dark:bg-transparent"
            />
            <div>
              <p className="text-sm text-gray-500">
                {exp.startDate} - {exp.endDate}
              </p>
              <p className="text-lg font-semibold">{exp.company}</p>
              <p className="text-sm text-gray-500">{exp.role}</p>
              <ul className="list-disc list-inside text-sm pl-2 text-gray-700">
                {exp.description.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
