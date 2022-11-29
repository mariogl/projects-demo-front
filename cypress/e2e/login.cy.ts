/// <reference types="Cypress" />

import { UserCredentials } from "../../src/types";
import { paths } from "../../src/paths/paths";

beforeEach(() => {
  cy.visit(paths.login);
});

describe("Given a login form", () => {
  describe("When the user enters an username 'luis'", () => {
    it("Then the input field should show 'luis'", () => {
      const username = "luis";

      cy.findByLabelText(/your username/i)
        .type(username)
        .should("have.value", username);
    });
  });

  describe("When the user enters wrong credentials", () => {
    const userData: UserCredentials = {
      username: "mariogl",
      password: "1234",
    };

    it("Then a modal should show and then hide", () => {
      cy.findByLabelText(/your username/i).type(userData.username);
      cy.findByLabelText(/your password/i).type(`${userData.password}{enter}`);
      cy.findByText(/we couldn't log you in/i).should("exist");
      cy.findByText(/we couldn't log you in/i).should("not.exist");
    });
  });

  describe("When the user enters his/her credentials", () => {
    const userData: UserCredentials = {
      username: "mariogl",
      password: "mariogl",
    };

    it("Then it should show a 'Projects list' heading", () => {
      cy.findByLabelText(/your username/i).type(userData.username);
      cy.findByLabelText(/your password/i).type(`${userData.password}{enter}`);
      cy.findByRole("heading", { name: /projects list/i }).should("exist");
    });
  });
});
