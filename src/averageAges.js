'use strict';

/**
 * Implement calculateMenAverageAge function
 *
 * Function returns average age of men in array. If `century` is specified then
 * function calculates average age only for men who died in this century
 *
 * To calculate century:
 * Divide year of person's death by 100: Math.ceil(person.died / 100)
 *
 * @param {object[]} people
 * @param {number} century - optional
 *
 * @return {number}
 */
function calculateMenAverageAge(people, century) {
  // write code here
  // learn how to use array methods like .filter .map .some .every .find .reduce
  // avoid using loop and forEach
  // replace `if ()` statement with &&, || or ?:
  // without nesting

  const isMan = (human) => human.sex === 'm';

  const isCenturyMatch = (human) =>
    human.sex === 'm' && Math.ceil(human.died / 100) === century;

  const man = people.filter(century ? isCenturyMatch : isMan);

  const manAverageAge = man.reduce((sum, human) =>
    sum + (human.died - human.born), 0) / man.length;

  return manAverageAge;
}

/**
 * Implement calculateWomenAverageAge function
 *
 * Function returns average ave of women in array. If `withChildren` is
 * specified then function calculates average age only for women with children
 *
 * Hint: To check if a woman has children you should find the other who mention
 * her as mother.
 *
 * @param {object[]} people
 * @param {boolean} withChildren - optional
 *
 * @return {number}
 */
function calculateWomenAverageAge(people, withChildren) {
  // write code here

  const isWoman = (human) => human.sex === 'f';

  const isMother = (human) =>
    people.some(child => child.mother === human.name);

  const women = people.filter(withChildren ? isMother : isWoman);

  const womanAverageAge = women.reduce((sum, human) =>
    sum + (human.died - human.born), 0) / women.length;

  return womanAverageAge;
}

/**
 * Implement calculateAverageAgeDiff function.
 *
 * The function returns an average age difference between a mother and her
 * child in the array. (A mother's age at child birth)
 *
 * If `onlyWithSon` is specified then function calculates age difference only
 * for mothers who have son.
 *
 * @param {object[]} people
 * @param {boolean} onlyWithSon - optional
 *
 * @return {number}
 */
function calculateAverageAgeDiff(people, onlyWithSon) {
  // write code here

  const isSon = (human) =>
    people.find(mother => human.mother === mother.name)
    && human.sex === 'm';

  const isChild = (human) =>
    people.find(mother => human.mother === mother.name);

  const children = people.filter(onlyWithSon ? isSon : isChild);

  const averageAgeDiff = children.reduce((sum, child) =>
    sum + (child.born - people
      .find(mother => child.mother === mother.name)
      .born), 0) / children.length;

  return averageAgeDiff;
}

module.exports = {
  calculateMenAverageAge,
  calculateWomenAverageAge,
  calculateAverageAgeDiff,
};
