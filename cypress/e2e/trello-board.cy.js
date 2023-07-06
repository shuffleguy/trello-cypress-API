describe('Requisitions on board', () => {

  it('POST create board', () => {
    const name = 'Board criado pelo Cypress'

    cy.api({
      method: 'POST',
      url: '/boards/',
      qs: {
        'name': name,
        'key': Cypress.env('APIKey'),
        'token': Cypress.env('APIToken')
      }
    }).should((res) => {
      expect(res.status).equal(200)
      expect(res.body).not.empty
      Cypress.env('id_board', res.body.id)
    })
  })

  it('GET this board', () => {
    cy.api({
      method: 'GET',
      url: `/boards/${Cypress.env('id_board')}`,
      qs: {
        'key': Cypress.env('APIKey'),
        'token': Cypress.env('APIToken')
      },
    }).should((res) => {
      expect(res.status).equal(200)
      expect(res.body).not.empty
      
    })
  })

  it('DELETE this board', () => {
    cy.api({
      method: 'DELETE',
      url: `/boards/${Cypress.env('id_board')}`,
      qs: {
        'key': Cypress.env('APIKey'),
        'token': Cypress.env('APIToken')
      },
    }).should((res) => {
      expect(res.status).equal(200)
    })
  })
})