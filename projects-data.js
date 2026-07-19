// =====================================================================
// SHARED PROJECT DATA
// Both index.html (home page gallery) and every category page
// (e.g. category-power-electronics.html) load this one file.
// Add a project here ONCE and it shows up everywhere it belongs.
//
// image:     path to a photo/screenshot in images/projects/ (cropped to 4:3)
// visual:    optional key into `visuals` below for an inline SVG diagram
//            instead of a photo (used for the power flow project)
// featured:  true makes the card span 2 columns on the home page
// stats:     optional array of { value, label } result chips
// resources: optional array of { label, desc, href, icon }
//            icon is one of: "pdf", "code", "app"
//            Each renders as a clickable row that opens in a new tab.
//
// Leave the array empty ( [] ) and the "coming soon" empty state shows
// automatically on both the home page and any category page.
// =====================================================================
const projects = [
  {
    title: "Solving the AC Power Flow Problem with Newton-Raphson",
    category: "Power Electronics",
    date: "July 2026",
    featured: true,
    description: "A from-scratch Newton-Raphson power flow solver, derived from first principles and tested on a 7-bus system: base-case solution, N-1 contingency screening, and a voltage-collapse study that traces the Jacobian to singularity.",
    visual: "sevenBus",
    visualCaption: "7-bus test system",
    stats: [
      { value: "3", label: "iterations" },
      { value: "10⁻⁸", label: "tolerance p.u." },
      { value: "λ* 5.151", label: "collapse point" }
    ],
    resources: [
      {
        label: "Read the paper",
        desc: "Full derivation, the 7-bus test system, and the empirical sensitivity study (PDF).",
        href: "projects/power-flow/Solving_the_AC_Power_Flow_Problem_with_Newton-Raphson.pdf",
        icon: "pdf"
      },
      {
        label: "View the code",
        desc: "The Jupyter notebook with the solver and every figure in the paper, self-contained and runnable.",
        href: "projects/power-flow/power_flow_experiments.ipynb",
        icon: "code"
      },
      {
        label: "Open the workbench",
        desc: "An interactive control-room-styled tool for running the solver on real what-if scenarios.",
        href: "projects/power-flow/powerflow_workbench.html",
        icon: "app"
      }
    ]
  }
];

const resourceIcons = {
  pdf: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>',
  code: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6L3 12l5 6M16 6l5 6-5 6"/></svg>',
  app: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>'
};
const externalIcon = '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M8 7h9v9"/></svg>';

// Inline SVG one-line diagram of the 7-bus test system.
// Generators (slack/PV) are squares, loads (PQ) are circles - matching the
// convention used in the paper's figures.
const visuals = {
  sevenBus: `
    <svg viewBox="0 0 400 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="One-line diagram of the 7-bus test system">
      <g stroke="#7C93AD" stroke-width="1.6" opacity="0.55">
        <line x1="62" y1="148" x2="152" y2="58"/>
        <line x1="152" y1="58" x2="330" y2="58"/>
        <line x1="62" y1="148" x2="205" y2="148"/>
        <line x1="330" y1="58" x2="205" y2="148"/>
        <line x1="205" y1="148" x2="330" y2="240"/>
        <line x1="62" y1="148" x2="62" y2="240"/>
        <line x1="62" y1="240" x2="205" y2="240"/>
        <line x1="205" y1="240" x2="330" y2="240"/>
      </g>
      <g fill="#C41E3A" class="flow-dot">
        <circle cx="133" cy="148" r="3.5"/>
      </g>
      <g fill="#F5B700" class="flow-dot f2">
        <circle cx="241" cy="58" r="3"/>
      </g>
      <g fill="#F5B700" class="flow-dot f3">
        <circle cx="133" cy="240" r="3"/>
      </g>

      <!-- generator buses: squares -->
      <g>
        <rect x="50" y="136" width="24" height="24" rx="3" fill="#C41E3A"/>
        <text x="62" y="176" fill="#DCE4EE" font-family="monospace" font-size="10.5" text-anchor="middle">Bus 1</text>
        <text x="62" y="188" fill="#7C93AD" font-family="monospace" font-size="9" text-anchor="middle">slack</text>
      </g>
      <g>
        <rect x="141" y="47" width="22" height="22" rx="3" fill="#F5B700"/>
        <text x="152" y="38" fill="#DCE4EE" font-family="monospace" font-size="10.5" text-anchor="middle">Bus 2</text>
      </g>
      <g>
        <rect x="51" y="229" width="22" height="22" rx="3" fill="#F5B700"/>
        <text x="62" y="270" fill="#DCE4EE" font-family="monospace" font-size="10.5" text-anchor="middle">Bus 6</text>
      </g>

      <!-- load buses: circles -->
      <g>
        <circle cx="330" cy="58" r="11" fill="#2A3550" stroke="#8FA6C4" stroke-width="1.8"/>
        <text x="330" y="38" fill="#DCE4EE" font-family="monospace" font-size="10.5" text-anchor="middle">Bus 3</text>
      </g>
      <g>
        <circle cx="205" cy="148" r="11" fill="#2A3550" stroke="#8FA6C4" stroke-width="1.8"/>
        <text x="205" y="176" fill="#DCE4EE" font-family="monospace" font-size="10.5" text-anchor="middle">Bus 4</text>
      </g>
      <g>
        <circle cx="330" cy="240" r="11" fill="#2A3550" stroke="#8FA6C4" stroke-width="1.8"/>
        <text x="330" y="270" fill="#DCE4EE" font-family="monospace" font-size="10.5" text-anchor="middle">Bus 5</text>
      </g>
      <g>
        <circle cx="205" cy="240" r="11" fill="#2A3550" stroke="#8FA6C4" stroke-width="1.8"/>
        <text x="205" y="270" fill="#DCE4EE" font-family="monospace" font-size="10.5" text-anchor="middle">Bus 7</text>
      </g>
    </svg>`
};

// Renders a list of project objects into a target grid element.
// Used by both index.html (all/featured projects) and category pages
// (pre-filtered to one category).
function renderProjectCards(gridEl, list, emptyMessage){
  if (list.length === 0){
    gridEl.innerHTML = `
      <div class="empty-gallery">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F5B700" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"/></svg>
        <h3>Projects coming soon</h3>
        <p>${emptyMessage || "I'm just getting started &mdash; as builds wrap up, write-ups and photos will show up right here."}</p>
        <div class="status-line"><span class="led"></span> status: building</div>
      </div>`;
    return;
  }
  gridEl.className = 'projects-grid';
  gridEl.innerHTML = list.map(p => `
    <div class="project-card${p.featured ? ' featured' : ''}">
      ${p.visual ? `
        <div class="project-visual">
          ${visuals[p.visual] || ''}
          <div class="visual-caption">
            <span>${p.visualCaption || ''}</span>
            <span class="visual-legend">
              <span><i class="lg-dot"></i>gen</span>
              <span><i class="lg-dot load"></i>load</span>
            </span>
          </div>
        </div>`
      : `<img class="thumb" src="${p.image}" alt="${p.title}" loading="lazy">`}
      <div class="body">
        <span class="project-tag">${p.category}</span>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        ${p.stats ? `
        <div class="project-stats">
          ${p.stats.map(s => `<div class="stat-chip"><b>${s.value}</b><span>${s.label}</span></div>`).join('')}
        </div>` : ''}
        <div class="project-meta">
          <span class="project-date">Built ${p.date}</span>
          ${(!p.resources && p.link) ? `<a class="project-link" href="${p.link}" target="_blank">View project &rarr;</a>` : ''}
        </div>
        ${p.resources ? `
        <div class="project-resources">
          <div class="resources-label">Project files</div>
          ${p.resources.map(r => `
            <a class="resource-link" href="${r.href}" target="_blank" rel="noopener">
              <span class="resource-icon">${resourceIcons[r.icon] || resourceIcons.code}</span>
              <span class="resource-text">
                <span class="resource-name">${r.label}${externalIcon}</span>
                <span class="resource-desc">${r.desc}</span>
              </span>
            </a>
          `).join('')}
        </div>` : ''}
      </div>
    </div>
  `).join('');
}
