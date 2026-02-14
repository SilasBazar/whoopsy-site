// Simple app - no framework
document.getElementById('app').innerHTML = `
  <nav>
    <a href="#" class="logo">WHOOPSY</a>
    <ul class="nav-links">
      <li><a href="#games">Games</a></li>
      <li><a href="#about">About</a></li>
    </ul>
  </nav>

  <section class="hero">
    <h1>
      <span>We make</span>
      <span>games that</span>
      <span>don't suck.</span>
    </h1>
    <p>No loot boxes. No pay-to-win. No corporate bs. Just games made by people who actually play games.</p>
    <div class="cta-group">
      <a href="#games" class="btn btn-primary">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        Play Our Games
      </a>
      <a href="#about" class="btn btn-secondary">Learn More</a>
    </div>
  </section>

  <section id="games" class="section">
    <h2>Our Games</h2>
    <div class="game-card">
      <div class="game-visual">LEAP OF FAITH</div>
      <div class="game-info">
        <h3>Leap of Faith</h3>
        <p>A precision platformer that respects your time but disrespects your reflexes. Tight loops, zero filler, pure adrenaline.</p>
        <div class="game-stats">
          <div class="stat">
            <span class="stat-label">Status</span>
            <span class="stat-value">Live on Steam</span>
          </div>
          <div class="stat">
            <span class="stat-label">Demo</span>
            <span class="stat-value">In Progress</span>
          </div>
        </div>
        <a href="https://store.steampowered.com/app/3628800/Leap_Of_Faith/" target="_blank" class="btn btn-primary">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.979 0C5.666 0 .546 5.112.546 11.419c0 5.176 3.479 9.535 8.214 10.982l1.638-5.328-2.315-.815c-.657-.229-.86-.967-.442-1.492l5.773-7.238c.451-.564 1.348-.262 1.348.455v5.86l2.365.834c1.897.669 1.761 3.467-.189 3.965l-4.14 1.055 1.54 3.79c6.04-.693 10.73-5.833 10.73-12.072C25.071 5.112 19.208 0 11.979 0z"/></svg>
          Get on Steam
        </a>
      </div>
    </div>
  </section>

  <section id="about" class="section">
    <h2>About</h2>
    <p style="color: var(--gray); max-width: 600px; font-size: 1.125rem;">
      We started Whoopsy because we were tired of the same old game industry bs. 
      Endless meetings about "engagement metrics." Games designed around monetization instead of fun.
      <br><br>
      So we made our own thing. Small team. No investors breathing down our necks. 
      Just people who love making games and playing them.
    </p>
  </section>

  <footer>
    <span style="color: var(--gray); font-size: 0.875rem;">© 2026 Whoopsy Games</span>
    <div style="display: flex; gap: 2rem;">
      <a href="#">Steam</a>
      <a href="#">Twitter</a>
      <a href="#">Discord</a>
    </div>
  </footer>
`;

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});