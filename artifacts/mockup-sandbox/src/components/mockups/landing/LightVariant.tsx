export function LightVariant() {
  const canvases = [
    { ar: "لوحة التدفق", en: "Flow Canvas", icon: "◈", desc: "مخططات تدفق احترافية بالذكاء الاصطناعي" },
    { ar: "التصميم الداخلي", en: "Interior", icon: "⊡", desc: "مخططات المساقط والتصاميم المعمارية" },
    { ar: "العروض التقديمية", en: "PPT Canvas", icon: "▦", desc: "شرائح احترافية جاهزة للتصدير" },
    { ar: "الملصقات", en: "Poster", icon: "◉", desc: "ملصقات إبداعية بتوجيه فني متسق" },
    { ar: "المخططات البيانية", en: "Infographic", icon: "▣", desc: "بيانات تتحول إلى صور بصرية" },
    { ar: "المنتجات", en: "Product", icon: "◈", desc: "عروض المنتجات بأسلوب تجاري راقٍ" },
  ];

  return (
    <div
      dir="rtl"
      style={{
        fontFamily: "'Cairo', 'Tajawal', system-ui, sans-serif",
        minHeight: "100vh",
        background: "linear-gradient(160deg, #faf7ff 0%, #f3eeff 40%, #fbf5ff 100%)",
        color: "#1e1040",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .btn-primary:hover { background: linear-gradient(135deg, #6d28d9, #5b21b6) !important; box-shadow: 0 12px 32px rgba(109,40,217,0.35) !important; transform: translateY(-2px); }
        .canvas-card:hover { border-color: #a78bfa !important; box-shadow: 0 12px 40px rgba(109,40,217,0.12) !important; transform: translateY(-4px); }
        .nav-link:hover { color: #7c3aed !important; }
      `}</style>

      {/* Decorative blobs */}
      <div style={{ position:"absolute", top:"-80px", right:"-120px", width:"500px", height:"500px", background:"radial-gradient(circle, rgba(167,139,250,0.15) 0%, transparent 70%)", pointerEvents:"none", borderRadius:"50%" }} />
      <div style={{ position:"absolute", bottom:"10%", left:"-80px", width:"400px", height:"400px", background:"radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)", pointerEvents:"none", borderRadius:"50%" }} />

      {/* Dot pattern */}
      <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(circle, rgba(109,40,217,0.08) 1px, transparent 1px)", backgroundSize:"32px 32px", pointerEvents:"none" }} />

      {/* Header */}
      <header style={{ position:"sticky", top:0, zIndex:50, background:"rgba(250,247,255,0.88)", backdropFilter:"blur(20px)", borderBottom:"1px solid rgba(167,139,250,0.15)", padding:"0 56px" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"space-between", height:"70px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px" }}>
            <div style={{ width:"42px", height:"42px", background:"linear-gradient(135deg, #8b5cf6, #7c3aed)", borderRadius:"14px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"22px", color:"#fff", boxShadow:"0 6px 20px rgba(109,40,217,0.3)" }}>◈</div>
            <div>
              <div style={{ fontSize:"20px", fontWeight:900, color:"#4c1d95", letterSpacing:"-0.5px" }}>Mr.OSKAR</div>
              <div style={{ fontSize:"10px", color:"#a78bfa", fontWeight:600, letterSpacing:"1px", textTransform:"uppercase" }}>AI Canvas Platform</div>
            </div>
          </div>

          <nav style={{ display:"flex", gap:"36px", fontSize:"14px", fontWeight:600 }}>
            {["الرئيسية","اللوحات","الأسعار","الوثائق"].map(n=>(
              <span key={n} className="nav-link" style={{ color:"#6b21a8", cursor:"pointer", transition:"color 0.2s" }}>{n}</span>
            ))}
          </nav>

          <div style={{ display:"flex", gap:"12px", alignItems:"center" }}>
            <button style={{ padding:"9px 22px", borderRadius:"100px", border:"1.5px solid rgba(109,40,217,0.25)", background:"transparent", color:"#7c3aed", fontSize:"13px", fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>تسجيل الدخول</button>
            <button className="btn-primary" style={{ padding:"9px 24px", borderRadius:"100px", background:"linear-gradient(135deg, #7c3aed, #6d28d9)", color:"#fff", fontSize:"13px", fontWeight:700, cursor:"pointer", border:"none", fontFamily:"inherit", boxShadow:"0 6px 20px rgba(109,40,217,0.28)", transition:"all 0.3s" }}>ابدأ مجاناً</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section style={{ maxWidth:"1280px", margin:"0 auto", padding:"80px 56px 64px", display:"grid", gridTemplateColumns:"1.1fr 0.9fr", gap:"64px", alignItems:"center" }}>
        <div>
          <div style={{ display:"inline-flex", alignItems:"center", gap:"8px", background:"rgba(109,40,217,0.08)", border:"1px solid rgba(167,139,250,0.3)", borderRadius:"100px", padding:"6px 16px", marginBottom:"28px" }}>
            <span style={{ width:"7px", height:"7px", borderRadius:"50%", background:"linear-gradient(135deg,#8b5cf6,#7c3aed)", display:"inline-block" }} />
            <span style={{ fontSize:"12px", color:"#7c3aed", fontWeight:700, letterSpacing:"0.5px" }}>مدعوم بالذكاء الاصطناعي</span>
          </div>

          <h1 style={{ fontSize:"clamp(38px,4.5vw,60px)", fontWeight:900, lineHeight:1.12, color:"#1e1040", marginBottom:"20px" }}>
            منصة التصميم<br />
            <span style={{ background:"linear-gradient(135deg, #7c3aed, #a855f7, #8b5cf6)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>الذكي المتكامل</span>
          </h1>

          <p style={{ fontSize:"17px", color:"#6b7280", lineHeight:1.85, marginBottom:"36px", maxWidth:"460px", fontWeight:400 }}>
            ستة لوحات تصميمية بالذكاء الاصطناعي — التدفق والتصميم الداخلي والعروض والملصقات والمخططات والمنتجات، كل شيء في مكان واحد.
          </p>

          <div style={{ display:"flex", gap:"14px", flexWrap:"wrap", marginBottom:"48px" }}>
            <button className="btn-primary" style={{ padding:"14px 36px", borderRadius:"14px", background:"linear-gradient(135deg, #7c3aed, #6d28d9)", color:"#fff", fontSize:"16px", fontWeight:700, cursor:"pointer", border:"none", fontFamily:"inherit", boxShadow:"0 8px 28px rgba(109,40,217,0.32)", transition:"all 0.3s" }}>
              ابدأ التصميم ←
            </button>
            <button style={{ padding:"14px 28px", borderRadius:"14px", background:"white", border:"1.5px solid rgba(109,40,217,0.2)", color:"#7c3aed", fontSize:"16px", fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}>
              عرض توضيحي
            </button>
          </div>

          {/* Trust badges */}
          <div style={{ display:"flex", gap:"24px", flexWrap:"wrap" }}>
            {[["✦","ست لوحات ذكية"],["✦","تصدير بجميع الصيغ"],["✦","دعم العربية الكامل"]].map(([i,t])=>(
              <div key={t} style={{ display:"flex", alignItems:"center", gap:"6px", fontSize:"13px", color:"#7c3aed", fontWeight:600 }}>
                <span style={{ fontSize:"9px", color:"#a78bfa" }}>{i}</span>
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Feature card cluster */}
        <div style={{ position:"relative", height:"400px" }}>
          <div style={{ position:"absolute", top:"0", right:"0", width:"220px", padding:"20px", borderRadius:"20px", background:"white", boxShadow:"0 16px 48px rgba(109,40,217,0.12)", border:"1px solid rgba(167,139,250,0.2)" }}>
            <div style={{ fontSize:"24px", marginBottom:"10px" }}>◈</div>
            <div style={{ fontSize:"14px", fontWeight:700, color:"#4c1d95" }}>لوحة التدفق</div>
            <div style={{ fontSize:"12px", color:"#9ca3af", marginTop:"4px" }}>مخططات احترافية</div>
            <div style={{ marginTop:"12px", height:"4px", background:"linear-gradient(90deg,#8b5cf6,#a78bfa)", borderRadius:"2px", width:"70%" }} />
          </div>
          <div style={{ position:"absolute", top:"80px", left:"0", width:"200px", padding:"18px", borderRadius:"18px", background:"linear-gradient(135deg,#7c3aed,#5b21b6)", boxShadow:"0 16px 40px rgba(109,40,217,0.35)", color:"white" }}>
            <div style={{ fontSize:"20px", marginBottom:"8px" }}>▦</div>
            <div style={{ fontSize:"13px", fontWeight:700 }}>العروض التقديمية</div>
            <div style={{ fontSize:"11px", opacity:0.75, marginTop:"4px" }}>شرائح ذكية</div>
          </div>
          <div style={{ position:"absolute", bottom:"40px", right:"30px", width:"210px", padding:"18px", borderRadius:"18px", background:"white", boxShadow:"0 12px 36px rgba(109,40,217,0.1)", border:"1px solid rgba(167,139,250,0.2)" }}>
            <div style={{ fontSize:"20px", marginBottom:"8px" }}>◉</div>
            <div style={{ fontSize:"13px", fontWeight:700, color:"#4c1d95" }}>الملصقات</div>
            <div style={{ fontSize:"11px", color:"#9ca3af", marginTop:"4px" }}>تصاميم إبداعية</div>
            <div style={{ marginTop:"10px", display:"flex", gap:"4px" }}>
              {["#8b5cf6","#a78bfa","#c4b5fd"].map(c=><span key={c} style={{ width:"14px", height:"14px", borderRadius:"50%", background:c, display:"inline-block" }} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Canvas grid */}
      <section style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 56px 72px" }}>
        <div style={{ textAlign:"center", marginBottom:"48px" }}>
          <h2 style={{ fontSize:"32px", fontWeight:900, color:"#1e1040" }}>
            اللوحات <span style={{ background:"linear-gradient(135deg,#7c3aed,#a855f7)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>الست</span>
          </h2>
          <p style={{ fontSize:"15px", color:"#9ca3af", marginTop:"10px" }}>كل لوحة مُحسَّنة لنوع تصميم مختلف</p>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:"18px" }}>
          {canvases.map(c=>(
            <div key={c.en} className="canvas-card" style={{ padding:"24px 22px", borderRadius:"18px", background:"white", border:"1.5px solid rgba(167,139,250,0.15)", cursor:"pointer", transition:"all 0.3s", boxShadow:"0 4px 16px rgba(109,40,217,0.05)" }}>
              <div style={{ width:"44px", height:"44px", borderRadius:"12px", background:"linear-gradient(135deg,rgba(139,92,246,0.12),rgba(109,40,217,0.06))", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"20px", color:"#7c3aed", marginBottom:"14px" }}>{c.icon}</div>
              <div style={{ fontSize:"16px", fontWeight:700, color:"#1e1040", marginBottom:"6px" }}>{c.ar}</div>
              <div style={{ fontSize:"12px", color:"#9ca3af", lineHeight:1.6 }}>{c.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop:"1px solid rgba(167,139,250,0.15)", padding:"24px 56px", textAlign:"center" }}>
        <span style={{ fontSize:"13px", color:"#c4b5fd", fontWeight:500 }}>© 2026 Mr.OSKAR — رخصة AGPL-3.0</span>
      </footer>
    </div>
  );
}
