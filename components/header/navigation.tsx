import {
  Activity,
  Circle,
  ExternalLink,
  FileText,
  Home,
  Music,
  PhoneCall,
  Table,
  Volume2,
} from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={16} />,
    navLink: '/',
  },
  {
    id: 'multimedia',
    title: 'Multimedia',
    icon: <Music size={16} />,
    children: [
      {
        id: 'books',
        title: 'Books',
        icon: <Circle size={13} />,
        navLink: '/multimedia/books',
      },
      {
        id: 'gallery',
        title: 'Gallery',
        icon: <Circle size={13} />,
        navLink: '/multimedia/gallery',
      },
      {
        id: 'audio',
        title: 'Audio',
        icon: <Circle size={13} />,
        navLink: '/multimedia/audio',
      },
      {
        id: 'video',
        title: 'Video',
        icon: <Circle size={13} />,
        navLink: '/multimedia/video',
      },
      {
        id: 'youtube-playlist',
        title: 'Youtube Kath Playlist',
        icon: <Circle size={13} />,
        navLink: '/multimedia/youtube-playlist',
      }
    ],
  },
  {
    id: 'quotes',
    title: 'Quotes',
    icon: <FileText size={16} />,
    navLink: '/quotes',
  },
  {
    id: 'activities',
    title: 'Activities',
    icon: <Activity size={16} />,
    children: [
      {
        id: 'e-aarti',
        title: 'E-Aarti',
        icon: <Circle size={13} />,
        navLink: '/activities/e-aarti',
      },
    ],
  },
  {
    id: 'dham-yatra',
    title: 'Dham यात्रा',
    icon: <Table size={16} />,
    children: [
      {
        id: 'old-yatra',
        title: 'Old Dham Yatra',
        icon: <Circle size={13} />,
        navLink: '/dham-yatra/old-yatra',
      },
      {
        id: 'new-registration',
        title: 'New Dham Yatra register',
        icon: <Circle size={13} />,
        navLink: '/dham-yatra/new-registration',
      },
    ],
  },
  {
    id: 'about',
    title: 'About',
    icon: <Music size={16} />,
    children: [
      {
        id: 'iskcon',
        title: 'ISKCON',
        icon: <Circle size={13} />,
        navLink: '/about/iskcon',
      },
      {
        id: 'srila_prabhupada',
        title: 'Srila Prabhupada',
        icon: <Circle size={13} />,
        navLink: '/about/srila-prabhupada',
      },
      {
        id: 'lord_chaitanya',
        title: 'Lord Chaitanya',
        icon: <Circle size={13} />,
        navLink: '/about/lord-chaitanya',
      },
      {
        id: 'hhgkgm',
        title: 'HH Gopal Krishna Goswami Maharaj',
        icon: <Circle size={13} />,
        navLink: '/about/guru-maharaj',
      },
      {
        id: 'hgpmd',
        title: 'HG Prashant Mukunda Das',
        icon: <Circle size={13} />,
        navLink: '/about/prashant-mukunda',
      },
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    icon: <PhoneCall size={16} />,
    navLink: '/contact',
  },
]
