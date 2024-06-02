import React from 'react';

type ScrollBehavior = 'auto' | 'smooth';

export default function useMoveScroll(type = 'smooth' as ScrollBehavior) {
  const scrollTo = React.useRef<HTMLDivElement>(null);
  const onMoveToElement = () => {
    scrollTo.current?.scrollIntoView({ behavior: type, block: 'start' });
  };

  return { scrollTo, onMoveToElement };
}
