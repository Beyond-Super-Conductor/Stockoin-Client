import inch from '@/public/assets/coins/1inch.webp'
import xtz from '@/public/assets/coins/xtz.webp'
import aave from '@/public/assets/coins/aave.png'
import ada from '@/public/assets/coins/ada.webp'
import ankr from '@/public/assets/coins/ankr.png'
import avax from '@/public/assets/coins/avax.png'
import axs from '@/public/assets/coins/axs.png'
import bat from '@/public/assets/coins/bat.jpeg'
import bitcoin from '@/public/assets/coins/bitcoin.png'
import bitcoin_cash from '@/public/assets/coins/bitcoin_cash.jpeg'
import bitcoin_gold from '@/public/assets/coins/bitcoin_gold.jpeg'
import bitcoin_sv from '@/public/assets/coins/bitcoin_sv.jpeg'
import chz from '@/public/assets/coins/chz.png'
import cro from '@/public/assets/coins/cro.png'
import enj from '@/public/assets/coins/enj.png'
import eos from '@/public/assets/coins/eos.png'
import eth from '@/public/assets/coins/eth.png'
import etc from '@/public/assets/coins/etc.png'
import flow from '@/public/assets/coins/flow.png'
import glm from '@/public/assets/coins/glm.png'
import gmt from '@/public/assets/coins/gmt.png'
import icx from '@/public/assets/coins/icx.png'
import iost from '@/public/assets/coins/iost.png'
import iota from '@/public/assets/coins/iota.png'
import iq from '@/public/assets/coins/iq.png'
import jst from '@/public/assets/coins/jst.webp'
import knc from '@/public/assets/coins/knc.png'
import link from '@/public/assets/coins/link.png'
import mana from '@/public/assets/coins/mana.jpeg'
import mbl from '@/public/assets/coins/mbl.png'
import mvl from '@/public/assets/coins/mvl.jpeg'
import neo from '@/public/assets/coins/neo.png'
import ont from '@/public/assets/coins/ont.png'
import pla from '@/public/assets/coins/pla.png'
import powr from '@/public/assets/coins/powr.png'
import qtum from '@/public/assets/coins/qtum.png'
import sand from '@/public/assets/coins/sand.webp'
import sbd from '@/public/assets/coins/sbd.png'
import sia from '@/public/assets/coins/sia.png'
import snt from '@/public/assets/coins/snt.png'
import sol from '@/public/assets/coins/sol.png'
import steem from '@/public/assets/coins/steem.png'
import storj from '@/public/assets/coins/storj.png'
import stx from '@/public/assets/coins/stx.png'
import tfuel from '@/public/assets/coins/tfuel.png'
import theta from '@/public/assets/coins/theta.jpeg'
import tron from '@/public/assets/coins/tron.png'
import vet from '@/public/assets/coins/vet.png'
import waves from '@/public/assets/coins/waves.png'
import waxp from '@/public/assets/coins/waxp.png'
import xem from '@/public/assets/coins/xem.png'
import xlm from '@/public/assets/coins/xlm.png'
import zerox from '@/public/assets/coins/zerox.png'
import zil from '@/public/assets/coins/zil.png'
import zrx from '@/public/assets/coins/zrx.png'
import kava from '@/public/assets/coins/kava.png'
import rfr from '@/public/assets/coins/rfr.png'
import cvc from '@/public/assets/coins/cvc.png'
import meta from '@/public/assets/coins/meta.png'

export const tokenCategory = [
  {
    koName: '비트코인 그룹',
    enName: 'bitcoin-group',
    
    tokens: [
      {
        koName: '비트코인',
        enName: 'BTC',
        icon: bitcoin
      },
      {
        koName: '비트코인-캐시',
        enName: 'BCH',
        icon: bitcoin_cash
      },
      {
        koName: '비트코인에스브이',
        enName: 'BSV',
        icon: bitcoin_sv
      },
      {
        koName: '비트코인골드',
        enName: 'BTG',
        icon: bitcoin_gold
      }
    ],
    icon: bitcoin
  },
  {
    koName: '이더리움 그룹',
    enName: 'eth-group',
    
    tokens: [
      {
        koName: '이더리움',
        enName: 'ETH',
        icon: eth
        
      },
      {
        koName: '이더리움클래식',
        enName: 'ETC',
        icon: etc
      }
    ],
    icon: eth
  },
  {
    koName: 'NFC',
    enName: 'nfc',
    
    tokens: [
      {
        koName: '엑시인피니티',
        enName: 'AXS',
        icon: axs
      },
      {
        koName: '쎄타토큰',
        enName: 'THETA',
        icon: theta
      },
      {
        koName: '샌드박스',
        enName: 'SAND',
        icon: sand
      },
      {
        koName: '디센트럴랜드',
        enName: 'MANA',
        icon: mana
      },
      {
        koName: '플로우',
        enName: 'FLOW',
        icon: flow
      },
      {
        koName: '칠리즈',
        enName: 'CHZ',
        icon: chz
      },
      {
        koName: '엔진코인',
        enName: 'ENJ',
        icon: enj
      },
      {
        koName: '스테픈',
        enName: 'GMT',
        icon: gmt
      },
      {
        koName: '왁스',
        enName: 'WAXP',
        icon: waxp
      },
      {
        koName: '플레이댑',
        enName: 'PLA',
        icon: pla
      },
      
    ],
    icon: flow
  },
  {
    koName: '디파이',
    enName: 'defi',
    
    tokens: [
      {
        koName: '솔라나',
        enName: 'SOL',
        icon: sol
      },
      {
        koName: '에이브',
        enName: 'AAVE',
        icon: aave
      },
      {
        koName: '카바',
        enName: 'KAVA',
        icon: kava
      },
      {
        koName: '1인치네트워크',
        enName: '1INCH',
        icon: inch
      },
      {
        koName: '저스트',
        enName: 'JST',
        icon: jst
      },
      {
        koName: '카이버네트워크',
        enName: 'KNC',
        icon: knc
      }
    ],
    icon: sol
  },
  {
    koName: '스마트 컨트랙',
    enName: 'smart-contracts',
    
    tokens: [
      {
        koName: '이더리움',
        enName: 'ETH',
        icon: eth
      },
      {
        koName: '아발란체',
        enName: 'AVAX',
        icon: avax
      },
      {
        koName: '스텔라루멘',
        enName: 'XLM',
        icon: xlm
      },
      {
        koName: '체인링크',
        enName: 'LINK',
        icon: link
      },
      {
        koName: '이더리움클래식',
        enName: 'ETC',
        icon: etc
      },
      {
        koName: '비체인',
        enName: 'VET',
        icon: vet
      },
      {
        koName: '테조스',
        enName: 'xtz',
        icon: xtz
      },
      {
        koName: '스택스',
        enName: 'STX',
        icon: stx
      },
      {
        koName: '이오스',
        enName: 'EOS',
        icon: eos
      },
      {
        koName: '네오',
        enName: 'NEO',
        icon: neo
      },
    ],
    icon: avax
  },
  {
    koName: '오라클',
    enName: 'oracle',
    
    tokens: [
      {
        koName: '체인링크',
        enName: 'LINK',
        icon: link
      }
    ],
    icon: link
  },
  {
    koName: 'IoT',
    enName: 'iot',
    
    tokens: [
      {
        koName: '비체인',
        enName: 'VET',
        icon: vet
      },
      {
        koName: '아이오타',
        enName: 'IOTA',
        icon: iota
      },
      {
        koName: '아이오에스티',
        enName: 'IOST',
        icon: iost
      },
      {
        koName: '엠블',
        enName: 'MVL',
        icon: mvl
      },
      {
        koName: '파워렛저',
        enName: 'POWR',
        icon: powr
      }
    ],
    icon: vet
  },
  
  
  {
    koName: '간편결제 플랫폼',
    enName: 'market-place',
    
    tokens: [
      {
        koName: '크로노스',
        enName: 'CRO',
        icon: cro
      }
    ],
    icon: cro
  },
  {
    koName: '게임',
    enName: 'game',
    tokens: [
      {
        koName: '엔진코인',
        enName: 'ENJ',
        icon: enj
      },
      {
        koName: '리퍼리움',
        enName: 'RFR',
        icon: rfr
      }
    ],
    icon: enj
  },
  {
    koName: '광고산업',
    enName: 'advertisement',
    
    tokens: [
      {
        koName: '베이직어텐션토큰',
        enName: 'BAT',
        icon: bat
      }
    ],
    icon: bat
  },
  {
    koName: '데이터저장 서비스',
    enName: 'data-store-service',
    
    tokens: [
      {
        koName: '스토리지',
        enName: 'STORJ',
        icon: storj
      },
      {
        koName: '시아코인',
        enName: 'SC',
        icon: sia
      }
    ],
    icon: sia
  },
  {
    koName: '분산화거래소',
    enName: 'dex',
    
    tokens: [
      {
        koName: '이더리움',
        enName: 'ETH',
        icon: eth
      },
      {
        koName: '웨이브',
        enName: 'WAVES',
        icon: waves
      },
      {
        koName: '제로엑스프로토콜',
        enName: 'ZRX',
        icon: zrx
      }
    ],
    icon: zerox
  },
  {
    koName: '소셜네트워킹',
    enName: 'social-networking',
    
    tokens: [
      {
        koName: '스테이터스네트워크토큰',
        enName: 'SNT',
        icon: snt
      }
    ],
    icon: snt
  },
  {
    koName: '연산력임대서비스',
    enName: 'certification-service',
    
    tokens: [
      {
        koName: '앵커',
        enName: 'ANKR',
        icon: ankr
      },
      {
        koName: '골렘',
        enName: 'GLM',
        icon: glm
      }
    ],
    icon: ankr
  },
  {
    koName: '인증서비스',
    enName: 'certification-service',
    
    tokens: [
      {
        koName: '온톨로지',
        enName: 'ONT',
        icon: ont
      },
      {
        koName: '시빅',
        enName: 'CVC',
        icon: cvc
      },
      {
        koName: '메타디움',
        enName: 'META',
        icon: meta
      }
    ],
    icon: ont
  },
  {
    koName: '컨텐츠 생산 및 중개',
    enName: 'content-production',
    
    tokens: [
      {
        koName: '트론',
        enName: 'TRX',
        icon: tron
      },
      {
        koName: '쎄타토큰',
        enName: 'THETA',
        icon: theta
      },
      {
        koName: '쎄타퓨엘',
        enName: 'TFUEL',
        icon: tfuel
      },
      {
        koName: '아이큐',
        enName: 'IQ',
        icon: iq
      },
      {
        koName: '무비블록',
        enName: 'MBL',
        icon: mbl
      }

    ],
    icon: tron
  },
  {
    koName: '플랫폼',
    enName: 'platform',
    
    tokens: [
      {
        koName: '이오스',
        enName: 'EOS',
        icon: eos
      },
      {
        koName: '에이다',
        enName: 'ADA',
        icon: ada
      },
      {
        koName: '이더리움',
        enName: 'ETH',
        icon: eth
      },
      {
        koName: '네오',
        enName: 'NEO',
        icon: neo
      },
      {
        koName: '질리카',
        enName: 'ZIL',
        icon: zil
      },
      {
        koName: '퀀텀',
        enName: 'QTUM',
        icon: qtum
      },
      {
        koName: '넴',
        enName: 'XEM',
        icon: xem
      },
      {
        koName: '웨이브',
        enName: 'WAVES',
        icon: waves
      },
      {
        koName: '아이콘',
        enName: 'ICX',
        icon: icx
      },
      {
        koName: '온톨로지',
        enName: 'ONT',
        icon: ont
      }
    ],
    icon: eos
  },
  {
    koName: 'SNS 컨텐츠',
    enName: 'sns-contents',
    
    tokens: [
      {
        koName: '스팀',
        enName: 'STEEM',
        icon: steem
      },
      {
        koName: '스팀달러',
        enName: 'SBD',
        icon: sbd
      }
    ],
    icon: steem
  },
  
  {
    koName: '기타',
    enName: 'etc',
    
    tokens: [
      
    ],
    icon: bitcoin
  },

]


