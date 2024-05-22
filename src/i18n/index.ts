
    
import english from '../i18n/locales/en.json';
import spanish from '../i18n/locales/es.json';
import French from '../i18n/locales/fr.json';

const LANG = {
	ENGLISH: 'en',
	SPANISH: 'es',
    FRENCH: 'fr',
};

export const getI18N = ({
	currentLocale = 'en',
}: {
	currentLocale: string | undefined;
}) => {
	if (currentLocale === LANG.ENGLISH) return { ...english };
	if (currentLocale === LANG.SPANISH) return { ...spanish };
    if (currentLocale === LANG.FRENCH) return { ...French };
};

