create table if not exists public.queue_tickets (
  id uuid primary key default gen_random_uuid(),
  ticket_no text not null unique check (ticket_no ~ '^Q-[0-9]{4}-[0-9]{2}$'),
  requester text not null check (char_length(requester) between 1 and 40),
  task_name text not null check (char_length(task_name) between 1 and 120),
  scheduled_date date not null unique,
  status text not null default 'scheduled' check (status in ('scheduled', 'completed', 'cancelled')),
  created_at timestamptz not null default now()
);

alter table public.queue_tickets enable row level security;

drop policy if exists "Public can read queue tickets" on public.queue_tickets;
create policy "Public can read queue tickets"
on public.queue_tickets
for select
to anon, authenticated
using (true);

drop policy if exists "Public can take a queue ticket" on public.queue_tickets;
create policy "Public can take a queue ticket"
on public.queue_tickets
for insert
to anon, authenticated
with check (
  status = 'scheduled'
  and scheduled_date >= current_date
  and extract(isodow from scheduled_date) between 1 and 5
);

create index if not exists queue_tickets_scheduled_date_idx
on public.queue_tickets (scheduled_date);
