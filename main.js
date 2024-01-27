function outerFunc(outervariable) {
  return function innerFunc(innervariable) {
    console.log('Outer variable' + ' ' + outervariable);
    console.log('Inner variable' + ' ' + innervariable);
  };
}

const newFunc = outerFunc('outside');

newFunc('inside');
