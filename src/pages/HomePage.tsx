// src/pages/HomePage.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Star, Send, Calendar, Clock, MapPin } from 'lucide-react';
import heroImg from '../../public/imgs/bgg.jpeg';
import bg from '../../public/imgs/PM.jpeg';
import dahabImg from '../../public/imgs/finalbaby.jpg';
import babyToy from '../../public/imgs/babyToy.jpg';
import dahab1 from '../../public/imgs/dahab1.jpg';
import dahab2 from '../../public/imgs/dahab2.jpg';
import dahab3 from '../../public/imgs/dahab3.jpg';
import pinkBgImg from '../../public/imgs/dahab-pink-bg.png';
import bottleImg from '../../public/imgs/babiiii.png';
import { addWish } from "../lib/wishesStore";
import footerBg from "../../public/imgs/footerbg.jpg";

const stats = [
  { label: "Born", value: "October 10, 2026" },
  { label: "Time", value: "10:42 AM" },
  { label: "Eyes", value: "Brown" },
  { label: "Hair", value: "Brown" },
];

const polaroids = [
  { src: dahab1, rotate: -8, x: 0 },
  { src: dahab2, rotate: 3, x: 0 },
  { src: dahab3, rotate: 9, x: 0 },
];

// ✏️ EDIT THESE: Sebou' date & details
const EVENT_DATE = new Date("2026-10-24T18:00:00");
const EVENT_DETAILS = {
  date: "Saturday, October 24, 2026",
  time: "6:00 PM",
  place: "Our Home",
};

function useCountdown(target: Date) {
  const calc = () => {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      done: false,
    };
  };

  const [time, setTime] = useState(calc);

  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return time;
}

export default function HomePage() {
  const [formName, setFormName] = useState<string>('');
  const [formText, setFormText] = useState<string>('');
  const [sent, setSent] = useState(false);
  const countdown = useCountdown(EVENT_DATE);

  const handleAddWish = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formName.trim() || !formText.trim()) return;

    addWish(formName.trim(), formText.trim());

    setFormName('');
    setFormText('');
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const countdownItems = [
    { label: "Days", value: countdown.days },
    { label: "Hours", value: countdown.hours },
    { label: "Minutes", value: countdown.minutes },
    { label: "Seconds", value: countdown.seconds },
  ];

  const detailItems = [
    { icon: <Calendar size={18} />, title: "Date", text: EVENT_DETAILS.date },
    { icon: <Clock size={18} />, title: "Time", text: EVENT_DETAILS.time },
    { icon: <MapPin size={18} />, title: "Place", text: EVENT_DETAILS.place },
  ];

  return (
    <div
      dir="ltr"
      className="font-body min-h-screen bg-[#FAF7F2] text-[#4A3E3D] antialiased selection:bg-[#E2C2C6]/30 overflow-x-hidden"
    >
      {/* Background Floating Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
        <div className="absolute top-[10%] right-[5%] text-[#E2C2C6] animate-pulse"><Sparkles size={20} /></div>
        <div className="absolute top-[35%] left-[8%] text-[#D8A7B1] opacity-60"><Star size={14} /></div>
        <div className="absolute top-[60%] right-[12%] text-[#E2C2C6]"><Heart size={16} /></div>
        <div className="absolute top-[80%] left-[15%] text-[#D8A7B1] opacity-50"><Sparkles size={18} /></div>
      </div>

      {/* SECTION 1 — Welcome */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 w-full max-w-sm mx-auto flex flex-col items-center justify-center bg-white px-6 py-10"
        >
          <motion.h1
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="font-script text-5xl md:text-6xl text-[#BE5E68] leading-tight mb-3"
          >
            Welcome, Reem
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="font-body text-base md:text-lg text-[#8C8378] font-medium tracking-wide mb-8"
          >
            A new life, filled with love
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="relative w-full mb-8"
          >
            <img src={dahabImg} alt="Reem" className="w-full h-full object-cover" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1 }}
            className="font-display italic text-xl md:text-2xl text-[#BE5E68] tracking-wide"
          >
            Our little treasure
          </motion.p>
        </motion.div>
      </section>

      {/* SECTION 2 — Meet Reem */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-[#FDFBF8] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 w-full max-w-sm mx-auto flex flex-col items-center bg-white rounded-[2rem] shadow-[0_8px_40px_rgba(0,0,0,0.06)] px-7 py-10"
        >
          <motion.h1
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="font-display text-3xl text-[#be5e68] font-medium tracking-wide mb-9 flex items-center gap-2"
          >
            Meet Reem
            <span className="text-2xl">♡</span>
          </motion.h1>

          <div className="w-full flex flex-col">
            {stats.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.15, ease: "easeOut" }}
                className="flex items-baseline justify-between border-b border-[#EDE7E0] py-3"
              >
                <span className="font-display italic text-lg md:text-xl text-[#be5e68]">
                  {item.label}
                </span>
                <span className="font-body text-base md:text-lg text-[#be5e68] font-light tracking-wide">
                  {item.value}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="w-32 md:w-40 mt-8"
          >
            <img src={babyToy} alt="Reem" className="w-full h-full object-contain" />
          </motion.div>
        </motion.div>
      </section>

  {/* SECTION 5 — Sebou' Celebration + Countdown */}
      <section className="relative z-10 py-24 px-6 bg-gradient-to-b from-[#FDF6F7] to-[#F8E6EA] overflow-hidden">
        <div className="max-w-md mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="space-y-3 mb-10"
          >
            {/* <p className="font-body text-xs font-semibold text-[#B0677A] tracking-[0.3em] uppercase">
              You're Invited
            </p> */}
            <h2 className="font-script text-5xl md:text-6xl text-[#BE5E68] leading-tight">
              Reem's Sebou'
            </h2>
            <p className="font-display italic text-base md:text-lg text-[#8C4A5C]">
              Join us in celebrating her first week of life
            </p>
          </motion.div>

          {/* Countdown */}
          {countdown.done ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-[1.75rem] shadow-[0_8px_30px_rgba(176,103,122,0.15)] py-8 px-6 mb-10"
            >
              <p className="font-script text-4xl text-[#BE5E68]">Today is the day! 🎉</p>
            </motion.div>
          ) : (
            <>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-body text-sm text-[#9B7C82] mb-4"
              >
                Only <span className="font-bold text-[#BE5E68]">{countdown.days}</span>{" "}
                {countdown.days === 1 ? "day" : "days"} to go!
              </motion.p>

              <div className="grid grid-cols-4 gap-2.5 md:gap-3 mb-10">
                {countdownItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 25, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 + i * 0.12, ease: "easeOut" }}
                    className="bg-white rounded-2xl shadow-[0_6px_20px_rgba(176,103,122,0.15)] py-4 md:py-5 flex flex-col items-center"
                  >
                    <span className="font-display text-2xl md:text-3xl font-medium text-[#BE5E68] tabular-nums">
                      {String(item.value).padStart(2, "0")}
                    </span>
                    <span className="font-body text-[10px] md:text-xs font-semibold uppercase tracking-widest text-[#9B7C82] mt-1">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </>
          )}

          {/* Event details */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="bg-white rounded-[1.75rem] shadow-[0_8px_30px_rgba(176,103,122,0.15)] px-6 py-4"
          >
            {detailItems.map((d, i) => (
              <div
                key={d.title}
                className={`flex items-center gap-4 py-4 text-left ${
                  i !== detailItems.length - 1 ? "border-b border-[#F0E3E6]" : ""
                }`}
              >
                <div className="w-10 h-10 shrink-0 rounded-full bg-[#F8E6EA] text-[#BE5E68] flex items-center justify-center">
                  {d.icon}
                </div>
                <div>
                  <p className="font-body text-[11px] font-semibold uppercase tracking-widest text-[#B0677A]">
                    {d.title}
                  </p>
                  <p className="font-display text-base text-[#4A3E3D]">{d.text}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-script text-2xl md:text-3xl text-[#9B5B6B] mt-10"
          >
            We can't wait to celebrate with you 🤍
          </motion.p>
        </div>
      </section>



      {/* SECTION 3 — Message + Polaroids */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center bg-[#FDFBF8] bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 w-full max-w-sm mx-auto flex flex-col items-center px-6 pt-10 pb-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="font-display italic text-3xl md:text-4xl text-[#be5e68] mb-6 text-center"
          >
            Our Beloved Little One
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
            className="font-body text-base md:text-lg text-[#be5e68df] font-medium leading-relaxed text-center mb-10"
          >
            <p>
              We never knew a heart could hold this much love, until you came along...
              We pray that God keeps you safe for us, makes your days ahead more beautiful
              than we could ever wish, and lets us watch you grow before our eyes, year after year.
            </p>
          </motion.div>

          {/* Polaroids */}
          <div className="relative w-full h-80 md:h-96 flex items-center justify-center mb-6">
            {polaroids.map((p, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: `${50 + (i - 1) * 34}%`,
                  transform: "translateX(-50%)",
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 40, rotate: 0, scale: 0.85 }}
                  animate={{ opacity: 1, y: 0, rotate: p.rotate, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 + i * 0.25, ease: "easeOut" }}
                  whileHover={{ scale: 1.06, rotate: 0, zIndex: 10 }}
                  className="bg-white p-2.5 pb-6 rounded-[4px] shadow-[0_6px_20px_rgba(0,0,0,0.15)] w-44 md:w-52"
                >
                  <div className="w-full aspect-[3/4] overflow-hidden rounded-[2px]">
                    <img src={p.src} alt="Reem" className="w-full h-full object-cover" />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SECTION 4 — Prayer */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-16 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${pinkBgImg})` }}
      >
        <div className="absolute inset-0 bg-white/20 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center justify-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: "easeOut" }}
            className="font-script text-3xl md:text-4xl text-[#9B5B6B] leading-relaxed drop-shadow-[0_2px_6px_rgba(255,255,255,0.6)]"
          >
            May God let her grow beautifully,
            <br />
            keep her under His watchful eye,
            <br />
            make her the joy of our hearts,
            <br />
            and bless her with a lovely life,
            <br />
            a peaceful heart, and all that is good.
          </motion.p>
        </motion.div>
      </section>

    
      {/* SECTION 6 — Wishes form */}
      <section className="py-24 px-6 bg-[#FDF6F7] z-10 relative">
        <div className="max-w-3xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-center space-y-3 mb-14"
          >
            <h2 className="font-display italic text-3xl md:text-4xl text-[#B0677A]">
              Share Your Love
            </h2>
            <p className="font-body text-sm text-[#9B7C82]">
              Leave our little one a wish to carry with her at the start of her life
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleAddWish}
            initial={{ opacity: 0, y: 25, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="relative bg-[#F3D9DE] p-6 md:p-8 rounded-[1.75rem] shadow-[0_8px_30px_rgba(176,103,122,0.15)] space-y-5"
          >
            <motion.img
              src={bottleImg}
              alt="Baby bottle"
              initial={{ opacity: 0, rotate: -20, scale: 0.7 }}
              animate={{ opacity: 1, rotate: -10, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="absolute -top-9 right-6 w-20 md:w-14 drop-shadow-md"
            />

            <h3 className="font-display italic text-xl md:text-2xl text-[#8C4A5C] mb-2">
              Leave a little wish
            </h3>

            <div>
              <label className="block text-xs font-semibold text-[#8C4A5C] mb-1.5 font-body">
                Name
              </label>
              <input
                type="text"
                value={formName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormName(e.target.value)}
                placeholder="Write your name here..."
                className="font-body w-full px-4 py-2.5 rounded-xl border border-[#E3B8C1] focus:outline-none focus:border-[#C98A9A] text-sm bg-white/70"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#8C4A5C] mb-1.5 font-body">
                Your wish for her
              </label>
              <textarea
                rows={3}
                value={formText}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormText(e.target.value)}
                placeholder="Write your heartfelt wish for Reem..."
                className="font-body w-full px-4 py-2.5 rounded-xl border border-[#E3B8C1] focus:outline-none focus:border-[#C98A9A] text-sm bg-white/70 resize-none"
                required
              />
            </div>

            <motion.button
              type="submit"
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.02 }}
              className="font-body w-full py-3 bg-[#8C4A5C] hover:bg-[#7A3F4F] text-white rounded-xl text-sm font-semibold tracking-wide transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>{sent ? "Sent with love 🤍" : "Send with love"}</span>
              {!sent && <Send size={14} />}
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* FINAL SECTION — Ending */}
      <footer
        className="relative py-24 px-6 text-center z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${footerBg})` }}
      >
        <div className="absolute inset-0 bg-white/50 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-xl mx-auto space-y-6"
        >
          <p className="font-body text-sm text-[#8C7A78] font-light tracking-wide">
            And so began our most beautiful story...
          </p>

          <h2 className="font-script text-6xl text-[#BE5E68]">Reem</h2>

          <p className="font-body text-xs text-[#A89896] tracking-widest uppercase">
            August 27, 2026
          </p>

          <p className="font-display italic text-sm text-[#7D6B69] pt-4">
            May God protect her for us and make her one of the happiest of His creation.
          </p>
        </motion.div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;600&family=Nunito:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');

        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-script  { font-family: 'Dancing Script', cursive; }
        .font-body    { font-family: 'Nunito', system-ui, sans-serif; }

        @keyframes fall {
          0% { transform: translateY(-20px) rotate(0deg); opacity: 0.4; }
          100% { transform: translateY(135%) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}