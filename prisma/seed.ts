import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.product.upsert({
    where: { id: 'p1' },
    update: {},
    create: {
      id: 'p1',
      name: 'Chaqueta de invierno',
      price: 60000,
      porcentPromo: 10,
      promo: true,
    },
  });

  console.log('Seed finished');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
