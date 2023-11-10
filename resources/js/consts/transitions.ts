import { Fragment } from 'react';

export const transitionOpacity = {
    as: Fragment,
    enter: 'transition-opacity ease-linear duration-300',
    enterFrom: 'opacity-0',
    enterTo: 'opacity-100',
    leave: 'transition-opacity ease-linear duration-300',
    leaveFrom: 'opacity-100',
    leaveTo: 'opacity-0',
};

export const transitionTranslateateX = {
    as: Fragment,
    enter: 'transition ease-in-out duration-300 transform',
    enterFrom: '-translate-x-full',
    enterTo: 'translate-x-0',
    leave: 'transition ease-in-out duration-300 transform',
    leaveFrom: 'translate-x-0',
    leaveTo: '-translate-x-full',
};
