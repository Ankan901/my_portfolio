// src/data/skillsData.js
import { BarChart3, AppWindow, Workflow, Code2 } from 'lucide-react';

export const skillsData = [
  {
    category: 'Data Analytics',
    icon: BarChart3,
    skills: [
      { name: 'Power BI', level: 90 },
      { name: 'Excel Advanced', level: 85 },
      { name: 'SQL', level: 75 },
    ],
  },
  {
    category: 'App Development',
    icon: AppWindow,
    skills: [
      { name: 'Power Apps', level: 88 },
      { name: 'SharePoint', level: 85 },
      { name: 'Dataverse', level: 75 },
    ],
  },
  {
    category: 'Automation',
    icon: Workflow,
    skills: [
      { name: 'Power Automate', level: 87 },
      { name: 'RPA', level: 70 },
      { name: 'Logic Apps', level: 65 },
    ],
  },
  {
    category: 'Programming',
    icon: Code2,
    skills: [
      { name: 'Python', level: 70 },
      { name: 'DAX', level: 80 },
      { name: 'Power Query M', level: 85 },
    ],
  },
];