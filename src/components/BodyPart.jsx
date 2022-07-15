import React from 'react'
import {Typography, Stack} from '@mui/material'

import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, bodyPart, setBodyPart}) => {
  return (
    <Stack alignItems="center" justifyItems="center" type="button" className='bodyPart-card' sx={ bodyPart === item ? {
        borderTop: '4px solid #C2000D',
        backgroundColor: '#eee',
        borderBottomLeftRadius: '20px',
        cursor: 'pointer',
        width: '270px',
        height: '280px',
        gap: '48px',
    } :''}>
        <img src={Icon} alt="gym" style={{ width: '40px', height: '40px' }}/>
    </Stack>
  )
}

export default BodyPart