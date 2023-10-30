"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pinia_1 = require("pinia");
var test_utils_1 = require("src/utils/test/test.utils");
var Article_vue_1 = require("./Article.vue");
describe('# Article', function () {
    var router = (0, test_utils_1.createTestRouter)();
    beforeEach(function () {
        (0, pinia_1.setActivePinia)((0, pinia_1.createPinia)());
        cy.wrap(router.push({ name: 'article', params: { slug: 'foo' } }));
        cy.intercept('GET', '/api/articles/foo', { fixture: 'article.json' }).as('getArticle');
        cy.intercept('GET', '/api/articles/foo/comments', { fixture: 'article-comments.json' }).as('getComments');
    });
    it('should render correctly', function () {
        cy.mount(Article_vue_1.default, { router: router });
        cy.contains('Article is downloading');
        cy.contains('Comments are downloading');
        cy.wait('@getArticle');
        cy.contains('Article title');
        cy.contains('Before starting a new implementation');
    });
});
