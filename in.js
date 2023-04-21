function inOperator(target, property)
{
  while(target != null)
  {
    if(Object.prototype.hasOwnProperty.call(target, property))
      return true;

    target = Object.getPrototypeOf(target);
  }

  return false;
}

function foo() {}

console.log(inOperator(foo, 'toString'));
console.log('toString' in foo);