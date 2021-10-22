export enum StepsPage {
  stepOne = 0,
  stepTwo = 1,
}

export enum familyStatus {
  active = 'В активном поиске',
  passive = 'Не ищу отношения',
  with = 'В отношениях',
  difficult = 'Все сложно',
  loveComin = 'Влюблен(а)',
}

export const statuses = [
  { text: familyStatus.active, value: 'active' },
  { text: familyStatus.passive, value: 'passive' },
  { text: familyStatus.with, value: 'with' },
  { text: familyStatus.difficult, value: 'difficult' },
  { text: familyStatus.loveComin, value: 'loveComin' },
]
