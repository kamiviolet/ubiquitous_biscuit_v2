describe("Home page", () => {
  beforeEach(()=>{
    cy.visit("http://localhost:3000")
  })

  it("A user can login and be redirected back to main page with greeting and a button for posting article.", ()=>{
    cy.loginWithEmail({email:"kamiviolet@gmail.com", password: "123456"})
  })

  context("main section", ()=> {
    it("the h1 contains the correct text", ()=>{
      cy.get("[data-test='main-heading']").contains("Cookiess! Forum")
    })

    it("the main page contains a navbar", ()=>{
      cy.getByData("navbar")
    })
  
    it("the nav bar contains 3 topics", ()=>{
      cy.getByData("nav_item").eq(0).contains("coding")
      cy.getByData("nav_item").eq(1).contains("football")
      cy.getByData("nav_item").eq(2).contains("cooking")
    })

    it("should have correct pathname for each topic", ()=>{
      cy.getByData("nav_item").eq(0).as("navLink_coding")
      cy.getByData("nav_item").eq(1).as("navLink_football")
      cy.getByData("nav_item").eq(2).as("navLink_cooking")

      cy.get("@navLink_coding").click()
      cy.location().should((loc)=>{
        expect(loc.pathname).to.eq("/topics/coding")
      })
      cy.get("@navLink_football").click()
      cy.location().should((loc)=>{
        expect(loc.pathname).to.eq("/topics/football")
      })
      cy.get("@navLink_cooking").click()
      cy.location().should((loc)=>{
        expect(loc.pathname).to.eq("/topics/cooking")
      })
    })

    it("should display articles in the same category if category btn is clicked in navbar", ()=>{
      cy.getByData("nav_item").eq(1).contains("football").click()
      cy.getByData("article_list").children().should("include.text", "Football")
    })

    it("should have max 10 articles by default per page.", ()=>{
      cy.getByData("article_list").children().should("have.length", 10)
    })

    it("should read an individual article if click into it.", ()=>{
      cy.getByData("article_12").click()
      cy.location("pathname").should("eq", "/articles/12")
    })
  })
})