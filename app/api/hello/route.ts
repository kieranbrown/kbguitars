
// Next.js Edge API Route Handlers: https://nextjs.org/docs/app/building-your-application/routing/router-handlers#edge-and-nodejs-runtimes

import type { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const result = await fetch('https://timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam', {
    next: {
      revalidate: 15,
      tags: ['time'],
    }
  });

  const time = await result.json();

  return new Response(JSON.stringify(time))
}
