let styles = ['Jazz', 'Blues'];
console.log(`Step 1: ${styles}`);

styles.push('Rock-n-Roll');
console.log(`Step 2: ${styles}`);

styles.splice(styles.length/2, 1, 'Classics');
console.log(`Step 3: ${styles}`)

const firstElement = styles.shift();
console.log(`Step 4: ${styles}`)
console.log('Deleted element:', firstElement);

styles.unshift('Rap', 'Reggae');
console.log(`Step 5: ${styles}`)
