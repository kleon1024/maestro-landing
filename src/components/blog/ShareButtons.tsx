////////////////////////////////////////////////////////////////////////////////
// [ShareButtons] Social sharing links
// Server component - generates share URLs
////////////////////////////////////////////////////////////////////////////////

interface ShareButtonsProps {
  title: string;
  slug: string;
}

const BASE_URL = "https://maestro.onl";

export function ShareButtons({ title, slug }: ShareButtonsProps) {
  const url = `${BASE_URL}/blog/${slug}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      label: "X",
      href: `https://x.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
  ];

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-zinc-600">Share:</span>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-zinc-800 px-3 py-1 text-xs text-zinc-500 hover:border-zinc-600 hover:text-zinc-300 transition-colors"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
