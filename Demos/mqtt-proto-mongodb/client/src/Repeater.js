function Repeater(callback, delay, count) {
  var self = this;
  this.timer = setTimeout(function() {
    self.run();
  }, delay);
  this.callback = callback;
  this.delay = delay;
  this.timesLeft = count;
  this.lastCalled = new Date().getTime();
}
Repeater.prototype.run = function() {
  var self = this;
  this.timesLeft--;
  this.callback();
  this.lastCalled = new Date().getTime();
  if (this.timesLeft > 0) {
    this.timer = setTimeout(function() {
      self.run();
    }, this.delay);
  }
};
Repeater.prototype.changeDelay = function(newdelay) {
  var self = this;
  clearTimeout(this.timer);
  this.timer = setTimeout(function() {
    self.run();
  }, newdelay - new Date().getTime() + lastcalled);
  this.delay = newdelay;
};
Repeater.prototype.changeCount = function(newcount) {
  var self = this;
  if (this.timesLeft == 0) {
    this.timer = setTimeout(function() {
      self.run();
    }, this.delay);
  }
  this.timesLeft = newcount;
  if (this.timesLeft == 0) clearTimeout(this.timer);
};
