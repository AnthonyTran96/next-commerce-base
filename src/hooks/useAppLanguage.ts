import { LanguageContext } from '@/app/context/LanguageContext';
import { useContext } from 'react';

const useAppLanguage = () => useContext(LanguageContext);

export default useAppLanguage;
