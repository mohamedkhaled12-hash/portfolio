export const profile = {
  name: "Mohamed Khaled Eid",
  role: "Junior Data Analyst | Data Science Enthusiast",
  tagline: "Turning Data Into Insights, Decisions & Intelligent Solutions.",
  intro: "Data analyst transitioning into data science, with a statistics foundation and hands-on work in Python, SQL, Power BI and machine learning — from dashboards to end-to-end predictive platforms.",
  linkedin: "https://linkedin.com/in/mohamed-khaled-b38860281",
  github: "https://github.com/mohamedkhaled12-hash",
  email: "mkhalied350@gmail.com",
  cv: "/Mohamed_Khaled_Eid_CV.pdf",
  location: "Cairo, Egypt",
};
export const about = [
  "I study statistics at the Faculty of Commerce (English Section), Benha University — a background that taught me to question numbers before trusting them.",
  "That curiosity pulled me into practical data work: cleaning and exploring data with SQL and Python, building Power BI dashboards, and training machine-learning models with scikit-learn and XGBoost.",
  "My graduation project, MindScope, is where these pieces meet — a behavioral and predictive platform I lead technically. I keep learning in public through courses on SQL, Databricks, PyTorch and Excel, and I'm heading toward data science.",
];
export const skills: Record<string, string[]> = {
  "Data Analytics & BI": ["SQL", "Advanced Excel", "Power Query", "PivotTables", "DAX", "Power BI", "Data Cleaning", "EDA", "Data Storytelling"],
  "Programming": ["Python", "Pandas", "NumPy", "Plotly"],
  "Machine Learning": ["Scikit-learn", "XGBoost", "Predictive Modeling", "Hyperparameter Tuning", "Feature Engineering", "PyTorch (intro)", "Gemini API"],
  "Statistics": ["Descriptive & Inferential Statistics", "Regression Analysis", "Hypothesis Testing"],
  "Data Platforms & Databases": ["PostgreSQL", "Databricks", "Databricks SQL", "Data Modeling"],
  "Tools": ["Streamlit", "Google Sheets API"],
};
export type Project = {
  slug: string; title: string; subtitle: string; status: string; image?: string; live?: string; github?: string;
  problem: string; solution: string; role: string; tech: string[]; features: string[]; featured?: boolean;
};
export const projects: Project[] = [
  { slug: "mindscope", title: "MindScope — Are We Losing Focus?", featured: true,
    subtitle: "A Statistical Analysis of Attention Decline and Digital Burnout in Endless Scrolling Environments",
    status: "Graduation project · 2026 · ongoing", live: "https://mindscope2.streamlit.app/",
    // image: "/projects/mindscope.png", // TODO: add a real screenshot and uncomment
    problem: "Endless-scroll apps may erode attention and contribute to digital burnout, but behavior is hard to measure and turn into early signals.",
    solution: "An interactive platform that analyzes app behavior and student behavioral patterns with ML pipelines, produces risk classifications, and adds a context-aware AI assistant for personalized recommendations.",
    role: "Technical Lead — architecture, modeling and technical implementation.",
    tech: ["Python", "Pandas", "Scikit-learn", "XGBoost", "Streamlit", "Google Sheets API", "Gemini"],
    features: ["App Behavior Analysis using Data Usage (MB) and App Usage Time (minutes)", "Student Risk Intelligence: behavioral patterns → risk classifications", "Burnout Score deliberately excluded as an input feature to avoid data leakage", "Gemini-powered assistant with custom prompt engineering"] },
  { slug: "call-center", title: "Sallah Call Center Performance Dashboard", subtitle: "Power BI dashboard for call-center KPI monitoring", status: "Personal project · 2026",
    problem: "Call-center managers need a quick, interactive view of service quality.",
    solution: "An interactive Power BI dashboard tracking Service Level, Handling Ratio, Abandonment Rate and Average Speed of Answer (ASA).",
    role: "Designed and built the dashboard.", tech: ["Power BI", "DAX"],
    features: ["Row-Level Security (RLS)", "Dark / Light mode", "Interactive filters", "Custom animated UI"] },
];
export const exploring = ["Data Science", "Machine Learning", "Deep Learning (PyTorch)", "Databricks & Lakehouse", "Data Engineering", "SQL", "Python", "Business Intelligence"];
export const education = { school: "Benha University", faculty: "Faculty of Commerce — English Section", degree: "Bachelor's Degree in Statistics", period: "Expected 2026", gpa: "3.98" };
export const experience = [
  { kind: "Internship", title: "Intern — Shoubra Branch, Branches Network", org: "Arab African International Bank (AAIB)", period: "25 Aug – 18 Sep 2025", text: "Customer support, inquiry resolution and transaction processing in a branch environment.", image: "/certs/aaib-internship.jpg" },
  { kind: "Employment", title: "Call Center Agent", org: "Ison Experiences", period: "2023 – 2024", text: "Handled customer inquiries and delivered solutions under pressure." },
  { kind: "Personal project", title: "MindScope & Power BI dashboard", org: "See Projects", period: "2026", text: "Self-directed analytics and ML work." },
];
