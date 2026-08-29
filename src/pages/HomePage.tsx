// src/pages/HomePage.tsx (أو حسب مسار الملف لديك)
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Heart, 
  Star, 
  Calendar, 
  Clock, 
  Scale, 
  Ruler, 
  Send, 
  Maximize2, 
  X,
  ChevronDown
} from 'lucide-react';
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
import phoneImg from "../../public/imgs/phoneee.png";


interface Props {
  onAnswer: () => void;
}

const stats = [
  { label: "الميلاد", value: "١٨ يوليو ٢٠٢٦" },
  { label: "الوقت", value: "١٠:٤٢ صباحاً" },
  
  { label: "العيون", value: "بني" },
  { label: "الشعر", value: "بني" },
];

const polaroids = [
  { src: dahab1, rotate: -8, x: 0 },
  { src: dahab2, rotate: 3, x: 0 },
  { src: dahab3, rotate: 9, x: 0 },
];

// الأنواع الخاص بالمكون
interface Wish {
  id: number;
  name: string;
  text: string;
  date: string;
}

interface SelectedImage {
  url: string;
  caption?: string;
}



export default function HomePage() {




  
  // const [wishes, setWishes] = useState<Wish[]>(() => {
  //   const saved = localStorage.getItem('baby_wishes');
  //   return saved ? JSON.parse(saved) : [
  //     { id: 1, name: "خالة سارة", text: "يا روح قلب خالتك، نورتِ الدنيا! الله يحفظك ويجعل أيامك كلها سعادة وفرح.", date: "منذ ساعة" },
  //     { id: 2, name: "عمو أحمد", text: "ألف مبروك ماما وبابا، تتربى بعزكم ودلالكم يارب.", date: "منذ ساعتين" }
  //   ];
  // });

const [formName, setFormName] = useState<string>('');
const [formText, setFormText] = useState<string>('');
const [sent, setSent] = useState(false);

const handleAddWish = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (!formName.trim() || !formText.trim()) return;

  addWish(formName.trim(), formText.trim());

  setFormName('');
  setFormText('');
  setSent(true);
  setTimeout(() => setSent(false), 3000);
};

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };







  
  return (
    <div dir="rtl" className="min-h-screen bg-[#FAF7F2] text-[#4A3E3D] font-sans antialiased selection:bg-[#E2C2C6]/30 overflow-x-hidden">
      
      {/* Background Floating Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
        <div className="absolute top-[10%] right-[5%] text-[#E2C2C6] animate-pulse"><Sparkles size={20} /></div>
        <div className="absolute top-[35%] left-[8%] text-[#D8A7B1] opacity-60"><Star size={14} /></div>
        <div className="absolute top-[60%] right-[12%] text-[#E2C2C6]"><Heart size={16} /></div>
        <div className="absolute top-[80%] left-[15%] text-[#D8A7B1] opacity-50"><Sparkles size={18} /></div>
      </div>

    

<section
  dir="rtl"
  className="relative min-h-screen flex flex-col items-center justify-center text-center  bg-white"
>
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="relative z-10 w-full max-w-sm mx-auto flex flex-col items-center justify-center bg-white  px-6 py-10"
  >
    {/* العنوان الرئيسي */}
    <motion.h1
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
      className="
        text-4xl md:text-5xl
        text-[#BE5E68]
        font-['Aref_Ruqaa']
        leading-relaxed
        mb-3
      "
    >
      أهلاً بكِ يا دهب
    </motion.h1>

    {/* الجملة الفرعية */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.5 }}
      className="
        text-base md:text-lg
        text-[#8C8378]
        font-medium
        tracking-wide
        mb-8
        font-['Tajawal']
      "
    >
      بداية حياة جديدة مليئة بالحب
    </motion.p>

    {/* الصورة */}
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className="
        relative w-full 
         mb-8
      "
    >
      <img
        src={dahabImg}
        alt="دهب"
        className="w-full h-full object-cover"
      />
    </motion.div>

    {/* الكابشن */}
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 1 }}
      className="
        text-xl md:text-xl
        text-[#BE5E68]
        font-medium
        tracking-wide
        font-['Tajawal']
      "
    >
      كنزنا الصغير
    </motion.p>
  </motion.div>
</section>








<section
  dir="rtl"
  className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-[#FDFBF8]"
     style={{
    backgroundImage: `url(${heroImg})`,
  }}
>
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="relative z-10 w-full max-w-sm mx-auto flex flex-col items-center bg-white rounded-[2rem] shadow-[0_8px_40px_rgba(0,0,0,0.06)] px-7 py-10"
  >
    {/* العنوان */}
    <motion.h1
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
      className="
        text-3xl md:text-xl
        text-[#be5e68]
        font-medium
        tracking-wide
        mb-9
        flex items-center gap-2
        font-['Aref_Ruqaa']
      "
    >
      تعرفوا على دهب
      <span className="text-2xl">♡</span>
    </motion.h1>

    {/* الصفوف */}
    <div className="w-full flex flex-col">
      {stats.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 + i * 0.15, ease: "easeOut" }}
          className="flex items-baseline justify-between border-b border-[#EDE7E0] py-3"
        >
          <span
            className="
              text-lg md:text-xl
              text-[#be5e68]
              font-['Aref_Ruqaa']
            "
          >
            {item.label}
          </span>
          <span
            className="
              text-base md:text-lg
              text-[#be5e68]
              font-light
              tracking-wide
              font-['Tajawal']
            "
          >
            {item.value}
          </span>
        </motion.div>
      ))}
    </div>

    {/* الصورة */}
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 1.5, ease: "easeOut" }}
      whileHover={{ scale: 1.05, rotate: -2 }}
      className="w-32 md:w-40 mt-8"
    >
      <img
        src={babyToy}
        alt="دهب"
        className="w-full h-full object-contain "
      />
    </motion.div>

   
  </motion.div>
</section>










    


     






<section
  dir="rtl"
  className="relative min-h-screen flex flex-col items-center justify-center  bg-[#FDFBF8] "
     style={{
    backgroundImage: `url(${bg})`,
  }}
>
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="relative z-10 w-full max-w-sm mx-auto flex flex-col items-center   px-6 pt-10 pb-8"
  >
    {/* العنوان */}
    <motion.h1
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
      className="
        text-3xl md:text-4xl
        text-[#be5e68]
        font-['Aref_Ruqaa']
        mb-6
      "
    >
صغيرتنا الحبيبة    </motion.h1>

    {/* نص الرسالة */}
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
      className="
        text-base md:text-lg
        text-[#be5e68df]
        font-medium
        leading-loose
        text-center
        mb-10
        font-['Tajawal']
      "
    >
      {/* <p className="mb-2">حبيبتنا دهب،</p> */}
      <p>
لم نكن نعرف أن القلب يمكن أن يتسع لهذا القدر من الحب حتى جئتِ أنتِ...
نسأل الله أن يحفظكِ لنا، وأن يجعل أيامكِ القادمة أجمل مما نتمنى، وأن نراكِ تكبرين أمام أعيننا عامًا بعد عام.
      </p>
    </motion.div>

    {/* الصور بولارويد */}
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
        transition={{
          duration: 0.8,
          delay: 0.9 + i * 0.25,
          ease: "easeOut",
        }}
        whileHover={{ scale: 1.06, rotate: 0, zIndex: 10 }}
        className="
          bg-white
          p-2.5 pb-6
          rounded-[4px]
          shadow-[0_6px_20px_rgba(0,0,0,0.15)]
          w-44 md:w-52
        "
      >
        <div className="w-full aspect-[3/4] overflow-hidden rounded-[2px]">
          <img
            src={p.src}
            alt="دهب"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  ))}
</div>
   
  </motion.div>
</section>




<section
  dir="rtl"
  className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-16 overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${pinkBgImg})`,
  }}
>
  {/* تظليل خفيف عشان النص يبان أوضح */}
  <div className="absolute inset-0 bg-white/20 pointer-events-none" />

  <motion.div
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.3, ease: "easeOut" }}
    className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center justify-center"
  >
    {/* دعاء */}
    <motion.p
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, delay: 0.3, ease: "easeOut" }}
      className="
        text-2xl md:text-2xl
        text-[#9B5B6B]
        font-['Aref_Ruqaa']
        leading-loose
        tracking-wide
        drop-shadow-[0_2px_6px_rgba(255,255,255,0.6)]
      "
    >
      اللهم أنبتها نباتًا حسنًا،
      <br />
      واحفظها بعينك التي لا تنام،
      <br />
      واجعلها قرة عينٍ لنا،
      <br />
      وارزقها عمرًا جميلًا وقلبًا مطمئنًا
      <br />
      وحياةً مليئة بالخير
    </motion.p>

    {/* توقيع صغير تحت */}
   
  </motion.div>
</section>


<section className="py-24 px-6 bg-[#FDF6F7] z-10 relative">
  <div className="max-w-3xl mx-auto space-y-8">
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="text-center space-y-3 mb-14 "
    >
      <h2 className="text-3xl md:text-4xl font-['Aref_Ruqaa'] text-[#B0677A]">
        شاركونا حبكم
      </h2>
      <p className="text-sm text-[#9B7C82] font-['Tajawal']">
        اتركوا لصغيرتنا أمنية تحملها معها في بداية حياتها
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
        alt="بيبرونة"
        initial={{ opacity: 0, rotate: -20, scale: 0.7 }}
        animate={{ opacity: 1, rotate: -10, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="absolute -top-9 left-6 w-20 md:w-14 drop-shadow-md"
      />

      <h3 className="text-xl md:text-2xl font-['Aref_Ruqaa'] text-[#8C4A5C] mb-2">
        اتركوا أمنية صغيرة
      </h3>

      <div>
        <label className="block text-xs font-medium text-[#8C4A5C] mb-1.5 font-['Tajawal']">
          الاسم
        </label>
        <input
          type="text"
          value={formName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormName(e.target.value)}
          placeholder="اكتب اسمك هنا..."
          className="w-full px-4 py-2.5 rounded-xl border border-[#E3B8C1] focus:outline-none focus:border-[#C98A9A] text-sm bg-white/70"
          required
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-[#8C4A5C] mb-1.5 font-['Tajawal']">
          أمنيتك لها
        </label>
        <textarea
          rows={3}
          value={formText}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormText(e.target.value)}
          placeholder={`اكتب أمنيتك الصادقة لـ دهب...`}
          className="w-full px-4 py-2.5 rounded-xl border border-[#E3B8C1] focus:outline-none focus:border-[#C98A9A] text-sm bg-white/70 resize-none"
          required
        />
      </div>

      <motion.button
        type="submit"
        whileTap={{ scale: 0.96 }}
        whileHover={{ scale: 1.02 }}
        className="w-full py-3 bg-[#8C4A5C] hover:bg-[#7A3F4F] text-white rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm font-['Tajawal']"
      >
        <span>{sent ? "تم الإرسال بحب 🤍" : "أرسلوها بحب"}</span>
        {!sent && <Send size={14} />}
      </motion.button>
    </motion.form>
  </div>
</section>
  


     

      {/* FINAL SECTION — Ending */}
      <footer
  className="relative py-24 px-6 text-center z-10 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${footerBg})`,
  }}
>
  {/* تظليل خفيف عشان النص يبان أوضح فوق الخلفية */}
  <div className="absolute inset-0 bg-white/50 pointer-events-none" />

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    className="relative z-10 max-w-xl mx-auto space-y-6"
  >
    <p className="text-sm text-[#8C7A78] font-light font-['Tajawal']">
      وهكذا بدأت أجمل حكاياتنا...
    </p>

    <h2 className="text-4xl font-['Aref_Ruqaa'] text-[#BE5E68]">
      دهب
    </h2>

    <p className="text-xs text-[#A89896] font-['Tajawal'] ">
      27 أغسطس 2026
    </p>

    <p className="text-sm text-[#7D6B69] italic pt-4 font-['Tajawal']">
      اللهم احفظها لنا واجعلها من أسعد خلقك.
    </p>

  
  </motion.div>
</footer>



<style>{`
    @keyframes fall {
      0% { transform: translateY(-20px) rotate(0deg); opacity: 0.4; }
      100% { transform: translateY(135%) rotate(360deg); opacity: 0; }
    }
`}</style>

    </div>
  );
}