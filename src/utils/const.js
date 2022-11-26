import InvestorPulseThumbnail from '../img/InvestorPulse.webp';
import EquityComps from '../img/EquityComps.webp';

const experiences = [
    {
        index: 0,
        organization: 'SOFTEL Communications',
        link: 'https://www.softel.com/',
        designation: 'Microsoft Technical Sales Architect',
        duration: 'September 2022 - Current',
        description: [
            `OIntegrating SOFTEL’s Dynamics 365 with Microsoft Partner Center for Lead generations and Business Opportunities.
            `,
            `Automating various manual processes using Microsoft Power Automate (Flow).`,
            `Creating and Implementing marketing and promotional strategies working with the key Microsoft contacts and SOFTEL leads.`, 
            `Populating the business development opportunities in Dynamics 365 with all relevant information and registering the leads in the Microsoft partner center.`,
            `Documenting and following up with the next steps on the business opportunities upon meetings with clients for Modern Workplace and Security Offerings.`,
            `Participating in customer Modern Workplace and Security Workshops and capturing key metrics as shared by the customer for future opportunities and adding the metrics in Dynamics 365.`]
    },
    {
        index: 1,
        organization: 'Morningstar Inc.',
        link: 'https://www.morningstar.co.uk/uk/',
        designation: 'Associate DevOps Engineer',
        duration: 'May 2021 - September 2022',
        description: [`Autonomously handling projects while working on productionizing & optimizing the Machine Learning model named Morningstar Investor Pulse deploying various models with different parameters and attributes using a single Jenkins Pipeline using AWS services like EC2, Cloudwatch, Code Deploy, and many more Code and DevOps tools and services. Saved up to 50 percent on production costs, every monthly run and 30 percent reduction in production time for Morningstar Investor Pulse.`, `Remodeling and developing hybrid AWS architecture for Morningstar Equity Comparables which provides cross-sectional data for company similarity. The hybrid AWS architecture includes connecting an On-Premise server and Database. This includes using the AWS Data pipeline for EMR and dependent scale applications.`
            , ` Building and maintaining CI/CD pipelines, data pipelines, and other ML/ NLP orchestrations for projects in the development phase. Collaborating with technology partners and stakeholders to adopt and help them design, build and integrate the right DevOps tools.`,`Providing technical and investment guidance to internal users, mostly analysts and researchers, and data scientists while also optimizing alignment with the in-house platform and making adoption easy when new services and products become available.`
            , ` Creating and delivering solutions that address new levels of complexity, scalability, and performance, allowing for breakthrough advancements in existing products and services.` , `Assisting in the development and implementation of data management and analytics policies, procedures, and best practices.` ]
    },
    {
        index: 2,
        organization: 'Ashnik Pte',
        link: 'https://www.ashnik.com/',
        designation: 'Technical Function - Intern',
        duration: 'April 2021 - May 2021',
        description: [` Worked as a Technical Function Intern with the DevOps Team at Ashnik.`
            , `Programmed and automated frequently executed manual tasks by using shell and python scripts by 80% which was performed manually every week by the client. Built and managed pipelines using Continuous Integration tool - Jenkins for automating integration from source code management to deployment on test servers.`
            , `Solved manual infrastructure provisioning & deployment issues with Infrastructure as Code (IaC) Tool- Terraform & Ansible for an end-to-end automation of infrastructure. Engineered & programmed Terraform from scratch for initial infrastructure setup & managing the infrastructure as well as Ansible for configuration management, application setup, and managing the application after deployments.`
            , `Virtualized the servers using Docker for the testing and development environments needs, also configuration automation using Docker containers.`
            , ` Assisted in building the process of recurring payments for a leading online payment gateway company.`]
    },
    {
        index: 3,
        organization: 'RAIN Technologies',
        link: 'https://www.tradingrooms.in/',
        designation: 'Associate - Intern',
        duration: 'May 2021 - September 2022',
        description: [`Worked directly under the guidance of Head of Business, Mr. Raghu Kumar (Past Co-founder of Upstox.)` , `Designed, built, tested, and deployed various strategies for Algorithmic Trading. Handled risk management of the funds associated with the live deployment of strategies. Back-tested and re-engineered the deployed strategies at regular intervals as per the results provided by the algorithms.`
            , `Managed customer relations and customer service through weekly communication and interaction. Worked alongside retail representatives to boost sales by enhancing product presentations and advertising collateral. Assisted to increase assets under management by 23% after successfully converting leads into clients and adding more capital from existing clients.`
            , `Worked with founders and assisted them in managing to aggressively grow the social media presence of RAIN Technologies and also introduced RAIN Podcasts where the founders interviewed different individuals related to the finance domain.` ]
    },
];

const projects = [
    {
        name: 'Morningstar Investor Pulse',
        image: InvestorPulseThumbnail,
        links: [
            {
                name: 'wesbiteLink',
                link: 'https://newsroom.morningstar.com/newsroom/news-archive/press-release-details/2018/New-Morningstar-Competitive-Intelligence-Tool--Investor-Pulse--Allows-Asset-Managers-to-Better-Assess-the-Flows-Landscape/default.aspx'
            }
        ],
        desc: ` Investor Pulse, a business intelligence tool that delivers actionable insights, predictive analytics and advanced competitive analysis to help asset managers meet investor preferences. Investor Pulse displays up-to-date asset flows data at a glance and helps asset management teams predict likely future outcomes on where flows are going and why, uncover new insights, and deliver more value to the end investor.`,
        languages: 'AWS CodeDeploy, AWS EC2, Bitbucket, Jenkins, Prometheus, Grafana and many more'
    },
    {
        name: 'Morningstar Equity Comparables',
        image: EquityComps,
        links: [
            {
                name: 'wesbiteLink',
                link: 'https://www.morningstar.com/insights/2019/02/21/comparable-companies',
            }
        ],
        desc: `Equity Comparables is a Machine Learning Project which is developed by the Quant Research Team at Morningstar Inc. This is a new method which automatically generates a full list of comparable companies, even if a firm’s competitors aren’t all in the same sector or industry. A company's comparability to another is based on a score that helps us determine how similar the two companies are. We also use this score to generate a ranked list of comparable companies.`,
        languages: 'AWS Datapipeline, AWS EMR, AWS RDS, Postgres SQL, AWS Cloudwatch and manymore'
    }
]

const iconObjects = {
    wesbiteLink: 'fas fa-external-link-alt',
    githubLink: 'fab fa-github-square',
    linkedinLink: 'fab fa-linkedin-in',
    youtubeLink: 'fab fa-youtube',
    paperLink: 'fas fa-newspaper'
}

export {experiences, projects, iconObjects}