Feature('Landing Page');

Scenario('See Main Title of Page', ({ I }) => {
  I.amOnPage('/');

  I.see('Taklendar');
});
