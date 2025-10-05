import { Bars3Icon } from '@heroicons/react/24/outline';

type DashboardSidebarHamburgerProps = {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function DashboardSidebarHamburger({ setSidebarOpen }: DashboardSidebarHamburgerProps) {
  return (
    <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-xs sm:px-6 lg:hidden dark:bg-gray-900 dark:shadow-none dark:after:pointer-events-none dark:after:absolute dark:after:inset-0 dark:after:border-b dark:after:border-white/10 dark:after:bg-black/10">
      <button
        type="button"
        onClick={() => setSidebarOpen(true)}
        className="-m-2.5 p-2.5 text-gray-700 hover:text-gray-900 lg:hidden dark:text-gray-400 dark:hover:text-white"
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon aria-hidden="true" className="size-6" />
      </button>
      <div className="flex-1 text-sm/6 font-semibold text-gray-900 dark:text-white">Dashboard</div>
      <a href="#">
        <span className="sr-only">Your profile</span>
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="size-8 rounded-full bg-gray-50 outline -outline-offset-1 outline-black/5 dark:bg-gray-800 dark:outline-white/10"
        />
      </a>
    </div>
  );
}
