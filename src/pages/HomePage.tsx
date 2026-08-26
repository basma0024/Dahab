import React, { useEffect, useRef, useState } from 'react';
import { Heart, Calendar, MapPin, Clock } from 'lucide-react';
import { gsap } from 'gsap';
import CountdownTimer from '../components/CountdownTimer';
import { motion } from 'framer-motion';
import weddingKidsImg from '../../public/imgs/children-removebg-preview.png';
import bgImage from '../../public/imgs/countdown.png';
import ringsIconImg from '../../public/imgs/rings-icon.png';
import glassIconImg from '../../public/imgs/glass-icon.png';
import bucketIconImg from '../../public/imgs/bucket-icon.png';
import handsHenna from '../../public/imgs/Nikah.jpg';
import ringHand from '../../public/imgs/download (1).jpg';
import heartsDecor from '../../public/imgs/back.png';
import locationImg from '../../public/imgs/WhatsApp Image 2026-08-21 at 1.11.50 AM.jpeg';
import logoImg from '../../public/imgs/aa.png'; 
import finalBgImage from '../../public/imgs/final.png'; 


interface ProgramItem {
  time: string;
  title: string;
  desc: string;
}

interface Colors {
  bgLight: string;
  primary: string;
  primaryDark: string;
  accent: string;
  textMuted: string;
  borderSoft: string;
}
const eyebrowFont = "'Jost', sans-serif";

const bodyFont = "'Cormorant Garamond', serif";

const programItems: ProgramItem[] = [
  { 
    time: '8:30 PM', 
    title: 'Guest Reception', 
    desc: 'We warmly welcome you to the beginning of a blessed evening as we celebrate this sacred union.' 
  },
  { 
    time: '9:30 PM', 
    title: 'Celebration & Hospitality', 
    desc: 'Join us in celebrating our joy with sweets, warm wishes, and heartfelt prayers.' 
  },
  { 
    time: '10:00 PM', 
    title: 'Memorable Photos', 
    desc: 'Capturing beautiful moments together to cherish as lasting memories with you.' 
  },
];


const Reveal: React.FC<{ children: React.ReactNode; delay?: number; style?: React.CSSProperties }> = ({
  children,
  delay = 0,
  style = {},
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } }),
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(26px)',
        transition: `opacity 1s ease ${delay}s, transform 1s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

const StationeryCard: React.FC<{
  bg?: string;
  maxWidth?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ bg, maxWidth = 420, children, style }) => (
  <div
    style={{
      position: 'relative',
      width: '100%',
      maxWidth: `${maxWidth}px`,
      margin: '0 auto',
      aspectRatio: '675 / 1350',
      // borderRadius: '18px',
      overflow: 'hidden',
      boxShadow: '0 18px 45px rgba(44,33,26,0.16)',
      ...(bg && {
        backgroundImage: `url(${bg})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }),
      ...style,
    }}
  >
    {children}
  </div>
);

const HomePage: React.FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  // References لـ GSAP Animations
  const heroCardRef = useRef<HTMLDivElement>(null);
  const goldFrameRef = useRef<HTMLImageElement>(null);
  const flowerRef = useRef<HTMLImageElement>(null);
  const glitterDustRef = useRef<HTMLImageElement>(null);
  const glitterClusterRef = useRef<HTMLImageElement>(null);
  const textRevealRefs = useRef<(HTMLDivElement | null)[]>([]);

  const addToTextRefs = (el: HTMLDivElement | null) => {
    if (el && !textRevealRefs.current.includes(el)) {
      textRevealRefs.current.push(el);
    }
  };

  useEffect(() => {
    if (!isOpened) return;

    // تنظيف المراجع وتجهيز للعناصر
    const validTextRefs = textRevealRefs.current.filter((item) => item !== null);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.fromTo(
        goldFrameRef.current,
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 1.2, delay: 0.5 }
      )
        .fromTo(
          glitterDustRef.current,
          { opacity: 0 },
          { opacity: 0.6, duration: 1 },
          '-=0.8'
        )
        .fromTo(
          glitterClusterRef.current,
          { opacity: 0, scale: 0.5 },
          { opacity: 0.85, scale: 1, duration: 1 },
          '-=0.8'
        )
        .fromTo(
          flowerRef.current,
          { opacity: 0, scale: 0.6, rotation: 12 },
          { opacity: 1, scale: 1, rotation: 0, duration: 1.2, ease: 'back.out(1.2)' },
          '-=0.8'
        )
        .fromTo(
          validTextRefs,
          { opacity: 0, y: 25, filter: 'blur(6px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.9,
            stagger: 0.25,
          },
          '-=0.6'
        );
    }, heroCardRef);

    return () => ctx.revert();
  }, [isOpened]);

  const weddingDate: string = '2026-09-01T18:00:00';

  const colors: Colors = {
    bgLight: '#FAF6EF',
    primary: '#3B2F26',
    primaryDark: '#1E1612',
    accent: '#B8945F',
    textMuted: '#8C7A66',
    borderSoft: 'rgba(59, 47, 38, 0.12)',
  
    

  };

  return (
    <div
      className="relative"
      style={{
        fontFamily: "'Caveat', cursive",
        background: colors.bgLight,
        color: colors.primary,
        direction: 'rtl',
        overflowX: 'hidden',
      }}
    >
      {/* ── Google Font Caveat Import ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap');
        
        * {
          font-family: 'Caveat', cursive !important;
        }
      `}</style>

      {/* ── Curtain Overlay ── */}
     <motion.div
  initial={{ opacity: 1 }}
  animate={{ opacity: isOpened ? 0 : 1, pointerEvents: isOpened ? 'none' : 'auto' }}
  transition={{ duration: 0.8, delay: 0.8 }}
  style={{
    position: 'fixed',
    inset: 0,
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Overlay خلفية شفافة ناعمة
  }}
>
  {/* Left Door */}
  <motion.div
    animate={{ x: isOpened ? '-100%' : '0%' }}
    transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '50%',
      height: '100%',
      backgroundColor: '#FAF7F2',
      borderRight: '1px solid rgba(122, 15, 29, 0.2)',
      boxShadow: '10px 0 30px rgba(122, 15, 29, 0.15)',
      zIndex: 1,
      opacity: 0.96, // شفافة قليلاً لمظهر أرقّ
    }}
  />

  {/* Right Door */}
  <motion.div
    animate={{ x: isOpened ? '100%' : '0%' }}
    transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
    style={{
      position: 'absolute',
      top: 0,
      right: 0,
      width: '50%',
      height: '100%',
      backgroundColor: '#FAF7F2',
      borderLeft: '1px solid rgba(122, 15, 29, 0.2)',
      boxShadow: '-10px 0 30px rgba(122, 15, 29, 0.15)',
      zIndex: 1,
      opacity: 0.96, // شفافة قليلاً لمظهر أرقّ
    }}
  />

  {/* Center Button / Logo */}
  <motion.div
    animate={{ scale: isOpened ? 0 : 1, opacity: isOpened ? 0 : 1 }}
    transition={{ duration: 0.4 }}
    onClick={() => setIsOpened(true)}
    style={{
      position: 'relative',
      zIndex: 2,
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '14px',
    }}
  >
    <div
      style={{
        width: '130px',
        height: '130px',
        borderRadius: '50%', // Rounded corners للوجو
        backgroundColor: '#FFFFFF',
        boxShadow: '0 12px 35px rgba(122, 15, 29, 0.25)',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.3s ease',
        border: '1px solid rgba(122, 15, 29, 0.15)',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <img
        src={logoImg}
        alt="M & A Logo"
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%', // Continuous curve داخلية
          objectFit: 'cover',
        }}
      />
    </div>

    <span
      style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '20px',
        letterSpacing: '2px',
        color: '#7A0F1D', // اللون البرجاندي
        fontWeight: 700,
        textTransform: 'uppercase',
      }}
    >
      Tap to Open
    </span>
  </motion.div>
</motion.div>

      {/* ── Hero Section ── */}
    <section
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: colors.bgLight,
    position: 'relative',
    // padding: '40px 0',
  }}
>
  <StationeryCard
    style={{
      backgroundColor: colors.bgLight,
      aspectRatio: 'auto',
      minHeight: '620px',
      paddingBottom: '50px',
    }}
  >
    {/* Childhood sweethearts text */}
    <motion.p
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
      style={{
        textAlign: 'center',
        fontSize: '2.9rem',
        fontWeight: 600,
        color: '#4a4a4a',
        marginBottom: '20px',
        zIndex: 2,
        position: 'relative',
        paddingTop: '80px',
        lineHeight: 1.2,
      }}
    >
      From childhood sweethearts <br /> to forever
    </motion.p>

    {/* Kids photo */}
    <motion.img
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
      src={weddingKidsImg}
      alt="We're Getting Married"
      style={{
        display: 'block',
        width: '85%',
        maxWidth: '360px',
        margin: '0 auto',
        zIndex: 2,
        position: 'relative',
      }}
    />

    {/* Speech bubbles */}
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '14px',
        marginTop: '30px',
        padding: '0 8%',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
        style={{
          // background: '#F3EEE6',
          // borderRadius: '24px',
          padding: '12px 28px',
          // boxShadow: '0 4px 14px rgba(59,47,38,0.08)',
        }}
      >
        <span
          style={{
            fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif",
            fontSize: '28px',
            fontWeight: 700,
            color: colors.primary,
          }}
        >
         ? Did you find out 
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
        style={{
          // background: '#F3EEE6',
          // borderRadius: '24px',
          padding: '16px 26px',
          // boxShadow: '0 4px 14px rgba(59,47,38,0.08)',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '25px',
            fontWeight: 500,
            color: colors.textMuted,
            margin: 0,
            lineHeight: 1.8,
          }}
        >
          yes, it's us <br />
         Time flew by and these two sweet kids are getting married soon
        </p>
      </motion.div>
    </div>
  </StationeryCard>
</section>


      {/* ── SECOND SECTION ── */}
<section style={{ background: colors.bgLight, position: 'relative' }}>
  <StationeryCard
    style={{
      backgroundColor: '#7A0F1D',
      position: 'relative',
      overflow: 'hidden',
      padding: 0,
    }}
  >
    {/* Decorative hearts scattered overlay */}
    <img
      src={heartsDecor}
      alt=""
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        opacity: 0.9,
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />

    {/* Top polaroid photo, tilted right, aligned right side */}
    <motion.div
      initial={{ opacity: 0, rotate: 2, y: -20 }}
      whileInView={{ opacity: 1, rotate: -6, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      style={{
        position: 'absolute',
        top: '6%',
        left: '8%',
        width: '68%',
        background: '#F5F0E6',
        padding: '10px 10px 22px',
        // boxShadow: '0 14px 28px rgba(0,0,0,0.35)',
        zIndex: 2,
      }}
    >
      <img
        src={handsHenna}
        alt="Ahmed & Malak"
        style={{
          width: '100%',
          height: '210px',
          objectFit: 'cover',
          display: 'block',
        }}
      />
    </motion.div>

    {/* Center text "Ahmed + Malak =" with heart */}
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
      style={{
        position: 'absolute',
        top: '46%',
        left: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        zIndex: 3,
      }}
    >
      <Heart style={{ width: '26px', height: '26px', color: '#F5EFE4' }} />
      <span
        style={{
          fontFamily: "'Great Vibes', cursive",
          fontSize: '32px',
          color: '#F5EFE4',
        }}
      >
         =Amr + Aya 
      </span>
    </motion.div>

    {/* Bottom polaroid photo, tilted left, aligned left side */}
    <motion.div
      initial={{ opacity: 0, rotate: -2, y: 20 }}
      whileInView={{ opacity: 1, rotate: 5, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
      style={{
        position: 'absolute',
        bottom: '6%',
        left: '24%',
        width: '68%',
        background: '#F5F0E6',
        padding: '10px 10px 22px',
        boxShadow: '0 14px 28px rgba(0,0,0,0.35)',
        zIndex: 2,
      }}
    >
      <img
        src={ringHand}
        alt="Ahmed & Malak"
        style={{
          width: '100%',
          height: '210px',
          objectFit: 'cover',
          display: 'block',
        }}
      />
    </motion.div>
  </StationeryCard>
</section>





      {/* ── THIRD SECTION: Save The Date & Countdown ── */}



            <section style={{ padding: '110px 1.5rem', textAlign: 'center', background: '#FAF7F2' }}>
  <Reveal>
    <p style={{ fontFamily: bodyFont, fontSize: '1.8rem', lineHeight: 1.9, color: '#7A0F1D', maxWidth: '560px', margin: '0 auto 50px' }}>
      So we invite you to share with us this joyful day when we become a family
    </p>

    <div style={{
      maxWidth: '350px',
      margin: '0 auto',
      backgroundColor: '#7A0F1D',
      padding: '28px 20px 40px',
      borderRadius: '4px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
      transform: 'rotate(-2deg)',
      position: 'relative',
      clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), 96.4% 100%, 92.8% calc(100% - 12px), 89.2% 100%, 85.6% calc(100% - 12px), 82% 100%, 78.4% calc(100% - 12px), 74.8% 100%, 71.2% calc(100% - 12px), 67.6% 100%, 64% calc(100% - 12px), 60.4% 100%, 56.8% calc(100% - 12px), 53.2% 100%, 49.6% calc(100% - 12px), 46% 100%, 42.4% calc(100% - 12px), 38.8% 100%, 35.2% calc(100% - 12px), 31.6% 100%, 28% calc(100% - 12px), 24.4% 100%, 20.8% calc(100% - 12px), 17.2% 100%, 13.6% calc(100% - 12px), 10% 100%, 6.4% calc(100% - 12px), 2.8% 100%, 0 calc(100% - 12px))'
    }}>

      <p style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '1.8rem',
        color: '#FAF7F2',
        marginBottom: '24px',
        letterSpacing: '0.03em',
        direction: 'ltr'
      }}>
        September 2026
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gap: '5px',
        marginBottom: '14px',
        direction: 'ltr'
      }}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} style={{
            fontFamily: eyebrowFont || 'sans-serif',
            fontSize: '1.2rem',
            color: '#FAF7F2',
            fontWeight: '600',
            opacity: 0.85
          }}>
            {day}
          </div>
        ))}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gap: '8px',
        direction: 'ltr'
      }}>
        {/* September 1, 2026 falls on a Tuesday → 2 empty cells (Sun, Mon) */}
        {[...Array(2)].map((_, i) => <div key={'empty-' + i} />)}

        {/* September has 30 days */}
        {[...Array(30)].map((_, i) => {
          const dayNumber = i + 1;
          const isTargetDay = dayNumber === 1;

          return (
            <div key={dayNumber} style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '36px'
            }}>
              {isTargetDay && (
                <Heart
                  style={{
                    position: 'absolute',
                    width: '32px',
                    height: '32px',
                    color: '#FAF7F2',
                    fill: '#FAF7F2',
                    zIndex: 0,
                  }}
                />
              )}

              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '0.9rem',
                color: isTargetDay ? '#7A0F1D' : '#FAF7F2',
                zIndex: 1,
                fontWeight: isTargetDay ? '700' : '400',
                opacity: isTargetDay ? 1 : 0.75,
                marginTop: isTargetDay ? '-3px' : 0,
              }}>
                {dayNumber}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </Reveal>
</section>

{/* Fourth Section Count Down */}
     {/* ── SAVE THE DATE & COUNTDOWN SECTION ── */}
<section
  dir="ltr"
  style={{
    position: 'relative',
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '90px 1.5rem',
    textAlign: 'center',
    overflow: 'hidden',
    minHeight: '550px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  {/* Dark Overlay for contrast */}
  <div
    style={{
      position: 'absolute',
      inset: 0,
      backgroundColor: 'rgba(50, 8, 15, 0.45)',
      zIndex: 1,
    }}
  />

  <div style={{ position: 'relative', zIndex: 2, maxWidth: '600px', width: '100%' }}>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
        marginBottom: '35px',
      }}
    >
      {/* Title */}
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(34px, 5vw, 48px)',
          fontWeight: 600,
          color: '#FAF7F2',
          margin: 0,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          textShadow: '0 2px 10px rgba(0,0,0,0.3)',
        }}
      >
        Save The Date
      </h2>

      {/* Date & Time Row */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '24px',
          color: '#FAF7F2',
          fontSize: '18px',
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 500,
          letterSpacing: '1px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Calendar style={{ width: '20px', height: '20px', color: '#FAF7F2' }} />
          <span>SEP 01 . 2026</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Clock style={{ width: '20px', height: '20px', color: '#FAF7F2' }} />
          <span>09:00 PM</span>
        </div>
      </div>

      {/* Location */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: '#FAF7F2',
          fontSize: '19px',
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontWeight: 600,
        }}
      >
        <MapPin style={{ width: '20px', height: '20px', color: '#FAF7F2' }} />
        <span>Sandy Hall</span>
      </div>
    </div>

    {/* Countdown Timer Component */}
    <div style={{ marginTop: '15px' }}>
      <CountdownTimer targetDate={weddingDate} />
    </div>
  </div>
</section>


 {/* ── FIFTH SECTION: Location Details ── */}
    <section
  style={{
    background: colors.bgLight,
    display: 'flex',
    justifyContent: 'center',
  }}
>
  <StationeryCard
    style={{
      backgroundColor: '#7A0F1D',
      padding: '60px 24px 30px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* Decorative scattered hearts */}
    {[10, 30, 55, 75, 90].map((left, i) => (
      <Heart
        key={i}
        style={{
          position: 'absolute',
          left: `${left}%`,
          top: `${8 + (i % 3) * 6}%`,
          width: i % 2 === 0 ? '16px' : '12px',
          height: i % 2 === 0 ? '16px' : '12px',
          color: '#FAF7F2',
          opacity: 0.25,
          zIndex: 0,
        }}
      />
    ))}

    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'space-between',
        height: '100%',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '34px',
            fontWeight: 700,
            color: '#FAF7F2',
            letterSpacing: '2px',
            marginBottom: '30px',
          }}
        >
          Location & Venue
        </h2>

        <div
          style={{
            width: '60px',
            height: '1px',
            background: 'rgba(250,247,242,0.5)',
            margin: '30px auto',
          }}
        />

        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '22px',
            fontWeight: 600,
            letterSpacing: '1px',
            textTransform: 'uppercase',
            color: '#FAF7F2',
            margin: '0 0 4px',
          }}
        >
          Sandy Hall
        </p>
        <p
          style={{
            fontSize: '18px',
            fontWeight: 600,
            color: 'rgba(250,247,242,0.8)',
            margin: '10px 0 14px',
            lineHeight: 1.5,
          }}
        >
          We can't wait to celebrate our special day with you at Sandy Hall.
        </p>
      </div>

      <div
        style={{
          width: '80%',
          border: '6px solid #FAF7F2',
          overflow: 'hidden',
          boxShadow: '0 14px 30px rgba(0,0,0,0.3)',
          transform: 'rotate(-3deg)',
          margin: '15px 0',
        }}
      >
        <img
          src={locationImg}
          alt="Venue Location"
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            filter: 'grayscale(15%)',
            display: 'block',
          }}
        />
      </div>

      <a
        href="https://maps.google.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: 'transparent',
          color: '#FAF7F2',
          padding: '10px 36px',
          border: '1px solid #FAF7F2',
          borderRadius: '30px',
          textDecoration: 'none',
          fontSize: '13px',
          fontWeight: 700,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          marginTop: '30px',
        }}
      >
        <MapPin style={{ width: '16px', height: '16px' }} />
        View Map
      </a>
    </div>
  </StationeryCard>
</section>
  






      {/* ── sixth SECTION: Event Program ── */}
        <section 
          dir="ltr"
          style={{
            background: colors.bgLight,
            display: 'flex',
            justifyContent: 'center',
            // padding: '40px 0',
          }}
        >
          <StationeryCard
            style={{
              backgroundColor: '#FAF7F2',
              padding: '70px 30px 60px',
              maxWidth: '480px',
              width: '100%',
              minHeight: '750px',
              aspectRatio: 'unset',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Decorative Background Hearts */}
            {[12, 85, 20, 78].map((left, i) => (
              <Heart
                key={i}
                style={{
                  position: 'absolute',
                  left: `${left}%`,
                  top: `${10 + i * 22}%`,
                  width: '14px',
                  height: '14px',
                  color: '#7A0F1D',
                  opacity: 0.12,
                  zIndex: 0,
                }}
              />
            ))}

            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '60px', position: 'relative', zIndex: 1 }}>
              <h2
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: '52px',
                  fontWeight: 400,
                  color: '#7A0F1D',
                  margin: '0 0 8px',
                  letterSpacing: '1px',
                }}
              >
                What Time?
              </h2>
              <div
                style={{
                  width: '60px',
                  height: '1px',
                  background: 'rgba(122, 15, 29, 0.3)',
                  margin: '0 auto',
                }}
              />
            </div>

            {/* Creative Vertical Timeline */}
            <div style={{ position: 'relative', padding: '20px 0', zIndex: 1 }}>
              {/* Central Dashed Line */}
              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  bottom: '20px',
                  left: '50%',
                  width: '2px',
                  transform: 'translateX(-50%)',
                  borderLeft: '2px dashed rgba(122, 15, 29, 0.3)',
                  zIndex: 0,
                }}
              />

              {[
                { item: programItems[0], icon: glassIconImg, fallbackTime: '8:30 PM' },
                { item: programItems[1], icon: ringsIconImg, fallbackTime: '9:30 PM' },
                { item: programItems[2], icon: bucketIconImg, fallbackTime: '10:00 PM' },
              ].map((data, index) => {
                const isEven = index % 2 === 0;
                const timeText = data.item?.time || data.fallbackTime;
                const titleText = data.item?.title || '';
                const descText = data.item?.desc || '';

                return (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '65px',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {/* Left Side */}
                    <div
                      style={{
                        width: '42%',
                        textAlign: isEven ? 'right' : 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: isEven ? 'flex-end' : 'center',
                      }}
                    >
                      {isEven ? (
                        <div>
                          <span
                            style={{
                              fontFamily: "'Playfair Display', serif",
                              fontSize: '26px',
                              fontWeight: 700,
                              color: '#7A0F1D',
                              lineHeight: 1.2,
                              display: 'block',
                            }}
                          >
                            {timeText}
                          </span>
                          <h4
                            style={{
                              fontFamily: "'Montserrat', sans-serif",
                              fontSize: '20px',
                              fontWeight: 800,
                              color: '#7A0F1D',
                              margin: '6px 0 4px',
                            }}
                          >
                            {titleText}
                          </h4>
                          <p
                            style={{
                              fontFamily: "'Cormorant Garamond', serif",
                              fontSize: '18px',
                              fontWeight: 500,
                              color: '#7A0F1D',
                              opacity: 0.85,
                              margin: 0,
                              lineHeight: 1.5,
                            }}
                          >
                            {descText}
                          </p>
                        </div>
                      ) : (
                        <div
                          style={{
                            width: '70px',
                            height: '70px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(122, 15, 29, 0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '12px',
                          }}
                        >
                          <img
                            src={data.icon}
                            alt=""
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'contain',
                              filter: 'invert(13%) sepia(85%) saturate(3821%) hue-rotate(340deg) brightness(88%) contrast(98%)',
                            }}
                          />
                        </div>
                      )}
                    </div>

                    {/* Central Circle Node */}
                    <div
                      style={{
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        backgroundColor: '#7A0F1D',
                        border: '3px solid #FAF7F2',
                        boxShadow: '0 0 0 3px rgba(122, 15, 29, 0.25)',
                        flexShrink: 0,
                      }}
                    />

                    {/* Right Side */}
                    <div
                      style={{
                        width: '42%',
                        textAlign: !isEven ? 'left' : 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: !isEven ? 'flex-start' : 'center',
                      }}
                    >
                      {!isEven ? (
                        <div>
                          <span
                            style={{
                              fontFamily: "'Playfair Display', serif",
                              fontSize: '24px',
                              fontWeight: 700,
                              color: '#7A0F1D',
                              lineHeight: 1.2,
                              display: 'block',
                            }}
                          >
                            {timeText}
                          </span>
                          <h4
                            style={{
                              fontFamily: "'Montserrat', sans-serif",
                              fontSize: '26px',
                              fontWeight: 600,
                              color: '#7A0F1D',
                              margin: '6px 0 4px',
                            }}
                          >
                            {titleText}
                          </h4>
                          <p
                            style={{
                              fontFamily: "'Cormorant Garamond', serif",
                              fontSize: '20px',
                              color: '#7A0F1D',
                              opacity: 0.85,
                              margin: 0,
                              lineHeight: 1.5,
                            }}
                          >
                            {descText}
                          </p>
                        </div>
                      ) : (
                        <div
                          style={{
                            width: '70px',
                            height: '70px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(122, 15, 29, 0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '12px',
                          }}
                        >
                          <img
                            src={data.icon}
                            alt=""
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'contain',
                              filter: 'invert(13%) sepia(85%) saturate(3821%) hue-rotate(340deg) brightness(88%) contrast(98%)',
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </StationeryCard>
        </section> 







              {/* ── FINAL SECTION: Closing Note & RSVP ── */}
<section
  dir="ltr"
  style={{
    position: 'relative',
    backgroundImage: `url(${finalBgImage})`, // استخدم صورة القلوب الفاتحة هنا
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '100px 1.5rem',
    textAlign: 'center',
    overflow: 'hidden',
    minHeight: '650px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  <Reveal>
    <div
      style={{
        maxWidth: '520px',
        margin: '0 auto',
        padding: '50px 30px',
        backgroundColor: 'rgba(255, 255, 255, 0.65)',
        backdropFilter: 'blur(8px)',
        borderRadius: '16px',
        border: '1px solid rgba(122, 15, 29, 0.15)',
        boxShadow: '0 20px 40px rgba(122, 15, 29, 0.08)',
        position: 'relative',
        zIndex: 2,
      }}
    >
      {/* Decorative Icon Header */}
      <div
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: 'rgba(122, 15, 29, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 24px',
        }}
      >
        <Heart style={{ width: '24px', height: '24px', color: '#7A0F1D', fill: '#7A0F1D' }} />
      </div>

      {/* Main Closing Title */}
      <h2
        style={{
          fontFamily: "'Great Vibes', cursive",
          fontSize: 'clamp(42px, 6vw, 56px)',
          fontWeight: 400,
          color: '#7A0F1D',
          margin: '0 0 16px',
          lineHeight: 1.2,
        }}
      >
        We Can't Wait!
      </h2>

      {/* Warm Heartfelt Message */}
      <p
        style={{
          fontFamily: bodyFont || "'Cormorant Garamond', serif",
          fontSize: '1.25rem',
          lineHeight: 1.8,
          color: '#5A121B',
          margin: '0 0 32px',
          fontWeight: 500,
        }}
      >
        Your presence is the greatest gift of all as we begin this beautiful new chapter together.
        Thank you for being a part of our story and making our special day truly unforgettable.
      </p>

      {/* Divider Accent */}
      <div
        style={{
          width: '80px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #7A0F1D, transparent)',
          margin: '0 auto 32px',
        }}
      />

      {/* Monogram / Signature */}
      <p
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.4rem',
          fontWeight: 600,
          color: '#7A0F1D',
          letterSpacing: '2px',
          margin: 0,
          textTransform: 'uppercase',
        }}
      >
        See You Soon!
      </p>
    </div>
  </Reveal>
</section>






    </div>
  );
};

export default HomePage;

