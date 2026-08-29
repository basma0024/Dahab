import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getWishes, Wish } from "../lib/wishesStore";

export default function WishesPage() {
  const [wishes, setWishes] = useState<Wish[]>([]);

  useEffect(() => {
    setWishes(getWishes());
    const handleUpdate = () => setWishes(getWishes());
    window.addEventListener("wishes-updated", handleUpdate);
    window.addEventListener("storage", handleUpdate);
    return () => {
      window.removeEventListener("wishes-updated", handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  return (
    <section dir="rtl" className="py-24 px-6 bg-[#FDF6F7] min-h-screen">
      <div className="max-w-2xl mx-auto space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-['Aref_Ruqaa'] text-[#B0677A] text-center mb-2"
        >
          الأمنيات والمباركات
        </motion.h2>

        <p className="text-sm text-[#9B7C82] text-center mb-8">
          {wishes.length} أمنية من قلوب أحبتنا
        </p>

        {wishes.length === 0 ? (
          <p className="text-center text-sm text-[#B098A0] py-10">
            لسه مفيش أمنيات، كوني أول حد يشارك 🤍
          </p>
        ) : (
          <div className="space-y-3">
            {wishes.map((wish) => (
              <motion.div
                key={wish.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white p-5 rounded-xl border border-[#F0DCE0] space-y-2 shadow-sm"
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-sm text-[#8C4A5C]">
                    {wish.name}
                  </span>
                  <span className="text-[11px] text-[#B098A0]">
                    {wish.date}
                  </span>
                </div>
                <p className="text-sm text-[#6E5D5B] font-light leading-relaxed">
                  {wish.text}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}