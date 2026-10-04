import { Language } from '../types';

export interface Translations {
  agencyTitle: string;
  agencySubtitle: string;
  selectLanguage: string;
  selectLanguageSubtitle: string;
  continue: string;
  register: string;
  fullName: string;
  fullNamePlaceholder: string;
  phoneNumber: string;
  phonePlaceholder: string;
  requestAccess: string;
  fillAllFields: string;
  invalidFullName: string;
  invalidPhone: string;
  permanentCode: string;
  permanentCodePlaceholder: string;
  memberLogin: string;
  memberLoginSubtitle: string;
  login: string;
  logout: string;
  newMember: string;
  registerHere: string;
  alreadyHaveCode: string;
  loginHere: string;
  invalidCode: string;
  enterCode: string;
  selectAgent: string;
  verifiedMember: string;
  membershipProgress: string;
  myMessages: string;
  announcements: string;
  gallery: string;
  fundRecipients: string;
  ourAgents: string;
  bankSection: string;
  selectBank: string;
  chooseBankTitle: string;
  accountName: string;
  accountNumber: string;
  personalSection: string;
  work: string;
  age: string;
  sex: string;
  male: string;
  female: string;
  addressSection: string;
  region: string;
  zone: string;
  selectRegion: string;
  selectZone: string;
  congrats: string;
  approved: string;
  yourCode: string;
  copyCode: string;
  copied: string;
  saveWarning: string;
  savedBtn: string;
  vaultTitle: string;
  vaultSubtitle: string;
  signatureOptions: string;
  signatureSubtitle: string;
  certOfMembership: string;
  certLocked: string;
  certLockedDesc: string;
  certDownload: string;
  overview: string;
  principles: string;
  stages: string;
  vault: string;
  agents: string;
  heroHeadline: string;
  heroSubheadline: string;
  joinAgencyBtn: string;
  memberPortalBtn: string;
  stage1Title: string;
  stage1Desc: string;
  stage2Title: string;
  stage2Desc: string;
  stage3Title: string;
  stage3Desc: string;
  stage4Title: string;
  stage4Desc: string;
  contactAgent: string;
  liveChat: string;
  typeMessage: string;
  send: string;
  saveInformation: string;
  savedSuccessfully: string;
  permanentAccess: string;
  uniqueHash: string;
  supportedBanks: string;
  banksListText: string;
  languageReach: string;
  languageList: string;
  securityLayer: string;
  adminVerifiedPass: string;
  exploreVault: string;
  officialSovereignLodge: string;
  addisAndGlobal: string;
  pillarsTitle: string;
  pillarsSubtitle: string;
  pillar1Badge: string;
  pillar1Title: string;
  pillar1Desc: string;
  pillar1Meta: string;
  readVaultBtn: string;
  pillar2Badge: string;
  pillar2Title: string;
  pillar2Desc: string;
  pillar2Meta: string;
  pillar3Badge: string;
  pillar3Title: string;
  pillar3Desc: string;
  pillar3Meta: string;
  pillar4Badge: string;
  pillar4Title: string;
  pillar4Desc: string;
  pillar4Meta: string;
  directoryGuardiansBtn: string;
  admittedInitiates: string;
  admittedSub: string;
  endowmentCapital: string;
  endowmentSub: string;
  activeAssemblies: string;
  activeAssembliesSub: string;
  guardianAgentsCount: string;
  guardianAgentsSub: string;
  proofStewardship: string;
  officialComm: string;
  accreditedGuardians: string;
  guardiansSubtitle: string;
  requestAssignment: string;
  online: string;
  actionRequired: string;
  completed: string;
  ready: string;
  linkBankNow: string;
  affirmSigNow: string;
  viewCertNow: string;
  awaitingSig: string;
  completeToUnlock: string;
  openDirectChat: string;
  endToEndEncrypted: string;
  officialSovereignCert: string;
  grandCouncilHorn: string;
  certNoticeP1: string;
  certNoticeP2: string;
  certBody: string;
  permanentHash: string;
  jurisdiction: string;
  guardianAgent: string;
  commissionDate: string;
  agentSig: string;
  memberAffirmation: string;
  officialSealText: string;
  printDownload: string;
  optionA: string;
  optionB: string;
  clearCanvas: string;
  signGuide: string;
  solemnOath: string;
  affirmBtn: string;
  covenantSealedTitle: string;
  covenantSealedDesc: string;
  returnPortal: string;
  chapterPrefix: string;
  folio: string;
  of: string;
  previousFolio: string;
  nextFolio: string;
  unsealed: string;
  guardianSealUnbroken: string;
  vaultLockedPrompt: string;
  authWithCode: string;
  archivalRecord: string;
  viewRecord: string;
  location: string;
  recorded: string;
  closeRecord: string;
  filterAll: string;
  filterAssemblies: string;
  filterPhilanthropy: string;
  filterCeremonies: string;
  filterArchives: string;
  residencyJurisdiction: string;
  nameHelp: string;
  agreementText: string;
  registeredUnder: string;
  permanentAuth: string;
  instantDemo: string;
  aiTitle: string;
  aiSubtitle: string;
  aiAsk: string;
  aiAskBtn: string;
  analyzingArchives: string;
  adminTitle: string;
  adminSubtitle: string;
  backToPublic: string;
  registeredCandidates: string;
  pendingClearance: string;
  consecratedInitiates: string;
  activeGuardians: string;
  searchPlaceholder: string;
  colCode: string;
  colName: string;
  colContact: string;
  colAgent: string;
  colStage: string;
  colBank: string;
  colActions: string;
  inspectDossier: string;
  advanceStage: string;
  approveBank: string;
  revokeBank: string;
  closeDossier: string;
  portalPortfolios: string;
  authentication: string;
  adminConsole: string;
  allRightsReserved: string;
  directorateLog: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    agencyTitle: "Ethiopia Illuminati Agency",
    agencySubtitle: "An exclusive, admin-verified access portal designed for high-level secure communications and agency-authorized engagements.",
    selectLanguage: "Choose Your Language",
    selectLanguageSubtitle: "Please select your preferred language",
    continue: "Continue",
    register: "Register for Agency Access",
    fullName: "Full Name",
    fullNamePlaceholder: "First Name and Father's Name",
    phoneNumber: "Phone Number",
    phonePlaceholder: "e.g. 123456...",
    requestAccess: "Request Official Access",
    fillAllFields: "Please fill in all required fields.",
    invalidFullName: "Please enter your full legal name (first and father's name).",
    invalidPhone: "Please enter a valid phone number.",
    permanentCode: "Permanent Access Code",
    permanentCodePlaceholder: "e.g. EIA-8421-9X",
    memberLogin: "Member Login",
    memberLoginSubtitle: "Enter your official permanent code to access your secured dossier",
    login: "Log In",
    logout: "Sign Out",
    newMember: "New applicant?",
    registerHere: "Request access here",
    alreadyHaveCode: "Already possess a permanent code?",
    loginHere: "Log in here",
    invalidCode: "Invalid permanent code. Please check and try again.",
    enterCode: "Please enter your permanent code.",
    selectAgent: "Grand Council Registry",
    verifiedMember: "Verified Agency Member",
    membershipProgress: "Membership Induction Stages",
    myMessages: "Council Direct Dispatch",
    announcements: "Official Decrees & Announcements",
    gallery: "Historical Media Archives",
    fundRecipients: "Verified Philanthropic Grants",
    ourAgents: "Authorized Regional Lodges",
    bankSection: "Bank & Financial Information",
    selectBank: "Select authorized financial institution",
    chooseBankTitle: "Choose Your Bank / Financial Provider",
    accountName: "Account Holder Name",
    accountNumber: "Bank Account Number / Telebirr No.",
    personalSection: "Personal Dossier",
    work: "Profession / Occupation",
    age: "Age",
    sex: "Gender",
    male: "Male",
    female: "Female",
    addressSection: "Regional Jurisdiction",
    region: "Region",
    zone: "Zone / Sub-city",
    selectRegion: "Select your residency region",
    selectZone: "Select zone",
    congrats: "Congratulations",
    approved: "Your registration has been approved by the Grand Council.",
    yourCode: "Your Permanent Access Code",
    copyCode: "Copy Code",
    copied: "Code Copied to Clipboard",
    saveWarning: "Save this permanent code in a safe place. You will need it to log in, verify transactions, and authenticate across all agency portals.",
    savedBtn: "I've Saved My Permanent Code",
    vaultTitle: "The Knowledge Vault",
    vaultSubtitle: "Sacred codex of timeless illumination, economic sovereignty, and ancient principles.",
    signatureOptions: "Signature Options & Oath Affirmation",
    signatureSubtitle: "Affirm your sacred covenant through digital seal and formal signature verification.",
    certOfMembership: "Official Certificate of Membership",
    certLocked: "Official Certificate Sealed",
    certLockedDesc: "Complete all four induction stages to unseal and download your high-resolution official EIA certificate.",
    certDownload: "Download Official Certificate (HTML/Print)",
    overview: "Overview",
    principles: "Principles",
    stages: "Induction Stages",
    vault: "Vault",
    agents: "Council Agents",
    heroHeadline: "The Light of Wisdom & Sovereign Abundance",
    heroSubheadline: "An exclusive, admin-verified access portal designed for high-level secure communications, regional fraternity, and agency-authorized engagements across Ethiopia and the diaspora.",
    joinAgencyBtn: "Request Agency Access",
    memberPortalBtn: "Access Member Portal",
    stage1Title: "Stage 1: Registration & Clearance",
    stage1Desc: "Initial credentials, identity verification, and council assignment.",
    stage2Title: "Stage 2: Financial & Banking Dossier",
    stage2Desc: "Registration of authorized banking channels for philanthropic disbursements.",
    stage3Title: "Stage 3: Covenant Oath & Signature",
    stage3Desc: "Binding digital affirmation of loyalty, discretion, and brotherhood.",
    stage4Title: "Stage 4: Imperial Seal & Commission",
    stage4Desc: "Full illumination privilege, certificate issuance, and council access.",
    contactAgent: "Contact Assigned Agent",
    liveChat: "Encrypted Dispatch Console",
    typeMessage: "Type your confidential message...",
    send: "Send",
    saveInformation: "Save & Update Dossier",
    savedSuccessfully: "Information updated successfully.",
    permanentAccess: "Permanent Access",
    uniqueHash: "Unique 8-Digit Hash",
    supportedBanks: "Supported Channels",
    banksListText: "CBE, Telebirr, Awash, Dashen",
    languageReach: "Available Languages",
    languageList: "English • አማርኛ (Amharic) • Afaan Oromoo",
    securityLayer: "Security Verification",
    adminVerifiedPass: "Admin-Verified Protocol",
    exploreVault: "Explore Knowledge Vault",
    officialSovereignLodge: "Official Sovereign Lodge",
    addisAndGlobal: "Addis Ababa & Global Chapters",
    pillarsTitle: "Four Foundational Pillars of the Ethiopian Agency",
    pillarsSubtitle: "Our brotherhood is grounded in centuries of Abyssinian heritage, strategic resource allocation, and mutual elevation under the light of wisdom.",
    pillar1Badge: "01. SACRED CODEX",
    pillar1Title: "The Knowledge Vault & Ancient Principles",
    pillar1Desc: "Knowledge is the first true currency of power. The Agency maintains an exclusive archive of esoteric treatises, cosmic geometry, and economic philosophies translated into Ge'ez, Amharic, and English for verified members.",
    pillar1Meta: "4 Consecrated Folios • Stage-Locked Access",
    readVaultBtn: "Read Vault Treatises",
    pillar2Badge: "02. CAPITAL & ENDOWMENT",
    pillar2Title: "Sovereign Economic Alignment",
    pillar2Desc: "Direct integration with Ethiopia's leading commercial banks (CBE, Dashen, Awash) and Telebirr for quarterly endowment disbursements, venture grants, and agricultural syndicates.",
    pillar2Meta: "150M ETB Active 2026 Fund Tranche",
    pillar3Badge: "03. SACRED DISCRETION",
    pillar3Title: "The Binding Covenant Oath",
    pillar3Desc: "Every member seals their allegiance through digital signature verification and an oath of discretion. Brotherhood is fortified by loyalty and mutual defense.",
    pillar3Meta: "Stage 3 Signature Required",
    pillar4Badge: "04. GLOBAL INFLUENCE",
    pillar4Title: "Regional Chapters & Philanthropic Impact",
    pillar4Desc: "Active lodges operate across Addis Ababa, Oromia, Amhara, Tigray, and international diaspora hubs in Riyadh, Dubai, London, and Washington DC. Members collaborate on local community infrastructure and commercial trade corridors.",
    pillar4Meta: "11 Regional Assemblies • 48 Authorized Guardians",
    directoryGuardiansBtn: "Directory of Guardians",
    admittedInitiates: "Admitted Initiates",
    admittedSub: "Verified across Ethiopia & Diaspora",
    endowmentCapital: "Endowment Capital",
    endowmentSub: "Allocated to business & agriculture",
    activeAssemblies: "Active Assemblies",
    activeAssembliesSub: "Addis Ababa, Oromia, Amhara, Tigray",
    guardianAgentsCount: "Regional Lodges",
    guardianAgentsSub: "Accredited sovereign lodges",
    proofStewardship: "Proof of Stewardship",
    officialComm: "Official Communication",
    accreditedGuardians: "Accredited Regional Lodges",
    guardiansSubtitle: "Regional council chapters entrusted with candidate vetting, bank dossier verification, and personal assistance across Ethiopia and diaspora chapters.",
    requestAssignment: "Request Access",
    online: "ONLINE",
    actionRequired: "ACTION REQUIRED",
    completed: "COMPLETED",
    ready: "READY",
    linkBankNow: "Link Bank Account Now",
    affirmSigNow: "Affirm Sacred Signature",
    viewCertNow: "View Official Certificate",
    awaitingSig: "Awaiting Stage 3 Signature",
    completeToUnlock: "Complete preceding stage to unlock",
    openDirectChat: "Open Direct Encrypted Dispatch",
    endToEndEncrypted: "End-to-End Encrypted Council Channel",
    officialSovereignCert: "Official Sovereign Certificate",
    grandCouncilHorn: "Grand Sovereign Council of the Horn of Africa",
    certNoticeP1: "Let it be known across all lodges, assemblies, and sovereign territories",
    certNoticeP2: "This document solemnly certifies that",
    certBody: "has met all requirements of registration, financial alignment, and sacred discretion, and is hereby enrolled as an anointed member of the Ethiopia Illuminati Agency under the perpetual custody of the Grand Assembly.",
    permanentHash: "Permanent Hash",
    jurisdiction: "Jurisdiction",
    guardianAgent: "Council Lodge",
    commissionDate: "Commission Date",
    agentSig: "Grand Directorate Signature",
    memberAffirmation: "Member Covenant Affirmation",
    officialSealText: "OFFICIAL EIA SEAL",
    printDownload: "Print / Save Certificate",
    optionA: "Option A: Select Official Calligraphy Signature",
    optionB: "Option B: Draw Handwritten Digital Signature",
    clearCanvas: "Clear Canvas",
    signGuide: "Use mouse, stylus, or fingertip to sign within this consecrated field",
    solemnOath: "Solemn Covenant of Discretion: I solemnly pledge unconditional confidentiality, fidelity to the principles of the Ethiopia Illuminati Agency, and responsible stewardship of any financial and intellectual endowments granted to me.",
    affirmBtn: "Affirm & Consecrate Signature (Complete Stage 3)",
    covenantSealedTitle: "Sacred Covenant Formally Sealed",
    covenantSealedDesc: "Your digital signature and binding oath of discretion have been immutably registered with the Council. Stage 3 completed!",
    returnPortal: "Return to Member Portal",
    chapterPrefix: "Chapter",
    folio: "Folio",
    of: "of",
    previousFolio: "Previous Folio",
    nextFolio: "Next Folio",
    unsealed: "UNSEALED",
    guardianSealUnbroken: "Guardian Seal Unbroken",
    vaultLockedPrompt: "This chapter is sealed under sovereign council decree. It requires Stage Induction credentials to unseal.",
    authWithCode: "Authenticate with Permanent Code",
    archivalRecord: "Official Archival Record",
    viewRecord: "View Archival Record",
    location: "Location",
    recorded: "Recorded",
    closeRecord: "Close Record",
    filterAll: "All",
    filterAssemblies: "Assemblies",
    filterPhilanthropy: "Philanthropy",
    filterCeremonies: "Ceremonies",
    filterArchives: "Archives",
    residencyJurisdiction: "Residency Jurisdiction",
    nameHelp: "First name and father's name required for council verification",
    agreementText: "By submitting, you agree to the agency's strict discretion and authentication covenants.",
    registeredUnder: "Registered under",
    permanentAuth: "Permanent Authentication",
    instantDemo: "Instant Demo: Log in as Verified Member (EIA-DEMO-01)",
    aiTitle: "EIA Guidance Assistant",
    aiSubtitle: "Official Knowledge Dispatch",
    aiAsk: "Ask about registration, stages, banks...",
    aiAskBtn: "Ask",
    analyzingArchives: "Analyzing council archives...",
    adminTitle: "Grand Council Admin Directorate",
    adminSubtitle: "Access Verification, Banking Dossier Clearance & Stage Management",
    backToPublic: "Back to Public Portal",
    registeredCandidates: "Registered Candidates",
    pendingClearance: "Bank Dossiers Pending Clearance",
    consecratedInitiates: "Consecrated Stage 4 Initiates",
    activeGuardians: "Active Regional Guardians",
    searchPlaceholder: "Search by name, permanent code, or phone...",
    colCode: "Permanent Code",
    colName: "Candidate Legal Name",
    colContact: "Phone / Jurisdiction",
    colAgent: "Region / Chapter",
    colStage: "Induction Stage",
    colBank: "Bank Clearance",
    colActions: "Actions",
    inspectDossier: "Inspect Dossier",
    advanceStage: "Advance to Next Stage",
    approveBank: "Approve Bank Account",
    revokeBank: "Revoke Bank Approval",
    closeDossier: "Close Dossier",
    portalPortfolios: "Portal Portfolios",
    authentication: "Authentication",
    adminConsole: "Admin Directorate Console",
    allRightsReserved: "All sovereign rights and discretion covenants reserved.",
    directorateLog: "Directorate Log",
  },
  am: {
    agencyTitle: "የኢትዮጵያ ኢሉሚናቲ ኤጀንሲ",
    agencySubtitle: "ለደህንነቱ የተጠበቀ ግንኙነት እና ለኤጀንሲው የተፈቀዱ አገልግሎቶች የተዘጋጀ ይፋዊ ፖርታል",
    selectLanguage: "ቋንቋዎን ይምረጡ",
    selectLanguageSubtitle: "እባክዎ የሚመርጡትን ቋንቋ ይምረጡ",
    continue: "ይቀጥሉ",
    register: "ለኤጀንሲው አባልነት ይመዝገቡ",
    fullName: "ሙሉ ስም",
    fullNamePlaceholder: "የራስ እና የአባት ስም",
    phoneNumber: "ስልክ ቁጥር",
    phonePlaceholder: "ምሳሌ፡ 09123456...",
    requestAccess: "ይፋዊ ፈቃድ ይጠይቁ",
    fillAllFields: "እባክዎ ሁሉንም አስፈላጊ መረጃዎች ይሙሉ",
    invalidFullName: "እባክዎ ሙሉ ስምዎን (የራስ እና የአባት) በትክክል ያስገቡ",
    invalidPhone: "እባክዎ ትክክለኛ ስልክ ቁጥር ያስገቡ",
    permanentCode: "ቋሚ መለያ ኮድ",
    permanentCodePlaceholder: "ምሳሌ፡ EIA-8421-9X",
    memberLogin: "የአባላት መግቢያ",
    memberLoginSubtitle: "የግል ማህደርዎን ለማየት ቋሚ መለያ ኮድዎን ያስገቡ",
    login: "ይግቡ",
    logout: "ይውጡ",
    newMember: "አዲስ አመልካች ነዎት?",
    registerHere: "እዚህ ይመዝገቡ",
    alreadyHaveCode: "ቋሚ ኮድ አለዎት?",
    loginHere: "እዚህ ይግቡ",
    invalidCode: "የተሳሳተ ኮድ፤ እባክዎ እንደገና ይሞክሩ",
    enterCode: "እባክዎ ቋሚ ኮድዎን ያስገቡ",
    selectAgent: "የምክር ቤት መዝገብ",
    verifiedMember: "የተረጋገጠ አባል",
    membershipProgress: "የአባልነት ቅበላ ደረጃዎች",
    myMessages: "የምክር ቤት ቀጥተኛ መልዕክቶች",
    announcements: "ይፋዊ አዋጆችና ማሳሰቢያዎች",
    gallery: "ታሪካዊ ማህደሮች",
    fundRecipients: "የተረጋገጡ የፈንድ ተጠቃሚዎች",
    ourAgents: "የተፈቀዱ የክልል ሎጆች",
    bankSection: "የባንክ እና የፋይናንስ መረጃ",
    selectBank: "ባንክ ይምረጡ",
    chooseBankTitle: "የባንክ ወይም የፋይናንስ ተቋም ይምረጡ",
    accountName: "የሂሳብ ባለቤት ስም",
    accountNumber: "የባንክ ሂሳብ ቁጥር / የቴሌብር ቁጥር",
    personalSection: "የግል ማህደር",
    work: "ሙያ / ሥራ",
    age: "ዕድሜ",
    sex: "ጾታ",
    male: "ወንድ",
    female: "ሴት",
    addressSection: "ክልላዊ አድራሻ",
    region: "ክልል",
    zone: "ዞን / ክፍለ ከተማ",
    selectRegion: "ክልልዎን ይምረጡ",
    selectZone: "ዞን ይምረጡ",
    congrats: "እንኳን ደስ አለዎት",
    approved: "ምዝገባዎ በበላይ ምክር ቤቱ ጸድቋል",
    yourCode: "የእርስዎ ቋሚ መለያ ኮድ",
    copyCode: "ኮዱን ኮፒ ያድርጉ",
    copied: "ኮዱ ተቀድቷል",
    saveWarning: "ይህንን ቋሚ ኮድ በጥንቃቄ ያስቀምጡ። ለመግባት እና ለሁሉም አገልግሎቶች ያስፈልግዎታል።",
    savedBtn: "ኮዴን አስቀምጫለሁ",
    vaultTitle: "የጥበብ ማህደር (Vault)",
    vaultSubtitle: "የዘላለማዊ ብርሃን፣ ኢኮኖሚያዊ ሉዓላዊነት እና ጥንታዊ መርሆዎች ስብስብ",
    signatureOptions: "የፊርማ ምርጫዎች እና የቃል ኪዳን መሃላ",
    signatureSubtitle: "በዲጂታል ማኅተም እና በይፋዊ ፊርማ ቃል ኪዳንዎን ያጽኑ",
    certOfMembership: "ይፋዊ የአባልነት ምስክር ወረቀት",
    certLocked: "የምስክር ወረቀት ታትሟል",
    certLockedDesc: "የከፍተኛ ጥራት ይፋዊ ምስክር ወረቀትዎን ለማውረድ አራቱንም ደረጃዎች ያጠናቁ",
    certDownload: "ምስክር ወረቀቱን ያውርዱ (HTML/Print)",
    overview: "አጠቃላይ እይታ",
    principles: "መርሆዎች",
    stages: "ደረጃዎች",
    vault: "ማህደር",
    agents: "ተወካዮች",
    heroHeadline: "የጥበብ ብርሃን እና ሉዓላዊ ብልጽግና",
    heroSubheadline: "በኢትዮጵያ እና በዲያስፖራ ላሉ አባላት የተዘጋጀ ከፍተኛ ሚስጥራዊና የተረጋገጠ የአገልግሎት መረብ",
    joinAgencyBtn: "ይፋዊ ፈቃድ ይጠይቁ",
    memberPortalBtn: "ወደ አባላት ፖርታል ይግቡ",
    stage1Title: "ደረጃ 1፡ ምዝገባና ማጣሪያ",
    stage1Desc: "የመጀመሪያ መረጃዎች፣ የማንነት ማረጋገጫ እና የወኪል ምደባ",
    stage2Title: "ደረጃ 2፡ የፋይናንስና ባንክ ማህደር",
    stage2Desc: "ለእርዳታና ፈንድ ክፍያ የሚሆኑ የተፈቀዱ የባንክ መረጃዎች ምዝገባ",
    stage3Title: "ደረጃ 3፡ የቃል ኪዳን መሃላና ፊርማ",
    stage3Desc: "የታማኝነት እና የወንድማማችነት አስገዳጅ ዲጂታል ማረጋገጫ",
    stage4Title: "ደረጃ 4፡ ንጉሣዊ ማኅተም እና ተልዕኮ",
    stage4Desc: "ሙሉ የብርሃን ክብር፣ የምስክር ወረቀት አሰጣጥ እና የካውንስል አባልነት",
    contactAgent: "የተመደበውን ወኪል ያነጋግሩ",
    liveChat: "የተመሰጠረ የቀጥታ መልዕክት",
    typeMessage: "ሚስጥራዊ መልዕክትዎን ይጻፉ...",
    send: "ላክ",
    saveInformation: "መረጃን መዝግብና አዘምን",
    savedSuccessfully: "መረጃዎ በተሳካ ሁኔታ ተመዝግቧል",
    permanentAccess: "ቋሚ አገልግሎት",
    uniqueHash: "ልዩ የ8-አሃዝ ኮድ",
    supportedBanks: "የሚደገፉ ባንኮች",
    banksListText: "ንግድ ባንክ፣ ቴሌብር፣ አዋሽ፣ ዳሸን",
    languageReach: "የቋንቋ አማራጮች",
    languageList: "አማርኛ • English • Afaan Oromoo",
    securityLayer: "የደህንነት ማረጋገጫ",
    adminVerifiedPass: "በአስተዳዳሪ የተረጋገጠ ፕሮቶኮል",
    exploreVault: "የጥበብ ማህደርን ያስሱ",
    officialSovereignLodge: "ይፋዊ ሉዓላዊ ሎጅ",
    addisAndGlobal: "አዲስ አበባ እና አለም አቀፍ ቅርንጫፎች",
    pillarsTitle: "የኢትዮጵያ ኤጀንሲ አራት መሠረታዊ ምሰሶዎች",
    pillarsSubtitle: "ወንድማማችነታችን በጥንታዊ የኢትዮጵያ ቅርስ፣ በስትራቴጂያዊ የሀብት ድልድል እና በጥበብ ብርሃን ላይ የተመሰረተ ነው።",
    pillar1Badge: "01. ቅዱስ ድርሳን",
    pillar1Title: "የጥበብ ማህደር እና ጥንታዊ መርሆዎች",
    pillar1Desc: "እውቀት የመጀመሪያው እውነተኛ የኃይል ምንጭ ነው። ኤጀንሲው ጥንታዊ የፍልስፍና ድርሳናትን በአማርኛ እና በእንግሊዝኛ ያዘጋጃል።",
    pillar1Meta: "4 የተለዩ ድርሳናት • በደረጃ የተከፈቱ",
    readVaultBtn: "ድርሳናትን አንብብ",
    pillar2Badge: "02. ካፒታል እና ፈንድ",
    pillar2Title: "ሉዓላዊ የኢኮኖሚ ትስስር",
    pillar2Desc: "ከኢትዮጵያ ግንባር ቀደም ባንኮች እና ከቴሌብር ጋር ቀጥተኛ ትስስር በማድረግ ለተፈቀዱ አባላት የፈንድ ድጋፍ ይደረጋል።",
    pillar2Meta: "150 ሚሊዮን ብር የ2026 ፈንድ",
    pillar3Badge: "03. ቅዱስ ምስጢር",
    pillar3Title: "አስገዳጅ የቃል ኪዳን መሃላ",
    pillar3Desc: "እያንዳንዱ አባል ታማኝነቱን በዲጂታል ፊርማ እና በምስጢር ጠባቂነት መሃላ ያረጋግጣል።",
    pillar3Meta: "የደረጃ 3 ፊርማ ያስፈልጋል",
    pillar4Badge: "04. አለም አቀፍ ተጽዕኖ",
    pillar4Title: "የክልል ማዕከላት እና ማህበራዊ ድጋፍ",
    pillar4Desc: "በአዲስ አበባ፣ ኦሮሚያ፣ አማራ፣ ትግራይ እና በውጭ ሀገራት የሚገኙ ማዕከላት ለማህበረሰብ ልማት በትብብር ይሰራሉ።",
    pillar4Meta: "11 ክልላዊ ጉባኤዎች • 48 ጠባቂዎች",
    directoryGuardiansBtn: "የተወካዮች ዝርዝር",
    admittedInitiates: "የተመዘገቡ አባላት",
    admittedSub: "በኢትዮጵያና በውጭ የተረጋገጡ",
    endowmentCapital: "የተመደበ ካፒታል",
    endowmentSub: "ለንግድና ግብርና የተመደበ",
    activeAssemblies: "ንቁ ጉባኤዎች",
    activeAssembliesSub: "አዲስ አበባ፣ ኦሮሚያ፣ አማራ፣ ትግራይ",
    guardianAgentsCount: "ክልላዊ ሎጆች",
    guardianAgentsSub: "እውቅና ያላቸው ሎጆች",
    proofStewardship: "የተግባር ማረጋገጫ",
    officialComm: "ይፋዊ ግንኙነት",
    accreditedGuardians: "እውቅና ያላቸው የክልል ሎጆች",
    guardiansSubtitle: "የአባላትን ማንነት በማጣራትና የባንክ መረጃዎችን በማረጋገጥ ኃላፊነት የተሰጣቸው ተወካዮች።",
    requestAssignment: "አባልነት ይጠይቁ",
    online: "በመስመር ላይ",
    actionRequired: "እርምጃ ያስፈልጋል",
    completed: "ተጠናቋል",
    ready: "ዝግጁ",
    linkBankNow: "የባንክ ሂሳብ አሁን ያገናኙ",
    affirmSigNow: "የቃል ኪዳን ፊርማ ያጽኑ",
    viewCertNow: "ይፋዊ ምስክር ወረቀት ይመልከቱ",
    awaitingSig: "የደረጃ 3 ፊርማ በመጠባበቅ ላይ",
    completeToUnlock: "ለመክፈት የቀደመውን ደረጃ ያጠናቁ",
    openDirectChat: "የተመሰጠረ መልዕክት ይክፈቱ",
    endToEndEncrypted: "የተመሰጠረ የምክር ቤት መስመር",
    officialSovereignCert: "ይፋዊ ሉዓላዊ የምስክር ወረቀት",
    grandCouncilHorn: "የአፍሪካ ቀንድ ታላቁ የበላይ ምክር ቤት",
    certNoticeP1: "በሁሉም ሎጆች እና ጉባኤዎች ዘንድ የታወቀ ይሁን",
    certNoticeP2: "ይህ ሰነድ በይፋ የሚያረጋግጠው",
    certBody: "የምዝገባ፣ የፋይናንስ ትስስር እና የምስጢር ጥበቃ መስፈርቶችን በሙሉ አሟልተው የኢትዮጵያ ኢሉሚናቲ ኤጀንሲ የተከበሩ አባል ሆነው ተመዝግበዋል።",
    permanentHash: "ቋሚ መለያ ኮድ",
    jurisdiction: "የስራ ክልል",
    guardianAgent: "የተመደበ ሎጅ",
    commissionDate: "የጸደቀበት ቀን",
    agentSig: "የዲሬክቶሬቱ ፊርማ",
    memberAffirmation: "የአባል ቃል ኪዳን ማረጋገጫ",
    officialSealText: "ይፋዊ EIA ማኅተም",
    printDownload: "ምስክር ወረቀቱን ያትሙ / ያስቀምጡ",
    optionA: "አማራጭ ሀ፡ የተዘጋጀ የካሊግራፊ ፊርማ ይምረጡ",
    optionB: "አማራጭ ለ፡ የእጅ ጽሑፍ ዲጂታል ፊርማ ይሳሉ",
    clearCanvas: "ፊርማ አጥፋ",
    signGuide: "በዚህ ሳጥን ውስጥ በጣትዎ ወይም በማውስ ይፈርሙ",
    solemnOath: "የምስጢር ቃል ኪዳን፡ ለኢትዮጵያ ኢሉሚናቲ ኤጀንሲ መርሆዎች ታማኝ ለመሆን እና የተሰጡኝን ሀብቶችና እውቀቶች በኃላፊነት ለመጠበቅ ቃል እገባለሁ።",
    affirmBtn: "ፊርማን አጽድቅ (ደረጃ 3ን አጠናቅቅ)",
    covenantSealedTitle: "ቃል ኪዳኑ በይፋ ታትሟል",
    covenantSealedDesc: "ዲጂታል ፊርማዎ እና የታማኝነት መሃላዎ በካውንስሉ ማህደር ውስጥ ተመዝግቧል። ደረጃ 3 ተጠናቋል!",
    returnPortal: "ወደ አባላት ፖርታል ተመለስ",
    chapterPrefix: "ምዕራፍ",
    folio: "ገጽ",
    of: "ከ",
    previousFolio: "ቀዳሚ ገጽ",
    nextFolio: "ቀጣይ ገጽ",
    unsealed: "ተከፍቷል",
    guardianSealUnbroken: "ማኅተሙ አልተከፈተም",
    vaultLockedPrompt: "ይህ ምዕራፍ በምክር ቤቱ ትዕዛዝ የታተመ ነው። ለመክፈት የተሟላ ደረጃ ያስፈልጋል።",
    authWithCode: "በቋሚ ኮድ ይግቡ",
    archivalRecord: "ይፋዊ የማህደር መዝገብ",
    viewRecord: "መዝገቡን ይመልከቱ",
    location: "ቦታ",
    recorded: "የተመዘገበበት",
    closeRecord: "መዝገቡን ዝጋ",
    filterAll: "ሁሉም",
    filterAssemblies: "ጉባኤዎች",
    filterPhilanthropy: "የበጎ አድራጎት",
    filterCeremonies: "ስነ-ስርዓቶች",
    filterArchives: "ማህደሮች",
    residencyJurisdiction: "የመኖሪያ ክልል",
    nameHelp: "የራስ እና የአባት ስም ለማረጋገጫ አስፈላጊ ነው",
    agreementText: "በማስገባትዎ የኤጀንሲውን ጥብቅ የምስጢር ደንቦች ተስማምተዋል።",
    registeredUnder: "የተመዘገበው በ",
    permanentAuth: "ቋሚ ማረጋገጫ",
    instantDemo: "የሙከራ መግቢያ (EIA-DEMO-01)",
    aiTitle: "የኤጀንሲው መመሪያ ረዳት",
    aiSubtitle: "ይፋዊ የእውቀት ማዕከል",
    aiAsk: "ስለ ምዝገባ፣ ባንኮች ወይም ደረጃዎች ይጠይቁ...",
    aiAskBtn: "ጠይቅ",
    analyzingArchives: "ማህደሩን በመመርመር ላይ...",
    adminTitle: "የበላይ ምክር ቤት አስተዳዳሪ ኮንሶል",
    adminSubtitle: "የአባላት ማረጋገጫ፣ የባንክ ማህደር ፍተሻ እና ደረጃ አስተዳደር",
    backToPublic: "ወደ ዋናው ፖርታል ተመለስ",
    registeredCandidates: "የተመዘገቡ አመልካቾች",
    pendingClearance: "ፍቃድ የሚጠባበቁ ባንኮች",
    consecratedInitiates: "የተመረቁ ደረጃ 4 አባላት",
    activeGuardians: "ንቁ ክልላዊ ተወካዮች",
    searchPlaceholder: "በስም፣ በኮድ ወይም በስልክ ይፈልጉ...",
    colCode: "ቋሚ ኮድ",
    colName: "የአመልካች ስም",
    colContact: "ስልክ / ክልል",
    colAgent: "ሎጅ / ማዕከል",
    colStage: "የአባልነት ደረጃ",
    colBank: "የባንክ ሁኔታ",
    colActions: "እርምጃዎች",
    inspectDossier: "ማህደር መርምር",
    advanceStage: "ወደ ቀጣይ ደረጃ አሳድግ",
    approveBank: "ባንክ አጽድቅ",
    revokeBank: "ማረጋገጫ ሰርዝ",
    closeDossier: "ማህደር ዝጋ",
    portalPortfolios: "የፖርታል ክፍሎች",
    authentication: "መግቢያ",
    adminConsole: "የአስተዳዳሪ ኮንሶል",
    allRightsReserved: "መብቱ በህግ የተጠበቀ ነው።",
    directorateLog: "የዲሬክቶሬት መዝገብ",
  },
  om: {
    agencyTitle: "Ethiopia Illuminati Agency",
    agencySubtitle: "Pootaala nageenyaa ol'aanaa fi marii eeyyama qabuuf qophaa'e.",
    selectLanguage: "Afaan Filadhu",
    selectLanguageSubtitle: "Maaloo afaan filattan filadhaa",
    continue: "Itti Fufi",
    register: "Galmee Eeyyama Agency",
    fullName: "Maqaa Guutuu",
    fullNamePlaceholder: "Maqaa fi Maqaa Abbaa",
    phoneNumber: "Lakkoofsa Bilbilaa",
    phonePlaceholder: "fkn. 123456...",
    requestAccess: "Eeyyama Seensaa Gaafadhaa",
    fillAllFields: "Maaloo odeeffannoo hunda guutaa.",
    invalidFullName: "Maaloo maqaa guutuu seera qabeessa galchaa.",
    invalidPhone: "Maaloo lakkoofsa bilbilaa sirrii galchaa.",
    permanentCode: "Koodii Dhaabbataa",
    permanentCodePlaceholder: "fkn. EIA-8421-9X",
    memberLogin: "Seensa Miseensaa",
    memberLoginSubtitle: "Koodii keessan galchuun seenaa",
    login: "Seeni",
    logout: "Bahi",
    newMember: "Miseensa haaraadhaa?",
    registerHere: "Asitti galmaa'aa",
    alreadyHaveCode: "Koodii qabduu?",
    loginHere: "Asitti seenaa",
    invalidCode: "Koodiin kun hin jiru.",
    enterCode: "Koodii galchaa",
    selectAgent: "Reejistiraara Majiliisaa",
    verifiedMember: "Miseensa Mirkanaa'e",
    membershipProgress: "Sadarkaalee Miseensummaa",
    myMessages: "Ergaawwan Majiliisaa",
    announcements: "Beeksisa Idilee",
    gallery: "Kuusaa Suuraalee",
    fundRecipients: "Fandii Eeyyamame",
    ourAgents: "Bakka Bu'oota Naannoo",
    bankSection: "Odeeffannoo Baankii",
    selectBank: "Baankii filadhaa",
    chooseBankTitle: "Baankii Keessan Filadhaa",
    accountName: "Maqaa Abbaa Herregaa",
    accountNumber: "Lakkoofsa Herregaa",
    personalSection: "Odeeffannoo Dhuunfaa",
    work: "Hojii",
    age: "Umurii",
    sex: "Saala",
    male: "Dhiira",
    female: "Dubara",
    addressSection: "Teessoo Naannoo",
    region: "Naannoo",
    zone: "Zoonii / Kifla Magaalaa",
    selectRegion: "Naannoo filadhaa",
    selectZone: "Zoonii filadhaa",
    congrats: "Baga Gammaddan",
    approved: "Galmeen keessan mirkanaa'eera.",
    yourCode: "Koodii Keessan",
    copyCode: "Koodii Waraabi",
    copied: "Waraabameera",
    saveWarning: "Koodii kana bakka gaariitti olkaa'aa.",
    savedBtn: "Koodii Olkaa'eera",
    vaultTitle: "Kuusaa Beekumsaa",
    vaultSubtitle: "Seera fi ogummaa durii",
    signatureOptions: "Mallattoo fi Kakuu",
    signatureSubtitle: "Mallattoo dijitaalaatiin kakuu galaa",
    certOfMembership: "Waraqaa Ragaa Miseensummaa",
    certLocked: "Waraqaa Ragaa Cufame",
    certLockedDesc: "Waraqaa ragaa argachuuf sadarkaalee 4 xumuraa",
    certDownload: "Waraqaa Ragaa Buufadhaa",
    overview: "Ilaalcha Waliigalaa",
    principles: "Seera",
    stages: "Sadarkaalee",
    vault: "Kuusaa",
    agents: "Bakka Bu'oota",
    heroHeadline: "Ifa Ogummaa fi Badhaadhina Dhaabbataa",
    heroSubheadline: "Sirna nageenya ol'aanaa fi marii eeyyama qabu.",
    joinAgencyBtn: "Eeyyama Seensaa Gaafadhaa",
    memberPortalBtn: "Pootaala Miseensaa",
    stage1Title: "Sadarkaa 1: Galmee fi Qulqullina",
    stage1Desc: "Odeeffannoo jalqabaa fi mirkaneessa",
    stage2Title: "Sadarkaa 2: Herrega Baankii",
    stage2Desc: "Baankii deeggarsa maallaqaaf galmeessuu",
    stage3Title: "Sadarkaa 3: Kakuu fi Mallattoo",
    stage3Desc: "Amanammummaa mallattoon mirkaneessuu",
    stage4Title: "Sadarkaa 4: Chaappaa Idilee",
    stage4Desc: "Waraqaa ragaa fudhachuu",
    contactAgent: "Bakka bu'aa qunnamaa",
    liveChat: "Ergaa Iccitii",
    typeMessage: "Ergaa keessan barreessaa...",
    send: "Ergi",
    saveInformation: "Odeeffannoo Olkaa'i",
    savedSuccessfully: "Milkaa'inaan olkaa'ameera",
    permanentAccess: "Tajaajila Dhaabbataa",
    uniqueHash: "Koodii Addaa",
    supportedBanks: "Baankilee Deegaraman",
    banksListText: "CBE, Telebirr, Awash, Dashen",
    languageReach: "Afaanota",
    languageList: "English • አማርኛ • Afaan Oromoo",
    securityLayer: "Nageenya Eegame",
    adminVerifiedPass: "Sirna Mirkanaa'aa",
    exploreVault: "Kuusaa Beekumsaa Ilaalaa",
    officialSovereignLodge: "Majiliisa Idilee",
    addisAndGlobal: "Finfinnee fi Addunyaa Mara",
    pillarsTitle: "Utubaalee Gurguddoo Afur",
    pillarsSubtitle: "Dhaabbatni keenya ogummaa fi guddina irratti hundaa'e.",
    pillar1Badge: "01. KUUFAA DURII",
    pillar1Title: "Kuusaa Beekumsaa",
    pillar1Desc: "Beekumsi madda humnaati.",
    pillar1Meta: "Boqonnaalee 4",
    readVaultBtn: "Dubbisi",
    pillar2Badge: "02. KAAPPITAALA",
    pillar2Title: "Walitti Hidhamiinsa Diinagdee",
    pillar2Desc: "Baankilee gurguddoo waliin hojjechuu.",
    pillar2Meta: "Birrii Miiliyoona 150",
    pillar3Badge: "03. ICCITII EEGSIISUU",
    pillar3Title: "Kakuu Qulqulluu",
    pillar3Desc: "Amanamummaa mallattoon mirkaneessuu.",
    pillar3Meta: "Mallattoo Sadarkaa 3",
    pillar4Badge: "04. DVIIBBAA ADDUNYAA",
    pillar4Title: "Wirtuulee Naannoo",
    pillar4Desc: "Naannolee hundatti misooma deeggaruu.",
    pillar4Meta: "Gumiilee 11",
    directoryGuardiansBtn: "Bakka Bu'oota Ilaali",
    admittedInitiates: "Miseensota Galmaa'an",
    admittedSub: "Itoophiyaa fi Biyya Alaa",
    endowmentCapital: "Kaappitaala Fandii",
    endowmentSub: "Daldala fi Qonnaaf kan oole",
    activeAssemblies: "Gumiilee Hojii Irra Jiran",
    activeAssembliesSub: "Finfinnee, Oromiyaa, Amaara, Tigraay",
    guardianAgentsCount: "Wirtuulee Naannoo",
    guardianAgentsSub: "Wirtuulee eeyyamaman",
    proofStewardship: "Ragaa Hojii",
    officialComm: "Qunnamtii Idilee",
    accreditedGuardians: "Bakka Bu'oota Naannoo",
    guardiansSubtitle: "Odeeffannoo miseensotaa mirkaneessuuf kan qophaa'an.",
    requestAssignment: "Seensa Gaafadhaa",
    online: "HOJII IRRA",
    actionRequired: "TARKANFII BARBAADA",
    completed: "XUMURAMEERA",
    ready: "QOPHAA'EERA",
    linkBankNow: "Baankii Amma Galmeessi",
    affirmSigNow: "Mallattoo Mirkaneessi",
    viewCertNow: "Waraqaa Ragaa Ilaali",
    awaitingSig: "Mallattoo Eegaa Jira",
    completeToUnlock: "Sadarkaa duraa xumuraa",
    openDirectChat: "Marii Iccitii Bani",
    endToEndEncrypted: "Sarara Eegame",
    officialSovereignCert: "Waraqaa Ragaa Idilee",
    grandCouncilHorn: "Mana Maree Olaanaa Gaafa Afrikaa",
    certNoticeP1: "Miseensota hunda biratti kan beekamu",
    certNoticeP2: "Waraqaan kun kan mirkaneessu",
    certBody: "ulaagaalee hunda guuttanii miseensa dhaabbata Ethiopia Illuminati Agency ta'uun keessan mirkanaa'eera.",
    permanentHash: "Koodii Dhaabbataa",
    jurisdiction: "Naannoo Hojii",
    guardianAgent: "Wirtuu",
    commissionDate: "Guyyaa Eeyyamaa",
    agentSig: "Mallattoo Daayirektaraa",
    memberAffirmation: "Mirkaneessa Miseensaa",
    officialSealText: "CHAAPPAA IDILEE EIA",
    printDownload: "Maxxansi / Buufadhu",
    optionA: "Filannoo A: Mallattoo Qophaa'e",
    optionB: "Filannoo B: Harkaan Barreessi",
    clearCanvas: "Haqi",
    signGuide: "Sanduqa kana keessatti mallatteessaa",
    solemnOath: "Kakuu Iccitii: Seera fi qajeelfama dhaabbatichaa eeguuf kakuu nan gala.",
    affirmBtn: "Mallattoo Mirkaneessi (Sadarkaa 3)",
    covenantSealedTitle: "Kakuun Ragga'eera",
    covenantSealedDesc: "Mallattoon keessan galmeeffameera. Sadarkaan 3 xumurame!",
    returnPortal: "Gara Pootaalaatti Deebi'i",
    chapterPrefix: "Boqonnaa",
    folio: "Fuula",
    of: "irraa",
    previousFolio: "Fuula Duraa",
    nextFolio: "Fuula Itti Aanu",
    unsealed: "BANAMEERA",
    guardianSealUnbroken: "Chaappaan Hin Banamin",
    vaultLockedPrompt: "Boqonnaan kun eeyyama sadarkaa barbaada.",
    authWithCode: "Koodiidhaan Seeni",
    archivalRecord: "Galmee Kuusaa",
    viewRecord: "Galmee Ilaali",
    location: "Bakka",
    recorded: "Yeroo",
    closeRecord: "Cufi",
    filterAll: "Hunda",
    filterAssemblies: "Gumiilee",
    filterPhilanthropy: "Deeggarsa",
    filterCeremonies: "Sirnoota",
    filterArchives: "Kuusaa",
    residencyJurisdiction: "Naannoo Teessoo",
    nameHelp: "Maqaa guutuu galchaa",
    agreementText: "Galmee dhiyeeffachuun seerota dhaabbatichaaf walii-galuu keessan agarsiisa.",
    registeredUnder: "Kan galmeeffame",
    permanentAuth: "Mirkaneessa Dhaabbataa",
    instantDemo: "Seensa Yaalii (EIA-DEMO-01)",
    aiTitle: "Gargaaraa Qajeelfamaa",
    aiSubtitle: "Wiirtuu Beekumsaa",
    aiAsk: "Waa'ee galmee ykn baankii gaafadhaa...",
    aiAskBtn: "Gaafadhu",
    analyzingArchives: "Kuusaa sakatta'aa jira...",
    adminTitle: "Konsolii Daayirektaraa",
    adminSubtitle: "Mirkaneessa Galmee fi Herrega Baankii",
    backToPublic: "Gara Pootaalaatti Deebi'i",
    registeredCandidates: "Kandidoota Galmaa'an",
    pendingClearance: "Herrega Eegamaa Jiru",
    consecratedInitiates: "Miseensota Sadarkaa 4",
    activeGuardians: "Bakka Bu'oota Naannoo",
    searchPlaceholder: "Barbaadi...",
    colCode: "Koodii",
    colName: "Maqaa",
    colContact: "Bilbila",
    colAgent: "Naannoo",
    colStage: "Sadarkaa",
    colBank: "Baankii",
    colActions: "Gocha",
    inspectDossier: "Ilaali",
    advanceStage: "Sadarkaa Dabali",
    approveBank: "Baankii Mirkaneessi",
    revokeBank: "Haqi",
    closeDossier: "Cufi",
    portalPortfolios: "Kutaa Pootaalaa",
    authentication: "Seensa Miseensaa",
    adminConsole: "Konsolii Admin",
    allRightsReserved: "Mirgi hundi seeraan eegamaadha.",
    directorateLog: "Galmee Daayirektoreetii"
  }
};
