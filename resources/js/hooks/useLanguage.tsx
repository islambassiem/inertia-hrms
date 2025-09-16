import { router } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { usePage } from '@inertiajs/react';
import { Language, PageProps } from '@/types';

export function useLanguage() {
    const { locale: serverLocale } = usePage<PageProps>().props;
    const { i18n } = useTranslation();
    const [lang, setLang] = useState(() => {
        return (
            (serverLocale as Language) ||
            (localStorage.getItem('locale') as Language) ||
            'ar'
        );
    });

    useEffect(() => {
        if (serverLocale && serverLocale !== lang) {
            setLang(serverLocale);
            localStorage.setItem('locale', serverLocale);
        }
        const dir = lang === 'ar' ? 'rtl' : 'ltr';
        i18n.changeLanguage(lang);

        document.documentElement.lang = lang;
        document.documentElement.dir = dir;
    }, [i18n, lang, serverLocale]);

    const setLanguage = () => {
        const newLang = lang === 'en' ? 'ar' : 'en';
        const dir = newLang === 'ar' ? 'rtl' : 'ltr';

        setLang(newLang);
        i18n.changeLanguage(newLang);
        localStorage.setItem('locale', newLang);
        localStorage.setItem('dir', dir);

        document.documentElement.lang = newLang;
        document.documentElement.dir = dir;

        // Make the server request
        router.post(
            '/locale',
            {
                locale: newLang,
            },
            {
                onFinish: () => {
                    router.reload();
                },
            }
        );
    };

    return {
        language: lang,
        setLanguage,
    };
}
