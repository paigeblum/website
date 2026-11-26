"use client";

import { useState } from "react";

// Shows a still with a play button. The clip only loads and plays on click,
// so nothing moves until the viewer asks it to.
export default function PlayableVideo({ src, poster, label }: { src: string; poster?: string; label: string }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return <video src={src} poster={poster} aria-label={label} controls autoPlay playsInline />;
  }
  return (
    <button type="button" className="pf-play" onClick={() => setPlaying(true)} aria-label={`Play video: ${label}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {poster && <img src={poster} alt="" />}
      <span className="pf-play-badge pf-mono">
        <span aria-hidden="true">▶</span> Watch
      </span>
    </button>
  );
}
