export class Logger{

    static StepNumber(number){

        const text = `Step # ${number}`
        cy.log(text)
        cy.allure().step(text)

    }

    static Step(description){

        const text = `Step - ${description}`
        cy.log(text)
        cy.allure().step(text)

    }

    static Verification(description){

        const text = `Verification - ${description}`
        cy.log(text)
        cy.allure().step(text)

    }

    static Substeps(description){

        const text = `Substep - ${description}`
        cy.log(text)
        cy.allure().step(text)

    }

    static Subverification(description){

        const text = `Subverification - ${description}`
        cy.log(text)
        cy.allure().step(text)

    }

    static postCondition(description){

        const text = `Postcondition - ${description}`
        cy.log(text)
        cy.allure().step(text)

    }

}
