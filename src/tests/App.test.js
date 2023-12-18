import fetchMock from 'jest-fetch-mock';
import { render, act, waitFor } from '@testing-library/react';
import App, { fetchBreeds } from '../App';

test('fetchData and fetchInitialData are called in useEffects upon rendering', async () => {
  fetchMock.mockResponseOnce(JSON.stringify([
    { name: 'Affenpinscher', id: 1 },
    { name: 'Afghan Hound', id: 2 }
  ]));

  await act(async () => {
    render(<App />);
    await waitFor(() => {});
  });

  expect(fetchMock.mock.calls.length).toEqual(2);
})

test('fetchBreeds returns breeds correctly', async () => {
  fetchMock.mockResponse(JSON.stringify([
    { name: 'Affenpinscher', id: 1 },
    { name: 'Afghan Hound', id: 2 }
  ]));

  const breeds = await fetchBreeds();

  expect(breeds).toHaveLength(2);
  expect(breeds[0].name).toBe('Affenpinscher');
  expect(breeds[1].name).toBe('Afghan Hound');
  expect(breeds[1].id).toBe(2);
});