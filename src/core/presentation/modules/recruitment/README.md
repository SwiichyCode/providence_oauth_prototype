# Gestion d'état du formulaire de recrutement

Ce module gère l'état du formulaire de recrutement avec une gestion complète des cas de succès et d'erreur.

## Composants

### `useRecruitmentForm`
Hook principal qui gère l'état du formulaire avec les fonctionnalités suivantes :

- **États gérés** : `idle`, `loading`, `success`, `error`
- **Gestion des erreurs** : Erreurs générales et erreurs de validation spécifiques aux champs
- **Réinitialisation** : Possibilité de réinitialiser l'état et le formulaire

### `RecruitmentFormStatus`
Composant d'affichage des messages d'état :

- **État de chargement** : Affiche un spinner et un message
- **État de succès** : Affiche un message de succès avec bouton "Nouvelle candidature"
- **État d'erreur** : Affiche un message d'erreur avec bouton "Réessayer"
- **Erreurs de validation** : Affiche les erreurs spécifiques aux champs

### `RecruitmentFormFieldErrors`
Composant spécialisé pour l'affichage des erreurs de validation des champs.

## Utilisation

```tsx
import { useRecruitmentForm } from './use-recruitment-form';
import { RecruitmentFormStatus } from './recruitment-form-status';

function MyForm() {
  const { form, onSubmit, isPending, formState, resetFormState } = useRecruitmentForm();

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <RecruitmentFormStatus 
        formState={formState} 
        onReset={resetFormState}
      />
      
      {/* Votre contenu de formulaire */}
      
      <button 
        type="submit" 
        disabled={isPending || formState.status === 'success'}
      >
        {isPending ? 'Envoi en cours...' : 'Envoyer'}
      </button>
    </form>
  );
}
```

## États possibles

### `idle`
État initial, aucun message affiché.

### `loading`
- Affiche un spinner
- Message : "Envoi de votre candidature en cours..."
- Bouton de soumission désactivé

### `success`
- Message de succès vert
- Bouton "Nouvelle candidature" pour réinitialiser
- Formulaire réinitialisé automatiquement

### `error`
- Message d'erreur rouge
- Bouton "Réessayer" pour réinitialiser l'état
- Affichage des erreurs de validation si présentes

## Gestion des erreurs

### Erreurs générales
Affichées dans l'alerte principale avec un message générique.

### Erreurs de validation
Affichées dans un composant séparé avec la liste des champs en erreur et leurs messages spécifiques.

## Personnalisation

Les messages peuvent être personnalisés en modifiant le hook `useRecruitmentForm` :

```tsx
// Messages personnalisés
setFormState({ 
  status: 'success', 
  message: 'Votre candidature a été envoyée avec succès !' 
});
```

## Tests

Utilisez le composant `RecruitmentFormDemo` pour tester les différents états du formulaire.
