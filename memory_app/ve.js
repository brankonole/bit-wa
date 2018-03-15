const s = (value, fn) => {
    fn(value)
   return (value > 0) ? s(value - 1, fn) : value;
}

console.log(s(10, value => console.log(value)) )