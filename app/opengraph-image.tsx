import { ImageResponse } from 'next/og'

export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1a0a66 0%, #3b0fb8 50%, #5227ff 100%)',
        }}
      >
        <svg width="140" height="140" viewBox="0 0 32 32" style={{ marginBottom: 32 }}>
          <circle cx="16" cy="16" r="10" fill="none" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="2.5" />
          <path d="M16 6 A10 10 0 0 1 26 16" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="16" cy="6" r="1.6" fill="#ffffff" />
        </svg>
        <div style={{ display: 'flex', color: '#ffffff', fontSize: 76, fontWeight: 300, letterSpacing: 2 }}>
          Pomodoro Timer
        </div>
        <div style={{ display: 'flex', color: 'rgba(255,255,255,0.65)', fontSize: 30, marginTop: 20 }}>
          Work in focused sprints, rest with intention.
        </div>
      </div>
    ),
    { ...size }
  )
}
