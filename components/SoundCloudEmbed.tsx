type Props = {
  url: string;
  title: string;
};

export function SoundCloudEmbed({ url, title }: Props) {
  const src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(
    url,
  )}&color=%23d91a7a&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true`;

  return (
    <iframe
      title={title}
      src={src}
      width="100%"
      height="360"
      scrolling="no"
      frameBorder="0"
      allow="autoplay"
      className="rounded-sm border border-line"
    />
  );
}
