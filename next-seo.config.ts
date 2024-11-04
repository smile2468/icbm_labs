import { NextSeoProps } from 'next-seo'

const title = '전주대학교 ICBM Labs'
const description = '다양한 활동에서 연구하고 실행해보며 성장할 수 있는 이 곳, 전주대학교 ICBM Labs 입니다.'
const url = 'https://icbm.jj.ac.kr'

const config: NextSeoProps = {
  defaultTitle: title,
  titleTemplate: `%s | ${title}`,
  description,
  canonical: url,
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url,
    description,
    siteName: title,
    images: [
      {
        url: `${url}/static_og_image.png`,
        width: 1200,
        height: 530
      }
    ]
  },
  additionalMetaTags: [
    {
      name: 'theme-color',
      content: '#0078AD'
    },
    {
      name: 'author',
      content: 'ICBM Labs Researchers'
    },
    {
      name: 'application-name',
      content: title
    },
    {
      name: 'keywords',
      content: '전주대학교,전주대,전주대학교동아리,전주대동아리,연구실,연구동아리,icbm,ICBM,전주대ICBM,전주대학교ICBM,대학교,동아리,전주'
    }
  ],
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image'
  }
}

export default config
