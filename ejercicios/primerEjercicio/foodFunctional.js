primalEmoji = ['🐮', '🥔', '🐔', '🌽'];
cookEmojis = ['🍔','🍟','🍗','🍿'];

cook = function(cooking){
    var i = primalEmoji.indexOf(cooking);
    return cookEmojis[i];
}

cookingEmojis = primalEmoji.map(cook);
console.log(cookingEmojis);

isVegetarian = [
    {key:'🍔', value: false},
    {key:'🍟', value: true},
    {key:'🍗', value: false},
    {key:'🍿', value: true}];

console.log('Is the Hamburger 🍔 vegetarian?', isVegetarian[0].value);
console.log('Is the french fries 🍟 vegetarian?', isVegetarian[1].value);
console.log('Is the chicken 🍗 vegetarian?', isVegetarian[2].value);
console.log('Is the pop corn 🍿 vegetarian?', isVegetarian[3].value);

function eat(...food){
    food = '🤤';
    return food;
}

console.log(eat('🍔'));
console.log(eat('🍟'));
console.log(eat('🍗'));
console.log(eat('🍿'));

const eatAllFood = cookEmojis.reduce(function(a, b){ return eat(a,b) });
console.log('All Food eated ',eatAllFood);

function hasMeet(isVegetarian){
    return !isVegetarian;
}
console.log('the Hamburger 🍔 has meet?', hasMeet(isVegetarian[0].value));
console.log('the french fries 🍟 has meet?', hasMeet(isVegetarian[1].value));
console.log('the chicken 🍗 has meet?', hasMeet(isVegetarian[2].value));
console.log('the pop corn 🍿 has meet?', hasMeet(isVegetarian[3].value));

