import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Début du seeding...');

  // Vous pouvez ajouter ici des données de test si nécessaire
  // Par exemple, créer des candidatures d'exemple

  console.log('✅ Seeding terminé avec succès!');
}

main()
  .catch(e => {
    console.error('❌ Erreur lors du seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
