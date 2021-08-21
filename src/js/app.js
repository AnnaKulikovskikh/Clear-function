// TODO: write your code here
export default function health(hero) {
  if (hero.health > 50) return 'healthy';
  if (hero.health > 15) return 'wounded';
  return 'critical';
}
