//Exercice : PNJ (Personnage non-joueur)
let character = {
    name : "nom",
    age : 58,
    item_to_give : ["dague","bouclier"],
    giveItem : (item) => {
        character.item_to_give.push(item);
    }
}
for (val in character)
{
    console.log(character[val]);
}
const giveItem = (item) => {
    character.item_to_give.push(item);
};
giveItem("lance");
for (val in character)
{
    console.log(character[val]);
}
//Exercice : Shop
let objetVendre = [
    {
        title : "sword" ,
        physics : 76 ,
        magic : 21 ,
        minLevel : 50,
        available : true
    },
    {
        title : "axe" ,
        physics : 98 ,
        magic : 7 ,
        minLevel : 2,
        available : true
    },
    {
        title : "scepter" ,
        physics : 51 ,
        magic : 84 ,
        minLevel : 24,
        available : false
    }
]
const displayObject = (obj) => {
    console.log(obj);
};
displayObject(objetVendre);
const displayAvailable = (obj) => {
    for (let i = 0; i < obj.length; i++)
    {
        if (obj[i]["available"] === true)
        {
            console.log(obj[i]);
        }
    }
}
displayAvailable(objetVendre);
const minlevel = (obj) => {
    for (let i = 0; i < obj.length; i++)
    {
        if (obj[i]["minLevel"] >= 10)
        {
            console.log(obj[i]);
        }
    }
}
minlevel(objetVendre);
//Exercice : Personnage
let mainCharacter = {
    name : "aragorn" ,
    level : 57 ,
    life : 3000 ,
    weapon : {
        name : "épée" ,
        damage : 58
    } , 
    attack : () => {
        console.log(mainCharacter["name"] + " " + "attaque avec l'arme" + " " + mainCharacter["weapon"]["name"] + " " + "les dégats sont" + " " + mainCharacter["level"] * mainCharacter["weapon"]["damage"]);
    }
};
mainCharacter.attack();