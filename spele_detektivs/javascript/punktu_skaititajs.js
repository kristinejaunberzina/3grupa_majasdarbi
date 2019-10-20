var punkti = 0;

function pieskaitit_punktus(nr)
{
    punkti = punkti+nr;
    console.log(punkti);

    paradit_punktus();
}






function nakamais_skats(link)
{
    window.location = link+window.location.hash
}








function paradit_punktus()
{
    document.getElementById('punkti').innerHTML = 'Punkti:'+punkti;
    window.location.hash = '#'+punkti;
}








function sakt_skaitit_punktus()
{
    if( window.location.hash )
    {
        punkti = window.location.hash;
        punkti = punkti.substr(1, 2); /**********/ console.log('punkti='+punkti);
        punkti = parseInt(punkti, 10);
    }


    paradit_punktus();

}