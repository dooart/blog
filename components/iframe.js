export default function Iframe({ src, title }) {
  return (
    <iframe
      className="w-full h-screen md:h-auto md:aspect-4/3"
      scrolling="no"
      title={title}
      src={src}
      frameBorder="no"
      loading="lazy"
      allowtransparency="true"
      allowFullScreen
    ></iframe>
  );
}
