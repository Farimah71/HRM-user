import { SearchBox } from "..";
// ++++++++++ images import ++++++++++

export const PageHeader = ({ title }) => {
  // ---------- render jsx ----------
  return (
    <header className="w-full flex items-center justify-between py-6">
      <h2 className="text-49 text-custom-dark">{title}</h2>
      <SearchBox placeholder="Search..." classes="!w-450 max-w-full"/>
    </header>
  );
};
