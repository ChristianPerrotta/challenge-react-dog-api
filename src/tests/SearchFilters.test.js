import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import SearchFilters from '../components/SearchFilters';

test('renders SearchFilters correctly', () => {
    const allBreeds = [{ name: 'Breed1'}, { name: 'Breed2'}];
    const filteredBreed = { name: 'Breed1' };
    const handleBreedSelection = jest.fn();
    const reloadRandomDogs = jest.fn();

    render(
        <SearchFilters
            allBreeds={allBreeds}
            filteredBreed={filteredBreed}
            handleBreedSelection={handleBreedSelection}
            reloadRandomDogs={reloadRandomDogs}
        />
    );

    expect(screen.getByRole('combobox')).toBeInTheDocument();

    const randomDogsButton = screen.getByText('Random dogs');
    expect(randomDogsButton).toBeInTheDocument();

    const notificationMessage = screen.getByText('You can click on a dog image to open a wikipeda article about it!');
    expect(notificationMessage).toBeInTheDocument();
});

test('clicking "Random dogs" button calls reloadRandomDogs function', async () => {
    const reloadRandomDogs = jest.fn();

    const { getByText } = render(
        <SearchFilters 
        allBreeds={[]}
        filteredBreed={{}}
        handleBreedSelection={() => {}}
        reloadRandomDogs={reloadRandomDogs}
        />
    );

    const randomDogsButton = getByText('Random dogs');
    fireEvent.click(randomDogsButton);

    await waitFor(() => {});

    expect(reloadRandomDogs).toHaveBeenCalled();
});