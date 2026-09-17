export const sections = [
  {
    id: "problem",
    label: ".the problem",
    title: "job hunting is already a full-time job.",
    paragraphs: [
      `
        After graduating from college, I started applying for jobs and quickly realized how much work happened outside of actually applying.

        I was saving job postings in spreadsheets, trying to remember which companies I had already applied to, copying job descriptions, tracking application statuses, and checking my email for responses. None of these tasks were particularly difficult on their own, but together they created a lot of repetitive work.

        I started thinking: why am I manually tracking all of this when most of the information already exists in the browser?

        That became the idea behind JobHunter — a Chrome extension that could automatically turn the job-search process into something I could actually manage.
      `
    ],
  },

  {
    id: "idea",
    label: ".the idea",
    title: "what if the browser did the tracking for me?",
    paragraphs: [
        `
        At first, I imagined JobHunter as more than just an application tracker.

        The idea was to have a Chrome extension recognize the job I was applying to, save the important information automatically, and keep track of what I had and hadn't applied to. From there, I wanted it to eventually connect with email to recognize responses, help track interviews, add interviews to my calendar, and use AI to prepare me for each specific interview.

        The more I thought about it, the more I realized that the job search had a lot of repetitive processes that could potentially be automated.

        JobHunter started as a simple idea: make job hunting easier to keep track of.

        It gradually became an experiment in how much of the process I could actually automate.
        
        `
    ],
  },

  {
    id: "engineering",
    label: ".the engineering",
    title: "built inside the browser for 100% privacy",
    paragraphs: [
        `
        JobHunter is built with React and Vite as a Manifest V3 Chrome extension. Instead of relying on a separate backend or database, the application uses Chrome's extension APIs to interact with the browser and persist application data locally.

        One of the first engineering challenges was figuring out how to reliably extract information from different job boards. Greenhouse, Lever, Workday, Ashby, and other sites don't all structure their pages the same way, so JobHunter uses board-specific scraping logic alongside a generic fallback.

        Once a job is saved, the extension can pass the job information and resume data through an LLM to identify relevant keywords and generate a match score. That same job data becomes the foundation for the interview-preparation system.

        As the project grew, the challenge shifted from simply making features work to making all of those features work together reliably.
        *talk about umami privacy*
        `
    ],
  },

  {
    id: "product",
    label: ".the product",
    title: "from a tracker to a job-search copilot.",
    paragraphs: [
        `
        JobHunter has grown considerably beyond the original application tracker.

        Today, the extension can recognize jobs across platforms including Greenhouse, Lever, Workday, and Ashby, extract information from the posting, and save the application directly from the browser.

        From there, JobHunter can analyze the saved job against a user's resume using an LLM, generate a match score and relevant keywords, and create tailored interview preparation based on the job description.

        The application also includes a visual application pipeline, detailed application pages, keyboard shortcuts for managing applications, and an insights dashboard for tracking things like application volume and response rates.

        The goal is still the same as when I started: reduce the amount of manual work involved in managing a job search.
        
        `
    ],
  },

  {
    id: "issues",
    label: ".unexpected issues",
    title: "when everything started happening at once",
    paragraphs: [
    `
        One of the more difficult problems I ran into came from chrome.storage.local.

        As I added more features, multiple parts of the extension began interacting with the same application data. The popup, detail page, keyboard shortcuts, automatic resume scanning, and batch scanning could all read and write the application list asynchronously.

        Individually, each feature worked. The problem appeared when multiple operations happened close together: one operation could read an older version of the data and then write it back after another operation had already updated it.

        That created a real data-race problem where changes could be overwritten unexpectedly.

        This forced me to stop thinking about each feature independently and start thinking about how the entire application handled shared state and asynchronous operations. I also added safeguards such as a duplicate-click guard on the save flow while working through the larger storage issue.

        It was a good reminder that adding more features doesn't just increase what an application can do — it also increases the number of ways those features can interact with each other.
    `
    ],
  },

  {
    id: "current",
    label: ".current progress",
    title: "still in progress",
    paragraphs: [
    `
        JobHunter is still actively being developed.

        Some of the next areas I'm working toward include more reliable per-board scraping, better structured extraction of job-posting metadata, and expanding the application beyond the extension itself.

        The longer-term vision is much larger than the current version. I want JobHunter to eventually become an ecosystem around the entire job-search process — from discovering opportunities, to tracking applications, to preparing for interviews, and potentially automating parts of the application process itself.

        For now, I'm focused on making the foundation reliable before continuing to expand the scope.
    `
    ],
  },

  
];