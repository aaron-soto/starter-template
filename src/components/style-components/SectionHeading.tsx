import React from 'react';

const SectionHeading = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <div className="text-center mb-8">
      <h2 className="text-4xl font-bold mb-2">{title}</h2>
      <p className="text-black/60 dark:text-white/60">{description}</p>
    </div>
  );
};

export default SectionHeading;
