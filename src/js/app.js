// TODO: write your code here
import sum from './basic';
console.log('worked');
console.log(sum([1, 2]));

export default function health(hero) {
    if (hero.health > 50) return 'healthy';
    if (hero.health > 15) return 'wounded';
    return 'critical';
}