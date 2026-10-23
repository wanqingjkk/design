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

revoke update on public.queue_tickets from anon, authenticated;
grant update (status) on public.queue_tickets to anon, authenticated;

drop policy if exists "Public can cancel queue tickets" on public.queue_tickets;
create policy "Public can cancel queue tickets"
on public.queue_tickets
for update
to anon, authenticated
using (status = 'scheduled')
with check (status = 'cancelled');

drop policy if exists "Local editor can delete queue tickets" on public.queue_tickets;
create policy "Local editor can delete queue tickets"
on public.queue_tickets
for delete
to anon, authenticated
using (
  encode(
    extensions.digest(
      coalesce(current_setting('request.headers', true)::json ->> 'x-client-info', ''),
      'sha256'
    ),
    'hex'
  ) = 'edb79ad921e994a987dce9b4d5b552f18f74247555bf3d8df8e31f11433fec85'
);

create index if not exists queue_tickets_scheduled_date_idx
on public.queue_tickets (scheduled_date);
