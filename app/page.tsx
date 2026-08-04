"use client";

import { useState } from "react";

type TextSize = "small" | "standard" | "large";
type PageWidth = "standard" | "wide";
type ColorMode = "automatic" | "light" | "dark";

const SECTIONS = [
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "sepsis-support-app", label: "Sepsis Support App", sub: true },
  {
    id: "pediatric-physical-therapy-app",
    label: "Pediatric Physical Therapy App",
    sub: true,
  },
  {
    id: "predicting-oil-using-mineral-data",
    label: "Predicting Oil using Mineral Data",
    sub: true,
  },
  { id: "external-links", label: "External links" },
];

function EditLink() {
  return (
    <span className="mw-editsection">
      [ <span>edit</span> ]
    </span>
  );
}

function Radio<T extends string>({
  name,
  value,
  current,
  onChange,
  label,
}: {
  name: string;
  value: T;
  current: T;
  onChange: (v: T) => void;
  label: string;
}) {
  return (
    <label className="appearance-option">
      <input
        type="radio"
        name={name}
        checked={current === value}
        onChange={() => onChange(value)}
      />
      {label}
    </label>
  );
}

export default function Home() {
  const [textSize, setTextSize] = useState<TextSize>("standard");
  const [pageWidth, setPageWidth] = useState<PageWidth>("standard");
  const [colorMode, setColorMode] = useState<ColorMode>("automatic");
  const [tocHidden, setTocHidden] = useState(false);
  const [appearanceHidden, setAppearanceHidden] = useState(false);

  return (
    <div
      className="skin"
      data-text={textSize}
      data-width={pageWidth}
      data-color={colorMode}
    >
      <div className="skin-main">
        <aside className="skin-rail skin-rail-left" aria-label="Contents">
          <div className="rail-heading">
            Contents
            <button
              type="button"
              className="rail-toggle"
              onClick={() => setTocHidden((v) => !v)}
            >
              {tocHidden ? "show" : "hide"}
            </button>
          </div>
          {!tocHidden && (
            <nav className="vector-toc">
              <ul>
                <li>
                  <a className="is-top" href="#top">
                    (Top)
                  </a>
                </li>
                {SECTIONS.filter((s) => !s.sub).map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`}>{section.label}</a>
                    {section.id === "projects" && (
                      <ul>
                        {SECTIONS.filter((s) => s.sub).map((sub) => (
                          <li key={sub.id}>
                            <a href={`#${sub.id}`}>{sub.label}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </aside>

        <main className="skin-content" id="top">
          <div className="page-title-row">
            <h1 className="wiki-title">Vineet Burugu</h1>
            <a className="languages-button" href="#external-links">
              5 external links
            </a>
          </div>

          <div className="site-sub">From the personal site of Vineet Burugu</div>

          <article className="skin-article">
            <table className="infobox">
              <tbody>
                <tr>
                  <td className="infobox-title" colSpan={2}>
                    Vineet Burugu
                  </td>
                </tr>
                <tr>
                  <th scope="row">Education</th>
                  <td>The University of Texas at Austin</td>
                </tr>
                <tr>
                  <th scope="row">Degree</th>
                  <td>
                    B.S. Data Science and Computer Science (expected May 2028)
                  </td>
                </tr>
                <tr>
                  <th scope="row">Fields</th>
                  <td>
                    Machine learning, data science, software engineering, time
                    series forecasting
                  </td>
                </tr>
                <tr>
                  <th scope="row">Employer</th>
                  <td>Molex (a Koch company)</td>
                </tr>
                <tr>
                  <th scope="row">Email</th>
                  <td>vineetburugu [at] utexas [dot] edu</td>
                </tr>
                <tr>
                  <th scope="row">Websites</th>
                  <td>
                    <a
                      href="https://linkedin.com/in/vineetburugu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                    {" · "}
                    <a
                      href="https://github.com/vineet640"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              I&apos;m a Data Science and Computer Science student at The
              University of Texas at Austin, graduating in May 2028. My
              interests include machine learning, data science, software
              engineering, and time series forecasting.
            </p>
            <p>
              I&apos;ve held software engineering and data science roles at
              Molex, AriesView, Austin Energy, and the Mitra Lab, and have built
              projects spanning clinical decision support, mobile health, and
              subsurface modeling.
            </p>
            <p>Please feel free to reach out, I&apos;d love to chat!</p>

            <h2 className="wiki-h2" id="education">
              Education
              <EditLink />
            </h2>
            <p>
              I&apos;m pursuing a Bachelor of Science in Data Science and
              Computer Science at The University of Texas at Austin, with an
              expected graduation of May 2028 and a grade point average of 3.84.
            </p>
            <p>
              My relevant coursework includes Machine Learning, Data Structures
              &amp; Algorithms, Object-Oriented Programming, Database Systems,
              Probability, Statistical Modeling, Data Science, Linear Algebra,
              Discrete Mathematics, and Multivariable Calculus.
            </p>

            <h2 className="wiki-h2" id="experience">
              Experience
              <EditLink />
            </h2>
            <div className="wiki-table-wrap">
              <table className="wikitable">
                <thead>
                  <tr>
                    <th scope="col">Organization</th>
                    <th scope="col">Role</th>
                    <th scope="col">Period</th>
                    <th scope="col">Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Molex (a Koch company)</td>
                    <td>Software Engineer Intern</td>
                    <td>May 2026 – August 2026</td>
                    <td>Austin, TX</td>
                  </tr>
                  <tr>
                    <td>AriesView</td>
                    <td>Software Engineer Intern</td>
                    <td>August 2025 – December 2025</td>
                    <td>Boston, MA</td>
                  </tr>
                  <tr>
                    <td>Austin Energy</td>
                    <td>Data Science Intern</td>
                    <td>January 2025 – August 2025</td>
                    <td>Austin, TX</td>
                  </tr>
                  <tr>
                    <td>Mitra Lab</td>
                    <td>Machine Learning Researcher</td>
                    <td>June 2023 – March 2024</td>
                    <td>Austin, TX</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="wiki-h2" id="projects">
              Projects
              <EditLink />
            </h2>

            <h3 className="wiki-h3" id="sepsis-support-app">
              Sepsis Support App
            </h3>
            <p>
              A clinical decision-support tool for sepsis care that surfaces
              patient risk scores, timelines, and care-process metrics alongside
              AI-generated narrated summaries and a tamper-evident audit trail.
            </p>

            <h3 className="wiki-h3" id="pediatric-physical-therapy-app">
              Pediatric Physical Therapy App
            </h3>
            <p>
              A pediatric physical therapy app delivering multi-week exercise
              programs to partner clinics with real-time progress tracking
              shared between parents and therapists, winning Best Overall Pitch
              at Texas Convergent Demo Day.
            </p>

            <h3 className="wiki-h3" id="predicting-oil-using-mineral-data">
              Predicting Oil using Mineral Data
            </h3>
            <p>
              An end-to-end modeling pipeline that infers oil presence from
              sparse mineralogy and wireline measurements by engineering
              high-resolution features out of coarse well data, earning a
              top-three finish at the hackathon.
            </p>

            <h2 className="wiki-h2" id="external-links">
              External links
              <EditLink />
            </h2>
            <ul className="wiki-list">
              <li>
                <a
                  href="https://linkedin.com/in/vineetburugu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vineet Burugu
                </a>{" "}
                on LinkedIn
              </li>
              <li>
                <a
                  href="https://github.com/vineet640"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  vineet640
                </a>{" "}
                on GitHub
              </li>
              <li>
                <a
                  href="https://devpost.com/software/sepsis-copilot"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sepsis Support App
                </a>{" "}
                on Devpost
              </li>
              <li>
                <a
                  href="https://docs.google.com/presentation/d/1O6kh-3y9QqPzNwJzpkv1aTZYx-m2yZQKV3YyHeIV-IY/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pediatric Physical Therapy App
                </a>{" "}
                slide deck
              </li>
              <li>
                <a
                  href="https://docs.google.com/presentation/d/1KUJuXl_p9bHLPgoGc6tunuMYjCOQ21rJHnIFzsdjkW8/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Predicting Oil using Mineral Data
                </a>{" "}
                slide deck
              </li>
            </ul>

            <div className="catlinks">
              <b className="catlinks-label">Categories:</b>
              <span>Data science students</span>
              <span>University of Texas at Austin</span>
              <span>Machine learning</span>
              <span>Software engineering</span>
            </div>
          </article>
        </main>

        <aside className="skin-rail skin-rail-right" aria-label="Appearance">
          <div className="rail-heading">
            Appearance
            <button
              type="button"
              className="rail-toggle"
              onClick={() => setAppearanceHidden((v) => !v)}
            >
              {appearanceHidden ? "show" : "hide"}
            </button>
          </div>
          {!appearanceHidden && (
            <div>
              <div className="appearance-group">
                <div className="appearance-group-label">Text</div>
                {(["small", "standard", "large"] as const).map((v) => (
                  <Radio
                    key={v}
                    name="text-size"
                    value={v}
                    current={textSize}
                    onChange={setTextSize}
                    label={v[0].toUpperCase() + v.slice(1)}
                  />
                ))}
              </div>
              <div className="appearance-group">
                <div className="appearance-group-label">Width</div>
                {(["standard", "wide"] as const).map((v) => (
                  <Radio
                    key={v}
                    name="page-width"
                    value={v}
                    current={pageWidth}
                    onChange={setPageWidth}
                    label={v[0].toUpperCase() + v.slice(1)}
                  />
                ))}
              </div>
              <div className="appearance-group">
                <div className="appearance-group-label">Color</div>
                {(["automatic", "light", "dark"] as const).map((v) => (
                  <Radio
                    key={v}
                    name="color-mode"
                    value={v}
                    current={colorMode}
                    onChange={setColorMode}
                    label={v[0].toUpperCase() + v.slice(1)}
                  />
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
