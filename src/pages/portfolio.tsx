import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Portfoliolist from '@/components/Portfoliolist'

const inter = Inter({ subsets: ['latin'] })

export default function Portfolio() {
  const portfolioList = [
    {
      genre: 'Design',
      image: '/hisa_twitter.png',
      summary: 'Skebにて',
      url: 'https://skeb.jp/@RINYA_P/works/41'
    },
    {
      genre: 'Design',
      image: '/hisa_twitter.png',
      summary: 'Skebにて',
      url: 'https://skeb.jp/@RINYA_P/works/41'
    },
    {
      genre: 'Design',
      image: '/hisa_twitter.png',
      summary: 'Skebにて',
      url: 'https://skeb.jp/@RINYA_P/works/41'
    },
    {
      genre: 'Design',
      image: '/hisa_twitter.png',
      summary: 'Skebにて',
      url: 'https://skeb.jp/@RINYA_P/works/41'
    },
    {
      genre: 'Design',
      image: '/hisa_twitter.png',
      summary: 'Skebにて',
      url: 'https://skeb.jp/@RINYA_P/works/41'
    }
  ]
    return (
    <>
      <Header />
      <div className='py-20 px-10'>
        <p className='text-5xl font-bold p-10'>
        - Portfolio -
        </p>
        <div className='flex flex-wrap justify-start'>
          {portfolioList.map((portfolioItem) => {
            return (
              <Portfoliolist
                genre={portfolioItem.genre}
                image={portfolioItem.image}
                summary={portfolioItem.summary}
                url={portfolioItem.url}
              />
            )
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}