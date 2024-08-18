import { NextRequest, NextResponse } from 'next/server';

import { Routine } from '@/entities/routine';
import supabase from '@/frameworks/supabase';
import { Database } from '@/frameworks/supabase/types';

export async function GET(
  _: NextRequest,
  { params }: { params: { routineId: string } },
) {
  const routineId = params.routineId;
  const { data } = await supabase
    .from('routines')
    .select()
    .eq('id', routineId)
    .single();

  if (!data) {
    return NextResponse.json({ message: 'Routine Not found' }, { status: 404 });
  }

  return NextResponse.json<Routine>(entitize(data));
}

const entitize = (
  data: Database['public']['Tables']['routines']['Row'],
): Routine => ({
  id: data.id,
  category: undefined,
  name: data.name,
  state: data.state as Routine['state'],
  startDate: data.start_date,
  endDate: data.end_date,
  startTime: data.start_time,
  duration: data.duration,
  schedule: data.schedule as unknown as Routine['schedule'],
  tasks: [],
});
