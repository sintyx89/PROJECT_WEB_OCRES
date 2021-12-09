import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import Skill from '../components/skills';
import '../index.css';
import FichePokemon from '../containers/FichePokemon';
import FicheBerry from '../containers/FicheBerry';
import FicheItem from '../containers/FicheItem';
import FicheSkill from '../containers/FicheSkill';
import GuideMeteo from '../containers/guideMeteo';
import User from '../components/user';

export default {
  title: 'Widget',
};

export const pokemon = () => <FichePokemon name={'pikachu'} option={true}/>;

export const berry = () => <FicheBerry name={'sitrus'} />;

export const object = () => <FicheItem name={'leftovers'} />;

export const attaque = () => <FicheSkill name={'flamethrower'} />;

export const user = () => <User user={{name:'Margaux', surname:'Mengoni', birthdate:'07/04/1998',badge:'4'}} />;

export const meteo = () => <GuideMeteo city={'Paris'} />;


