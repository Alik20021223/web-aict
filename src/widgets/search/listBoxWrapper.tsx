import React from "react";

const ListboxWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-full bg-white max-w-full border-small px-1 py-2 rounded-small border-default-200 dark:border-primary">
    {children}
  </div>
);

export default ListboxWrapper;
