# Configuration Prisma

Ce dossier contient la configuration Prisma pour l'application Providence.

## Structure

- `schema.prisma` - Schéma de la base de données
- `seed.ts` - Script de seeding pour les données initiales

## Commandes utiles

### Génération du client Prisma
```bash
pnpm db:generate
```

### Synchronisation avec la base de données (développement)
```bash
pnpm db:push
```

### Migration de la base de données
```bash
pnpm db:migrate
```

### Interface Prisma Studio
```bash
pnpm db:studio
```

### Seeding des données
```bash
pnpm db:seed
```

## Configuration de la base de données

1. Créez un fichier `.env` à la racine du projet
2. Ajoutez votre URL de base de données :
```
DATABASE_URL="postgresql://username:password@localhost:5432/providence_db?schema=public"
```

## Modèles

### Recruitment
Modèle principal pour les candidatures de recrutement avec tous les champs du formulaire.

**Statuts disponibles :**
- `PENDING` - En attente (par défaut)
- `REVIEWED` - En cours d'examen
- `ACCEPTED` - Accepté
- `REJECTED` - Rejeté
- `ON_HOLD` - En attente

## Utilisation dans le code

```typescript
import { prisma } from '@/lib/prisma'

// Créer une candidature
const recruitment = await prisma.recruitment.create({
  data: {
    mainName: "Nom du joueur",
    // ... autres champs
  }
})

// Récupérer toutes les candidatures
const recruitments = await prisma.recruitment.findMany()

// Récupérer une candidature par ID
const recruitment = await prisma.recruitment.findUnique({
  where: { id: "candidature_id" }
})
```
