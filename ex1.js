var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

var all = boys.concat(girls);

var allString = all.join();

var allString2 = all.join("-");

console.log(allString);
console.log(allString2);

all.push("Lone" , "Gitte");
all.unshift("Hans" , "Kurt");

console.log(all);

all.shift("Hans");
all.pop("Gitte");
all.splice(3,2);
all.reverse();
all.sort();

function toUpper(data)
{
    return data.toUpperCase();
}

function startWith(data)
{
    if (data.startsWith("L"))
        return data;
    else if(data.startsWith("I"))
        return data;
}

var upperAll = all.map(toUpper);
var finalAr = upperAll.filter(startWith);

console.log(finalAr);
