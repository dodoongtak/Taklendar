Feature('Landing Page');

const date = new Date();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wedneday', 'Thursday', 'Friday', 'Saturday'];

Scenario('See Main Title of Page', ({ I }) => {
  I.amOnPage('/');

  I.see('Taklendar');
});

Scenario('See current Month and Year', ({ I }) => {
  I.amOnPage('/');

  I.see(`${month}/${year}`);
});

Scenario('See weekdays', ({ I }) => {
  I.amOnPage('/');

  weekdays.forEach((day) => {
    I.see(day);
  });
});
