describe("My First Test", () => {
  it('clicking "type" navigates to a new url', () => {
    cy.visit("https://my-portfolio-nextjs-fawn.vercel.app/");
    cy.contains("About").click();
    cy.url().should("include", "/about");
  });
});
