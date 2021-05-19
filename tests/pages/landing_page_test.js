Feature('Landing Page');

const date = new Date();
const month = date.getMonth() + 1;
const year = date.getFullYear();

Scenario('See Main Title of Page', ({ I }) => {
  I.amOnPage('/');

  I.see('Taklendar');
});

Scenario('See current Month and Year', ({ I }) => {
  I.amOnPage('/');

  I.see(`${month}/${year}`);
});
