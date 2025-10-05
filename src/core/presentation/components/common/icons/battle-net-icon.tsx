import * as React from 'react';

export function BattleNetIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="1em" height="1em" {...props}>
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.12" />
      <path
        d="M12 4c4.418 0 8 3.582 8 8h-2a6 6 0 0 0-6-6V4zM4 12c0 4.418 3.582 8 8 8v-2a6 6 0 0 1-6-6H4zm13.657 2.343-1.414 1.414L9.243 9.171l1.414-1.414 6 6z"
        fill="currentColor"
      />
    </svg>
  );
}
