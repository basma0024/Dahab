// src/pages/IncomingCallPage.tsx
import { motion } from "framer-motion";
import phoneImg from "../../public/imgs/phoneee.png";

interface Props {
  onAnswer: () => void;
}

export default function IncomingCallPage({ onAnswer }: Props) {
  return (
    <div
      dir="ltr"
      className="font-body relative min-h-screen w-full bg-white flex flex-col items-center justify-center px-6 text-center overflow-hidden"
    >
      {/* Phone handset hanging from the top */}
      <motion.img
        src={phoneImg}
        alt="Incoming call"
        initial={{ opacity: 0, y: -60 }}
        animate={{
          opacity: 1,
          y: 0,
          rotate: [0, -6, 6, -4, 4, 0],
        }}
        transition={{
          opacity: { duration: 0.8, ease: "easeOut" },
          y: { duration: 0.8, ease: "easeOut" },
          rotate: {
            duration: 1.8,
            repeat: Infinity,
            repeatDelay: 0.5,
            ease: "easeInOut",
            delay: 0.8,
          },
        }}
        style={{ transformOrigin: "top center" }}
        className="absolute top-0 w-28 md:w-36 drop-shadow-lg"
      />

      {/* Content */}
      <div className="md:mt-52 flex flex-col items-center">
        {/* Incoming call label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-xs md:text-sm font-semibold text-[#B0677A] tracking-[0.3em] uppercase mb-4"
        >
          Incoming Call
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-script text-4xl md:text-5xl text-[#BE5E68] leading-tight mb-10"
        >
          Reem Has Arrived
        </motion.h1>

        {/* Answer button */}
        <motion.button
          onClick={onAnswer}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
          className="
            font-body
            px-10 py-3.5
            bg-[#BE5E68]
            hover:bg-[#A64D57]
            text-white
            text-base md:text-lg
            font-semibold
            tracking-wide
            rounded-full
            shadow-[0_6px_20px_rgba(190,94,104,0.35)]
            transition-colors
            cursor-pointer
          "
        >
          Tap to Answer
        </motion.button>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;600&family=Nunito:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');

        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-script  { font-family: 'Dancing Script', cursive; }
        .font-body    { font-family: 'Nunito', system-ui, sans-serif; }
      `}</style>
    </div>
  );
}