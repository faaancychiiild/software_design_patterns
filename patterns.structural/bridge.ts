/* Say we have got several API providers to work for a particular service */

interface Handler {
  process(): object
}

class Controller {
  public handler: Handler

  constructor(handler: Handler) {
    this.handler = handler
  }

  public fetch(): object {
    return this.handler.process()
  }
}

class Provider_0 implements Handler {
  public process(): object {
    const data = "fetched data from provider 0"
    return {data}
  }
}

class Provider_1 implements Handler {
  public process(): object {
    const data = "fetched data from provider 1"
    return {data}
  }
}


function fetch_data (controller: Controller) {
  const data = controller.fetch()
  return data
}

const provider_0 = new Provider_0()
const provider_1 = new Provider_1()

const controller = new Controller(provider_0)

const result = fetch_data(controller)

console.log(result);
