// ==========================================================================
//  EDIT ME. Everything on the site comes from this file.
//  Change the text between the quotes. Keep the quotes and the commas.
//  Save, then redeploy (see DEPLOY.md).
//
//  To add an image: put the file in an "images" folder next to this file,
//  then write its path below, e.g.  headshot: "images/james.jpg"
//  Leave a path as ""  and that image is simply skipped — nothing breaks.
// ==========================================================================

const CONTENT = {

  name: "James Yambasu",
  handle: "barjona_",
  role: "Survey Researcher & Data Analyst",
  tagline: "Survey researcher and data analyst — Freetown, Sierra Leone",

  // ---------------------------------------------------------------- images
  images: {
    headshot: "",            // headshot removed per request
    headshotAlt: "James Yambasu",
    resume: ""   // resume removed per request
  },

  // ------------------------------------------------------------------ hero
  hero: {
    heading: "I turn messy field data into decisions people can act on.",
    sub: "Third-year Mathematics and Statistics student at Fourah Bay College. I work the whole research chain — building the survey instrument, running the fieldwork, cleaning the data, and wri[...]",
    stats: [
      { number: "132", label: "survey responses cleaned in a single audit" },
      { number: "29", label: "structural errors fixed in a live XLSForm" },
      { number: "4", label: "bounties won on Learn2Earn — SLE 1.6k earned" }
    ]
  },

  // ----------------------------------------------------------------- about
  about: {
    heading: "About",
    paragraphs: [
      "I am a Mathematics and Statistics student at Fourah Bay College, University of Sierra Leone, with a minor in Geology, now entering my third year.",
      "Alongside my studies I work as Personal Assistant to a Technical Assistant at IMACS, supporting climate-informed disease surveillance: auditing KoboToolbox submissions and assisting CI-EWS [...]",
      "I am an Undergraduate Research Fellow at the International Youth Council on Gender Equality, where I review published literature on gender equality and social equity and write research summ[...]",
      "I also take on independent survey research and data analysis for NGOs, development organisations and market research firms, through Upwork and the MoCTI Learn2Earn (FOW) bounty platform, wh[...]",
      "Outside work I serve as PRO of my parish's Catholic Youth Organisation and hold a Professional Certificate in Peace Leader Studies from Hekima University College and Jesuit Worldwide Learni[...]",
    ]
  },

  // ------------------------------------------- THE CLEANING DEMONSTRATION
  //  This is the section that sets the site apart. The rows below are
  //  invented sample data — no real respondent appears here — but every
  //  error type is one taken from real audits.
  cleaning: {
    heading: "What cleaning actually looks like",
    intro: "Most portfolios say \"data cleaning\" and leave it there. Here is the same five rows of a micro-enterprise survey before and after I worked on them. Toggle between the two.",
    note: "Sample rows. No real respondent data is shown.",
    columns: ["_id", "district", "interview_date", "age", "business", "monthly_revenue", "phone"],
    before: [
      ["001", "freetown", "12/03/2026", "34", "Retail", "Le 1,200,000", "076 123456"],
      ["002", "FREETOWN ", "2026-03-13", "thirty", "retail ", "850000", "+23276123457"],
      ["002", "Wstern Area", "13-03-2026", "", "Tailoring", "N/A", "076123458"],
      ["004", "Western Area Rural", "03/14/2026", "41", "tailoring", "Le900,000", ""],
      ["005", "western area rural", "", "29", "Retail", "1.1m", "076 123 460"]
    ],
    after: [
      ["001", "Western Area Urban", "2026-03-12", "34", "Retail", "1200000", "+23276123456"],
      ["002", "Western Area Urban", "2026-03-13", "30", "Retail", "850000", "+23276123457"],
      ["003", "Western Area Rural", "2026-03-13", "—", "Tailoring", "—", "+23276123458"],
      ["004", "Western Area Rural", "2026-03-14", "41", "Tailoring", "900000", "—"],
      ["005", "Western Area Rural", "2026-03-15", "29", "Retail", "1100000", "+23276123460"]
    ],
    faults: [
      { label: "Duplicate key", text: "_id 002 was submitted twice. Re-keyed against the submission UUID rather than dropped, so no response is lost." },
      { label: "Four spellings, one district", text: "\"freetown\", \"FREETOWN \", \"Wstern Area\" and \"western area rural\" all collapse to two coded district values." },
      { label: "Three date formats", text: "DD/MM, MM/DD and DD-MM in the same column. Standardised to ISO 8601 after checking each against the submission timestamp." },
      { label: "Numbers stored as text", text: "\"thirty\", \"Le 1,200,000\" and \"1.1m\" cannot be summed. Parsed to plain numerics with the currency held in the codebook, not the cell." },
      { label: "Missing values, flagged not filled", text: "Blank age and \"N/A\" revenue become an explicit missing marker. I never invent a value to make a column look complete." },
      { label: "Inconsistent phone formats", text: "Local and international formats normalised to E.164 so the follow-up call list actually dials." }
    ]
  },

  // ------------------------------------------------------------ the chart
  chart: {
    heading: "STAT 225 — Time Series Analysis",
    caption: "Group project, Fourah Bay College. Weekly height of a live plant, measured over twelve weeks and modelled as a growth curve. I led the group, wrote the report and built the workbook.[...]",
    yLabel: "Height (cm)",
    xLabel: "Week",
    series: "Measured height",
    data: [
      { x: 1, y: 2.1 }, { x: 2, y: 3.4 }, { x: 3, y: 5.2 }, { x: 4, y: 7.8 },
      { x: 5, y: 11.0 }, { x: 6, y: 14.9 }, { x: 7, y: 19.2 }, { x: 8, y: 23.4 },
      { x: 9, y: 27.1 }, { x: 10, y: 30.0 }, { x: 11, y: 31.9 }, { x: 12, y: 32.8 }
    ],
    annotation: "Growth flattens from week 10 — the plateau the model had to capture."
  },

  // ------------------------------------------------------- case studies
  cases: {
    heading: "Two projects in detail",
    items: [
      {
        title: "Market validation survey for a Pan-African commerce platform",
        org: "Big Markit",
        period: "March 2026",
        metrics: [
          { number: "29", label: "form errors fixed" },
          { number: "132", label: "responses cleaned" },
          { number: "0", label: "responses lost" }
        ],
        problem: "A digital commerce platform needed to know whether its proposition held up across several African markets. The survey instrument existed but had never been tested, and the team [...]",
        approach: [
          "Rebuilt the survey instrument from scratch and deployed it through KoboCollect.",
          "Audited the XLSForm before launch and corrected 29 structural errors — broken skip logic, mislabelled choice lists and constraint expressions that would have silently dropped answers[...]",
          "Worked as an enumerator across multiple sites, so the instrument was tested by the person who built it.",
          "Merged and cleaned 132 responses in Excel: de-duplicated keys, standardised districts and dates, and parsed free-text numerics."
        ],
        result: "Delivered an analysis-ready dataset and a written report with the statistical findings behind the client's market positioning strategy. Every submitted response survived cleaning[...]
      },
      {
        title: "Climate-informed disease surveillance support",
        org: "IMACS",
        period: "2026 — present",
        metrics: [
          { number: "2", label: "systems integrated" },
          { number: "Daily", label: "submission audits" }
        ],
        problem: "Surveillance data only helps if it arrives clean and reaches the national reporting system. Submissions come in from the field continuously, and errors caught late are errors th[...]",
        approach: [
          "Audit incoming KoboToolbox submissions and resolve form and structural errors before the data goes to analysis.",
          "Support CI-EWS and DHIS2 integration so surveillance indicators route into national reporting workflows.",
          "Accompanied the Technical Assistant through the GC8 Funding Request Workshop in the Malaria working group, turning live transcript segments into a day-by-day debrief used for follow-up[...]",
        ],
        result: "Cleaner submissions reaching the surveillance pipeline, and a written record of a multi-day funding workshop that the team could act on rather than re-listen to."
      }
    ]
  },

  // ----------------------------------------------------------- what I do
  focus: {
    heading: "What I work on",
    areas: [
      {
        title: "Survey design and data cleaning",
        text: "Building and auditing XLSForms, catching structural errors before they reach the field, and turning raw KoboCollect exports into analysis-ready datasets."
      },
      {
        title: "Field research",
        text: "Designing and running surveys for NGOs and research firms — questionnaire design, enumeration across multiple sites, and the written findings at the end."
      },
      {
        title: "Public health data systems",
        text: "Supporting disease surveillance reporting through CI-EWS and DHIS2 integration work at IMACS."
      },
      {
        title: "Research writing",
        text: "Literature reviews and research summaries on gender equality and social equity, written for publication and for evidence-based advocacy."
      }
    ]
  },

  skills: {
    heading: "Skills and tools",
    groups: [
      { label: "Research", items: ["Survey design", "XLSForm auditing", "Field enumeration", "Market validation", "Literature review", "Social and policy research"] },
      { label: "Data", items: ["Data cleaning", "Dataset merging", "Statistical analysis", "Time series", "Data visualisation", "Reporting"] },
      { label: "Tools", items: ["KoboToolbox", "KoboCollect", "DHIS2", "CI-EWS", "Microsoft Excel", "Word", "PowerPoint", "Google Workspace"] },
      { label: "Languages", items: ["English (professional working)", "Krio (native)"] }
    ]
  },

  experience: {
    heading: "Experience",
    items: [
      {
        period: "2026 — Present",
        title: "Personal Assistant to the Technical Assistant",
        org: "IMACS",
        text: "Auditing and cleaning KoboToolbox submissions for a climate-informed disease surveillance programme, and supporting CI-EWS and DHIS2 integration so surveillance indicators reach na[...]",
      },
      {
        period: "Jan 2026 — Present",
        title: "Undergraduate Research Fellow",
        org: "International Youth Council on Gender Equality",
        text: "Reviewing and synthesising published literature on gender equality and social equity into research summaries. Two pieces submitted and published to the organisation's columns."
      },
      {
        period: "Jun 2026 — Present",
        title: "Freelance Survey Researcher & Data Analyst",
        org: "Upwork · MoCTI Learn2Earn (FOW)",
        text: "Independent survey design, data cleaning and reporting for NGOs, development organisations and market research clients. Junior rank on Learn2Earn with four bounties won and SLE 1.6[...]",
      },
      {
        period: "Apr — May 2026",
        title: "Survey Research Assistant",
        org: "Insight Research and Media Firm",
        text: "Designed and deployed KoboCollect instruments for market research serving business, organisation and government clients, then cleaned the exports and produced the statistical summa[...]",
      },
      {
        period: "Mar 2026",
        title: "Survey Research Assistant",
        org: "Big Markit",
        text: "Led an end-to-end market validation survey for a Pan-African digital commerce platform — instrument built from scratch, enumeration across multiple sites, and the findings behind[...]",
      },
      {
        period: "2025",
        title: "Field Enumerator",
        org: "Budget Advocacy Network, Kono District",
        text: "Structured field data collection in KoboCollect across multiple sites for a study on women-led micro-enterprises."
      }
    ]
  },

  education: {
    heading: "Education and certification",
    items: [
      { period: "2024 — 2028", title: "BSc Mathematics & Statistics, minor in Geology", org: "Fourah Bay College, University of Sierra Leone", text: "Entering third year. Coursework includes ST[...]",
      { period: "2026", title: "Learn2Earn Programme, Cohort 2", org: "MoCTI / UNICEF", text: "All six freelancing and data modules completed." },
      { period: "May 2026", title: "Mastering Freelancing, Module 6", org: "Sierra Leone Learning Passport", text: "Certified." },
      { period: "—", title: "Professional Certificate in Peace Leader Studies", org: "Hekima University College & Jesuit Worldwide Learning", text: "Also serving as PRO of my parish's Catholic [...]",
    ]
  },

  projects: {
    heading: "Other recent work",
    items: [
      { title: "Gender equality research summaries", text: "Two literature-review pieces written and published to the International Youth Council on Gender Equality's columns." },
      { title: "GC8 Funding Request Workshop debrief", text: "Live transcript segments from a multi-day Malaria working group session, turned into a day-by-day written debrief." },
      { title: "Learn2Earn Cohort 2 application package", text: "Upwork profile, portfolio, resume and bounty submissions, all built as part of the programme." }
    ]
  },

  // ---------------------------------------------------------------- gallery
  //  Screenshots of your own work. Add as many as you like.
  //  Leave the list empty and the whole section disappears.
  //  { src: "images/kobo-form.png", alt: "…", caption: "…" }
  gallery: {
    heading: "From the work",
    note: "Client and respondent details removed.",
    items: []
  },

  wins: {
    heading: "Learn2Earn bounties won",
    note: "Four bounties, SLE 1,621.50 total, Junior rank — MoCTI Learn2Earn (FOW) platform.",
    items: [
      { rank: "2nd", title: "Tell Your Story", amount: "SLE 376.00" },
      { rank: "3rd", title: "Spot It, Solve It: Entrepreneurial Thinking and Problem-Solving", amount: "SLE 705.00" },
      { rank: "3rd", title: "Build Your Professional Presence", amount: "SLE 188.00" },
      { rank: "5th", title: "Run Their Calendar: Client Management and Organisation", amount: "SLE 352.50" }
    ]
  },

  contact: {
    heading: "Get in touch",
    text: "Open to freelance research and data work, and to conversations about scholarships, fellowships, or roles in data and public health.",
    email: "jamesyambasu743@gmail.com",
    links: [
      { label: "Email",            value: "jamesyambasu743@gmail.com", href: "mailto:jamesyambasu743@gmail.com" },
      { label: "LinkedIn",         value: "View profile",              href: "https://www.linkedin.com/in/james-yambasu-117b05322" },
      { label: "Upwork",           value: "View profile",              href: "https://www.upwork.com/freelancers/~011d520beafa3fe3fb" },
      { label: "Learn2Earn (FOW)", value: "Junior · 4 bounties won",   href: "https://learn2earn.mocti.gov.sl/u/james-e-paul-yambasu" },
      { label: "Instagram",        value: "@barjona_",                 href: "https://instagram.com/barjona_" }
    ]
  }

};
