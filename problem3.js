function deepFreeze(obj) {
  Object.freeze(obj);

  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      deepFreeze(obj[key]);
    }
  }

  return obj;
}

const config = deepFreeze({
  api: {
    baseUrl: "https://x.com",
    retries: 3
  },
  debug: false
});

console.log(config.api.baseUrl, config.debug);
console.log(Object.isFrozen(config.api));