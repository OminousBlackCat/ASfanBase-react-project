import MailIcon from '@mui/icons-material/Mail'
import HomeIcon from '@mui/icons-material/Home'
import RadioIcon from '@mui/icons-material/Radio'
import ModeIcon from '@mui/icons-material/Mode'
import SettingsIcon from '@mui/icons-material/Settings'
import PersonIcon from '@mui/icons-material/Person'
import InfoIcon from '@mui/icons-material/Info'

export const PublicList = [
  {
    name: 'Home',
    path: '/Home',
    icon: <HomeIcon />
  },
  {
    name: 'Blog',
    path: '/Home/Blog',
    icon: <RadioIcon />
  },
  {
    name: 'Email',
    path: '/Home/Email',
    icon: <MailIcon />
  },
  {
    name: 'Study Materials',
    path: '/Home/StudyMaterials',
    icon: <ModeIcon />
  }
]

export const PersonalList = [
  {
    name: 'Personal Information',
    path: '',
    icon: <PersonIcon />
  },
  {
    name: 'Setting',
    path: '',
    icon: <SettingsIcon />
  },
  {
    name: 'About',
    path: '',
    icon: <InfoIcon />
  }
]
