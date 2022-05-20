import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import LoadingProgress from "./loading-progress";
import useLoading from "../hooks/useLoading";

export const siteTitle = "Site";

export default function Layout({ children, meta = {} }) {
  const isLoading = useLoading();

  return (
    <>
      <LoadingProgress isLoading={isLoading} />
      <div className="container mx-auto">
        <div>
          <LayoutHead meta={meta} />
          <LayoutHeader />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}

function LayoutHead({ meta }) {
  return (
    <Head>
      <link rel="icon" href="/images/meta/favicon.ico" />
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.ogImage && <meta property="og:image" content={meta.ogImage} />}
      <meta name="og:title" content={meta.title || siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <title>{meta.title || siteTitle}</title>
    </Head>
  );
}

function LayoutHeader() {
  return (
    <header className="">
      <h1 className="text-4xl font-mono font-bold text-center mt-8 mb-3">
        <Link href="/" passHref>
          <a className="cursor-pointer hover:underline">dooart</a>
        </Link>
      </h1>
      <div className="w-32 h-6 flex justify-between mx-auto mb-9">
        <a href="https://github.com/dooart" target="_blank">
          <Image src="/images/social/github.svg" width={24} height={24} />
        </a>
        <a href="https://codepen.io/dooart" target="_blank">
          <Image src="/images/social/codepen.svg" width={24} height={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/thiago-duarte-ab8736/"
          target="_blank"
        >
          <Image src="/images/social/linkedin.svg" width={24} height={24} />
        </a>
      </div>
    </header>
  );
}
