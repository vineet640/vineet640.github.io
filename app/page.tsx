function EditLink() {
  return (
    <span className="mw-editsection">
      [<span>edit</span>]
    </span>
  );
}

export default function Home() {
  return (
    <div className="mw-page">
      <h1 className="wiki-title">Vineet Burugu</h1>
      <div className="site-sub">From the personal site of Vineet Burugu</div>

      <div className="mw-body">
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
          <b>Vineet Burugu</b> is a Data Science and Computer Science student at
          The University of Texas at Austin, expected to graduate in May 2028.
          Burugu&apos;s interests include machine learning, data science,
          software engineering, and time series forecasting.
        </p>
        <p>
          Burugu has held software engineering and data science roles at Molex,
          AriesView, Austin Energy, and the Mitra Lab, and has built projects
          spanning clinical decision support, mobile health, and subsurface
          modeling.
        </p>

        <div className="toc">
          <div className="toc-title">Contents</div>
          <ol>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
              <ol>
                <li>
                  <a href="#sepsis-support-app">Sepsis Support App</a>
                </li>
                <li>
                  <a href="#pediatric-physical-therapy-app">
                    Pediatric Physical Therapy App
                  </a>
                </li>
                <li>
                  <a href="#predicting-oil-using-mineral-data">
                    Predicting Oil using Mineral Data
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#external-links">External links</a>
            </li>
          </ol>
        </div>

        <h2 className="wiki-h2" id="education">
          <span>Education</span>
          <EditLink />
        </h2>
        <p>
          Burugu attends The University of Texas at Austin, pursuing a Bachelor
          of Science in Data Science and Computer Science with an expected
          graduation of May 2028 and a grade point average of 3.84.
        </p>
        <p>
          Relevant coursework includes Machine Learning, Data Structures &amp;
          Algorithms, Object-Oriented Programming, Database Systems,
          Probability, Statistical Modeling, Data Science, Linear Algebra,
          Discrete Mathematics, and Multivariable Calculus.
        </p>

        <h2 className="wiki-h2" id="experience">
          <span>Experience</span>
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
          <span>Projects</span>
          <EditLink />
        </h2>

        <h3 className="wiki-h3" id="sepsis-support-app">
          Sepsis Support App
        </h3>
        <p>
          A clinical decision-support tool for sepsis care that surfaces patient
          risk scores, timelines, and care-process metrics alongside
          AI-generated narrated summaries and a tamper-evident audit trail.
        </p>

        <h3 className="wiki-h3" id="pediatric-physical-therapy-app">
          Pediatric Physical Therapy App
        </h3>
        <p>
          A pediatric physical therapy app delivering multi-week exercise
          programs to partner clinics with real-time progress tracking shared
          between parents and therapists, winning Best Overall Pitch at Texas
          Convergent Demo Day.
        </p>

        <h3 className="wiki-h3" id="predicting-oil-using-mineral-data">
          Predicting Oil using Mineral Data
        </h3>
        <p>
          An end-to-end modeling pipeline that infers oil presence from sparse
          mineralogy and wireline measurements by engineering high-resolution
          features out of coarse well data, earning a top-three finish at the
          hackathon.
        </p>

        <h2 className="wiki-h2" id="external-links">
          <span>External links</span>
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
      </div>
    </div>
  );
}
