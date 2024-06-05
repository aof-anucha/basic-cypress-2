describe('template spec', () => {
  it.only('screenshot test', () => {
    cy.visit('https://example.cypress.io')
    cy.screenshot('screenshot-name')
  })
  it('scroll test', () => {
    cy.visit('https://example.cypress.io')
    cy.get(".home-list li").contains('Actions').click()
    // cy.visit('https://example.cypress.io')
    cy.get('#scroll-horizontal button').scrollIntoView()
    // cy.get('#scrollable-horizontal').scrollTo('bottom')
    cy.get('#scrollable-vertical').scrollTo(250, 1250)
  })

  it('HTTP response code 404', () => {
    cy.visit('https://practice-automation.com/broken-links/')
    cy.get(".entry-content a").contains('broken link')
    .then(($link) => {
      // ดึง URL จากแอตทริบิวต์ href ของลิงก์
      const url = $link.prop('href')
      cy.log(url)
      cy.request({
        url: url,
        failOnStatusCode: false // ปิดการตรวจสอบสถานะการตอบสนองอัตโนมัติ
      }).then((response) => {
        expect(response.status).to.eq(404) // ตรวจสอบให้แน่ใจว่าสถานะเป็น 200
      })
    // .then((response) => {
    //   // ตรวจสอบสถานะการตอบสนอง
    //   expect(response.status).to.eq(404)
    // })
    })
  })
})