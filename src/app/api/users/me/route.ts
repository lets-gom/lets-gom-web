import { NextRequest, NextResponse } from 'next/server';

import { User } from '@/entities/user';

export async function GET(_: NextRequest) {
  return NextResponse.json<User>({
    id: 1,
    account: undefined,
    name: 'user',
    agreement: {},
    avatar: {
      id: 1,
      type: 'BEAR',
      emotion: 'HAPPY',
      accessories: [],
    },
    badges: [],
    routines: [],
    tasks: [],
    friends: [],
    events: [],
  });
}
