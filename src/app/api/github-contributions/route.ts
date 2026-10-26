import { NextResponse } from 'next/server';

export const revalidate = 1800; // Cache for 30 minutes

export async function GET() {
  const username = 'Abhinavkumar3584';

  try {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`, {
      next: { revalidate: 1800 },
      headers: {
        'User-Agent': 'Portfolio-App',
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch from contributions API: ${res.status}`);
    }

    const data = await res.json();
    return NextResponse.json({
      success: true,
      total: data.total?.lastYear ?? 0,
      contributions: data.contributions ?? [],
    });
  } catch (error) {
    console.error('GitHub contributions fetch error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch contributions',
      },
      { status: 500 }
    );
  }
}
