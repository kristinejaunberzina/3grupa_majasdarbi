

    //iegūstam spēlētāja vārdu
    var vards = prompt("Ievadet savu vārdu", "Tālis");

    //iegūstam punktus
    punkti = window.location.hash;
    punkti = punkti.substr(1, 2);

    //http request objekti kas darīs komunikāciju ar repl.it
    var xhr = new XMLHttpRequest();//rezultātu saņemšanai
    var xhr2 = new XMLHttpRequest();//nosūtīšanai


    //rezultātu ierakstīšana
    xhr2.open('GET', 'https://rezultati-spelei.armandspucs.repl.co/valstis?vards='+vards+'&punkti='+punkti, true);
    xhr2.send();

    
    confirm("Jūsu rezultāts ir saglabāts!");


    //rezultātu iegūšana zemāk
    
    function rezultatus_iegut()
    {
    xhr.open('GET', "https://rezultati-spelei.armandspucs.repl.co/valstis", true);
    xhr.send();
    
    //kad kaut kas iegūts no repl.it izsauc rezultatus_paradit(e) 
    xhr.addEventListener("readystatechange", rezultatus_paradit, false);
    }


    rezultatus_iegut();
    
    
    function rezultatus_paradit(e) { //e = info no repl.it server
        if (xhr.readyState == 4 && xhr.status == 200) { //ja vispār kaut kas saņemts
            
            //rezultatus pārvērš JSON objektā
            var rezultati = JSON.parse(xhr.responseText);

            //visu liksim DIV
            var rezultati_div = document.getElementById('rezultati');
            rezultati_div.innerHTML = 'Spēles rezultāti:';

            //loop rezultatus lai var parādīt lapā
            for (i = 0; i < rezultati['rezultati'].length; i++) 
            {
                //liekam iekšā DIV
                rezultati_div.innerHTML = rezultati_div.innerHTML + rezultati['rezultati'][i]['vards'];
                rezultati_div.innerHTML = rezultati_div.innerHTML + ' ';
                rezultati_div.innerHTML = rezultati_div.innerHTML + rezultati['rezultati'][i]['punkti'];
                rezultati_div.innerHTML = rezultati_div.innerHTML + ' ';
            }

        }
    }
    //////////////////////////////////////////
    //beidzas rezultātu iegūšana

  
