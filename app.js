const modules = {
  film: {
    title: "Film",
    lead: "Reviews, formal analysis, and film-related work.",
    content: `
      <div class="content-block">
        <h3>Recent Activity</h3>
        <p>Film criticism and analysis will appear here. This module will expand with reviews, notes on structure and technique, and selected lists.</p>
      </div>
      <div class="content-block">
        <h3>Structure</h3>
        <p>This space is reserved for organised film writing and ongoing critical projects.</p>
      </div>
      <p class="placeholder-note">Content will be added progressively.</p>
    `
  },
  matches: {
    title: "Matches",
    lead: "Football and game matches involving Søren.",
    content: `
      <div class="content-block">
        <h3>Upcoming / Live</h3>
        <p>Scheduled and live matches will be listed here. Support for both football and other competitive games is planned.</p>
      </div>
      <div class="content-block">
        <h3>Archive</h3>
        <p>Past results and notes will be collected in this section.</p>
      </div>
      <p class="placeholder-note">Live data integration can be added once sources are defined.</p>
    `
  },
  lab: {
    title: "Lab",
    lead: "Creations, experiments, and future projects.",
    content: `
      <div class="content-block">
        <h3>Workspace</h3>
        <p>This module is reserved for original projects, prototypes, and experimental work.</p>
      </div>
      <div class="content-block">
        <h3>Status</h3>
        <p>Currently empty. New items will appear as they are developed.</p>
      </div>
      <p class="placeholder-note">Additional modules and internal tools can be attached here over time.</p>
    `
  },
  feed: {
    title: "Feed",
    lead: "Updates and short-form notes.",
    content: `
      <div class="content-block">
        <h3>Latest</h3>
        <p>Short updates and notes will surface in this stream.</p>
      </div>
      <div class="content-block">
        <h3>Purpose</h3>
        <p>A lightweight channel for announcements and ongoing activity across the portal.</p>
      </div>
      <p class="placeholder-note">This feed can later pull from external sources or be managed manually.</p>
    `
  }
};

const dashboard = document.getElementById('dashboard');
const moduleView = document.getElementById('module-view');
const moduleContent = document.getElementById('module-content');
const backBtn = document.getElementById('back-btn');

document.querySelectorAll('.module-card').forEach(card => {
  card.addEventListener('click', () => {
    const key = card.dataset.module;
    const data = modules[key];
    if (!data) return;

    moduleContent.innerHTML = `
      <h2>${data.title}</h2>
      <p class="module-lead">${data.lead}</p>
      ${data.content}
    `;

    dashboard.hidden = true;
    moduleView.hidden = false;
    window.scrollTo(0, 0);
  });
});

backBtn.addEventListener('click', () => {
  moduleView.hidden = true;
  dashboard.hidden = false;
});
