import styled from 'styled-components'
import { transparentize } from 'polished'

const COLOR = {
    red: '#F84735',
    primary: '#0099FF',
    foreground: '#508AC9'
}

const THEME = {

    danger:{
        bg: '#F84735',
        color: '#FFFFFF',
        onHover: `
        box-shadow: 0 3px 6px rgba(0,0,0,.2);
        `,
    disabled: {
        color: COLOR.red,
        bg: transparentize(0.75, COLOR.red)
    }
    },

    primary:{
        bg: '#0099FF',
        color: '#FFFFFF',
        onHover: `
        box-shadow: 0 3px 6px rgba(0,0,0,.2);
        `,
        disabled: {
            color: '#FFFFFF',
            bg: transparentize(0.44, COLOR.primary)
        }
    },

    text:{
        bg: 'transparent',
        color: '#274060', 
        onHover: `
        border-color: #274060;
        `,
        disabled: {
            color: COLOR.foreground,
            bg: transparentize(0.44, COLOR.foreground )
        }
    }
}

export const Wraper = styled.button<{
    variant: 'danger' | 'primary' | 'text'
}>`

padding:  6px 8px 4px;
border: 1px solid ${p => THEME[p.variant].bg};

color: ${p => THEME[p.variant].color};
background-color: ${p => THEME[p.variant].bg};

&:hover,
&:focus {
    ${p=> THEME[p.variant].onHover}
}

&:disabled{
    background-color: ${p=> THEME[p.variant].disabled.bg};
    color: ${p=> THEME[p.variant].disabled.color};

    pointer-events: none;
    border-color: transparent;
}

`