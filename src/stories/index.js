import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import PokeDexColumns from '../components/web/Demos/PokeDexDemo/PokeColumns';

storiesOf('Poke Dex Components', module)
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)
  .add('Poke Columns', () => 
    <PokeDexColumns
      PokeMon={poke.PokeMon}
      PokeImage={poke.PokeImage}
      viewStats={poke.viewStats}
      viewStatsButton={poke.viewStatsButton}
      addPokeMon={poke.addPokeMon}
      viewComponent={poke.viewComponent}
      pokeMonNameStyle={poke.pokeMonNameStyle}
      addButtonStyles={poke.addButtonStyles}
      segmentMove={poke.segmentMove}
    /> 
  );

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
