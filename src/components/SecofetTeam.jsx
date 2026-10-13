import { useRef } from 'react';
import '../styles/SecofetTeam.css';

// import AddisAlessa from '../assets/Team/Addis-Alessa.jpg';
// import NahomTadesse from '../assets/Team/Nahom-Tadesse.jpg';
import MekdesDemeke from '../assets/Team/Mekdes-Demeke.jpg';
import RedietMulugeta from '../assets/Team/Rediet-Mulugeta.jpg';
import TsehayeZelalem from '../assets/Team/Tsehaye-Zelalem.jpg';

// SVG Placeholder Helper
const createPlaceholder = (name) =>
  `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800"><rect width="100%" height="100%" fill="%23d1d5db"/><circle cx="300" cy="320" r="120" fill="%239ca3af"/><path d="M120 700 C 120 500, 480 500, 480 700 Z" fill="%239ca3af"/><text x="50%" y="750" font-family="sans-serif" font-size="28" font-weight="bold" fill="%234b5563" text-anchor="middle">${encodeURIComponent(name)}</text></svg>`;

const teamMembers = [
  {
    id: 1,
    name: 'Addis Alessa',
    role: 'Founder & General Manager',
    bio: '',
    image: createPlaceholder('Addis Alessa'),
    linkedin: 'https://www.linkedin.com/',
    email: 'addis.alessa@secofet.com',
  },

  {
    id: 2,
    name: 'Rediet Mulugeta',
    role: 'Export Manager',
    bio: '',
    image: RedietMulugeta,
    linkedin: 'https://www.linkedin.com/',
    email: 'rediet.mulugeta@secofet.com',
  },

  {
    id: 3,
    name: 'Mekdes Demeke',
    role: 'Finance Manager',
    bio: '',
    image: MekdesDemeke,
    linkedin: 'https://www.linkedin.com/',
    email: 'mekdes.demeke@secofet.com',
  },
  {
    id: 4,
    name: 'Nahom Tadesse',
    role: 'Sales & Marketing Manager',
    bio: '',
    image: createPlaceholder('Nahom Tadesse'),
    linkedin: 'https://www.linkedin.com/',
    email: 'nahom.tadesse@secofet.com',
  },

  {
    id: 5,
    name: 'Tsehaye Zelalem',
    role: 'Office Assistant',
    bio: '',
    image: TsehayeZelalem,
    linkedin: 'https://www.linkedin.com/',
    email: 'tsehaye.zelalem@secofet.com',
  },
];

const SecofetTeam = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;

      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="team-section">
      <div className="team-container">
        {/* Section Header */}
        <div className="team-header">
          <div className="header-left">
            <span className="badge-outline">Our Team</span>

            <h2 className="team-title">
              Meet the producers, partners, professionals,
              <br />
              and <span className="serif-text">Secofet team members</span> who
              contribute to
              <br />
              every coffee we bring to market.
            </h2>
          </div>

          {/* Slider Controls */}
          <div className="slider-controls">
            <button
              className="slider-btn"
              onClick={() => scroll('left')}
              aria-label="Previous Slide"
            >
              ◀
            </button>

            <button
              className="slider-btn active-blue"
              onClick={() => scroll('right')}
              aria-label="Next Slide"
            >
              ▶
            </button>
          </div>
        </div>

        {/* Horizontal Card Carousel */}
        <div className="team-carousel" ref={scrollContainerRef}>
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              {/* Photo State */}
              <div className="card-photo-state">
                <img
                  src={member.image}
                  alt={member.name}
                  className="member-img"
                />

                <div className="photo-overlay-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                </div>
              </div>

              {/* Hover State */}
              <div className="card-blue-hover-state">
                <div className="hover-content-top">
                  <h3 className="hover-name">{member.name}</h3>
                  <p className="hover-role">{member.role}</p>
                  <p className="hover-bio">{member.bio}</p>
                </div>

                {/* Social / Contact Links */}
                <div className="hover-socials">
                  {/* Gmail */}
                 
                  <a
                    href={`https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(member.email)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Email ${member.name}`}
                    title={`Email ${member.name}`}
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M20 4H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"
                      />
                    </svg>
                  </a>
                 
                  {/* LinkedIn */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.3zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM3.56 8.99h3.57v11.46H3.56V8.99z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecofetTeam;
