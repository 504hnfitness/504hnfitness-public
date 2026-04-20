/* ============================================================
   504HNFITNESS — Lógica página pública (base.js)
   ============================================================ */

/* Número de WhatsApp del gimnasio */
const WA_NUMBER = '50432939314';
const WA_BASE   = `https://wa.me/${WA_NUMBER}`;

/* ============================================================
   DATOS DE CONTENIDO
   ============================================================ */

const STATS = [
  ['🌿', 'Ambiente Sano'],
  ['5',  'Años en Tegucigalpa'],
  ['⏰', 'Horarios Adecuados'],
  ['💪', 'Compromiso y Entrega'],
];

const SERVICIOS = [
  { num:'01', icon:'🏋️', title:'Zona de pesas',   desc:'Zona de Pesas y equipo para entrenar cada músculo de tu cuerpo.' },
  { num:'02', icon:'🚴', title:'Cardio',            desc:'Derecho a clase de cardio de 8pm-9pm de LUN-VIER, Bicicleta Estacionaria, Elíptica y Caminadora.' },
  { num:'03', icon:'🥋', title:'Taekwon-do ITF',    desc:'Personal Certificado Taekwondo ITF, entrenas con campeones, defensa personal.' },
  { num:'04', icon:'🚿', title:'Sanitario',        desc:'Sanitario privado, espacio limpio para tus entrenamientos.' },
];

const HORARIOS = [
  { d:'Lun', h:'5:00am – 7:30am\ny 5:00pm – 9:00pm' },
  { d:'Mar', h:'5:00am – 7:30am\ny 5:00pm – 9:00pm' },
  { d:'Mié', h:'5:00am – 7:30am\ny 5:00pm – 9:00pm' },
  { d:'Jue', h:'5:00am – 7:30am\ny 5:00pm – 9:00pm' },
  { d:'Vie', h:'5:00am – 7:30am\ny 5:00pm – 9:00pm' },
  { d:'Sáb', h:'CERRADO', closed: true },
  { d:'Dom', h:'CERRADO', closed: true },
];

const PLANES = [
  {
    tag:'Básico',      name:'Diario',     price:'L. 100',   per:'por día',
    features:['Acceso completo 1 día','Sin contrato','Ideal para visitantes'],
    featured: false,
  },
  {
    tag:'Popular',     name:'Mensual',    price:'L. 500',   per:'por mes',
    features:['Acceso ilimitado 30 días','L.200 Inscripción única anual','Entrenamiento personalizado','Evaluación periódica'],
    featured: true,
  },
  {
    tag:'Ahorro',      name:'Quincenal', price:'L. 300', per:'15 días',
    features:['Acceso ilimitado 15 días','Ahorra vs diario','Evaluación periódica'],
    featured: false,
  },
  {
    tag:'Mejor valor', name:'Anual',      price:'L. 5,500', per:'12 meses',
    features:['Acceso ilimitado 365 días','Congelamiento 1x/año','Entrenamiento personalizado','Evaluación mensual'],
    featured: false,
  },
];

const MAPS_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.6!2d-87.1828328!3d14.0183605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6fbdf9de4c426d%3A0xeada07de1d6c3c74!2s504hnfitness!5e0!3m2!1ses!2sus!4v1681000000000';

/* ============================================================
   COMPONENTES
   ============================================================ */

/* --- Navbar --- */
const Navbar = () => (
  <nav className="nav">
    <div className="nav-logo">
      <div className="nav-logo-icon">⚡</div>
      504HNFITNESS
    </div>
    <div className="nav-links">
      <a
        href={`${WA_BASE}?text=Hola, quiero información sobre 504HNfitness`}
        target="_blank"
        rel="noreferrer"
        className="nav-wa-btn"
      >
        💬 WhatsApp
      </a>
    </div>
  </nav>
);

/* --- Hero --- */
const Hero = () => (
  <section className="hero">
    <div className="hero-bg"></div>
    <div className="hero-lines"></div>

    <div className="hero-content fade-up">
      <div className="hero-eyebrow">Tegucigalpa, Honduras</div>
      <h1 className="hero-title">
        FORJA TU
        <em>MEJOR VERSIÓN</em>
      </h1>
      <p className="hero-sub">
        Zona de Entrenamiento, alcanza tu mejor versión, con una salud integral
      </p>
      <div className="hero-cta-group">
        <a
          href={`${WA_BASE}?text=Hola, quiero inscribirme en 504HNfitness`}
          target="_blank"
          rel="noreferrer"
          className="btn-primary"
          style={{ textDecoration: 'none' }}
        >
          Inscríbete ahora
        </a>
        <button
          className="btn-outline"
          onClick={() => document.getElementById('planes')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Ver planes
        </button>
      </div>
    </div>

    <div className="hero-badge">
      <div className="hero-badge-inner">
        <strong>504</strong>
        <span>HNFITNESS</span>
      </div>
    </div>

    <div className="hero-stat-strip">
      {STATS.map(([n, l]) => (
        <div className="hero-stat" key={l}>
          <span className="hero-stat-num">{n}</span>
          <span className="hero-stat-label">{l}</span>
        </div>
      ))}
    </div>
  </section>
);

/* --- Servicios --- */
const Servicios = () => (
  <section className="section">
    <div className="section-label">Instalaciones</div>
    <h2 className="section-title">LO QUE <em>TENEMOS</em></h2>
    <div className="services-grid">
      {SERVICIOS.map(s => (
        <div className="service-card" key={s.num} data-num={s.num}>
          <div className="service-icon">{s.icon}</div>
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

/* --- Horarios --- */
const Horarios = () => (
  <section className="schedule-section">
    <div style={{ maxWidth: 900, margin: '0 auto' }}>
      <div className="section-label">Horarios de apertura</div>
      <h2 className="section-title" style={{ marginBottom: 32 }}>ABIERTO <em>PARA TI</em></h2>
      <div className="schedule-grid">
        {HORARIOS.map(({ d, h, closed }) => (
          <div className="schedule-day" key={d}>
            <div className="schedule-day-name">{d}</div>
            <div className={`schedule-day-hours${closed ? ' closed' : ''}`}>{h}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* --- Planes --- */
const Planes = () => (
  <section className="planes-section" id="planes">
    <div className="section-label">Membresías</div>
    <h2 className="section-title">ELIGE TU <em>PLAN</em></h2>
    <div className="planes-grid">
      {PLANES.map(p => (
        <div key={p.name} className={`plan-card${p.featured ? ' featured' : ''}`}>
          {p.featured && <div className="plan-popular">Más popular</div>}
          <div className="plan-tag">{p.tag}</div>
          <div className="plan-name">{p.name}</div>
          <div className="plan-price">{p.price}</div>
          <div className="plan-currency">{p.per} · Lempiras</div>
          <ul className="plan-features">
            {p.features.map(f => <li key={f}>{f}</li>)}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

/* --- Ubicación --- */
const Ubicacion = () => (
  <section className="location-section">
    <div>
      <div className="section-label">Encuéntranos</div>
      <h2 className="section-title" style={{ marginBottom: 16 }}>ESTAMOS <em>AQUÍ</em></h2>
      <div className="location-address">Residencial Enmanuel</div>
      <p className="location-meta">
        Calle principal, una cuadra al sur del portón principal,<br />
        estacionamientos disponibles frente al Gimnasio.
      </p>
      <a
        href={`${WA_BASE}?text=Hola, quiero información sobre 504HNfitness`}
        target="_blank"
        rel="noreferrer"
        className="wa-btn"
      >
        <span>💬</span> Escríbenos por WhatsApp
      </a>
    </div>
    <div className="location-map">
      <iframe
        src={MAPS_EMBED}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación 504HNfitness"
      ></iframe>
    </div>
  </section>
);

/* --- Footer --- */
const Footer = () => (
  <footer>
    <div className="footer-logo">504HNFITNESS</div>
    <div className="footer-copy">© 2025 504HNfitness · Tegucigalpa, Honduras</div>
  </footer>
);

/* ============================================================
   APP ROOT
   ============================================================ */
const App = () => (
  <div>
    <Navbar />
    <Hero />
    <Servicios />
    <Horarios />
    <Planes />
    <Ubicacion />
    <Footer />
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
