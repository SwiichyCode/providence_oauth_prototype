'use client';

import { Button } from '@/core/presentation/components/common/ui/button';
import { Card, CardContent, CardFooter } from '@/core/presentation/components/common/ui/card';
import { Form } from '@/core/presentation/components/common/ui/form';
import RecruitmentFormDescription from '@/core/presentation/modules/recruitment/recruitment-fom-description';
import RecruitmentFormContent from '@/core/presentation/modules/recruitment/recruitment-form-content';
import RecruitmentFormHeader from '@/core/presentation/modules/recruitment/recruitment-form-header';
import RecruitmentFormStatus from '@/core/presentation/modules/recruitment/recruitment-form-status';
import { useRecruitmentForm } from '@/core/presentation/modules/recruitment/use-recruitment-form';

export default function RecruitmentPage() {
  const { form, onSubmit, isPending, formState } = useRecruitmentForm();

  return (
    <div className="grid min-h-screen place-items-center p-6">
      <Card className="w-full max-w-2xl">
        <RecruitmentFormHeader />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="grid gap-6 py-6">
              <RecruitmentFormDescription />
              <RecruitmentFormContent form={form} />
            </CardContent>
            <CardFooter className="justify-end gap-3 border-t">
              <RecruitmentFormStatus formState={formState} />
              <Button variant="outline" type="button" onClick={() => console.log('preview', form.getValues())}>
                Prévisualiser
              </Button>
              <Button type="submit" disabled={isPending || formState.status === 'success'}>
                {isPending ? 'Envoi en cours...' : 'Envoyer la candidature'}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}
