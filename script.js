// Keep the selected projects together in the featured grid.
const nordicProject = document.getElementById('nordic');
const featuredSection = document.querySelector('.featured-section');
if (nordicProject && featuredSection) featuredSection.appendChild(nordicProject);

const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());
