function firstDuplicate(a) {
	if (!a.length) return -1;
	let hash = {};
	for (const val of a) {
		if (!hash[val.toString()]) {
			hash[val.toString()] = 1;
		} else {
			console.log('elsed');
			return val;
		};
	}
	return -1;
}