import React from 'react';
import { render } from '@testing-library/react';
import useTabVisibility from './index';

const isVisibleTestId = 'isVisible';

const App: React.FC = () => {
  const { visible } = useTabVisibility();

  return <div data-testid={isVisibleTestId} data-visible={visible} />;
};

test('detects visibility', async () => {
  const { getByTestId } = render(<App />);

  const el = getByTestId(isVisibleTestId);

  expect(el.dataset.visible).toBe('true');
});
