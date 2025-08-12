import React from "react";

const experiences = [
  {
    company: "Cognizant Technologies Service Limited",
    period: "June 2022 – Present",
    role: "Associate Project Management / Operations Management (PMO)",
    details: [
      "Managed BU operations including financial forecasting (T&M, Fixed price projects).",
      "Tracked actual revenue/bookings vs budget numbers.",
      "Handled SOW tracking and renewals for key accounts.",
      "Collaborated with finance & operations teams for BU support.",
      "Prepared and reviewed cost estimates for projects."
    ]
  },
  {
    company: "Mastree (Edu Tech)",
    period: "Nov 2020 – Mar 2021",
    role: "Sales Trainer",
    details: [
      "Trained new Business Development Executives on sales, soft skills, and processes.",
      "Created training content and provided OJT support.",
      "Prepared and analyzed bi-weekly and quarterly training reports."
    ]
  },
  {
    company: "OYO Rooms & Apartments Pvt Ltd",
    period: "Sept 2019 – Jan 2020",
    role: "Assistant Manager – Learning and Development",
    details: [
      "Trained South India zone employees on soft skills, behavioral, and process training.",
      "Created LMS training modules, videos, and handled system testing.",
      "Collaborated with HR Operations and Payroll for candidate onboarding."
    ]
  },
  {
    company: "Collabera Services Pvt Ltd",
    period: "Jul 2018 – Jun 2019",
    role: "Senior Executive – Learning and Development (Corporate Trainer)",
    details: [
      "Conducted skill gap analyses and created training content.",
      "Trained new hires on communication, soft skills, and voice/accent.",
      "Performed live call audits and provided constructive feedback."
    ]
  }
];

const Experiences = () => {
  return (
    <section id="experience" className="w-full px-[12%] py-16 bg-gray-50 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-serif text-gray-600">Career Journey</h4>
      <h2 className="text-center text-4xl font-serif font-bold mb-14">Professional Experience</h2>

      <div className="relative">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center mb-12 md:mb-16 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Card */}
            <div className=" shadow-lg rounded-xl p-6 md:w-1/2 transition-transform duration-300 hover:scale-[1.02]">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-gray-800">{exp.company}</h3>
                <span className="text-sm text-gray-500">{exp.period}</span>
              </div>
              <p className="text-indigo-600 font-medium mb-3">{exp.role}</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {exp.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>

            {/* Connector line + Dot */}
            <div className="hidden md:flex flex-col items-center justify-center md:w-1/12">
              <div className="w-4 h-4 bg-indigo-600 rounded-full border-4 border-white z-10"></div>
              <div className="flex-1 w-[2px] bg-gray-300"></div>
            </div>

            {/* Spacer for zig-zag */}
            <div className="md:w-1/2"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
