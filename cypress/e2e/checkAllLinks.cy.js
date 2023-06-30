describe("Website Link Test", () => {
  beforeEach(() => {
    cy.visit("https://my-portfolio-nextjs-fawn.vercel.app/");
  });

  const links = ["About", "Contact", "Projects", "Posts"];

  links.forEach((link) => {
    it(`should open ${link} page and check status code`, () => {
      cy.contains(link).then(($link) => {
        const url = $link.prop("href");

        cy.visit(url, { failOnStatusCode: false }).then((response) => {
          if (response.status === 200) {
            cy.log(`"${link}" page opens successfully with status code 200`);
          } else {
            cy.log(
              `Error opening "${link}" page. Status code: ${response.status}`
            );
          }
        });
      });
    });
  });
});
