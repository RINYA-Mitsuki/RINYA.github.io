import React from 'react';
import Worklist from './Worklist';

export default function Work() {
  const workList = [
    {
      date: '2019/09 Sep.',
      summary: 'オリジナル楽曲「Eeliaas」、音楽ゲームMuseDash収録',
      url: 'https://twitter.com/MuseDashtheGame/status/1178251302859444225'
    },
    {
      date: '2020/11 Nov.',
      summary: 'オリジナル楽曲「Square Lake」、音楽ゲームMuseDash収録',
      url: 'https://twitter.com/MuseDashtheGame/status/1332248813998809089'
    },
    {
      date: '2021/08 Aug.',
      summary: 'VirtualMarketMall Proto 会場BGM制作',
      url: 'https://mall.v-market.work/credit'
    },
    {
      date: '2022/06 Jun.',
      summary: '株式会社ゆずプラス及び一般社団法人プレプラ 法人ロゴ制作',
      url: 'https://twitter.com/yuzuplus_'
    },
    {
      date: '2022/12 Dec.',
      summary: 'VirtualMarket2022Winter 会場BGM制作',
      url: 'https://winter2022.vket.com/credit'
    },
    {
      date: '2023/02 Feb.',
      summary: 'ComicVket3 会場プロップサブモデリング',
      url: 'https://comic3.vket.com/credit'
    },
    {
      date: '2023/07 Jul.',
      summary: 'VirtualMarket2023Summer 企業ブースモデリング',
      url: 'https://event.vket.com/2023Summer/credit'
    },
    {
      date: '2023/12 Dec.',
      summary: 'VirtualMarket2023Winter 企業ブースモデリング',
      url: 'https://event.vket.com/2023Winter/credit'
    },
    {
      date: '2024/07 Jul.',
      summary: 'VirtualMarket2024Summer 会場BGM制作',
      url: 'https://event.vket.com/2024Summer/credit'
    },
    {
      date: '2024/12 Dec',
      summary: 'VirtualMarket2024Winter 会場BGM制作',
      url: 'https://event.vket.com/2024Winter/credit'
    },
  ];
  return (
    <>
      {/*Worklist*/}
      <div >
        <div className='bg-gray-400'>
          <div id="work" className="w-10/12 pt-20 pb-32 mx-auto bg-white text-gray-800 font-sans">
            <div className="w-10/12 mx-auto">
              <p className='text-5xl font-bold p-10 mb-5 border-b-2 border-gray-500 border-solid'>
                - Work -
              </p>
              <div className="mx-auto font-serif font-semibold justify-center">
                {workList.map((workItem) => {
                  return (
                    <Worklist
                      date={workItem.date}
                      summary={workItem.summary}
                      url={workItem.url}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Portfolio*/}
      <div id="portfolio" className='bg-mygreen-bk font-sans'>
        <div className='w-10/12 mx-auto pt-6 pb-10'>
          <p className='text-3xl text-gray-100 font-bold py-10 pl-10'>
            - Portfolio -（未実装）
          </p>
          <div className="px-10 text-xl text-gray-300">
            <p>量が多くなりそうなので別ページに分けています（まだ分けてません）。</p>
            <p>下記の主張の激しいリンクから飛んでください。（まだ飛べません）</p>
          </div>
        </div>
        <a href="#" title="Portfolio" className='block w-hull overflow-hidden font-serif text-9xl font-bold text-mygreen whitespace-nowrap tracking-tighter py-2 bg-white bg-opacity-0 transition-all duration-200 ease-out hover:duration-200 hover:bg-opacity-25'>
          PortfolioいくぞおおおおおおおおおO-oooooooooo AAAAE-A-A-I-A-U- JO-oooooooooooo AAE-O-A-A-U-U-A- E-eee-ee-eee AAAAE-A-E-I-E-A- JO-ooo-oo-oo-oo EEEEO-A-AAA-AAAA O-oooooooooo AAAAE-A-A-I-A-U- JO-oooooooooooo AAE-O-A-A-U-U-A- E-eee-ee-eee AAAAE-A-E-I-E-A- JO-ooo-ooo-oooo EEEEO-A-AAA-AAA- O----------
        </a>
      </div>
      {/*Contact*/}
      <div className='bg-gray-400' id="profile">
        <div id='contact' className="w-10/12 pt-20 pb-16 mx-auto bg-white text-gray-800 font-sans ">
          <div className="w-10/12 mx-auto">
            <p className='text-5xl font-bold p-10'>- Contact -</p>
            <p className='text-center pb-10 text-2xl text-gray-800'>
              Mitsubosi Recordsやオーナーに対してのご質問やご依頼等は、メールアドレス「records@mitsuboshi.work」もしくは下部のフォームよりお問い合わせください。
            </p>
            <iframe className='w-full' height="1148" src="https://docs.google.com/forms/d/e/1FAIpQLSdd7GMSXeVl-NdGqIaJNd3ocBHIpyT0YAj2wAuElEOiYC0pUw/viewform?embedded=true">読み込んでいます…</iframe>
          </div>
        </div>
      </div>
    </>
  );
}
