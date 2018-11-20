import Link from 'next/link';

export default function Nav() {
  return (
    <div>
      <Link href="/">
        <a>To home!</a>
      </Link>
      <Link href="/sell">
        <a>To Sell!</a>
      </Link>
    </div>
  );
}
