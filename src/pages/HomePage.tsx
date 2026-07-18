import { useEffect, useState } from 'react';
import { Heart, Calendar, MapPin, Clock } from 'lucide-react';
import CountdownTimer from '../components/CountdownTimer';

// ── الصور ──
import coverCard from '../../public/imgs/katb-ketab-cover.png';
import floralStationery from '../../public/imgs/katb-ketab-stationery.jpg';
import swansCard from '../../public/imgs/katb-ketab-closing.jpg';
import couplePhoto from '../../public/imgs/couples.png';
import locationImg from '../../public/imgs/location.jpg';

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

const emojis: string[] = ['1', '2', '3', '4'];

const programItems: ProgramItem[] = [
  { time: '٦:٠٠ مساءً', title: 'استقبال الضيوف', desc: 'نرحب بحضوركم الكريم في بداية ليلة مباركة يُعقد فيها الرباط المقدس' },
  { time: '٧:٠٠ مساءً', title: 'مراسم عقد القران', desc: 'إشهار عقد النكاح ونطق الكلمات المباركة بحضور الأهل والأحباب' },
  { time: '٨:٠٠ مساءً', title: 'التهنئة والضيافة', desc: 'نشارككم فرحتنا بتقديم الحلوى وتبادل التبريكات والدعوات الصالحة' },
  { time: '٩:٠٠ مساءً', title: 'الصور التذكارية', desc: 'توثيق لحظات بهجتنا لتظل ذكرى جميلة تجمعنا بكم' },
];

// تعديل المكون ليقبل الـ style الخارجي ودمجه لضمان دقة الأبعاد
const StationeryCard: React.FC<{
  bg: string;
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
      aspectRatio: '675 / 1350', // أبعاد متناسبة تماماً مع الطول الكلي للصورة الأصلية image_6a7037.jpg
      borderRadius: '18px',
      overflow: 'hidden',
      boxShadow: '0 18px 45px rgba(44,33,26,0.16)', // ظل دافئ بني-عاجي بديل الظل الخمري القديم
      backgroundImage: `url(${bg})`,
      backgroundSize: '100% 100%', // يضمن مطابقة الصورة لأبعاد الكرت بدون قص أو زيادة
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      ...style, // دمج الخصائص الممررة من الخارج إن وجدت
    }}
  >
    {children}
  </div>
);

// خط فاصل ذهبي رقيق بيربط الأقسام ببعض بخيط بصري واحد — نفس روح فاصل "القلب" في كرت الختام
const SectionDivider: React.FC<{ colors: Colors }> = ({ colors }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '14px',
      padding: '8px 0 36px',
    }}
  >
    <span
      style={{
        width: '56px',
        height: '1px',
        background: `linear-gradient(to left, transparent, ${colors.accent})`,
        opacity: 0.6,
      }}
    />
    <span
      style={{
        width: '5px',
        height: '5px',
        borderRadius: '50%',
        background: colors.accent,
        opacity: 0.75,
      }}
    />
    <span
      style={{
        width: '56px',
        height: '1px',
        background: `linear-gradient(to right, transparent, ${colors.accent})`,
        opacity: 0.6,
      }}
    />
  </div>
);

const HomePage: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 250);
    return () => clearTimeout(t);
  }, []);

  const weddingDate: string = '2026-08-07T18:00:00';

  // ثيم الألوان: عاج دافئ + ذهبي أنتيك + بني إسبريسو غامق — مأخوذ من ألوان كرت الغلاف نفسه (الورق العاجي، الزخارف الذهبية، حبر الخط الغامق)
  const colors: Colors = {
    bgLight: '#FAF6EF', // عاج دافئ ناعم، نفس درجة ورق الكرت الأصلي
    primary: '#3B2F26', // بني إسبريسو دافئ وفخم لحبر الأسماء والنصوص الرئيسية (بديل العمق الكحلي البارد)
    primaryDark: '#1E1612', // بني غامق جداً قريب من الأسود للعناوين الكبيرة وضماناً لأعلى وضوح
    accent: '#B8945F', // ذهبي أنتيك ناعم لكل التفاصيل الصغيرة، الخطوط، والحدود الرقيقة — نفس درجة الزخارف في الكارت
    textMuted: '#8C7A66', // بني رملي دافئ للنصوص الثانوية
    borderSoft: 'rgba(59, 47, 38, 0.12)', // حدود ناعمة بنفس درجة الـ primary
  };

  const fadeUp = (delay: number): React.CSSProperties => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(18px)',
    transition: `all 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
  });

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
      {/* ── كرت الغلاف الهيرو ── */}
      <section
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: colors.bgLight,
          position: 'relative',
        }}
      >
        <StationeryCard bg={coverCard}>
          {/* قلوب متساقطة داخل الكرت بدرجة ذهبية ناعمة */}
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

          {/* نصوص الكارت متموضعة فوق الأماكن المخصصة لها بالصورة بدقة */}
          <div
            style={{
              position: 'absolute',
              top: '33%',
              left: 0,
              right: 0,
              padding: '0 8%',
              textAlign: 'center',
              zIndex: 3,
            }}
          >

 <div style={{ marginBottom: '2.5rem', ...fadeUp(0.5) }}>
              <h1
                style={{
                  fontFamily: "'Noto Nastaliq Urdu', serif",
                  lineHeight: 1.6,
                  fontSize: 'clamp(32px, 8vw, 44px)',
                  fontWeight: 700,
                  color: colors.primaryDark,
                  margin: 0,
                }}
              >
                محمد علي
              </h1>

              <h1
                style={{
                  fontFamily: "'Noto Nastaliq Urdu', serif",
                  lineHeight: 1.6,
                  fontSize: 'clamp(32px, 8vw, 44px)',
                  fontWeight: 700,
                  color: colors.primary,
                  margin: 0,
                }}
              >
                و
              </h1>

              <h1
                style={{
                  fontFamily: "'Noto Nastaliq Urdu', serif",
                  lineHeight: 1.6,
                  fontSize: 'clamp(32px, 8vw, 44px)',
                  fontWeight: 700,
                  color: colors.primaryDark,
                  margin: 0,
                }}
              >
                ليلى أحمد
              </h1>
            </div>

            <p
              style={{
                fontSize: '14.5px',
                fontStyle: 'italic',
                color: colors.primary,
                marginBottom: '1.5rem',
                lineHeight: 1.8,
                fontWeight: 500,
                ...fadeUp(0.3),
              }}
            >
              جمعنا الله على خير
              <br />
               يسعدنا أن نتشرف بدعوتكم لحضور عقد قرآننا
            </p>



                  

           
          </div>
        </StationeryCard>
      </section>


                 <section style={{ background: colors.bgLight, position: 'relative' }}>
        <StationeryCard>
          <div
            style={{
              position: 'absolute',
              top: '10%',
              left: 0,
              right: 0,
              padding: '0 11%',
              textAlign: 'center',
            }}
          >

              <div style={{ position: 'relative', marginBottom: '20px' }}>
              <h3
                style={{
                  fontFamily: "'Noto Nastaliq Urdu', serif",
                  fontSize: 'clamp(30px, 8vw, 38px)',
                  fontWeight: 700,
                  color: colors.primaryDark,
                  marginBottom: 20,
                }}
              >
                يناير
              </h3>
              <p style={{ fontStyle: 'italic', fontSize: '13px', color: colors.accent, margin: '2px 0 0 0', fontWeight: 600 }}>
                ٢٠٢٧
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '6px', maxWidth: '270px', margin: '0 auto' }}>
              {[5, 6, 7, 8, 9, 10, 11].map((d: number) => (
                <div key={d} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginBottom:30 }}>
                  {d === 7 ? (
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: colors.primary,
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '14px',
                        boxShadow: `0 0 0 2px #fff, 0 0 0 3px ${colors.accent}`,
                      }}
                    >
                      {d}
                    </div>
                  ) : (
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        border: `1px dashed ${colors.borderSoft}`,
                        color: colors.primary,
                        opacity: 0.4,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        
                      }}
                    >
                      {d}
                    </div>
                  )}
                </div>
              ))}
            </div>


            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.9,
                color: colors.primary,
                margin: '0 0 28px',
                fontWeight: 500,
              }}
            >
              "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً"
              <br />


            </p>


             <div style={{ backgroundColor: '#ffffff', padding: '8px' }}>
                <img
                  src={couplePhoto}
                  alt="couples"
                  style={{
                    width: '100%',
                    height: 'auto',
                    aspectRatio: '1 / 1',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>



               <p
              style={{
                fontSize: '15px',
                lineHeight: 1.9,
                color: colors.primary,
                margin: '0 0 28px',
                fontWeight: 500,
                marginTop:30,
              }}
            >
            بدأت قصتنا بقدر الله الجميل، واليوم نبدأ فصلاً جديداً من حياتنا معاً. ندعوكم لمشاركتنا هذه اللحظة المباركة.


            </p>


          

            
          </div>
        </StationeryCard>
      </section>





      {/* ── العد التنازلي لكتب الكتاب ── */}
      <section
        style={{
          background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
          padding: '60px 1.5rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'rgba(216,195,156,0.05)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '20px',
            }}
          >
            <Clock style={{ width: '22px', height: '22px', color: 'rgba(216,195,156,0.85)' }} />
            <h2
              style={{
                fontFamily: "'Noto Nastaliq Urdu', serif",
                fontSize: 'clamp(18px, 4vw, 24px)',
                fontWeight: 400,
                color: 'rgba(247,237,222,0.92)',
                margin: 0,
              }}
            >
              العد التنازلي لعقد القران مبارك
            </h2>
          </div>
          <div style={{ maxWidth: '600px', margin: '0 auto', padding: '10px' }}>
            <CountdownTimer targetDate={weddingDate} />
          </div>
        </div>
      </section>

      {/* ── كرت صورة العروسين ── */}
      {/* <section style={{ background: colors.bgLight, padding: '60px 1.25rem 0', position: 'relative' }}>
        <StationeryCard bg={floralStationery}>
          <div
            style={{
              position: 'absolute',
              top: '20%',
              left: 0,
              right: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0 12%',
            }}
          >
            <div
              style={{
                width: '100%',
                backgroundColor: colors.primary,
                padding: '12px 12px 32px 12px',
                borderRadius: '4px',
                boxShadow: '0 10px 25px rgba(30,22,18,0.18)',
              }}
            >
              <div style={{ backgroundColor: '#ffffff', padding: '8px' }}>
                <img
                  src={couplePhoto}
                  alt="إيمان وسلامة"
                  style={{
                    width: '100%',
                    height: 'auto',
                    aspectRatio: '1 / 1',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
            </div>
            <p
              style={{
                marginTop: '22px',
                fontSize: '13px',
                letterSpacing: '0.2em',
                color: colors.accent,
                fontWeight: 700,
              }}
            >
              ميثاق غليظ وسند لا يميل
            </p>
          </div>
        </StationeryCard>
      </section> */}

      {/* <div style={{ background: colors.bgLight }}>
        <SectionDivider colors={colors} />
      </div> */}

      {/* ── كرت رسالة كتب الكتاب + التقويم ── */}
     

      {/* <SectionDivider colors={colors} /> */}

      {/* ── موقع القران والاحتفال ── */}
      <section style={{ background: colors.bgLight, padding: '0 1.5rem 60px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Noto Nastaliq Urdu', serif", fontSize: 'clamp(26px, 6vw, 34px)', color: colors.primaryDark, marginBottom: '32px', marginTop:30 }}>
          مكان عقد القران
        </h2>
        <div style={{ maxWidth: '420px', margin: '0 auto', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(44,33,26,0.14)' }}>
          <img src={locationImg} alt="موقع كتب الكتاب" style={{ width: '100%', height: '260px', objectFit: 'cover', display: 'block' }} />
        </div>
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '26px',
            padding: '14px 32px',
            background: colors.primary,
            color: '#fff',
            borderRadius: '30px',
            textDecoration: 'none',
            fontSize: '13px',
            fontWeight: 700,
            boxShadow: '0 10px 28px rgba(184,148,95,0.35)',
          }}
        >
          <MapPin style={{ width: '16px', height: '16px' }} />
          عرض الموقع على الخريطة
        </a>
      </section>

      <SectionDivider colors={colors} />

     {/* ── برنامج عقد القران ── */}
<section style={{ background: '#FAF7F2', padding: '80px 2rem' }}>
  <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
    
    {/* عنوان السكشن المستوحى من الـ Calligraphy في صفحتك */}
    <h2 style={{ 
      fontFamily: "'Aref Ruqaa', serif", 
      fontSize: '36px', 
      color: '#213C4F', 
      textAlign: 'center', 
      marginBottom: '16px' 
    }}>
      تفاصيل ومجريات الليلة
    </h2>
    
    {/* خط زخرفي فاصل متناسق مع ذوق الصفحة */}
    <div style={{
      width: '128px',
      height: '1px',
      background: 'linear-gradient(to right, transparent, #C9A96E, transparent)',
      margin: '0 auto 60px'
    }} />

    {/* شبكة الكروت (CSS Grid) */}
    <div style={{ 
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '24px',
      direction: 'rtl'
    }}>
      {programItems.map((item: ProgramItem, i: number) => (
        <div 
          key={i} 
          className="group" // للحفاظ على تأثيرات الـ hover لو كان عندك CSS خارجي، أو سيعتمد على الـ inline المكتوب
          style={{ 
            position: 'relative',
            background: '#FFFFFF',
            borderRadius: '24px',
            padding: '40px 24px 32px',
            border: '2px solid rgba(201, 169, 110, 0.2)', // Border ذهبي خفيف جداً
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: '0 4px 20px rgba(33, 60, 79, 0.02)',
            transition: 'all 0.4s ease',
            color:'#FFFFFF',
            marginTop:'15px'
          }}
        >
          {/* دائرة الأيقونة/الإيموجي العلوية فوق الكرت */}
          <div style={{ 
            position: 'absolute', 
            top: '-24px', 
            width: '48px', 
            height: '48px', 
            background: '#3B2F26', // التدرج الذهبي الدافئ
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            fontSize: '20px', 
            boxShadow: '0 8px 16px rgba(201, 169, 110, 0.3)',
            zIndex: 2 ,
            
          }}>
            {emojis[i]}
          </div>

          {/* محتوى الكرت */}
          <div style={{ width: '100%', marginTop: '18px' }}>
            {/* التوقيت */}
            <span style={{ 
              fontSize: '13px', 
              color: '#C9A96E', 
              fontWeight: 700,
              letterSpacing: '0.05em'
            }}>
              {item.time}
            </span>

            {/* العنوان الرئيسي للفقرة */}
            <h3 style={{ 
              fontFamily: "'Tajawal', sans-serif",
              fontSize: '18px', 
              color: '#213C4F', 
              margin: '12px 0 8px', 
              fontWeight: 700 
            }}>
              {item.title}
            </h3>

            {/* خط زخرفي صغير تحت العنوان داخل الكرت */}
            <div style={{
              width: '32px',
              height: '2px',
              background: 'linear-gradient(to left, #C9A96E, transparent)',
              borderRadius: '999px',
              margin: '0 auto 16px'
            }} />

            {/* الوصف */}
            <p style={{ 
              fontFamily: "'Tajawal', sans-serif",
              fontSize: '14px', 
              color: '#8A7F7C', 
              margin: 0, 
              lineHeight: 1.6,
              fontWeight: 400
            }}>
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

      <SectionDivider colors={colors} />

      {/* ── كرت الختام ── */}
      <section style={{ background: colors.bgLight, position: 'relative' }}>
        <StationeryCard bg={swansCard}>
          <div style={{ position: 'absolute', top: '14%', left: 0, right: 0, padding: '0 12%', textAlign: 'center' }}>
            <p style={{ fontSize: '14px', fontStyle: 'italic', color: colors.accent, marginBottom: '20px', fontWeight: 600 }}>
              شكر الله سعيكم ومشاركتكم فرحتنا وعقد قراننا
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', margin: '26px 0' }}>
              <span style={{ width: '34px', height: '1px', background: colors.accent }} />
              <Heart style={{ width: '16px', height: '16px', color: colors.primary, fill: colors.primary }} />
              <span style={{ width: '34px', height: '1px', background: colors.accent }} />
            </div>
            <p style={{ fontSize: '14px', fontStyle: 'italic', color: colors.primary, marginBottom: '10px', fontFamily: "'Noto Nastaliq Urdu', serif" }}>
              بكل ود وحب
            </p>
            <h2 style={{ fontFamily: "'Noto Nastaliq Urdu', serif", fontWeight: 700, fontSize: 'clamp(24px, 7vw, 30px)', color: '#3B2F26', lineHeight: 1.5, margin: '20px 0 12px' }}>
              محمد علي و ليلى أحمد
            </h2>
            
          </div>
        </StationeryCard>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400..700&family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap');

        @keyframes fall {
          0% { transform: translateY(-20px) rotate(0deg); opacity: 0.4; }
          100% { transform: translateY(135%) rotate(360deg); opacity: 0; }
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default HomePage;