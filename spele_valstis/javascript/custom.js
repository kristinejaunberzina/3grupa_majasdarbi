var valstis = Array('valsts1','valsts2','valsts3','valsts4','valsts5');

var pilsetas_pareizas = Array('pilseta1','pilseta2','pilseta3','pilseta4','pilseta5');

var pilsetas_nepareizas = Array('nepareiz_pilset1','nepareiz_pilset2','nepareiz_pilset3','nepareiz_pilset4');





var jautajums_paslaik = 0; //kurš jautājums pašlaik tiek atbildēts (0 lidz 9)

var punkti = 0;








function izveleties_tekstus() //funkcija sagatavo tekstus jautājumam un pogām)
{

var jautajums_teksts = 'Kāda ir galvaspilsēta '+valstis[jautajums_paslaik]+'?'; /*(IELIEK PAŠREIZĒJĀ JAUTĀJUMA VALSTI) galvaspilstēta?*/ console.log('jautajums_teksts='+jautajums_teksts);

var pogas = Array(); //(saturēs tekstus kas pogās jāliek)

//(sākumā katrai pogai nepareizu atbildi)
//(zemāk vienai pareizu ieliks)
pogas[0] = pogai_nepareizu_abildi();
pogas[1] = pogai_nepareizu_abildi();
pogas[2] = pogai_nepareizu_abildi();


//(izvēlas kurā no pogām likt pareizo atbildi, pirmajā, otrajā vai trešajā)
var pogas_nr_pareiza = Math.floor(Math.random() * 3); //random cipars 0 lidz 2



//masīvā 'pogas' pie izvēlētā cipara ieliek pareizo atbildi
pogas[pogas_nr_pareiza] = pilsetas_pareizas[jautajums_paslaik]; /**********/ console.log('pogas='); console.log(pogas);


//nākamā funkcija ieliks jaut un pogas html
ielikt_tekstus_html(jautajums_teksts, pogas);

}













function ielikt_tekstus_html(jautajums_teksts, pogas) //(saliek tekstus reāli lapā)
{
/*
---ieliek html lapā pareizajās vietas tekstus
---nomaina karoga bildi (karog bildes img mapē ar valstu nosaukumiem piem: Norvēģija.jpg)

---katrai pogai pieliek ka klikšķinot izsauc funkciju 'parbaudit_atbildi( pilseta )'*/
}











function parbaudit_atbildi(pilseta) //(šo izsauc kad nospiež pogu)
{
/*
---if 'pilseta' == 'pilsetas_pareizas'(pašreizējo)
   ja pašreizējā pareizā pilsēta ir vienāda ar uzspiesto pilsētu tad +1 punkts
--------punkti+1
--------parādam ziņu spēlētājam alert(Pareizi)

---else (ja nav pareiza atbilde)
--------parādam ziņu spēlētājam alert(Nepareizi)


---izsauc nakamais_jautajums()*/

}





function nakamais_jautajums() //(parāda nākamo jautājum)
{
/*
---jautajums_paslaik + 1

---izsauc izveleties_tekstus() (sāk no sākuma nāk. jautājumam likt visu)

---if jautajums_paslaik==10 (spēles beigas)
------atver lapu spele_valstis_rezultati.html#7
      (adrese beigās pieliek punktu skaitu, tā rezultātu lapa zin cik punkti)*/

}




function pogai_nepareizu_abildi() //(iedod nepareizu atbildi ko rādīt pogā)
{
/*
no masīva 'pilsetas_nepareizas' izvēlas 
random vienu pilsētu un to atgriež (return)*/
}




