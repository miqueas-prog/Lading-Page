/* ===== Tokens ===== */
:root{
  --bg: #0a0e14;
  --surface: #10151d;
  --surface-2: #161c26;
  --line: #232b38;
  --text: #e9edf3;
  --text-muted: #8b93a3;
  --cyan: #33d6e0;
  --violet: #8a6bff;
  --red: #ff6b6b;
  --green: #3ddc97;
  --yellow: #f5c451;

  --font-display: 'Space Grotesk', 'Inter', sans-serif;
  --font-body: 'Inter', -apple-system, sans-serif;

  --radius: 10px;
  --wrap: 1120px;
}

*{ box-sizing: border-box; }

html{ scroll-behavior: smooth; }

body{
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3{
  font-family: var(--font-display);
  font-weight: 600;
  line-height: 1.15;
  margin: 0 0 .5em;
  letter-spacing: -0.01em;
}

p{ margin: 0 0 1em; color: var(--text-muted); max-width: 60ch; }

a{ color: inherit; text-decoration: none; }

.wrap{
  max-width: var(--wrap);
  margin: 0 auto;
  padding: 0 24px;
}

/* ===== Buttons ===== */
.btn{
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 22px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  border: 1px solid transparent;
  transition: transform .15s ease, background .15s ease, border-color .15s ease;
}
.btn-primary{
  background: var(--cyan);
  color: #06181a;
}
.btn-primary:hover{ transform: translateY(-1px); background: #4fe0e9; }

.btn-ghost{
  border-color: var(--line);
  color: var(--text);
}
.btn-ghost:hover{ border-color: var(--cyan); }

.btn-text{
  color: var(--text-muted);
  padding: 12px 4px;
}
.btn-text:hover{ color: var(--text); }

/* ===== Header ===== */
.site-header{
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(10,14,20,0.85);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--line);
}
.header-inner{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 18px;
  padding-bottom: 18px;
}
.logo{
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.15rem;
}
.logo span{ color: var(--cyan); }

.main-nav{
  display: flex;
  gap: 28px;
}
.main-nav a{
  color: var(--text-muted);
  font-size: 0.95rem;
}
.main-nav a:hover{ color: var(--text); }

.nav-cta{ padding: 9px 18px; font-size: 0.9rem; }

.main-nav a.active{ color: var(--cyan); }

.nav-toggle{
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 34px;
  height: 34px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
.nav-toggle span{
  display: block;
  height: 2px;
  width: 100%;
  background: var(--text);
  transition: transform .2s ease, opacity .2s ease;
}
.nav-toggle[aria-expanded="true"] span:nth-child(1){ transform: translateY(7px) rotate(45deg); }
.nav-toggle[aria-expanded="true"] span:nth-child(2){ opacity: 0; }
.nav-toggle[aria-expanded="true"] span:nth-child(3){ transform: translateY(-7px) rotate(-45deg); }

@media (max-width: 720px){
  .nav-toggle{ display: flex; }
  .nav-cta{ display: none; }

  .main-nav{
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    background: var(--bg);
    border-bottom: 1px solid var(--line);
    max-height: 0;
    overflow: hidden;
    transition: max-height .25s ease;
  }
  .main-nav.is-open{ max-height: 260px; }
  .main-nav a{
    padding: 16px 24px;
    border-top: 1px solid var(--line);
  }
}

/* ===== Hero ===== */
.hero{
  padding: 90px 0 100px;
}
.hero-inner{
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 56px;
  align-items: center;
}
.kicker{
  color: var(--violet);
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.95rem;
  margin-bottom: 18px;
}
.hero h1{
  font-size: clamp(2.1rem, 4vw, 3.1rem);
  margin-bottom: 20px;
}
.hero-sub{ max-width: 46ch; }
.hero-actions{
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 28px;
  flex-wrap: wrap;
}

@media (max-width: 860px){
  .hero-inner{ grid-template-columns: 1fr; }
}

/* ---- Ticket panel visual ---- */
.ticket-panel{
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 0 0 16px;
  box-shadow: 0 30px 60px -30px rgba(0,0,0,0.6);
  overflow: hidden;
}
.ticket-panel-head{
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 16px;
  border-bottom: 1px solid var(--line);
}
.dot{ width: 9px; height: 9px; border-radius: 50%; }
.dot-red{ background: var(--red); }
.dot-yellow{ background: var(--yellow); }
.dot-green{ background: var(--green); }
.ticket-panel-title{
  margin-left: 8px;
  font-family: 'Space Grotesk', monospace;
  font-size: 0.8rem;
  color: var(--text-muted);
}

.ticket-row{
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px;
  align-items: center;
  padding: 14px 16px;
  border-bottom: 1px solid var(--line);
  font-size: 0.9rem;
  opacity: 1;
  transition: opacity .3s ease;
}
.ticket-row-out{ opacity: 0; }
.ticket-row:last-of-type{ border-bottom: none; }
.ticket-id{ color: var(--text-muted); font-size: 0.82rem; }
.ticket-desc{ color: var(--text); }
.ticket-status{
  font-size: 0.78rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 999px;
  white-space: nowrap;
}
.status-open{ background: rgba(255,107,107,0.15); color: var(--red); }
.status-progress{ background: rgba(245,196,81,0.15); color: var(--yellow); }
.status-resolved{ background: rgba(61,220,151,0.15); color: var(--green); }

.ticket-row-active .status-progress{
  animation: pulse-status 2.4s ease-in-out 1;
}
@keyframes pulse-status{
  0%{ opacity: 0.4; }
  30%{ opacity: 1; }
  100%{ opacity: 1; }
}

.ticket-foot{
  padding: 14px 16px 0;
  font-size: 0.8rem;
  color: var(--text-muted);
}

@media (prefers-reduced-motion: reduce){
  .ticket-row-active .status-progress{ animation: none; }
}

/* ===== Services ===== */
.services{ padding: 90px 0; border-top: 1px solid var(--line); }
.services h2, .process h2, .stack h2{
  font-size: clamp(1.6rem, 2.6vw, 2.1rem);
  margin-bottom: 44px;
  max-width: 22ch;
}

.service-list{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  border-top: 1px solid var(--line);
}
.service{
  padding: 32px 28px;
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  border-left: 3px solid transparent;
}
.service:last-child{ border-right: none; }
.service.accent-cyan{ border-left-color: var(--cyan); }
.service.accent-violet{ border-left-color: var(--violet); }
.service h3{ font-size: 1.05rem; margin-bottom: 12px; }
.service p{ font-size: 0.94rem; }

@media (max-width: 860px){
  .service-list{ grid-template-columns: 1fr; }
  .service{ border-right: none; }
}

/* ===== Process ===== */
.process{ padding: 90px 0; border-top: 1px solid var(--line); }
.process-steps{
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 36px;
}
.process-steps li{
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 20px;
}
.step-n{
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--violet);
  border: 1px solid var(--line);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.process-steps h3{ font-size: 1rem; margin-bottom: 6px; }
.process-steps p{ font-size: 0.94rem; }

/* ===== Stack ===== */
.stack{ padding: 80px 0 100px; border-top: 1px solid var(--line); }
.stack-list{
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}
.stack-list li{
  border: 1px solid var(--line);
  background: var(--surface);
  color: var(--text-muted);
  font-size: 0.88rem;
  padding: 9px 16px;
  border-radius: 999px;
}

/* ===== Footer ===== */
.site-footer{
  border-top: 1px solid var(--line);
  padding: 70px 0 28px;
}
.footer-inner{
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 32px;
  padding-bottom: 40px;
}
.footer-lead{
  font-family: var(--font-display);
  font-size: 1.3rem;
  color: var(--text);
  max-width: 20ch;
  margin-bottom: 20px;
}
.footer-links{
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}
.footer-links a{ color: var(--text-muted); font-size: 0.92rem; }
.footer-links a:hover{ color: var(--cyan); }

.footer-copy{
  text-align: center;
  color: var(--text-muted);
  font-size: 0.82rem;
  margin: 0;
}

/* ===== Focus visibility ===== */
a:focus-visible, .btn:focus-visible{
  outline: 2px solid var(--cyan);
  outline-offset: 3px;
}
