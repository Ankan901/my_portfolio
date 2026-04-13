// src/data/servicesData.js
import { LayoutDashboard, Sparkles, Workflow } from 'lucide-react';

export const servicesData = [
  {
    icon: LayoutDashboard,
    title: 'Power BI Dashboard Development',
    description: 'Interactive dashboards that turn complex data into actionable insights',
    features: ['Real-time KPIs', 'Custom DAX measures', 'Row-level security', 'Automated refresh'],
  },
  {
    icon: Sparkles,
    title: 'Power Apps Development',
    description: 'Custom business applications that streamline operations',
    features: ['Canvas & Model-driven apps', 'SharePoint integration', 'Mobile responsive', 'Offline capabilities'],
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    description: 'End-to-end automation solutions using Power Automate',
    features: ['Approval workflows', 'Email automation', 'Data synchronization', 'Scheduled tasks'],
  },
];