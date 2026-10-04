import { Agent, BankItem, RegionItem } from '../types';
import birhanuAvatar from '../assets/birhanu.jpg';

export const AGENTS_LIST: Agent[] = [
  {
    id: 'agent-birhanu',
    name: 'D/R BIRHANU WENDOSSEN',
    role: 'Official Agency Representative',
    phone: '+251718306843',
    telegramUsername: '@Iluchameveaya',
    imoPhone: '+251991801005',
    avatarUrl: birhanuAvatar || '/birhanu.jpg',
    initials: 'BW'
  }
];

export const BANKS_LIST: BankItem[] = [
  {
    id: 'cbe',
    nameEn: 'Commercial Bank of Ethiopia (CBE)',
    nameAm: 'የኢትዮጵያ ንግድ ባንክ (CBE)',
    nameOm: 'Baankii Daldala Itoophiyaa (CBE)',
    code: 'CBE',
    logoBg: '#682a7a',
    logoText: 'CBE',
    logoUrl: '/bank-logos/commercial_bank_of_ethiopia.svg'
  },
  {
    id: 'cbebirr',
    nameEn: 'CBE Birr',
    nameAm: 'ሲቢኢ ብር (CBE Birr)',
    nameOm: 'CBE Birr (Baankii Daldala)',
    code: 'CBEBIRR',
    logoBg: '#78350f',
    logoText: 'CBE BIRR',
    logoUrl: '/bank-logos/cbe_birr_normal.svg'
  },
  {
    id: 'awash',
    nameEn: 'Awash International Bank',
    nameAm: 'አዋሽ ባንክ',
    nameOm: 'Baankii Hawaas',
    code: 'AWASH',
    logoBg: '#0284c7',
    logoText: 'AB',
    logoUrl: '/bank-logos/awash_international_bank.svg'
  },
  {
    id: 'abyssinia',
    nameEn: 'Bank of Abyssinia',
    nameAm: 'የአቢሲኒያ ባንክ',
    nameOm: 'Baankii Abisiiniyaa',
    code: 'BOA',
    logoBg: '#d97706',
    logoText: 'BOA',
    logoUrl: '/bank-logos/bank_of_abyssinia.svg'
  },
  {
    id: 'dashen',
    nameEn: 'Dashen Bank',
    nameAm: 'ዳሸን ባንክ',
    nameOm: 'Baankii Daashan',
    code: 'DASHEN',
    logoBg: '#1e3a8a',
    logoText: 'DB',
    logoUrl: '/bank-logos/dashen_bank.svg'
  },
  {
    id: 'coop',
    nameEn: 'Cooperative Bank of Oromia',
    nameAm: 'የኦሮሚያ ህብረት ስራ ባንክ',
    nameOm: 'Baankii Hojii Gamtaa Oromiyaa',
    code: 'COOP',
    logoBg: '#0f766e',
    logoText: 'COOP',
    logoUrl: '/bank-logos/cooperative_bank_of_oromia.svg'
  },
  {
    id: 'hibret',
    nameEn: 'Hibret Bank (United)',
    nameAm: 'ህብረት ባንክ',
    nameOm: 'Baankii Hibret',
    code: 'HIBRET',
    logoBg: '#991b1b',
    logoText: 'HB',
    logoUrl: '/bank-logos/hibret_bank.svg'
  },
  {
    id: 'nib',
    nameEn: 'Nib International Bank',
    nameAm: 'ንብ ኢንተርናሽናል ባንክ',
    nameOm: 'Baankii Idil-addunyaa Niib',
    code: 'NIB',
    logoBg: '#ffcc00',
    logoText: 'NIB',
    logoUrl: '/bank-logos/nib_bank.png'
  },
  {
    id: 'wegagen',
    nameEn: 'Wegagen Bank',
    nameAm: 'ወጋገን ባንክ',
    nameOm: 'Baankii Wagaagan',
    code: 'WEGAGEN',
    logoBg: '#ea580c',
    logoText: 'WB',
    logoUrl: '/bank-logos/wegagen_bank.png'
  },
  {
    id: 'zemen',
    nameEn: 'Zemen Bank',
    nameAm: 'ዘመን ባንክ',
    nameOm: 'Baankii Zamen',
    code: 'ZEMEN',
    logoBg: '#b91c1c',
    logoText: 'ZB',
    logoUrl: '/bank-logos/zemen_bank.svg'
  },
  {
    id: 'sinqe',
    nameEn: 'Sinqee Bank',
    nameAm: 'ሲንቄ ባንክ',
    nameOm: 'Baankii Siinqee',
    code: 'SINQE',
    logoBg: '#047857',
    logoText: 'SQ',
    logoUrl: '/bank-logos/sinqee_bank.png'
  },
  {
    id: 'amhara',
    nameEn: 'Amhara Bank',
    nameAm: 'አማራ ባንክ',
    nameOm: 'Baankii Amaaraa',
    code: 'AMHARA',
    logoBg: '#0f766e',
    logoText: 'AMH',
    logoUrl: '/bank-logos/amhara_bank.svg'
  },
  {
    id: 'oromia_int',
    nameEn: 'Oromia Bank',
    nameAm: 'ኦሮሚያ ባንክ',
    nameOm: 'Baankii Oromiyaa',
    code: 'OROMIA',
    logoBg: '#0284c7',
    logoText: 'OIB',
    logoUrl: '/bank-logos/oromia_international_bank.svg'
  },
  {
    id: 'telebirr',
    nameEn: 'Telebirr SuperApp',
    nameAm: 'ቴሌብር (Telebirr)',
    nameOm: 'Telebirr (Itoophiyoo Telekoom)',
    code: 'TELEBIRR',
    logoBg: '#0284c7',
    logoText: 'TB',
    logoUrl: '/bank-logos/telebirr.svg'
  }
];

export const REGIONS_LIST: RegionItem[] = [
  {
    id: 'addis',
    nameEn: 'Addis Ababa (Chartered City)',
    nameAm: 'አዲስ አበባ',
    nameOm: 'Finfinnee',
    type: 'city',
    zones: [
      { id: 'bole', nameEn: 'Bole Sub-City (ቦሌ)', nameAm: 'ቦሌ ክ/ከተማ', nameOm: 'Kifla Magaalaa Boolee' },
      { id: 'kirkos', nameEn: 'Kirkos Sub-City (ቂርቆስ)', nameAm: 'ቂርቆስ ክ/ከተማ', nameOm: 'Kifla Magaalaa Qirqoos' },
      { id: 'yeka', nameEn: 'Yeka Sub-City (የካ)', nameAm: 'የካ ክ/ከተማ', nameOm: 'Kifla Magaalaa Yakkkaa' },
      { id: 'arada', nameEn: 'Arada Sub-City (አራዳ)', nameAm: 'አራዳ ክ/ከተማ', nameOm: 'Kifla Magaalaa Araadaa' },
      { id: 'lideta', nameEn: 'Lideta Sub-City (ልደታ)', nameAm: 'ልደታ ክ/ከተማ', nameOm: 'Kifla Magaalaa Lidataa' },
      { id: 'addisketema', nameEn: 'Addis Ketema (አዲስ ከተማ)', nameAm: 'አዲስ ከተማ', nameOm: 'Kifla Magaalaa Addis Ketema' },
      { id: 'gullele', nameEn: 'Gullele Sub-City (ጉለሌ)', nameAm: 'ጉለሌ ክ/ከተማ', nameOm: 'Kifla Magaalaa Gulalee' },
      { id: 'nifassilk', nameEn: 'Nifas Silk-Lafto (ንፋስ ስልክ)', nameAm: 'ንፋስ ስልክ', nameOm: 'Kifla Magaalaa Nifas Silk' },
      { id: 'kolfe', nameEn: 'Kolfe Keranio (ኮልፌ ቀራኒዮ)', nameAm: 'ኮልፌ ቀራኒዮ', nameOm: 'Kifla Magaalaa Kolfe' },
      { id: 'akaky', nameEn: 'Akaky Kaliti (አቃቂ ቃሊቲ)', nameAm: 'አቃቂ ቃሊቲ', nameOm: 'Kifla Magaalaa Aqaqii' },
      { id: 'lemikura', nameEn: 'Lemi Kura Sub-City (ለሚ ኩራ)', nameAm: 'ለሚ ኩራ', nameOm: 'Kifla Magaalaa Lammii Kuraa' }
    ]
  },
  {
    id: 'oromia',
    nameEn: 'Oromia Region',
    nameAm: 'ኦሮሚያ',
    nameOm: 'Oromiyaa',
    type: 'region',
    zones: [
      { id: 'east_shewa', nameEn: 'East Shewa (Adama/Bishoftu)', nameAm: 'ምስራቅ ሸዋ (አዳማ)', nameOm: 'Shawaa Bahaa (Adaamaa)' },
      { id: 'west_shewa', nameEn: 'West Shewa (Ambo)', nameAm: 'ምዕራብ ሸዋ (አምቦ)', nameOm: 'Shawaa Lixaa (Amboo)' },
      { id: 'north_shewa_or', nameEn: 'North Shewa (Fiche)', nameAm: 'ሰሜን ሸዋ (ፍቼ)', nameOm: 'Shawaa Kaabaa (Fiichee)' },
      { id: 'sw_shewa', nameEn: 'Southwest Shewa (Waliso)', nameAm: 'ደቡብ ምዕራብ ሸዋ (ወሊሶ)', nameOm: 'Shawaa Kibba Lixaa' },
      { id: 'finfinnee_special', nameEn: 'Finfinnee Surrounding Special Zone', nameAm: 'የፊንፊኔ ዙሪያ ልዩ ዞን', nameOm: 'Zoonii Addaa Naannawa Finfinnee' },
      { id: 'arsi', nameEn: 'Arsi Zone (Asella)', nameAm: 'አርሲ (አሰላ)', nameOm: 'Godina Arsii (Asallaa)' },
      { id: 'west_arsi', nameEn: 'West Arsi (Shashamane)', nameAm: 'ምዕራብ አርሲ (ሻሸመኔ)', nameOm: 'Arsii Lixaa (Shaashamannee)' },
      { id: 'jimma', nameEn: 'Jimma Zone (Jimma Town)', nameAm: 'ጅማ ዞን', nameOm: 'Godina Jimmaa' },
      { id: 'east_hararghe', nameEn: 'East Hararghe (Harar/Aweday)', nameAm: 'ምስራቅ ሐረርጌ', nameOm: 'Harargee Bahaa' },
      { id: 'west_hararghe', nameEn: 'West Hararghe (Chiro)', nameAm: 'ምዕራብ ሐረርጌ (ጭሮ)', nameOm: 'Harargee Lixaa (Ciroo)' },
      { id: 'bale', nameEn: 'Bale Zone (Robe)', nameAm: 'ባሌ (ሮቤ)', nameOm: 'Godina Baalee (Robee)' },
      { id: 'east_welega', nameEn: 'East Welega (Nekemte)', nameAm: 'ምስራቅ ወለጋ (ነቀምቴ)', nameOm: 'Wallagga Bahaa (Naqamtee)' },
      { id: 'west_welega', nameEn: 'West Welega (Gimbi)', nameAm: 'ምዕራብ ወለጋ (ጊምቢ)', nameOm: 'Wallagga Lixaa' },
      { id: 'kelem_welega', nameEn: 'Kelem Welega (Dambi Dolo)', nameAm: 'ቄለም ወለጋ (ደምቢ ዶሎ)', nameOm: 'Qellem Wallaggaa' },
      { id: 'horo_guduru', nameEn: 'Horo Guduru Welega (Shambu)', nameAm: 'ሆሮ ጉዱሩ ወለጋ', nameOm: 'Horroo Guduruu' },
      { id: 'guji', nameEn: 'Guji Zone (Negele Guji)', nameAm: 'ጉጂ ዞን', nameOm: 'Godina Gujii' },
      { id: 'west_guji', nameEn: 'West Guji (Bule Hora)', nameAm: 'ምዕራብ ጉጂ (ቡሌ ሆራ)', nameOm: 'Gujii Lixaa' },
      { id: 'borena', nameEn: 'Borena Zone (Yabelo)', nameAm: 'ቦረና (ያቤሎ)', nameOm: 'Godina Booranaa' },
      { id: 'ilu_aba_bora', nameEn: 'Ilu Aba Bora (Mattu)', nameAm: 'ኢሉ አባ ቦራ (መቱ)', nameOm: 'Iluu Abbaa Booraa' },
      { id: 'buno_bedele', nameEn: 'Buno Bedele (Bedele)', nameAm: 'ቡኖ በደሌ (በደሌ)', nameOm: 'Bunnoo Beddellee' }
    ]
  },
  {
    id: 'amhara',
    nameEn: 'Amhara Region',
    nameAm: 'አማራ',
    nameOm: 'Amaara',
    type: 'region',
    zones: [
      { id: 'north_shewa_am', nameEn: 'North Shewa (Debre Berhan)', nameAm: 'ሰሜን ሸዋ (ደብረ ብርሃን)', nameOm: 'Shawaa Kaabaa (Debre Berhan)' },
      { id: 'east_gojjam', nameEn: 'East Gojjam (Debre Markos)', nameAm: 'ምስራቅ ጎጃም (ደብረ ማርቆስ)', nameOm: 'Gojjaam Bahaa' },
      { id: 'west_gojjam', nameEn: 'West Gojjam (Bahir Dar/Finote Selam)', nameAm: 'ምዕራብ ጎጃም (ባህር ዳር)', nameOm: 'Gojjaam Lixaa' },
      { id: 'central_gondar', nameEn: 'Central Gondar (Gondar City)', nameAm: 'ማዕከላዊ ጎንደር', nameOm: 'Gondar Giddugaleessaa' },
      { id: 'south_gondar', nameEn: 'South Gondar (Debre Tabor)', nameAm: 'ደቡብ ጎንደር (ደብረ ታቦር)', nameOm: 'Gondar Kibbaa' },
      { id: 'north_gondar', nameEn: 'North Gondar (Debarq)', nameAm: 'ሰሜን ጎንደር (ደባርቅ)', nameOm: 'Gondar Kaabaa' },
      { id: 'west_gondar', nameEn: 'West Gondar (Gendawuha)', nameAm: 'ምዕራብ ጎንደር', nameOm: 'Gondar Lixaa' },
      { id: 'south_wollo', nameEn: 'South Wollo (Dessie/Kombolcha)', nameAm: 'ደቡብ ወሎ (ደሴ)', nameOm: 'Walloo Kibbaa' },
      { id: 'north_wollo', nameEn: 'North Wollo (Woldia/Lalibela)', nameAm: 'ሰሜን ወሎ (ወልዲያ)', nameOm: 'Walloo Kaabaa' },
      { id: 'awi', nameEn: 'Awi Administrative Zone (Injibara)', nameAm: 'አዊ ዞን (እንጅባራ)', nameOm: 'Zoonii Aawwii' },
      { id: 'wag_hemra', nameEn: 'Wag Hemra Zone (Sokota)', nameAm: 'ዋግ ኽምራ (ሰቆጣ)', nameOm: 'Waag Himraa' },
      { id: 'oromo_amhara', nameEn: 'Oromo Special Zone (Kemise)', nameAm: 'የኦሮሞ ብሔረሰብ ዞን (ከሚሴ)', nameOm: 'Zoonii Addaa Oromoo (Qamisee)' }
    ]
  },
  {
    id: 'tigray',
    nameEn: 'Tigray Region',
    nameAm: 'ትግራይ',
    nameOm: 'Tigiraay',
    type: 'region',
    zones: [
      { id: 'mekelle', nameEn: 'Mekelle Special Zone', nameAm: 'መቐለ ልዩ ዞን', nameOm: 'Zoonii Addaa Maqalee' },
      { id: 'central_tigray', nameEn: 'Central Tigray (Axum/Adwa)', nameAm: 'ማዕከላዊ ትግራይ (አክሱም)', nameOm: 'Tigiraay Giddugaleessaa' },
      { id: 'eastern_tigray', nameEn: 'Eastern Tigray (Adigrat/Wukro)', nameAm: 'ምስራቃዊ ትግራይ (ዓዲግራት)', nameOm: 'Tigiraay Bahaa' },
      { id: 'nw_tigray', nameEn: 'North Western Tigray (Shire Endaselassie)', nameAm: 'ሰሜን ምዕራብ ትግራይ (ሽረ)', nameOm: 'Tigiraay Kaabba Lixaa' },
      { id: 'southern_tigray', nameEn: 'Southern Tigray (Maichew/Mehoni)', nameAm: 'ደቡባዊ ትግራይ (ማይጨው)', nameOm: 'Tigiraay Kibbaa' },
      { id: 'se_tigray', nameEn: 'South Eastern Tigray', nameAm: 'ደቡብ ምስራቅ ትግራይ', nameOm: 'Tigiraay Kibba Bahaa' },
      { id: 'western_tigray', nameEn: 'Western Tigray (Humera)', nameAm: 'ምዕራባዊ ትግራይ (ሁመራ)', nameOm: 'Tigiraay Lixaa' }
    ]
  },
  {
    id: 'somali',
    nameEn: 'Somali Region',
    nameAm: 'ሶማሌ',
    nameOm: 'Somaalee',
    type: 'region',
    zones: [
      { id: 'fafan', nameEn: 'Fafan Zone (Jijiga City)', nameAm: 'ፋፋን (ጅጅጋ)', nameOm: 'Godina Faafan (Jijigaa)' },
      { id: 'siti', nameEn: 'Siti Zone (Shinile)', nameAm: 'ሲቲ (ሺኒሌ)', nameOm: 'Godina Siitii' },
      { id: 'jarar', nameEn: 'Jarar Zone (Degehabur)', nameAm: 'ጃራር (ደገሀቡር)', nameOm: 'Godina Jaraar' },
      { id: 'shabelle', nameEn: 'Shabelle Zone (Gode)', nameAm: 'ሻበሌ (ጎዴ)', nameOm: 'Godina Shaballee (Godee)' },
      { id: 'korahe', nameEn: 'Korahe Zone (Qabridahar)', nameAm: 'ቆራሄ (ቀብሪደሃር)', nameOm: 'Godina Qoraahii' },
      { id: 'dollo', nameEn: 'Dollo Zone (Warder)', nameAm: 'ዶሎ (ወርዴር)', nameOm: 'Godina Doolloo' },
      { id: 'nogob', nameEn: 'Nogob Zone', nameAm: 'ኖጎብ ዞን', nameOm: 'Godina Nogob' },
      { id: 'erer', nameEn: 'Erer Zone', nameAm: 'ኤረር ዞን', nameOm: 'Godina Erer' },
      { id: 'afder', nameEn: 'Afder Zone', nameAm: 'አፍዴር ዞን', nameOm: 'Godina Afder' },
      { id: 'liben', nameEn: 'Liben Zone', nameAm: 'ሊበን ዞን', nameOm: 'Godina Liiban' },
      { id: 'dawa', nameEn: 'Dawa Zone', nameAm: 'ዳዋ ዞን', nameOm: 'Godina Dawa' }
    ]
  },
  {
    id: 'sidama',
    nameEn: 'Sidama Region',
    nameAm: 'ሲዳማ',
    nameOm: 'Sidaamaa',
    type: 'region',
    zones: [
      { id: 'hawassa', nameEn: 'Hawassa City Administration', nameAm: 'ሀዋሳ ከተማ አስተዳደር', nameOm: 'Magaalaa Hawaasaa' },
      { id: 'aleta_chuko', nameEn: 'Aleta Chuko Zone', nameAm: 'አሌታ ጩኮ', nameOm: 'Aleta Chuko' },
      { id: 'dale', nameEn: 'Dale Zone (Yirgalem)', nameAm: 'ዳሌ (ይርጋለም)', nameOm: 'Daallee (Yirgaalam)' },
      { id: 'wondo_genet', nameEn: 'Wondo Genet District', nameAm: 'ወንዶ ገነት', nameOm: 'Wandoo Jannat' },
      { id: 'shebedino', nameEn: 'Shebedino District', nameAm: 'ሸበዲኖ', nameOm: 'Shebedino' },
      { id: 'bensa', nameEn: 'Bensa Zone (Daye)', nameAm: 'ቤንሳ (ዳዬ)', nameOm: 'Bensa (Dayee)' },
      { id: 'aroresa', nameEn: 'Aroresa Zone', nameAm: 'አሮሬሳ ዞን', nameOm: 'Arooresa' }
    ]
  },
  {
    id: 'diredawa',
    nameEn: 'Dire Dawa (Chartered City)',
    nameAm: 'ድሬዳዋ',
    nameOm: 'Dirre Dawaa',
    type: 'city',
    zones: [
      { id: 'sabian', nameEn: 'Sabian Sub-City', nameAm: 'ሳቢያን ክ/ከተማ', nameOm: 'Kifla Magaalaa Saabiyaan' },
      { id: 'gende_kore', nameEn: 'Gende Kore Sub-City', nameAm: 'ገንደ ቆሬ ክ/ከተማ', nameOm: 'Gande Qooree' },
      { id: 'dechatu', nameEn: 'Dechatu Sub-City', nameAm: 'ደቻቱ ክ/ከተማ', nameOm: 'Dacaatuu' },
      { id: 'melka_jebdu', nameEn: 'Melka Jebdu District', nameAm: 'መልካ ጀብዱ', nameOm: 'Malka Jabduu' },
      { id: 'dd_rural', nameEn: 'Dire Dawa Surrounding Rural', nameAm: 'የድሬዳዋ ገጠር', nameOm: 'Baadiyyaa Dirree Dawaa' }
    ]
  },
  {
    id: 'central_eth',
    nameEn: 'Central Ethiopia Region',
    nameAm: 'ማዕከላዊ ኢትዮጵያ',
    nameOm: 'Itoophiyaa Giddugaleessaa',
    type: 'region',
    zones: [
      { id: 'gurage', nameEn: 'Gurage Zone (Wolkite)', nameAm: 'ጉራጌ (ወልቂጤ)', nameOm: 'Godina Guraagee' },
      { id: 'silte', nameEn: 'Silte Zone (Worabe)', nameAm: 'ስልጤ (ወራቤ)', nameOm: 'Godina Silxee' },
      { id: 'hadiya', nameEn: 'Hadiya Zone (Hossana)', nameAm: 'ሀዲያ (ሆሳዕና)', nameOm: 'Godina Haadiyaa' },
      { id: 'halaba', nameEn: 'Halaba Special Zone', nameAm: 'ሀላባ ልዩ ዞን', nameOm: 'Zoonii Addaa Halaabaa' },
      { id: 'kembata', nameEn: 'Kembata Tembaro (Durame)', nameAm: 'ከምባታ ጠምባሮ (ዱራሜ)', nameOm: 'Kambaataa Tambaaroo' }
    ]
  },
  {
    id: 'south_eth',
    nameEn: 'South Ethiopia Region',
    nameAm: 'ደቡብ ኢትዮጵያ',
    nameOm: 'Itoophiyaa Kibbaa',
    type: 'region',
    zones: [
      { id: 'wolaita', nameEn: 'Wolaita Zone (Sodo)', nameAm: 'ወላይታ (ሶዶ)', nameOm: 'Godina Walaayittaa' },
      { id: 'gamo', nameEn: 'Gamo Zone (Arba Minch)', nameAm: 'ጋሞ (አርባ ምንጭ)', nameOm: 'Godina Gaamoo' },
      { id: 'gofa', nameEn: 'Gofa Zone (Sawla)', nameAm: 'ጎፋ (ሳውላ)', nameOm: 'Godina Gooffaa' },
      { id: 'south_omo', nameEn: 'South Omo Zone (Jinka)', nameAm: 'ደቡብ ኦሞ (ጂንካ)', nameOm: 'Oomoo Kibbaa' },
      { id: 'konso', nameEn: 'Konso Zone (Karat)', nameAm: 'ኮንሶ ዞን', nameOm: 'Godina Konsoo' },
      { id: 'ari', nameEn: 'Ari Zone', nameAm: 'አሪ ዞን', nameOm: 'Godina Arii' },
      { id: 'basketo', nameEn: 'Basketo Special Zone', nameAm: 'ባስኬቶ ልዩ ዞን', nameOm: 'Zoonii Baaskeetoo' },
      { id: 'gardula', nameEn: 'Gardula (Dirashe/Amaro/Burji)', nameAm: 'ጋርዱላ ዞን', nameOm: 'Godina Gaarduulaa' }
    ]
  },
  {
    id: 'southwest_eth',
    nameEn: 'Southwest Ethiopia Peoples Region',
    nameAm: 'ደቡብ ምዕራብ ኢትዮጵያ',
    nameOm: 'Itoophiyaa Kibba Lixaa',
    type: 'region',
    zones: [
      { id: 'keffa', nameEn: 'Keffa Zone (Bonga)', nameAm: 'ከፋ (ቦንጋ)', nameOm: 'Godina Kaaffa' },
      { id: 'sheka', nameEn: 'Sheka Zone (Tepi)', nameAm: 'ሼካ (ቴፒ)', nameOm: 'Godina Shekkaa' },
      { id: 'bench_sheko', nameEn: 'Bench Sheko (Mizan Aman)', nameAm: 'ቤንች ሸኮ (ሚዛን አማን)', nameOm: 'Godina Beench Shakkoo' },
      { id: 'dawro', nameEn: 'Dawro Zone (Tarcha)', nameAm: 'ዳውሮ (ታርጫ)', nameOm: 'Godina Daawroo' },
      { id: 'west_omo', nameEn: 'West Omo Zone', nameAm: 'ምዕራብ ኦሞ', nameOm: 'Oomoo Lixaa' },
      { id: 'konta', nameEn: 'Konta Special Zone', nameAm: 'ኮንታ ልዩ ዞን', nameOm: 'Zoonii Qontaa' }
    ]
  },
  {
    id: 'afar',
    nameEn: 'Afar Region',
    nameAm: 'አፋር',
    nameOm: 'Afaar',
    type: 'region',
    zones: [
      { id: 'awsi_rasu', nameEn: 'Awsi Rasu (Zone 1 - Samara/Asaita)', nameAm: 'አውሲ ረሱ (ዞን 1 - ሰመራ)', nameOm: 'Awsi Rasu (Zoonii 1)' },
      { id: 'kilbet_rasu', nameEn: 'Kilbet Rasu (Zone 2 - Abala)', nameAm: 'ክልበት ረሱ (ዞን 2 - አባላ)', nameOm: 'Kilbet Rasu (Zoonii 2)' },
      { id: 'gabi_rasu', nameEn: 'Gabi Rasu (Zone 3 - Awash)', nameAm: 'ጋቢ ረሱ (ዞን 3 - አዋሽ)', nameOm: 'Gabi Rasu (Zoonii 3)' },
      { id: 'fanti_rasu', nameEn: 'Fanti Rasu (Zone 4)', nameAm: 'ፈንቲ ረሱ (ዞን 4)', nameOm: 'Fanti Rasu (Zoonii 4)' },
      { id: 'hari_rasu', nameEn: 'Hari Rasu (Zone 5)', nameAm: 'ሃሪ ረሱ (ዞን 5)', nameOm: 'Hari Rasu (Zoonii 5)' }
    ]
  },
  {
    id: 'benishangul',
    nameEn: 'Benishangul-Gumuz Region',
    nameAm: 'ቤኒሻንጉል ጉሙዝ',
    nameOm: 'Beenshangul Gumuz',
    type: 'region',
    zones: [
      { id: 'assosa', nameEn: 'Assosa Zone', nameAm: 'አሶሳ ዞን', nameOm: 'Godina Asosaa' },
      { id: 'metekel', nameEn: 'Metekel Zone (Gilgel Beles)', nameAm: 'መተከል (ግልገል በለስ)', nameOm: 'Godina Matakkal' },
      { id: 'kamashi', nameEn: 'Kamashi Zone', nameAm: 'ካማሺ ዞን', nameOm: 'Godina Kamashii' },
      { id: 'mao_komo', nameEn: 'Mao-Komo Special Woreda', nameAm: 'ማኦ ኮሞ ልዩ ወረዳ', nameOm: 'Aanaa Addaa Ma\'oo Komoo' }
    ]
  },
  {
    id: 'gambela',
    nameEn: 'Gambela Region',
    nameAm: 'ጋምቤላ',
    nameOm: 'Gambellaa',
    type: 'region',
    zones: [
      { id: 'gambela_town', nameEn: 'Gambela Town Administration', nameAm: 'ጋምቤላ ከተማ', nameOm: 'Magaalaa Gambeellaa' },
      { id: 'anywaa', nameEn: 'Anywaa Zone', nameAm: 'አኝዋክ ዞን', nameOm: 'Godina Anywaa' },
      { id: 'nuer', nameEn: 'Nuer Zone', nameAm: 'ኑዌር ዞን', nameOm: 'Godina Nuyeer' },
      { id: 'majang', nameEn: 'Majang Zone', nameAm: 'ማጃንግ ዞን', nameOm: 'Godina Majaang' },
      { id: 'itang', nameEn: 'Itang Special Woreda', nameAm: 'ኢታንግ ልዩ ወረዳ', nameOm: 'Aanaa Addaa Itaang' }
    ]
  },
  {
    id: 'harar',
    nameEn: 'Harari Region',
    nameAm: 'ሐረሪ',
    nameOm: 'Hararii',
    type: 'region',
    zones: [
      { id: 'harar_historic', nameEn: 'Historic Jugol Sub-City', nameAm: 'ጁጎል ክ/ከተማ', nameOm: 'Kifla Magaalaa Jugol' },
      { id: 'amir_nur', nameEn: 'Amir Nur Sub-City', nameAm: 'አሚር ኑር', nameOm: 'Amir Nur' },
      { id: 'shenkor', nameEn: 'Shenkor Sub-City', nameAm: 'ሸንኮር', nameOm: 'Shankor' },
      { id: 'abadir', nameEn: 'Abadir Sub-City', nameAm: 'አባዲር', nameOm: 'Abbaadir' },
      { id: 'erer_harar', nameEn: 'Erer Rural Woreda', nameAm: 'ኤረር ወረዳ', nameOm: 'Aanaa Erer' }
    ]
  },
  {
    id: 'diaspora',
    nameEn: 'International / Diaspora Mission',
    nameAm: 'ዲያስፖራ ማህበረሰብ',
    nameOm: 'Diyaaspooraa (Biyya Alaa)',
    type: 'diaspora',
    zones: [
      { id: 'diaspora_na', nameEn: 'North America (USA & Canada)', nameAm: 'ሰሜን አሜሪካ (አሜሪካ/ካናዳ)', nameOm: 'Ameerikaa Kaabaa (USA & Canada)' },
      { id: 'diaspora_eu', nameEn: 'Europe & United Kingdom', nameAm: 'አውሮፓ እና እንግሊዝ', nameOm: 'Awurooppaa fi UK' },
      { id: 'diaspora_me', nameEn: 'Middle East & Gulf (UAE, Saudi, Qatar)', nameAm: 'መካከለኛው ምስራቅ (ዱባይ/ሳውዲ)', nameOm: 'Biyyoota Baaha Giddugaleessaa' },
      { id: 'diaspora_au', nameEn: 'Australia & New Zealand', nameAm: 'አውስትራሊያ እና ኒውዚላንድ', nameOm: 'Awustiraaliyaa fi New Zealand' },
      { id: 'diaspora_af', nameEn: 'Africa & Other Nations', nameAm: 'አፍሪካ እና ሌሎች ሀገራት', nameOm: 'Afrikaa fi Biyyoota Biroo' }
    ]
  }
];
