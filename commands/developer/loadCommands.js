module.exports = [({
 name: "load",
    aliases: ["loaf", "loax", "loat"],
code: `lan $updatecommands
$setvar[botvers2;$sum[$getvar[botvers2];1]]
$onlyif[$getvar[botvers2]<11;{execute:loadc}]
$onlyforids[$botownerid;]`
}), ({
    name: "loadc",
    type: "awaited",
    code: `$setvar[botvers;$sum[$getvar[botvers];1]]
$setvar[botvers2;1]`
})]
