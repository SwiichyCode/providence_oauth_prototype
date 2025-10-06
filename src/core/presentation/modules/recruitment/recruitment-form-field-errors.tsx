import { Alert, AlertDescription } from '@/core/presentation/components/common/ui/alert';
import React from 'react';

interface FieldErrors {
  [key: string]: string[];
}

interface RecruitmentFormFieldErrorsProps {
  fieldErrors?: FieldErrors;
}

export function RecruitmentFormFieldErrors({ fieldErrors }: RecruitmentFormFieldErrorsProps) {
  if (!fieldErrors || Object.keys(fieldErrors).length === 0) {
    return null;
  }

  return (
    <Alert variant="destructive">
      <AlertDescription>
        <div className="space-y-1">
          <p className="font-medium">Veuillez corriger les erreurs suivantes :</p>
          <ul className="list-inside list-disc space-y-1">
            {Object.entries(fieldErrors).map(([field, errors]) => (
              <li key={field}>
                <span className="font-medium">{field}:</span> {errors.join(', ')}
              </li>
            ))}
          </ul>
        </div>
      </AlertDescription>
    </Alert>
  );
}
