import { z } from 'zod';

export const RecruitmentSchema = z.object({
  mainName: z.string().min(2, 'Nom trop court').max(64),
  realmFaction: z.string().min(2, 'Renseigne serveur et faction').max(64),
  btag: z
    .string()
    .min(3)
    .max(64)
    .regex(/.+#\d+/, 'Format attendu: Nom#1234'),
  classSpec: z.string().min(2).max(64),
  ilvl: z.string().min(1).max(32).regex(/\d+/, 'Indique un ilvl (ex: 484 ilvl)'),
  rerolls: z.string().max(1000).optional(),
  raidProgress: z.string().max(256).optional(),
  pastExp: z.string().max(512).optional(),
  highestKey: z.string().max(128).optional(),
  links: z.string().max(1000).optional(),
  oldGuilds: z.string().max(1500).optional(),
  goals: z.string().max(256).optional(),
  expectations: z.string().max(256).optional(),
  contribution: z.string().max(256).optional(),
  availability: z.string().max(256).optional(),
  regularity: z.string().max(256).optional(),
  hasDiscord: z.string().max(32).optional(),
  hasMic: z.string().max(64).optional(),
  languages: z.string().max(128).optional(),
  commsStyle: z.string().max(128).optional(),
  about: z.string().max(2000).optional(),
  finalWord: z.string().max(256).optional(),
  annexes: z.string().max(2000).optional(),
  charterAccepted: z.boolean(),
  rgpdConsent: z.boolean(),
});

export type RecruitmentFormValues = z.infer<typeof RecruitmentSchema>;

export const recruitmentDefaultValues: RecruitmentFormValues = {
  mainName: '',
  realmFaction: '',
  btag: '',
  classSpec: '',
  ilvl: '',
  rerolls: '',
  raidProgress: '',
  pastExp: '',
  highestKey: '',
  links: '',
  oldGuilds: '',
  goals: '',
  expectations: '',
  contribution: '',
  availability: '',
  regularity: '',
  hasDiscord: '',
  hasMic: '',
  languages: '',
  commsStyle: '',
  about: '',
  finalWord: '',
  annexes: '',
  charterAccepted: false,
  rgpdConsent: false,
};
