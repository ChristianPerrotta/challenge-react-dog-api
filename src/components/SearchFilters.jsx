import React, { useState } from 'react';
import { ComboBox } from '@progress/kendo-react-dropdowns';
import { Button } from '@progress/kendo-react-buttons';
import { Notification, NotificationGroup } from '@progress/kendo-react-notification';
import { Fade } from '@progress/kendo-react-animation';

const SearchFilters = ({ allBreeds, filteredBreed, handleBreedSelection, reloadRandomDogs }) => {
    const [showAlert, setShowAlert ] = useState(true);

    return (
        <div className='container'>
            <div className='row justify-content-center gy-3 my-4'>
                <div className='col col-auto'>Breed:</div>
                <div className='col col-auto'>
                    <ComboBox
                        value={filteredBreed.name}
                        placeholder="Select a breed..."
                        data={allBreeds.map(breed => breed.name)}
                        onChange={handleBreedSelection}
                    />
                </div>
                <div className='col col-auto'>
                    <Button
                        themeColor={"primary"}
                        onClick={reloadRandomDogs}>
                            Random dogs
                    </Button>
                </div>
            </div>
            <NotificationGroup
                style={{
                    right: 10,
                    bottom: 10,
                    alignItems: 'flex-start',
                    flexWrap: 'wrap-reverse'
                }}
            >
                <Fade>
                    {showAlert && <Notification
                                    id="close-notification"
                                    type={{ style: 'success', icon: true}}
                                    closable={true}
                                    onClose={() => setShowAlert(false)}
                                  >
                            <span>You can click on a dog image to open a wikipeda article about it!</span>
                        </Notification>}
                </Fade>

            </NotificationGroup>
        </div>
    )
  
}

export default SearchFilters