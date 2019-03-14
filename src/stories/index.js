/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { storiesOf, action, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { muiTheme } from 'storybook-addon-material-ui';
import { WithNotes } from '@storybook/addon-notes';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import App from '../App';
import Header from '../Header';
import Intro from '../Intro';
import '../App.css';


import {
  Avatar,
  AppBar,Toolbar,Typography,Button,IconButton,MenuIcon,
  Checkbox,
  DatePicker,
  Dialog,
  DropDownMenu,
  FlatButton,
  Drawer,
  MenuItem,
  Paper,
  RadioButton,
  RadioButtonGroup,
  RaisedButton,
  Snackbar,
  Slider,
  Tabs,
  Tab,
  TextField,
  Toggle,
} from 'material-ui';

const reqThemes = require.context('../.themes/', true, /.json/);
const themesList = [];
reqThemes.keys().forEach((filename) => {
    themesList.push(reqThemes(filename));
});

/** note: decorators
 *  You can add decorator globally:
 *  addDecorator(muiTheme(greyTheme));
 *  You can pass a single object or an array of themes
 */


storiesOf('React App', module)
    .addDecorator(muiTheme(themesList)) /* [lightTheme, darkTheme, greyTheme]*/
    .addDecorator(story => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '50%', maxWidth: 500, minWidth: 200 }}>
          {story()}
          {/* SHOW_SUPPORT ? <SupportProject /> : null*/}
        </div>
      </div>
    ))
    .addDecorator(withKnobs)
    .add('App', () => {
        setOptions({
            name: 'React Theming',
            url: 'https://github.com/sm-react/react-theming',
        });
        return (<App />);
    })
    .addWithInfo('App Bar', '<Header />', () => withNote(
      `
        App Bar Component

        source: src/Header.jsx
        story: src/stories
        test: src/tests
      `,

      <div >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Menu"
           >
          </IconButton>
          <RaisedButton primary>{text('Label1', 'Login')}</RaisedButton>
        </Toolbar>
      </AppBar>
    </div>
     ,
    ))
    .addWithInfo('App-intro', '<Intro />', () => withNote(
      `Intro Component
        source: src/Intro.jsx
        story: src/stories
        test: src/tests
      `,
      <Intro />,
    ))
    .add('Addons Knobs & Notes', () => (
      <div>
        {text('Label1', 'Hello Button')}
        {withNote(text('Label2', 'Hello Button'))}
      </div>
    ))

    .add('Button Primary', () => (
      <div style={{padding: "20px"}}>
        <RaisedButton label= {text('Label1', 'Primary Button')} primary />
      </div>
    ))
    .add('Button Secondary', () => (
      <div style={{padding: "20px"}}>
      <RaisedButton label="Secondary button" secondary />
      </div>
     ))
    .add('Button default', () => <RaisedButton label="default button" default />)
    .add('Button disabled', () => <RaisedButton label="disabled button" disabled />)

    .add('All Buttons', () => (
      <div style={{padding: "20px"}}>
      <RaisedButton label="Primary button" primary />
      <br/>  <br/>
      <RaisedButton label="Secondary button" secondary />
      <br/>  <br/>
      <RaisedButton label="default button" default />
      <br/>  <br/>
      <RaisedButton label="disabled button" disabled />
      </div>
  ))




function withNote(note, child) {
    return (
      <WithNotes notes={note}>{child || null}</WithNotes>
    );
}
