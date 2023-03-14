function name(name1, name2 = ' al hasan') {
    const total = name1 + name2;
    return total;
}

const fullName = name('sakib', '');
console.log(fullName);