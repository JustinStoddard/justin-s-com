import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import styles from '../components/web/Demos/PokeDexDemo/PokeDexDemoIndex'
import { text, boolean, object, array, number } from '@storybook/addon-knobs';
//Dont use an array if you are expecting an array of objects, use object so it doesnt break.

import PokeDexColumns from '../components/web/Demos/PokeDexDemo/PokeColumns';

storiesOf('Poke Dex Components', module)
  .add('Poke Columns', () => 
    <div style={Styles}>
      <PokeDexColumns
        PokeMon={text("PokeMon", "Pikachu")}
        PokeImage={text("PokeImage", "Image")}
        viewStats={boolean("viewStats", true)}
        viewStatsButton={action("View Stats")}
        addPokeMon={action("Added PokeMon")}
        viewComponent={boolean("viewComponent", true)}
        pokeMonNameStyle={object("pokeMonNameStyle", styles.pokeMonName)}
        addButtonStyles={object("addButtonStyle", styles.addButtonStyles)}
        segmentMove={object("segmentMove", styles.segmentMove1)}
      /> 
    </div>
  );

  const Styles = {
    height: '400px',
    width: '300px'
  }
