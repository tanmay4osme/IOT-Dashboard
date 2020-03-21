# Bugs

## T5.5

Wat wel eigenaardig is, is dat bij deze setup de data niet binnenkomt zoals ze gestuurd is bv. je stuurt 5 waardes: 10,20,30,40,50 dan zal je op de server zien dat de data binnenkomt als volgt 10,20,40,30,50.

Wat ik ook gemerkt heb is dat wanneer je een grote hoop data ineens stuurt, eg. 1000 waardes
dat er maar 977 waardes in de DB geschreven worden.

Het kan zijn dat dit komt omdat ik niet async / await gebruik. Maar ik ga nu eerst nog mqtt en andere db implementere zodat we kunnen testen en een uiteindelijke beslissing maken.
