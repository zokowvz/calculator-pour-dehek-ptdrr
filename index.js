cls = console.clear();
const rs = require('readline-sync')
const sr = require('sync-request')
const fs = require('fs')
const chalk = require("chalk")
const { exit } = require('process')
const { exec, spawn, ChildProcess } = require('child_process')
const logfile = require("./log/log.txt")
const { writeFile, read } = require("fs")  
lightgen = "discord.gg/lightgen"
let pseudo = rs.question("Quel est votre pseudo ?\n" + chalk.red("> "))
console.clear();
console.log(chalk.green("     _________        .__               .__          __                "))
console.log(chalk.green("     \_   ___ \_____  |  |   ____  __ __|  | _____ _/  |_  ___________ "))
console.log(chalk.green("     /    \  \/\__  \ |  | _/ ___\|  |  \  | \__  \\   __\/  _ \_  __ \ "))
console.log(chalk.green("     \     \____/ __ \|  |_\  \___|  |  /  |__/ __ \|  | (  <_> )  | \/"))
console.log(chalk.green("      \______  (____  /____/\___  >____/|____(____  /__|  \____/|__|"))   
console.log(chalk.green("             \/     \/          \/                \/               "))             
menu = "\n[1] addition\n[2] soustraction\n[3] multiplication \n[4] division\n[5] crédits\n[6] jeux\n[7] quitter"
if (pseudo == "zokow") {
  console.log("                  cc mgars t'as intêret a bien bosser")
}else console.log("              Bienvenue " + pseudo + " sur la version" + chalk.green(" [BETA]"))
console.log(menu)
let choix = rs.question("Quel option voulez-vous utiliser ?\n" + chalk.grey("\n[" + "Calculator" + "]$ "))
if(choix == "1"){
  // PAS ENCORE FINI ADDITION !!!
  console.clear(); 
  console.log(chalk.green("     _________        .__               .__          __                "))
console.log(chalk.green("     \_   ___ \_____  |  |   ____  __ __|  | _____ _/  |_  ___________ "))
console.log(chalk.green("     /    \  \/\__  \ |  | _/ ___\|  |  \  | \__  \\   __\/  _ \_  __ \ "))
console.log(chalk.green("     \     \____/ __ \|  |_\  \___|  |  /  |__/ __ \|  | (  <_> )  | \/"))
console.log(chalk.green("      \______  (____  /____/\___  >____/|____(____  /__|  \____/|__|"))   
console.log(chalk.green("             \/     \/          \/                \/               "))
console.log("                 - Addition -")

  let addinumber1 = rs.question('1er nombre\n ' + chalk.red("> ")) 
  let addinumber2 = rs.question('2eme nombre \n ' + chalk.red('> '))
  let addiresult = parseInt(addinumber1) + parseInt(addinumber2)
console.log(addiresult)
  cls
 console.log("Le resultat est " + chalk.blue(addiresult))
}
if(choix == "2"){
  console.clear(); 
  console.log(chalk.green("     _________        .__               .__          __                "))
console.log(chalk.green("     \_   ___ \_____  |  |   ____  __ __|  | _____ _/  |_  ___________ "))
console.log(chalk.green("     /    \  \/\__  \ |  | _/ ___\|  |  \  | \__  \\   __\/  _ \_  __ \ "))
console.log(chalk.green("     \     \____/ __ \|  |_\  \___|  |  /  |__/ __ \|  | (  <_> )  | \/"))
console.log(chalk.green("      \______  (____  /____/\___  >____/|____(____  /__|  \____/|__|"))   
console.log(chalk.green("             \/     \/          \/                \/               "))
console.log("                 - Multiplication -")
  let soustranumber1 = rs.question('1er nombre\n ' + chalk.red("> ")) 
  let soustranumber2 = rs.question('2eme nombre \n ' + chalk.red('> '))
  let soustraresult = soustranumber1 - soustranumber2
  console.log("Le resultat est " + chalk.blue(soustraresult))
  if(Number.NaN = soustraresult){
  }else(console.log(chalk.grey("poto faut mettre des chiffres")));
  const soustradata = new Uint8Array(Buffer.from("--------SOUSTRACTION--------" + "\npseudo -> " + pseudo + '\ncalcul -> ' + soustranumber1 + " - " + soustranumber2 + "\nresultat ->" + soustraresult));
  writeFile('log.txt', soustradata, (err) => {
    console.log(chalk.red("[+] ") + "Les Logs Calculs ont bien été save.");  
  })
  let soustraquitter = rs.question('Voulez vous quitter ?[o/n]' + chalk.red('\n> '))

   if(soustraquitter == "o"){
    const soustradata = new Uint8Array(Buffer.from("--------SOUSTRACTION--------" + "\npseudo -> " + pseudo + '\ncalcul -> ' + multinumber1 + " - " + multinumber2 + "\nresultat ->" + multiresult));
    writeFile('log.txt', soustradata, (err) => {
      console.log(chalk.red("[+] ") + "Les Logs Calculs ont bien été save.");  
  
    })
     process.exit()
     
   }
   if(soustraquitter == "n"){
    const soustradata = new Uint8Array(Buffer.from("--------SOUSTRACTION--------" + "\npseudo -> " + pseudo + '\ncalcul -> ' + multinumber1 + " - " + multinumber2 + "\nresultat ->" + multiresult));
    writeFile('log.txt', soustradata, (err) => {
      console.log(chalk.red("[+] ") + "Les Logs Calculs ont bien été save.");   
    })
     console.log(chalk.grey("Retour au menu ..."))
     process.exit();
     exec('"node" .');
    
    }
}
if(choix == "3"){
  console.clear(); 
  console.log(chalk.green("     _________        .__               .__          __                "))
console.log(chalk.green("     \_   ___ \_____  |  |   ____  __ __|  | _____ _/  |_  ___________ "))
console.log(chalk.green("     /    \  \/\__  \ |  | _/ ___\|  |  \  | \__  \\   __\/  _ \_  __ \ "))
console.log(chalk.green("     \     \____/ __ \|  |_\  \___|  |  /  |__/ __ \|  | (  <_> )  | \/"))
console.log(chalk.green("      \______  (____  /____/\___  >____/|____(____  /__|  \____/|__|"))   
console.log(chalk.green("             \/     \/          \/                \/               "))
console.log("                 - Multiplication -")
  let multinumber1 = rs.question('1er nombre\n ' + chalk.red("> ")) 
  let multinumber2 = rs.question('2eme nombre \n ' + chalk.red('> '))
  let multiresult = multinumber1 * multinumber2
  console.log("Le resultat est " + chalk.blue(multiresult))
  if(Number.NaN = multiresult){
  }else(console.log(chalk.grey("poto faut mettre des chiffres")));
  const multidata = new Uint8Array(Buffer.from("--------MULTIPLICATION--------" + "\npseudo -> " + pseudo + '\ncalcul -> ' + multinumber1 + " x " + multinumber2 + "\nresultat ->" + multiresult));
  writeFile('log.txt', multidata, (err) => {
    console.log(chalk.red("[+] ") + "Les Logs Calculs ont bien été save.");  
  })

 let multiquitter = rs.question('Voulez vous quitter ?[o/n]' + chalk.red('\n> '))
 
 if(multiquitter == "o"){
  const multidata = new Uint8Array(Buffer.from("--------MULTIPLICATION--------" + "\npseudo -> " + pseudo + '\ncalcul -> ' + multinumber1 + " x " + multinumber2 + "\nresultat ->" + multiresult));
  writeFile('log.txt', multidata, (err) => {
    console.log(chalk.red("[+] ") + "Les Logs Calculs ont bien été save.");  

  })
   process.exit()
   
 }
 if(multiquitter == "n"){
  const multidata = new Uint8Array(Buffer.from("--------MULTIPLICATION--------" + "\npseudo -> " + pseudo + '\ncalcul -> ' + multinumber1 + " x " + multinumber2 + "\nresultat ->" + multiresult));
  writeFile('log.txt', multidata, (err) => {
    console.log(chalk.red("[+] ") + "Les Logs Calculs ont bien été save.");  
  })
   console.log(chalk.grey("Retour au menu ..."))
   exec('"node" .');
  
  }
}

 if(choix == "5"){
   console.clear();
   if(pseudo == "zokow"){
    console.log(chalk.green("       _________        .__               .__          __                "))
    console.log(chalk.green("       \_   ___ \_____  |  |   ____  __ __|  | _____ _/  |_  ___________ "))
    console.log(chalk.green("       /    \  \/\__  \ |  | _/ ___\|  |  \  | \__  \\   __\/  _ \_  __ \ "))
    console.log(chalk.green("       \     \____/ __ \|  |_\  \___|  |  /  |__/ __ \|  | (  <_> )  | \/"))
    console.log(chalk.green("        \______  (____  /____/\___  >____/|____(____  /__|  \____/|__|"))   
    console.log(chalk.green("               \/     \/          \/                \/               "))
    console.log("                   - Crédits -")
    console.log("                                 \n                 ba tu veux que j'te dise quoi PTDRRR")
    
   }
   if(pseudo !== "zokow"){
   console.log(chalk.green("       _________        .__               .__          __                "))
   console.log(chalk.green("       \_   ___ \_____  |  |   ____  __ __|  | _____ _/  |_  ___________ "))
   console.log(chalk.green("       /    \  \/\__  \ |  | _/ ___\|  |  \  | \__  \\   __\/  _ \_  __ \ "))
   console.log(chalk.green("       \     \____/ __ \|  |_\  \___|  |  /  |__/ __ \|  | (  <_> )  | \/"))
   console.log(chalk.green("        \______  (____  /____/\___  >____/|____(____  /__|  \____/|__|"))   
   console.log(chalk.green("               \/     \/          \/                \/               "))
   console.log("                   - Crédits -")
   console.log("                                 \n                  by zokow parce que je n'ai rien à faire.")
   console.log("\n\n               merci a toi, " + chalk.blue(pseudo) + " d'utiliser la meilleur calculette au monde.")
  }
 }

   if(choix == "secret"){
     let secret = rs.question("pass ?" + chalk.red("\n"),
     {
       hideEchoBack: true
     })
     if(pseudo == "zokow"){
       if (secret == "Zokowtest"){
         console.log("o'calme")
         
       }
     }
 }

if(choix == "4"){
   
   console.clear();
   console.log(chalk.green("       _________        .__               .__          __                "))
   console.log(chalk.green("       \_   ___ \_____  |  |   ____  __ __|  | _____ _/  |_  ___________ "))
   console.log(chalk.green("       /    \  \/\__  \ |  | _/ ___\|  |  \  | \__  \\   __\/  _ \_  __ \ "))
   console.log(chalk.green("       \     \____/ __ \|  |_\  \___|  |  /  |__/ __ \|  | (  <_> )  | \/"))
   console.log(chalk.green("        \______  (____  /____/\___  >____/|____(____  /__|  \____/|__|"))   
   console.log(chalk.green("               \/     \/          \/                \/               "))
   console.log("                   - Division -")
   

   let divi1 = rs.question("1er chiffre/nombre" + chalk.red("\n>"))
   let divi2 = rs.question("2eme chiffre/nombre" + chalk.red("\n>"))
   let diviresult = divi1 / divi2
   
   if(Number.NaN = diviresult){
    console.log(chalk.grey("Le resultat est " + diviresult));
  }else(console.log(chalk.grey("poto faut mettre des chiffres")));
   const dividata = new Uint8Array(Buffer.from("--------Division--------" + "\npseudo -> " + pseudo + '\ncalcul -> ' + divi1 + " x " + divi2 + "\nresultat ->" + diviresult));
  writeFile('log.txt', dividata, (err) => {
    console.log(chalk.red("\n[+] ") + "Les Logs Calculs ont bien été save.");
  })
   let diviquitter = rs.question("Voulez vous quitter ? [o/n]" + chalk.red("\n>"))
  if(diviquitter == "o"){
   console.log("A la prochaine !")
   process.exit()
  }else;
    if(diviquitter = "n"){
    let oaa = chalk.grey("ok alors attends")
    console.log(oaa) // oui je n'ai rien à faire ...
    const controller = new AbortController();
    const { signal } = controller;
    const child = exec('node .', { signal }, (error) => {
      console.log(error);
    });
    controller.abort();
  }

}

if(choix == "7"){
  let evvsrdequitter = rs.question('Etes-vous vraiment sur de vouloir quitter ? [o/n]' + chalk.grey('\n>'))
       if(evvsrdequitter == "o"){
         console.clear();
         console.log(chalk.green("       _________        .__               .__          __                "))
         console.log(chalk.green("       \_   ___ \_____  |  |   ____  __ __|  | _____ _/  |_  ___________ "))
         console.log(chalk.green("       /    \  \/\__  \ |  | _/ ___\|  |  \  | \__  \\   __\/  _ \_  __ \ "))
         console.log(chalk.green("       \     \____/ __ \|  |_\  \___|  |  /  |__/ __ \|  | (  <_> )  | \/"))
         console.log(chalk.green("        \______  (____  /____/\___  >____/|____(____  /__|  \____/|__|"))   
         console.log(chalk.green("               \/     \/          \/                \/               "))
         console.log("                   - Exit -")
         console.log("\n\nA la prochaine, " + chalk.grey(pseudo) + "!")
       }
       if(evvsrdequitter =="n")
       console.log("ok, alors attends un petit peu mon frere")

}


if(choix == "6"){ // bon le bail c'est une calculette ou ?...
  console.clear();

  menujeux = "[1] Devinette\n[2] T-Rex\n[3] Questions/Reponses"
  console.log(chalk.grey(menujeux))
  let game = rs.question('\nA quel jeux voulez-vous jouer ?' + chalk.grey("\n> "))
  
  if(game == '1'){
    console.clear();
    console.log("soon...")
  }
  if(game == "2"){
  console.clear();
  console.log("soon...")
  }
  // bon bah, tant qu'on y est ...
  if(game == "3"){   
   console.clear();
   
   let rapfrorus = rs.question("Tu preferes le rap" + chalk.grey(" fr") + " ou le rap" + chalk.grey(" us") + " ?" + chalk.red('\n> '))
   let grecortacos = rs.question("Tu preferes manger un" + chalk.grey(" grec") + " ou un " + chalk.grey(" tacos") + " ?" + chalk.red('\n> '))
   let tunisieorfrance = rs.question("Tu preferes la" + chalk.grey(" Tunisie") + " ou la" + chalk.grey(" France") + " ?" + chalk.red('\n> '))
   console.log(chalk.grey("Je resume : " + '\n\n[Tu preferes le rap fr ou us ?]' + "\nréponse : "+ rapfrorus))
   console.log(chalk.grey('\n[Tu preferes manger un grec ou un tacos ?]' + "\nréponse : "+ grecortacos))
   console.log(chalk.grey("\n[Tu preferes la tunisie ou la france ?]" + "\nréponse : "+ tunisieorfrance))
   let estcevraimentca = rs.question("\nEst-ce vraiment les reponses que tu souhaites entrer ?] [o/n]" + chalk.grey("\n> "))
   if(estcevraimentca == "o"){
     console.log("\n ok, attends deux secondes je vérifie les réponses ...")
     console.clear();
     if(rapfrorus == "fr"){
      console.log(chalk.grey("Q1:") + " Bien joue mon frere t'as raison, rap fr > us")
     }   
      if(rapfrorus == "us"){
        console.log(chalk.grey("Q1:") + " eh poto rap fr > us PTDR")
      }
      if(grecortacos == "grec"){
        console.log(chalk.grey("Q2:") + " ptdr wlh un grec et tu prends 50 kilos le boug grossit plus que quand je joue a lol, fin bref t'as faux AHAH.")
      }
      if(grecortacos == 'tacos'){
        console.log(chalk.grey("Q2:") + " Oui voila on est d'accord")
      }
      if(tunisieorfrance == "tunisie"){
        console.log(chalk.grey("Q3:") + " je v te marier toi, alors la je dis oui, oui, OUI !")
      }
      if(tunisieorfrance == "france"){
         console.log(chalk.grey("Q3:") + " et puis quoi encore...")
       }
      
   }
  if(estcevraimentca == "n"){
   console.clear();
   console.log("cette fois ci, reflechis BIEN avant de repondre.")
   let rapfrorus2 = rs.question("Tu preferes le rap" + chalk.grey(" fr") + " ou le rap" + chalk.grey(" us") + " ?" + chalk.red('\n> '))
   let grecortacos2 = rs.question("Tu preferes manger un" + chalk.grey(" grec") + " ou un " + chalk.grey(" tacos") + " ?" + chalk.red('\n> '))
   let tunisieorfrance2 = rs.question("Tu preferes la" + chalk.grey(" Tunisie") + " ou la" + chalk.grey(" France") + " ?" + chalk.red('\n> '))
   console.log(chalk.grey("Je resume : " + '\n\n[Tu preferes le rap fr ou us ?]' + "\nréponse : "+ rapfrorus2))
   console.log(chalk.grey('\n[Tu preferes manger un grec ou un tacos ?]' + "\nréponse : "+ grecortacos2))
   console.log(chalk.grey("\n[Tu preferes la Tunisie ou la France ?]" + "\nréponse : "+ tunisieorfrance2))
   let estcevraimentca2 = rs.question("\nEst-ce vraiment les reponses que tu souhaites entrer ?] [o/n]" + chalk.grey("\n> "))
    if(estcevraimentca2 == "o"){
      console.log("\n ok, attends deux secondes je vérifie les réponses ...")
      console.clear();
      if(rapfrorus == "fr"){
       console.log(chalk.grey("Q1:") + " Bien joue mon frere t'as raison, rap fr > us")
      }   
       if(rapfrorus2 == "us"){
         console.log(chalk.grey("Q1:") + " eh poto rap fr > us PTDR")
       }
       if(grecortacos2 == "grec"){
         console.log(chalk.grey("Q2:") + " ptdr wlh un grec et tu prends 50 kilos le boug grossit plus que quand je joue a lol, fin bref t'as faux AHAH.")
       }
       if(grecortacos2 == 'tacos'){
         console.log(chalk.grey("Q2:") + " Oui voila on est d'accord")
       }
       if(tunisieorfrance2 == "tunisie"){
         console.log(chalk.grey("Q3:") + " je v te marier toi, alors la je dis oui, oui, OUI !")
       }
       if(tunisieorfrance2 == "france"){
          console.log(chalk.grey("Q3:") + " et puis quoi encore...")
        }
    }
       
   else
   if(estcevraimentca !== "o"){
     console.log("\nalors la jm'en ouf j'te repose pas les questions deux fois, bizou et bonne journee.")
     process.exit();
     
   } 
  

  }
 }
}
 // -------------------------------------------------------------

 // ca me fûme tout ca pour un console.log(Number(1+2)) wlh 😂😂
 
 // -------------------------------------------------------------
