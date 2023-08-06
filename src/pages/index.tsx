import Image from 'next/image'
import { Inter } from 'next/font/google'
import Loading from '@/components/Loading'
import Header from '@/components/Header'
import Main from '@/components/Main'
import Work from '@/components/Work'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/*<Loading />*/}
      <Header />
      <Main />
      <Work />
      <Footer />
    </>
  )
}
