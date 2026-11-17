
import { useState } from "react";
import {
  LayoutDashboard,
  FolderKanban,
  Users,
  ChartNoAxesCombined,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  MoreHorizontal,
  Plus,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Circle,
  Activity,
  Download,
  Sparkles,
} from "lucide-react";

import "./Demo.css";

const dashboardTabs = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "customers", label: "Customers", icon: Users },
  { id: "analytics", label: "Analytics", icon: ChartNoAxesCombined },
];

const projects = [
  {
    name: "Website Redesign",
    client: "Bright Studio",
    progress: 85,
    status: "In Progress",
    color: "purple",
  },
  {
    name: "Mobile Application",
    client: "TechNova",
    progress: 60,
    status: "In Progress",
    color: "blue",
  },
  {
    name: "Marketing Campaign",
    client: "Growth Labs",
    progress: 100,
    status: "Completed",
    color: "green",
  },
  {
    name: "CRM Integration",
    client: "CloudWorks",
    progress: 35,
    status: "Planning",
    color: "orange",
  },
];

const customers = [
  { name: "Olivia Martin", company: "Bright Studio", email: "olivia@example.com", status: "Active" },
  { name: "James Wilson", company: "TechNova", email: "james@example.com", status: "Active" },
  { name: "Sophia Taylor", company: "Growth Labs", email: "sophia@example.com", status: "Pending" },
  { name: "Noah Anderson", company: "CloudWorks", email: "noah@example.com", status: "Active" },
];

const activities = [
  { title: "Website Redesign updated", time: "10 minutes ago", icon: FolderKanban },
  { title: "New customer added", time: "35 minutes ago", icon: Users },
  { title: "Monthly report generated", time: "2 hours ago", icon: ChartNoAxesCombined },
];

const chartValues = [42, 60, 48, 76, 58, 85, 68, 92, 73, 88, 65, 100];

function Demo() {
  const [activeTab, setActiveTab] = useState("overview");

  const activeTabInfo = dashboardTabs.find(
    (tab) => tab.id === activeTab
  );

  const ActiveIcon = activeTabInfo.icon;

  return (
    <section className="demo-section" id="demo">

      {/* SECTION HEADER */}
      <div className="demo-heading">
        <span className="demo-eyebrow">
          <Sparkles size={15} />
          SEE NEXORASOFT IN ACTION
        </span>

        <h2>
          Experience a Smarter
          <span> Way to Work.</span>
        </h2>

        <p>
          Explore our interactive sample dashboard and discover
          how simple business management can be.
        </p>
      </div>

      {/* DEMO DASHBOARD */}
      <div className="demo-dashboard">

        {/* SIDEBAR */}
        <aside className="demo-sidebar">
          <div className="demo-brand">
            <div className="demo-brand-icon">
              <Activity size={20} />
            </div>
            <span>Nexora<span>Soft</span></span>
          </div>

          <div className="demo-sidebar-label">
            WORKSPACE
          </div>

          <nav className="demo-sidebar-nav" aria-label="Demo dashboard navigation">
            {dashboardTabs.map((tab) => {
              const Icon = tab.icon;

              return (
                <button
                  key={tab.id}
                  className={`demo-nav-item ${
                    activeTab === tab.id ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <Icon size={17} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="demo-sidebar-bottom">
            <div className="demo-avatar">NS</div>
            <div>
              <strong>Demo Workspace</strong>
              <small>Sample Account</small>
            </div>
          </div>
        </aside>

        {/* MAIN DASHBOARD */}
        <main className="demo-main">

          {/* TOP BAR */}
          <div className="demo-topbar">
            <div>
              <span className="demo-breadcrumb">Workspace /</span>
              <strong>{activeTabInfo.label}</strong>
            </div>

            <div className="demo-topbar-actions">
              <span className="demo-live-indicator">
                <span></span>
                Live Preview
              </span>

              <div className="demo-topbar-avatar">NS</div>
            </div>
          </div>

          {/* CONTENT HEADER */}
          <div className="demo-content-heading">
            <div>
              <span className="demo-welcome">WELCOME TO YOUR WORKSPACE</span>
              <h3>
                {activeTab === "overview" && "Business Overview"}
                {activeTab === "projects" && "Project Management"}
                {activeTab === "customers" && "Customer Directory"}
                {activeTab === "analytics" && "Business Analytics"}
              </h3>
              <p>
                {activeTab === "overview" && "Here is what's happening with your business today."}
                {activeTab === "projects" && "Monitor your projects and track their progress."}
                {activeTab === "customers" && "Manage your customer relationships in one place."}
                {activeTab === "analytics" && "Understand your business performance with insights."}
              </p>
            </div>

            <button
              className="demo-date-button"
              type="button"
            >
              <CalendarDays size={15} />
              November 2026
            </button>
          </div>

          {/* OVERVIEW */}
          {activeTab === "overview" && (
            <div className="demo-tab-content">

              <div className="demo-stat-grid">
                <div className="demo-stat-card">
                  <div className="demo-stat-top">
                    <span>Total Revenue</span>
                    <span className="demo-stat-icon purple-stat">
                      <TrendingUp size={17} />
                    </span>
                  </div>
                  <strong>$48,294</strong>
                  <small className="positive-change">
                    <TrendingUp size={13} /> 12.8% from last month
                  </small>
                </div>

                <div className="demo-stat-card">
                  <div className="demo-stat-top">
                    <span>Total Customers</span>
                    <span className="demo-stat-icon blue-stat">
                      <Users size={17} />
                    </span>
                  </div>
                  <strong>2,450</strong>
                  <small className="positive-change">
                    <TrendingUp size={13} /> 8.2% from last month
                  </small>
                </div>

                <div className="demo-stat-card">
                  <div className="demo-stat-top">
                    <span>Active Projects</span>
                    <span className="demo-stat-icon orange-stat">
                      <FolderKanban size={17} />
                    </span>
                  </div>
                  <strong>128</strong>
                  <small className="positive-change">
                    <TrendingUp size={13} /> 5.4% from last month
                  </small>
                </div>

                <div className="demo-stat-card">
                  <div className="demo-stat-top">
                    <span>Completion Rate</span>
                    <span className="demo-stat-icon green-stat">
                      <CheckCircle2 size={17} />
                    </span>
                  </div>
                  <strong>94.6%</strong>
                  <small className="negative-change">
                    <TrendingDown size={13} /> 1.2% from last month
                  </small>
                </div>
              </div>

              <div className="demo-overview-grid">

                <div className="demo-panel demo-chart-panel">
                  <div className="demo-panel-heading">
                    <div>
                      <h4>Revenue Overview</h4>
                      <p>Monthly performance</p>
                    </div>
                    <button type="button" aria-label="More chart options">
                      <MoreHorizontal size={19} />
                    </button>
                  </div>

                  <div className="demo-chart-total">
                    $48,294
                    <span>+12.8%</span>
                  </div>

                  <div className="demo-chart">
                    <div className="demo-chart-y-axis">
                      <span>$50k</span>
                      <span>$40k</span>
                      <span>$30k</span>
                      <span>$20k</span>
                      <span>$10k</span>
                    </div>

                    <div className="demo-chart-area">
                      <div className="demo-chart-gridlines">
                        {[1, 2, 3, 4, 5].map((line) => (
                          <span key={line}></span>
                        ))}
                      </div>

                      <div className="demo-chart-bars">
                        {chartValues.map((value, index) => (
                          <div
                            className="demo-chart-bar-wrap"
                            key={index}
                          >
                            <div
                              className={`demo-chart-bar ${
                                index === 11 ? "highlight" : ""
                              }`}
                              style={{ height: `${value}%` }}
                            ></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="demo-chart-months">
                    {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month) => (
                      <span key={month}>{month}</span>
                    ))}
                  </div>
                </div>

                <div className="demo-panel activity-panel">
                  <div className="demo-panel-heading">
                    <div>
                      <h4>Recent Activity</h4>
                      <p>Latest workspace updates</p>
                    </div>
                    <button type="button" aria-label="More activity options">
                      <MoreHorizontal size={19} />
                    </button>
                  </div>

                  <div className="demo-activity-list">
                    {activities.map((activity) => {
                      const Icon = activity.icon;

                      return (
                        <div className="demo-activity-item" key={activity.title}>
                          <div className="activity-icon">
                            <Icon size={16} />
                          </div>
                          <div>
                            <strong>{activity.title}</strong>
                            <small>{activity.time}</small>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="demo-activity-footer">
                    Sample workspace activity
                  </div>
                </div>

              </div>

              <ProjectTable compact />
            </div>
          )}

          {/* PROJECTS */}
          {activeTab === "projects" && (
            <div className="demo-tab-content">
              <div className="demo-list-summary">
                <div>
                  <strong>4</strong>
                  <span>Total Projects</span>
                </div>
                <div>
                  <strong>2</strong>
                  <span>In Progress</span>
                </div>
                <div>
                  <strong>1</strong>
                  <span>Completed</span>
                </div>
              </div>

              <ProjectTable />
            </div>
          )}

          {/* CUSTOMERS */}
          {activeTab === "customers" && (
            <div className="demo-tab-content">
              <div className="demo-list-summary">
                <div>
                  <strong>2,450</strong>
                  <span>Total Customers</span>
                </div>
                <div>
                  <strong>2,180</strong>
                  <span>Active Customers</span>
                </div>
                <div>
                  <strong>270</strong>
                  <span>Pending</span>
                </div>
              </div>

              <div className="demo-panel demo-table-panel">
                <div className="demo-panel-heading">
                  <div>
                    <h4>Customer Directory</h4>
                    <p>Sample customer records</p>
                  </div>
                  <button type="button" className="demo-add-button">
                    <Plus size={15} />
                    Add Customer
                  </button>
                </div>

                <div className="demo-table-scroll">
                  <table className="demo-table">
                    <thead>
                      <tr>
                        <th>Customer</th>
                        <th>Company</th>
                        <th>Email</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {customers.map((customer) => (
                        <tr key={customer.email}>
                          <td>
                            <strong>{customer.name}</strong>
                          </td>
                          <td>{customer.company}</td>
                          <td>{customer.email}</td>
                          <td>
                            <span className={`demo-status ${customer.status.toLowerCase()}`}>
                              {customer.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ANALYTICS */}
          {activeTab === "analytics" && (
            <div className="demo-tab-content">
              <div className="demo-stat-grid">
                <div className="demo-stat-card">
                  <div className="demo-stat-top">
                    <span>Monthly Revenue</span>
                    <TrendingUp size={17} />
                  </div>
                  <strong>$48,294</strong>
                  <small className="positive-change">12.8% growth</small>
                </div>

                <div className="demo-stat-card">
                  <div className="demo-stat-top">
                    <span>Customer Growth</span>
                    <Users size={17} />
                  </div>
                  <strong>8.2%</strong>
                  <small className="positive-change">Compared to last month</small>
                </div>

                <div className="demo-stat-card">
                  <div className="demo-stat-top">
                    <span>Project Success</span>
                    <CheckCircle2 size={17} />
                  </div>
                  <strong>94.6%</strong>
                  <small className="positive-change">Overall completion</small>
                </div>

                <div className="demo-stat-card">
                  <div className="demo-stat-top">
                    <span>Pending Tasks</span>
                    <Clock3 size={17} />
                  </div>
                  <strong>24</strong>
                  <small className="negative-change">Needs attention</small>
                </div>
              </div>

              <div className="demo-panel analytics-panel">
                <div className="demo-panel-heading">
                  <div>
                    <h4>Performance Breakdown</h4>
                    <p>Sample business performance indicators</p>
                  </div>
                </div>

                {[
                  { label: "Project Completion", value: 94 },
                  { label: "Customer Satisfaction", value: 88 },
                  { label: "Team Productivity", value: 82 },
                  { label: "Workflow Efficiency", value: 91 },
                ].map((item) => (
                  <div className="analytics-progress-item" key={item.label}>
                    <div>
                      <span>{item.label}</span>
                      <strong>{item.value}%</strong>
                    </div>
                    <div className="analytics-progress-track">
                      <span style={{ width: `${item.value}%` }}></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="demo-disclaimer">
            <Sparkles size={14} />
            This is an interactive sample dashboard. All figures and records are demonstration data.
          </div>

        </main>
      </div>

      {/* BOTTOM CTA */}
      <div className="demo-bottom-cta">
        <div>
          <h3>Want to see what NexoraSoft can do for you?</h3>
          <p>Explore our products and find the right tools for your business.</p>
        </div>

        <a href="#products">
          Explore Products
          <ArrowUpRight size={17} />
        </a>
      </div>

    </section>
  );
}

function ProjectTable({ compact = false }) {
  const visibleProjects = compact ? projects.slice(0, 3) : projects;

  return (
    <div className="demo-panel demo-table-panel">
      <div className="demo-panel-heading">
        <div>
          <h4>{compact ? "Recent Projects" : "All Projects"}</h4>
          <p>{compact ? "Your latest project updates" : "Sample project records"}</p>
        </div>

        <button type="button" className="demo-add-button">
          <Plus size={15} />
          New Project
        </button>
      </div>

      <div className="demo-table-scroll">
        <table className="demo-table">
          <thead>
            <tr>
              <th>Project</th>
              <th>Client</th>
              <th>Progress</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {visibleProjects.map((project) => (
              <tr key={project.name}>
                <td>
                  <strong>{project.name}</strong>
                </td>
                <td>{project.client}</td>
                <td>
                  <div className="demo-progress-cell">
                    <div className="demo-progress-track">
                      <span
                        className={project.color}
                        style={{ width: `${project.progress}%` }}
                      ></span>
                    </div>
                    <small>{project.progress}%</small>
                  </div>
                </td>
                <td>
                  <span className={`demo-status ${project.status.toLowerCase().replace(" ", "-")}`}>
                    {project.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Demo;
