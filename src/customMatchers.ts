let customMatchers: jasmine.CustomMatcherFactories = {
  alwaysTrue: (util, testers) => {
    return {
      compare: (actual, expected) => {
        return {
          pass: true
        };
      }
    }
  }
}

export {customMatchers};
