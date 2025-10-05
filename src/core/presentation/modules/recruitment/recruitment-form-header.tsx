import { CardDescription, CardHeader, CardTitle } from '@/core/presentation/components/common/ui/card';

export default function RecruitmentFormHeader() {
  return (
    <CardHeader className="border-b">
      <CardTitle className="text-2xl">Formulaire de Recrutement — Guilde [Providence]</CardTitle>
      <CardDescription>PvE / M+ • Semi Try-Hard • Bonne ambiance avant tout</CardDescription>
    </CardHeader>
  );
}
