const MenuData = require("./data/menu.json")
function buildUrl(service){
    var encoded = encodeURIComponent(service)
    var url = `/docs/${encoded}`;
    return url
}
//console.log(buildUrl("accounts service"));
var {list} = MenuData;
var service = decodeURIComponent("accounts%20service")
console.log(service)
for(i = 0; i < list.length; i++){
    console.log(list[i]);
    if(list[i].name.toLowerCase() === service){
        console.log("YES")
        return
    }
}