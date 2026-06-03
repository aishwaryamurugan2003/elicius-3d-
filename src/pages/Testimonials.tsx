import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ExternalLink, Youtube, ChevronLeft, ChevronRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";

/* ─── Types ─── */
interface VideoEntry {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
}

/* ─── Hardcoded Videos ─── */
const CHANNEL_URL = "https://www.youtube.com/@eliciusenergy";

const VIDEOS: VideoEntry[] = [
  { id: "WYhnuMzwHnQ", title: "Elicius Energy – Testimonials 1",  url: "https://youtu.be/WYhnuMzwHnQ", thumbnail: "https://img.youtube.com/vi/WYhnuMzwHnQ/mqdefault.jpg" },
  { id: "tAenCvCPuvw", title: "Elicius Energy – Testimonials 2",  url: "https://youtu.be/tAenCvCPuvw", thumbnail: "https://img.youtube.com/vi/tAenCvCPuvw/mqdefault.jpg" },
  { id: "mFtsvjtZn20", title: "Elicius Energy – Testimonials 3",  url: "https://youtu.be/mFtsvjtZn20", thumbnail: "https://img.youtube.com/vi/mFtsvjtZn20/mqdefault.jpg" },
  { id: "imssbkajk68", title: "Elicius Energy – Testimonials 4",  url: "https://youtu.be/imssbkajk68", thumbnail: "https://img.youtube.com/vi/imssbkajk68/mqdefault.jpg" },
  { id: "WKpswh2FjAo", title: "Elicius Energy – Testimonials 5",  url: "https://youtu.be/WKpswh2FjAo", thumbnail: "https://img.youtube.com/vi/WKpswh2FjAo/mqdefault.jpg" },
  { id: "XmO5phPTOjE", title: "Elicius Energy – Testimonials 6", url: "https://youtu.be/XmO5phPTOjE", thumbnail: "https://img.youtube.com/vi/XmO5phPTOjE/mqdefault.jpg" },
  { id: "AlZw6OS_qfQ", title: "Elicius Energy – Testimonials 7",  url: "https://youtu.be/AlZw6OS_qfQ", thumbnail: "https://img.youtube.com/vi/AlZw6OS_qfQ/mqdefault.jpg" },
  { id: "AgEijsKxxzU", title: "Elicius Energy – Testimonials 8",  url: "https://youtu.be/AgEijsKxxzU", thumbnail: "https://img.youtube.com/vi/AgEijsKxxzU/mqdefault.jpg" },
  { id: "kOCA9wIRcDw", title: "Elicius Energy – Testimonials 9", url: "https://youtu.be/kOCA9wIRcDw", thumbnail: "https://img.youtube.com/vi/kOCA9wIRcDw/mqdefault.jpg" },
  { id: "Nmr97k6ohD8", title: "Elicius Energy – Testimonials 10",  url: "https://youtu.be/Nmr97k6ohD8", thumbnail: "https://img.youtube.com/vi/Nmr97k6ohD8/mqdefault.jpg" },
  { id: "v1Tp5mhqODg", title: "Elicius Energy – Testimonials 11",  url: "https://youtu.be/v1Tp5mhqODg", thumbnail: "https://img.youtube.com/vi/v1Tp5mhqODg/mqdefault.jpg" },
  { id: "rwddtRYrv-g", title: "Elicius Energy – Testimonials 12", url: "https://youtu.be/rwddtRYrv-g", thumbnail: "https://img.youtube.com/vi/rwddtRYrv-g/mqdefault.jpg" },
  { id: "FFiaREMnQvQ", title: "Elicius Energy – Testimonials 13", url: "https://youtu.be/FFiaREMnQvQ", thumbnail: "https://img.youtube.com/vi/FFiaREMnQvQ/mqdefault.jpg" },
];

/* ─── Modal ─── */
const VideoModal = ({
  video, onClose, onPrev, onNext, hasPrev, hasNext,
}: {
  video: VideoEntry; onClose: () => void; onPrev: () => void;
  onNext: () => void; hasPrev: boolean; hasNext: boolean;
}) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft"  && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [hasPrev, hasNext, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        style={{ backgroundColor: "rgba(0,0,0,0.85)", backdropFilter: "blur(6px)" }}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.95 }}
          animate={{ opacity: 1, y: 0,  scale: 1    }}
          exit={{   opacity: 0, y: 16,  scale: 0.96 }}
          transition={{ type: "spring", stiffness: 320, damping: 30 }}
          className="bg-background rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden border border-border/30"
        >
          {/* Embed */}
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Info bar */}
          <div className="px-5 py-4 flex items-start justify-between gap-4">
            <h3 className="font-bold text-sm leading-snug line-clamp-2 flex-1 min-w-0">
              {video.title}
            </h3>
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#FF0000]/10 text-[#FF0000] hover:bg-[#FF0000] hover:text-white transition-all"
              >
                <ExternalLink className="w-3 h-3" /> YouTube
              </a>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/70 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Prev / Next */}
          <div className="px-5 pb-4 flex justify-between border-t border-border/20 pt-3">
            <button
              onClick={onPrev}
              disabled={!hasPrev}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-border/40 hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-3.5 h-3.5" /> Previous
            </button>
            <button
              onClick={onNext}
              disabled={!hasNext}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-border/40 hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              Next <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

/* ─── Video Card ─── */
const VideoCard = ({ video, index, onClick }: {
  video: VideoEntry; index: number; onClick: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: (index % 6) * 0.07 }}
    className="group cursor-pointer"
    onClick={onClick}
  >
    <div className="rounded-2xl overflow-hidden border border-border/40 bg-background hover:border-[#FF0000]/40 hover:shadow-lg transition-all duration-300">
      {/* Thumbnail */}
      <div className="relative overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-300">
          <div className="w-12 h-12 rounded-full bg-[#FF0000] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <Play className="w-5 h-5 text-white fill-white ml-0.5" />
          </div>
        </div>
        <div className="absolute top-2.5 right-2.5 flex items-center gap-1 bg-black/70 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-md">
          <Youtube className="w-3 h-3 text-[#FF0000]" /> YouTube
        </div>
      </div>

      {/* WhatsApp-style info */}
      <div className="px-4 py-3 border-t border-border/20">
        <p className="text-[10px] text-[#FF0000] font-bold uppercase tracking-wider mb-1">
          youtube.com · Elicius Energy
        </p>
        <h3 className="text-sm font-bold leading-snug line-clamp-2 group-hover:text-primary transition-colors mb-1">
          {video.title}
        </h3>
        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 mt-2 text-[11px] text-muted-foreground hover:text-[#FF0000] transition-colors"
        >
          <Youtube className="w-3.5 h-3.5 text-[#FF0000]" />
          {video.url}
        </a>
      </div>
    </div>
  </motion.div>
);

/* ─── Page ─── */
const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="section relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="container-wide relative z-10">
          <Breadcrumb items={[{ label: "Testimonials & Videos" }]} />
          <div className="max-w-3xl mx-auto text-center mt-14">
            {/* <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF0000]/10 border border-[#FF0000]/20 text-[#FF0000] text-xs font-bold uppercase tracking-widest mb-8"
            >
              <Youtube className="w-3.5 h-3.5" /> Elicius Energy on YouTube
            </motion.div> */}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6"
            >
              See Our Work <span className="text-primary italic">In Action</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              "See what our participants had to say about the latest IoT, AI/ML workshop. Watch the videos now!"
            </motion.p>

            <motion.a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF0000] text-white font-bold text-sm hover:bg-[#cc0000] transition-colors shadow-lg"
            >
              <Youtube className="w-4 h-4" /> Subscribe on YouTube
            </motion.a>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section section-muted">
        <div className="container-wide">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-sm text-muted-foreground mb-10"
          >
            {VIDEOS.length} videos · Click any card to watch inline
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {VIDEOS.map((video, i) => (
              <VideoCard
                key={video.id}
                video={video}
                index={i}
                onClick={() => setActiveIdx(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {activeIdx !== null && (
        <VideoModal
          video={VIDEOS[activeIdx]}
          onClose={() => setActiveIdx(null)}
          onPrev={() => setActiveIdx((i) => (i !== null && i > 0 ? i - 1 : i))}
          onNext={() => setActiveIdx((i) => (i !== null && i < VIDEOS.length - 1 ? i + 1 : i))}
          hasPrev={activeIdx > 0}
          hasNext={activeIdx < VIDEOS.length - 1}
        />
      )}
    </PageLayout>
  );
};

export default Testimonials;
