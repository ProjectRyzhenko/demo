import Link from 'next/link';
import Image from 'next/image';
import FlagImg from '../public/assets/Fl.png'


export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">

            <div>
                <Image
                  className='rounded-xl w-20 ease-in duration-200'
                  src={FlagImg}
                  alt='/'
                />
            </div>

      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
