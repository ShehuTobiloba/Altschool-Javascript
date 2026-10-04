function diffObjects(oldObj, newObj) {
  const diff = {
    added: {},
    removed: {},
    changed: {},
  };

  for (const key of Object.keys(newObj)) {
    if (!(key in oldObj)) {
      diff.added[key] = newObj[key];
    } else if (oldObj[key] !== newObj[key]) {
      diff.changed[key] = {
        from: oldObj[key],
        to: newObj[key]
      };
    }
  }

  for (const key of Object.keys(oldObj)) {
    if (!(key in newObj)) {
      diff.removed[key] = oldObj[key];
    }
  }

  return diff;
}

console.log(diffObjects(
  { name: 'Setemi', role: 'Engineer', country: 'Jamaica' },
  { name: 'Setemi', role: 'Senior Engineer', city: 'Kingston' }
));

// { added: { city: 'Kingston' }, removed: { country: 'Jamaica' }, changed: { role: { from: 'Engineer', to: 'Senior Engineer' } } }