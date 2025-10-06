'use server';

import { authActionClient } from '@/core/presentation/config/libs/next-safe-action.config';
import { RecruitmentSchema } from '@/core/presentation/modules/recruitment/recruitment.schema';
import { prisma } from '@/lib/prisma';
import { returnValidationErrors } from 'next-safe-action';

export const postRecruitmentAction = authActionClient
  .inputSchema(RecruitmentSchema)
  .action(async ({ parsedInput, ctx }) => {
    try {
      const recruitment = await prisma.recruitment.create({
        data: {
          mainName: parsedInput.mainName,
          realmFaction: parsedInput.realmFaction,
          btag: parsedInput.btag,
          classSpec: parsedInput.classSpec,
          ilvl: parsedInput.ilvl,
          rerolls: parsedInput.rerolls,
          raidProgress: parsedInput.raidProgress,
          pastExp: parsedInput.pastExp,
          highestKey: parsedInput.highestKey,
          links: parsedInput.links,
          oldGuilds: parsedInput.oldGuilds,
          goals: parsedInput.goals,
          expectations: parsedInput.expectations,
          contribution: parsedInput.contribution,
          availability: parsedInput.availability,
          regularity: parsedInput.regularity,
          hasDiscord: parsedInput.hasDiscord,
          hasMic: parsedInput.hasMic,
          languages: parsedInput.languages,
          commsStyle: parsedInput.commsStyle,
          about: parsedInput.about,
          finalWord: parsedInput.finalWord,
          annexes: parsedInput.annexes,
          charterAccepted: parsedInput.charterAccepted,
          rgpdConsent: parsedInput.rgpdConsent,
          userId: ctx.userId,
        },
      });

      return { success: true, data: recruitment };
    } catch (error) {
      console.error('Erreur lors de la création de la candidature:', error);
      return returnValidationErrors(RecruitmentSchema, {
        _errors: ["Une erreur est survenue lors de l'enregistrement de votre candidature"],
      });
    }
  });
