import { motion } from "framer-motion";
import phoneImg from "../../public/imgs/phoneee.png";

interface Props {
  onAnswer: () => void;
}

export default function IncomingCallPage({ onAnswer }: Props) {
  return (
    <div
      dir="rtl"
      className="relative min-h-screen w-full bg-white flex flex-col items-center justify-center px-6 text-center overflow-hidden"
    >
      {/* السماعة معلقة من أعلى الشاشة */}
      <motion.img
        src={phoneImg}
        alt="مكالمة واردة"
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

      {/* باقي المحتوى */}
      <div className=" md:mt-52 flex flex-col items-center">
        {/* مكالمة واردة */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm md:text-base text-[#B0677A] tracking-[0.2em] uppercase mb-4"
        >
          مكالمة واردة
        </motion.p>

        {/* دهب وصلت */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-4xl md:text-5xl font-['Aref_Ruqaa'] text-[#BE5E68] mb-10"
        >
          دهب وصلت
        </motion.h1>

        {/* اضغطي للرد */}
        <motion.button
          onClick={onAnswer}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
          className="
            px-10 py-3.5
            bg-[#BE5E68]
            hover:bg-[#A64D57]
            text-white
            text-base md:text-lg
            font-medium
            rounded-full
            shadow-[0_6px_20px_rgba(190,94,104,0.35)]
            transition-colors
            cursor-pointer
          "
        >
          اضغطي للرد
        </motion.button>
      </div>
    </div>
  );
}