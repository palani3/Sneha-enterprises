interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col gap-3 mb-12 ${alignClass}`}>
      {label && (
        <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit
          ${light
            ? 'bg-blue-400/20 text-blue-200'
            : 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400'
          }`}>
          {label}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-black leading-tight
        ${light ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg max-w-2xl leading-relaxed
          ${light ? 'text-blue-200' : 'text-gray-500 dark:text-gray-400'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
