'use client';
import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { usePathname, useSearchParams } from 'next/navigation';
import { useTranslation } from '@/app/i18n/client';
import I18NextContext from '@/Helper/I18NextContext';
import English from '../../../../public/assets/images/country/English.png';
import Spanish from '../../../../public/assets/images/country/Spanish.png';

const TopLanguage = () => {
  const { i18Lang } = useContext(I18NextContext);
  const { t, i18n } = useTranslation(i18Lang, 'common');
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState({});
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const language = [
    { id: 1, title: 'English', icon: 'en', image: English, isLang: '/en/' },
    { id: 4, title: 'Spanish', icon: 'es', image: Spanish, isLang: '/es/' },
  ];
  const isLangIncludes = language.find((lang) => pathname.includes(lang.isLang));
  const splitPathname = isLangIncludes ? pathname.split(isLangIncludes.isLang)[1] : '';
  useEffect(() => {
    setSelectedLang(language.find((elem) => elem.icon == i18Lang));
  }, []);

  // To change Language
  const handleChangeLang = (value) => {
    setSelectedLang(value);
    i18n.changeLanguage(value.icon);
  };
  return (
   <div className='top-language'>
      <span className='text-white'>{t('Idioma')}</span>
    </div>
  );
};

export default TopLanguage;
