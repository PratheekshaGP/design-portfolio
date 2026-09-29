import aboutPhoto from '../assets/about.jpeg'
export default function About() {
  const tools = ['Canva', 'Poster Design', 'Social Media Design', 'Typography', 'Color Theory', 'UI/UX Concepts', 'Visual Storytelling']

  const stats = [
    { value: '3+', label: 'Months Internship', icon: '🎓' },
    { value: '20+', label: 'Projects Done', icon: '🎨' },
    { value: '1', label: 'Certification', icon: '✦' },
    { value: '∞', label: 'Will to Create', icon: '🚀' }
  ]

  const sectionStyle = {
    padding: '6rem 2.5rem',
    backgroundColor: 'var(--bg)',
    position: 'relative',
    overflow: 'hidden'
  }

  const darkBlockStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '42%',
    height: '100%',
    backgroundColor: 'var(--surface)',
    zIndex: 0
  }

  const innerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1.3fr',
    gap: '4rem',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1
  }

  const leftStyle = {
    color: 'var(--bg)'
  }

  const sectionLabelStyle = {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.68rem',
    letterSpacing: '0.3em',
    textTransform: 'uppercase',
    color: 'var(--accent)',
    marginBottom: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem'
  }

  const labelLineStyle = {
    width: '28px',
    height: '2px',
    backgroundColor: 'var(--accent)',
    display: 'inline-block'
  }

  const bigTitleStyle = {
    fontFamily: 'Bebas Neue, cursive',
    fontSize: 'clamp(2.5rem, 7vw, 6rem)',
    lineHeight: 0.9,
    letterSpacing: '0.02em',
    marginBottom: '2rem'
  }

  const titleWhiteStyle = {
    color: 'var(--bg)',
    display: 'block'
  }

  const titleAccentStyle = {
    WebkitTextStroke: '2px var(--accent)',
    WebkitTextFillColor: 'transparent',
    display: 'block'
  }

  const photoPlaceholderStyle = {
    width: '100%',
    aspectRatio: '3/4',
    backgroundColor: '#C2A898',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    border: '2px solid rgba(166,99,79,0.3)',
    marginBottom: '1.5rem'
  }

  const photoLabelStyle = {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.65rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: 'rgba(44,28,34,0.4)'
  }

  const contactBoxStyle = {
    backgroundColor: 'rgba(166,99,79,0.15)',
    border: '1px solid rgba(166,99,79,0.3)',
    borderRadius: '6px',
    padding: '1rem 1.25rem'
  }

  const contactTitleStyle = {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.65rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: 'var(--accent)',
    marginBottom: '0.5rem'
  }

  const contactLinkStyle = {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.85rem',
    color: 'var(--bg)',
    textDecoration: 'none'
  }

  const rightStyle = {}

  const quoteStyle = {
    fontFamily: 'Cormorant Garamond, serif',
    fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)',
    fontStyle: 'italic',
    color: 'var(--surface)',
    lineHeight: 1.7,
    borderLeft: '3px solid var(--accent)',
    paddingLeft: '1.25rem',
    marginBottom: '1.75rem'
  }

  const paraStyle = {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.9rem',
    color: 'var(--muted)',
    lineHeight: 1.85,
    marginBottom: '1rem'
  }

  const statsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1px',
    marginBottom: '2rem',
    backgroundColor: 'rgba(44,28,34,0.08)',
    borderRadius: '6px',
    overflow: 'hidden'
  }

  const statBoxStyle = {
    backgroundColor: 'var(--white)',
    padding: '1.1rem 0.75rem',
    textAlign: 'center'
  }

  const statIconStyle = {
    fontSize: '1.2rem',
    display: 'block',
    marginBottom: '0.3rem'
  }

  const statValueStyle = {
    fontFamily: 'Bebas Neue, cursive',
    fontSize: '2rem',
    color: 'var(--accent)',
    display: 'block',
    lineHeight: 1
  }

  const statLabelStyle = {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.6rem',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'var(--muted)',
    display: 'block',
    marginTop: '0.2rem'
  }

  const toolsTitleStyle = {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.65rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: 'var(--accent)',
    marginBottom: '0.75rem'
  }

  const tagsRowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.45rem'
  }

  const tagStyle = {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.72rem',
    padding: '0.35rem 0.9rem',
    border: '1px solid rgba(44,28,34,0.15)',
    color: 'var(--muted)',
    borderRadius: '4px',
    letterSpacing: '0.04em'
  }

  const photoImgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'top',
  borderRadius: '8px'
}

  return (
    <section id="about" style={sectionStyle}>
      <div style={darkBlockStyle}></div>

      <div style={innerStyle}>
        <div style={leftStyle}>
          <p style={sectionLabelStyle}>
            <span style={labelLineStyle}></span>
            About Me
          </p>
          <div style={bigTitleStyle}>
            <span style={titleWhiteStyle}>THE</span>
            <span style={titleAccentStyle}>DESIGNER</span>
          </div>

         <div style={photoPlaceholderStyle}>
  <img src={aboutPhoto} alt="Pratheeksha G" style={photoImgStyle} />
</div>

          <div style={contactBoxStyle}>
            <p style={contactTitleStyle}>Get In Touch</p>
            <a href="mailto:pratheekshag555@gmail.com" style={contactLinkStyle}>pratheekshag555@gmail.com</a>
          </div>
        </div>

        <div style={rightStyle}>
          <p style={quoteStyle}>
            "Design is how I make sense of the world — one visual at a time."
          </p>
          <p style={paraStyle}>
I'm a Computer Science Engineering student who enjoys exploring the creative side of technology. I've worked on social media creatives, posters and visual content through internships, projects and personal practice.
I enjoy learning by creating, experimenting with different visual styles and finding simple ways to communicate ideas through design.          </p>
          <p style={paraStyle}>
I'm currently exploring opportunities where I can continue developing my skills in design, social media and digital marketing.          </p>

          <div style={statsGridStyle}>
            {stats.map(function(s) {
              return (
                <div key={s.label} style={statBoxStyle}>
                  <span style={statIconStyle}>{s.icon}</span>
                  <span style={statValueStyle}>{s.value}</span>
                  <span style={statLabelStyle}>{s.label}</span>
                </div>
              )
            })}
          </div>

          <p style={toolsTitleStyle}>Tools and Skills</p>
          <div style={tagsRowStyle}>
            {tools.map(function(tool) {
              return <span key={tool} style={tagStyle}>{tool}</span>
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
