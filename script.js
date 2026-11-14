// Small enhancements only. The page works without JavaScript.

// 1. Placeholder for project images that haven't been added yet.
document.querySelectorAll('.project__frame').forEach(function (frame) {
  var img = frame.querySelector('img');
  var caption = frame.parentElement.querySelector('figcaption');
  frame.dataset.label = caption ? caption.innerHTML.split(/<br\s*\/?>/i)[0].trim() : 'Project';
  function missing() { frame.classList.add('is-missing'); }
  if (!img) return missing();
  img.addEventListener('error', missing);
  if (img.complete && img.naturalWidth === 0) missing();
});

// 2. Right label: "(Work)" on the intro, "(About)" once you are in the work,
//    so it always takes you to the other half of the page.
var toggle = document.querySelector('[data-toggle]');
var work = document.getElementById('work');
if (toggle && work && 'IntersectionObserver' in window) {
  new IntersectionObserver(function (entries) {
    var inWork = entries[0].isIntersecting || entries[0].boundingClientRect.top < 0;
    toggle.textContent = inWork ? '(About)' : '(Work)';
    toggle.setAttribute('href', inWork ? '#top' : '#work');
  }, { rootMargin: '0px 0px -50% 0px' }).observe(work);
}

// 3. Press G to show the layout grid (12 columns desktop, 4 on mobile).
var overlay = document.querySelector('.grid-overlay');
if (overlay) {
  for (var i = 0; i < 12; i++) overlay.appendChild(document.createElement('span'));
  function syncCols() {
    var n = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--cols'), 10) || 12;
    overlay.querySelectorAll('span').forEach(function (s, idx) { s.style.display = idx < n ? '' : 'none'; });
  }
  syncCols();
  window.addEventListener('resize', syncCols);
  document.addEventListener('keydown', function (e) {
    if ((e.key === 'g' || e.key === 'G') && !e.metaKey && !e.ctrlKey && !e.altKey) overlay.classList.toggle('on');
  });
  if (location.search.indexOf('grid') !== -1) overlay.classList.add('on');
}
