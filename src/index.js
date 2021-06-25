import 'normalize.css';
import './style.css';

// https://color.adobe.com/trends
const colorSets = [
  { // 1
    primary: '#38593d',
    secondary: '#8c6a56',
    tertiary: '#2d3940',
    quaternary: '#0d0d0d',
    textPrimary: '#dfe7f2',
  },
  { // 2
    primary: '#D99B84',
    secondary: '#A6916A',
    tertiary: '#D9A404',
    quaternary: '#BF7E04',
    textPrimary: '#733122',
  },
  { // 3
    primary: '#73204E',
    secondary: '#F2B6D7',
    tertiary: '#D95995',
    quaternary: '#325935',
    textPrimary: '#C9DFF2',
  },
  { // 4
    primary: '#025920',
    secondary: '#038C33',
    tertiary: '#01260E',
    quaternary: '#0D0D0D',
    textPrimary: '#05F240',
  }
]

const selectedColor = colorSets[Math.floor(Math.random() * colorSets.length)];
document.documentElement.style.setProperty('--primary-color', selectedColor.primary);
document.documentElement.style.setProperty('--secondary-color', selectedColor.secondary);
document.documentElement.style.setProperty('--tertiary-color', selectedColor.tertiary);
document.documentElement.style.setProperty('--quaternary-color', selectedColor.quaternary);
document.documentElement.style.setProperty('--text-primary-color', selectedColor.textPrimary);
