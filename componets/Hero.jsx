import Link from "next/link"

export default function Hero() {
  return (
    <div id="hero">
      <div id="hero-img">
        <img src="../public/heropipe.jpg" alt="En gruppe barn ser smilende inn i kamera" />
      </div>
      <div className="hero-box" id="point">
        <span id="point-title">Poeng:</span>
        <span id="point-value">50</span>
      </div>
      <div className="hero-box" id="foot">
        <img src="/utpaatur.gif" />
      </div>
      <div className="hero-box" id="high-score">
        high score list
      </div>
    </div>
  )
}
