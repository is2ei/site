import 'normalize.css';
import './style.css';

// https://color.adobe.com/trends
const colorSets = [
  { // 1
    primary: '#D9A404',
    secondary: '#BF7E04',
    tertiary: '#A6916A',
    quaternary: '#733122',
    textPrimary: '#D99B84',
  },
  { // 2
    primary: '#D95995',
    secondary: '#73204E',
    tertiary: '#F2B6D7',
    quaternary: '#325935',
    textPrimary: '#C9DFF2',
  },
  { // 3
    primary: '#025920',
    secondary: '#038C33',
    tertiary: '#01260E',
    quaternary: '#0D0D0D',
    textPrimary: '#05F240',
  }
]

setInterval(() => {
  const selectedColor = colorSets[Math.floor(Math.random() * colorSets.length)];
  document.documentElement.style.setProperty('--primary-color', selectedColor.primary);
  document.documentElement.style.setProperty('--secondary-color', selectedColor.secondary);
  document.documentElement.style.setProperty('--tertiary-color', selectedColor.tertiary);
  document.documentElement.style.setProperty('--quaternary-color', selectedColor.quaternary);
  document.documentElement.style.setProperty('--text-primary-color', selectedColor.textPrimary);
}, 3000);
