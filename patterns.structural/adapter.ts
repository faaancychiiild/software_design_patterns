/* adapter design pattern */

/* function processor takes Unit as an arg */

function processor (unit: Unit): object {
  return unit.run()
}

class Unit {
  public run(): object {
    return {
      date: new Date().toISOString()
    }
  }
}

class Adaptee {
  public run(): string {
    return new Date().toISOString()
  }
}

class Adapter extends Unit{
  private adaptee: Adaptee

  constructor(adaptee: Adaptee) {
    super()
    this.adaptee = adaptee
  }

  public run(): object {
    let date = this.adaptee.run()
    return {
      date
    }
  }
}

const unit = new Unit()
const adaptee = new Adaptee()
const adapter = new Adapter(adaptee)

console.log(processor(unit), processor(adapter));

