import React from "react";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work Done So Far</h2>
        </div>

        <div className="job">
          <div className="job-info">
              <a href="https://github.com/himali-dev/pwa-texteditor">
              <h4>PWA Text Editor</h4>
              </a>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
              <a href="https://github.com/himali-dev/pwa-texteditor">
              <h4>Social Network API</h4>
              </a>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
              <a href="https://github.com/himali-dev/pwa-texteditor">
              <h4>RegEX Tutorial</h4>
              </a>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
              <a href="https://github.com/himali-dev/pwa-texteditor">
              <h4>Full Stack Blog</h4>
              </a>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
              <a href="https://github.com/himali-dev/pwa-texteditor">
              <h4>Employee Tracker</h4>
              </a>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Portfolio;
