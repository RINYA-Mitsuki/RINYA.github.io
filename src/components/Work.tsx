import React from 'react';
import Worklist from './Worklist';

export default function Work() {
  const workList = [
    {
      date: '2019/09 Sep.',
      summary: 'オリジナル楽曲「Eeliaas」、音楽ゲームMuseDash収録'
    },
    {
      date: '2020/11 Nov.',
      summary: 'オリジナル楽曲「Square Lake」、音楽ゲームMuseDash収録'
    },
    {
      date: '2021/08 Aug.',
      summary: '株式会社HIKKY主催、VketMall Proto 会場BGM一部担当'
    },
    {
      date: '2022/06 Jun.',
      summary: '株式会社ゆずプラス及び一般社団法人プレプラ 法人ロゴ制作'
    },
    {
      date: '2022/12 Dec.',
      summary: '株式会社HIKKY主催、Vket2022Winter 会場BGM一部担当'
    },
    {
      date: '2023/02 Feb.',
      summary: '株式会社HIKKY主催、ComicVket3 会場プロップサブモデリング'
    },
    {
      date: '2023/07 Jul.',
      summary: '株式会社HIKKY主催、Vket2023Summer 企業ブースモデリング'
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
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Portfolio*/}
      <div className='bg-mygreen-bk font-sans'>
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
