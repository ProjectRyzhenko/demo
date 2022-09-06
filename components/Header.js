import Link from 'next/link';
import Image from 'next/image';




export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">

    <img src='https://cdn.pixabay.com/photo/2022/08/31/19/10/ukraine-7424066_960_720.png'/>
      

      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
