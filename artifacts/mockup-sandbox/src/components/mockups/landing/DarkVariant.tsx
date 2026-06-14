export function DarkVariant() {
  const canvases = [
    { name: "Flow Canvas", ar: "لوحة التدفق", icon: "◈", color: "#a78bfa" },
    { name: "Interior", ar: "التصميم الداخلي", icon: "⊡", color: "#c4b5fd" },
    { name: "PPT", ar: "العروض التقديمية", icon: "▦", color: "#818cf8" },
    { name: "Poster", ar: "الملصقات", icon: "◉", color: "#a78bfa" },
    { name: "Infographic", ar: "المخططات", icon: "▣", color: "#c4b5fd" },
    { name: "Product", ar: "المنتجات", icon: "◈", color: "#818cf8" },
  ];

  return (
    <div
      dir="rtl"
      style={{
        fontFamily: "'Cairo', 'Tajawal', system-ui, sans-serif",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f0720 0%, #1a0a3d 35%, #110d2e 65%, #07041a 100%)",
        color: "#f8f4ff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .glow-btn:hover { box-shadow: 0 0 36px rgba(167,139,250,0.55), 0 8px 32px rgba(109,40,217,0.4); transform: translateY(-2px); }
        .card-hover:hover { border-color: rgba(167,139,250,0.5); background: rgba(167,139,250,0.08); transform: translateY(-4px); }
        .nav-link:hover { color: #c4b5fd; }
      `}</style>

      {/* Ambient glows */}
      <div style={{ position:"absolute", top:"-200px", right:"-100px", width:"600px", height:"600px", background:"radial-gradient(circle, rgba(109,40,217,0.25) 0%, transparent 70%)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:"-100px", left:"-50px", width:"500px", height:"500px", background:"radial-gradient(circle, rgba(76,29,149,0.2) 0%, transparent 70%)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", top:"40%", left:"50%", width:"800px", height:"400px", background:"radial-gradient(ellipse, rgba(99,43,189,0.12) 0%, transparent 70%)", transform:"translate(-50%,-50%)", pointerEvents:"none" }} />

      {/* Grid overlay */}
      <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(167,139,250,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.04) 1px, transparent 1px)", backgroundSize:"64px 64px", pointerEvents:"none" }} />

      {/* Header */}
      <header style={{ position:"sticky", top:0, zIndex:50, borderBottom:"1px solid rgba(167,139,250,0.12)", backdropFilter:"blur(20px)", background:"rgba(10,4,28,0.72)", padding:"0 48px" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"space-between", height:"68px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px" }}>
            <div style={{ width:"40px", height:"40px", background:"linear-gradient(135deg, #7c3aed, #5b21b6)", borderRadius:"12px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"20px", boxShadow:"0 4px 16px rgba(109,40,217,0.45)" }}>◈</div>
            <span style={{ fontSize:"22px", fontWeight:900, background:"linear-gradient(135deg, #e9d5ff, #c4b5fd)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Mr.OSKAR</span>
          </div>
          <nav style={{ display:"flex", gap:"32px", fontSize:"14px", fontWeight:600 }}>
            {["الرئيسية","التدفق","التصميم","العروض","الملصقات"].map(n=>(
              <span key={n} className="nav-link" style={{ color:"rgba(196,181,253,0.7)", cursor:"pointer", transition:"color 0.2s" }}>{n}</span>
            ))}
          </nav>
          <div style={{ display:"flex", gap:"10px", alignItems:"center" }}>
            <button style={{ padding:"8px 20px", borderRadius:"100px", border:"1px solid rgba(167,139,250,0.3)", background:"transparent", color:"#c4b5fd", fontSize:"13px", fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}>تسجيل الدخول</button>
            <button className="glow-btn" style={{ padding:"8px 22px", borderRadius:"100px", background:"linear-gradient(135deg, #7c3aed, #5b21b6)", color:"#fff", fontSize:"13px", fontWeight:700, cursor:"pointer", border:"none", fontFamily:"inherit", transition:"all 0.3s" }}>ابدأ مجاناً</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section style={{ maxWidth:"1280px", margin:"0 auto", padding:"100px 48px 80px", textAlign:"center" }}>
        <div style={{ display:"inline-flex", alignItems:"center", gap:"8px", background:"rgba(109,40,217,0.18)", border:"1px solid rgba(167,139,250,0.25)", borderRadius:"100px", padding:"6px 18px", marginBottom:"32px", fontSize:"13px", color:"#c4b5fd", fontWeight:600 }}>
          <span style={{ width:"6px", height:"6px", borderRadius:"50%", background:"#a78bfa", display:"inline-block" }} />
          منصة الذكاء الاصطناعي المتعددة اللوحات
        </div>

        <h1 style={{ fontSize:"clamp(42px, 6vw, 80px)", fontWeight:900, lineHeight:1.08, marginBottom:"24px" }}>
          <span style={{ background:"linear-gradient(135deg, #f3e8ff, #e9d5ff, #c4b5fd)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", display:"block" }}>صمّم بذكاء</span>
          <span style={{ background:"linear-gradient(135deg, #a78bfa, #7c3aed, #5b21b6)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", display:"block" }}>أبدع بلا حدود</span>
        </h1>

        <p style={{ fontSize:"18px", color:"rgba(196,181,253,0.75)", maxWidth:"600px", margin:"0 auto 48px", lineHeight:1.8, fontWeight:400 }}>
          Mr.OSKAR يدعم ست لوحات تصميمية ذكية — من مخططات التدفق إلى العروض التقديمية، كل ما تحتاجه في مكان واحد.
        </p>

        <div style={{ display:"flex", gap:"16px", justifyContent:"center", flexWrap:"wrap" }}>
          <button className="glow-btn" style={{ padding:"16px 40px", borderRadius:"16px", background:"linear-gradient(135deg, #7c3aed, #5b21b6)", color:"#fff", fontSize:"17px", fontWeight:700, cursor:"pointer", border:"none", fontFamily:"inherit", transition:"all 0.3s", boxShadow:"0 8px 32px rgba(109,40,217,0.4)" }}>
            ابدأ التصميم الآن ←
          </button>
          <button style={{ padding:"16px 36px", borderRadius:"16px", background:"rgba(167,139,250,0.08)", border:"1px solid rgba(167,139,250,0.25)", color:"#e9d5ff", fontSize:"17px", fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}>
            شاهد العرض التوضيحي
          </button>
        </div>

        {/* Stats */}
        <div style={{ display:"flex", justifyContent:"center", gap:"64px", marginTop:"72px", paddingTop:"40px", borderTop:"1px solid rgba(167,139,250,0.1)" }}>
          {[["٦","لوحات تصميمية"],["٣×","أسرع في الإنشاء"],["∞","إمكانيات إبداعية"]].map(([n,l])=>(
            <div key={n} style={{ textAlign:"center" }}>
              <div style={{ fontSize:"36px", fontWeight:900, background:"linear-gradient(135deg, #c4b5fd, #a78bfa)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>{n}</div>
              <div style={{ fontSize:"13px", color:"rgba(196,181,253,0.6)", marginTop:"4px", fontWeight:500 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Canvas Cards */}
      <section style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 48px 80px" }}>
        <h2 style={{ textAlign:"center", fontSize:"28px", fontWeight:800, color:"#e9d5ff", marginBottom:"48px" }}>
          اكتشف <span style={{ color:"#a78bfa" }}>اللوحات الست</span>
        </h2>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:"20px" }}>
          {canvases.map(c=>(
            <div key={c.name} className="card-hover" style={{ padding:"28px 24px", borderRadius:"20px", background:"rgba(109,40,217,0.06)", border:"1px solid rgba(167,139,250,0.14)", cursor:"pointer", transition:"all 0.3s" }}>
              <div style={{ fontSize:"28px", marginBottom:"14px", color:c.color }}>{c.icon}</div>
              <div style={{ fontSize:"17px", fontWeight:700, color:"#e9d5ff", marginBottom:"6px" }}>{c.ar}</div>
              <div style={{ fontSize:"13px", color:"rgba(167,139,250,0.6)", fontWeight:400 }}>{c.name}</div>
              <div style={{ marginTop:"16px", height:"3px", width:"32px", background:`linear-gradient(90deg, ${c.color}, transparent)`, borderRadius:"2px" }} />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop:"1px solid rgba(167,139,250,0.1)", padding:"24px 48px", textAlign:"center" }}>
        <span style={{ fontSize:"13px", color:"rgba(167,139,250,0.4)", fontWeight:500 }}>© 2026 Mr.OSKAR — الرخصة: AGPL-3.0</span>
      </footer>
    </div>
  );
}
