/**
 * =========================================================================
 * NIKHIL KUMAR GIRI (VISHWA) - PORTFOLIO CONTROLLER
 * Dynamic Rendering, Photo Upload/Fallback, Live Client Work & AI Showcases
 * =========================================================================
 */

(function () {
  'use strict';

  // -----------------------------------------------------------------------
  // 1. Data Store Initialization (Local Storage with fallback to data.js)
  // -----------------------------------------------------------------------
  const STORAGE_KEY = 'vishwa_portfolio_custom_data_v2';
  let activeData = null;

  function loadPortfolioData() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        activeData = JSON.parse(saved);
        return;
      }
    } catch (e) {
      console.warn('Unable to read localStorage:', e);
    }

    // Fallback to window.PORTFOLIO_DATA from data.js
    if (typeof PORTFOLIO_DATA !== 'undefined') {
      activeData = JSON.parse(JSON.stringify(PORTFOLIO_DATA));
    } else {
      console.error('PORTFOLIO_DATA not found in window. Please check data.js');
    }
  }

  // -----------------------------------------------------------------------
  // 2. Icon SVGs (Vibrant & Authentic Developer Brand Marks)
  // -----------------------------------------------------------------------
  const ICONS = {
    github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" fill="currentColor" style="color:#0a66c2;"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" fill="currentColor" style="color:#e1306c;"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
    external: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
    globe: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    python: `<svg viewBox="0 0 24 24" fill="currentColor" style="color: #0284c7;"><path d="M12 2c-3.14 0-5.18.35-6.38 1.47C4.42 4.6 4.3 6.36 4.3 8.36h7.7v1.1H3.6c-1.8 0-3.3 1.5-3.3 3.3 0 1.8 1.5 3.3 3.3 3.3h2.2v-2.2c0-1.8 1.5-3.3 3.3-3.3h5.5c1.8 0 3.3-1.5 3.3-3.3V5.6c0-2-1.5-3.6-6-3.6zm-2.8 1.9c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1.5-1.1 1.1-1.1zM12 22c3.14 0 5.18-.35 6.38-1.47 1.2-1.13 1.32-2.89 1.32-4.89h-7.7v-1.1h8.4c1.8 0 3.3-1.5 3.3-3.3 0-1.8-1.5-3.3-3.3-3.3h-2.2v2.2c0 1.8-1.5 3.3-3.3 3.3H9.2c-1.8 0-3.3 1.5-3.3 3.3v1.7c0 2 1.5 3.6 6 3.6zm2.8-1.9c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1 1.1.5 1.1 1.1-.5 1.1-1.1 1.1z"/></svg>`,
    javascript: `<svg viewBox="0 0 24 24" fill="currentColor" style="color: #eab308;"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.017-.835-1.879-2.604-2.583l-.527-.201c-.703-.268-1.05-.625-1.05-1.07 0-.423.272-.738.814-.738.534 0 .913.26 1.08.735.048.14.2.22.35.19l1.43-.27c.143-.03.23-.17.18-.31-.383-1.066-1.332-1.854-2.97-1.854-1.637 0-2.732.964-2.732 2.378 0 1.48 1.026 2.18 2.502 2.73l.534.204c.833.319 1.192.68 1.192 1.22 0 .584-.53 1.025-1.33 1.025-.972 0-1.493-.49-1.745-1.17-.05-.14-.19-.22-.34-.18l-1.46.36c-.14.04-.22.18-.17.32.48 1.3 1.62 2.14 3.64 2.14 2.01 0 3.3-1.1 3.3-2.88zm-8.49.52c-.22-.31-.4-.68-.53-1.09l-1.39.38c-.14.04-.21.19-.17.33.36 1.25 1.25 2.1 2.87 2.1 1.7 0 2.88-.95 2.88-2.67v-6.95c0-.15-.12-.27-.27-.27h-1.45c-.15 0-.27.12-.27.27v6.97c0 .54-.31.83-.8.83-.34 0-.64-.13-.9-.45z"/></svg>`,
    golang: `<svg viewBox="0 0 24 24" fill="currentColor" style="color: #0284c7;"><path d="M1.81 9.42c-.26.24-.31.62-.12.92.83 1.29 2.04 2.3 3.49 2.89.34.14.71-.05.81-.4.1-.35-.08-.72-.42-.85-1.21-.49-2.22-1.33-2.9-2.4-.18-.28-.57-.35-.86-.16zm8.17 6.4c-3.14 0-5.71-2.4-5.71-5.36 0-2.96 2.57-5.36 5.71-5.36 2.54 0 4.71 1.57 5.43 3.79.08.26.32.42.58.42h2.95c.34 0 .61-.28.61-.62 0-4.04-3.69-7.32-8.23-7.32-4.54 0-8.23 3.28-8.23 7.32s3.69 7.32 8.23 7.32c3.08 0 5.79-1.51 7.21-3.79.18-.28.12-.66-.14-.87-.26-.21-.65-.18-.87.09-1.23 1.94-3.5 3.2-6.19 3.2zm12.98-6.14h-6.28c-.34 0-.62.28-.62.62s.28.62.62.62h6.28c.34 0 .62-.28.62-.62s-.28-.62-.62-.62zm.98 2.53h-4.32c-.34 0-.62.28-.62.62s.28.62.62.62h4.32c.34 0 .62-.28.62-.62s-.28-.62-.62-.62zm-1.89-5.05h-3.41c-.34 0-.62.28-.62.62s.28.62.62.62h3.41c.34 0 .62-.28.62-.62s-.28-.62-.62-.62z"/></svg>`,
    react: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: #2563eb;"><circle cx="12" cy="12" r="2.5" fill="#2563eb"/><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(0 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)"/></svg>`,
    nextjs: `<svg viewBox="0 0 24 24" fill="currentColor" style="color: #0f172a;"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.83 17.65L10.9 8.27h-1.8v7.46H7.5V6.73h2.67l7.25 9.77.24.32-.33.83h-.5zM15 11.2h1.6v-4.5H15v4.5z"/></svg>`,
    streamlit: `<svg viewBox="0 0 24 24" fill="currentColor" style="color: #ef4444;"><path d="M14.6 2.6L12 8.7l5.4 1.3-2.8-7.4zM9.4 2.6L4 16.5l5.2-1.3L12 8.7 9.4 2.6zm6.8 9.5l-3.3 2.9 6.7 1.6-3.4-4.5zM2 18.5l18.5 4.5.9-.6-2.5-6.1-16.9 2.2z"/></svg>`,
    flutter: `<svg viewBox="0 0 24 24" fill="currentColor" style="color: #0284c7;"><path d="M14.314 0L2.3 12 6 15.7 21.684 0zm0 15.686L8.4 22.8 12.1 24l9.586-9.6zM8.386 11.986l3.714 3.7 5.8-5.8-3.7-3.7z"/></svg>`,
    graduation: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
    briefcase: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
    brain: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`
  };

  // -----------------------------------------------------------------------
  // 3. UI Render Functions
  // -----------------------------------------------------------------------
  function renderAll() {
    if (!activeData) return;

    renderNavigation();
    renderHero();
    renderAbout();
    renderSkills();
    renderProjects();
    renderContact();
    renderFooter();
  }

  // 3.1 Sticky Navigation
  function renderNavigation() {
    const brandName = document.getElementById('nav-brand-name');
    if (brandName) {
      brandName.innerHTML = `${escapeHTML(activeData.personal.fullName.split(' ')[0])} <span class="text-cyan">(${escapeHTML(activeData.personal.preferredName || 'Vishwa')})</span>`;
    }
  }

  // 3.2 Hero Section (With Photo Loader & Fallback)
  function renderHero() {
    const heroTitle = document.getElementById('hero-heading');
    const heroSubtitle = document.getElementById('hero-subtitle');
    const heroStatus = document.getElementById('hero-status-badge');
    const heroSocials = document.getElementById('hero-social-links');
    const avatarImg = document.getElementById('hero-avatar-img');
    const avatarFallback = document.getElementById('hero-avatar-fallback');
    const avatarDisplayName = document.getElementById('avatar-display-name');

    if (heroTitle) {
      heroTitle.innerHTML = `Hi, I'm <span class="gradient-text">${escapeHTML(activeData.personal.fullName)}</span>`;
    }

    if (heroSubtitle) {
      heroSubtitle.textContent = activeData.personal.roleTitle;
    }

    if (heroStatus) {
      heroStatus.textContent = activeData.personal.statusBadge || "Available for Internships & Freelance Work";
    }

    if (avatarDisplayName) {
      avatarDisplayName.textContent = activeData.personal.fullName;
    }

    // Handle Profile Picture
    if (avatarImg && avatarFallback) {
      const photoSrc = activeData.personal.avatarUrl || 'profile.jpg';
      avatarImg.src = photoSrc;

      avatarImg.onload = function () {
        avatarImg.style.display = 'block';
        avatarFallback.style.display = 'none';
      };

      avatarImg.onerror = function () {
        // Fallback displayed when photo file is not found
        avatarImg.style.display = 'none';
        avatarFallback.style.display = 'flex';
      };
    }

    // Social Links
    if (heroSocials) {
      const { github, linkedin, instagram } = activeData.socialLinks;
      heroSocials.innerHTML = `
        <a href="${escapeHTML(github)}" target="_blank" rel="noopener noreferrer" class="social-pill" aria-label="GitHub Profile">
          ${ICONS.github}
          <span>GitHub</span>
        </a>
        <a href="${escapeHTML(linkedin)}" target="_blank" rel="noopener noreferrer" class="social-pill" aria-label="LinkedIn Profile">
          ${ICONS.linkedin}
          <span>LinkedIn</span>
        </a>
        <a href="${escapeHTML(instagram)}" target="_blank" rel="noopener noreferrer" class="social-pill" aria-label="Instagram Profile">
          ${ICONS.instagram}
          <span>Instagram</span>
        </a>
      `;
    }
  }

  // 3.3 About Me Section
  function renderAbout() {
    const aboutBio = document.getElementById('about-bio');
    const highlightsContainer = document.getElementById('about-highlights');

    if (aboutBio) {
      aboutBio.textContent = activeData.about.bio;
    }

    if (highlightsContainer && activeData.about.highlights) {
      highlightsContainer.innerHTML = activeData.about.highlights.map(item => `
        <div class="highlight-card glass-panel">
          <div class="highlight-icon">
            ${ICONS[item.icon] || ICONS.graduation}
          </div>
          <div>
            <h3 class="highlight-title">${escapeHTML(item.title)}</h3>
            <p class="highlight-desc">${escapeHTML(item.description)}</p>
          </div>
        </div>
      `).join('');
    }
  }

  // 3.4 Skills Section (Minimalist cards & badges)
  function renderSkills() {
    const languagesGrid = document.getElementById('skills-languages-grid');
    const frameworksGrid = document.getElementById('skills-frameworks-grid');

    if (languagesGrid && activeData.skills.languages) {
      languagesGrid.innerHTML = activeData.skills.languages.map(skill => `
        <div class="skill-card">
          <div class="skill-badge-icon">
            ${ICONS[skill.icon] || `<span style="font-weight:bold; color:var(--color-primary);">${skill.name.slice(0, 2)}</span>`}
          </div>
          <div class="skill-info">
            <div class="skill-name-row">
              <span class="skill-name">${escapeHTML(skill.name)}</span>
              <span class="skill-level-pill">${escapeHTML(skill.level || 'Active')}</span>
            </div>
            <p class="skill-detail-text">${escapeHTML(skill.highlight || 'Core Language')}</p>
          </div>
        </div>
      `).join('');
    }

    if (frameworksGrid && activeData.skills.frameworksAndTools) {
      frameworksGrid.innerHTML = activeData.skills.frameworksAndTools.map(skill => `
        <div class="skill-card">
          <div class="skill-badge-icon">
            ${ICONS[skill.icon] || `<span style="font-weight:bold; color:var(--color-primary);">${skill.name.slice(0, 2)}</span>`}
          </div>
          <div class="skill-info">
            <div class="skill-name-row">
              <span class="skill-name">${escapeHTML(skill.name)}</span>
              <span class="skill-level-pill">${escapeHTML(skill.level || 'Active')}</span>
            </div>
            <p class="skill-detail-text">${escapeHTML(skill.highlight || 'Framework / Tool')}</p>
          </div>
        </div>
      `).join('');
    }
  }

  // 3.5 Projects Section (Separated Client Work vs AI/Engineering Projects)
  function renderProjects() {
    const clientGrid = document.getElementById('projects-client-grid');
    const aiGrid = document.getElementById('projects-ai-grid');
    if (!activeData.projects) return;

    // Helper to render individual project card
    function createProjectCardHtml(proj) {
      const badgeClass = `tag-${proj.badgeType || 'featured'}`;
      const highlightsHtml = proj.highlights && proj.highlights.length > 0 ? `
        <ul class="project-highlights-list">
          ${proj.highlights.map(h => `
            <li class="project-highlight-item">
              <span class="highlight-bullet">▹</span>
              <span>${escapeHTML(h)}</span>
            </li>
          `).join('')}
        </ul>
      ` : '';

      const tagsHtml = proj.tags ? proj.tags.map(t => `<span class="project-tag">${escapeHTML(t)}</span>`).join('') : '';

      let linksHtml = '';
      if (proj.links) {
        if (proj.links.demo) {
          const isClient = proj.section === 'client';
          const linkText = isClient ? 'Visit Live Website' : 'Live Deployment';
          linksHtml += `
            <a href="${escapeHTML(proj.links.demo)}" target="_blank" rel="noopener noreferrer" class="project-link project-link-primary">
              ${ICONS.globe}
              <span>${linkText}</span>
              ${ICONS.external}
            </a>
          `;
        }
        if (proj.links.github) {
          linksHtml += `
            <a href="${escapeHTML(proj.links.github)}" target="_blank" rel="noopener noreferrer" class="project-link">
              ${ICONS.github}
              <span>Code Repository</span>
            </a>
          `;
        }
      }

      // Display URL preview
      const previewUrl = proj.links?.demo || 'https://github.com/ctrlvishwa';

      return `
        <article class="project-card">
          <div class="project-preview-mockup">
            <div class="mockup-top-bar">
              <div class="window-dots">
                <span class="window-dot dot-red"></span>
                <span class="window-dot dot-yellow"></span>
                <span class="window-dot dot-green"></span>
              </div>
              <span class="mockup-tag ${badgeClass}">${escapeHTML(proj.badge || 'PROJECT')}</span>
            </div>
            <div class="mockup-url-bar">
              <span style="color:#2563eb;">🔒</span>
              <a href="${escapeHTML(previewUrl)}" target="_blank" rel="noopener noreferrer" class="mockup-url-link">${escapeHTML(previewUrl)}</a>
            </div>
          </div>

          <div class="project-card-body">
            <h3 class="project-title">${escapeHTML(proj.title)}</h3>
            <p class="project-desc">${escapeHTML(proj.description)}</p>
            ${highlightsHtml}
            <div class="project-tags">
              ${tagsHtml}
            </div>
            <div class="project-actions">
              ${linksHtml || `<span style="font-size:0.85rem; color:var(--text-muted); font-weight:600;">Active Sprint</span>`}
            </div>
          </div>
        </article>
      `;
    }

    // Split projects into Client / Freelance vs AI / Engineering
    const clientProjects = activeData.projects.filter(p => p.section === 'client' || p.id === 'remark-chemical' || p.id === 'kvg2chem' || p.id === 'enterprise-web-catalogs');
    const aiProjects = activeData.projects.filter(p => !clientProjects.includes(p));

    if (clientGrid) {
      clientGrid.innerHTML = clientProjects.map(createProjectCardHtml).join('');
    }

    if (aiGrid) {
      aiGrid.innerHTML = aiProjects.map(createProjectCardHtml).join('');
    }
  }

  // 3.6 Contact Section
  function renderContact() {
    const emailElem = document.getElementById('display-contact-email');
    const phoneElem = document.getElementById('display-contact-phone');
    const whatsappElem = document.getElementById('contact-whatsapp-link');

    if (emailElem && activeData.contact.email) {
      emailElem.textContent = activeData.contact.email;
      emailElem.href = `mailto:${activeData.contact.email}`;
    }

    if (phoneElem && activeData.contact.phone) {
      phoneElem.textContent = activeData.contact.formattedPhone || activeData.contact.phone;
      phoneElem.href = `tel:${activeData.contact.phone}`;
    }

    if (whatsappElem) {
      whatsappElem.href = activeData.contact.whatsappLink || `https://wa.me/91${activeData.contact.phone.replace(/\D/g, '')}`;
    }
  }

  // 3.7 Footer Section
  function renderFooter() {
    const footerSocials = document.getElementById('footer-social-links');
    const footerCopyright = document.getElementById('footer-copyright');

    if (footerSocials && activeData.socialLinks) {
      const { github, linkedin, instagram } = activeData.socialLinks;
      footerSocials.innerHTML = `
        <a href="${escapeHTML(github)}" target="_blank" rel="noopener noreferrer" class="social-pill" aria-label="GitHub Profile">
          ${ICONS.github}
          <span>GitHub</span>
        </a>
        <a href="${escapeHTML(linkedin)}" target="_blank" rel="noopener noreferrer" class="social-pill" aria-label="LinkedIn Profile">
          ${ICONS.linkedin}
          <span>LinkedIn</span>
        </a>
        <a href="${escapeHTML(instagram)}" target="_blank" rel="noopener noreferrer" class="social-pill" aria-label="Instagram Profile">
          ${ICONS.instagram}
          <span>Instagram</span>
        </a>
      `;
    }

    if (footerCopyright) {
      const year = activeData.footer?.copyrightYear || "2026";
      const name = activeData.footer?.copyrightName || activeData.personal.fullName;
      footerCopyright.innerHTML = `&copy; ${escapeHTML(year)} ${escapeHTML(name)}. All rights reserved.`;
    }
  }

  // -----------------------------------------------------------------------
  // 4. Interactive Utilities: Toast, Clipboard, Photo Upload, Contact Form
  // -----------------------------------------------------------------------
  function showToast(message, duration = 3200) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      <span>${escapeHTML(message)}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  function setupClipboard() {
    const copyEmailBtn = document.getElementById('copy-email-btn');
    const copyPhoneBtn = document.getElementById('copy-phone-btn');

    if (copyEmailBtn) {
      copyEmailBtn.addEventListener('click', () => {
        const email = activeData.contact.email;
        navigator.clipboard.writeText(email).then(() => {
          showToast(`Copied email to clipboard: ${email}`);
        }).catch(() => {
          showToast(`Email: ${email}`);
        });
      });
    }

    if (copyPhoneBtn) {
      copyPhoneBtn.addEventListener('click', () => {
        const phone = activeData.contact.phone;
        navigator.clipboard.writeText(phone).then(() => {
          showToast(`Copied phone number to clipboard: ${phone}`);
        }).catch(() => {
          showToast(`Phone: ${phone}`);
        });
      });
    }
  }

  // Setup Photo Uploaders (From Hero or Admin Modal)
  function setupPhotoUploaders() {
    const heroInput = document.getElementById('avatar-file-input');
    const adminInput = document.getElementById('admin-photo-upload');
    const adminChooseBtn = document.getElementById('admin-photo-choose-btn');

    if (adminChooseBtn && adminInput) {
      adminChooseBtn.addEventListener('click', () => adminInput.click());
    }

    const inputs = [heroInput, adminInput];
    inputs.forEach(input => {
      if (!input) return;
      input.addEventListener('change', function (e) {
        const file = e.target.files && e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function (evt) {
            const dataUrl = evt.target.result;
            activeData.personal.avatarUrl = dataUrl;
            try {
              localStorage.setItem(STORAGE_KEY, JSON.stringify(activeData));
            } catch (err) {
              console.warn('Could not save photo to localStorage:', err);
            }
            renderHero();
            showToast('Profile photo updated successfully!');

            const adminPhotoStatus = document.getElementById('admin-photo-status');
            if (adminPhotoStatus) adminPhotoStatus.textContent = '✓ Photo Loaded!';
            const adminAvatarUrl = document.getElementById('admin-avatarUrl');
            if (adminAvatarUrl) adminAvatarUrl.value = 'Custom Uploaded Photo';
          };
          reader.readAsDataURL(file);
        }
      });
    });
  }

  // Working Contact Form
  function setupContactForm() {
    const form = document.getElementById('contact-form');
    const statusAlert = document.getElementById('form-status');
    const submitBtn = document.getElementById('form-submit-btn');

    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('form-name')?.value.trim();
      const email = document.getElementById('form-email')?.value.trim();
      const message = document.getElementById('form-message')?.value.trim();

      if (!name || !email || !message) {
        if (statusAlert) {
          statusAlert.className = 'form-status-alert error';
          statusAlert.textContent = 'Please fill out all fields before sending.';
        }
        return;
      }

      if (!/^\S+@\S+\.\S+$/.test(email)) {
        if (statusAlert) {
          statusAlert.className = 'form-status-alert error';
          statusAlert.textContent = 'Please provide a valid email address.';
        }
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Preparing message...</span>`;
      }

      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const body = encodeURIComponent(`Hi Nikhil,\n\n${message}\n\nFrom: ${name} (${email})`);
      const mailtoUrl = `mailto:${activeData.contact.email}?subject=${subject}&body=${body}`;

      setTimeout(() => {
        if (statusAlert) {
          statusAlert.className = 'form-status-alert success';
          statusAlert.innerHTML = `
            <strong>Thank you, ${escapeHTML(name)}!</strong><br>
            Your message has been prepared. Opening your email app to send directly to <code>${escapeHTML(activeData.contact.email)}</code>...
          `;
        }

        showToast('Message ready! Opening email client...');
        window.location.href = mailtoUrl;

        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `
            <span>Send Message</span>
            <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          `;
        }
      }, 500);
    });
  }

  // Scroll Spy for Sticky Navigation
  function setupScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
      let currentSection = '';
      const scrollPos = window.scrollY + 120;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentSection = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    }, { passive: true });
  }

  // Mobile Menu Drawer
  function setupMobileMenu() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const drawer = document.getElementById('mobile-drawer');
    const links = document.querySelectorAll('.mobile-nav-link');

    if (!toggle || !drawer) return;

    toggle.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      drawer.setAttribute('aria-hidden', String(!isOpen));
    });

    links.forEach(l => {
      l.addEventListener('click', () => {
        drawer.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        drawer.setAttribute('aria-hidden', 'true');
      });
    });
  }

  // 3D interactive hero effect for modern portfolio impact
  function setupHero3D() {
    const showcase = document.querySelector('.hero-photo-showcase');
    const avatar = document.querySelector('.avatar-wrapper');
    if (!showcase || !avatar) return;

    const resetTilt = () => {
      avatar.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
      avatar.style.boxShadow = '0 20px 45px -10px rgba(99, 102, 241, 0.35), 0 0 0 1px rgba(255,255,255,0.8) inset';
    };

    showcase.addEventListener('pointermove', (event) => {
      const rect = showcase.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const rotateY = (x - 0.5) * 18;
      const rotateX = (0.5 - y) * 18;

      avatar.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      avatar.style.boxShadow = `0 28px 62px -16px rgba(99, 102, 241, 0.38), ${rotateY * -1}px ${rotateX * 1.5}px 22px rgba(59, 130, 246, 0.18), 0 0 0 1px rgba(255,255,255,0.8) inset`;
    });

    showcase.addEventListener('pointerleave', resetTilt);
    resetTilt();
  }

  // -----------------------------------------------------------------------
  // 5. Visual Content Editor (No-Code Admin Mode with Photo Management)
  // -----------------------------------------------------------------------
  function setupAdminModal() {
    const modal = document.getElementById('admin-modal');
    const openBtns = [
      document.getElementById('admin-toggle-btn'),
      document.getElementById('mobile-admin-btn'),
      document.getElementById('footer-admin-trigger')
    ];
    const closeBtn = document.getElementById('close-admin-modal');
    const cancelBtn = document.getElementById('admin-cancel-btn');
    const saveBtn = document.getElementById('admin-save-btn');
    const resetBtn = document.getElementById('admin-reset-btn');
    const tabs = document.querySelectorAll('.modal-tab');
    const tabPanes = document.querySelectorAll('.tab-pane');
    const copyExportBtn = document.getElementById('admin-copy-data-btn');
    const downloadExportBtn = document.getElementById('admin-download-data-btn');
    const addProjectBtn = document.getElementById('admin-add-project-btn');

    if (!modal) return;

    function openModal() {
      populateAdminFields();
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    openBtns.forEach(btn => {
      if (btn) btn.addEventListener('click', openModal);
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

    // Keyboard shortcut to open visual editor: Alt+E or Ctrl+Shift+E
    window.addEventListener('keydown', (e) => {
      if ((e.altKey && e.key.toLowerCase() === 'e') || (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'e')) {
        e.preventDefault();
        if (modal.classList.contains('open')) closeModal();
        else openModal();
      }
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
      }
    });

    // Tab Switching
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetId = tab.getAttribute('data-tab');
        tabs.forEach(t => t.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));

        tab.classList.add('active');
        const targetPane = document.getElementById(targetId);
        if (targetPane) targetPane.classList.add('active');

        if (targetId === 'tab-export') {
          generateExportCode();
        }
      });
    });

    // Populate Fields from activeData
    function populateAdminFields() {
      setVal('admin-fullName', activeData.personal.fullName);
      setVal('admin-preferredName', activeData.personal.preferredName || '');
      setVal('admin-roleTitle', activeData.personal.roleTitle);
      setVal('admin-statusBadge', activeData.personal.statusBadge || '');
      setVal('admin-avatarUrl', activeData.personal.avatarUrl || 'profile.jpg');
      setVal('admin-aboutBio', activeData.about.bio);
      setVal('admin-email', activeData.contact.email);
      setVal('admin-phone', activeData.contact.phone);
      setVal('admin-github', activeData.socialLinks.github);
      setVal('admin-linkedin', activeData.socialLinks.linkedin);
      setVal('admin-instagram', activeData.socialLinks.instagram);

      renderAdminProjectsList();
    }

    // Render Editable Projects in Tab 4
    function renderAdminProjectsList() {
      const container = document.getElementById('admin-projects-list');
      if (!container) return;

      container.innerHTML = activeData.projects.map((proj, idx) => `
        <div class="admin-project-card" data-idx="${idx}">
          <div class="admin-project-header">
            <span style="font-weight:700; color:#2563eb; font-size:0.9rem;">Project #${idx + 1}: ${escapeHTML(proj.title)}</span>
            <button type="button" class="btn-danger-ghost delete-project-btn" data-idx="${idx}" style="padding:0;">Remove</button>
          </div>
          <div class="form-row">
            <div class="form-group flex-1">
              <label class="form-label" style="font-size:0.78rem;">Project Title</label>
              <input type="text" class="form-input admin-proj-title" value="${escapeAttr(proj.title)}">
            </div>
            <div class="form-group flex-1">
              <label class="form-label" style="font-size:0.78rem;">Live Website / Demo URL</label>
              <input type="url" class="form-input admin-proj-demo" value="${escapeAttr(proj.links?.demo || '')}">
            </div>
          </div>
          <div class="form-group">
            <label class="form-label" style="font-size:0.78rem;">Description</label>
            <textarea rows="2" class="form-input admin-proj-desc">${escapeHTML(proj.description)}</textarea>
          </div>
          <div class="form-group">
            <label class="form-label" style="font-size:0.78rem;">Tags (comma separated)</label>
            <input type="text" class="form-input admin-proj-tags" value="${escapeAttr(proj.tags ? proj.tags.join(', ') : '')}">
          </div>
        </div>
      `).join('');

      container.querySelectorAll('.delete-project-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-idx'), 10);
          activeData.projects.splice(idx, 1);
          renderAdminProjectsList();
        });
      });
    }

    if (addProjectBtn) {
      addProjectBtn.addEventListener('click', () => {
        activeData.projects.push({
          id: `project-${Date.now()}`,
          title: "New Client or AI Project",
          section: "client",
          badge: "Live Website",
          badgeType: "client",
          description: "Description of the live project features, business domain, and architecture.",
          tags: ["React", "Live Website", "Full-Stack"],
          highlights: ["Live production deployment", "High performance responsive interface"],
          links: { demo: "https://example.com" }
        });
        renderAdminProjectsList();
      });
    }

    // Save Changes Live
    if (saveBtn) {
      saveBtn.addEventListener('click', () => {
        activeData.personal.fullName = getVal('admin-fullName') || activeData.personal.fullName;
        activeData.personal.preferredName = getVal('admin-preferredName') || activeData.personal.preferredName;
        activeData.personal.roleTitle = getVal('admin-roleTitle') || activeData.personal.roleTitle;
        activeData.personal.statusBadge = getVal('admin-statusBadge') || activeData.personal.statusBadge;
        
        const avatarUrlInput = getVal('admin-avatarUrl');
        if (avatarUrlInput && !avatarUrlInput.includes('Custom Uploaded')) {
          activeData.personal.avatarUrl = avatarUrlInput;
        }

        activeData.about.bio = getVal('admin-aboutBio') || activeData.about.bio;
        activeData.contact.email = getVal('admin-email') || activeData.contact.email;
        activeData.contact.phone = getVal('admin-phone') || activeData.contact.phone;
        activeData.socialLinks.github = getVal('admin-github') || activeData.socialLinks.github;
        activeData.socialLinks.linkedin = getVal('admin-linkedin') || activeData.socialLinks.linkedin;
        activeData.socialLinks.instagram = getVal('admin-instagram') || activeData.socialLinks.instagram;

        const cards = document.querySelectorAll('.admin-project-card');
        cards.forEach((card, idx) => {
          if (activeData.projects[idx]) {
            const title = card.querySelector('.admin-proj-title')?.value.trim();
            const demo = card.querySelector('.admin-proj-demo')?.value.trim();
            const desc = card.querySelector('.admin-proj-desc')?.value.trim();
            const tags = card.querySelector('.admin-proj-tags')?.value.split(',').map(s => s.trim()).filter(Boolean);
            if (title) activeData.projects[idx].title = title;
            if (desc) activeData.projects[idx].description = desc;
            if (tags) activeData.projects[idx].tags = tags;
            if (demo) {
              if (!activeData.projects[idx].links) activeData.projects[idx].links = {};
              activeData.projects[idx].links.demo = demo;
            }
          }
        });

        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(activeData));
        } catch (err) {
          console.warn('Could not save to localStorage:', err);
        }

        renderAll();
        closeModal();
        showToast('Saved in this browser. Export data.js and push it to publish changes.');
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to restore the default configuration from data.js?')) {
          localStorage.removeItem(STORAGE_KEY);
          if (typeof PORTFOLIO_DATA !== 'undefined') {
            activeData = JSON.parse(JSON.stringify(PORTFOLIO_DATA));
          }
          renderAll();
          closeModal();
          showToast('Restored default portfolio settings.');
        }
      });
    }

    function generateExportCode() {
      const exportTextarea = document.getElementById('admin-export-textarea');
      if (!exportTextarea) return;

      const code = `/**
 * =========================================================================
 * PORTFOLIO DATA CONFIGURATION - NIKHIL KUMAR GIRI (VISHWA)
 * =========================================================================
 * Last updated via Visual Content Manager: ${new Date().toLocaleDateString()}
 * =========================================================================
 */

const PORTFOLIO_DATA = ${JSON.stringify(activeData, null, 2)};

if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
`;
      exportTextarea.value = code;
    }

    if (copyExportBtn) {
      copyExportBtn.addEventListener('click', () => {
        generateExportCode();
        const textarea = document.getElementById('admin-export-textarea');
        if (textarea) {
          navigator.clipboard.writeText(textarea.value).then(() => {
            showToast('Copied updated data.js to clipboard!');
          });
        }
      });
    }

    if (downloadExportBtn) {
      downloadExportBtn.addEventListener('click', () => {
        generateExportCode();
        const textarea = document.getElementById('admin-export-textarea');
        if (!textarea) return;

        const blob = new Blob([textarea.value], { type: 'application/javascript' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'data.js';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast('Downloaded fresh data.js!');
      });
    }
  }

  // -----------------------------------------------------------------------
  // 6. Helpers
  // -----------------------------------------------------------------------
  function setVal(id, val) {
    const el = document.getElementById(id);
    if (el) el.value = val || '';
  }

  function getVal(id) {
    const el = document.getElementById(id);
    return el ? el.value.trim() : '';
  }

  function escapeHTML(str) {
    if (typeof str !== 'string') return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function escapeAttr(str) {
    if (typeof str !== 'string') return '';
    return str.replace(/"/g, '&quot;');
  }

  // -----------------------------------------------------------------------
  // 7. Initialize Application
  // -----------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    loadPortfolioData();
    renderAll();
    setupClipboard();
    setupPhotoUploaders();
    setupContactForm();
    setupScrollSpy();
    setupMobileMenu();
    setupHero3D();
    setupAdminModal();
  });

})();
