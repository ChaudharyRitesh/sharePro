// use toggle theme hook for dark mode and light mode.

import {useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';
import {Colors} from '../utils/Constants';

const useToggleTheme = () => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState<string>(colorScheme || 'light');

  useEffect(() => {
    setTheme(colorScheme || 'light');
  }, [colorScheme]);

  return theme === 'dark' ? Colors.background : Colors.secondary_light;
};

export default useToggleTheme;
