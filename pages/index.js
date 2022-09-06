import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Image from 'next/image';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';


export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      
      <Header name={globalData.name} />

        <h1 className="text-2xl lg:text-5xl text-center mb-12">
          {globalData.blogTitle}
        </h1>

        <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>

                              
            <div>
                <p>ПІДТРИМКА УКРАЇНЦІВ</p>
                <p className='py-4 text-justify '>
                Війна в Україні – це трагедія. Обставини підштовхнули створити Телеграм-Бота для допомоги українцям
                знайти діючі Благодійні фонди, гуманітарні програми, підприємства та інших людей, до кого можна звернутися.
                Це також і корисні посилання на офіційні державні джерела, статті та новини. 
                Телеграм-Бот надає інформацію про благодійні організації, що допомагають дітям та сиротам війни, 
                піклуються про сім’ї військових і солдатів на передовій, надають захист людям, що втратили житло. 
                Спільними зусиллями будемо протидіяти наслідкам війни, психологічно допомагати та відбудовувати нашу 
                країну для нас і наших нащадків. 
                </p>
            </div> 
           
            </div>
           
          </div>

        <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* Про Бот */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>

            <img src='https://cdn.pixabay.com/photo/2022/03/19/08/01/heart-7078029_960_720.png'/> 
                   
            <div>
                <p>ПРО БОТ</p>
                <p className='py-4 text-justify'>
                В нашій країні зараз немає людей, яких би не зачепила війна. Як правильно вирішувати життєві питання,
                де брати сили та ресурси для виживання, реагувати на агресію. Є багато компаній, які надають відповіді 
                на наші запитання. Інформацію про них також можна дивитись у Телеграм-Боті.  
                </p>
            </div>
           
            </div>
          </div>
        </div>
      </div>

          {/* БГ 1 */}
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-2xl text-bold tracking-widest uppercase text-justify ]'>
          БЛАГОДІЙНІ ФОНДИ
        </p>
        <h2 className='py-4'>НАЗВА БЛАГОДІЙНОГО ФОНДУ</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
          
            <img src='https://cdn.pixabay.com/photo/2022/03/28/18/28/ukraine-7098106_960_720.png'/>
          
            <div>
                <h2 className='py-2 text-justify'>Основной чертой благотворительности является добровольный выбор вида, времени и места,
                 а также содержания (целевой) помощи. Различают благотворительность, как проявление сострадания к ближнему 
                 и нравственная обязанность имущего спешить на помощь неимущему</h2>
                <p>АДРЕСА</p>
                <p className='py-4'>
                  МІСІЯ
                </p>
            </div>
           
            <div>
                <p className='uppercase pt-8 text-[#5651e5]'>ТЕЛЕФОН</p>
            </div>

            </div>
          </div>
        </div>
      </div>

       {/* БГ 2 */}
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-2xl text-bold tracking-widest uppercase text-[#5651e5]'>
          
        </p>
        <h2 className='py-4'>НАЗВА БЛАГОДІЙНОГО ФОНДУ</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
          
            <img src='https://cdn.pixabay.com/photo/2022/04/14/04/18/pray-for-ukraine-7131582_960_720.png'/>
          
            <div>
                <h2 className='py-2text-justify'>Основной чертой благотворительности является добровольный выбор вида, времени и места,
                 а также содержания (целевой) помощи. Различают благотворительность, как проявление сострадания к ближнему 
                 и нравственная обязанность имущего спешить на помощь неимущему</h2>
                <p>АДРЕСА</p>
                <p className='py-4'>
                  МІСІЯ
                </p>
            </div>
           
            <div>
                <p className='uppercase pt-8 text-[#5651e5]'>ТЕЛЕФОН</p>
            </div>

            </div>
          </div>
        </div>
      </div>

      {/* БГ 3 */}
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-2xl text-bold tracking-widest uppercase text-[#5651e5]'>
          
        </p>
        <h2 className='py-4'>НАЗВА БЛАГОДІЙНОГО ФОНДУ</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
          
            <img src='https://cdn.pixabay.com/photo/2022/03/25/02/01/peace-7090133_960_720.png'/>
                    
            <div>
                <h2 className='py-2 text-justify'>Основной чертой благотворительности является добровольный выбор вида, времени и места,
                 а также содержания (целевой) помощи. Различают благотворительность, как проявление сострадания к ближнему 
                 и нравственная обязанность имущего спешить на помощь неимущему</h2>
                <p>АДРЕСА</p>
                <p className='py-4'>
                  МІСІЯ
                </p>
            </div>
           
            <div>
                <p className='uppercase pt-8 text-[#5651e5]'>ТЕЛЕФОН</p>
            </div>

            </div>
          </div>
        </div>
      </div>

      {/* БГ 4 */}
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-2xl text-bold tracking-widest uppercase text-[#5651e5]'>
          
        </p>
        <h2 className='py-4'>НАЗВА БЛАГОДІЙНОГО ФОНДУ</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
          
            <img src='https://cdn.pixabay.com/photo/2022/03/13/05/00/ukraine-7065297_960_720.png'/>
           
          
            <div>
                <h2 className='py-2 text-justify'>Основной чертой благотворительности является добровольный выбор вида, времени и места,
                 а также содержания (целевой) помощи. Различают благотворительность, как проявление сострадания к ближнему 
                 и нравственная обязанность имущего спешить на помощь неимущему</h2>
                <p>АДРЕСА</p>
                <p className='py-4'>
                  МІСІЯ
                </p>
            </div>
           
            <div>
                <p className='uppercase pt-8 text-[#5651e5]'>ТЕЛЕФОН</p>
            </div>

            </div>
          </div>
        </div>
      </div>


      <script src="https://telegram.org/js/telegram-web-app.js" async />


      <main className="w-full">

        <h1 className="text-2xl lg:text-5xl text-center mb-12">
          {globalData.bTitle}
        </h1>
        
        <ul className="w-full">
          {posts.map((post) => (
            <li
              key={post.filePath}
              className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
            >
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
              >
                <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
                  {post.data.date && (
                    <p className="uppercase mb-3 font-bold opacity-60">
                      {post.data.date}
                    </p>
                  )}
                  <h2 className="text-2xl md:text-3xl">{post.data.title}</h2>
                  {post.data.description && (
                    <p className="mt-3 text-lg opacity-60">
                      {post.data.description}
                    </p>
                  )}
                  <ArrowIcon className="mt-4" />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
