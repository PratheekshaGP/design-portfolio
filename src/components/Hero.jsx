import { useEffect, useState } from 'react'
import profilePhoto from '../assets/profile.jpeg'
const roles = ['Graphic Designer.', 'Poster Artist.', 'Visual Storyteller.', 'Canva Certified.']

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    let timeout
    const word = roles[index]
    if (typing) {
      if (displayed.length < word.length) {
        timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 70)
      } else {
        timeout = setTimeout(() => setTyping(false), 2000)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
      } else {
        setIndex((index + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, index])

  const sectionStyle = {
  minHeight: '100vh',
  backgroundColor: 'var(--bg)',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '6rem 2.5rem 0'
}
  const bigBlockStyle = {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '38%',
    height: '100%',
    backgroundColor: 'var(--surface)',
    zIndex: 0
  }

  const accentDotStyle = {
    position: 'absolute',
    bottom: '12%',
    left: '6%',
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    border: '2px solid var(--accent)',
    zIndex: 0,
    opacity: 0.4
  }

  const accentDot2Style = {
    position: 'absolute',
    top: '15%',
    right: '42%',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: 'var(--accent)',
    zIndex: 1,
    opacity: 0.5
  }

  const squareDecoStyle = {
    position: 'absolute',
    bottom: '20%',
    right: '36%',
    width: '28px',
    height: '28px',
    backgroundColor: 'var(--accent)',
    transform: 'rotate(15deg)',
    zIndex: 1,
    opacity: 0.6
  }

  const innerStyle = {
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2
  }

  const leftStyle = {
    paddingRight: '2rem'
  }

  const hiStyle = {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '1rem',
    letterSpacing: '0.3em',
    textTransform: 'uppercase',
    color: 'var(--accent)',
    marginBottom: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem'
  }

  const hiLineStyle = {
    width: '36px',
    height: '2px',
    backgroundColor: 'var(--accent)'
  }

 const nameRow1Style = {
  fontFamily: 'Bebas Neue, cursive',
  fontSize: 'clamp(2.8rem, 7vw, 6.5rem)',
  lineHeight: 0.95,
  color: 'var(--surface)',
  letterSpacing: '0.02em',
  whiteSpace: 'nowrap'
}
const nameRow2Style = {
  fontFamily: 'Bebas Neue, cursive',
  fontSize: 'clamp(2.8rem, 7vw, 6.5rem)',
  lineHeight: 0.95,
  letterSpacing: '0.02em',
  WebkitTextStroke: '2px var(--accent)',
  WebkitTextFillColor: 'transparent'
}
  const badgeStyle = {
    display: 'inline-block',
    backgroundColor: 'var(--accent)',
    color: 'var(--white)',
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.75rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    padding: '0.45rem 1.25rem',
    borderRadius: '4px',
    marginTop: '1.25rem',
    marginBottom: '1.5rem'
  }

  const typeRowStyle = {
    fontFamily: 'Cormorant Garamond, serif',
    fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
    fontStyle: 'italic',
    color: 'var(--muted)',
    marginBottom: '2rem',
    minHeight: '2rem'
  }

  const typedSpanStyle = {
    color: 'var(--surface)',
    fontWeight: 600
  }

  const cursorStyle = {
    color: 'var(--accent)',
    fontStyle: 'normal',
    marginLeft: '2px'
  }

  const btnRowStyle = {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  }

  const btnPrimaryStyle = {
    padding: '0.85rem 2.2rem',
    backgroundColor: 'var(--surface)',
    color: 'var(--bg)',
    fontSize: '0.75rem',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    borderRadius: '4px',
    fontFamily: 'DM Sans, sans-serif'
  }

  const btnOutlineStyle = {
    padding: '0.85rem 2.2rem',
    border: '2px solid var(--surface)',
    color: 'var(--surface)',
    fontSize: '0.75rem',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    borderRadius: '4px',
    fontFamily: 'DM Sans, sans-serif'
  }

  const rightStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  }

  const photoWrapStyle = {
    width: 'clamp(260px, 30vw, 360px)',
    height: 'clamp(300px, 36vw, 420px)',
    borderRadius: '60% 40% 55% 45% / 50% 55% 45% 50%',
    overflow: 'hidden',
    border: '3px solid var(--accent)',
    position: 'relative',
    zIndex: 2
  }

  const photoPlaceholderStyle = {
    width: '100%',
    height: '100%',
    backgroundColor: '#C8B4A8',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem'
  }

  const photoLabelStyle = {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.7rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: 'rgba(44,28,34,0.4)'
  }

  const ringDecoStyle = {
    position: 'absolute',
    top: '-20px',
    right: '-20px',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    border: '2px dashed var(--accent)',
    opacity: 0.5,
    zIndex: 1
  }

  const dotGridStyle = {
    position: 'absolute',
    bottom: '0',
    left: '-30px',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 8px)',
    gap: '8px',
    zIndex: 1
  }

  const dotArr = Array(25).fill(0)

  const statsRowStyle = {
  display: 'flex',
  gap: '1px',
  maxWidth: '480px',
  marginTop: '3rem',
  marginLeft: '2.5rem',
  position: 'relative',
  zIndex: 2
}

  const statBoxStyle = {
    flex: 1,
    backgroundColor: 'var(--surface)',
    padding: '0.9rem 1rem',
    textAlign: 'center'
  }

  const statValueStyle = {
    fontFamily: 'Bebas Neue, cursive',
    fontSize: '1.8rem',
    color: 'var(--accent)',
    display: 'block',
    lineHeight: 1
  }

  const statLabelStyle = {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.6rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'rgba(237,228,219,0.5)',
    display: 'block',
    marginTop: '0.2rem'
  }

  const stats = [
    { value: '3+', label: 'Months Intern' },
    { value: '1', label: 'Certification' },
    { value: '20+', label: 'Projects Done' }
  ]

  const photoImgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'top center'
}
const nameWrapStyle = {
  display: 'flex',
  alignItems: 'baseline',
  gap: '0.2em',
  flexWrap: 'wrap'
}
  return (
    <section id="hero" style={sectionStyle}>
      <div style={bigBlockStyle}></div>
      <div style={accentDotStyle}></div>
      <div style={accentDot2Style}></div>
      <div style={squareDecoStyle}></div>

      <div style={innerStyle}>
        <div style={leftStyle}>
          <p style={hiStyle}>
            <span style={hiLineStyle}></span>
            Hi There!
          </p>
         <div style={nameRow1Style}>
  Pratheeksha <span style={nameRow2Style}>G.</span>
</div>
          <span style={badgeStyle}>DESIGN & SOCIAL MEDIA • OPEN TO WORK</span>
          <p style={typeRowStyle}>
            I am <span style={typedSpanStyle}>{displayed}</span><span style={cursorStyle}>|</span>
          </p>
          <div style={btnRowStyle}>
            <a href="#work" style={btnPrimaryStyle}>View My Work</a>
            <a href="#contact" style={btnOutlineStyle}>Hire Me</a>
          </div>
        </div>

        <div style={rightStyle}>
          <div style={ringDecoStyle}></div>
          
            <div style={photoWrapStyle}>
  <img src={profilePhoto} alt="Pratheeksha G" style={photoImgStyle} />
</div>
          
          <div style={dotGridStyle}>
            {dotArr.map(function(_, i) {
              return (
                <div key={i} style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--accent)', opacity: 0.35 }}></div>
              )
            })}
          </div>
        </div>
      </div>

      <div style={statsRowStyle}>
        {stats.map(function(s) {
          return (
            <div key={s.label} style={statBoxStyle}>
              <span style={statValueStyle}>{s.value}</span>
              <span style={statLabelStyle}>{s.label}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
