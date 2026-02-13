function App() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-brand-zinc text-zinc-200 font-mono overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-zinc/95 backdrop-blur border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div 
            className="text-2xl font-black tracking-tighter text-white cursor-pointer"
            onClick={() => window.scrollTo(0, 0)}
          >
            WHOOPSY<span className="text-brand-green">.</span>
          </div>
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollTo('games')} className="hover:text-brand-green transition-colors font-bold">GAMES</button>
            <button onClick={() => scrollTo('about')} className="hover:text-brand-green transition-colors font-bold">ABOUT</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        {/* Animated blobs */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-brand-purple/30 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-brand-green/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block px-4 py-2 border border-brand-green/50 rounded-full bg-brand-green/10 text-brand-green text-sm font-bold tracking-widest mb-8">
            WARNING: 0% CORPORATE BS
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white leading-tight mb-8">
            GAMES THAT <br/>
            <span className="text-brand-green glitch-text" data-text="ROCK.">ROCK.</span>
          </h1>
          
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            We build dev-driven games. Zero politics. Tight loops. Pure chaos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollTo('games')}
              className="btn-primary text-lg"
            >
              SEE OUR GAMES
            </button>
            <button 
              onClick={() => scrollTo('about')}
              className="btn-secondary text-lg"
            >
              WHO WE ARE
            </button>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-32 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-16 text-center">
            THE LIBRARY
          </h2>
          
          {/* Leap of Faith */}
          <div className="bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-700">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-video md:aspect-auto flex items-center justify-center bg-gradient-to-br from-purple-900/50 to-zinc-900 p-12">
                <div className="text-center">
                  <h3 className="text-5xl font-black text-white mb-2 tracking-tighter" style={{textShadow: '4px 4px 0 #A855F7'}}>LEAP</h3>
                  <h4 className="text-3xl font-black text-brand-green tracking-widest">OF FAITH</h4>
                </div>
              </div>
              
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-block bg-brand-green text-black px-3 py-1 text-sm font-bold mb-4">
                  AVAILABLE NOW
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Leap of Faith</h3>
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  A precision platformer that respects your time but disrespects your reflexes. 
                  Built with the core Whoopsy philosophy: tight loops, zero filler, pure adrenaline.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-3 text-zinc-300">
                    <span className="w-2 h-2 bg-brand-green rounded-full"></span>
                    High-stakes platforming
                  </li>
                  <li className="flex items-center gap-3 text-zinc-300">
                    <span className="w-2 h-2 bg-brand-green rounded-full"></span>
                    No-BS progression system
                  </li>
                  <li className="flex items-center gap-3 text-zinc-300">
                    <span className="w-2 h-2 bg-brand-green rounded-full"></span>
                    Soundtrack that slaps
                  </li>
                </ul>
                <a 
                  href="https://store.steampowered.com/app/3628800/Leap_Of_Faith/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#171a21] text-white px-6 py-4 rounded-lg font-bold hover:bg-[#2a475e] transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.979 0C5.666 0 .546 5.112.546 11.419c0 5.176 3.479 9.535 8.214 10.982l1.638-5.328-2.315-.815c-.657-.229-.86-.967-.442-1.492l5.773-7.238c.451-.564 1.348-.262 1.348.455v5.86l2.365.834c1.897.669 1.761 3.467-.189 3.965l-4.14 1.055 1.54 3.79c6.04-.693 10.73-5.833 10.73-12.072C25.071 5.112 19.208 0 11.979 0z"/>
                  </svg>
                  GET IT ON STEAM
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
            WE FIX THE <span className="text-brand-purple">EMPLOYEE</span> PROBLEM.
          </h2>
          <p className="text-xl text-zinc-400 leading-relaxed mb-12">
            Most studios are broken machines. You build what the suits want, not what you want. 
            Endless meetings about "synergy." Burnout.
          </p>
          <p className="text-2xl text-brand-green font-bold mb-8">
            Whoopsy is the glitch in that system.
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="p-4 border border-zinc-700 bg-zinc-900">
              <div className="text-3xl font-black text-white">FUN</div>
              <div className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Non-Negotiable</div>
            </div>
            <div className="p-4 border border-zinc-700 bg-zinc-900">
              <div className="text-3xl font-black text-white">REAL</div>
              <div className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Non-Negotiable</div>
            </div>
            <div className="p-4 border border-zinc-700 bg-zinc-900 col-span-3 md:col-span-1">
              <div className="text-3xl font-black text-brand-purple">BLUNT</div>
              <div className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Absolutely</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 py-16 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <div className="text-4xl font-black tracking-tighter text-zinc-700 mb-2">WHOOPSY.</div>
              <p className="text-zinc-500 text-sm">
                © 2026 Whoopsy Games.<br/>
                No rights reserved. Just kidding, don't steal our stuff.
              </p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-zinc-500 hover:text-brand-green transition-colors">Twitter</a>
              <a href="#" className="text-zinc-500 hover:text-brand-green transition-colors">Discord</a>
              <a href="https://store.steampowered.com/app/3628800/Leap_Of_Faith/" target="_blank" className="text-zinc-500 hover:text-brand-green transition-colors">Steam</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App