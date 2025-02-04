import { FaTwitter, FaYoutube, FaSoundcloud, FaShoppingCart } from "react-icons/fa"

export default function Main() {
  return (
    <>
      {/*Top*/}
      <div className='w-hull bg-my-background bg-cover' id="top">
        <div className='text-gray-200 font-mono py-80 pl-28'>
          <div>
            <p className='inline-block backdrop-brightness-50 text-5xl px-8 py-1'>
            No Creation, No Life.
            </p>
          </div>
            <p className='inline-block backdrop-brightness-50 text-5xl px-8 py-1'>
              星々のような個性輝く作品をあなたに。
            </p>
          <div>
            <p className='inline-block backdrop-brightness-50 text-2xl px-8 py-0.5 pt-3'>
            Mitsuboshi_Studioは、音や色、形、空間等の様々なアプローチ方法で
            </p>
          </div>
            <p className='inline-block backdrop-brightness-50 text-2xl px-8 py-0.5'>
              コンテンツの存在感をより引き立てるお手伝いを致します。
            </p>
        </div>
      </div>
      {/*Profile*/}
      <div className='bg-gray-400' id="profile">
        <div className="w-10/12 pt-20 pb-32 mx-auto bg-white text-gray-800 font-sans ">
          <div className="w-10/12 mx-auto">
            <p className='text-5xl font-bold p-10'>
              - Profile -
            </p>
            <div className="z-0 relative flex justify-center">
              <img className="absolute -z-10 h-full bottom-0 right-0 overflow-hidden opacity-10" src="/rinya_logo.svg"/>
              <img className="w-64 h-64 rounded-full my-5" src="/avatar.jpg" />
              <div className="font-sans text-xl pl-8 ml-20 border-l-2 border-gray-500 border-solid">
                <p>Name - RINYA（りにゃ）</p>
                <p>Birth - 1996/11/17</p>
                <p className="pb-8">Country - Japan Nagasaki</p>
                <p>音楽やロゴデザイン、3Dモデリング等を独学で学び、作るなどしています。</p>
                <p>フロントエンドを中心にコーディングも勉強中です。（当HPも習作の一つです）</p>
                <p className="pb-8">映像制作も趣味程度に少しだけかじったことがあります。</p>
                {/*<p>Belongs to</p>*/}
                <div className="flex justify-between">
                  {/*<a href="https://starryrain.net/" target="_blank" rel="noreferrer noopener"><img className="h-14" src="/SR_logo.svg" /></a>*/}
                  <div className="flex mt-1.5 mr-5">
                    <a href="https://twitter.com/RINYA_P" title="Twitter" className='m-2'>
                      <FaTwitter size={30} color={"1DA1F2"}/>
                    </a>
                    <a href="https://www.youtube.com/@RINYA_P" title="Youtube" className='m-2'>
                      <FaYoutube size={30} color={"FF0000"}/>
                    </a>
                    <a href="https://soundcloud.com/rinya-p" title="SoundCloud" className='m-2'>
                      <FaSoundcloud size={30} color={"FF5500"}/>
                    </a>
                    <a href="https://rinya-p.booth.pm/" title="BOOTH" className='m-2'>
                      <FaShoppingCart size={30} color={"FC4D50"}/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*What is Mitsuboshi_Studio?*/}
      <div className='bg-mygreen-bk font-sans'>
        <div className='w-10/12 mx-auto pt-6 pb-10'>
          <p className='text-3xl text-gray-100 font-bold pt-14 pl-10'>
            - What is Mitsuboshi_Studio? -
          </p>
          <div className="p-10 text-xl text-gray-300">
            <p>りにゃがネット上で創作活動をするにあたって、個人サークルが欲しくなった時に適当に考えた名前です。</p>
            <p>なんだかんだあって、今は個人事業主としての屋号も兼ねています。</p>
            <p>名前の由来は、以前創作用として使用していた名義の「ミツキ」から来ています。</p>
            <p>ロゴはもちろん自分で作りました。　結構お気に入りでニコニコです。</p>
          </div>
        </div>
      </div>
    </>
  )
}