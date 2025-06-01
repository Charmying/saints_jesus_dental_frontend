// Home.tsx

const services = [
  {
    title: "人工植牙",
    desc: "透過先進的植牙技術，我們能夠為患者恢復缺失的牙齒，提供堅固穩定的植牙解決方案。",
    img: "https://hsin-ho.tw/wp-content/uploads/2023/12/icon-Implants.svg",
  },
  {
    title: "牙周治療",
    desc: "專業的牙周治療團隊針對各種牙周疾病，提供有效的診斷和治療，維護口腔健康。",
    img: "https://hsin-ho.tw/wp-content/uploads/2023/12/icon-periodontal.svg",
  },
  {
    title: "家庭牙科",
    desc: "以全家人口腔健康為中心，提供預防保健、牙齒修復等家庭牙科服務。",
    img: "https://hsin-ho.tw/wp-content/uploads/2023/12/icon-general.svg",
  },
  {
    title: "全口重建",
    desc: "針對牙齒缺失或嚴重損害，提供全面性的重建方案，包括全口補牙、修復和美學重建。",
    img: "https://hsin-ho.tw/wp-content/uploads/2023/12/icon-reconstrution.svg",
  },
  {
    title: "牙齒矯正",
    desc: "專業的矯正治療團隊，針對牙齒不正常的咬合問題，提供各種矯正方案。",
    img: "https://hsin-ho.tw/wp-content/uploads/2023/12/icon-orthodontics-2.svg",
  },
];

function Home() {
  return (
    <>
      {/* 診所簡介區塊 */}
      <section className="mb-24 md:mb-40">
        <div className="mb-16 flex flex-col md:flex-row md:gap-24">
          <div className="w-full mb-8 self-center md:w-[40%] md:mb-0">
            <img src="https://hsin-ho.tw/wp-content/uploads/2023/08/about-img.webp" alt="服務特色" className="mx-auto rounded-xl" />
          </div>
          <div className="w-full md:w-[60%] md:self-center">
            <h2 className="text-h1">ABOUT</h2>
            <h2 className="text-h2 my-8">聖潔牙醫診所-服務特色</h2>
            <p className="text-body1 my-4">聖潔牙醫以專業的技術和周到的服務贏得患者的信賴，診所提供多項高品質的診療服務，包括人工植牙、牙周治療、全口重建、家庭牙科以及齒顎矯正。</p>
            <p className="text-body1 my-4">在聖潔牙醫，我們秉持著對患者的用心與專業，致力於打造一個舒適、安心的就醫環境。透過最新的醫療科技和關懷入微的服務，我們期許為每位患者呈現一個健康、美麗的笑容。</p>
          </div>
        </div>

        <div className="mb-16 flex flex-col md:flex-row-reverse md:gap-24">
          <div className="w-full mb-8 self-center md:w-[40%] md:mb-0">
            <img src="https://hsin-ho.tw/wp-content/uploads/2023/08/about-img.webp" alt="診所環境" className="mx-auto rounded-xl"
            />
          </div>
          <div className="w-full md:w-[60%] md:self-center">
            <h2 className="text-h1">ENVIRONMENT</h2>
            <h2 className="text-h2 my-8">聖潔牙醫診所-環境介紹</h2>
            <p className="text-body1 my-4">聖潔牙醫診所診療環境明亮且光線充足，聖潔牙醫診所致力於營造一個舒適、友善且放鬆的就醫環境，確保患者在每一次的就診前，能有效減輕看牙齒的緊張感。</p>
            <p className="text-body1 my-4">進入聖潔牙醫診所，首先感受到的是寧靜溫馨的氛圍，診所室內採用了明亮且充足的自然光線，營造出明亮愉悅的空間，讓患者感到放鬆。</p>
            <p className="text-body1 my-4">此外候診區也提供各式書報雜誌，及相關的牙科資訊，讓患者可以在等待時間充實自己的牙科知識。</p>
          </div>
        </div>
      </section>

      {/* 服務項目區塊 */}
      <section className="mb-24 md:mb-40">
        <div className="mx-auto">
          <h2 className="text-h1">SERVICE</h2>
          <h2 className="text-h2 my-8">聖潔牙醫診所-服務項目</h2>
          <p className="text-body1 my-4">聖潔牙醫好評不斷，我們擁有多元化的專業服務，致力於提供患者全方位的口腔健康照護。更提供細項服務如洗牙、牙齒美容等，以滿足患者對口腔美學和整體健康的需求。</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {services.map((service, idx) => (
            <div key={idx} className="p-8 flex flex-col items-center border border-[#00000F] border-solid rounded-xl">
              <img src={service.img} alt={service.title} className="w-16 h-16 mb-4" />
              <h3 className="text-h3 text-center my-2">{service.title}</h3>
              <p className="text-body1 mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 預約注意事項區塊 */}
      <section className="mb-24 md:mb-40">
        <div className="mb-16 flex flex-col md:flex-row md:gap-24">
          <div className="w-full mb-8 self-center md:w-[40%] md:mb-0">
            <img src="https://hsin-ho.tw/wp-content/uploads/2023/08/優質的醫師與助理團隊.webp" alt="診所環境" className="mx-auto rounded-xl" />
          </div>
          <div className="w-full md:w-[60%] md:self-center">
            <h2 className="text-h1">NOTICE</h2>
            <h2 className="text-h2 my-8">聖潔牙醫預約注意事項</h2>
            <p className="text-body1 my-4">在預約聖潔牙醫的過程中，請注意以下事項。首先聖潔牙醫會貼心地提前打電話提醒預約的時間，確保不會錯過就診。</p>
            <p>若因故無法前往，請務必提早通知，您可以隨時來電取消預約，以便讓其他患者有機會利用該時段。</p>
          </div>
        </div>
      </section>

      {/* 診所資訊區塊 */}
      <section className="mb-24 md:mb-40">
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="md:w-[35%]">
            <h2 className="text-h1">INFORMATION</h2>
            <h2 className="text-h2 my-8">聖潔牙醫診所</h2>
            <p className="text-body1 my-4">地址：台中市北屯區東山路</p>
            <p className="text-body1 my-4">電話：<a href="tel:0912345678">0912345678</a></p>
            <p className="text-body1 my-4">LINE：@0000000000Charmy</p>
          </div>

          <div className="w-full overflow-x-auto md:w-[65%]">
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
                  <td className="text-body1 p-2 border border-[#00000F] border-solid">✕</td>
                  <td className="text-body1 p-2 border border-[#00000F] border-solid">✕</td>
                  <td className="text-body1 p-2 border border-[#00000F] border-solid">✕</td>
                  <td className="text-body1 p-2 border border-[#00000F] border-solid">✕</td>
                  <td className="text-body1 p-2 border border-[#00000F] border-solid">✕</td>
                  <td className="text-body1 p-2 border border-[#00000F] border-solid">✕</td>
                </tr>
                <tr>
                  <td className="text-body1 p-2 border border-[#00000F] border-solid">14:30 ~ 17:00</td>
                  <td className="text-body1 p-2 border border-[#00000F] border-solid">✕</td>
                  <td className="text-body1 p-2 border border-[#00000F] border-solid">✕</td>
                  <td className="text-body1 p-2 border border-[#00000F] border-solid">✕</td>
                  <td className="text-body1 p-2 border border-[#00000F] border-solid">✕</td>
                  <td className="text-body1 p-2 border border-[#00000F] border-solid">✕</td>
                  <td className="text-body1 p-2 border border-[#00000F] border-solid">✕</td>
                  <td className="text-body1 p-2 border border-[#00000F] border-solid">✕</td>
                </tr>
                <tr>
                  <td className="text-body1 p-2 border border-[#00000F] border-solid">18:00 ~ 20:30</td>
                  <td className="text-body1 p-2 border border-[#00000F] border-solid">✕</td>
                  <td className="text-body1 p-2 border border-[#00000F] border-solid">✕</td>
                  <td className="text-body1 p-2 border border-[#00000F] border-solid">✕</td>
                  <td className="text-body1 p-2 border border-[#00000F] border-solid">✕</td>
                  <td className="text-body1 p-2 border border-[#00000F] border-solid">✕</td>
                  <td className="text-body1 p-2 border border-[#00000F] border-solid">✕</td>
                  <td className="text-body1 p-2 border border-[#00000F] border-solid">✕</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-4 text-body2">
              ※ 醫師看診時段依現場狀況可能有異動
            </div>
          </div>
        </div>

        <div className="my-8">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.9257063525306!2d120.71299377606006!3d24.174338172367733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3469181f04beb525%3A0x4bf51be43ffcca9c!2z6IGW5r2U54mZ6Yar!5e0!3m2!1szh-TW!2stw!4v1748191395847!5m2!1szh-TW!2stw" className="w-full h-[30vh]" loading="lazy" allowFullScreen></iframe>
        </div>
      </section>
    </>
  );
}

export default Home;
