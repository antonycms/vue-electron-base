const cache = [];

function importAll(r) {
  r.keys().forEach(key => {
    const local = r(key);

    if (typeof local !== 'function') {
      cache.push(local.default);
    } else {
      cache.push(local);
    }
  });
}

importAll(require.context('./general/', true, /\.js$/));

export default cache;
