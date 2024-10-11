import React from 'react';
import { School, Group, People, LocalLibrary, VolunteerActivism } from '@mui/icons-material';

const RoleEducationalSupport = () => (
  <div className="flex flex-col items-center max-w-xs text-center">
    <div className="mb-4">
      <School style={{ fontSize: 50, color: '#0ea5e9' }} />
    </div>
    <h3 className="mb-2 text-lg font-medium tracking-widest uppercase text-[#0ea5e9]">
      Educational Support
    </h3>
    <p className="text-sm text-gray-600">
      Teaching children and organizing educational activities, enhancing understanding of educational challenges and child psychology.
    </p>
  </div>
);

const RoleCareerDevelopment = () => (
  <div className="flex flex-col items-center max-w-xs text-center">
    <div className="mb-4">
      <Group style={{ fontSize: 50, color: '#a3e635' }} />
    </div>
    <h3 className="mb-2 text-lg font-medium tracking-widest uppercase text-[#a3e635]">
      Career Development
    </h3>
    <p className="text-sm text-gray-600">
      Gaining practical skills, clarifying career goals, and building a professional network.
    </p>
  </div>
);

const RoleTeamworkEmpathy = () => (
  <div className="flex flex-col items-center max-w-xs text-center">
    <div className="mb-4">
      <People style={{ fontSize: 50, color: '#c026d3' }} />
    </div>
    <h3 className="mb-2 text-lg font-medium tracking-widest uppercase text-[#c026d3]">
      Teamwork and Empathy
    </h3>
    <p className="text-sm text-gray-600">
      Helping kids understand new concepts, fundraising, and developing communication, teamwork, and leadership skills.
    </p>
  </div>
);

const RolePersonalGrowth = () => (
  <div className="flex flex-col items-center max-w-xs text-center">
    <div className="mb-4">
      <LocalLibrary style={{ fontSize: 50, color: '#dc2626' }} />
    </div>
    <h3 className="mb-2 text-lg font-medium tracking-widest uppercase text-[#dc2626]">
      Personal Growth
    </h3>
    <p className="text-sm text-gray-600">
      Changing perspectives towards society, taking responsibility, and learning to manage emotions while helping others.
    </p>
  </div>
);

const RolePublicSpeaking = () => (
  <div className="flex flex-col items-center max-w-xs text-center">
    <div className="mb-4">
      <VolunteerActivism style={{ fontSize: 50, color: '#ea580c' }} />
    </div>
    <h3 className="mb-2 text-lg font-medium tracking-widest uppercase text-[#ea580c]">
      Public Speaking and Leadership
    </h3>
    <p className="text-sm text-gray-600">
      Enhancing public speaking and leadership skills through direct involvement in social work.
    </p>
  </div>
);

const RolesAndResponsibilities = () => {
  return (
    <div className="min-h-screen py-12 bg-white">
      {/* Title Section */}
      <h1 className="max-w-4xl mx-auto mb-8 text-4xl font-medium tracking-[0.4rem] text-center uppercase ">
        Intern Roles and Responsibilities
      </h1>

      {/* Roles and Responsibilities Section */}
      <div className="flex flex-wrap justify-center gap-12 px-4">
        <RoleEducationalSupport />
        <RoleCareerDevelopment />
        <RoleTeamworkEmpathy />
        <RolePersonalGrowth />
        <RolePublicSpeaking />
      </div>
    </div>
  );
};

export default RolesAndResponsibilities;
