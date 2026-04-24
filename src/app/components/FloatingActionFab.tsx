import { AnimatePresence, motion } from 'motion/react';
import { Languages, MoonStar, Settings2, SunMedium, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { siteText } from '../content/siteText';
import { useUiPreferences } from '../context/UiPreferencesContext';

export function FloatingActionFab() {
  const { theme, language, toggleTheme, toggleLanguage } = useUiPreferences();
  const text = siteText[language];
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const actions = [
    {
      key: 'theme',
      icon: theme === 'dark' ? SunMedium : MoonStar,
      label: theme === 'dark' ? text.fab.switchToLight : text.fab.switchToDark,
      onClick: () => {
        toggleTheme();
        setIsOpen(false);
      },
    },
    {
      key: 'language',
      icon: Languages,
      label: language === 'en' ? text.fab.switchToNepali : text.fab.switchToEnglish,
      onClick: () => {
        toggleLanguage();
        setIsOpen(false);
      },
    },
  ];

  return (
    <div
      ref={rootRef}
      className="fab-shell fixed flex flex-col items-end gap-3"
      style={{
        right: 'max(1rem, env(safe-area-inset-right))',
        bottom: 'max(1rem, env(safe-area-inset-bottom))',
      }}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="flex flex-col items-end gap-2"
          >
            {actions.map((action, index) => (
              <motion.button
                key={action.key}
                type="button"
                onClick={action.onClick}
                data-cursor-interactive
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.18, delay: index * 0.04 }}
                className="fab-button fab-sub-button group inline-flex items-center gap-3 rounded-full px-4 py-3 text-sm font-medium"
              >
                <span className="fab-icon">
                  <action.icon size={18} />
                </span>
                <span>{action.label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        aria-label={isOpen ? text.fab.close : text.fab.open}
        onClick={() => setIsOpen((current) => !current)}
        data-cursor-interactive
        whileHover={{ y: -2, scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className="fab-button fab-main-button inline-flex items-center gap-3 rounded-full px-4 py-3 text-sm font-semibold shadow-lg"
      >
        <span className="fab-icon">
          {isOpen ? <X size={18} /> : <Settings2 size={18} />}
        </span>
        <span>{text.fab.main}</span>
      </motion.button>
    </div>
  );
}
