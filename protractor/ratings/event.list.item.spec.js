describe('Event List Details: ', function() {
  describe('When clicking on an event', function() {
    it('should navigate to the details page', function() {
      browser.get('http://localhost:3000/#!/EventRatings');

      var firstElement = element.all(by.binding('name')).first();

      var name;
      firstElement.getText().then(function(text){
        name = text;
      });

      firstElement.click();

      browser.waitForAngular();

      var header = element(by.binding('name'));

      expect(header.getText()).toMatch('Jazz On The Green');
    });
  });
});