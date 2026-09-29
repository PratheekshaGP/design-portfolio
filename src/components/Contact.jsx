export default function Contact() {
  const socials = [
    { name: 'GitHub', url: 'https://github.com/PratheekshaGP/', icon: '⌥' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/pratheeksha-g', icon: '◈' },
    { name: 'Instagram', url: 'https://www.instagram.com/pratheeksha_gangadharan?stkn=Y2E1N2tiZW4zYng3', icon: '◎' }
  ]

  const sectionStyle = {
    padding: '6rem 2.5rem',
    backgroundColor: 'var(--surface)',
    position: 'relative',
    overflow: 'hidden'
  }

  const bigTextBgStyle = {
    position: 'absolute',
    bottom: '-2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    fontFamily: 'Bebas Neue, cursive',
    fontSize: 'clamp(5rem, 15vw, 14rem)',
    color: 'rgba(237,228,219,0.04)',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    letterSpacing: '0.05em',
    zIndex: 0
  }

  const accentBlockStyle = {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '200px',
    height: '200px',
    backgroundColor: 'var(--accent)',
    opacity: 0.12,
    borderRadius: '0 0 0 60%'
  }

  const accentBlockStyle2 = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '140px',
    height: '140px',
    backgroundColor: 'var(--accent)',
    opacity: 0.08,
    borderRadius: '0 60% 0 0'
  }

  const innerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
    position: 'relative',
    zIndex: 1
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
    justifyContent: 'center',
    gap: '0.75rem'
  }

  const labelLineStyle = {
    width: '28px',
    height: '2px',
    backgroundColor: 'var(--accent)',
    display: 'inline-block'
  }

  const bigTitleStyle = {
    fontFamily: 'Bebas Neue, cursive',
    fontSize: 'clamp(3rem, 9vw, 8rem)',
    lineHeight: 0.9,
    letterSpacing: '0.02em',
    marginBottom: '1.5rem'
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

  const paraStyle = {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.95rem',
    color: 'rgba(237,228,219,0.55)',
    lineHeight: 1.8,
    marginBottom: '2.5rem',
    maxWidth: '500px',
    margin: '0 auto 2.5rem'
  }

  const btnStyle = {
    display: 'inline-block',
    padding: '1rem 3rem',
    backgroundColor: 'var(--accent)',
    color: 'var(--white)',
    fontSize: '0.8rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    borderRadius: '4px',
    marginBottom: '3rem',
    fontFamily: 'DM Sans, sans-serif'
  }

  const socialsRowStyle = {
    display: 'flex',
    gap: '0.75rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '4rem'
  }

  const socialBoxStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.6rem 1.25rem',
    border: '1px solid rgba(237,228,219,0.12)',
    borderRadius: '4px',
    textDecoration: 'none',
    color: 'rgba(237,228,219,0.5)',
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.72rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    transition: 'all 0.2s'
  }

  const dividerStyle = {
    width: '1px',
    height: '40px',
    backgroundColor: 'rgba(166,99,79,0.3)',
    margin: '0 auto 1.5rem'
  }

  const footerStyle = {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.7rem',
    color: 'rgba(237,228,219,0.2)',
    letterSpacing: '0.12em',
    textTransform: 'uppercase'
  }

  return (
    <section id="contact" style={sectionStyle}>
      <div style={bigTextBgStyle}>CONTACT</div>
      <div style={accentBlockStyle}></div>
      <div style={accentBlockStyle2}></div>

      <div style={innerStyle}>
        <p style={sectionLabelStyle}>
          <span style={labelLineStyle}></span>
          Contact
          <span style={labelLineStyle}></span>
        </p>

        <div style={bigTitleStyle}>
          <span style={titleWhiteStyle}>LET'S CREATE</span>
          <span style={titleAccentStyle}>TOGETHER</span>
        </div>

        <p style={paraStyle}>
          Open to design collaborations, freelance projects, and internship opportunities. I would love to hear from you.
        </p>

        <div>
          <a href="mailto:pratheekshag555@gmail.com?subject=Hello Pratheeksha — Design Portfolio Enquiry" style={btnStyle}>
            Send a Message
          </a>
        </div>

        <div style={socialsRowStyle}>
          {socials.map(function(s) {
            return (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer" style={socialBoxStyle}>
                <span>{s.icon}</span>
                <span>{s.name}</span>
              </a>
            )
          })}
        </div>

        <div style={dividerStyle}></div>
        <p style={footerStyle}>Pratheeksha G — 2025 · Designed with passion</p>
      </div>
    </section>
  )
}
