class User
{
	constructor(nm, ag)
	{
		this.name = nm;
		this.age = ag;
	}

	getName(){
		return this.name;
	}

	getAge(){
		return this.age;
	}
}

let user = new User("Tejinder Singh", 25);

console.log(user.getName());
console.log(user.getAge());