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
  { text: familyStatus.active, value: 'В активном поиске' },
  { text: familyStatus.passive, value: 'Не ищу отношения' },
  { text: familyStatus.with, value: 'В отношениях' },
  { text: familyStatus.difficult, value: 'Все сложно' },
  { text: familyStatus.loveComin, value: 'Влюблен(а)' },
]
