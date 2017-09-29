//importamos la clase que queremos importar
import {Person} from './person';

describe('Test for person',()=>{
    let person;

    //Arrange
    beforeEach(()=>{
        person = new Person(
        'Nicolas',
        'Molina',
        23,
        40,
        1.65
    )
    })

    describe('test for data', ()=>{
        it('attributes',()=>{
            expect(person.name).toEqual('Nicolas');
            expect(person.lastname).toEqual('Molina');
            expect(person.age).toEqual(23);
            expect(person.width).toEqual(40);
            expect(person.height).toEqual(1.65);
        })
    })

    describe('Test for calcIMC',()=>{
        it('Deberia devolver string: down',()=>{
            person.width = 40
            expect(person.calcIMC()).toEqual('down')
        });
        
        it('Deberia devolver string: normal',()=>{
            person.width = 58
            expect(person.calcIMC()).toEqual('normal')
        });

        it('Deberia devolver string: overweight',()=>{
            person.width = 68
            expect(person.calcIMC()).toEqual('overweight')
        });  

        it('Deberia devolver string: overweight level 1',()=>{
            person.width = 75
            expect(person.calcIMC()).toEqual('overweight level 1')
        });

        it('Deberia devolver string: overweight level 2',()=>{
            person.width = 90
            expect(person.calcIMC()).toEqual('overweight level 2')
        });

        it('Deberia devolver string: overweight level 3',()=>{
            person.width = 120
            expect(person.calcIMC()).toEqual('overweight level 3')
        });

        it('Deberia devolver string: not found',()=>{
            person.width = -48
            expect(person.calcIMC()).toEqual('not found')
            person.width = -48
            person.height = -1.70
            expect(person.calcIMC()).toEqual('not found')

        })
        
        
    })
});

