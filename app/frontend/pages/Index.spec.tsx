import { render, cleanup } from '@testing-library/react';
import Index from './Index';

afterEach(cleanup);

test('renders without crashing', async () => {
  render(<Index targetLoginUrl="/login" />);
});

