export type Language = 'en' | 'am' | 'om';

export interface Agent {
  id: string;
  name: string;
  role?: 'Agent' | 'Manager' | string;
  phone: string;
  title?: string;
  region?: string;
  code?: string;
  status?: string;
  avatarUrl?: string;
  initials?: string;
  avatarInitials?: string;
  telegramUsername?: string;
  imoPhone?: string;
}

export interface BankItem {
  id: string;
  nameEn?: string;
  nameAm: string;
  nameOm: string;
  code: string;
  logoBg?: string;
  logoText?: string;
  logoUrl?: string;
}

export interface ZoneItem {
  id: string;
  nameEn: string;
  nameAm: string;
  nameOm: string;
}

export interface RegionItem {
  id: string;
  nameEn: string;
  nameAm: string;
  nameOm: string;
  type?: 'city' | 'region' | 'diaspora';
  zones: ZoneItem[];
}

export interface ApplicationSubmission {
  id: string;
  fullName: string;
  phone: string;
  agent?: Agent;
  bank: BankItem;
  accountNumber: string;
  region: RegionItem;
  zone?: ZoneItem;
  submissionDate: string;
  status: 'Pending Approval' | 'Approved';
}

// Legacy compatibility types
export interface BankInfo {
  bankName: string;
  accountName: string;
  accountNumber: string;
  branch?: string;
  isVerified: boolean;
}

export interface PersonalInfo {
  occupation: string;
  age: string;
  gender: 'male' | 'female' | '';
  region: string;
  zone: string;
  woreda?: string;
}

export interface Member {
  id: string;
  fullName: string;
  phone: string;
  countryCode: string;
  permanentCode: string;
  agentId?: string;
  agentName?: string;
  registrationDate: string;
  status: 'pending' | 'approved' | 'active';
  stagesCompleted: number;
  bankInfo: BankInfo;
  personalInfo: PersonalInfo;
  signature?: {
    type: 'drawn' | 'preset';
    dataUrl: string;
    dateSigned: string;
  };
}

export interface VaultChapter {
  id: string;
  number: number;
  requiredStage: number;
  title: Record<string, string>;
  subtitle: Record<string, string>;
  excerpt: Record<string, string>;
  pages: Record<string, string[]>;
}

export interface Announcement {
  id: string;
  title: Record<string, string>;
  date: string;
  priority: 'high' | 'normal';
  excerpt: Record<string, string>;
  content: Record<string, string>;
}

export interface FundRecipient {
  id: string;
  recipientName: string;
  region: string;
  grantAmount: string;
  grantETB: string;
  purpose: string;
  disbursementDate: string;
  referenceCode: string;
}
