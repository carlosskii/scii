import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/svelte';
import Header from './Header.svelte';

describe('Header', () => {
  it('should render', () => {
    const { container } = render(Header);

    const header = container.querySelector('header');
    expect(header).toBeTruthy();
  });

  it('should render a title', () => {
    const { container } = render(Header);

    const title = container.querySelector('h1');
    expect(title).toBeTruthy();
  });

  it('should render a login button', () => {
    const { container } = render(Header);

    const loginButton = container.querySelector('button');
    expect(loginButton).toBeTruthy();

    const loginButtonText = loginButton?.textContent;
    expect(loginButtonText).toBe('Login');
  });

  it('should render a logout button once clicked', async () => {
    const { container } = render(Header);

    const loginButton = container.querySelector('button');
    expect(loginButton).toBeTruthy();

    await loginButton?.click();

    const logoutButton = container.querySelector('button');
    expect(logoutButton).toBeTruthy();

    const logoutButtonText = logoutButton?.textContent;
    expect(logoutButtonText).toBe('Logout');
  });
});