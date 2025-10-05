import {
  RecruitmentFormValues,
  RecruitmentSchema,
  recruitmentDefaultValues,
} from '@/core/presentation/modules/recruitment/recruitment.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';

export function useRecruitmentForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<RecruitmentFormValues>({
    resolver: zodResolver(RecruitmentSchema),
    defaultValues: recruitmentDefaultValues,
  });

  const onSubmit = (data: RecruitmentFormValues) => {
    startTransition(async () => {
      console.log(data);

      // form.reset();
    });
  };

  return {
    form,
    onSubmit,
    isPending,
  };
}
