import React from 'react';
import { Grid, GridColumn } from '@progress/kendo-react-grid';

const DogGrid = ({ dogData }) => {

  function wikiUrl(breedName) {
    // this is to treat the few breed names that don't yield direct
    // wikipedia urls unless adjusted
    if ([
          "Akita", "Barbet", "Boxer", "Brittany",
          "Chinook", "Dalmatian", "Harrier", "Pumi",
          "Saint Bernard", "Samoyed"
        ].includes(breedName)) {
      return (breedName + "_(dog)");
    }

    if ([
        "Havanese", "Maltese", "Newfoundland",
        "Papillon", "Pomeranian", "Puli"
      ].includes(breedName)) {
      return (breedName + "_dog");
    }

    if (breedName === "American Eskimo Dog (Miniature)") return "American_Eskimo_Dog";
    if (breedName === "Caucasian Shepherd (Ovcharka)") return "Caucasian_Shepherd_Dog";
    if (breedName === "Cocker Spaniel (American)") return "American_Cocker_Spaniel";
    
    return breedName;
  }

  return (
    <div className='container overflow-x-auto'>
      <Grid data={dogData} scrollable='none'>
        <GridColumn field="name" title="Name"
            cell={(props) => (
            <td style={{textAlign: "center"}}>
              <a href={"https://en.wikipedia.org/wiki/" + wikiUrl(props.dataItem.name).replace(" ", "_")}
              target="_blank">
                <img src={props.dataItem.imgUrl} alt="Image" style={{width: 100 + "px"}}
                className='rounded'/>
              </a>
                <p>{props.dataItem.name}</p>
            </td>
            )}
        />
        <GridColumn field="height.metric" title="Height (cm)"/>
        <GridColumn field="weight.metric" title="Weight (kg)"/>
        <GridColumn field="life_span" title="Lifespan"/>
        <GridColumn field="temperament" title="Temperament"/>
      </Grid>
    </div>
  );
}

export default DogGrid;