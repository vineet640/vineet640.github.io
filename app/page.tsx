export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-3xl px-6 py-12 sm:px-8">
        {/* Profile Section */}
        <div className="mb-12 flex flex-col gap-6 sm:flex-row">
          <div className="flex-shrink-0">
            <img
              src="/profile.jpg"
              alt="Vineet Burugu"
              className="h-32 w-32 rounded-full object-cover border-2 border-gray-200"
              width={128}
              height={128}
            />
          </div>
          <div className="flex-1">
            <h1 className="mb-3 text-3xl font-bold text-black">Vineet Burugu</h1>
            <div className="mb-4 space-y-2 text-base leading-relaxed text-black">
              <p>
                I'm a Statistics and Data Science student at{" "}
                <a
                  href="https://www.utexas.edu"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The University of Texas at Austin
                </a>
                , with a minor in Computer Science, graduating in May 2027.
              </p>
              <p>
                My interests include machine learning, data science, software engineering, and time series forecasting. 
                I'm excited about leveraging data to solve real-world problems and building scalable applications that make an impact.
              </p>
              <p>Please feel free to reach out — I'd love to chat!</p>
            </div>
            <div className="mb-4 text-sm text-black">
              <p>vineetburugu [at] utexas [dot] edu</p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/vineetburugu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-600"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://github.com/vineetburugu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-600"
                aria-label="GitHub"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-black">Experience</h2>
          <div className="space-y-6">
            <div>
              <div className="font-semibold text-black">AriesView</div>
              <div className="text-sm text-gray-700">Software Developer Intern, Aug. 2025 – Dec. 2025</div>
            </div>
            <div>
              <div className="font-semibold text-black">Austin Energy</div>
              <div className="text-sm text-gray-700">Data Science Intern, Jan. 2025 – Aug. 2025</div>
            </div>
            <div>
              <div className="font-semibold text-black">Convergent</div>
              <div className="text-sm text-gray-700">Software Engineer, Jan. 2025 – Jun. 2025</div>
            </div>
            <div>
              <div className="font-semibold text-black">Geometry of Space Lab</div>
              <div className="text-sm text-gray-700">Machine Learning Researcher, Jun. 2023 – Mar. 2024</div>
            </div>
            <div>
              <div className="font-semibold text-black">iCode School Franchise</div>
              <div className="text-sm text-gray-700">Lead Programming Instructor, Feb. 2023 – Jun. 2024</div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-black">Projects</h2>
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 font-semibold text-black">Predicting Cyclothems Using Mineralogy and Wireline Data</h3>
              <p className="mb-2 text-sm text-gray-700">
                Integrated and cleaned multi-resolution geoscience datasets across a 300–400 ft well interval using Python (NumPy, Pandas). Engineered high-resolution features to reconcile sampling disparities. Applied PCA, KMeans, logistic regression, and random forest models with nested cross-validation.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-black">Criminal Activity Prediction with Machine Learning</h3>
              <p className="mb-2 text-sm text-gray-700">
                Collected, cleaned, and integrated crime and socioeconomic data for 58 California counties over 9 years using MySQL and Python. Engineered population- and income-adjusted crime rates and trained five machine learning models. The best-performing neural network achieved 92% accuracy; results published in JEI.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-black">Predicting COVID-19 Outcomes Based on Demographics</h3>
              <p className="mb-2 text-sm text-gray-700">
                Processed 20+ demographic datasets from CDC and Johns Hopkins covering 100K+ COVID-19 cases across 9 U.S. regions. Developed a three-stage Python algorithm to estimate mortality risk by age, gender, and race. Visualized regional trends and disparities using R; results published in JSR.
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-black">Education</h2>
          <div>
            <div className="font-semibold text-black">
              The University of Texas at Austin
            </div>
            <div className="text-sm text-gray-700">
              Bachelor of Science in Statistics and Data Science, Minor in Computer Science
            </div>
            <div className="text-sm text-gray-600">Expected May 2027 • GPA: 3.93</div>
            <div className="mt-2 text-sm text-gray-700">
              <strong>Relevant Coursework:</strong> Data Structures & Algorithms, Object-Oriented Programming, Database Systems, Probability & Statistical Inference, Statistical Modeling, Data Science, Linear Algebra, Discrete Mathematics, Multivariable Calculus
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-black">Skills</h2>
          <div className="space-y-3 text-sm text-gray-700">
            <div>
              <strong>Languages & Tools:</strong> Python, R, SQL, JavaScript, Bash, C++, Firebase, Git, Docker, Jupyter, VS Code, Tableau, R Shiny
            </div>
            <div>
              <strong>Libraries & Frameworks:</strong> Pandas, NumPy, Scikit-learn, PyTorch, TensorFlow, Matplotlib, Plotly, Orange, React Native
            </div>
            <div>
              <strong>Core Skills:</strong> Machine Learning, Time Series Forecasting, Anomaly Detection, RAG (Retrieval-Augmented Generation), NLP (Natural Language Processing), Feature Engineering, Statistical Modeling, A/B Testing, Dashboarding, Model Evaluation
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
