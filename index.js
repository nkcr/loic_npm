var is_shut;
function Loic() {
  this.is_shut = false;
}
Loic.prototype.shut_up = function() {
  this.is_shut = true;
  console.log("Shut up Loic!");
}
Loic.prototype.state = function() {
  if(this.is_shut) {
    console.log("Loic is currently shut");
  } else {
    console.log("Loic is not shut yet, that must be fixed asap!")
  }
}

module.exports = Loic;
