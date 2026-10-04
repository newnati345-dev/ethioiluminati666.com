import { Agent, Announcement, FundRecipient, VaultChapter } from '../types';

export const ETHIOPIAN_BANKS = [
  { id: 'cbe', name: 'Commercial Bank of Ethiopia (CBE / ንግድ ባንክ)', code: 'CBE', color: '#682a7a', logoUrl: '/bank-logos/commercial_bank_of_ethiopia.svg' },
  { id: 'telebirr', name: 'Ethio Telecom Telebirr (ቴሌብር)', code: 'TELEBIRR', color: '#0085ca', logoUrl: '/bank-logos/telebirr.svg' },
  { id: 'cbebirr', name: 'CBE Birr (ሲቢኢ ብር)', code: 'CBEBIRR', color: '#78350f', logoUrl: '/bank-logos/cbe_birr_normal.svg' },
  { id: 'awash', name: 'Awash Bank (አዋሽ ባንክ)', code: 'AWASH', color: '#0284c7', logoUrl: '/bank-logos/awash_international_bank.svg' },
  { id: 'dashen', name: 'Dashen Bank (ዳሸን ባንክ)', code: 'DASHEN', color: '#1e3a8a', logoUrl: '/bank-logos/dashen_bank.svg' },
  { id: 'abyssinia', name: 'Bank of Abyssinia (አቢሲኒያ ባንክ)', code: 'BOA', color: '#d97706', logoUrl: '/bank-logos/bank_of_abyssinia.svg' },
  { id: 'nib', name: 'Nib International Bank (ንብ ባንክ)', code: 'NIB', color: '#eaaa00', logoUrl: '/bank-logos/nib_bank.png' },
  { id: 'wegagen', name: 'Wegagen Bank (ወጋገን ባንክ)', code: 'WEGAGEN', color: '#da291c', logoUrl: '/bank-logos/wegagen_bank.png' },
  { id: 'hibret', name: 'Hibret Bank (ህብረት ባንክ)', code: 'HIBRET', color: '#991b1b', logoUrl: '/bank-logos/hibret_bank.svg' },
  { id: 'coop', name: 'Cooperative Bank of Oromia (Coopbank)', code: 'COOP', color: '#0f766e', logoUrl: '/bank-logos/cooperative_bank_of_oromia.svg' },
  { id: 'sinqe', name: 'Sinqe Bank (ሲንቄ ባንክ)', code: 'SINQE', color: '#047857', logoUrl: '/bank-logos/sinqee_bank.png' },
  { id: 'amhara', name: 'Amhara Bank (አማራ ባንክ)', code: 'AMHARA', color: '#137547', logoUrl: '/bank-logos/amhara_bank.svg' },
];

export const ETHIOPIAN_REGIONS = [
  'Addis Ababa (አዲስ አበባ)',
  'Oromia (ኦሮሚያ)',
  'Amhara (አማራ)',
  'Tigray (ትግራይ)',
  'Sidama (ሲዳማ)',
  'Central Ethiopia (ማዕከላዊ ኢትዮጵያ)',
  'South Ethiopia (ደቡብ ኢትዮጵያ)',
  'South West Ethiopia (ደቡብ ምዕራብ)',
  'Somali (ሶማሌ)',
  'Afar (አፋር)',
  'Benishangul-Gumuz (ቤኒሻንጉል)',
  'Gambela (ጋምቤላ)',
  'Harari (ሐረሪ)',
  'Dire Dawa (ድሬዳዋ)',
  'Diaspora - Middle East / Gulf (መካከለኛው ምስራቅ)',
  'Diaspora - North America & Europe (ሰሜን አሜሪካ እና አውሮፓ)'
];

export const OFFICIAL_AGENTS: Agent[] = [
  {
    id: 'agent-01',
    name: 'Agent Samuel Girma',
    title: 'Chief Regional Guardian - Central Directorate',
    region: 'Addis Ababa & Central Division',
    phone: '+251 91 142 8820',
    code: 'EIA-AG-01',
    status: 'online',
    avatarInitials: 'SG'
  },
  {
    id: 'agent-02',
    name: 'Agent Yohannes Haile',
    title: 'Grand Commissioner - Diaspora & International Relations',
    region: 'Gulf States & Middle East Division (Riyadh / Dubai)',
    phone: '+966 54 819 3201',
    code: 'EIA-AG-02',
    status: 'online',
    avatarInitials: 'YH'
  },
  {
    id: 'agent-03',
    name: 'Agent Tigist Bekele',
    title: 'Senior Officer - Oromia Regional Chapter',
    region: 'Oromia & Southern Rift',
    phone: '+251 92 384 5519',
    code: 'EIA-AG-03',
    status: 'online',
    avatarInitials: 'TB'
  },
  {
    id: 'agent-04',
    name: 'Agent Dawit Mengistu',
    title: 'Council Custodian - Northern Lodges',
    region: 'Amhara & Tigray Regional Chapters',
    phone: '+251 93 491 2280',
    code: 'EIA-AG-04',
    status: 'busy',
    avatarInitials: 'DM'
  }
];

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'ann-01',
    title: {
      en: 'Executive Council Decree: 2026 Sovereign Endowment Tranche Unlocked',
      am: 'የበላይ ምክር ቤት አዋጅ፡ የ2026 ሉዓላዊ የእርዳታ ፈንድ ተፈቅዷል',
      om: 'Murtee Mana Maree Olaanaa: Fandii fi Deeggarsi Bara 2026 Eeyyamameera',
      ar: 'مرسوم المجلس الأعلى: إطلاق مخصصات 2026'
    },
    date: 'March 2026',
    priority: 'high',
    excerpt: {
      en: 'The Grand Assembly has approved the regional allocation of 150 Million ETB for approved member empowerment programs and community foundations.',
      am: 'ጠቅላላ ጉባኤው ለፀደቁ አባላት የ150 ሚሊዮን ብር የልማት ድጋፍ አጽድቋል።',
      om: 'Gumiin Olaanaa baajata deeggarsa birrii miiliyoona 150 miseensota eeyyamamaniif mirkaneesseera.',
      ar: 'المجلس اعتمد 150 مليون بر إثيوبي لدعم الأعضاء المعتمدين.'
    },
    content: {
      en: 'Members who have completed Stage 2 (Banking Verification) and Stage 3 (Covenant Oath) are scheduled for their regional disbursements in coordination with the Grand Council Directorate.',
      am: 'ደረጃ 2 (የባንክ ማረጋገጫ) እና ደረጃ 3 (የቃል ኪዳን መሃላ) ያጠናቀቁ አባላት ከዲሬክቶሬቱ ጋር በመቀናጀት ክፍያቸውን ይቀበላሉ።',
      om: "Miseensonni Sadarkaa 2ffaa fi 3ffaa xumuran qindeessaa mana maree waliin ta'uun kaffaltii isaanii ni fudhatu.",
      ar: 'الأعضاء المنجزون للمراحل المتقدمة مشمولون بجدول الصرف الإقليمي.'
    }
  },
  {
    id: 'ann-02',
    title: {
      en: 'Permanent Access Code Migration & Security Hardening Protocol',
      am: 'የቋሚ መለያ ኮድ ደህንነት ፕሮቶኮል ማሳሰቢያ',
      om: 'Iccitii fi Nageenya Koodii Dhaabbataa Eegsisuu',
      ar: 'بروتوكول حماية الشفرة الدائمة'
    },
    date: 'February 2026',
    priority: 'normal',
    excerpt: {
      en: 'All verified members are instructed never to disclose their 8-character permanent codes (e.g. EIA-XXXX-XX) to unauthorized parties.',
      am: 'ማንኛውም አባል የ8-አሃዝ ቋሚ መለያ ኮዱን ላልተፈቀደላቸው አካላት እንዳይሰጥ በጥብቅ እናሳስባለን።',
      om: 'Miseensonni hundi koodii dhaabbataa qaama birootti akka hin kennine akeekkachiifama.',
      ar: 'يُحظر الإفصاح عن الشفرة الدائمة لأي طرف خارجي.'
    },
    content: {
      en: 'The official portal is the sole authorized communication gateway. Verify all official communications through the secure in-portal encrypted dispatch.',
      am: 'ይህ ይፋዊ ፖርታል ብቸኛው የኤጀንሲው ትክክለኛ የመረጃ መረብ ነው። ጥያቄዎችዎን በፖርታሉ የውስጥ መልዕክት ይጠይቁ።',
      om: "Qunnamtii keessan appii fi poortaalii idilee qofaan godhaa.",
      ar: 'استخدم البوابة الرسمية حصراً لكافة التحديثات والمراسلات.'
    }
  }
];

export const FUND_RECIPIENTS: FundRecipient[] = [
  {
    id: 'rec-01',
    recipientName: 'Kalkidan T. / Agro-Processing Initiative',
    region: 'Bishoftu, Oromia',
    grantAmount: '$45,000 USD',
    grantETB: '4,500,000 ETB',
    purpose: 'Commercial Poultry & Organic Farming Expansion',
    disbursementDate: 'January 14, 2026',
    referenceCode: 'EIA-GR-8891'
  },
  {
    id: 'rec-02',
    recipientName: 'Solomon W. & Associates',
    region: 'Bole Sub-City, Addis Ababa',
    grantAmount: '$80,000 USD',
    grantETB: '8,000,000 ETB',
    purpose: 'Logistics Fleet & Medical Supplies Distribution Hub',
    disbursementDate: 'February 03, 2026',
    referenceCode: 'EIA-GR-9014'
  },
  {
    id: 'rec-03',
    recipientName: 'Abeba G. / Heritage Crafts Cooperative',
    region: 'Gondar, Amhara',
    grantAmount: '$32,000 USD',
    grantETB: '3,200,000 ETB',
    purpose: 'Traditional Textile Preservation & Export Consortium',
    disbursementDate: 'February 26, 2026',
    referenceCode: 'EIA-GR-9122'
  },
  {
    id: 'rec-04',
    recipientName: 'Ermias B. / Tech Innovation Labs',
    region: 'Hawassa, Sidama',
    grantAmount: '$60,000 USD',
    grantETB: '6,000,000 ETB',
    purpose: 'Solar Microgrid & Rural Digital Connectivity Network',
    disbursementDate: 'March 18, 2026',
    referenceCode: 'EIA-GR-9255'
  }
];

export const VAULT_CHAPTERS: VaultChapter[] = [
  {
    id: 'chap-01',
    number: 1,
    title: {
      en: 'The Principle of Perpetual Illumination',
      am: 'የዘላለማዊ ብርሃንና ጥበብ መርሆዎች',
      om: 'Qajeelfama Ifaa fi Ogummaa Dhaabbataa',
      ar: 'مبدأ التنوير الأبدي'
    },
    subtitle: {
      en: 'The awakening of mind over ignorance and the architectonic foundation of sovereign life.',
      am: 'የአዕምሮ ንቃት በስንፍና ላይ እና የሉዓላዊ ህይወት መሠረት።',
      om: "Dammaqiinsa sammuu fi bu'uura jireenya badhaadhinaa.",
      ar: 'صحوة العقل وتشييد أركان السيادة الفكرية.'
    },
    requiredStage: 1,
    excerpt: {
      en: 'Light is not the absence of darkness, but the deliberate cultivation of wisdom, discernment, and deliberate action.',
      am: 'ብርሃን የጨለማ መጥፋት ብቻ ሳይሆን የጥበብ፣ የማስተዋል እና የታሰበበት ተግባር ውጤት ነው።',
      om: 'Ifni dhabama dukkanaa qofa miti; ogummaa fi hubannoo gabbifachuu dha.',
      ar: 'النور صنيعة الحكمة والتدبير الحكيم.'
    },
    pages: {
      en: [
        "Throughout the ages, true sovereignty has never been distributed at random. It is cultivated by those who seek the light when the world slumbers in confusion.",
        "To walk the corridor of the Illuminated is to accept responsibility: for your household, your community, your nation, and the stewardship of wealth.",
        "The first step requires complete honesty of intent. Those who seek only coin without virtue shall find that gold without structure is but heavy sand."
      ],
      am: [
        "በዘመናት ሁሉ እውነተኛ ክብርና ብልጽግና በዕድል አልተገኘም። ዓለም በግራ መጋባት ውስጥ በምትሆንበት ጊዜ ብርሃንን በሚሹ ሰዎች የሚገነባ ነው።",
        "የብርሃን ጎዳናን መከተል ኃላፊነትን መቀበል ነው፡ ለቤተሰብዎ፣ ለማህበረሰብዎ፣ ለሀገርዎ እና ለሀብት አያያዝዎ።",
        "የመጀመሪያው እርምጃ የዓላማን ቅንነት ይጠይቃል። ያለ መልካም ምግባር ወርቅን ብቻ የሚሹ ሰዎች ያለ መዋቅር ወርቅ እንደ ከባድ አሸዋ መሆኑን ይገነዘባሉ።"
      ],
      om: [
        "Baroota hunda keessatti qabeenyi fi aangoon dhugaa carraan hin argamu. Namoota ogummaa fi ifa barbaadan qofaan ijaarama.",
        "Karaa kana irra deemuun itti gaafatamummaa guddaa fudhachuu dha: maatii keessaniif, hawaasa keessaniif fi biyya keessaniif.",
        "Tarkaanfiin inni duraa qulqullina kaayyooti. Qabeenyi ogummaa hin qabne akka cirracha ulfaataa waan ta'eef."
      ],
      ar: [
        "على مر العصور، لم تكن السيادة محض صدفة بل ثمرة السعي الحثيث نحو النور.",
        "السير في هذا الدرب يعني حمل المسؤولية الكاملة تجاه الأهل والمجتمع والوطن.",
        "الخطوة الأولى تبدأ بإخلاص النية وبناء الفضيلة الحقيقية."
      ]
    }
  },
  {
    id: 'chap-02',
    number: 2,
    title: {
      en: 'The Alchemy of Sovereign Abundance',
      am: 'የሉዓላዊ ብልጽግና እና የሀብት ሚስጥር',
      om: 'Iccitii Badhaadhina Qabeenyaa fi Faayinaansii',
      ar: 'كيمياء الوفرة والسيادة المالية'
    },
    subtitle: {
      en: 'The laws of exchange, productive capital, and the stewardship of prosperity.',
      am: 'የገበያ ሕጎች፣ አምራች ካፒታል እና የብልጽግና አስተዳደር።',
      om: "Seera gabaa, kaappitaala oomishaa fi bulchiinsa qabeenyaa.",
      ar: 'قوانين التبادل والإنتاجية وحفظ النماء.'
    },
    requiredStage: 2,
    excerpt: {
      en: 'Money obeys the laws of attraction and discipline. Where order reigns, abundance flows without restriction.',
      am: 'ገንዘብ የስርዓትና የዲሲፕሊን ሕግን ይከተላል። ሥርዓት ባለበት ቦታ ብልጽግና ያለ ገደብ ይፈሳል።',
      om: "Maallaqni seera qajeelfamaa hordofa. Iddoo sirni jiru qabeenyi ni baay'ata.",
      ar: 'المال يتبع قوانين الانضباط والنظام.'
    },
    pages: {
      en: [
        "Wealth is energy crystallized into agreement. The banks and financial systems of the world are conduits created to channel this vitality.",
        "When an initiate links their financial dossier, they align their vessel with the council's sovereign reservoir. Every birr allocated carries a covenant of stewardship.",
        "Invest not in vanity; invest in land, production, collective commerce, and the elevation of your regional brothers."
      ],
      am: [
        "ሀብት ወደ ስምምነት የተቀየረ ኃይል ነው። የዓለም የባንክና የፋይናንስ ሥርዓቶች ይህንን ኃይል ለማስተላለፍ የተፈጠሩ መስመሮች ናቸው።",
        "አንድ አባል የፋይናንስ መረጃውን ሲያገናኝ፣ መርከቡን ከኤጀንሲው ሉዓላዊ ማከማቻ ጋር ያስተካክላል። የተመደበው እያንዳንዱ ብር የኃላፊነት ቃል ኪዳን አለው።",
        "በከንቱ አታባክኑ፤ በመሬት፣ በማምረት፣ በህብረት ንግድ እና በወንድሞችዎ ከፍታ ላይ ኢንቨስት ያድርጉ።"
      ],
      om: [
        "Qabeenyi humna walii-galtee irratti hundaa'eedha. Baankileenis karaa maallaqni itti dhangala'u dha.",
        "Miseensi tokko herrega baankii yeroo galmeessu, qabeenya dhaabbatichaa waliin wal-qabata. Gargaarsi hundi itti gaafatamummaa qaba.",
        "Qabeenya lafa irratti, oomisha irratti fi guddina hawaasaa irratti oolchaa."
      ],
      ar: [
        "الثروة طاقة تتبلور في الاتفاق والعمل المنظم عبر المنظومات المالية.",
        "ربط الحساب البنكي هو جسر التوافق مع الصناديق التنموية للمجلس.",
        "استثمر في الإنتاج المستدام ورفعة المجتمع."
      ]
    }
  },
  {
    id: 'chap-03',
    number: 3,
    title: {
      en: 'The Covenant of the Sacred Seal',
      am: 'የቅዱስ ማኅተም እና የታማኝነት ቃል ኪዳን',
      om: 'Kakuu Chaappaa Qulqulluu fi Iccitii',
      ar: 'ميثاق الخاتم والعهد الأبدي'
    },
    subtitle: {
      en: 'Discretion, eternal fidelity to the brethren, and the power of the written affirmation.',
      am: 'ምስጢር ጠባቂነት፣ ለወንድማማችነት ዘላለማዊ ታማኝነት እና የጽሑፍ ማረጋገጫ ኃይል።',
      om: 'Iccitii eeguu, amanamummaa fi humna mallattoo kakuu.',
      ar: 'الكتمان والولاء للمبادئ العليا.'
    },
    requiredStage: 3,
    excerpt: {
      en: 'The spoken word is wind; the signature is stone. That which is sealed under the pyramid of light cannot be rescinded.',
      am: 'የሚነገር ቃል እንደ ንፋስ ነው፤ ፊርማ ግን እንደ ድንጋይ የጸና ነው። በብርሃኑ ፒራሚድ ስር የታተመው አይሻርም።',
      om: 'Jechi afaanii akka qilleensaati; mallattoon garuu akka dhagaati. Chaappaan ifaa hin jijjiiramu.',
      ar: 'الكلمة المنطوقة ريح، لكن التوقيع حجر منقوش لا يزول.'
    },
    pages: {
      en: [
        "In silence is power stored. The greatest structures of ancient civilizations were raised not with clamor in the marketplace, but with whispered geometry among master builders.",
        "Your digital signature is your solemn pledge. You vow to shield the identity of your fellow members and the strategic operations of the Ethiopian Agency.",
        "With this affirmation, the veil lifts. The third chamber opens, and the assigned guardian extends the hand of sovereign brotherhood."
      ],
      am: [
        "ኃይል በዝምታ ውስጥ ተጠብቆ ይኖራል። የታላላቅ ጥንታዊ ሥልጣኔዎች ታላላቅ ቅርሶች በገበያ ጩኸት ሳይሆን በሊቃውንት ጸጥታ ተገንብተዋል።",
        "ዲጂታል ፊርማዎ የተቀደሰ ቃልዎ ነው። የአባላትን ምስጢር እና የኢትዮጵያ ኤጀንሲን ስትራቴጂያዊ እንቅስቃሴ ለመጠበቅ ቃል ይገባሉ።",
        "በዚህ ማረጋገጫ መጋረጃው ይከፈታል። ሦስተኛው ክፍል ተከፍቶ የተመደበው ወኪል የወንድማማችነት እጁን ይዘረጋል።"
      ],
      om: [
        "Cal-jechuun humna qaba. Ijaarsonni gurguddoon icciitiin ijaaraman malee wacaan miti.",
        "Mallattoon keessan kakuu keessani. Iccitii obboloota keessanii fi dhaabbatichaa eeguuf kakuu galtu.",
        "Mallattoo kanaan bantiin sadaffaa ni banama; bakka bu'aan keessanis harka isin qaba."
      ],
      ar: [
        "في الصمت تكمن القوة، وبالأمانة تُبنى الحصون الشامخة.",
        "توقيعك الإلكتروني ميثاق غليظ بحفظ أمانة المجتمع والأعضاء.",
        "بهذا العهد ترتقي إلى مستوى المسؤولية العليا."
      ]
    }
  },
  {
    id: 'chap-04',
    number: 4,
    title: {
      en: 'The Council of Sovereign Guardians',
      am: 'የሉዓላዊ ጠባቂዎች የበላይ ምክር ቤት',
      om: 'Mana Maree Eegdota Olaanoo',
      ar: 'مجلس الحراس والسيادة الإقليمية'
    },
    subtitle: {
      en: 'The apex of induction, issuance of the permanent commission, and regional influence.',
      am: 'የመጨረሻው የቅበላ ደረጃ፣ የቋሚ አባልነት ምስክር ወረቀት አሰጣጥ እና ክልላዊ ተጽዕኖ።',
      om: 'Fiixee miseensummaa, waraqaa ragaa idilee fi dhiibbaa naannoo.',
      ar: 'ذروة التكليف وإصدار وثيقة العضوية الدائمة.'
    },
    requiredStage: 4,
    excerpt: {
      en: 'You stand now not as an aspirant, but as an anointed custodian of the Light in the Horn of Africa.',
      am: 'አሁን እንደ ፈላጊ ብቻ ሳይሆን በአፍሪካ ቀንድ ውስጥ የብርሃንና የእውነት ጠባቂ ሆነው ቆመዋል።',
      om: 'Amma akka gaafataa qofaatti osoo hin taane, akka eegduu ifaatti dhaabbattu.',
      ar: 'تقف الآن حارساً لمبادئ النور والبناء.'
    },
    pages: {
      en: [
        "The seal is struck. Your permanent registration hash is recorded in the immutable archives of the Grand Lodge.",
        "Download your Certificate of Membership. It bears the Ge'ez imperial crest, the golden watermark of the pyramid, and the validation signature of the Directorate.",
        "Go forth and bring prosperity to the land of Abyssinia and wherever your foot shall tread. The Light shines eternal."
      ],
      am: [
        "ማኅተሙ ተመትቷል። የእርስዎ ቋሚ መለያ ኮድ በታላቁ ሎጅ በማይለወጡ ማህደሮች ውስጥ ተመዝግቧል።",
        "የአባልነት ምስክር ወረቀትዎን ያውርዱ። የግዕዝ አርማ፣ የወርቅ ፒራሚድ ማኅተም እና የዲሬክቶሬቱን የይሁንታ ፊርማ ይዟል።",
        "ሂዱና ለኢትዮጵያ ምድር እና እግርዎ በሚረግጥበት ቦታ ሁሉ ብልጽግናን አምጡ። ብርሃን ለዘላለም ያበራል።"
      ],
      om: [
        "Chaappaan idilee rukkutameera. Koodiin keessan galmee hin haqamne keessatti qabameera.",
        "Waraqaa ragaa keessan buufadhaa. Chaappaa warqee fi mallattoo eeyyamaa of keessaa qaba.",
        "Dhaqaa; biyya keenya fi addunyaa mara irratti badhaadhina fi ifa fidaa. Ifni barabaraan haa ifu."
      ],
      ar: [
        "تم تثبيت الختم، وشفرتك الدائمة باتت مسجلة في سجلات المجلس.",
        "حمّل شهادة العضوية الرسمية المختومة والموثقة.",
        "انطلق وانشر الازدهار والحكمة حيثما حللت."
      ]
    }
  }
];

export const GALLERY_ITEMS = [
  {
    id: 'gal-01',
    category: 'assemblies',
    title: {
      en: 'The Grand Imperial Council Chamber',
      am: 'የበላይ ምክር ቤት አዳራሽ',
      om: 'Galma Mana Maree Olaanaa',
      ar: 'قاعة المجلس الإمبراطوري'
    },
    location: 'Addis Ababa Directorate',
    year: '2026',
    description: {
      en: 'Neoclassical high assembly chamber where regional guardians convene for quarterly resource allocation.',
      am: 'የክልል ተወካዮች የሀብት ድልድልን ለመወሰን በየሩብ ዓመቱ የሚሰበሰቡበት አዳራሽ።',
      om: "Galma bakka buutonni naannoo baajata irratti mari'ataniif qophaa'e.",
      ar: 'القاعة الكبرى لانعقاد مندوبي الأقاليم لتوزيع المخصصات.'
    },
    theme: 'gold-chamber'
  },
  {
    id: 'gal-02',
    category: 'philanthropy',
    title: {
      en: 'Oromia Agricultural Cooperative Grant',
      am: 'የኦሮሚያ ግብርና ህብረት ስራ ድጋፍ',
      om: 'Deeggarsa Qonnaa Oromiyaa',
      ar: 'منحة التعاونيات الزراعية'
    },
    location: 'Bishoftu Regional Hub',
    year: '2026',
    description: {
      en: 'Formal endowment ceremony presenting 4.5M ETB machinery and irrigation capital to local cooperative leaders.',
      am: 'ለአካባቢው አርሶ አደሮች የ4.5 ሚሊዮን ብር የግብርና ማሽነሪዎች እና የመስኖ ካፒታል የተሰጠበት ስነ-ስርዓት።',
      om: 'Sirna deeggarsa meeshaa qonnaa birrii miiliyoona 4.5 qonnaan bultootaaf kenname.',
      ar: 'تسليم معدات زراعية ومنح بقيمة 4.5 مليون بر.'
    },
    theme: 'agricultural-grant'
  },
  {
    id: 'gal-03',
    category: 'ceremonies',
    title: {
      en: 'Induction of the Golden Seal',
      am: 'የወርቅ ማኅተም ቅበላ ስነ-ስርዓት',
      om: 'Sirna Chaappaa Warqee',
      ar: 'مراسم تدشين الخاتم الذهبي'
    },
    location: 'Directorate Sanctuary',
    year: '2025',
    description: {
      en: 'Annual consecration of the digital keys and physical seals representing the covenant of discretion.',
      am: 'የምስጢር ቃል ኪዳን መገለጫ የሆኑ ዲጂታል ቁልፎች እና ማህተሞች አመታዊ ምርቃት።',
      om: 'Sirna kabaja chaappaa fi koodii iccitii waggaa.',
      ar: 'التكريس السنوي للمفاتيح والأختام المعتمدة.'
    },
    theme: 'golden-seal'
  },
  {
    id: 'gal-04',
    category: 'archives',
    title: {
      en: 'The Illuminated Codex of Lalibela',
      am: 'የላሊበላ የጥበብ ድርሳን ማህደር',
      om: 'Kuusaa Durii Laallibalaa',
      ar: 'مخطوطة لاليبيلا التنويرية'
    },
    location: 'Northern Archive Vault',
    year: 'Historic',
    description: {
      en: "Ancient Ge'ez parchment preserved in the agency private archives detailing sacred geometric harmonic proportions.",
      am: 'ቅዱስ የጂኦሜትሪ እና የጥበብ ምስጢራትን የያዘ ጥንታዊ የግዕዝ ብራና በማህደሩ ውስጥ ተጠብቆ ይገኛል።',
      om: "Waraqaa durii afaan Gi'iiziin barreeffamee kuusaa keessatti olkaa'ame.",
      ar: 'مخطوطة أثرية باللغة الجعزية محفوظة في الأرشيف الخاص.'
    },
    theme: 'ancient-codex'
  }
];
