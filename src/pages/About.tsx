function About() {
  return (
    <>
      {/* 診所介紹 */}
      <section className="mb-24 md:mb-40">
        <h2 className="text-h1 my-8">關於聖潔牙醫診所</h2>
        <p className="text-body1 my-4">在我們繁忙的現代生活中，健康成為越來越多人關注的重要議題。而在健康的層面上，口腔的健康也佔據著一個重要的位置。聖潔牙醫診所，致力於提供高品質口腔醫療服務、營造一個環境優良且專業的牙科醫療體系為目標。</p>
        <p className="text-body1 my-4">聖潔牙醫的診療項目包含：家庭牙科、兒童牙科、人工植牙、牙周治療、隱適美矯正、傳統牙齒矯正、全瓷冠美學、顯微根管、一日假牙、牙齒美白、阻生智齒、全口重建等。</p>
      </section>

      {/* 醫師介紹區塊 */}
      <section className="mb-24 md:mb-40">
        <h2 className="text-h1 my-8">醫師介紹</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="p-8 border border-[#00000F] border-solid rounded-xl">
            <div className="flex justify-center">
              <img src="https://hsin-ho.tw/wp-content/uploads/2023/12/dr-zheng-img.png" alt="醫師照片" className="rounded-xl" />
            </div>
            <h1 className="text-h1 text-center my-4">ＸＸＸ醫師</h1>
            <h2 className="text-body1 text-center my-4">aaaaa | bbbbb | ccccc</h2>
            <ul className="list-disc pl-4 leading-relaxed text-body1 leading-loose">
              <li>中國醫藥大學牙醫學士</li>
              <li>韓國首爾大學植牙研習結業</li>
              <li>德國Dusseldorf大學植牙研習結業</li>
              <li>德國Q-implant台灣區顧問講師</li>
              <li>中華民國植牙全國聯合醫學會專科醫師</li>
              <li>中華民國審美植牙醫學會專科醫師</li>
              <li>中華民國審美植牙醫學會副理事長</li>
            </ul>
          </div>
          <div className="p-8 border border-[#00000F] border-solid rounded-xl">
            <div className="flex justify-center">
              <img src="https://hsin-ho.tw/wp-content/uploads/2023/12/dr-zheng-img.png" alt="醫師照片" className="rounded-xl" />
            </div>
            <h1 className="text-h1 text-center my-4">ＸＸＸ醫師</h1>
            <h2 className="text-body1 text-center my-4">aaaaa | bbbbb | ccccc</h2>
            <ul className="list-disc pl-4 leading-relaxed text-body1 leading-loose">
              <li>中國醫藥大學牙醫學士</li>
              <li>韓國首爾大學植牙研習結業</li>
              <li>德國Dusseldorf大學植牙研習結業</li>
              <li>德國Q-implant台灣區顧問講師</li>
              <li>中華民國植牙全國聯合醫學會專科醫師</li>
              <li>中華民國審美植牙醫學會專科醫師</li>
              <li>中華民國審美植牙醫學會副理事長</li>
            </ul>
          </div>
          <div className="p-8 border border-[#00000F] border-solid rounded-xl">
            <div className="flex justify-center">
              <img src="https://hsin-ho.tw/wp-content/uploads/2023/12/dr-zheng-img.png" alt="醫師照片" className="rounded-xl" />
            </div>
            <h1 className="text-h1 text-center my-4">ＸＸＸ醫師</h1>
            <h2 className="text-body1 text-center my-4">aaaaa | bbbbb | ccccc</h2>
            <ul className="list-disc pl-4 leading-relaxed text-body1 leading-loose">
              <li>中國醫藥大學牙醫學士</li>
              <li>韓國首爾大學植牙研習結業</li>
              <li>德國Dusseldorf大學植牙研習結業</li>
              <li>德國Q-implant台灣區顧問講師</li>
              <li>中華民國植牙全國聯合醫學會專科醫師</li>
              <li>中華民國審美植牙醫學會專科醫師</li>
              <li>中華民國審美植牙醫學會副理事長</li>
            </ul>
          </div>
          <div className="p-8 border border-[#00000F] border-solid rounded-xl">
            <div className="flex justify-center">
              <img src="https://hsin-ho.tw/wp-content/uploads/2023/12/dr-zheng-img.png" alt="醫師照片" className="rounded-xl" />
            </div>
            <h1 className="text-h1 text-center my-4">ＸＸＸ醫師</h1>
            <h2 className="text-body1 text-center my-4">aaaaa | bbbbb | ccccc</h2>
            <ul className="list-disc pl-4 leading-relaxed text-body1 leading-loose">
              <li>中國醫藥大學牙醫學士</li>
              <li>韓國首爾大學植牙研習結業</li>
              <li>德國Dusseldorf大學植牙研習結業</li>
              <li>德國Q-implant台灣區顧問講師</li>
              <li>中華民國植牙全國聯合醫學會專科醫師</li>
              <li>中華民國審美植牙醫學會專科醫師</li>
              <li>中華民國審美植牙醫學會副理事長</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 診所排班區塊 */}
      <section className="mb-24 md:mb-40">
        <div className="w-full overflow-x-auto">
          <h2 className="text-h1 my-8">醫師排班日程表</h2>
          <table className="w-full text-center border border-[#00000F] border-solid">
            <thead>
              <tr>
                <th className="text-body1 p-2 border border-[#00000F] border-solid">診療時間</th>
                <th className="text-body1 p-2 border border-[#00000F] border-solid">SUN</th>
                <th className="text-body1 p-2 border border-[#00000F] border-solid">MON</th>
                <th className="text-body1 p-2 border border-[#00000F] border-solid">TUE</th>
                <th className="text-body1 p-2 border border-[#00000F] border-solid">WED</th>
                <th className="text-body1 p-2 border border-[#00000F] border-solid">THU</th>
                <th className="text-body1 p-2 border border-[#00000F] border-solid">FRI</th>
                <th className="text-body1 p-2 border border-[#00000F] border-solid">SAT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-body1 p-2 border border-[#00000F] border-solid">09:30 ~ 12:00</td>
                <td className="text-body1 p-2 border border-[#00000F] border-solid">✕</td>
                <td className="text-body1 p-2 border border-[#00000F] border-solid">ＸＸＸ醫師</td>
                <td className="text-body1 p-2 border border-[#00000F] border-solid">ＸＸＸ醫師</td>
                <td className="text-body1 p-2 border border-[#00000F] border-solid">ＸＸＸ醫師</td>
                <td className="text-body1 p-2 border border-[#00000F] border-solid">ＸＸＸ醫師</td>
                <td className="text-body1 p-2 border border-[#00000F] border-solid">ＸＸＸ醫師</td>
                <td className="text-body1 p-2 border border-[#00000F] border-solid">✕</td>
              </tr>
              <tr>
                <td className="text-body1 p-2 border border-[#00000F] border-solid">14:30 ~ 17:00</td>
                <td className="text-body1 p-2 border border-[#00000F] border-solid">✕</td>
                <td className="text-body1 p-2 border border-[#00000F] border-solid">ＸＸＸ醫師</td>
                <td className="text-body1 p-2 border border-[#00000F] border-solid">ＸＸＸ醫師</td>
                <td className="text-body1 p-2 border border-[#00000F] border-solid">ＸＸＸ醫師</td>
                <td className="text-body1 p-2 border border-[#00000F] border-solid">ＸＸＸ醫師</td>
                <td className="text-body1 p-2 border border-[#00000F] border-solid">ＸＸＸ醫師</td>
                <td className="text-body1 p-2 border border-[#00000F] border-solid">✕</td>
              </tr>
              <tr>
                <td className="text-body1 p-2 border border-[#00000F] border-solid">18:00 ~ 20:30</td>
                <td className="text-body1 p-2 border border-[#00000F] border-solid">✕</td>
                <td className="text-body1 p-2 border border-[#00000F] border-solid">ＸＸＸ醫師</td>
                <td className="text-body1 p-2 border border-[#00000F] border-solid">ＸＸＸ醫師</td>
                <td className="text-body1 p-2 border border-[#00000F] border-solid">ＸＸＸ醫師</td>
                <td className="text-body1 p-2 border border-[#00000F] border-solid">ＸＸＸ醫師</td>
                <td className="text-body1 p-2 border border-[#00000F] border-solid">ＸＸＸ醫師</td>
                <td className="text-body1 p-2 border border-[#00000F] border-solid">✕</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4 text-body2">
            ※ 醫師看診時段依現場狀況可能有異動
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
