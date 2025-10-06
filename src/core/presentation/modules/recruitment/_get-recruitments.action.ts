'use server';

import { authActionClient } from '@/core/presentation/config/libs/next-safe-action.config';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const GetRecruitmentsSchema = z.object({
  status: z.enum(['PENDING', 'REVIEWED', 'ACCEPTED', 'REJECTED', 'ON_HOLD']).optional(),
  limit: z.number().min(1).max(100).default(10),
  offset: z.number().min(0).default(0),
});

export const getRecruitmentsAction = authActionClient
  .inputSchema(GetRecruitmentsSchema)
  .action(async ({ parsedInput }) => {
    try {
      const { status, limit, offset } = parsedInput;

      const where = status ? { status } : {};

      const [recruitments, total] = await Promise.all([
        prisma.recruitment.findMany({
          where,
          orderBy: { createdAt: 'desc' },
          take: limit,
          skip: offset,
        }),
        prisma.recruitment.count({ where }),
      ]);

      return {
        success: true,
        data: {
          recruitments,
          total,
          hasMore: offset + limit < total,
        },
      };
    } catch (error) {
      console.error('Erreur lors de la récupération des candidatures:', error);
      return {
        success: false,
        error: 'Erreur lors de la récupération des candidatures',
      };
    }
  });
