import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#3b0fb8',
          borderRadius: 40,
        }}
      >
        <svg width="120" height="120" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="10" fill="none" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="3" />
          <path d="M16 6 A10 10 0 0 1 26 16" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
          <circle cx="16" cy="6" r="1.6" fill="#ffffff" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
