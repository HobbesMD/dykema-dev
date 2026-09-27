export type Role = {
	title: string;
	dates?: string;
};

export type Job = {
	company: string;
	url?: string;
	start: string;
	end?: string;
	roles: Role[];
	highlights: string[];
	stack: string[];
};

export const jobs: Job[] = [
	{
		company: 'Auto-Owners Insurance',
		url: 'https://www.auto-owners.com/',
		start: '2022',
		end: 'Present',
		roles: [
			{ title: 'Senior Software Developer', dates: 'Aug 2025 – Present' },
			{ title: 'Software Developer', dates: '2023 – 2025' },
			{ title: 'Associate Software Developer II', dates: '2022 – 2023' }
		],
		highlights: [
			'Led an enterprise-wide migration from TFVC to Git for an affiliate IT department: 60+ .NET projects and services, new Azure Pipelines, and a formal code review process.',
			'Created a DevOps enablement role: converted classic pipelines to YAML, added PR build validation, and now leading the move of SQL databases into source control.',
			'Implemented CI/CD in Azure Pipelines, cutting deployments from 10 minutes to under 2 and ending recurring configuration issues.',
			'Sole developer on an Archive & Purge microservice (38% less database storage) and a service-layer refactor decoupling applications from the SQL data layer.',
			'Selected to research and pilot AI tooling in the department’s development process.'
		],
		stack: ['C#', '.NET', 'SQL Server', 'Azure DevOps', 'YAML pipelines', 'Git']
	},
	{
		company: 'AvaSure',
		url: 'https://avasure.com/',
		start: '2018',
		end: '2022',
		roles: [
			{ title: 'Software Engineer in Test', dates: 'Apr 2022 – Aug 2022' },
			{ title: 'SDET Co-op', dates: '2018 – 2022' }
		],
		highlights: [
			'Pitched, designed, and built a .NET service to schedule automated tests across shared servers, with a concurrency algorithm to load-balance and sequence runs.',
			'Automated creating, closing, and tracking Jira bug tickets from test results, eliminating a manual QA workflow.',
			'Built a tool to version and track requirements so every release was tested against the right set.',
			'Built a React site for QA results and testing stats, plus SSRS reports on resource usage and coverage.'
		],
		stack: ['C#', '.NET', 'SQL Server', 'React', 'Selenium', 'SSRS']
	},
	{
		company: 'Grand Valley State University',
		start: '2022',
		roles: [{ title: 'B.S. Computer Science' }],
		highlights: [],
		stack: []
	}
];
