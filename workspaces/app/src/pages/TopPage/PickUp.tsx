import _ from 'lodash';
import { Suspense } from 'react';

import { FeatureCard } from '../../features/feature/components/FeatureCard';
import { useFeatureList } from '../../features/feature/hooks/useFeatureList';
import { Box } from '../../foundation/components/Box';
import { Flex } from '../../foundation/components/Flex';
import { Space } from '../../foundation/styles/variables';

const PickUp: React.FC = () => {
  const { data: featureList } = useFeatureList({ query: {} });

  return (
    <Box maxWidth="100%" overflowX="scroll" overflowY="hidden">
      <Flex align="stretch" direction="row" gap={Space * 2} justify="flex-start">
        {_.map(featureList, (feature) => (
          <FeatureCard key={feature.id} bookId={feature.book.id} />
        ))}
      </Flex>
    </Box>
  );
};

const SuspensePickUp: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <PickUp />
    </Suspense>
  );
};

export { SuspensePickUp as PickUp };
