import { postRecruitmentAction } from '@/core/presentation/modules/recruitment/_post-recruitment.action';
import {
  RecruitmentFormValues,
  RecruitmentSchema,
  recruitmentDefaultValues,
} from '@/core/presentation/modules/recruitment/recruitment.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';

export type FormState = {
  status: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
  fieldErrors?: Record<string, string[]>;
};

export function useRecruitmentForm() {
  const [isPending, startTransition] = useTransition();
  const [formState, setFormState] = useState<FormState>({ status: 'idle' });

  const form = useForm<RecruitmentFormValues>({
    resolver: zodResolver(RecruitmentSchema),
    defaultValues: recruitmentDefaultValues,
  });

  const onSubmit = (data: RecruitmentFormValues) => {
    setFormState({ status: 'loading' });

    startTransition(async () => {
      try {
        const result = await postRecruitmentAction(data);

        if (result && 'data' in result) {
          setFormState({
            status: 'success',
            message: 'Votre candidature a été envoyée avec succès !',
          });
          form.reset();
        } else {
          const hasFieldErrors = result && 'fieldErrors' in result && result.fieldErrors;
          setFormState({
            status: 'error',
            message: hasFieldErrors
              ? 'Veuillez corriger les erreurs dans le formulaire'
              : "Une erreur est survenue lors de l'envoi de votre candidature",
            fieldErrors: hasFieldErrors ? (result.fieldErrors as Record<string, string[]>) : undefined,
          });
        }
      } catch (error) {
        console.error('Erreur lors de la soumission:', error);
        setFormState({
          status: 'error',
          message: 'Une erreur inattendue est survenue',
        });
      }
    });
  };

  const resetFormState = () => {
    setFormState({ status: 'idle' });
    form.reset();
  };

  return {
    form,
    onSubmit,
    isPending,
    formState,
    resetFormState,
  };
}
