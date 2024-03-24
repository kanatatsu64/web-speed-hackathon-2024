import _ from 'lodash';
import moment from 'moment-timezone';
import { Suspense } from 'react';

import { BookCard } from '../../features/book/components/BookCard';
import { useRelease } from '../../features/release/hooks/useRelease';
import { Box } from '../../foundation/components/Box';
import { Flex } from '../../foundation/components/Flex';
import { Space } from '../../foundation/styles/variables';
import { getDayOfWeekStr } from '../../lib/date/getDayOfWeekStr';

const Release: React.FC = () => {
  const todayStr = getDayOfWeekStr(moment());
  const { data: release } = useRelease({ params: { dayOfWeek: todayStr } });

  return (
    <Box maxWidth="100%" overflowX="scroll" overflowY="hidden">
      <Flex align="stretch" gap={Space * 2} justify="flex-start">
        {_.map(release.books, (book) => (
          <BookCard key={book.id} bookId={book.id} />
        ))}
      </Flex>
    </Box>
  );
};

const SuspenseRelease: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <Release />
    </Suspense>
  );
};

export { SuspenseRelease as Release };
