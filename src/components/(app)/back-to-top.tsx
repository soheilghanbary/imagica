'use client';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';

export function BackToTop() {
  const [showButton, setShowButton] = useState(false);
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Button
      size={'icon'}
      variant={'secondary'}
      onClick={handleClick}
      className={`fixed bottom-5 left-5 size-12 rounded-full transition-opacity duration-300 [&_svg]:size-5 ${
        showButton ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <ArrowUp />
    </Button>
  );
}
