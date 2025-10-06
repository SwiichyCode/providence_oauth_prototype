import { Alert, AlertDescription } from '@/core/presentation/components/common/ui/alert';
import { RecruitmentFormFieldErrors } from '@/core/presentation/modules/recruitment/recruitment-form-field-errors';
import { FormState } from '@/core/presentation/modules/recruitment/use-recruitment-form';

interface RecruitmentFormStatusProps {
  formState: FormState;
}

export default function RecruitmentFormStatus({ formState }: RecruitmentFormStatusProps) {
  if (formState.status === 'idle') {
    return null;
  }

  if (formState.status === 'success') {
    return (
      <Alert variant="success">
        <AlertDescription>
          <div className="flex items-center justify-between">
            <span>{formState.message}</span>
          </div>
        </AlertDescription>
      </Alert>
    );
  }

  if (formState.status === 'error') {
    return (
      <div className="space-y-2">
        <Alert variant="destructive">
          <AlertDescription>
            <div className="flex items-center justify-between">
              <span>{formState.message}</span>
            </div>
          </AlertDescription>
        </Alert>

        {formState.fieldErrors && <RecruitmentFormFieldErrors fieldErrors={formState.fieldErrors} />}
      </div>
    );
  }

  return null;
}
