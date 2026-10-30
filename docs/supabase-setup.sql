-- Apple English: database setup for a new Supabase project.
-- Run once in Supabase Dashboard → SQL Editor → New query → Run.
-- Creates the table that lib/sync.ts reads and writes, with Row Level Security
-- so each signed-in user can only see and change their own progress.

create table if not exists public.user_progress (
  user_id           uuid primary key references auth.users (id) on delete cascade,
  xp                integer     not null default 0,
  streak            integer     not null default 0,
  last_active_date  text,
  completed_lessons jsonb       not null default '[]'::jsonb,
  test_scores       jsonb       not null default '{}'::jsonb,
  games_played      integer     not null default 0,
  achievements      jsonb       not null default '[]'::jsonb,
  updated_at        timestamptz not null default now()
);

alter table public.user_progress enable row level security;

drop policy if exists "Users read own progress"   on public.user_progress;
drop policy if exists "Users insert own progress" on public.user_progress;
drop policy if exists "Users update own progress" on public.user_progress;

create policy "Users read own progress"
  on public.user_progress for select
  using (auth.uid() = user_id);

create policy "Users insert own progress"
  on public.user_progress for insert
  with check (auth.uid() = user_id);

create policy "Users update own progress"
  on public.user_progress for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
