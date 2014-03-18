EmberApp.RollController = Ember.Controller.extend({
  rollDice: function () {
    var roll = this.get("rollString"),
      content = [],
      rolls = 0,
      sides = 0,
      errors = "",
      i, rnd, roll_parts;
    if (roll === undefined) {
      this.set("errors", "please fill box");
      return
    }
    roll_parts = roll.split("d");
    if (roll_parts.length !== 2) {
      errors += "you need to enter a value in a format 'xdy'. ";
    } else {
      rolls = parseInt(roll_parts[0]);
      sides = parseInt(roll_parts[1]);

      if(isNaN(rolls) || isNaN(sides)) {
        errors += "Rolls and Sides must be numbers";
      }
      if (errors.length === 0) {
        for( i =0; i <sides; i++) {
          content.push(EmberApp.roll.create({
            diceNumber: i + 1,
            totalRolls: rolls

          }));
        }

        for(i=0; i<rolls; i++){
          rnd = Math.floor(Math.random() * sides);

          content[rnd].incrementProperty("numberOfRolls");
        }
      }
    }
    this.set("content", content);

    this.set("errors", errors);
  }
})
