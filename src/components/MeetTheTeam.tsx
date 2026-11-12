import React from 'react';

const teamMembers = [
  {
    name: 'Mathias Greenhalgh',
    role: 'Webdeveloper',
    avatar: '/textures/mathias-greengalgh-scaled-1-150x150.jpg',
    location: 'BE',
    isOpen: true
  },
  {
    name: 'Sam Ghyselinck',
    role: 'Webdeveloper',
    avatar: '/textures/sam-ghyselinck-150x150.jpg',
    location: 'BE',
    isOpen: true
  },
  {
    name: 'Sven Vandendael',
    role: 'Treasurer',
    avatar: '/textures/sven-vandendael-headshot-150x150.jpg',
    location: 'BE',
    isOpen: true
  },
  {
    name: 'Yannick Van Meerbeeck',
    role: 'Co-founder, Head of Tech',
    avatar: '/textures/yannick-van-meerbeeck-headshot-150x150.jpg',
    location: 'BE',
    isOpen: true
  },
  {
    name: 'Bob Weichler',
    role: 'Co-founder & Chief Executive Officer',
    avatar: '/textures/bob-weichler-headshot-150x150.jpg',
    location: 'BE',
    isOpen: true
  },
  {
    name: 'Edward Park',
    role: 'UX/UI Designer',
    avatar: '/textures/edward-park-headshot-150x150.jpg',
    location: 'US',
    isOpen: false
  }
];

export function MeetTheTeam() {
  return (
    <section className="meet-the-team py-24 md:py-36 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-[#eee]">
      <div className="meet-the-team__inner">
        {/* Callout */}
        <div className="callout mb-8 flex items-center gap-3 text-xs md:text-sm font-mono tracking-wider uppercase text-[#111111]">
          <span className="w-6 h-6 flex items-center justify-center text-[#ff4f31]">
            <svg width="24" height="24" viewBox="0 0 60 60" fill="currentColor">
              <path d="M50.6505 13.2649V12.7815C50.6505 11.9904 50.0138 11.3488 49.2288 11.3488H48.749C47.964 11.3488 47.3272 10.7072 47.3272 9.9161V9.43268C47.3272 8.64163 46.6905 8 45.9055 8H34.9907C34.2056 8 33.5689 8.64163 33.5689 9.43268V9.9161C33.5689 10.7072 32.9321 11.3488 32.1471 11.3488H28.8267C28.0417 11.3488 27.405 10.7072 27.405 9.9161V9.43268C27.405 8.64163 26.7682 8 25.9832 8H15.0684C14.2833 8 13.6466 8.64163 13.6466 9.43268V9.9161C13.6466 10.7072 13.0098 11.3488 12.2248 11.3488H11.7451C10.96 11.3488 10.3233 11.9904 10.3233 12.7815V13.2649C10.3233 14.0559 9.68654 14.6976 8.90151 14.6976H8.42176C7.63673 14.6976 7 15.3392 7 16.1302V30.4746C7 31.2657 7.63673 31.9073 8.42176 31.9073H8.90151C9.68654 31.9073 10.3233 32.5489 10.3233 33.34V33.8234C10.3233 34.6145 10.96 35.2561 11.7451 35.2561H12.2248C13.0098 35.2561 13.6466 35.8977 13.6466 36.6888V37.1722C13.6466 37.9632 14.2833 38.6049 15.0684 38.6049H15.5481C16.3331 38.6049 16.9699 39.2465 16.9699 40.0376V40.521C16.9699 41.312 17.6066 41.9537 18.3916 41.9537H18.8714C19.6564 41.9537 20.2932 42.5953 20.2932 43.3863V43.8698C20.2932 44.6608 20.9299 45.3024 21.7149 45.3024H22.1947C22.9797 45.3024 23.6164 45.9441 23.6164 46.7351V47.2185C23.6164 48.0096 24.2532 48.6512 25.0382 48.6512H25.518C26.303 48.6512 26.9397 49.2928 26.9397 50.0839V50.5673C26.9397 51.3584 27.5765 52 28.3615 52H32.6385C33.4235 52 34.0602 51.3584 34.0602 50.5673V50.0839C34.0602 49.2928 34.697 48.6512 35.482 48.6512H35.9618C36.7468 48.6512 37.3836 48.0096 37.3836 47.2185V46.7351C37.3836 45.9441 38.0203 45.3024 38.8053 45.3024H39.2851C40.0701 45.3024 40.7068 44.6608 40.7068 43.8698V43.3863C40.7068 42.5953 41.3436 41.9537 42.1286 41.9537H42.6084C43.3934 41.9537 44.0301 41.312 44.0301 40.521V40.0376C44.0301 39.2465 44.6669 38.6049 45.4519 38.6049H45.9316C46.7167 38.6049 47.3534 37.9632 47.3534 37.1722V36.6888C47.3534 35.8977 47.9902 35.2561 48.7752 35.2561H49.2549C50.04 35.2561 50.6767 34.6145 50.6767 33.8234V33.34C50.6767 32.5489 51.3135 31.9073 52.0985 31.9073H52.5782C53.3633 31.9073 54 31.2657 54 30.4746V16.1302C54 15.3392 53.3633 14.6976 52.5782 14.6976H52.0985C51.3135 14.6976 50.6767 14.0559 50.6767 13.2649H50.6505Z" />
            </svg>
          </span>
          <span>Ready to meet the team behind the genius?</span>
        </div>

        {/* Heading & CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-serif font-normal leading-[1.1] tracking-tight text-[#111111]">
            Meet the team
          </h2>
          <a
            href="https://weichie.com/about/"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#ff4f31] text-white font-medium hover:bg-[#e03d20] transition-colors duration-300 w-fit"
          >
            <span>Meet the team</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12m0 0-4.5-4.5M16 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Centerpiece image */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] max-h-[520px] overflow-hidden rounded-[24px] mb-16 shadow-lg bg-[#f0eae8]">
          <img
            src="/textures/weichie-team.jpg"
            alt="Weichie Team"
            loading="eager"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-4 rounded-2xl bg-[#f5f0f0] border border-[#ece4e4] transition-all hover:shadow-md"
            >
              <img
                src={member.avatar}
                alt={member.name}
                loading="eager"
                className="w-16 h-16 rounded-full object-cover flex-shrink-0 border-2 border-white shadow-sm"
              />
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      member.isOpen ? 'bg-emerald-500' : 'bg-amber-500'
                    }`}
                    title={member.isOpen ? 'Office Open' : 'Office Closed'}
                  />
                  <h4 className="font-semibold text-[#111111] text-base truncate">
                    {member.name}
                  </h4>
                </div>
                <p className="text-xs text-[#666666] font-mono tracking-wide truncate">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MeetTheTeam;
