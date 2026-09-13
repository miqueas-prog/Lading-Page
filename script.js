/* MH TECH — landing page interactions
   Vanilla JS, sin dependencias.
   1. Menú mobile (nav-toggle)
   2. Scroll-spy (marca el link activo del nav)
   3. Panel de tickets "vivo" (rota estados/tickets)
   4. Copiar email al portapapeles
   5. Botón flotante de WhatsApp
*/

document.addEventListener('DOMContentLoaded', () => {
  console.log("%c MH TECH %c JS activo y operando correctamente 🚀", "background: #33d6e0; color: #000; font-weight: bold; padding: 2px 6px; border-radius: 4px;", "color: #e9edf3;");

  initMobileNav();
  initScrollSpy();
  initTicketPanel();
  initCopyEmail();
  initWhatsAppButton();
});

/* 1. Menú mobile ---------------------------------------------------- */
function initMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* 2. Scroll-spy ------------------------------------------------------ */
function initScrollSpy() {
  const links = document.querySelectorAll('.main-nav a[data-section]');
  if (!links.length) return;

  const sections = Array.from(links)
    .map((link) => document.getElementById(link.dataset.section))
    .filter(Boolean);

  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => link.classList.remove('active'));
        const activeLink = document.querySelector(
          `.main-nav a[data-section="${entry.target.id}"]`
        );
        if (activeLink) activeLink.classList.add('active');
      });
    },
    { rootMargin: '-40% 0px -50% 0px' }
  );

  sections.forEach((section) => observer.observe(section));
}

/* 3. Panel de tickets "vivo" ----------------------------------------- */
function initTicketPanel() {
  const list = document.getElementById('ticket-list');
  if (!list) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const queue = [
    { id: '4471', desc: 'VPN no conecta — cuenta Claro', status: 'open' },
    { id: '4472', desc: 'Login corporativo bloqueado — GM', status: 'progress' },
    { id: '4470', desc: 'Sync de base de datos técnicos', status: 'resolved' },
    { id: '4473', desc: 'Incidente de red y conectividad', status: 'open' },
    { id: '4474', desc: 'Monitoreo de APIs en Kibana', status: 'progress' },
    { id: '4468', desc: 'Automatización con Power Automate', status: 'resolved' },
  ];

  const labels = { open: 'Abierto', progress: 'En curso', resolved: 'Resuelto' };
  let cursor = 3;

  setInterval(() => {
    const rows = list.querySelectorAll('.ticket-row');
    const oldest = rows[0];
    if (!oldest) return;

    const next = queue[cursor % queue.length];
    cursor += 1;

    oldest.classList.add('ticket-row-out');
    setTimeout(() => {
      oldest.dataset.id = next.id;
      oldest.querySelector('.ticket-id').textContent = `#${next.id}`;
      oldest.querySelector('.ticket-desc').textContent = next.desc;

      const statusEl = oldest.querySelector('.ticket-status');
      statusEl.className = `ticket-status status-${next.status}`;
      statusEl.textContent = labels[next.status];

      oldest.classList.remove('ticket-row-out');
      list.appendChild(oldest);
    }, 300);
  }, 4000);
}

/* 4. Copiar email ------------------------------------------------------ */
function initCopyEmail() {
  const button = document.getElementById('copy-email');
  if (!button) return;

  const email = button.dataset.email;
  const originalText = button.textContent;

  button.addEventListener('click', (event) => {
    if (!navigator.clipboard) return;

    event.preventDefault();
    navigator.clipboard.writeText(email).then(() => {
      button.textContent = 'Copiado ✓';
      setTimeout(() => {
        button.textContent = originalText;
      }, 1800);
    });
  });
}

/* 5. Botón flotante de WhatsApp -------------------------------------- */
function initWhatsAppButton() {
  if (document.getElementById('whatsapp-float')) return;

  const btn = document.createElement('a');
  btn.id = 'whatsapp-float';
  
  const tuNumeroWhatsApp = '5493518587200';
  const mensajePredeterminado = 'Hola,%20vi%20la%20web%20de%20MH%20TECH%20y%20necesito%20soporte%20técnico.';
  
  btn.href = `https://wa.me/${tuNumeroWhatsApp}?text=${mensajePredeterminado}`;
  btn.target = '_blank';
  btn.rel = 'noopener noreferrer';
  btn.setAttribute('aria-label', 'Contactar por WhatsApp');
  
  btn.innerHTML = `
    <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
  `;
  
  btn.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    background-color: #25d366;
    color: #fff;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 14px rgba(0,0,0,0.4);
    z-index: 9999;
    transition: transform 0.3s ease, background-color 0.3s ease;
  `;

  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'scale(1.1)';
    btn.style.backgroundColor = '#20ba5a';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'scale(1)';
    btn.style.backgroundColor = '#25d366';
  });

  document.body.appendChild(btn);
}
