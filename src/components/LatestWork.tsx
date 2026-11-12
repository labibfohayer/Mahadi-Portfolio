import React from 'react';

const cases = [
  {
    title: 'De Druglijn',
    subtitle: 'Web development',
    description: 'De Druglijn helps with all your questions about alcohol, drugs, pills, gaming and gambling. Anonymously, objectively and without judging or…',
    image: '/textures/Druglijnbrochures-1024x1024.webp',
    link: 'https://weichie.com/case/druglijn/'
  },
  {
    title: 'Adaptive Green',
    subtitle: 'Web development',
    description: 'Leaders in Green Infrastructure, Carbon Negative Designs & Climate Positive Solutions.',
    image: '/textures/adaptivegreen-1-750x1024.webp',
    link: 'https://weichie.com/case/adaptive-green/'
  },
  {
    title: 'Spantech',
    subtitle: 'Web development',
    description: 'Spantech is one of the fastest growing manufacturers of modular structures in Europe. Developping modular solutions for various industries. Contributing…',
    image: '/textures/spantech-cover-2-1024x904.webp',
    link: 'https://weichie.com/case/spantech/'
  }
];

export function LatestWork() {
  return (
    <section className="latest-work py-20 px-6 md:px-12 max-w-[1440px] mx-auto">
      <h2 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-serif font-normal leading-[1.1] tracking-tight mb-16 text-[#111111]">
        Some of our latest work
      </h2>

      <div className="latest-work__inner">
        {/* Top Callout */}
        <div className="callout mb-12 flex items-center gap-3 text-xs md:text-sm font-mono tracking-wider uppercase text-[#111111]">
          <span className="w-6 h-6 flex items-center justify-center text-[#ff4f31]">
            <svg width="24" height="24" viewBox="0 0 60 60" fill="currentColor">
              <path d="M54.0727 26.1954V25.7768C54.0727 25.0902 53.5114 24.5328 52.8198 24.5328H40.6817C39.9902 24.5328 39.4289 23.9755 39.4289 23.2888V22.8703C39.4289 22.1836 38.8675 21.6263 38.176 21.6263H37.7544C37.0628 21.6263 36.5015 21.0689 36.5015 20.3823V19.9637C36.5015 19.277 35.9402 18.7197 35.2486 18.7197H34.8271C34.1355 18.7197 33.5742 18.1624 33.5742 17.4757V17.0571C33.5742 16.3705 33.0129 15.8131 32.3213 15.8131H31.8997C31.2082 15.8131 30.6468 15.2558 30.6468 14.5691V14.1506C30.6468 13.4639 30.0855 12.9066 29.394 12.9066H28.9724C28.2808 12.9066 27.7195 12.3492 27.7195 11.6626V11.244C27.7195 10.5573 27.1582 10 26.4666 10H22.8217C22.1301 10 21.5688 10.5573 21.5688 11.244V17.772C21.5688 18.4587 22.1301 19.016 22.8217 19.016H23.2432C23.9348 19.016 24.4961 19.5733 24.4961 20.26V23.2936C24.4961 23.9802 23.9348 24.5375 23.2432 24.5375H17.2583C16.5667 24.5375 16.0054 23.9802 16.0054 23.2936V22.875C16.0054 22.1883 15.4441 21.631 14.7525 21.631H14.3309C13.6394 21.631 13.0781 21.0736 13.0781 20.387V19.9684C13.0781 19.2817 12.5168 18.7244 11.8252 18.7244H11.4036C10.712 18.7244 10.1507 18.1671 10.1507 17.4804V17.0618C10.1507 16.3752 9.58942 15.8178 8.89785 15.8178H5.25288C4.56131 15.8178 4 16.3752 4 17.0618V32.3143C4 33.0009 4.56131 33.5582 5.25288 33.5582H5.67446C6.36603 33.5582 6.92734 34.1156 6.92734 34.8022V35.2208C6.92734 35.9075 7.48865 36.4648 8.18022 36.4648H23.2456C23.9372 36.4648 24.4985 37.0221 24.4985 37.7088V40.7424C24.4985 41.429 23.9372 41.9864 23.2456 41.9864H22.824C22.1325 41.9864 21.5711 42.5437 21.5711 43.2303V46.8494C21.5711 47.5361 22.1325 48.0934 22.824 48.0934H23.2456C23.9372 48.0934 24.4985 48.6508 24.4985 49.3374V49.756C24.4985 50.4427 25.0598 51 25.7514 51H26.4666C27.1582 51 27.7195 50.4427 27.7195 49.756V49.3374C27.7195 48.6508 28.2808 48.0934 28.9724 48.0934H29.394C30.0855 48.0934 30.6468 47.5361 30.6468 46.8494V46.4309C30.6468 45.7442 31.2082 45.1869 31.8997 45.1869H32.3213C33.0129 45.1869 33.5742 44.6295 33.5742 43.9429V43.5243C33.5742 42.8376 34.1355 42.2803 34.8271 42.2803H35.2486C35.9402 42.2803 36.5015 41.723 36.5015 41.0363V40.6177C36.5015 39.9311 37.0628 39.3737 37.7544 39.3737H38.176C38.8675 39.3737 39.4289 38.8164 39.4289 38.1297V37.7112C39.4289 37.0245 39.9902 36.4672 40.6817 36.4672H52.8198C53.5114 36.4672 54.0727 35.9098 54.0727 35.2232V34.8046C54.0727 34.1179 54.634 33.5606 55.3255 33.5606H55.7471C56.4387 33.5606 57 33.0033 57 32.3166V28.6975C57 28.0108 56.4387 27.4535 55.7471 27.4535H55.3255C54.634 27.4535 54.0727 26.8962 54.0727 26.2095V26.1954Z" />
            </svg>
          </span>
          <span>Making sure your business always stays one step ahead.</span>
        </div>

        {/* 3 Case Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cases.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-[20px] bg-[#f5f0f0] p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-[16px] bg-[#e5dfdf] mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="px-2 pb-2">
                <h3 className="text-2xl font-serif font-medium text-[#111111] mb-1 group-hover:text-[#ff4f31] transition-colors">
                  {item.title}
                </h3>
                <span className="block text-xs uppercase tracking-wider text-[#666666] mb-3 font-mono">
                  {item.subtitle}
                </span>
                <p className="text-sm leading-relaxed text-[#555555]">
                  {item.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="callout mb-12 flex items-center gap-3 text-xs md:text-sm font-mono tracking-wider uppercase text-[#111111]">
          <span className="w-6 h-6 flex items-center justify-center text-[#ff4f31]">
            <svg width="24" height="24" viewBox="0 0 60 60" fill="currentColor">
              <path d="M54.9191 22.1549H40.7831C40.082 22.1549 39.5147 21.5968 39.5147 20.907V20.3718C39.5147 19.6821 38.9474 19.1239 38.2462 19.1239H37.7022C37.0011 19.1239 36.4338 18.5658 36.4338 17.8761V14.3099C36.4338 13.6201 35.8665 13.062 35.1654 13.062H34.6213C33.9202 13.062 33.3529 12.5039 33.3529 11.8141V8.24788C33.3529 7.55811 32.7856 7 32.0845 7H27.9155C27.2144 7 26.6471 7.55811 26.6471 8.24788V11.8141C26.6471 12.5039 26.0798 13.062 25.3787 13.062H24.8346C24.1335 13.062 23.5662 13.6201 23.5662 14.3099V17.8761C23.5662 18.5658 22.9989 19.1239 22.2978 19.1239H21.7537C21.0526 19.1239 20.4853 19.6821 20.4853 20.3718V20.907C20.4853 21.5968 19.918 22.1549 19.2169 22.1549H3.26843C2.5673 22.1549 2 22.713 2 23.4028V24.4732C2 25.163 2.5673 25.7211 3.26843 25.7211H3.81245C4.51358 25.7211 5.08088 26.2792 5.08088 26.969V27.5042C5.08088 28.194 5.64819 28.7521 6.34932 28.7521H9.97423C10.6754 28.7521 11.2427 29.3102 11.2427 30V30.5352C11.2427 31.225 11.81 31.7831 12.5111 31.7831H16.136C16.8371 31.7831 17.4044 32.3412 17.4044 33.031V39.093C17.4044 39.7827 16.8371 40.3408 16.136 40.3408H15.592C14.8908 40.3408 14.3235 40.899 14.3235 41.5887V51.7521C14.3235 52.4419 14.8908 53 15.592 53H19.7609C20.462 53 21.0293 52.4419 21.0293 51.7521V51.2169C21.0293 50.5271 21.5966 49.969 22.2978 49.969H22.8418C23.5429 49.969 24.1102 49.4109 24.1102 48.7211V48.1859C24.1102 47.4961 24.6775 46.938 25.3787 46.938H25.9227C26.6238 46.938 27.1911 46.3799 27.1911 45.6901V45.1549C27.1911 44.4652 27.7584 43.907 28.4596 43.907H31.5404C32.2416 43.907 32.8089 44.4652 32.8089 45.1549V45.6901C32.8089 46.3799 33.3762 46.938 34.0773 46.938H34.6213C35.3225 46.938 35.8898 47.4961 35.8898 48.1859V48.7211C35.8898 49.4109 36.4571 49.969 37.1582 49.969H37.7022C38.4033 49.969 38.9706 50.5271 38.9706 51.2169V51.7521C38.9706 52.4419 39.538 53 40.2391 53H44.408C45.1091 53 45.6765 52.4419 45.6765 51.7521V41.5887C45.6765 40.899 45.1091 40.3408 44.408 40.3408H43.864C43.1629 40.3408 42.5956 39.7827 42.5956 39.093V33.031C42.5956 32.3412 43.1629 31.7831 43.864 31.7831H47.4889C48.19 31.7831 48.7573 31.225 48.7573 30.5352V30C48.7573 29.3102 49.3246 28.7521 50.0258 28.7521H53.6507C54.3518 28.7521 54.9191 28.194 54.9191 27.5042V26.969C54.9191 26.2792 55.4864 25.7211 56.1875 25.7211H56.7316C57.4327 25.7211 58 25.163 58 24.4732V23.4028C58 22.713 57.4327 22.1549 56.7316 22.1549H54.9191Z" />
            </svg>
          </span>
          <span>Technology shaping future-proof digital experiences.</span>
        </div>

        {/* View all work button */}
        <div>
          <a
            href="https://weichie.com/cases/"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#111111] text-[#111111] font-medium hover:bg-[#111111] hover:text-white transition-all duration-300"
          >
            <span>View all work</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12m0 0-4.5-4.5M16 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default LatestWork;
