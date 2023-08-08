import { render, screen, cleanup } from '@testing-library/react';
import Index from './Index';

afterEach(cleanup);

describe('Index', () => {
  it('renders without crashing', async () => {
    render(<Index />);
  });

  it('returns the landing page', async () => {
    const { getByText } = render(<Index />);
    expect(getByText('My App')).toBeInTheDocument();
  });

  it('has a login button', async () => { 
    render(<Index />);
    const loginButton = screen.getByRole('button', { name: /login/i });
    expect(loginButton).toBeInTheDocument();
  });
});

