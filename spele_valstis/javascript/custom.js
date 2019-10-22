var valstis = Array('Austrija','Bulgārija','Horvātija','Latvija','Lielbritānija','Meksika','Norvēģija','Polija','Spānija','Vācija');

var pilsetas_pareizas = Array('Vīne','Sofija','Zagreba','Rīga','Londona','Mehiko','Oslo','Varšava','Madride','Berlīne');

var pilsetas_nepareizas = Array('Hamburga','Barselona','Liona','Neapole','Parīze','Krakova','Viļņa','Ļubļana','Bratislava');





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
//(ja būs 2 vienādi nosaukumi, tad mainīs uz Eindhovenu, Diseldorfu un random
//visiem 3 nevajag, jo viens nosaukums pēc tām tiks nomainīts uz pareizo)
if (pogas[0]===pogas[1] || pogas[0]===pogas[2] || pogas[1]===pogas[2]){
pogas[0] = 'Eindhovena';
pogas[1] = 'Diseldorfa';
pogas[2] = pogai_nepareizu_abildi();
}


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

    document.getElementById('karogs').src='img/'+valstis[jautajums_paslaik]+'.png';

    document.getElementById('punkti').innerHTML = 'Iegūtie punkti '+punkti;

    document.getElementById('jautajuma_nr').innerHTML = 'Jautājums '+(jautajums_paslaik+1)+' no 10'; //jautājuma nr parāda

    document.getElementById('teksts').innerHTML = jautajums_teksts; //jautājuma tekstu ieliek

    document.getElementById('atbilde_0').innerHTML = pogas[0];
    document.getElementById('atbilde_0').value     = pogas[0];
    document.getElementById('atbilde_0').onclick   = function() { parbaudit_atbildi( document.getElementById('atbilde_0').value ); };
    //
    document.getElementById('atbilde_1').innerHTML = pogas[1];
    document.getElementById('atbilde_1').value     = pogas[1];
    document.getElementById('atbilde_1').onclick   = function() { parbaudit_atbildi( document.getElementById('atbilde_1').value ); };
    //
    document.getElementById('atbilde_2').innerHTML = pogas[2];
    document.getElementById('atbilde_2').value     = pogas[2];
    document.getElementById('atbilde_2').onclick   = function() { parbaudit_atbildi( document.getElementById('atbilde_2').value ); };    

}


















function parbaudit_atbildi(pilseta) //(šo izsauc kad nospiež pogu)
{
    console.log( 'parbaudit_atbildi('+pilseta+')' );

    if( pilseta == pilsetas_pareizas[jautajums_paslaik] ) //parbaudam vai pareiza atbilde
    {
        alert('Pareizi');
        punkti++; /************/ console.log('punkti='+punkti);
    }
    else
    {
        alert('Nepareizi');
    }


    nakamais_jautajums();

}














function nakamais_jautajums() //sagatavo nākamā jautājuma rādīšanai
{
/*
---jautajums_paslaik + 1

---izsauc izveleties_tekstus() (sāk no sākuma nāk. jautājumam likt visu)

---if jautajums_paslaik==10 (spēles beigas)
------atver lapu spele_valstis_rezultati.html#7
      (adrese beigās pieliek punktu skaitu, tā rezultātu lapa zin cik punkti)*/

      jautajums_paslaik++; /***********/ console.log('jautajums_paslaik='+jautajums_paslaik);


      if( jautajums_paslaik >= 10 ) //jautajumi beigušies
      {
        window.location = 'spele_valstis_rezultati.html#'+punkti;
      }
      else //vēl nav pēdējais jautājums
      {
        izveleties_tekstus();
      }
      


}












function pogai_nepareizu_abildi() //(iedod nepareizu atbildi ko rādīt pogā)
{
/*
no masīva 'pilsetas_nepareizas' izvēlas 
random vienu pilsētu un to atgriež (return)*/
    nepareizu_atbilzu_skaits = pilsetas_nepareizas.length;

    rand_nr = Math.floor(Math.random() * nepareizu_atbilzu_skaits);

    return pilsetas_nepareizas[rand_nr];

}




