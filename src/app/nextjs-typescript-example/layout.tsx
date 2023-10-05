import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js Typescript Example',
};

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
