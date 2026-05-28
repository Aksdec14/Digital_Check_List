const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://fusion-edge-backend.vercel.app'

export async function healthCheck(): Promise<{ status: string }> {
  const res = await fetch(`${BASE_URL}/api/health`)
  if (!res.ok) throw new Error(`Health check failed: ${res.status}`)
  return res.json()
}

export async function verifyToken(token: string): Promise<{ valid: boolean; userId?: string }> {
  const res = await fetch(`${BASE_URL}/api/auth/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token }),
  })
  if (!res.ok) throw new Error(`Token verification failed: ${res.status}`)
  return res.json()
}

export async function getUserProfile(token: string): Promise<{
  id: string
  email: string
  name?: string
  imageUrl?: string
}> {
  const res = await fetch(`${BASE_URL}/api/user/me`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  if (!res.ok) throw new Error(`Get user profile failed: ${res.status}`)
  return res.json()
}
