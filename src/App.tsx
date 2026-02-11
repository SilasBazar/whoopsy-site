import { useState, useEffect } from 'react'

function App() {
  const [activePage, setActivePage] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Scroll to section helper
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Handle Page Switching + Closing Mobile Menu
  const switchPage = (page: string) => {
    setActivePage(page)
    setMobileMenuOpen(false)
    window.scrollTo(0, 0)
  }

  return (
    <div className="min-h-screen bg-brand-zinc text-zinc-200 font-mono selection:bg-purple-500 selection:text-white overflow-x-hidden">
      
      {/* NAVIGATION */}
      <nav className="fixed w-full z-50 bg-zinc-950/95 backdrop-blur border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 cursor-pointer select-none" onClick={() => switchPage('home')}>
              <span className="text-3xl font-black tracking-tighter text-white glitch-text font-sans">
                WHOOPSY<span className="text-brand-purple">.</span>
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button 
                  onClick={() => switchPage('home')} 
                  className={`hover:text-purple-400 transition-colors px-3 py-2 font-bold text-sm tracking-widest ${activePage === 'home' ? 'text-brand-purple' : ''}`}
                >HOME</button>
                <button 
                  onClick={() => switchPage('games')} 
                  className={`hover:text-purple-400 transition-colors px-3 py-2 font-bold text-sm tracking-widest ${activePage === 'games' ? 'text-brand-purple' : ''}`}
                >GAMES</button>
                <a href="#sauce" onClick={() => { switchPage('home'); setTimeout(() => scrollToSection('sauce'), 100); }} className="hover:text-purple-400 transition-colors px-3 py-2 font-bold text-sm tracking-widest cursor-pointer">THE SAUCE</a>
                <a href="#join" onClick={() => { switchPage('home'); setTimeout(() => scrollToSection('join'), 100); }} className="bg-white text-black hover:bg-purple-400 hover:text-white transition-colors px-4 py-2 font-bold text-sm cursor-pointer">JOIN US</a>
              </div>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white hover:text-purple-500 focus:outline-none">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden bg-zinc-900 border-b border-zinc-800 overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <button onClick={() => switchPage('home')} className="block w-full text-left px-3 py-4 text-base font-bold text-white hover:bg-zinc-800 hover:text-purple-400">HOME</button>
            <button onClick={() => switchPage('games')} className="block w-full text-left px-3 py-4 text-base font-bold text-white hover:bg-zinc-800 hover:text-purple-400">GAMES</button>
            <a href="#join" onClick={() => { switchPage('home'); setTimeout(() => scrollToSection('join'), 100); }} className="block px-3 py-4 text-base font-bold bg-purple-600 text-white">JOIN US</a>
          </div>
        </div>
      </nav>

      {/* PAGE: HOME */}
      {activePage === 'home' && (
        <div className="pt-20 animate-in fade-in duration-500">
          {/* HERO SECTION */}
          <div className="relative overflow-hidden min-h-[90vh] flex items-center">
            {/* Background Elements */}
            <div className="absolute top-20 right-0 w-64 h-64 bg-brand-purple rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-20 left-0 w-64 h-64 bg-brand-green rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            
            <div className="max-w-7xl mx-auto pt-12 pb-16 px-4 sm:px-6 lg:px-8 text-center lg:text-left lg:flex lg:items-center relative z-10">
              <div className="lg:w-1/2">
                <div className="inline-block px-3 py-1 mb-6 border border-purple-500/50 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold tracking-widest uppercase">
                  Warning: Contains 0% Corporate BS
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8 font-sans">
                  GAMES THAT <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-green-400 glitch-text">ROCK.</span>
                </h1>
                <p className="mt-4 text-xl text-zinc-400 max-w-lg mx-auto lg:mx-0 border-l-4 border-purple-500 pl-6 py-2">
                  We build dev-driven games. Zero politics. Tight loops. Pure chaos.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
                  <a href="#join" onClick={(e) => { e.preventDefault(); scrollToSection('join'); }} className="btn-primary px-8 py-4 text-lg font-bold border-2 border-transparent text-center cursor-pointer">
                    MAKE GAMES WITH US
                  </a>
                  <button onClick={() => switchPage('games')} className="btn-secondary px-8 py-4 text-lg font-bold text-center">
                    SEE OUR GAMES
                  </button>
                </div>
              </div>
              
              {/* Visual: The "Status Report" */}
              <div className="lg:w-1/2 mt-16 lg:mt-0 relative flex justify-center lg:justify-end">
                <div className="stat-card relative w-full max-w-md bg-zinc-900 border-4 border-zinc-800 p-8 transform rotate-3 shadow-2xl">
                  <div className="absolute -top-5 -right-5 bg-brand-green text-black font-black px-4 py-2 text-sm transform rotate-12 shadow-lg border-2 border-black font-sans">
                    STATUS: ONLINE
                  </div>
                  <div className="flex items-center gap-4 mb-6 border-b border-zinc-800 pb-4">
                    <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-2xl">👾</div>
                    <div>
                      <h3 className="text-lg font-bold text-white font-sans">SYSTEM DIAGNOSTICS</h3>
                      <p className="text-xs text-zinc-500 font-mono">ID: WHOOPSY-CORE-01</p>
                    </div>
                  </div>
                  <div className="space-y-4 font-mono text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-400">CORPORATE POLITICS</span>
                      <span className="text-red-500 font-bold bg-red-500/10 px-2 py-1 rounded">404 NOT FOUND</span>
                    </div>
                    <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-red-500 h-full w-0"></div>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-zinc-400">DEV FREEDOM</span>
                      <span className="text-green-400 font-bold bg-green-400/10 px-2 py-1 rounded">110% OVERCLOCKED</span>
                    </div>
                    <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-brand-green h-full w-full"></div>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-zinc-400">FUN FACTOR</span>
                      <span className="text-purple-400 font-bold bg-purple-400/10 px-2 py-1 rounded">CRITICAL LEVELS</span>
                    </div>
                    <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-brand-purple h-full w-[95%]"></div>
                    </div>
                  </div>
                  <div className="mt-8 p-4 bg-zinc-950 border border-zinc-800 font-mono text-xs text-zinc-500">
                    &gt; console.log("You're not my boss!");<br/>
                    &gt; "Message received. Deploying fun."
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MANIFESTO SECTION */}
          <section id="manifesto" className="bg-zinc-900 py-24 border-y border-zinc-800 relative">
            <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000),repeating-linear-gradient(45deg,#000_25%,#09090b_25%,#09090b_75%,#000_75%,#000)] bg-[length:20px_20px]"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div>
                  <h2 className="text-4xl md:text-5xl font-black mb-8 text-white leading-tight font-sans">
                    WE FIX THE <br/><span className="text-brand-purple bg-white/5 px-2">EMPLOYEE</span> PROBLEM.
                  </h2>
                  <div className="space-y-6 text-zinc-400 text-lg leading-relaxed font-light font-sans">
                    <p>
                      Most studios are broken machines. You build what the suits want, not what you want. You get lost in endless meetings about "synergy." You burn out.
                    </p>
                    <p className="font-bold text-white text-xl border-l-4 border-brand-green pl-4">
                      Whoopsy is the glitch in that system.
                    </p>
                    <p>
                      We were born out of the pain of devs who just wanted to build. We believe that if you let devs make games with passion and love, the result is a product that players actually feel in their bones.
                    </p>
                  </div>
                  <div className="mt-12 grid grid-cols-2 gap-4 font-sans">
                    <div className="text-center p-4 border border-zinc-700 bg-zinc-950">
                      <div className="text-3xl font-black text-white">FUN</div>
                      <div className="text-xs uppercase tracking-widest text-zinc-500 mt-1">Non-Negotiable</div>
                    </div>
                    <div className="text-center p-4 border border-zinc-700 bg-zinc-950">
                      <div className="text-3xl font-black text-white">REAL</div>
                      <div className="text-xs uppercase tracking-widest text-zinc-500 mt-1">Non-Negotiable</div>
                    </div>
                    <div className="text-center p-4 border border-zinc-700 bg-zinc-950 col-span-2">
                      <div className="text-3xl font-black text-white">BLUNT</div>
                      <div className="text-xs uppercase tracking-widest text-zinc-500 mt-1">Absolutely Non-Negotiable</div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6 mt-8 lg:mt-0 font-sans">
                  <div className="p-8 border-brutal bg-zinc-950 hover:-translate-y-2 transition-transform duration-300">
                    <div className="text-purple-500 text-4xl mb-4">🎯</div>
                    <h3 className="text-2xl font-bold text-white mb-2">THE MISSION</h3>
                    <p className="text-zinc-400">Create games players enjoy without feeling dirty or disappointed. No loot box gambling. No pay-to-win trash.</p>
                  </div>
                  <div className="p-8 border-brutal bg-zinc-950 hover:-translate-y-2 transition-transform duration-300">
                    <div className="text-green-500 text-4xl mb-4">🤡</div>
                    <h3 className="text-2xl font-bold text-white mb-2">THE VIBE</h3>
                    <p className="text-zinc-400">Witty. Rebellious. Blunt. Think of us as the Wise Jester in the room who tells the King he has no clothes.</p>
                  </div>
                  <div className="p-8 border-brutal bg-zinc-950 hover:-translate-y-2 transition-transform duration-300">
                    <div className="text-yellow-500 text-4xl mb-4">⚡</div>
                    <h3 className="text-2xl font-bold text-white mb-2">THE PROMISE</h3>
                    <p className="text-zinc-400">Happy, content, and alive. That's how our games will make you feel. It's a low bar, but everyone else keeps tripping over it.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SAUCE SECTION */}
          <section id="sauce" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase font-sans">The Secret <span className="text-brand-green decoration-wavy underline decoration-2">Sauce</span></h2>
                <p className="text-xl text-zinc-500 max-w-2xl mx-auto font-sans">
                  Spoiler Alert: It's not an algorithm. It's giving a damn.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="group relative p-1 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 transform translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform border border-white/10"></div>
                  <div className="relative bg-zinc-950 p-8 h-full border border-zinc-700 flex flex-col">
                    <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🎮</div>
                    <h3 className="text-2xl font-bold text-white mb-4 font-sans">Tight Loops</h3>
                    <p className="text-zinc-400 flex-grow leading-relaxed">
                      We obsess over the micro-moments. Think <em>Ultimate Chicken Horse</em> or <em>Stick Fight</em>. If it's not satisfying every second, we cut it.
                    </p>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="group relative p-1 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 transform translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform border border-white/10"></div>
                  <div className="relative bg-zinc-950 p-8 h-full border border-zinc-700 flex flex-col">
                    <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">💣</div>
                    <h3 className="text-2xl font-bold text-white mb-4 font-sans">Goofy Attitude</h3>
                    <p className="text-zinc-400 flex-grow leading-relaxed">
                      Serious engineering, not-so-serious vibes. Think <em>Team Fortress 2</em> energy. We take the fun seriously, not ourselves.
                    </p>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="group relative p-1 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 transform translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform border border-white/10"></div>
                  <div className="relative bg-zinc-950 p-8 h-full border border-zinc-700 flex flex-col">
                    <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🗣️</div>
                    <h3 className="text-2xl font-bold text-white mb-4 font-sans">Real Talk</h3>
                    <p className="text-zinc-400 flex-grow leading-relaxed">
                      We talk to players and employees as peers. No PR-scrubbed statements. Just honest conversation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* LATEST GAME FEATURE */}
          <section className="py-24 bg-zinc-900 border-t border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="md:w-1/2">
                  <div className="text-brand-green font-mono font-bold tracking-widest mb-4">CURRENT OBSESSION</div>
                  <h2 className="text-5xl md:text-6xl font-black text-white mb-6 font-sans">LEAP OF FAITH</h2>
                  <p className="text-xl text-zinc-400 mb-8 leading-relaxed font-sans">
                    It's not just a jump. It's a statement. Our debut title is live and it's testing friendships everywhere.
                  </p>
                  <div className="flex gap-4">
                    <a href="https://store.steampowered.com/app/3628800/Leap_Of_Faith/" target="_blank" className="btn-primary px-8 py-4 text-lg font-bold inline-flex items-center gap-2">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.979 0C5.666 0 .546 5.112.546 11.419c0 5.176 3.479 9.535 8.214 10.982l1.638-5.328-2.315-.815c-.657-.229-.86-.967-.442-1.492l5.773-7.238c.451-.564 1.348-.262 1.348.455v5.86l2.365.834c1.897.669 1.761 3.467-.189 3.965l-4.14 1.055 1.54 3.79c6.04-.693 10.73-5.833 10.73-12.072C25.071 5.112 19.208 0 11.979 0z"/></svg>
                      GET IT ON STEAM
                    </a>
                    <button onClick={() => switchPage('games')} className="text-white underline decoration-zinc-500 hover:decoration-white underline-offset-4 px-4 font-bold">
                      Learn More -&gt;
                    </button>
                  </div>
                </div>
                <div className="md:w-1/2 relative group cursor-pointer" onClick={() => switchPage('games')}>
                  <div className="aspect-video bg-zinc-800 border-4 border-zinc-700 relative overflow-hidden transform group-hover:-rotate-1 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h1 className="text-6xl font-black text-zinc-700 select-none group-hover:text-zinc-600 transition-colors font-sans">LEAP</h1>
                    </div>
                    <div className="absolute bottom-4 left-4 z-20 bg-brand-green text-black px-2 py-1 font-bold text-xs">NOW AVAILABLE</div>
                    <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-purple-500 rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* JOIN SECTION */}
          <section id="join" className="bg-purple-900 py-32 text-center relative overflow-hidden">
            <div className="relative max-w-4xl mx-auto px-4 z-10">
              <div className="inline-block bg-black text-white font-mono text-sm px-3 py-1 mb-6 rotate-2">- NOW RECRUITING REBELS -</div>
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-none drop-shadow-xl font-sans">
                TIRED OF FEELING <br/> LIKE A COG?
              </h2>
              <p className="text-2xl text-purple-200 mb-12 max-w-2xl mx-auto font-light font-sans">
                We're building a studio where the intent and style bleed into the product. Come build the game <span className="text-white font-bold underline decoration-green-400">YOU</span> want to play.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <button className="bg-white text-black font-black text-xl px-12 py-6 hover:bg-brand-green hover:scale-105 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">
                  VIEW OPEN ROLES
                </button>
                <button className="border-4 border-black bg-black text-white font-bold text-xl px-12 py-6 hover:bg-zinc-800 transition-colors">
                  TALK TO SILAS
                </button>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* PAGE: GAMES */}
      {activePage === 'games' && (
        <div className="pt-20 min-h-screen animate-in fade-in duration-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-6xl md:text-9xl font-black text-white mb-12 opacity-10 select-none absolute top-20 right-0 -z-10 font-sans">GAMES</h1>
            <div className="border-l-4 border-purple-500 pl-6 mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-4 font-sans">THE LIBRARY</h2>
              <p className="text-xl text-zinc-400 max-w-2xl font-sans">Quality over quantity. We don't ship shovelware. We ship bangers.</p>
            </div>

            {/* LEAP OF FAITH FEATURE */}
            <div className="bg-zinc-900 border border-zinc-800 overflow-hidden relative group">
              <div className="absolute top-0 right-0 bg-brand-green text-black font-bold px-6 py-2 z-20">AVAILABLE NOW</div>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Art Side */}
                <div className="bg-zinc-800 min-h-[400px] relative overflow-hidden flex items-center justify-center">
                  {/* Simulated Game Art */}
                  <div className="text-center z-10">
                    <h3 className="text-6xl font-black text-white mb-2 tracking-tighter font-sans" style={{textShadow: '4px 4px 0px #a855f7'}}>LEAP</h3>
                    <h3 className="text-4xl font-black text-white tracking-widest uppercase font-sans">OF FAITH</h3>
                  </div>
                </div>
                {/* Info Side */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-white mb-4 font-sans">Leap of Faith</h3>
                  <p className="text-zinc-400 mb-6 text-lg leading-relaxed font-sans">
                    A precision platformer that respects your time but disrespects your reflexes. Built with the core Whoopsy philosophy: tight loops, zero filler, and pure adrenaline. Will you make the jump, or will you just look down?
                  </p>
                  <div className="space-y-4 mb-8 font-sans">
                    <div className="flex items-center gap-3 text-zinc-300">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      <span>High-stakes platforming</span>
                    </div>
                    <div className="flex items-center gap-3 text-zinc-300">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      <span>No-BS progression system</span>
                    </div>
                    <div className="flex items-center gap-3 text-zinc-300">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      <span>Soundtrack that slaps</span>
                    </div>
                  </div>
                  <a href="https://store.steampowered.com/app/3628800/Leap_Of_Faith/" target="_blank" className="w-full bg-[#171a21] text-white hover:bg-[#2a475e] transition-colors p-4 flex items-center justify-center gap-3 font-bold text-lg border border-white/10 group-hover:border-purple-500/50">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.979 0C5.666 0 .546 5.112.546 11.419c0 5.176 3.479 9.535 8.214 10.982l1.638-5.328-2.315-.815c-.657-.229-.86-.967-.442-1.492l5.773-7.238c.451-.564 1.348-.262 1.348.455v5.86l2.365.834c1.897.669 1.761 3.467-.189 3.965l-4.14 1.055 1.54 3.79c6.04-.693 10.73-5.833 10.73-12.072C25.071 5.112 19.208 0 11.979 0z"/></svg>
                    PLAY ON STEAM
                  </a>
                </div>
              </div>
            </div>

            {/* Pipeline Teaser */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 opacity-50 font-sans">
              <div className="border-2 border-dashed border-zinc-700 p-12 text-center rounded-lg">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-2xl font-bold text-zinc-400 mb-2">PROJECT: CHAOS</h3>
                <p className="text-zinc-600">Status: In Development</p>
              </div>
              <div className="border-2 border-dashed border-zinc-700 p-12 text-center rounded-lg">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-2xl font-bold text-zinc-400 mb-2">PROJECT: UNTITLED</h3>
                <p className="text-zinc-600">Status: Prototyping</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-zinc-950 py-16 border-t border-zinc-800 relative z-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-8 md:mb-0">
            <span className="text-4xl font-black tracking-tighter text-zinc-700 block mb-2 font-sans">WHOOPSY.</span>
            <p className="text-zinc-500 text-sm font-mono">
              © 2026 Whoopsy Games.<br/>
              No rights reserved. Just kidding, don't steal our stuff.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="flex flex-col gap-2">
              <span className="text-zinc-400 font-bold uppercase tracking-wider text-xs font-sans">Socials</span>
              <a href="#" className="text-zinc-500 hover:text-purple-500 transition-colors">Twitter (X)</a>
              <a href="#" className="text-zinc-500 hover:text-purple-500 transition-colors">Discord</a>
              <a href="https://store.steampowered.com/app/3628800/Leap_Of_Faith/" target="_blank" className="text-zinc-500 hover:text-purple-500 transition-colors">Steam</a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-zinc-400 font-bold uppercase tracking-wider text-xs font-sans">Legal</span>
              <a href="#" className="text-zinc-500 hover:text-purple-500 transition-colors">Privacy Policy</a>
              <a href="#" className="text-zinc-500 hover:text-purple-500 transition-colors">Terms of Chaos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App