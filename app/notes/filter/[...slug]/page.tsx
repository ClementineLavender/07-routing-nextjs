import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';
import NotesClient from './Notes.client';

interface FilterPageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function FilterPage({ params }: FilterPageProps) {
  const { slug } = await params;
  const slugValue = slug[0];
  const queryClient = new QueryClient();

  const fetchParams: { page: number; perPage: number; tag?: string } = {
    page: 1,
    perPage: 12,
  };

  if (slugValue !== 'all') {
    fetchParams.tag = slugValue;
  }

  await queryClient.prefetchQuery({
    queryKey: ['notes', 0, '', slugValue],
    queryFn: () => fetchNotes(fetchParams),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient initialSlug={slugValue} />
    </HydrationBoundary>
  );
}