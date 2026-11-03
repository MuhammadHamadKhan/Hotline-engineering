import { useEffect, useState } from "react";

// The shape of the big box. Photos AND videos both use it, so nothing jumps.
// "4/5" = slightly tall (portrait), "3/4" = more tall, "1/1" = square.
const FRAME_RATIO = "1 / 1";

const ZOOM = 2; // how much a photo grows on hover (2 = double size)

// Finds the video code in a YouTube link (returns null for other links)
function getYouTubeId(url = "") {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
  return match ? match[1] : null;
}

function SearchIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
    </svg>
  );
}

function PlayBadge() {
  return (
    <span className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/65 text-white sm:h-10 sm:w-10">
      <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  );
}

// The big box shows a video or a photo, always in the same shape and place.
// The first small box is the video (if the machine has one), then the photos.
export default function ProductGallery({ images = [], video, videoPoster, name }) {
  const youTubeId = getYouTubeId(video);
  const videoThumb =
    videoPoster || (youTubeId ? `https://img.youtube.com/vi/${youTubeId}/hqdefault.jpg` : images[0]);

  // One list for everything: the video first, then the photos
  const items = [
    ...(video ? [{ type: "video", src: video, thumb: videoThumb }] : []),
    ...images.map((src) => ({ type: "image", src, thumb: src })),
  ];

  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState({ on: false, x: 50, y: 50 });
  const [open, setOpen] = useState(false);
  const current = items[active];
  const isVideo = current?.type === "video";
  const isImage = current?.type === "image";

  // Moves the zoomed area to follow the mouse (mouse only, photos only)
  function handleMove(e) {
    if (!isImage || e.pointerType !== "mouse") return;
    const box = e.currentTarget.getBoundingClientRect();
    setZoom({
      on: true,
      x: ((e.clientX - box.left) / box.width) * 100,
      y: ((e.clientY - box.top) / box.height) * 100,
    });
  }

  // Goes to the next (1) or the previous (-1) item, and starts again at the end
  function go(step) {
    setActive((index) => (index + step + items.length) % items.length);
    setZoom({ on: false, x: 50, y: 50 });
  }

  // Closes the big view with the Escape key and stops the page behind it from scrolling
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div>
      <div
        style={{ aspectRatio: FRAME_RATIO }}
        className={`relative w-full overflow-hidden rounded-2xl border border-border ${
          isVideo ? "bg-black" : "bg-soft"
        } ${isImage ? "cursor-zoom-in" : ""}`}
        onPointerMove={handleMove}
        onPointerLeave={() => setZoom({ on: false, x: 50, y: 50 })}
      >
        {!current && (
          <div className="flex h-full w-full items-center justify-center px-6 text-center text-sm text-muted">
            Product photo coming soon
          </div>
        )}

        {/* Video: fills the whole box */}
        {isVideo &&
          (youTubeId ? (
            <iframe
              key={current.src}
              src={`https://www.youtube-nocookie.com/embed/${youTubeId}`}
              title={`${name}, video`}
              loading="lazy"
              allow="accelerometer; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          ) : (
            <video
              key={current.src}
              src={current.src}
              poster={videoPoster || undefined}
              controls
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full bg-black object-cover"
            >
              Your browser cannot play this video.
            </video>
          ))}

        {/* Photo with hover zoom */}
        {isImage && (
          <>
            <img
              key={current.src}
              src={current.src}
              alt={`${name}, photo`}
              className="h-full w-full object-contain p-3 transition-transform duration-150 ease-out sm:p-6"
              style={{
                transform: zoom.on ? `scale(${ZOOM})` : "scale(1)",
                transformOrigin: `${zoom.x}% ${zoom.y}%`,
              }}
              fetchPriority="high"
              draggable="false"
            />
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="View larger photo"
              className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-ink shadow-sm transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:h-10 sm:w-10"
            >
              <SearchIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </>
        )}

        {/* Previous and next arrows */}
        {items.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous"
              className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white/90 text-ink shadow-sm transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:left-3 sm:h-10 sm:w-10"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next"
              className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white/90 text-ink shadow-sm transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:right-3 sm:h-10 sm:w-10"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </>
        )}
      </div>

      {items.length > 1 && (
        <ul className="mt-3 grid grid-cols-3 gap-2 sm:mt-4 sm:gap-3">
          {items.map((item, index) => (
            <li key={`${index}-${item.src}`}>
              <button
                type="button"
                onClick={() => setActive(index)}
                aria-label={item.type === "video" ? `Play video of ${name}` : `Show photo of ${name}`}
                aria-current={index === active}
                className={`relative block aspect-square w-full overflow-hidden rounded-lg border-2 bg-soft transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  index === active ? "border-accent" : "border-border hover:border-primary/40"
                }`}
              >
                {item.thumb ? (
                  <img
                    src={item.thumb}
                    alt=""
                    loading="lazy"
                    className={`h-full w-full ${item.type === "video" ? "object-cover" : "object-contain p-1.5 sm:p-2"}`}
                  />
                ) : (
                  <span className="block h-full w-full bg-ink" />
                )}
                {item.type === "video" && <PlayBadge />}
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Big view of a photo (opens with the magnifier button) */}
      {open && isImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${name}, large photo`}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 sm:p-8"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close large photo"
            autoFocus
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink shadow-md transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <img
            src={current.src}
            alt={`${name}, large photo`}
            className="max-h-full max-w-full rounded-lg bg-white object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}