const stats = [
  { label: "Monthly Revenue", value: "$128.4K", change: "+12.8%", tone: "up" },
  { label: "Active Users", value: "18,240", change: "+5.2%", tone: "up" },
  { label: "Churn Rate", value: "2.14%", change: "-0.6%", tone: "down" },
  { label: "Open Tickets", value: "43", change: "-8 today", tone: "down" }
];

const performanceBars = [
  { month: "Jan", value: 52 },
  { month: "Feb", value: 68 },
  { month: "Mar", value: 61 },
  { month: "Apr", value: 84 },
  { month: "May", value: 74 },
  { month: "Jun", value: 92 }
];

const activities = [
  {
    title: "Marketing campaign launched",
    detail: "Email funnel v2 rolled out to 12,000 subscribers.",
    time: "18 min ago"
  },
  {
    title: "Infrastructure health recovered",
    detail: "API latency dropped back under 180ms after autoscaling.",
    time: "42 min ago"
  },
  {
    title: "New enterprise lead captured",
    detail: "Apex Labs requested a product demo for 80 seats.",
    time: "1 hr ago"
  }
];

const team = [
  { name: "Maya", role: "Product Lead", progress: 86 },
  { name: "Jon", role: "Growth Analyst", progress: 73 },
  { name: "Iris", role: "Support Ops", progress: 91 }
];

function App() {
  return (
    <div className="dashboard-shell">
      <aside className="sidebar">
        <div>
          <p className="eyebrow">Workspace</p>
          <h1>PulseBoard</h1>
        </div>

        <nav className="nav">
          <a href="#overview" className="nav-item active">
            Overview
          </a>
          <a href="#analytics" className="nav-item">
            Analytics
          </a>
          <a href="#activity" className="nav-item">
            Activity
          </a>
          <a href="#team" className="nav-item">
            Team
          </a>
        </nav>

        <div className="upgrade-card">
          <p className="eyebrow">Insight</p>
          <strong>Q2 momentum is ahead of target.</strong>
          <span>Revenue pacing is 9% above your internal forecast.</span>
        </div>
      </aside>

      <main className="content">
        <header className="hero" id="overview">
          <div>
            <p className="eyebrow">Operations Dashboard</p>
            <h2>Track performance without losing the story behind the numbers.</h2>
            <p className="hero-copy">
              A sample React dashboard page with a bold layout, summary metrics,
              team visibility, and quick status monitoring.
            </p>
          </div>

          <div className="hero-panel">
            <span className="status-pill">Live data snapshot</span>
            <strong>97.4% goal completion</strong>
            <p>Most systems are healthy and campaign conversion is trending up.</p>
          </div>
        </header>

        <section className="stats-grid">
          {stats.map((stat) => (
            <article key={stat.label} className="stat-card">
              <p>{stat.label}</p>
              <h3>{stat.value}</h3>
              <span className={`delta ${stat.tone}`}>{stat.change} vs last period</span>
            </article>
          ))}
        </section>

        <section className="main-grid" id="analytics">
          <article className="panel chart-panel">
            <div className="panel-header">
              <div>
                <p className="eyebrow">Performance</p>
                <h3>Revenue trend</h3>
              </div>
              <span className="panel-tag">Last 6 months</span>
            </div>

            <div className="bar-chart" aria-label="Revenue trend bar chart">
              {performanceBars.map((item) => (
                <div key={item.month} className="bar-group">
                  <div
                    className="bar"
                    style={{ height: `${item.value}%` }}
                    aria-hidden="true"
                  />
                  <span>{item.month}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="panel" id="activity">
            <div className="panel-header">
              <div>
                <p className="eyebrow">Recent Activity</p>
                <h3>What changed today</h3>
              </div>
            </div>

            <div className="activity-list">
              {activities.map((item) => (
                <div key={item.title} className="activity-item">
                  <div className="activity-dot" />
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.detail}</p>
                  </div>
                  <span>{item.time}</span>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="bottom-grid" id="team">
          <article className="panel">
            <div className="panel-header">
              <div>
                <p className="eyebrow">Team Capacity</p>
                <h3>Delivery progress</h3>
              </div>
            </div>

            <div className="team-list">
              {team.map((member) => (
                <div key={member.name} className="team-row">
                  <div>
                    <strong>{member.name}</strong>
                    <p>{member.role}</p>
                  </div>
                  <div className="progress-track" aria-hidden="true">
                    <div
                      className="progress-fill"
                      style={{ width: `${member.progress}%` }}
                    />
                  </div>
                  <span>{member.progress}%</span>
                </div>
              ))}
            </div>
          </article>

          <article className="panel highlight-panel">
            <p className="eyebrow">Forecast</p>
            <h3>Customer satisfaction is expected to rise this quarter.</h3>
            <p>
              Ticket backlog is shrinking while response time and retention stay
              stable. This block is useful for a CTA, prediction, or founder note.
            </p>
            <button type="button">Download Report</button>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
