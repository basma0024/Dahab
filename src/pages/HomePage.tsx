import React, { useEffect, useRef, useState } from 'react';
import { Heart, Calendar, MapPin, Clock } from 'lucide-react';
import { gsap } from 'gsap';
import CountdownTimer from '../components/CountdownTimer';
import cardBgImg from '../../public/imgs/Gemini_Generated_Image_yb8w3vyb8w3vyb8w.jpg';
import coupleImg from '../../public/imgs/ChatGPT Image Aug 20, 2026, 11_07_23 PM.png';
import { motion } from 'framer-motion';

import bgImage from '../../public/imgs/Gemini_Generated_Image_yb8w3vyb8w3vyb8w.jpg';

// ── الصور المطلوبة للغلاف المتحرك ──
import goldFrameImg from '../../public/imgs/Gemini_Generated_Image_ods-removebg-preview.png';
import flowerImg from '../../public/imgs/flower.png';
import glitterDustImg from '../../public/imgs/osowdsosowds-removebg-preview.png';
import glitterClusterImg from '../../public/imgs/Gemini_Generated_Image_owdsosowdsosowds-removebg-preview.png';
import topFlowerImg from '../../public/imgs/Gemini_Generated_Image_qsy1xrqsy1xrqsy1-removebg-preview.png';
import bottomFlowerImg from '../../public/imgs/Gemini_Generatexrqsy1-removebg-preview.png';

import bgSchedule from '../../public/imgs/22222222222.jpg';

// ── باقي صور الصفحة ──
import floralStationery from '../../public/imgs/katb-ketab-stationery.jpg';
import swansCard from '../../public/imgs/katb-ketab-closing.jpg';
import couplePhoto from '../../public/imgs/couples.png';
import locationImg from '../../public/imgs/WhatsApp Image 2026-08-21 at 1.11.50 AM.jpeg';
import logoImg from '../../public/imgs/WhatsApp Image 2026-08-21 at 2.52.47 PM.jpeg';

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
      borderRadius: '18px',
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

  const weddingDate: string = '2026-09-06T18:00:00';

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
        fontFamily: "'Noto Naskh Arabic', serif",
        background: colors.bgLight,
        color: colors.primary,
        direction: 'rtl',
        overflowX: 'hidden',
      }}
    >
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
        }}
      >
        <motion.div
          animate={{ x: isOpened ? '-100%' : '0%' }}
          transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '50%',
            height: '100%',
            backgroundColor: '#FAF6EF',
            borderRight: '1px solid rgba(184,148,95,0.3)',
            boxShadow: '10px 0 30px rgba(0,0,0,0.1)',
            zIndex: 1,
          }}
        />

        <motion.div
          animate={{ x: isOpened ? '100%' : '0%' }}
          transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '50%',
            height: '100%',
            backgroundColor: '#FAF6EF',
            borderLeft: '1px solid rgba(184,148,95,0.3)',
            boxShadow: '-10px 0 30px rgba(0,0,0,0.1)',
            zIndex: 1,
          }}
        />

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
            gap: '12px',
          }}
        >
          <div
            style={{
              width: '130px',
              height: '130px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              boxShadow: '0 10px 30px rgba(184,148,95,0.35)',
              // border: '2px solid #B8945F',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.3s ease',
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
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
          </div>

          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '12px',
              letterSpacing: '2px',
              color: '#B8945F',
              fontWeight: 600,
              textTransform: 'uppercase',
            }}
          >
            Tap to Open
          </span>
        </motion.div>
      </motion.div>

      {/* ── Hero Section ── */}
      <section
        ref={heroCardRef}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: colors.bgLight,
          position: 'relative',
        }}
      >
        <StationeryCard style={{ backgroundColor: colors.bgLight }}>
          <img
            ref={glitterDustRef}
            src={glitterDustImg}
            alt="Glitter Dust"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0,
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />

          <img
            ref={glitterClusterRef}
            src={glitterClusterImg}
            alt="Glitter Cluster"
            style={{
              position: 'absolute',
              top: '-20px',
              left: '-20px',
              width: '180px',
              opacity: 0,
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />

          <img
            ref={goldFrameRef}
            src={goldFrameImg}
            alt="Gold Frame"
            style={{
              position: 'absolute',
              top: '9%',
              left: '10%',
              width: '80%',
              height: '82%',
              objectFit: 'contain',
              opacity: 0,
              zIndex: 2,
            }}
          />

          <img
            ref={flowerRef}
            src={flowerImg}
            alt="Flower Corner"
            style={{
              position: 'absolute',
              bottom: '5%',
              width: '190px',
              opacity: 0,
              zIndex: 3,
              transformOrigin: 'bottom right',
            }}
          />

          {[10, 30, 50, 70, 88].map((left: number, i: number) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: `${left}%`,
                top: '-20px',
                fontSize: i % 2 === 0 ? '14px' : '11px',
                color: colors.accent,
                opacity: 0.22,
                animation: `fall ${7 + i}s linear infinite`,
                animationDelay: `${i * 0.9}s`,
                userSelect: 'none',
                pointerEvents: 'none',
                zIndex: 2,
              }}
            >
              ♥
            </div>
          ))}

          <div
            style={{
              position: 'absolute',
              top: '35%',
              left: 0,
              right: 0,
              padding: '0 8%',
              textAlign: 'center',
              zIndex: 4,
            }}
          >
            <div ref={addToTextRefs} style={{ marginBottom: '1rem', opacity: 0 }}>
              <span
                style={{
                  fontSize: '12px',
                  letterSpacing: '2px',
                  color: colors.accent,
                  fontWeight: 500,
                  display: 'block',
                  marginBottom: '10px',
                }}
              >
                Save The Date
              </span>
            </div>

            <div ref={addToTextRefs} style={{ marginBottom: '1.5rem', opacity: 0 }}>
              <h1
                style={{
                  fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif",
                  fontSize: '28px',
                  fontWeight: 500,
                  letterSpacing: '3px',
                  color: colors.accent,
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                Ahmed
              </h1>

              <span
                style={{
                  fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif",
                  fontSize: '18px',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: colors.accent,
                  display: 'block',
                  margin: '6px 0',
                  opacity: 0.85,
                }}
              >
                &
              </span>

              <h1
                style={{
                  fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif",
                  fontSize: '28px',
                  fontWeight: 500,
                  letterSpacing: '3px',
                  color: colors.accent,
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                Malak
              </h1>
            </div>

            <div ref={addToTextRefs} style={{ opacity: 0 }}>
              <p
                style={{
                  fontSize: '12px',
                  fontStyle: 'italic',
                  color: colors.primary,
                  lineHeight: 1.8,
                  fontWeight: 500,
                }}
              >
                
                Sept 6.2026

              </p>
            </div>
          </div>
        </StationeryCard>
      </section>

      {/* ── SECOND SECTION ── */}
      <section style={{ background: colors.bgLight, position: 'relative' }}>
        <StationeryCard
          style={{
            backgroundColor: '#F7F5F2',
            position: 'relative',
            overflow: 'hidden',
            padding: 0,
          }}
        >
          <motion.img
            initial={{ opacity: 0, scale: 1.01 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            src={coupleImg}
            alt="Ahmed & Malak"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />

          <div
            style={{
              position: 'absolute',
              bottom: '7%',
              right: '65%',
              width: '55%',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              alignItems: 'flex-start',
              textAlign: 'left',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ paddingLeft: '5px' }}
            >
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '12px',
                  letterSpacing: '1px',
                  color: '#222222',
                  marginBottom: '6px',
                  lineHeight: 1.9,
                  fontWeight: 600,
                  fontStyle: 'italic',
                }}
              >
                A <br />Love<br />Written<br /> in the stars<br />
                and sealed with <br /> forever
              </div>
            </motion.div>
          </div>
        </StationeryCard>
      </section>

      {/* ── THIRD SECTION ── */}
      <section
        dir="ltr"
        style={{
          position: 'relative',
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '80px 1.5rem',
          textAlign: 'center',
          overflow: 'hidden',
          minHeight: '500px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.25)',
            zIndex: 1,
          }}
        />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '600px', width: '100%' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '30px',
              paddingBottom: '20px',
              borderBottom: '1px solid rgba(180, 140, 100, 0.3)',
            }}
          >
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 'clamp(20px, 4vw, 26px)',
                fontWeight: 600,
                color: '#333333',
                margin: '0 0 10px 0',
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}
            >
              Save The Date
            </h2>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
                color: '#222222',
                fontSize: '14px',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                letterSpacing: '0.5px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Calendar style={{ width: '18px', height: '18px', color: '#b48c64' }} />
                <span>SEP 06 . 2026</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock style={{ width: '18px', height: '18px', color: '#b48c64' }} />
                <span>09:00 PM</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MapPin style={{ width: '18px', height: '18px', color: '#b48c64' }} />
                <span>Sandy Hall</span>
              </div>
            </div>
          </div>

          <div>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '12px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#666666',
                marginBottom: '15px',
                fontWeight: 600,
              }}
            >
              COUNTDOWN
            </p>
            <div style={{ padding: '0 10px' }}>
              <CountdownTimer targetDate={weddingDate} />
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCATION SECTION ── */}
      <section style={{ background: colors.bgLight, padding: '0 1.5rem 60px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Noto Nastaliq Urdu', serif", fontSize: 'clamp(26px, 6vw, 34px)', color: colors.primaryDark, marginBottom: '32px', marginTop: 30 }}>
          Location
        </h2>
        <div style={{ maxWidth: '420px', margin: '0 auto', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(44,33,26,0.14)' }}>
          <img src={locationImg} alt="Location" style={{ width: '100%', height: '260px', objectFit: 'cover', display: 'block' }} />
        </div>
        <a
          href="https://maps.app.goo.gl/XQy32VLRY4N3ux4K8"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '26px',
            padding: '14px 32px',
            background: colors.primaryDark,
            color: '#fff',
            borderRadius: '30px',
            textDecoration: 'none',
            fontSize: '13px',
            fontWeight: 700,
            boxShadow: '0 10px 28px rgba(184,148,95,0.35)',
          }}
        >
          Open Location
          <MapPin style={{ width: '16px', height: '16px' }} />
        </a>
      </section>

      {/* ── ITINERARY SECTION ── */}
  {/* ── ITINERARY SECTION ── */}
      <section
        dir="ltr"
        style={{
          position: 'relative',
          backgroundColor: '#FBF8F3',
          padding: '90px 1.5rem',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '70px' }}
          >
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '12px',
                letterSpacing: '4px',
                textTransform: 'uppercase',
                color: '#B48C64',
                fontWeight: 600,
                marginBottom: '8px',
              }}
            >
              Itinerary
            </p>
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 'clamp(26px, 4vw, 36px)',
                fontWeight: 600,
                color: '#3B2F26',
                margin: 0,
                letterSpacing: '1px',
              }}
            >
              Order of Events
            </h2>
            <div
              style={{
                width: '50px',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, #C9A96E, transparent)',
                margin: '18px auto 0',
              }}
            />
          </motion.div>

          {/* Events Timeline */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '1px',
                background: 'linear-gradient(to bottom, transparent, rgba(201, 169, 110, 0.5), transparent)',
                zIndex: 1,
              }}
            />

            {programItems.map((item: ProgramItem, i: number) => {
              const timeOnLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '45px 0',
                    minHeight: '30px',
                  }}
                >
                  {/* Timeline Node */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: '#B48C64',
                      border: '3px solid #FBF8F3',
                      boxShadow: '0 0 0 1px rgba(180,140,100,0.3)',
                      zIndex: 3,
                    }}
                  />

                  {/* Left Box (Fade In Left) */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.15 }}
                    style={{
                      width: '46%',
                      display: 'flex',
                      justifyContent: 'flex-end',
                      textAlign: 'right',
                      zIndex: 2,
                    }}
                  >
                    {timeOnLeft ? (
                      <span
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: '13px',
                          fontWeight: 700,
                          color: '#8C6A48',
                          letterSpacing: '2px',
                          textTransform: 'uppercase',
                          background: 'rgba(201, 169, 110, 0.15)',
                          padding: '6px 18px',
                          borderRadius: '30px',
                          border: '1px solid rgba(201, 169, 110, 0.25)',
                        }}
                      >
                        {item.time}
                      </span>
                    ) : (
                      <div>
                        <h3
                          style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: '19px',
                            fontWeight: 600,
                            color: '#3B2F26',
                            margin: '0 0 6px 0',
                          }}
                        >
                          {item.title}
                        </h3>
                        <p
                          style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: '13px',
                            color: '#6E6158',
                            margin: 0,
                            lineHeight: 1.5,
                            fontWeight: 400,
                          }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    )}
                  </motion.div>

                  {/* Right Box (Fade In Right) */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.15 }}
                    style={{
                      width: '46%',
                      display: 'flex',
                      justifyContent: 'flex-start',
                      textAlign: 'left',
                      zIndex: 2,
                    }}
                  >
                    {timeOnLeft ? (
                      <div>
                        <h3
                          style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: '19px',
                            fontWeight: 600,
                            color: '#3B2F26',
                            margin: '0 0 6px 0',
                          }}
                        >
                          {item.title}
                        </h3>
                        <p
                          style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: '13px',
                            color: '#6E6158',
                            margin: 0,
                            lineHeight: 1.5,
                            fontWeight: 400,
                          }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    ) : (
                      <span
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: '13px',
                          fontWeight: 700,
                          color: '#8C6A48',
                          letterSpacing: '2px',
                          textTransform: 'uppercase',
                          background: 'rgba(201, 169, 110, 0.15)',
                          padding: '6px 18px',
                          borderRadius: '30px',
                          border: '1px solid rgba(201, 169, 110, 0.25)',
                        }}
                      >
                        {item.time}
                      </span>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CLOSING CARD ── */}
      <section style={{ background: colors.bgLight, position: 'relative' }}>
        <StationeryCard bg={bgSchedule}>
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              padding: '0 12%',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontSize: '14px',
                fontStyle: 'italic',
                color: colors.accent,
                marginBottom: '20px',
                fontWeight: 600,
              }}
            >
              Thank you for sharing in our joy and celebrating this beautiful beginning with us.
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                margin: '26px 0',
              }}
            >
              <span style={{ width: '34px', height: '1px', background: colors.accent }} />
              <Heart style={{ width: '16px', height: '16px', color: colors.primary, fill: colors.primary }} />
              <span style={{ width: '34px', height: '1px', background: colors.accent }} />
            </div>

            <p style={{ fontSize: '14px', fontStyle: 'italic', color: colors.primary, marginBottom: '10px' }}>
              With love and gratitude
            </p>

            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: 'clamp(24px, 7vw, 30px)',
                color: '#3B2F26',
                lineHeight: 1.5,
                margin: '20px 0 12px',
              }}
            >
              Ahmed Shemis & Malak Essam
            </h2>
          </div>
        </StationeryCard>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Aref+Ruqaa:wght@400;700&family=Noto+Nastaliq+Urdu:wght@400..700&family=Noto+Naskh+Arabic:wght@400;500;600;700&family=Tajawal:wght@400;500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:wght@300;400;500;600&display=swap');

        @keyframes fall {
          0% { transform: translateY(-20px) rotate(0deg); opacity: 0.4; }
          100% { transform: translateY(135%) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default HomePage;