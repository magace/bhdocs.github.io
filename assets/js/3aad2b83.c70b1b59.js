"use strict";(self.webpackChunkbh_docs=self.webpackChunkbh_docs||[]).push([[6963],{1063:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var t=n(5893),o=n(1151);const s={},a="Cubing",r={id:"kolbot/Cubing",title:"Cubing",description:"general table of content",source:"@site/docs/kolbot/Cubing.md",sourceDirName:"kolbot",slug:"/kolbot/Cubing",permalink:"/docs/kolbot/Cubing",draft:!1,unlisted:!1,editUrl:"https://github.com/bhdocs/bhdocs.github.io/blob/master/docs/kolbot/Cubing.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CharacterConfig",permalink:"/docs/kolbot/CharacterConfig"},next:{title:"D2BotMuleLog",permalink:"/docs/kolbot/D2BotMuleLog"}},l={},p=[{value:"gems",id:"gems",level:3},{value:"essences",id:"essences",level:3},{value:"runes",id:"runes",level:3},{value:"crafting",id:"crafting",level:3},{value:"reroll magic/rare items",id:"reroll-magicrare-items",level:3},{value:"socketing",id:"socketing",level:3},{value:"unique upgrades",id:"unique-upgrades",level:3},{value:"runeword",id:"runeword",level:2}];function c(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"https://github.com/blizzhackers/documentation/#diablo-2-botting-system",children:"general table of content"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"https://github.com/blizzhackers/documentation/tree/master/kolbot/#kolbot",children:"kolbot table of content"})}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h1,{id:"cubing",children:"Cubing"}),"\n",(0,t.jsx)(i.p,{children:"You should enable the cubing. If your toon hasn't the horadric cube, at the game's beginning he will travel to act 2 to get it."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-javascript",children:"  /* \n   * All recipe names are available in Templates/Cubing.txt. For item names/classids check core/GameData/NTItemAlias.js\n   * The format is Config.Recipes.push([recipe_name, item_name_or_classid, etherealness]).\n   * Etherealness is optional and only applies to some recipes.\n   */\n  Config.Cubing = true; // Set to true to enable cubing.\n"})}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"gems",children:"gems"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["for cubing the gems with lower quality than flawless, check ",(0,t.jsx)(i.a,{href:"https://github.com/blizzhackers/documentation/blob/master/kolbot/MiscellaneousOptions.md/#cubing-all-kind-of-gems",children:"https://github.com/blizzhackers/documentation/blob/master/kolbot/MiscellaneousOptions.md/#cubing-all-kind-of-gems"})]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-javascript",children:'  // Ingredients for the following recipes will be auto-picked, for classids check libs/core/GameData/NTItemAlias.js\n\n  // Config.Recipes.push([Recipe.Gem, "Flawed Amethyst"]); // make Flawed Amethyst\n  // Config.Recipes.push([Recipe.Gem, "Flawed Topaz"]); // make Flawed Topaz\n  // Config.Recipes.push([Recipe.Gem, "Flawed Sapphire"]); // make Flawed Sapphire\n  // Config.Recipes.push([Recipe.Gem, "Flawed Emerald"]); // make Flawed Emerald\n  // Config.Recipes.push([Recipe.Gem, "Flawed Ruby"]); // make Flawed Ruby\n  // Config.Recipes.push([Recipe.Gem, "Flawed Diamond"]); // make Flawed Diamond\n  // Config.Recipes.push([Recipe.Gem, "Flawed Skull"]); // make Flawed Skull\n\n  // Config.Recipes.push([Recipe.Gem, "Amethyst"]); // make Amethyst\n  // Config.Recipes.push([Recipe.Gem, "Topaz"]); // make Topaz\n  // Config.Recipes.push([Recipe.Gem, "Sapphire"]); // make Sapphire\n  // Config.Recipes.push([Recipe.Gem, "Emerald"]); // make Emerald\n  // Config.Recipes.push([Recipe.Gem, "Ruby"]); // make Ruby\n  // Config.Recipes.push([Recipe.Gem, "Diamond"]); // make Diamond\n  // Config.Recipes.push([Recipe.Gem, "Skull"]); // make Skull\n\n  // Config.Recipes.push([Recipe.Gem, "Flawless Amethyst"]); // make Flawless Amethyst\n  // Config.Recipes.push([Recipe.Gem, "Flawless Topaz"]); // make Flawless Topaz\n  // Config.Recipes.push([Recipe.Gem, "Flawless Sapphire"]); // make Flawless Sapphire\n  // Config.Recipes.push([Recipe.Gem, "Flawless Emerald"]); // make Flawless Emerald\n  // Config.Recipes.push([Recipe.Gem, "Flawless Ruby"]); // make Flawless Ruby\n  // Config.Recipes.push([Recipe.Gem, "Flawless Diamond"]); // make Flawless Diamond\n  // Config.Recipes.push([Recipe.Gem, "Flawless Skull"]); // make Flawless Skull\n\n  Config.Recipes.push([Recipe.Gem, "Perfect Amethyst"]); // Make Perfect Amethyst\n  Config.Recipes.push([Recipe.Gem, "Perfect Topaz"]); // Make Perfect Topaz\n  Config.Recipes.push([Recipe.Gem, "Perfect Sapphire"]); // Make Perfect Sapphire\n  Config.Recipes.push([Recipe.Gem, "Perfect Emerald"]); // Make Perfect Emerald\n  Config.Recipes.push([Recipe.Gem, "Perfect Ruby"]); // Make Perfect Ruby\n  Config.Recipes.push([Recipe.Gem, "Perfect Diamond"]); // Make Perfect Diamond\n  Config.Recipes.push([Recipe.Gem, "Perfect Skull"]); // Make Perfect Skull\n'})}),"\n",(0,t.jsx)(i.h3,{id:"essences",children:"essences"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-javascript",children:"  // Ingredients for the following recipes will be auto-picked, for classids check libs/core/GameData/NTItemAlias.js\n\n  // Config.Recipes.push([Recipe.Token]); // Make Token of Absolution\n"})}),"\n",(0,t.jsx)(i.h3,{id:"runes",children:"runes"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-javascript",children:'  // Ingredients for the following recipes will be auto-picked, for classids check libs/core/GameData/NTItemAlias.js\n\n  // Config.Recipes.push([Recipe.Rune, "Eld Rune"]); // Upgrade El to Eld\n  // Config.Recipes.push([Recipe.Rune, "Tir Rune"]); // Upgrade Eld to Tir\n  // Config.Recipes.push([Recipe.Rune, "Nef Rune"]); // Upgrade Tir to Nef\n  // Config.Recipes.push([Recipe.Rune, "Eth Rune"]); // Upgrade Nef to Eth\n  // Config.Recipes.push([Recipe.Rune, "Ith Rune"]); // Upgrade Eth to Ith\n  // Config.Recipes.push([Recipe.Rune, "Tal Rune"]); // Upgrade Ith to Tal\n  // Config.Recipes.push([Recipe.Rune, "Ral Rune"]); // Upgrade Tal to Ral\n  // Config.Recipes.push([Recipe.Rune, "Ort Rune"]); // Upgrade Ral to Ort\n\n  // Config.Recipes.push([Recipe.Rune, "Thul Rune"]); // Upgrade Ort to Thul\n  // Config.Recipes.push([Recipe.Rune, "Amn Rune"]); // Upgrade Thul to Amn\n  // Config.Recipes.push([Recipe.Rune, "Sol Rune"]); // Upgrade Amn to Sol\n  // Config.Recipes.push([Recipe.Rune, "Shael Rune"]); // Upgrade Sol to Shael\n  // Config.Recipes.push([Recipe.Rune, "Dol Rune"]); // Upgrade Shael to Dol\n  // Config.Recipes.push([Recipe.Rune, "Hel Rune"]); // Upgrade Dol to Hel\n  // Config.Recipes.push([Recipe.Rune, "Io Rune"]); // Upgrade Hel to Io\n  // Config.Recipes.push([Recipe.Rune, "Lum Rune"]); // Upgrade Io to Lum\n  // Config.Recipes.push([Recipe.Rune, "Ko Rune"]); // Upgrade Lum to Ko\n  // Config.Recipes.push([Recipe.Rune, "Fal Rune"]); // Upgrade Ko to Fal\n  // Config.Recipes.push([Recipe.Rune, "Lem Rune"]); // Upgrade Fal to Lem\n\n  Config.Recipes.push([Recipe.Rune, "Pul Rune"]); // Upgrade Lem to Pul\n  Config.Recipes.push([Recipe.Rune, "Um Rune"]); // Upgrade Pul to Um\n  Config.Recipes.push([Recipe.Rune, "Mal Rune"]); // Upgrade Um to Mal\n  Config.Recipes.push([Recipe.Rune, "Ist Rune"]); // Upgrade Mal to Ist\n  Config.Recipes.push([Recipe.Rune, "Gul Rune"]); // Upgrade Ist to Gul\n  Config.Recipes.push([Recipe.Rune, "Vex Rune"]); // Upgrade Gul to Vex\n'})}),"\n",(0,t.jsx)(i.h3,{id:"crafting",children:"crafting"}),"\n",(0,t.jsx)(i.p,{children:"In your pickit file you may specify the level for the base items:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-javascript",children:"// Crafting gear\n[name] == vampirebonegloves && [quality] == magic && [level] >= 94 # // Diablo/Baal\n[name] == mithrilcoil && [quality] == magic && [level] >= 94 # // Diablo/Baal\n[type] == ring && [quality] == magic && [level] >= 94 # // Diablo/Baal\n[type] == amulet && [quality] == magic && [level] >= 94 # // Diablo/Baal\n"})}),"\n",(0,t.jsx)(i.p,{children:"Blood - Caster - Hit Power - Safety   Recipes"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-javascript",children:'\t// Ingredients for the following recipes will be auto-picked, for classids check libs/core/GameData/NTItemAlias.js\n\n\t//Config.Recipes.push([Recipe.Blood.Helm, "Armet"]); // Craft Blood Helm\n\t//Config.Recipes.push([Recipe.Blood.Boots, "Mirrored Boots"]); // Craft Blood Boots\n\t//Config.Recipes.push([Recipe.Blood.Gloves, "Vampirebone Gloves"]); // Craft Blood Gloves\n\t//Config.Recipes.push([Recipe.Blood.Belt, "Mithril Coil"]); // Craft Blood Belt\n\t//Config.Recipes.push([Recipe.Blood.Shield, "Blade Barrier"]); // Craft Blood Shield\n\t//Config.Recipes.push([Recipe.Blood.Body, "Hellforge Plate"]); // Craft Blood Armor\n\t//Config.Recipes.push([Recipe.Blood.Amulet]); // Craft Blood Amulet\n\t//Config.Recipes.push([Recipe.Blood.Ring]); // Craft Blood Ring\n\t//Config.Recipes.push([Recipe.Blood.Weapon, "Berserker Axe"]); // Craft Blood Weapon\n\n\t//Config.Recipes.push([Recipe.Caster.Helm, "Demonhead Mask"]); // Craft Caster Helm\n\t//Config.Recipes.push([Recipe.Caster.Boots, "Wyrmhide Boots"]); // Craft Caster Boots\n\t//Config.Recipes.push([Recipe.Caster.Gloves, "Bramble Mitts"]); // Craft Caster Gloves\n\t//Config.Recipes.push([Recipe.Caster.Belt, "Vampirefang Belt"]); // Craft Caster Belt\n\t//Config.Recipes.push([Recipe.Caster.Shield, "Luna"]); // Craft Caster Shield\n\t//Config.Recipes.push([Recipe.Caster.Body, "Archon Plate"]); // Craft Caster Armor\n\t//Config.Recipes.push([Recipe.Caster.Amulet]); // Craft Caster Amulet\n\t//Config.Recipes.push([Recipe.Caster.Ring]); // Craft Caster Ring\n\t//Config.Recipes.push([Recipe.Caster.Weapon, "Seraph Rod"]); // Craft Caster  Weapon\n\n\t//Config.Recipes.push([Recipe.HitPower.Helm, "Giant Conch"]); // Craft Hit Power Helm\n\t//Config.Recipes.push([Recipe.HitPower.Boots, "Boneweave Boots"]); // Craft Hit Power Boots\n\t//Config.Recipes.push([Recipe.HitPower.Gloves, "Vambraces"]); // Craft Hit Power Gloves\n\t//Config.Recipes.push([Recipe.HitPower.Belt, "Troll Belt"]); // Craft Hit Power Belt\n\t//Config.Recipes.push([Recipe.HitPower.Shield, "Ward"]); // Craft Hit Power Shield\n\t//Config.Recipes.push([Recipe.HitPower.Body, "Kraken Shell"]); // Craft Hit Power Armor\n\t//Config.Recipes.push([Recipe.HitPower.Amulet]); // Craft Hit Power Amulet\n\t//Config.Recipes.push([Recipe.HitPower.Ring]); // Craft Hit Power Ring\n\t//Config.Recipes.push([Recipe.HitPower.Weapon, "Scourge"]); // Craft Hit Power Weapon | "Blunt" = All maces, rods (+50% Undead), excepting orbs\n\n\t//Config.Recipes.push([Recipe.Safety.Helm, "Corona"]); // Craft Safety Helm\n\t//Config.Recipes.push([Recipe.Safety.Boots, "Myrmidon Boots"]); // Craft Safety Boots\n\t//Config.Recipes.push([Recipe.Safety.Gloves, "Ogre Gauntlets"]); // Craft Safety Gloves\n\t//Config.Recipes.push([Recipe.Safety.Belt, "Spiderweb Sash"]); // Craft Safety Belt\n\t//Config.Recipes.push([Recipe.Safety.Shield, "Monarch"]); // Craft Safety Shield\n\t//Config.Recipes.push([Recipe.Safety.Body, "Great Hauberk"]); // Craft Safety Armor\n\t//Config.Recipes.push([Recipe.Safety.Amulet]); // Craft Safety Amulet\n\t//Config.Recipes.push([Recipe.Safety.Ring]); // Craft Safety Ring\n\t//Config.Recipes.push([Recipe.Safety.Weapon, "Matriarchal Javelin"]); // Craft Safety Weapon\n\t//Config.Recipes.push([Recipe.Safety.Weapon, "Matriarchal Spear"]); // Craft Safety Weapon\n\n'})}),"\n",(0,t.jsxs)(i.p,{children:["The required status for crafted items should also be added in the pickit, like in ",(0,t.jsx)(i.a,{href:"https://github.com/blizzhackers/kolbot/blob/master/d2bs/kolbot/pickit/kolton.nip#L741-L771",children:"default lines 741-771 of kolton.nip"})]}),"\n",(0,t.jsxs)(i.p,{children:["If you wanna sell the crafted items, instead default dropping, check ",(0,t.jsx)(i.a,{href:"https://github.com/blizzhackers/documentation/blob/master/kolbot/MiscellaneousOptions.md/#sell-cubing-items",children:"https://github.com/blizzhackers/documentation/blob/master/kolbot/MiscellaneousOptions.md/#sell-cubing-items"})]}),"\n",(0,t.jsx)(i.h3,{id:"reroll-magicrare-items",children:"reroll magic/rare items"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-javascript",children:'\t// The gems not used by other recipes will be used for magic item rerolling.\n\n\t//Config.Recipes.push([Recipe.Reroll.Magic, "Diadem"]); // Reroll magic Diadem\n\t//Config.Recipes.push([Recipe.Reroll.Magic, "Grand Charm"]); // Reroll magic Grand Charm (ilvl 91+)\n\n\n\t// the cubing formula: 6 Perfect Skulls + 1 Rare Item = 1 random low quality rare item of the same type\n\t//Config.Recipes.push([Recipe.Reroll.Rare, "Diadem"]); // Reroll rare Diadem\n\n\n\t// the cubing formula: 1 Perfect Skull + 1 Rare Item + Stone of Jordan = 1 high quality new rare item of the same type\n\t//Config.Recipes.push([Recipe.Reroll.HighRare, "Diadem"]); // Reroll high rare Diadem\n'})}),"\n",(0,t.jsx)(i.h3,{id:"socketing",children:"socketing"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-javascript",children:'\t/* Base item for the following recipes must be in pickit. The rest of the ingredients will be auto-picked.\n\t * Use Roll.Eth, Roll.NonEth or Roll.All to determine what kind of base item to roll - ethereal, non-ethereal or all.\n\t */\n\t//Config.Recipes.push([Recipe.Socket.Weapon, "Thresher", Roll.Eth]); // Socket ethereal Thresher\n\t//Config.Recipes.push([Recipe.Socket.Weapon, "Cryptic Axe", Roll.Eth]); // Socket ethereal Cryptic Axe\n\t//Config.Recipes.push([Recipe.Socket.Armor, "Sacred Armor", Roll.Eth]); // Socket ethereal Sacred Armor\n\t//Config.Recipes.push([Recipe.Socket.Armor, "Archon Plate", Roll.Eth]); // Socket ethereal Archon Plate\n'})}),"\n",(0,t.jsx)(i.h3,{id:"unique-upgrades",children:"unique upgrades"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-javascript",children:'\t/* Base item for the following recipes must be in pickit. The rest of the ingredients will be auto-picked.\n\t * Use Roll.Eth, Roll.NonEth or Roll.All to determine what kind of base item to roll - ethereal, non-ethereal or all.\n\t */\n\n\t//Config.Recipes.push([Recipe.Unique.Armor.ToExceptional, "Heavy Gloves", Roll.NonEth]); // Upgrade Bloodfist to Exceptional\n\t//Config.Recipes.push([Recipe.Unique.Armor.ToExceptional, "Light Gauntlets", Roll.NonEth]); // Upgrade Magefist to Exceptional\n\t//Config.Recipes.push([Recipe.Unique.Armor.ToElite, "Sharkskin Gloves", Roll.NonEth]); // Upgrade Bloodfist or Grave Palm to Elite (ladder)\n\t//Config.Recipes.push([Recipe.Unique.Armor.ToElite, "Battle Gauntlets", Roll.NonEth]); // Upgrade Magefist or Lavagout to Elite (ladder)\n\t//Config.Recipes.push([Recipe.Unique.Armor.ToElite, "War Boots", Roll.NonEth]); // Upgrade Gore Rider to Elite (ladder)\n'})}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h2,{id:"runeword",children:"runeword"}),"\n",(0,t.jsx)(i.p,{children:"You should enable the making of runewords."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-javascript",children:'\t/* Runeword config. All recipes are available in Templates/Runewords.txt\n\t * Keep lines follow pickit format and any given runeword is tested vs ALL lines so you don\'t need to repeat them\n\t */\n\tConfig.MakeRunewords = true; // Set to true to enable runeword making/rerolling\n\n\tConfig.Runewords.push([Runeword.Insight, "Thresher", Roll.Eth]); // Make ethereal Insight Thresher\n\tConfig.Runewords.push([Runeword.Insight, "Cryptic Axe", Roll.Eth]); // Make ethereal Insight Cryptic Axe\n\t//Config.Runewords.push([Runeword.Insight, "Great Poleaxe"]); // Make Insight Great Poleaxe\n\t//Config.Runewords.push([Runeword.Insight, "Giant Thresher"]); // Make Insight Giant Thresher\n\tConfig.Runewords.push([Runeword.Insight, "Colossus Voulge"]); // Make Insight Colossus Voulge\n\tConfig.KeepRunewords.push("[type] == polearm # [meditationaura] == 17"); // medium Insight\n\t//Config.KeepRunewords.push("[type] == polearm # [meditationaura] == 17 && [enhanceddamage] >= 260 && [attackrate] >= 250"); // perfect Insight\n\n\tConfig.Runewords.push([Runeword.Grief, "Phase Blade"]); // Make Grief Phase Blade\t\n\t//Config.Runewords.push([Runeword.Grief, "Berserker Axe"]); // Make Grief Berserker Axe\t\n\tConfig.KeepRunewords.push("([type] == sword || [type] == axe) # [plusmaxdamage] >= 390"); // medium Grief\n\t//Config.KeepRunewords.push("([type] == sword || [type] == axe) # [itemfasterattackrate] >= 40 && [plusmaxdamage] >= 400"); // perfect Grief  and *optional [itempiercepois] >= 25\n\n\tConfig.Runewords.push([Runeword.CallToArms, "Crystal Sword"]); // Make CTA Crystal Sword\n\tConfig.Runewords.push([Runeword.CallToArms, "Phase Blade"]); // Make CTA Phase Blade\n\t//Config.Runewords.push([Runeword.CallToArms, "Flail"]); // Make CTA Flail\n\t//Config.KeepRunewords.push("[name] == crystalsword || [name] == phaseblade || [name] == flail # [plusskillbattlecommand] >= 3 && [plusskillbattleorders] >=3");\n\tConfig.KeepRunewords.push("[name] == crystalsword || [name] == phaseblade || [name] == flail # [plusskillbattlecommand] >= 6 && [plusskillbattleorders] >=6 && ["plusskillbattlecry"] >= 4"); // perfect CTA and *optional [enhanceddamage] = 290%\n\n\tConfig.Runewords.push([Runeword.Spirit, "Crystal Sword"]); // Make Spirit Crystal Sword\n\tConfig.Runewords.push([Runeword.Spirit, "Broad Sword"]); // Make Spirit Broad Sword\n\t//Config.Runewords.push([Runeword.Spirit, "Battle Sword"]); // Make Spirit Battle Sword\n\t//Config.Runewords.push([Runeword.Spirit, "Phase Blade"]); // Make Spirit Phase Blade\t\n\tConfig.Runewords.push([Runeword.Spirit, "Monarch", Roll.NonEth]); // Make Spirit Monarch\n\tConfig.Runewords.push([Runeword.Spirit, "Sacred Targe", Roll.NonEth]); // Make Spirit Sacred Targe\n\tConfig.Runewords.push([Runeword.Spirit, "Kurast Shield"]); // Make Spirit Kurast Shield\n\t//Config.Runewords.push([Runeword.Spirit, "Vortex Shield"]); // Make Spirit Vortex Shield\n\tConfig.KeepRunewords.push("[type] == sword || [type] == shield || [type] == auricshields # [fcr] == 35"); // middle spirit\n\t//Config.KeepRunewords.push("[type] == sword || [type] == shield || [type] == auricshields # [fcr] == 35") && [maxmana] >= 112 && [itemabsorbmagic] >=8; // perfect spirit\n\n\t//Config.Runewords.push([Runeword.Prudence, "Sacred Armor", Roll.Eth]); // Make ethereal Prudence Sacred Armor\n\t//Config.KeepRunewords.push("[type] == Armor # [enhanceddefense] == 170 && [fireresist] == 35");\n'})})]})}function u(e={}){const{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>r,a:()=>a});var t=n(7294);const o={},s=t.createContext(o);function a(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);