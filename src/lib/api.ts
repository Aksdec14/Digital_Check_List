const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://fusion-edge-backend.vercel.app'

export async function healthCheck(): Promise<{ status: string }> {
  const res = await fetch(`${BASE_URL}/api/health`)
  if (!res.ok) throw new Error(`Health check failed: ${res.status}`)
  return res.json()
}
