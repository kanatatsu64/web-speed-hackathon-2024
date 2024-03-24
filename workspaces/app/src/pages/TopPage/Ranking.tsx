import _ from 'lodash';
import { Suspense } from 'react';

import { RankingCard } from '../../features/ranking/components/RankingCard';
import { useRankingList } from '../../features/ranking/hooks/useRankingList';
import { Box } from '../../foundation/components/Box';
import { Flex } from '../../foundation/components/Flex';

const Ranking: React.FC = () => {
  const { data: rankingList } = useRankingList({ query: {} });

  return (
    <Box maxWidth="100%" overflowX="hidden" overflowY="hidden">
      <Flex align="center" as="ul" direction="column" justify="center">
        {_.map(rankingList, (ranking) => (
          <RankingCard key={ranking.id} bookId={ranking.book.id} />
        ))}
      </Flex>
    </Box>
  );
};

const SuspenseRanking: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <Ranking />
    </Suspense>
  );
};

export { SuspenseRanking as Ranking };
