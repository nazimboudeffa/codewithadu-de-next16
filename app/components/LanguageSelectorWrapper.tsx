'use client';

import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

export default function LanguageSelectorWrapper() {
  const { language, setLanguage } = useLanguage();

  return <LanguageSelector currentLang={language} onLanguageChange={setLanguage} />;
}
