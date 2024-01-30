"use strict";(self.webpackChunkbh_docs=self.webpackChunkbh_docs||[]).push([[3976],{6102:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var i=n(5893),t=n(1151);const a={sidebar_position:2},r="Getting Started",o={id:"pickit/getting-started",title:"Getting Started",description:"pickit walk-through",source:"@site/docs/pickit/getting-started.md",sourceDirName:"pickit",slug:"/pickit/getting-started",permalink:"/docs/pickit/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/bhdocs/bhdocs.github.io/blob/master/docs/pickit/getting-started.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/pickit/intro"},next:{title:"Custom Pickits",permalink:"/docs/pickit/custom-pickits"}},l={},h=[{value:"pickit walk-through",id:"pickit-walk-through",level:3},{value:"format of the nip lines",id:"format-of-the-nip-lines",level:3},{value:"things that go before #",id:"things-that-go-before-",level:2},{value:"things that go after #",id:"things-that-go-after-",level:5},{value:"comparison symbols:",id:"comparison-symbols",level:5},{value:"item-parser syntax information",id:"item-parser-syntax-information",level:3},{value:"other examples",id:"other-examples",level:3},{value:"ring",id:"ring",level:5},{value:"max quantity",id:"max-quantity",level:5},{value:"druid pelt",id:"druid-pelt",level:5},{value:"how to keep items unid",id:"how-to-keep-items-unid",level:3},{value:"charged skill items",id:"charged-skill-items",level:3},{value:"additional skill effect",id:"additional-skill-effect",level:3},{value:"pickit FAQ",id:"pickit-faq",level:3},{value:"d2nt pickit errors",id:"d2nt-pickit-errors",level:5},{value:"pickit philosophy",id:"pickit-philosophy",level:3},{value:"fast cash",id:"fast-cash",level:3},{value:"big profit",id:"big-profit",level:3},{value:"editing",id:"editing",level:3},{value:"the specific of poison charms",id:"the-specific-of-poison-charms",level:3}];function c(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsx)(s.h3,{id:"pickit-walk-through",children:"pickit walk-through"}),"\n",(0,i.jsx)(s.p,{children:"All pickit files are stored in d2bs/kolbot/pickit/ There are several default files to choose, you can also create and add your own or just edit these files."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/blizzhackers/kolbot/blob/master/d2bs/kolbot/pickit/classic.nip",children:"classic.nip"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/blizzhackers/kolbot/blob/master/d2bs/kolbot/pickit/follower.nip",children:"follower.nip"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/blizzhackers/kolbot/blob/master/d2bs/kolbot/pickit/gold.nip",children:"gold.nip"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/blizzhackers/kolbot/blob/master/d2bs/kolbot/pickit/keyorg.nip",children:"keyorg.nip"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/blizzhackers/kolbot/blob/master/d2bs/kolbot/pickit/kolton.nip",children:"kolton.nip"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/blizzhackers/kolbot/blob/master/d2bs/kolbot/pickit/LLD.nip",children:"LLD.nip"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/blizzhackers/kolbot/blob/master/d2bs/kolbot/pickit/pots.nip",children:"pots.nip"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/blizzhackers/kolbot/blob/master/d2bs/kolbot/pickit/shopbot.nip",children:"shopbot.nip"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/blizzhackers/kolbot/blob/master/d2bs/kolbot/pickit/test.nip",children:"test.nip"})}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["It is strongly recommended to use ",(0,i.jsx)(s.a,{href:"https://notepad-plus-plus.org/download/",children:"notepad++"})," to edit files. A useful plugin for notepad++ that works as a ",(0,i.jsx)(s.a,{href:"nipcheck",children:"NipCheck"}),".\nIt's important to check if your *.nip file is without errors. If you like you can use ",(0,i.jsx)(s.a,{href:"nipper",children:"Nipper"})," which works both for kolbot and d2nt."]}),"\n",(0,i.jsx)(s.p,{children:"First off familiarize yourself with some important and useful information."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://github.com/blizzhackers/kolbot/blob/master/d2bs/kolbot/libs/NTItemAlias.dbl",children:"NTItemAlias.dbl"})," (or ",(0,i.jsx)(s.a,{href:"d2nt/NTItemAlias.ntl",children:"NTItemAlias.ntl"})," in d2nt case) will answer 99% of item names/stats questions."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Remember"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Magic items can only get 2 affix, 1 prefix and 1 suffix."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Rares Get 6 affix, 3 prefix and 3 suffix"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Crafts Get 4 affix + craft mods, still limited to 3 prefix or suffix max"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["That's pretty much all there is to writing a pickit. Remember that everyone makes simple mistakes, but you can use ",(0,i.jsx)(s.a,{href:"nipcheck",children:"NipCheck"})," to find easier the issued lines and to correct them."]}),"\n",(0,i.jsx)(s.h3,{id:"format-of-the-nip-lines",children:"format of the nip lines"}),"\n",(0,i.jsx)(s.p,{children:"NIP lines are of the format:"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"{properties} # {stats} # {maxquantity}"})})}),"\n",(0,i.jsx)(s.h2,{id:"things-that-go-before-",children:"things that go before #"}),"\n",(0,i.jsx)(s.p,{children:"[type], [name], [class], [quality], [flag], [level], [prefix], [suffix]"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:" NTIPAliasType\t\t-> [type] \n NTIPAliasClassID\t-> [name]\n NTIPAliasClass\t\t-> [class]\n NTIPAliasQuality\t-> [quality]\n NTIPAliasFlag\t\t-> [flag]\n\n [level]  = item level\n [prefix] = number of a prefix that should be on the item, this and suffix number can be a bit hard to find\n [suffix] = number of a suffix that should be on the item\n"})}),"\n",(0,i.jsx)(s.h5,{id:"things-that-go-after-",children:"things that go after #"}),"\n",(0,i.jsx)(s.p,{children:"[stat keywords] : [Number or Alias]"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:" NTIPAliasStat\t\t-> (skills,stats, etc)\n\n The odd-man out seems to be [level] as its used as [property], but in NTItemAlias.dbl it's listed as a **[stat]**\n [level] != [itemlevelreq]\n"})}),"\n",(0,i.jsxs)(s.h5,{id:"comparison-symbols",children:[(0,i.jsx)(s.a,{href:"https://www.w3schools.com/JSREF/jsref_operators.asp",children:"comparison symbols"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:" ==\tequals\n >\tgreater than\n >=\tgreater or equal to\n <\tless than\n <=\tless than or equal to\n !=\tnot equal to\n &&\tand\n ||\tor\n ()\tgroup things up\n"})}),"\n",(0,i.jsx)(s.h3,{id:"item-parser-syntax-information",children:"item-parser syntax information"}),"\n",(0,i.jsx)(s.p,{children:"[keyword] separates into two groups:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"[property keywords]"})," = [type], [name], [class], [quality], [flag], [level], [prefix], [suffix]"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"[stat keywords]"})," = ",(0,i.jsx)(s.code,{children:"[{Number or NTItemAlias keyword}] or [Description] (description allow access to any text found in the item hover)"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"[maxquantity keywords]"})," = [maxquantity] (used to limit the quantity kept)"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"[keyword]"})," must be surrounded by ",(0,i.jsx)(s.strong,{children:"["})," and ",(0,i.jsx)(s.strong,{children:"]"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"[property keywords]"})," must be placed first"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["insert ",(0,i.jsx)(s.strong,{children:"# symbol"})," between ",(0,i.jsx)(s.strong,{children:"[property keywords]"})," and ",(0,i.jsx)(s.strong,{children:"[stat keywords]"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["use ",(0,i.jsx)(s.strong,{children:"+   -   *   /   (   )   &&   ||   >   >=   <   <=   ==   !=  symbols"})," for comparison"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["use ",(0,i.jsx)(s.strong,{children:"// symbol"})," for comment"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"There is no getting around learning the NIP syntax. You simply have to bite the bullet and do it. No one here can learn it for you. While it is not the most user-friendly language, it is fairly easy to understand once you start working with it."}),"\n",(0,i.jsxs)(s.p,{children:["The NIP files you are using are configured in your character configuration file. You can include/exclude NIP files on a per character basis within that file. Anything that appears on a NIP line past the ",(0,i.jsx)(s.strong,{children:"//"})," symbol is ignored (we call this a comment)."]}),"\n",(0,i.jsxs)(s.p,{children:["Each NIP has 3 sections separated by ",(0,i.jsx)(s.strong,{children:"#"})," signs where the keywords associated with that section are found:"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"{property} # {stats} # {maxquantity}"})})}),"\n",(0,i.jsx)(s.p,{children:"Each section is comprised of what are commonly called attribute-value pairs. An attribute-value pair is a keyword name that is assigned a value using an operator like this:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"[type] == circlet\n"})}),"\n",(0,i.jsxs)(s.p,{children:["These attribute-value pairs are then grouped using logical conjunctions like ",(0,i.jsx)(s.strong,{children:"&&"})," (for AND) and ",(0,i.jsx)(s.strong,{children:"||"})," (for OR) to create a NIP."]}),"\n",(0,i.jsx)(s.p,{children:"Now this was pretty straight forward to me, but to some it seems to be a little confusing."}),"\n",(0,i.jsxs)(s.p,{children:["Think of ",(0,i.jsx)(s.strong,{children:"[property]"}),' keywords as "constants" that will remain the same no matter what.']}),"\n",(0,i.jsx)(s.p,{children:"These all go before the # (was pretty easy for me as I already tend to use item #'s)."}),"\n",(0,i.jsx)(s.p,{children:"This doesn't mean that they can't vary, just means that no matter what end item is still gonna be \"boots\"."}),"\n",(0,i.jsxs)(s.p,{children:["If you were writing a line for all rare boots, the constants would be ",(0,i.jsx)(s.strong,{children:"[type] && [quality]"}),", those aren't gonna change no matter what you do."]}),"\n",(0,i.jsxs)(s.p,{children:["Now think of ",(0,i.jsx)(s.strong,{children:"[stat]"})," keywords as \"variables\" things that you may want to be flexible with. Like above, it doesn't mean that it can't have a set value."]}),"\n",(0,i.jsxs)(s.p,{children:["For example we can use ",(0,i.jsx)(s.strong,{children:"boots"}),", so if we want a ",(0,i.jsx)(s.strong,{children:"rare"})," ones we will write:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"[type] == boots && [quality] == rare\n"})}),"\n",(0,i.jsxs)(s.p,{children:[", but we also want them to have some ",(0,i.jsx)(s.strong,{children:"fasterrunwalk"})," and a little ",(0,i.jsx)(s.strong,{children:"fireresist"}),", so ",(0,i.jsx)(s.strong,{children:"# [stat] && [stat]"})," should be added."]}),"\n",(0,i.jsx)(s.p,{children:"Finally, it would look like this:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"[type] == boots && [quality] == rare # [frw] >= 10 && [fireresist] >= 10\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Now, if you can't determine what goes before the ",(0,i.jsx)(s.strong,{children:"#"})," and what goes after the ",(0,i.jsx)(s.strong,{children:"#"})," simply open up ",(0,i.jsx)(s.a,{href:"https://github.com/blizzhackers/kolbot/blob/master/d2bs/kolbot/libs/NTItemAlias.dbl",children:"NTItemAlias.dbl"})," and search with CTRL+F what you're trying to find."]}),"\n",(0,i.jsxs)(s.p,{children:["You can tell whether its a ",(0,i.jsx)(s.strong,{children:"[property]"})," or a ",(0,i.jsx)(s.strong,{children:"[stat]"})," simply by locating its alias, everything has an alias, just a matter of finding it."]}),"\n",(0,i.jsxs)(s.p,{children:["Now, we can use the same example for boots, but this time we want rare boots with ",(0,i.jsx)(s.strong,{children:"fastrunwalk"})," and ",(0,i.jsx)(s.strong,{children:"fireresist"})," stats, and either ",(0,i.jsx)(s.strong,{children:"coldresist"})," or ",(0,i.jsx)(s.strong,{children:"lightresist"})," or ",(0,i.jsx)(s.strong,{children:"dex"})]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"[type] == boots && [quality] == rare # [frw] >= 10 && [fireresist] >= 10 && ([lightresist] >= 10 || [coldresist] >= 10 || [dexterity] >= 1)\n"})}),"\n",(0,i.jsxs)(s.p,{children:["or we can write the same line, changing the condition for ",(0,i.jsx)(s.strong,{children:"coldresist + lightresist"})," to be >= 10"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"[type] == boots && [quality] == rare # [frw] >= 10 && [fireresist] >= 10 && ([lightresist]+[coldresist] >= 10 || [dexterity] >= 1)\n"})}),"\n",(0,i.jsx)(s.p,{children:"It's the same premise for any item, so once you have it figured out its pretty easy. Using the same example lets say I wanted only boots of exceptional quality."}),"\n",(0,i.jsxs)(s.p,{children:["[class] can be ",(0,i.jsx)(s.strong,{children:"normal"}),", ",(0,i.jsx)(s.strong,{children:"exceptional"}),", ",(0,i.jsx)(s.strong,{children:"elite"})," , and you can find it on NTItemAlias.dbl lines 765-768."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"class"})," = ",(0,i.jsx)(s.strong,{children:"property"})," so it goes before the ",(0,i.jsx)(s.strong,{children:"#"})]}),"\n",(0,i.jsx)(s.p,{children:"So the same boots, but only exceptional versions becomes:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"[type] == boots && [class] == exceptional && [quality] == rare # [frw] >= 10 && [fireresist] >= 10 && ([lightresist] >= 10 || [coldresist] >= 10 || [dexterity] >= 1)\n"})}),"\n",(0,i.jsx)(s.p,{children:"Adding too many qualifiers to any one line will make it harder for a novice to find any mistakes they have made. Remember the simpler it is for you to read, the better."}),"\n",(0,i.jsx)(s.p,{children:"Don't be afraid of using simple qualifiers. I hate writing rings/ammys/circlets and usually just use a couple of your standard catch-all lines."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"[type] == circlet && [quality] == rare # ([itemaddclassskills] >= 2 || [itemaddskilltab] >= 2) && [fcr] == 20 && ([strength] >= 10 || [dexterity] >= 10 || [frw] >= 30 || [sockets] == 2 || [maxhp]+[maxmana] >= 35)\n"})}),"\n",(0,i.jsx)(s.p,{children:"Now is that gonna grab junk? yea probably but look at this line"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"[type] == circlet && [quality] == rare # ([itemaddclassskills] >= 2 || [itemaddskilltab] >= 2) && [fcr] == 20 && ([strength] >= 15 || [dexterity] >= 15) && ([frw] >= 30 || [sockets] == 2 || [maxhp]+[maxmana] >= 35)\n"})}),"\n",(0,i.jsx)(s.p,{children:"Guess what happens if your bot finds a rare Circlet with 2skills/20fcr/12str OR 12dex and 2soc?"}),"\n",(0,i.jsx)(s.p,{children:"A good basic catch all should simply have 2 stats you want and a selection of other stats."}),"\n",(0,i.jsx)(s.p,{children:"For instance, this pickit line for rare Amazon helms:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"[type] == circlet && [quality] == rare && [flag] != ethereal # [amazonskills] == 2 && [frw] == 30 && [sockets] == 2\n"})}),"\n",(0,i.jsx)(s.h3,{id:"other-examples",children:"other examples"}),"\n",(0,i.jsx)(s.h5,{id:"ring",children:"ring"}),"\n",(0,i.jsx)(s.p,{children:"taking this line as an example:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"[type] == ring && [quality] == rare # [lifeleech] >= 4 && [tohit] >= 80 && [dexterity] >= 10 && [maxhp] >= 20\n"})}),"\n",(0,i.jsx)(s.p,{children:"item must be of type ring, must be of quality rare\nstats on the ring we are looking for with the line are:\nlifeleech 4 or higher\nattack rating 80 or higher\ndexterity 10 or higher\nlife 20 or higher"}),"\n",(0,i.jsx)(s.p,{children:"The line would not keep a ring that has three of the four stats specified, the line specifies the minimum stats the ring MUST have to be kept.\nSo a ring with LifeLeech, Dexterity and Life wont be kept by this line as it is missing Attack rating (ToHit)"}),"\n",(0,i.jsx)(s.h5,{id:"max-quantity",children:"max quantity"}),"\n",(0,i.jsx)(s.p,{children:"this line:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"[name] == helrune # # [maxquantity] == 3\n"})}),"\n",(0,i.jsx)(s.p,{children:"is for hel runes to be kept, to be precise 3 of them in stash and then don't bother with hel runes until less than 3 in stash."}),"\n",(0,i.jsx)(s.p,{children:"the two # # seperate properties, stats and maxquantity. If no stats are on the item (like with a rune or a gem) then the two still needs to be there for the syntax to be correct."}),"\n",(0,i.jsx)(s.h5,{id:"druid-pelt",children:"druid pelt"}),"\n",(0,i.jsx)(s.p,{children:"One last example on how the () works in a line:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"[type] == pelt && [quality] == rare && [flag] != ethereal # ([druidskills] >= 2 || [elementalskilltab] >= 2) && [skilltornado] >= 3 && [fhr] >= 10 && [sockets] >= 2\n"})}),"\n",(0,i.jsx)(s.p,{children:"This line looks for:\na druid helm (called pelt), [type] == pelt that is rare, [quality] == rare and that is NOT ethereal, [flag] != ethereal, then comes the first # so next comes the stats that should be on the item: either DruidSkills 2 or more (2 + to druid skills) OR elementalskilltab 2 or more (2 + to elemental skill tab) skilltornado 3 or higher (can't be higher than 3 but better safe than sorry if a bugged item happens to come along) faster hit recovery 3 or higher, [fhr] >= 3, sockets 2 or more, [sockets] >= 2"}),"\n",(0,i.jsx)(s.h3,{id:"how-to-keep-items-unid",children:"how to keep items unid"}),"\n",(0,i.jsxs)(s.p,{children:["Any pickit line without requirements for ",(0,i.jsx)(s.strong,{children:"[stat]"})," will keep that item unidentified. If it doesn't, check other lines from active pickit files to see if you not doubled that item. use notepad++ < Find in Files > tool. Example:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"[name] == corona && [quality] == unique\n[name] == ring && [quality] == unique\n[name] == amulet && [quality] == unique\n"})}),"\n",(0,i.jsx)(s.h3,{id:"charged-skill-items",children:"charged skill items"}),"\n",(0,i.jsx)(s.p,{children:"the default lines 1301 - 1302 from NTItemAlias.dbl"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:'NTIPAliasStat["itemchargedskill"] = 204;\nNTIPAliasStat["teleportcharges"] = [204,3461];\n'})}),"\n",(0,i.jsxs)(s.p,{children:["but in default LLD.nip and shopbot.nip you can find some examples for ",(0,i.jsx)(s.strong,{children:"itemchargedskill"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"[name] == warscepter && [quality] <= rare && [flag] != ethereal # ([enhanceddamage] >= 40 || [tohit] >= 80 || [enhanceddamage] >= 30 && [tohit] >= 40) && [itemchargedskill] == 96 && [itemlevelreq] <= 9 // sacrifice\n\n[type] == staff && [class] <= exceptional && [quality] == rare # [itemchargedskill] == 54 && [fcr] == 20 && [itemlevelreq] <= 30\n\n[name] == warscepter # ([enhanceddamage] >= 40 || [tohit] >= 80 || [enhanceddamage] >= 30 && [tohit] >= 40) && [itemchargedskill] == 96 && [itemlevelreq] <= 9 // [H]Akara, [H]Drognan, [H]Ormus, [H]Jamella, [H]Malah; level 95+ char for level 11 charges\n"})}),"\n",(0,i.jsx)(s.p,{children:"so, you should use ... skillID from ...\\kolbot\\sdk\\skills.txt"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"... [itemchargedskill] == xx ...\n"})}),"\n",(0,i.jsx)(s.h3,{id:"additional-skill-effect",children:"additional skill effect"}),"\n",(0,i.jsx)(s.p,{children:"the default lines 1288 - 1297 from NTItemAlias.dbl"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:'NTIPAliasStat["itemskillonattack"] = 195;\nNTIPAliasStat["itemskillonkill"] = 196;\nNTIPAliasStat["itemskillondeath"] = 197;\n...\nNTIPAliasStat["itemskillonhit"] = 198;\n...\nNTIPAliasStat["itemskillonlevelup"] = 199;\n...\nNTIPAliasStat["itemskillongethit"] = 201;\n'})}),"\n",(0,i.jsxs)(s.p,{children:["according to the ",(0,i.jsx)(s.a,{href:"#charged-skill-items",children:"previous chapter"})," you should use in the pickit line stat field (after #) the desired effect ==  skillID (...\\kolbot\\sdk\\skills.txt):"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"\n... # [itemskillonattack] == xx\n... # [itemskillonkill] == xx\n... # [itemskillondeath] == xx\n... # [itemskillonhit] == xx\n... # [itemskillonlevelup] == xx\n... # [itemskillongethit] == xx\n\n"})}),"\n",(0,i.jsx)(s.h3,{id:"pickit-faq",children:"pickit FAQ"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Q:"})," Why does my bot pick up and stash junk?"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"A:"})," Because it's on your pickit. Check the Item Log on manager to check what lines are responsible for that."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Q:"})," How do I add trap claws?"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"A:"})," Same way you add anything else, only they are like orbs and have 2x different types. I use names just like I do with orbs."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"[name] == greaterclaws\n[name] == greatertalons\n[name] == scissorsquhab\n([name] >= handscythe && [name] <= scissorssuwayyah)\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Q:"})," I noticed you use ",(0,i.jsx)(s.code,{children:"**[name] >= && [name] <=**"})," just wondering why?"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"A:"})," Simply easier than writing out each individual item name, but it has its drawbacks, for instance in the case of orbs I also wind up picking up all normal/exceptional amazon weapons(because they are between orbs) not a biggie on orbs but imagine if you put >= crystalsword(#29) and <= phaseblade(#225)"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Q:"})," Why does my bot keep picking up magic items when I have none on my pickit?"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"A:"})," If you're certain you don't have any magics on your pickt it is usually caused by >= or <= on normal or rares"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Q:"})," How can I pick and sell items for gold"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"A:"})," By adding only an impossible affix after the #"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"[class] == elite # [strength] >= 1000\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Q:"})," How come for viperskin you only have FireRes?"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"A:"})," Unique items with all res only need one res to look for. If i have [fireresist] == 35, there is no need for it to look at any other qualifiers, Not like maras/vipers/metalgrids can spawn with 35FR,30LR,21PR,30CR. Same goes for charms, you only need 2 of the 4 Res to pickup an all res SC."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Q:"})," What is the difference between [itemlevelreq] and [level]?"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"A:"})," Well [level] is kinda odd as although its listed as a [stat] in NTItemAlias its actually used as a [property], so if you want items under a certain level you would use ",(0,i.jsx)(s.strong,{children:"[name] && [quality] # [itemlevelreq] <="}),", and if you want to keep items of a certain Ilvl you would use ",(0,i.jsx)(s.strong,{children:"[name] && [quality] && [level]"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h5,{id:"d2nt-pickit-errors",children:"d2nt pickit errors"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Syntax error 64 ~ Usually means problem is after #"}),"\n",(0,i.jsx)(s.li,{children:'Syntax Error 64 (missing ; ) ~ Missing or extra "][" or ")("'}),"\n",(0,i.jsx)(s.li,{children:'Syntax Error 64 (invalid left hand assignment) ~ having "=" instead of "=="">=""<="'}),"\n",(0,i.jsx)(s.li,{children:'Syntax Error 64 (xxx isn\'t defined) ~ having keyword missing "[]" or typo'}),"\n",(0,i.jsx)(s.li,{children:"Syntax Error 60 ~ Usually means Problem is before #"}),"\n",(0,i.jsx)(s.li,{children:'Syntax Error 60 (xxx isn\'t defined) ~ having keyword missing "[]" or typo'}),"\n",(0,i.jsx)(s.li,{children:'Syntax Error 60 (missing ; ) ~ Misplaced or missing "#"(usually see a bunch of white writing)'}),"\n",(0,i.jsx)(s.li,{children:'Syntax Error 60 (Syntax error) ~ Missing or extra "][" or ")("'}),"\n",(0,i.jsx)(s.li,{children:"Syntax Error 111 ~ This is not an error in your pickit, but has to do with potions, usually grabbing + drinking."}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"And keep in mind just because you're not getting any errors from bot, that doesn't mean that your pickit isn't without mistakes."}),"\n",(0,i.jsx)(s.h3,{id:"pickit-philosophy",children:"pickit philosophy"}),"\n",(0,i.jsx)(s.p,{children:"Everyone asks how to improve your pickit. The point usually being to rake in huge amounts of fg at a time. The secret is, most people customize their own. You can learn about customizing your pickit on the wiki."}),"\n",(0,i.jsx)(s.p,{children:"I never share my pickit. Reason being, mine isn't designed to pick up awesomeness for reselling. Mine is designed to pick up stuff for my other characters. If I'm not looking to gear up any of my chars, I turn off my pickits."}),"\n",(0,i.jsx)(s.p,{children:"I've decided to share some lines and philosophy in this wiki."}),"\n",(0,i.jsx)(s.p,{children:"Note: If your goal is to pick up godly goodness, be prepared to not pick up ANYTHING for a few weeks. There's a reason those items sell for so much. It's because they're so rare."}),"\n",(0,i.jsxs)(s.p,{children:["You could also see the max stats of items on ",(0,i.jsx)(s.a,{href:"http://classic.battle.net/diablo2exp/items/",children:"http://classic.battle.net/diablo2exp/items/"})]}),"\n",(0,i.jsx)(s.h3,{id:"fast-cash",children:"fast cash"}),"\n",(0,i.jsx)(s.p,{children:"Now, let's talk about fast cash. Not a lot of cash, but fast cash."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"[name] == twistedessenceofsuffering # # [maxquantity] == 2\n[name] == chargedessenceofhatred # # [maxquantity] == 2\n[name] == burningessenceofterror # # [maxquantity] == 2\n[name] == festeringessenceofdestruction # # [maxquantity] == 2\n[name] == tokenofabsolution\n"})}),"\n",(0,i.jsx)(s.p,{children:"By now, everyone should know what a token is. It's always a good idea to have this in your pickit. Now we go over to the char config."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"Config.Cubing = true; // Set to true to enable cubing.\nConfig.Recipes.push([Recipe.Token]); // Make Token of Absolution\n"})}),"\n",(0,i.jsx)(s.p,{children:"Why? I let my bot run for one day. I came back to a stash full of tokens. While they can be a pain to move around, they sell for 1 fg each. 20 tokens = 20 fg. It may not seem like much, but 20 fg/day = 120/week."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"[type] == amulet && [quality] == magic # [itemaddskilltab] >= 3\n"})}),"\n",(0,i.jsx)(s.p,{children:"While your bot is looking for them, you sell a lot of amulets, filling up your gold really quick."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"[name] == coronet || [name] == circlet || [name] == tiara || [name] == diadem) && [quality] >= magic # [itemaddclassskills] >= 2\n"})}),"\n",(0,i.jsx)(s.p,{children:"Same thing here. Magic versions of these can have +3 all class skills, rares can have +2 with some pretty sweet effects. They generally attract some attention."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"[name] == cm3 && [quality] == 4 # [palicombatskilltab] == 1 && [maxhp] >=30\n"})}),"\n",(0,i.jsx)(s.p,{children:"This line is abbreviated. It's Paladin combat skills grand charm with >= 30 life. While these are hard to come by, it's no secret that they catch a high price."}),"\n",(0,i.jsx)(s.h3,{id:"big-profit",children:"big profit"}),"\n",(0,i.jsx)(s.p,{children:"Of course, if you are looking for that godly gear, you'll need to beef up your lines."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"[type] == gloves && [quality] == rare # [IAS] == 20 && [itemaddskilltab] >= 2 && ([strength]+[dexterity] >= 18 ||[lifeleech] >= 3 || [manaleech] >= 3 || [fireresist]+[lightresist]+[coldresist]+[poisonresist] >= 40)\n"})}),"\n",(0,i.jsx)(s.p,{children:"Rare gloves, 20% increased attack speed, +2 to a skill tab (usually zon jav/spear or bow/xbow or sin MA or SD), Combined str/dex of at least 18 OR 3% life leech OR 3% mana leech OR 40 all resist."}),"\n",(0,i.jsx)(s.p,{children:"While I haven't found one of these yet, I imagine it will sell fast."}),"\n",(0,i.jsx)(s.p,{children:"For these beefed up lines, I recommend Perfection by Sexuation."}),"\n",(0,i.jsx)(s.h3,{id:"editing",children:"editing"}),"\n",(0,i.jsx)(s.p,{children:"Remember, what works for one person may not work for you. Even if you use a pre-made pickit, read through and make adjustments."}),"\n",(0,i.jsx)(s.p,{children:"Example:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"[name] == slayerguard && [quality] == unique # [enhanceddefense] >= 200\n"})}),"\n",(0,i.jsx)(s.p,{children:"This line is for Arreat's Face with perfect defense. While this is ideal, it's rare. You can drop it to"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"[name] == slayerguard && [quality] == unique # [enhanceddefense] >= 180\n"})}),"\n",(0,i.jsx)(s.p,{children:"If that one with perfect defense drops, you will still keep it."}),"\n",(0,i.jsx)(s.h3,{id:"the-specific-of-poison-charms",children:"the specific of poison charms"}),"\n",(0,i.jsx)(s.p,{children:"When an item has both a poison damage prefix and suffix, it's not the total damage but the damage rates (i.e. damage per second) that are summed (as are the lengths)."}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.strong,{children:"pestilent"})," prefix applies 175 poison damage over 6 seconds; that's approximately 175/6 poison damage per second. The ",(0,i.jsx)(s.strong,{children:"anthrax"})," suffix applies 50 poison damage over 6 seconds; that's approximately 50/6 poison damage per second. So, a ",(0,i.jsx)(s.strong,{children:"pestilent small charm of anthrax"})," applies approximately 37.5 ((175 + 50)/6) poison damage per second for 12 (6 + 6) seconds, resulting in approximately 450 (37.5 x 12) poison damage over 12 seconds. You need to know the values and calculations used by the game for exact figures:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"Affix      Rate  Frames  Poison Damage      Over seconds\n________________________________________________________\npestilent  299    150    299*150/256 = 175  150/25 =  6\nanthrax     86    150     86*150/256 =  50  150/25 =  6\n\nTotal      385    300    385*300/256 = 451  300/25 = 12\n"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"//prefix\n//septic    +  15 poison damage over 3 seconds\n//foul      +  50 poison damage over 4 seconds\n//toxic     + 100 poison damage over 5 seconds\n//pestilent + 175 poison damage over 6 seconds\n \n//suffix\n//blight     +  6 poison damage over 3 seconds\n//venom      + 15 poison damage over 4 seconds\n//pestilence + 25 poison damage over 5 seconds\n//anthrax    + 50 poison damage over 6 seconds\n \n// prefix small charms\n[poisonmaxdam] >= 52 && [poisonlength] == 3 // septic small charm\n[poisonmaxdam] >= 128 && [poisonlength] == 4 // foul small charm\n[poisonmaxdam] >= 205 && [poisonlength] == 5 // toxic small charm\n[poisonmaxdam] >= 299 && [poisonlength] == 6 // pestilent small charm\n \n// suffix small charms\n[poisonmaxdam] >= 21 && [poisonlength] == 3 // small charm of blight\n[poisonmaxdam] >= 39 && [poisonlength] == 4 // small charm of venom\n[poisonmaxdam] >= 52 && [poisonlength] == 5 // small charm of pestilence\n[poisonmaxdam] >= 86 && [poisonlength] == 6 // small charm of anthrax\n \n// Combinations of Pre+Suf small Chamrs\n[poisonmaxdam] >= 73 && [poisonlength] == 6 // septic small charm of blight             -  43 damage over 6 seconds\n[poisonmaxdam] >= 91 && [poisonlength] == 7 // septic small charm of venom              -  62 damage over 7 seconds\n[poisonmaxdam] >= 104 && [poisonlength] == 8 // septic small charm of pestilence        -  81 damage over 8 seconds\n[poisonmaxdam] >= 138 && [poisonlength] == 9 // septic small charm of anthrax           - 121 damage over 9 seconds\n \n[poisonmaxdam] >= 149 && [poisonlength] == 7 // foul small charm of blight              - 102 damage over 7 seconds\n[poisonmaxdam] >= 167 && [poisonlength] == 8 // foul small charm of venom               - 130 damage over 8 seconds\n[poisonmaxdam] >= 180 && [poisonlength] == 9 // foul small charm of pestilence          - 158 damage over 9 seconds\n[poisonmaxdam] >= 214 && [poisonlength] == 10 // foul small charm of anthrax            - 209 damage over 10 seconds\n \n[poisonmaxdam] >= 226 && [poisonlength] == 8 // toxic small charm of blight             - 177 damage over 8 seconds\n[poisonmaxdam] >= 244 && [poisonlength] == 9 // toxic small charm of venom              - 214 damage over 9 seconds\n[poisonmaxdam] >= 257 && [poisonlength] == 10 // toxic small charm of pestilence        - 251 damage over 10 seconds\n[poisonmaxdam] >= 291 && [poisonlength] == 11 // toxic small charm of anthrax           - 313 damage over 11 seconds\n \n[poisonmaxdam] >= 320 && [poisonlength] == 9 // pestilent small charm of blight         - 281 damage over 9 seconds\n[poisonmaxdam] >= 338 && [poisonlength] == 10 // pestilent small charm of venom         - 330 damage over 10 seconds\n[poisonmaxdam] >= 351 && [poisonlength] == 11 // pestilent small charm of pestilence    - 377 damage over 11 seconds\n[poisonmaxdam] >= 385 && [poisonlength] == 12 // pestilent small charm of anthrax       - 451 damage over 12 seconds\n \n//Affix      Rate  Frames  poison damage      over seconds\n  ________________________________________________________\n//pestilent  299    150    299*150/256 = 175  150/25 =  6\n//anthrax     86    150     86*150/256 =  50  150/25 =  6\n\n//Total      385    300    385*300/256 = 451  300/25 = 12\n\n(damage*256) / (secound*25)\nso in the case of the above mentioned 175/6\n(175*256) / (6*25) = 44800 / 150 = 298,666666667\n175 poison damage over 6 = [poisonmaxdam] >= 299 && [poisonlength] >= 6\n\n(damage*256) / (secound*25)\nso in the case of the above mentioned 100/5\n(100*205) / (5*25) = 20500 / 125 = 164\n100 poison damage over 5 = [poisonmaxdam] >= 164 && [poisonlength] >= 5\n"})}),"\n",(0,i.jsxs)(s.p,{children:["additional ",(0,i.jsx)(s.a,{href:"https://diablo2.diablowiki.net/Guide:Calculating_Poison_Damage_v1.10,_by_onderduiker",children:"https://diablo2.diablowiki.net/Guide:Calculating_Poison_Damage_v1.10,_by_onderduiker"})]})]})}function d(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>r});var i=n(7294);const t={},a=i.createContext(t);function r(e){const s=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(a.Provider,{value:s},e.children)}}}]);