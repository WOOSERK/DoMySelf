function instanceOf(target, type)
{
  while(target !== null)
  {
    const proto = Object.getPrototypeOf(target);

    if(proto === type.prototype)
      return true;

    target = proto;
  }

  return false;
}

function foo() {};

console.log(instanceOf(foo, Object));
console.log(foo instanceof Object);