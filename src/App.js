import React, { useEffect, useState } from 'react';
import DogGrid from './components/DogGrid';
import SearchFilters from './components/SearchFilters';
import LoaderElement from './components/Loader';

export const fetchBreeds = async () => {
  const response = await fetch('https://api.thedogapi.com/v1/breeds')
  if (!response.ok) {
    throw new Error("HTTP error! Satus " + response.status)
  }
  const data = await response.json();
  return data.map(dog => ({name: dog.name, id: dog.id}));
}

function App() {
  
  const apiUrl = 'https://api.thedogapi.com/v1/images/search';
  const apiKey = process.env.REACT_APP_DOG_API_KEY;

  const [ dogData, setDogData ] = useState([]);
  const [ allBreeds, setAllBreeds ] = useState([{}]);
  const [ filteredBreed, setFilteredBreed ] = useState({name: null, id: null});
  const [ searchLimit, setSearchLimit ] = useState(20);
  const [ loading, setLoading ] = useState(true);

  function handleBreedSelection(event) {
    let selectedBreed = event.target.value;
    let breedObj = allBreeds.find(breed => breed.name === selectedBreed)

    if(breedObj) {
      setFilteredBreed(breedObj);
      setSearchLimit(1);
    } else {
      setFilteredBreed({name: null, id: null});
      setSearchLimit(20);
    }
  }

  function reloadRandomDogs() {
    setFilteredBreed({name: null, id: null});
    setSearchLimit(20);
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      let breedQuery = "";
      if (filteredBreed.id) {
        breedQuery = "&breed_ids=" + filteredBreed.id
      }
      try {
        const response = await fetch(
          apiUrl
          + "?has_breeds=1"
          + "&limit=" + searchLimit
          + breedQuery, {
            headers: {
              'x-api-key': apiKey
            }
        })
        if (!response.ok) {
          throw new Error("HTTP error! Satus " + response.status)
        }
        const data = await response.json();
        const dogs = data ? data.map((dog) => {
          let dogs = dog.breeds[0]
          dogs.imgUrl = dog.url
          return dogs
        }) : [];
        setDogData(dogs);
      } catch (error) {
        console.log('Error fetching data: ', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, [apiKey, apiUrl, filteredBreed])

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const breedsObtained = await fetchBreeds();
        setAllBreeds(breedsObtained);
        setSearchLimit(breedsObtained.length)
      } catch (error) {
        console.log('Error fetching data: ', error.message);
      }
    };

    fetchInitialData();
  }, [])

  return (
    <>
        <h1 className='py-3 text-center bg-dark text-light'>Let's get to know some dogs!</h1>
        <div className="container text-center mb-4">
          <h3 className='mt-4'>What kind of dogs are you looking for?</h3>
          <p className='my-2'>
            (If nothing is selected, the grid will show a selection of 20 random dogs)
          </p>
          <SearchFilters
            allBreeds={allBreeds}
            filteredBreed={filteredBreed}
            handleBreedSelection={handleBreedSelection}
            reloadRandomDogs={reloadRandomDogs}
          />
          {loading ? <LoaderElement /> :  <DogGrid dogData={dogData} />}
      </div>
    </>
  );
}

export default App;