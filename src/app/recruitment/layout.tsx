import type { PropsWithChildren } from 'react';

export default function RecruitmentLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <main className="py-10">
        <div className="px-4 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
}
