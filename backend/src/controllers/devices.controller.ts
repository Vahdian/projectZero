async function getAllDevices(req, res, next) {
    try {
      const devices = ["fridge", "microwave", "computer", "oven", "freezer"]
      res.send(devices);
      next();
    } catch {
      console.info("No devices listed");
      next();
    }
  }

  async function getOneDevice(req, res, next) {
    try {
      const device = "laptop"
      res.send(device);
      next();
    } catch {
      console.info("No device found");
      next();
    }
  }

  export const devicesController = {getAllDevices, getOneDevice}