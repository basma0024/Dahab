import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import HomePage from './pages/HomePage';
import PageTransition from './components/PageTransition';
import WishesPage from "./pages/WishesPage";
import IncomingCallPage from "./pages/IncomingCallPage";

const CALL_ANSWERED_KEY = "dahab_call_answered";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow">
        <PageTransition>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/wishes" element={<WishesPage />} />
          </Routes>
        </PageTransition>
      </main>
    </div>
  );
}

// المكون ده لازم يكون جوه الـ Router عشان يقدر يستخدم useLocation
function CallOverlay({ answered, onAnswer }: { answered: boolean; onAnswer: () => void }) {
  const { pathname } = useLocation();

  // متظهرش خالص لو مش على الصفحة الرئيسية (زي /wishes)
  const shouldShow = !answered && pathname === "/";

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed inset-0 z-[100]"
        >
          <IncomingCallPage onAnswer={onAnswer} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function App() {
  const [answered, setAnswered] = useState(true);
  const [checked, setChecked] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // sessionStorage بيتصفر تلقائيًا لما التاب/المتصفح يتقفل
    // فكل زيارة جديدة (تاب جديد أو فتح تاني) هتظهرلها المكالمة تاني
    // لكن أي ريفريش لنفس التاب مش هيعيدها
    const alreadyAnswered = sessionStorage.getItem(CALL_ANSWERED_KEY) === "true";
    setAnswered(alreadyAnswered);
    setChecked(true);
  }, []);

  useEffect(() => {
    audioRef.current = new Audio('/imgs/song.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;
    audioRef.current.play().catch(() => {});
  }, []);

  const handleAnswer = () => {
    sessionStorage.setItem(CALL_ANSWERED_KEY, "true");
    setAnswered(true);
  };

  if (!checked) {
    return <div className="min-h-screen bg-white" />;
  }

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/*" element={<AppLayout />} />
      </Routes>

      <CallOverlay answered={answered} onAnswer={handleAnswer} />
    </Router>
  );
}

export default App;