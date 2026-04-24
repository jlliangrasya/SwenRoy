import confetti from 'canvas-confetti'

export function fireConfetti() {
  confetti({ particleCount: 70, spread: 90, origin: { y: 0.4 } })
}
