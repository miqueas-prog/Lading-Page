/* MH TECH — landing page interactions
   Vanilla JS, sin dependencias. Cuatro cosas:
   1. Menú mobile (nav-toggle)
   2. Scroll-spy (marca el link activo del nav)
   3. Panel de tickets "vivo" (rota estados/tickets)
   4. Copiar email al portapapeles
*/

document.addEventListener('DOMContentLoaded', () => {
  // Pequeño aviso visual en consola para confirmar que el JS está activo
  console.log("%c MH TECH %c JS activo y operando correctamente 🚀", "background: #33d6e0; color: #000; font-weight: bold; padding: 2px 6px; border-radius: 4px;", "color: #e9edf3;");

  // Animación sutil de entrada para notar el dinamismo del DOM
  const heroContent = document.querySelector('header, main > section:first-child');
  if (heroContent) {
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(10px)';
    heroContent.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    requestAnimationFrame(() => {
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
    });
  }

  initMobileNav();
  initScrollSpy();
  initTicketPanel();
  initCopyEmail();
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

  // Cierra el menú al tocar un link (evita que quede abierto al navegar)
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
    { rootMargin: '-40% 0px -50% 0px' } // dispara cuando la sección cruza el medio de la pantalla
  );

  sections.forEach((section) => observer.observe(section));
}

/* 3. Panel de tickets "vivo" ----------------------------------------- */
function initTicketPanel() {
  const list = document.getElementById('ticket-list');
  if (!list) return;

  // Reduced motion: dejamos el panel estático si el usuario prefiere reducir movimiento
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const queue = [
    { id: '4471', desc: 'VPN no conecta — cuenta Claro', status: 'open' },
    { id: '4472', desc: 'Login corporativo bloqueado — GM', status: 'progress' },
    { id: '4470', desc: 'Sync de base de datos técnicos', status: 'resolved' },
    { id: '4473', desc: 'Impresora de red sin respuesta', status: 'open' },
    { id: '4474', desc: 'Reset de accesos — nuevo ingreso', status: 'progress' },
    { id: '4468', desc: 'Backup de base de datos completado', status: 'resolved' },
  ];

  const labels = { open: 'Abierto', progress: 'En curso', resolved: 'Resuelto' };
  let cursor = 3; // ya mostramos los primeros 3 tickets en el HTML estático

  setInterval(() => {
    const rows = list.querySelectorAll('.ticket-row');
    const oldest = rows[0];
    if (!oldest) return;

    const next = queue[cursor % queue.length];
    cursor += 1;

    // Marca el ticket más viejo como saliente y lo reemplaza al terminar la transición
    oldest.classList.add('ticket-row-out');
    setTimeout(() => {
      oldest.dataset.id = next.id;
      oldest.querySelector('.ticket-id').textContent = `#${next.id}`;
      oldest.querySelector('.ticket-desc').textContent = next.desc;

      const statusEl = oldest.querySelector('.ticket-status');
      statusEl.className = `ticket-status status-${next.status}`;
      statusEl.textContent = labels[next.status];

      oldest.classList.remove('ticket-row-out');
      list.appendChild(oldest); // pasa al final de la cola visualmente
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
    if (!navigator.clipboard) return; // sin soporte, dejamos que abra el mailto normal

    event.preventDefault();
    navigator.clipboard.writeText(email).then(() => {
      button.textContent = 'Copiado ✓';
      setTimeout(() => {
        button.textContent = originalText;
      }, 1800);
    });
  });
}
