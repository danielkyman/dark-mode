import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = (key, initialValue) => {

    const [values, setValues] = useLocalStorage('dark-mode', initialValue);

    useEffect(() => {
        if (values === true) {
            document.querySelector('body').classList.add('dark-mode');
        } else {
            document.querySelector('body').classList.remove('dark-mode');
        }
    }, [values]);


    return [values, setValues];
};