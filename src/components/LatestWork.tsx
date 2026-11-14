import React, { useEffect, useRef, useState, useCallback, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextReveal } from './TextReveal';

gsap.registerPlugin(ScrollTrigger);

export interface VideoItem {
  src: string;
  title: string;
}

const PLAYLISTS: VideoItem[][] = [
  // Slot 1 (Left Card - Landscape 16:9 Widescreen)
  [
    { src: '/videos/latest-work/slot-1-video-1.mp4', title: '3D Camera Motion' },
    { src: '/videos/latest-work/slot-2-video-1.mp4', title: 'Motion Graphics Reel' },
    { src: '/videos/latest-work/slot-3-video-1.mp4', title: 'Mahadi Hasan Feature' }
  ],
  // Slot 2 (Center Card - Portrait 9:16 Vertical Reel)
  [
    { src: '/videos/latest-work/slot-2-video-2.mp4', title: 'Cinematic Story' },
    { src: '/videos/latest-work/slot-2-video-3.mp4', title: 'Dramatic Short' },
    { src: '/videos/latest-work/slot-1-video-2-portrait.mp4', title: 'AI Visual Production' }
  ],
  // Slot 3 (Right Card - Custom 1:1 Square Format)
  [
    { src: '/videos/latest-work/slot-1-video-3.mp4', title: 'Coffee Commercial' },
    { src: '/videos/latest-work/slot-3-video-2.mp4', title: 'Documentary Narrative' },
    { src: '/videos/latest-work/slot-3-video-3-custom.mp4', title: 'Cinematic Sequence' }
  ]
];

const cases = [
  {
    id: 1,
    pos: 1,
    title: '3D & Commercial Motion',
    subtitle: '16:9 Landscape Motion',
    description: 'Dynamic 3D camera sweeps, AI-driven visual productions, and high-conversion commercial edits designed to capture instant viewer attention.',
    playlist: PLAYLISTS[0],
    link: '#video-showcase-1'
  },
  {
    id: 2,
    pos: 2,
    title: 'Brand Films & Social Edits',
    subtitle: '9:16 Vertical Reels',
    description: 'Cinematic storytelling, snappy short-form pacing, and fluid motion graphics engineered to stop the scroll and drive engagement.',
    playlist: PLAYLISTS[1],
    link: '#video-showcase-2'
  },
  {
    id: 3,
    pos: 3,
    title: 'Documentary & Narrative Cuts',
    subtitle: 'Custom & Square Cuts',
    description: 'Story-driven documentary cuts, rich Hollywood-grade color grading, and rhythmic audio design crafted for lasting emotional resonance.',
    playlist: PLAYLISTS[2],
    link: '#video-showcase-3'
  }
];

const AirplaneIcon: React.FC = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M54.0727 26.1954V25.7768C54.0727 25.0902 53.5114 24.5328 52.8198 24.5328H40.6817C39.9902 24.5328 39.4289 23.9755 39.4289 23.2888V22.8703C39.4289 22.1836 38.8675 21.6263 38.176 21.6263H37.7544C37.0628 21.6263 36.5015 21.0689 36.5015 20.3823V19.9637C36.5015 19.277 35.9402 18.7197 35.2486 18.7197H34.8271C34.1355 18.7197 33.5742 18.1624 33.5742 17.4757V17.0571C33.5742 16.3705 33.0129 15.8131 32.3213 15.8131H31.8997C31.2082 15.8131 30.6468 15.2558 30.6468 14.5691V14.1506C30.6468 13.4639 30.0855 12.9066 29.394 12.9066H28.9724C28.2808 12.9066 27.7195 12.3492 27.7195 11.6626V11.244C27.7195 10.5573 27.1582 10 26.4666 10H22.8217C22.1301 10 21.5688 10.5573 21.5688 11.244V17.772C21.5688 18.4587 22.1301 19.016 22.8217 19.016H23.2432C23.9348 19.016 24.4961 19.5733 24.4961 20.26V23.2936C24.4961 23.9802 23.9348 24.5375 23.2432 24.5375H17.2583C16.5667 24.5375 16.0054 23.9802 16.0054 23.2936V22.875C16.0054 22.1883 15.4441 21.631 14.7525 21.631H14.3309C13.6394 21.631 13.0781 21.0736 13.0781 20.387V19.9684C13.0781 19.2817 12.5168 18.7244 11.8252 18.7244H11.4036C10.712 18.7244 10.1507 18.1671 10.1507 17.4804V17.0618C10.1507 16.3752 9.58942 15.8178 8.89785 15.8178H5.25288C4.56131 15.8178 4 16.3752 4 17.0618V32.3143C4 33.0009 4.56131 33.5582 5.25288 33.5582H5.67446C6.36603 33.5582 6.92734 34.1156 6.92734 34.8022V35.2208C6.92734 35.9075 7.48865 36.4648 8.18022 36.4648H23.2456C23.9372 36.4648 24.4985 37.0221 24.4985 37.7088V40.7424C24.4985 41.429 23.9372 41.9864 23.2456 41.9864H22.824C22.1325 41.9864 21.5711 42.5437 21.5711 43.2303V46.8494C21.5711 47.5361 22.1325 48.0934 22.824 48.0934H23.2456C23.9372 48.0934 24.4985 48.6508 24.4985 49.3374V49.756C24.4985 50.4427 25.0598 51 25.7514 51H26.4666C27.1582 51 27.7195 50.4427 27.7195 49.756V49.3374C27.7195 48.6508 28.2808 48.0934 28.9724 48.0934H29.394C30.0855 48.0934 30.6468 47.5361 30.6468 46.8494V46.4309C30.6468 45.7442 31.2082 45.1869 31.8997 45.1869H32.3213C33.0129 45.1869 33.5742 44.6295 33.5742 43.9429V43.5243C33.5742 42.8376 34.1355 42.2803 34.8271 42.2803H35.2486C35.9402 42.2803 36.5015 41.723 36.5015 41.0363V40.6177C36.5015 39.9311 37.0628 39.3737 37.7544 39.3737H38.176C38.8675 39.3737 39.4289 38.8164 39.4289 38.1297V37.7112C39.4289 37.0245 39.9902 36.4672 40.6817 36.4672H52.8198C53.5114 36.4672 54.0727 35.9098 54.0727 35.2232V34.8046C54.0727 34.1179 54.634 33.5606 55.3255 33.5606H55.7471C56.4387 33.5606 57 33.0033 57 32.3166V28.6975C57 28.0108 56.4387 27.4535 55.7471 27.4535H55.3255C54.634 27.4535 54.0727 26.8962 54.0727 26.2095V26.1954ZM53.779 30.6423V32.0133C53.779 32.6999 53.2177 33.2572 52.5261 33.2572H40.3881C39.6965 33.2572 39.1352 33.8146 39.1352 34.5012V34.9198C39.1352 35.6065 38.5739 36.1638 37.8823 36.1638H37.4607C36.7691 36.1638 36.2078 36.7211 36.2078 37.4078V37.8264C36.2078 38.5131 35.6465 39.0704 34.955 39.0704H34.5334C33.8418 39.0704 33.2805 39.6277 33.2805 40.3144V40.733C33.2805 41.4196 32.7192 41.9769 32.0276 41.9769H31.606C30.9145 41.9769 30.3532 42.5343 30.3532 43.2209V43.6395C30.3532 44.3262 29.7919 44.8835 29.1003 44.8835H28.6787C27.9871 44.8835 27.4258 45.4408 27.4258 46.1275V46.5461C27.4258 47.2328 26.8645 47.7901 26.1729 47.7901H26.0474C25.3558 47.7901 24.7945 47.2328 24.7945 46.5461V43.5125C24.7945 42.8259 25.3558 42.2685 26.0474 42.2685H26.469C27.1606 42.2685 27.7219 41.7112 27.7219 41.0246V34.4965C27.7219 33.8099 27.1606 33.2525 26.469 33.2525H8.46443C7.77286 33.2525 7.21155 32.6952 7.21155 32.0086V20.2506C7.21155 19.5639 7.77286 19.0066 8.46443 19.0066H8.58995C9.28153 19.0066 9.84284 19.5639 9.84284 20.2506V20.6692C9.84284 21.3558 10.4041 21.9132 11.0957 21.9132H11.5173C12.2089 21.9132 12.7702 22.4705 12.7702 23.1572V23.5757C12.7702 24.2624 13.3315 24.8197 14.0231 24.8197H14.4446C15.1362 24.8197 15.6975 25.3771 15.6975 26.0637V26.4823C15.6975 27.169 16.2588 27.7263 16.9504 27.7263H26.4524C27.144 27.7263 27.7053 27.169 27.7053 26.4823V19.9543C27.7053 19.2676 27.144 18.7103 26.4524 18.7103H26.0308C25.3393 18.7103 24.778 18.153 24.778 17.4663V14.4328C24.778 13.7461 25.3393 13.1888 26.0308 13.1888H26.1564C26.8479 13.1888 27.4092 13.7461 27.4092 14.4328V14.8513C27.4092 15.538 27.9706 16.0953 28.6621 16.0953H29.0837C29.7753 16.0953 30.3366 16.6527 30.3366 17.3393V17.7579C30.3366 18.4446 30.8979 19.0019 31.5895 19.0019H32.011C32.7026 19.0019 33.2639 19.5592 33.2639 20.2459V20.6645C33.2639 21.3511 33.8252 21.9085 34.5168 21.9085H34.9384C35.63 21.9085 36.1913 22.4658 36.1913 23.1525V23.571C36.1913 24.2577 36.7526 24.815 37.4441 24.815H37.8657C38.5573 24.815 39.1186 25.3724 39.1186 26.059V26.4776C39.1186 27.1643 39.6799 27.7216 40.3715 27.7216H52.5095C53.2011 27.7216 53.7624 28.2789 53.7624 28.9656V30.6282L53.779 30.6423Z" fill="currentColor"/>
  </svg>
);

const StarIcon: React.FC = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M54.9191 22.1549H40.7831C40.082 22.1549 39.5147 21.5968 39.5147 20.907V20.3718C39.5147 19.6821 38.9474 19.1239 38.2462 19.1239H37.7022C37.0011 19.1239 36.4338 18.5658 36.4338 17.8761V14.3099C36.4338 13.6201 35.8665 13.062 35.1654 13.062H34.6213C33.9202 13.062 33.3529 12.5039 33.3529 11.8141V8.24788C33.3529 7.55811 32.7856 7 32.0845 7H27.9155C27.2144 7 26.6471 7.55811 26.6471 8.24788V11.8141C26.6471 12.5039 26.0798 13.062 25.3787 13.062H24.8346C24.1335 13.062 23.5662 13.6201 23.5662 14.3099V17.8761C23.5662 18.5658 22.9989 19.1239 22.2978 19.1239H21.7537C21.0526 19.1239 20.4853 19.6821 20.4853 20.3718V20.907C20.4853 21.5968 19.918 22.1549 19.2169 22.1549H3.26843C2.5673 22.1549 2 22.713 2 23.4028V24.4732C2 25.163 2.5673 25.7211 3.26843 25.7211H3.81245C4.51358 25.7211 5.08088 26.2792 5.08088 26.969V27.5042C5.08088 28.194 5.64819 28.7521 6.34932 28.7521H9.97423C10.6754 28.7521 11.2427 29.3102 11.2427 30V30.5352C11.2427 31.225 11.81 31.7831 12.5111 31.7831H16.136C16.8371 31.7831 17.4044 32.3412 17.4044 33.031V39.093C17.4044 39.7827 16.8371 40.3408 16.136 40.3408H15.592C14.8908 40.3408 14.3235 40.899 14.3235 41.5887V51.7521C14.3235 52.4419 14.8908 53 15.592 53H19.7609C20.462 53 21.0293 52.4419 21.0293 51.7521V51.2169C21.0293 50.5271 21.5966 49.969 22.2978 49.969H22.8418C23.5429 49.969 24.1102 49.4109 24.1102 48.7211V48.1859C24.1102 47.4961 24.6775 46.938 25.3787 46.938H25.9227C26.6238 46.938 27.1911 46.3799 27.1911 45.6901V45.1549C27.1911 44.4652 27.7584 43.907 28.4596 43.907H31.5404C32.2416 43.907 32.8089 44.4652 32.8089 45.1549V45.6901C32.8089 46.3799 33.3762 46.938 34.0773 46.938H34.6213C35.3225 46.938 35.8898 47.4961 35.8898 48.1859V48.7211C35.8898 49.4109 36.4571 49.969 37.1582 49.969H37.7022C38.4033 49.969 38.9706 50.5271 38.9706 51.2169V51.7521C38.9706 52.4419 39.538 53 40.2391 53H44.408C45.1091 53 45.6765 52.4419 45.6765 51.7521V41.5887C45.6765 40.899 45.1091 40.3408 44.408 40.3408H43.864C43.1629 40.3408 42.5956 39.7827 42.5956 39.093V33.031C42.5956 32.3412 43.1629 31.7831 43.864 31.7831H47.4889C48.19 31.7831 48.7573 31.225 48.7573 30.5352V30C48.7573 29.3102 49.3246 28.7521 50.0258 28.7521H53.6507C54.3518 28.7521 54.9191 28.194 54.9191 27.5042V26.969C54.9191 26.2792 55.4864 25.7211 56.1875 25.7211H56.7316C57.4327 25.7211 58 25.163 58 24.4732V23.4028C58 22.713 57.4327 22.1549 56.7316 22.1549H54.9191Z" fill="currentColor"/>
  </svg>
);

/* Pixel-art Pointer Hand Icon for .cursor-card (extracted directly from Weichie bundle) */
const CursorHandIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 52" fill="none" aria-hidden="true" className="w-[18px] h-[24px] text-[#ff4f31]">
    <path d="M34.8721 21.1178V20.5286C34.8721 20.0163 34.4567 19.598 33.9418 19.598H33.3529C32.8407 19.598 32.4225 19.1824 32.4225 18.6673V18.0782C32.4225 17.5659 32.0071 17.1475 31.4922 17.1475H30.9032C30.3911 17.1475 29.9729 16.732 29.9729 16.2168V15.6277C29.9729 15.1154 29.5575 14.6971 29.0426 14.6971H28.4536C27.9415 14.6971 27.5233 14.2815 27.5233 13.7664V13.1773C27.5233 12.665 27.1079 12.2466 26.5929 12.2466H26.004C25.4919 12.2466 25.0737 11.8311 25.0737 11.3159V10.7268C25.0737 10.2145 24.6583 9.79614 24.1433 9.79614H23.5544C23.0423 9.79614 22.624 9.38061 22.624 8.86548V3.38112C22.624 2.86883 22.2087 2.45046 21.6937 2.45046H21.1048C20.5927 2.45046 20.1744 2.03493 20.1744 1.5198V0.930661C20.1744 0.418371 19.7591 0 19.2441 0H15.6223C15.1102 0 14.692 0.415525 14.692 0.930661V1.5198C14.692 2.03209 14.2766 2.45046 13.7616 2.45046H13.1727C12.6606 2.45046 12.2423 2.86598 12.2423 3.38112V23.5483C12.2423 24.0606 11.827 24.479 11.312 24.479C10.7999 24.479 10.3817 24.0634 10.3817 23.5483V22.9592C10.3817 22.4469 9.9663 22.0285 9.45134 22.0285H8.86239C8.35028 22.0285 7.93208 21.613 7.93208 21.0978V20.5087C7.93208 19.9964 7.51669 19.578 7.00173 19.578H3.37995C2.86784 19.578 2.44961 19.9936 2.44961 20.5087V21.0978C2.44961 21.6101 2.03422 22.0285 1.51926 22.0285H0.930312C0.418197 22.0285 0 22.444 0 22.9592V24.1374C0 24.6497 0.415352 25.0681 0.930312 25.0681H1.51926C2.03138 25.0681 2.44961 25.4836 2.44961 25.9988V26.5879C2.44961 27.1002 2.865 27.5186 3.37995 27.5186H3.96887C4.48099 27.5186 4.89922 27.9341 4.89922 28.4492V31.486C4.89922 31.9982 5.3146 32.4166 5.82956 32.4166H6.41848C6.93059 32.4166 7.34883 32.8321 7.34883 33.3473V36.384C7.34883 36.8963 7.76421 37.3147 8.27917 37.3147H8.86809C9.3802 37.3147 9.79843 37.7302 9.79843 38.2453V51.0697C9.79843 51.582 10.2138 52.0004 10.7288 52.0004H31.478C31.9901 52.0004 32.4083 51.5848 32.4083 51.0697V40.693C32.4083 40.1807 32.8237 39.7623 33.3386 39.7623H33.9276C34.4397 39.7623 34.8579 39.3468 34.8579 38.8316V33.3473C34.8579 32.835 35.2733 32.4166 35.7882 32.4166H36.3772C36.8893 32.4166 37.3075 32.0011 37.3075 31.486V22.9677C37.3075 22.4554 36.8921 22.037 36.3772 22.037H35.7882C35.2761 22.037 34.8579 21.6215 34.8579 21.1064L34.8721 21.1178ZM34.2832 25.0823V30.9054C34.2832 31.4177 33.8678 31.836 33.3529 31.836H32.7639C32.2518 31.836 31.8336 32.2515 31.8336 32.7667V38.251C31.8336 38.7633 31.4182 39.1817 30.9032 39.1817H30.3143C29.8022 39.1817 29.3839 39.5972 29.3839 40.1124V48.0415C29.3839 48.5538 28.9686 48.9721 28.4536 48.9721H13.7758C13.2637 48.9721 12.8455 48.5566 12.8455 48.0415V37.6647C12.8455 37.1525 12.4302 36.7341 11.9152 36.7341H11.3262C10.8141 36.7341 10.3959 36.3186 10.3959 35.8034V32.7667C10.3959 32.2544 9.98051 31.836 9.46555 31.836H8.87663C8.36452 31.836 7.94629 31.4205 7.94629 30.9054V27.8686C7.94629 27.3563 7.5309 26.938 7.01594 26.938H6.42702C5.91491 26.938 5.49668 26.5224 5.49668 26.0073V25.4182C5.49668 24.9059 5.08129 24.4875 4.56633 24.4875H3.97741C3.4653 24.4875 3.04707 24.072 3.04707 23.5568C3.04707 23.0445 3.46246 22.6262 3.97741 22.6262H6.42418C6.93629 22.6262 7.35452 23.0417 7.35452 23.5568V24.146C7.35452 24.6583 7.76991 25.0766 8.28487 25.0766H8.87378C9.3859 25.0766 9.80413 25.4922 9.80413 26.0073V26.5964C9.80413 27.1087 10.2195 27.5271 10.7345 27.5271H11.3234C11.8355 27.5271 12.2537 27.9426 12.2537 28.4577V29.0469C12.2537 29.5592 12.6691 29.9775 13.1841 29.9775H14.362C14.8741 29.9775 15.2923 29.562 15.2923 29.0469V3.98733C15.2923 3.47504 15.7077 3.05667 16.2226 3.05667H18.6694C19.1815 3.05667 19.5998 3.47219 19.5998 3.98733V24.1545C19.5998 24.6668 20.0151 25.0852 20.5301 25.0852H21.7079C22.22 25.0852 22.6383 24.6696 22.6383 24.1545V13.7778C22.6383 13.2655 23.0537 12.8471 23.5686 12.8471C24.0807 12.8471 24.499 13.2626 24.499 13.7778V24.1545C24.499 24.6668 24.9144 25.0852 25.4293 25.0852H26.6071C27.1193 25.0852 27.5375 24.6696 27.5375 24.1545V18.6702C27.5375 18.1579 27.9529 17.7395 28.4678 17.7395C28.98 17.7395 29.3982 18.155 29.3982 18.6702V24.1545C29.3982 24.6668 29.8136 25.0852 30.3285 25.0852H31.5064C32.0185 25.0852 32.4367 24.6696 32.4367 24.1545V23.5654C32.4367 23.0531 32.8521 22.6347 33.3671 22.6347C33.8792 22.6347 34.2974 23.0502 34.2974 23.5654V25.0823H34.2832Z" fill="currentColor"/>
  </svg>
);

const VolumeMuteIcon: React.FC = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
    <line x1="23" y1="9" x2="17" y2="15" />
    <line x1="17" y1="9" x2="23" y2="15" />
  </svg>
);

const VolumeUpIcon: React.FC = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
  </svg>
);

/* Mapping from video source to project ID in userProjects.json */
const VIDEO_SRC_TO_PROJECT_ID: Record<string, number> = {
  '/videos/latest-work/slot-1-video-1.mp4': 1,
  '/videos/latest-work/slot-1-video-2.mp4': 2,
  '/videos/latest-work/slot-1-video-2-portrait.mp4': 2,
  '/videos/latest-work/slot-1-video-3.mp4': 3,
  '/videos/latest-work/slot-2-video-1.mp4': 4,
  '/videos/latest-work/slot-2-video-2.mp4': 5,
  '/videos/latest-work/slot-2-video-3.mp4': 6,
  '/videos/latest-work/slot-3-video-1.mp4': 7,
  '/videos/latest-work/slot-3-video-2.mp4': 8,
  '/videos/latest-work/slot-3-video-3.mp4': 9,
  '/videos/latest-work/slot-3-video-3-custom.mp4': 9,
};

/* Card Video Media with 3-video continuous sequential queue & optional audio toggle */
interface CardVideoMediaProps {
  playlist: VideoItem[];
  title: string;
  imgRef: React.RefObject<HTMLDivElement | null>;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  onSelectVideo?: (projectId: number) => void;
  onActiveProjectChange?: (projectId: number) => void;
  aspectRatioClass?: string;
}

const CardVideoMedia: React.FC<CardVideoMediaProps> = ({
  playlist,
  title,
  imgRef,
  onHoverStart,
  onHoverEnd,
  onSelectVideo,
  onActiveProjectChange,
  aspectRatioClass = 'aspect-[16/9]'
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [sweepActive, setSweepActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sweepTimerRef = useRef<number | null>(null);

  const currentVideo = playlist[currentIndex] || playlist[0];

  useEffect(() => {
    const pid = VIDEO_SRC_TO_PROJECT_ID[currentVideo.src];
    if (pid && onActiveProjectChange) {
      onActiveProjectChange(pid);
    }
  }, [currentVideo.src, onActiveProjectChange]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = isMuted;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        video.muted = true;
        setIsMuted(true);
        video.play().catch(() => {});
      });
    }
  }, [currentIndex]);

  const handleVideoEnded = () => {
    setCurrentIndex(prev => (prev + 1) % playlist.length);
  };

  const handleSoundToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const nextMuted = !isMuted;
    if (videoRef.current) {
      videoRef.current.muted = nextMuted;
    }
    setIsMuted(nextMuted);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setSweepActive(true);
    onHoverStart();

    if (sweepTimerRef.current) clearTimeout(sweepTimerRef.current);
    sweepTimerRef.current = window.setTimeout(() => {
      setSweepActive(false);
    }, 850);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setSweepActive(false);
    onHoverEnd();
    if (sweepTimerRef.current) clearTimeout(sweepTimerRef.current);
  };

  return (
    <div 
      className={`relative w-full ${aspectRatioClass} rounded-[20px] overflow-hidden bg-[#0d0c0a] cursor-none select-none group/video shadow-studio-3-card cursor-pointer`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        const pid = VIDEO_SRC_TO_PROJECT_ID[currentVideo.src] || 1;
        if (onSelectVideo) onSelectVideo(pid);
      }}
    >
      {/* Underlying Video Container */}
      <div 
        ref={imgRef}
        className="w-full h-full relative will-change-transform flex items-center justify-center bg-[#0d0c0a]"
      >
        <video
          ref={videoRef}
          key={currentVideo.src}
          src={currentVideo.src}
          autoPlay
          muted={isMuted}
          playsInline
          preload="auto"
          onEnded={handleVideoEnded}
          className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* Top 3-Video Sequential Queue Progress Indicator */}
      <div className="absolute top-3 inset-x-3 z-20 flex items-center gap-1.5 pointer-events-none">
        {playlist.map((item, idx) => (
          <div 
            key={idx} 
            className="h-1 flex-1 rounded-full bg-black/40 overflow-hidden backdrop-blur-md"
            title={item.title}
          >
            <div 
              className={`h-full transition-all duration-300 ${
                idx === currentIndex 
                  ? 'w-full bg-[#ff4f31]' 
                  : idx < currentIndex 
                    ? 'w-full bg-white/60' 
                    : 'w-0'
              }`} 
            />
          </div>
        ))}
      </div>

      {/* Bottom Floating Pill: Video Title Tag & Sound Unmute Toggle */}
      <div className="absolute bottom-3 inset-x-3 z-30 flex items-center justify-between gap-2 pointer-events-auto">
        <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-sans font-medium text-white/90 tracking-[-0.01em] truncate max-w-[70%] border border-white/10">
          {currentVideo.title}
        </span>

        <button
          type="button"
          onClick={handleSoundToggle}
          aria-label={isMuted ? "Unmute audio" : "Mute audio"}
          title={isMuted ? "Sound Off (Click to unmute)" : "Sound On (Click to mute)"}
          className="w-8 h-8 rounded-full bg-black/70 hover:bg-[#ff4f31] backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 shadow-sm shrink-0 cursor-pointer hover:scale-110 active:scale-95 border border-white/15"
        >
          {isMuted ? <VolumeMuteIcon /> : <VolumeUpIcon />}
        </button>
      </div>

      {/* Shimmer / Specular Sweep Bar */}
      <div 
        className={`pointer-events-none absolute inset-0 w-[200%] h-full ${
          sweepActive ? 'translate-x-[50%]' : '-translate-x-[100%]'
        }`}
        style={{
          background: 'linear-gradient(105deg, transparent 20%, rgba(255, 255, 255, 0.25) 50%, transparent 80%)',
          transform: sweepActive ? 'translateX(100%)' : 'translateX(-100%)',
          transition: 'transform 0.85s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      />
    </div>
  );
};

const LATEST_WORK_LINES = ['Some of my', 'latest work'] as const;

export interface LatestWorkProps {
  onViewAllWork?: () => void;
  onSelectVideo?: (projectId: number) => void;
}

export const LatestWork: React.FC<LatestWorkProps> = ({ onViewAllWork, onSelectVideo }) => {
  const [slot1ProjectId, setSlot1ProjectId] = useState(1);
  const [slot2ProjectId, setSlot2ProjectId] = useState(5);
  const [slot3ProjectId, setSlot3ProjectId] = useState(3);
  const sectionRef = useRef<HTMLElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  const col3Ref = useRef<HTMLDivElement>(null);
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);
  const img3Ref = useRef<HTMLDivElement>(null);

  const [inView, setInView] = useState(false);

  // Floating Cursor Card DOM refs (direct hardware-accelerated GSAP transforms, no React re-renders)
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorIconRef = useRef<HTMLSpanElement>(null);
  const lastXRef = useRef<number | null>(null);
  const idleTimerRef = useRef<number | null>(null);

  // Intersection observer for heading reveal and icon pop animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // GSAP ScrollTrigger for 120 FPS continuous parallax scrub
  // 100% REA from Weichie main bundle: pos 1 = 10, pos 2 = 28, pos 3 = 16, cover = -12
  // "স্ক্রল করলে নিচেরটা উপরের দিকে উঠে যাচ্ছে। দুই পাশের দুইটা হালকা একটু উপরে উঠতেছে, মাঝখানেরটা একটু বেশি উপরে।"
  useLayoutEffect(() => {
    if (!sectionRef.current || !col1Ref.current || !col2Ref.current || !col3Ref.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 768px)', () => {
        // Column 1 (De Druglijn): Weichie pos 1 (gentle rise: 10% to -10%)
        gsap.fromTo(
          col1Ref.current,
          { yPercent: 10 },
          {
            yPercent: -10,
            ease: 'none',
            scrollTrigger: {
              trigger: col1Ref.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.6
            }
          }
        );

        // Column 2 (Dogchef, middle project): Weichie pos 2 (powerful rise: 28% to -28%)
        // When scrolling down, Dogchef climbs powerfully by over 500px from the bottom
        gsap.fromTo(
          col2Ref.current,
          { yPercent: 28 },
          {
            yPercent: -28,
            ease: 'none',
            scrollTrigger: {
              trigger: col2Ref.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.6
            }
          }
        );

        // Column 3 (Spantech): Weichie pos 3 (moderate rise: 16% to -16%)
        gsap.fromTo(
          col3Ref.current,
          { yPercent: 16 },
          {
            yPercent: -16,
            ease: 'none',
            scrollTrigger: {
              trigger: col3Ref.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.6
            }
          }
        );

        // Card video containers maintain scale 1.0 to guarantee zero video cropping
        [
          img1Ref.current,
          img2Ref.current,
          img3Ref.current
        ].forEach((img) => {
          if (img) {
            gsap.set(img, { scale: 1.0, yPercent: 0 });
          }
        });
      });

      // Refresh ScrollTrigger to recalculate accurate trigger positions after layout settles
      ScrollTrigger.refresh();
      const t1 = setTimeout(() => ScrollTrigger.refresh(), 300);
      const t2 = setTimeout(() => ScrollTrigger.refresh(), 1000);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Direct DOM GSAP quickTo tracking for the floating circular cursor (0 re-renders, 120 FPS)
  useEffect(() => {
    const cursor = cursorRef.current;
    const icon = cursorIconRef.current;
    if (!cursor || !icon) return;

    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.18, ease: 'power3' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.18, ease: 'power3' });
    const rTo = gsap.quickTo(icon, 'rotation', { duration: 0.25, ease: 'power3' });

    const handlePointerMove = (e: PointerEvent) => {
      xTo(e.clientX - 24);
      yTo(e.clientY - 24);

      if (lastXRef.current !== null) {
        const deltaX = e.clientX - lastXRef.current;
        const tilt = Math.min(Math.max(deltaX * 0.4, -25), 25);
        rTo(tilt);
      }
      lastXRef.current = e.clientX;

      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      idleTimerRef.current = window.setTimeout(() => {
        rTo(0);
      }, 120);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, []);

  const handleCardHoverStart = useCallback(() => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, { scale: 1, opacity: 1, duration: 0.2, ease: 'power2.out', overwrite: 'auto' });
    }
  }, []);

  const handleCardHoverEnd = useCallback(() => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, { scale: 0, opacity: 0, duration: 0.2, ease: 'power2.out', overwrite: 'auto' });
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="block-wrapper block-latest-work relative w-full bg-[var(--clr-beige,#f4efea)] text-[var(--clr-text,#12110b)] transition-colors duration-300 overflow-hidden"
      data-background="beige"
      style={{
        paddingTop: 'clamp(5rem, 3.125vw + 4.375rem, 7.5rem)',
        paddingBottom: 'clamp(5rem, 3.125vw + 4.375rem, 7.5rem)'
      }}
    >
      {/* Floating .cursor-card (Round circular badge with orange hand icon following cursor) */}
      <div 
        ref={cursorRef}
        className="cursor-card fixed pointer-events-none z-[9999] rounded-full bg-[var(--clr-bg,#ffffff)] shadow-[0_6px_24px_rgba(0,0,0,0.18)] flex items-center justify-center will-change-transform"
        style={{
          width: '3rem',   // exact 48px
          height: '3rem',  // exact 48px
          top: 0,
          left: 0,
          transform: 'translate3d(-100px, -100px, 0) scale(0)',
          opacity: 0,
        }}
        aria-hidden="true"
      >
        <span 
          ref={cursorIconRef}
          className="cursor-card__icon block will-change-transform"
        >
          <CursorHandIcon />
        </span>
      </div>

      <div 
        className="w-full mx-auto"
        style={{
          maxWidth: 'calc(98rem + clamp(1.25rem, 4.6875vw + .3125rem, 5rem) * 2)',
          paddingLeft: 'clamp(1.25rem, 4.6875vw + .3125rem, 5rem)',
          paddingRight: 'clamp(1.25rem, 4.6875vw + .3125rem, 5rem)'
        }}
      >
        {/* Massive 2-Line Season Mix Heading matching Weichie Image 1 with exact staggered word reveal */}
        <TextReveal
          lines={LATEST_WORK_LINES as unknown as string[]}
          className="latest-work__heading text-center font-normal tracking-[-0.02em] mx-auto text-[var(--clr-text,#12110b)]"
          style={{
            fontFamily: "'Season Mix', Georgia, serif",
            fontSize: 'clamp(3rem, 9.375vw + 0.625rem, 9.0625rem)', // ~145px at 1440px
            lineHeight: 1.0,
            maxWidth: '64.625rem',
            marginBottom: 'clamp(5rem, 7.8125vw + 4.6875rem, 11.5rem)', // ~180px gap
            color: 'var(--clr-text, #12110b)'
          }}
        />

        {/* Showcase Container with 5-track Staggered Grid & Top-Right Callout */}
        <div className="relative w-full">
          {/* Top-Right Callout Badge over Column 3 (Spantech) */}
          <div 
            className="hidden lg:block absolute top-0 right-0 z-20"
            style={{
              maxWidth: '13.75rem' // exact 220px from Weichie
            }}
          >
            <div className="flex items-start gap-2.5 text-[15px] font-sans uppercase tracking-[-0.02em] font-normal text-[var(--clr-text,#12110b)] leading-[1.35]">
              <span 
                className="w-9 h-9 text-[#ff4f31] shrink-0 transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-200"
                style={{
                  transform: inView ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(-25deg)',
                  opacity: inView ? 1 : 0
                }}
              >
                <AirplaneIcon />
              </span>
              <span>
                Crafting visual stories that keep your brand one step ahead.
              </span>
            </div>
          </div>

          {/* Staggered 3-Column Grid using tailored multi-aspect geometry */}
          <div 
            className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.35fr)_clamp(2.5rem,4vw,4.5rem)_minmax(0,0.9fr)_clamp(2rem,3vw,3.5rem)_minmax(0,1.1fr)] items-start gap-y-16 lg:gap-y-0"
          >
            {/* Col 1: Landscape Widescreen (pos 1, grid-col 1) */}
            <div 
              ref={col1Ref}
              className="lg:col-start-1 relative will-change-transform w-full"
            >
              <div 
                onClick={() => onSelectVideo && onSelectVideo(slot1ProjectId)}
                className="group block cursor-pointer"
                data-cursor-card
              >
                {/* 3-Video Sequential Player Card with Blur-Sweep & Audio Toggle */}
                <CardVideoMedia 
                  playlist={cases[0].playlist}
                  title={cases[0].title}
                  imgRef={img1Ref}
                  onHoverStart={handleCardHoverStart}
                  onHoverEnd={handleCardHoverEnd}
                  onSelectVideo={onSelectVideo}
                  onActiveProjectChange={setSlot1ProjectId}
                  aspectRatioClass="aspect-[16/9]"
                />

                {/* Card Body */}
                <div className="pt-6 pb-2 flex flex-col gap-2">
                  <h3 
                    className="text-[27px] font-normal leading-[1.25] tracking-[-0.02em] text-[var(--clr-text,#12110b)] group-hover:text-[#ff4f31] transition-colors duration-300"
                    style={{ fontFamily: "'Season Mix', Georgia, serif" }}
                  >
                    {cases[0].title}
                  </h3>
                  <span className="text-[15.75px] uppercase font-sans font-medium tracking-[-0.02em] text-[#666666] dark:text-[#a09e99]">
                    {cases[0].subtitle}
                  </span>
                  <p className="text-[17.5px] font-sans font-medium text-[#555555] dark:text-[#999994] leading-[1.3] line-clamp-3">
                    {cases[0].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Col 2: Portrait Vertical Reel (pos 2, grid-col 3, staggered with aspect-[16/7] spacer) */}
            <div 
              ref={col2Ref}
              className="lg:col-start-3 relative will-change-transform max-w-[380px] mx-auto lg:max-w-none w-full"
            >
              {/* Desktop Masonry Spacer: aspect-[16/7] pushes portrait card down gracefully */}
              <div className="hidden lg:block w-full aspect-[16/7]" aria-hidden="true" />

              <div 
                onClick={() => onSelectVideo && onSelectVideo(slot2ProjectId)}
                className="group block cursor-pointer"
                data-cursor-card
              >
                {/* 3-Video Sequential Player Card with Blur-Sweep & Audio Toggle */}
                <CardVideoMedia 
                  playlist={cases[1].playlist}
                  title={cases[1].title}
                  imgRef={img2Ref}
                  onHoverStart={handleCardHoverStart}
                  onHoverEnd={handleCardHoverEnd}
                  onSelectVideo={onSelectVideo}
                  onActiveProjectChange={setSlot2ProjectId}
                  aspectRatioClass="aspect-[9/16]"
                />

                {/* Card Body */}
                <div className="pt-6 pb-2 flex flex-col gap-2">
                  <h3 
                    className="text-[27px] font-normal leading-[1.25] tracking-[-0.02em] text-[var(--clr-text,#12110b)] group-hover:text-[#ff4f31] transition-colors duration-300"
                    style={{ fontFamily: "'Season Mix', Georgia, serif" }}
                  >
                    {cases[1].title}
                  </h3>
                  <span className="text-[15.75px] uppercase font-sans font-medium tracking-[-0.02em] text-[#666666] dark:text-[#a09e99]">
                    {cases[1].subtitle}
                  </span>
                  <p className="text-[17.5px] font-sans font-medium text-[#555555] dark:text-[#999994] leading-[1.3] line-clamp-3">
                    {cases[1].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Col 3: Custom Square (pos 3, grid-col 5, staggered moderately below airplane badge) */}
            <div 
              ref={col3Ref}
              className="lg:col-start-5 relative will-change-transform max-w-[440px] mx-auto lg:max-w-none w-full"
            >
              {/* Desktop Masonry Spacer: aspect-[9/4] pushes card down below the airplane badge */}
              <div className="hidden lg:block w-full aspect-[9/4]" aria-hidden="true" />

              <div 
                onClick={() => onSelectVideo && onSelectVideo(slot3ProjectId)}
                className="group block cursor-pointer"
                data-cursor-card
              >
                {/* 3-Video Sequential Player Card with Blur-Sweep & Audio Toggle */}
                <CardVideoMedia 
                  playlist={cases[2].playlist}
                  title={cases[2].title}
                  imgRef={img3Ref}
                  onHoverStart={handleCardHoverStart}
                  onHoverEnd={handleCardHoverEnd}
                  onSelectVideo={onSelectVideo}
                  onActiveProjectChange={setSlot3ProjectId}
                  aspectRatioClass="aspect-[1/1]"
                />

                {/* Card Body */}
                <div className="pt-6 pb-2 flex flex-col gap-2">
                  <h3 
                    className="text-[27px] font-normal leading-[1.25] tracking-[-0.02em] text-[var(--clr-text,#12110b)] group-hover:text-[#ff4f31] transition-colors duration-300"
                    style={{ fontFamily: "'Season Mix', Georgia, serif" }}
                  >
                    {cases[2].title}
                  </h3>
                  <span className="text-[15.75px] uppercase font-sans font-medium tracking-[-0.02em] text-[#666666] dark:text-[#a09e99]">
                    {cases[2].subtitle}
                  </span>
                  <p className="text-[17.5px] font-sans font-medium text-[#555555] dark:text-[#999994] leading-[1.3] line-clamp-3">
                    {cases[2].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Star Callout on Left & Solid Black 'View All Work' CTA Centered */}
        <div className="mt-20 sm:mt-28 lg:mt-36 flex flex-col items-center">
          <div className="w-full flex justify-start mb-12 sm:mb-16">
            <div 
              className="flex items-start gap-2.5 text-[15px] font-sans uppercase tracking-[-0.02em] font-normal text-[var(--clr-text,#12110b)] leading-[1.35]"
              style={{ maxWidth: '13.75rem' }}
            >
              <span 
                className="w-9 h-9 text-[#ff4f31] shrink-0 transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-300"
                style={{
                  transform: inView ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(-25deg)',
                  opacity: inView ? 1 : 0
                }}
              >
                <StarIcon />
              </span>
              <span>
                High-retention edits shaping memorable digital experiences.
              </span>
            </div>
          </div>

          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              if (onViewAllWork) {
                onViewAllWork();
              } else {
                window.location.hash = '#work';
              }
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
            className="inline-flex items-center justify-between gap-3 px-7 py-5 rounded-[12px] bg-[#12110b] text-white dark:bg-[#f4efea] dark:text-[#12110b] hover:bg-[#ff4f31] dark:hover:bg-[#ff4f31] dark:hover:text-white transition-all duration-300 font-sans font-normal text-[20px] tracking-[-0.02em] group cursor-pointer"
          >
            <span>View all work</span>
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none" 
              className="transition-transform duration-300 group-hover:translate-x-1 shrink-0"
            >
              <path 
                d="M4 10h12m0 0-4.5-4.5M16 10l-4.5 4.5" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;