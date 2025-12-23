-- Optional schema for the full platform (Supabase)
-- Note: Supabase already provides auth.users. You can link your app users via user_id (uuid).

create table if not exists public.teams (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  join_code text unique not null,
  created_at timestamptz default now()
);

create table if not exists public.team_members (
  team_id uuid references public.teams(id) on delete cascade,
  user_id uuid not null,
  role text default 'student',
  created_at timestamptz default now(),
  primary key (team_id, user_id)
);

create table if not exists public.submissions (
  id uuid primary key default gen_random_uuid(),
  team_id uuid references public.teams(id) on delete cascade,
  case_slug text not null,
  artifact_type text not null, -- dataset_card, baseline_report, stress_test, explainability_pack, poster
  title text,
  storage_path text, -- Supabase Storage object path
  url text,          -- optional public link
  notes text,
  created_at timestamptz default now()
);

create table if not exists public.badges (
  id uuid primary key default gen_random_uuid(),
  team_id uuid references public.teams(id) on delete cascade,
  case_slug text not null,
  badge text not null,
  created_at timestamptz default now(),
  unique(team_id, case_slug, badge)
);

-- RLS is recommended; policies omitted in template for simplicity.
