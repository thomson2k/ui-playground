import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { StatsSegments } from '@/components/StatsSegment/StatsSegment';
import Demo from '@/components/Demo'
import TableSelection from '@/components/TableSelection/TableSelection'

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <StatsSegments />
      <Demo />
      <TableSelection />
    </>
  );
}
