import { Type } from './type';

describe('Type', () => {
  it('should create an instance', () => {
    expect(new Type()).toBeTruthy();
  })

  it ('Should give an empy string for lastname attribue', () => {
    const objet = new Type() // Instancie dans type la classe Type

    expect(objet.lastname).toEqual('')

    // maMaison = new MaisonAPartirDuPlan()
    // taMaison = new MaisonAPartirDuPlan()
    // taMaison.crepis ='bleu'
    // taMaison.adresse = 'la rue Machin'
    // LaMaisonDAnneClaire: Hutte = new MaisonAPartirDuPlan()
    // LaMaisonDAnneClaire = new Hute()
  })
  it ('Should give a Date instance for birhdate', () => {
    const objet = new Type()
    expect(objet.birthDate).toBeInstanceOf(Date)
})

it ('Should have some default values', () => {
    const type = new Type()
    expect(type.age).toEqual(0)
    expect(type.lastname).toEqual('')
    expect(type.isMale).toBeFalse()
})
});