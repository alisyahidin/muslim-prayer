import React from 'react'
import PlaceIcon from '@material-ui/icons/Place'
import LanguageIcon from '@material-ui/icons/Language'
import PersonIcon from '@material-ui/icons/Person'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'

export default [
  {
    name: 'Location',
    icon: className => <PlaceIcon className={className} />
  },
  {
    name: 'Method',
    icon: className => <LanguageIcon className={className} />
  },
  {
    name: 'Muadzin',
    icon: className => <PersonIcon className={className} />
  },
  {
    name: 'Info',
    icon: className => <InfoOutlinedIcon className={className} />
  },
]