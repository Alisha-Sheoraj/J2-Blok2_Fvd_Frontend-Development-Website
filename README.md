# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Alisha Sheorajpanday

  #### Je startniveau:
  Rood

  #### Je focus:
  Surface Plain
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  https://magicspoon.com/
  https://magicspoon.com/products/double-chocolate-pack-16-cereal-treats-4-boxes

  #### Screenshot(s) van de eerste pagina (small screen): 
  Homepage mobiel
  <img src="readme-images/homepagina-buildiy-mobiel.jpg" width="375px" alt="Een screenshot van de landingspagina/homepage op mobiel format">

  Homepage web
  <img src="readme-images/homepagina-buildiy-web.png" width="375px" alt="Een screenshot van een gedeelte van de Magic Spoon landingspagina/homepage op laptop format">


  #### Screenshot(s) van de tweede pagina (small screen):
  Detailpagina mobiel 
  <img src="readme-images/detailpagina-buildiy-mobiel.jpg" width="375px" alt="Een screenshot van de detailpagina voor een granola bar, op mobiel format">

  Detailpagina web 
  <img src="readme-images/detailpagina-buildiy-web.png" width="375px" alt="Een screenshot van een gedeelte van de detailpagina van een granola bar, op laptop format">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  -Screenreader test op de Magic Spoon home pagina & detail pagina.

  Bij het gebruiken van mijn ingebouwde screenreader, op de home pagina merkte ik dat de volgorde en de content van de website best goed te volgen is.

  Het wordt, door de screenreader, op een logische volgorde per sectie verteld met extra info die voor een gebruiker handig is om te weten. 

  Zo word in de navigatie niet alleen verschillende opties verteld maar er word ook bij gezegd of het een koppeling is en of er een dropdown aan vastzit. Alleen het log werd beschreven als ee  afbeelding inplaats van een logo van Magic Spoon.

  Hoe verder je de site doorloopt kom je ook bij bepaalde secties dingen tegen waarbij de screenreader aangeeft dat wat het nu voorleest een "kopje 1" is. Ik weet niet zeker of dat geberuikelijk is of of dat iets is wat de pragrameurs erin hebben gezet voor hunzelf. Het is niet een super vak technische term maar om dat elke keer te horen leek me wel wat irritant.

  De gehele pagina bevat wel veel content wat wel vermoeiend kan worden als je naar de beschrijving van al deze verschillende dingen moet luisteren.

  Voor de rest is alles, voor zowel de home als detail pagina, prima opgedeeld en goed te volgen.



  -WCAG Bevindingen 
  Home pagina
    Volgens de WCAG is het grootste probleem van de site en de reden dat het waarschijnlijk niet voldoet aan de eisen, dat het kleurcontrast tussen de tekst en achtergronds kleuren niet voldoen aan de "WCAG 2 AA-minimumdrempels". Dit zorgt ervoor dat tekst leesbaar is voor alle gebruikers, inclusief mensen met visuele beperk, maar omdat de site zoveel verschillende gradients gebruikt met velle kleuren kan het onrustig of zelfs onleesbaar overkomen omdat de tekst dan wegvalt door zo een drukke achtergrond.

    Verder zijn er nog een paar buttons die een aria-label konden gebruiken. Zoals de button die ze gebruiken voor het hamburger menu. Er staat nu geen aria-label, terwijl ze die wel gebruiken bij andere buttons. Er staat ook geen tekst in de button zelf alleen "hr, hr".

    Er staan ook dingen in hun HTML die nergens op de site terug te vinden zijn. Is waarschijnlijk voor een CSS of JS functie ofzo.
    
  Detail pagina
    Bij de detail pagina heb je ook content die in hun HTML die nergens op de site staat. Verder heb je een aantal normale images die geen alt tekst hebben en ook geen alt tag.

    Er staan een aantal foutmeldingen in de pagina zelf, als je die hulp voor ontwikkelaars aanzet. De foutmeldingen komen neer op dit: "Elementen met bepaalde ARIA-rollen moeten zich binnen de juiste bovenliggende rollen bevinden. Controleer of alle vereiste ouderelementen aanwezig zijn.".

    Ten slot ook hier heb je dat slechte contrast tussen achtergrond en tekst, maar wel veel minder dan op de homepagina. 

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/BreakdownSchets-homepagina-uitgezoomd.png" width="375px" alt="breakdown van de home hele pagina">
  <img src="readme-images/BreakdownSchets-detailpagina-uitgezoomd.png" width="375px" alt="breakdown van de detail hele pagina">

  ### dynamisch deel homepagina (bijv menu): 
  <img src="readme-images/BreakdownSchets-homepagina-ingezoomd1.png" width="375px" alt="breakdown van een dynamisch deel">

  ### wellicht nog een dynamisch deel detailpagina (bijv filter): 
  <img src="readme-images/BreakdownSchets-detailpagina-ingezoomd1.png" width="375px" alt="breakdown van nog een dynamisch deel">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Ik ben goed up to date en de code ziet er prima uit.


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  Volgens de student assistent ziet alles er goed uit qua de code en opmaak daarvan. Er werd wel opgemerkt dat ik mijn ReadMe beter up to date moet houden. Hij was wel redelijk up to date maar ik miste die WGAG checklist en mijn bevindingen daaruit had ik nogniet in genoteerd.

  Verder had ik wel een aantal tips gekregen voor betere toegankelijkheid:
  - Sections better benoemen
  - Alle section moeten heading hebben
  - Cards heading eerst en in css switchen met flex voor toegankelijkheid
  - Button voor screenreader met ::focus maken waarmee mesnen bijv. nav kunnen skippen

  De meeting verliep snel en was wel nuttig en interessant.

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  De meeting verliep goed. Ik heb conformatie gekregen dat ik goed opweg ben. Zowel met de ReadMe als met de code. Ik had wel een vraag over mn carousel. Ondanks dat we de oplossing niet direct hebben kunnen vinden heb ik wel wat goede mogelijke oplossingen meegekregen waar ik mee aan de gang kan gaan.


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  Volgens Ivo ziet alles er, tot nu toe, goed uit qua de code (HTML & CSS) en alle classes en div die erin staan (het is te snappen waarom die nodig zijn en de hoeveelheid die ik gebruik is heel goed/redelijk).

  Verder had ik wel een aantal tips gekregen voor het verbeteren van mijn carousel en de nav class die ik gebruik. :
  - Carrousel fixen 2 mogelijke manieren
  - 1.Overlay-x op ul inplaats van container van ul
  - 2.First of type en last of type
  - Testemonials kan misschien in een ul inplaats van alle divs. (Als het kan)
  - Nav en nav class (overlay) benaming misschien veranderen.

  De meeting was wel nuttig en interessant.

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Ik heb mijn website getest met een screenreader om te kijken hoe goed deze te gebruiken is voor mensen qua toegankelijkheid. Uit deze test kwamen een paar belangrijke punten naar voren, zowel verbeterpunten als dingen die juist al goed gaan.

  Een van de belangrijkste minpunten is dat niet alle onderdelen met scrollbare content, bijv. die carrousels, goed te bereiken/besturen zijn met alleen het toetsenbord. Voor mensen die geen muis gebruiken is het heel belangrijk dat ze met de tabtoets overal naartoe kunnen. Bij sommige scrollbare delen lukt dat nu niet goed, waardoor gebruikers die afhankelijk zijn van een toetsenbord of screenreader mogelijk niet alle content kunnen gebruiken. Dit is dus iets dat nog verbeterd moet worden.

  Ook werd gekeken naar het contrast tussen tekst en achtergrond. Hierbij moet de tekst goed leesbaar zijn tegen de achtergrond, vooral voor mensen met een visuele beperking. Deze opmerking was eigenlijk verwacht, omdat de originele website die ik moest namaken hier al rekening mee hield. Dit onderdeel is dus in principe gewoon goed op mijn website.

  Wat mij verrassend positief opviel, is dat de hiërarchie van mijn headings (van h1 tot en met h5) goed wordt opgepakt door de screenreader. De structuur van de pagina klopt en de volgorde waarin de content wordt voorgelezen is logisch. Dit maakt de website een stuk fijner om te gebruiken voor mensen die luisteren in plaats van kijken, en dat had ik eerlijk gezegd niet helemaal verwacht.

  Eén duidelijk minpunt is dat de nav overlay (het hamburgermenu) wordt voorgelezen terwijl deze eigenlijk gesloten is. Dat kan verwarrend zijn voor gebruikers, omdat zij menu-opties horen die op dat moment niet zichtbaar zijn. Dit is iets wat ik technisch gezien nog had moeten oplossen, maar door tijdgebrek is dat helaas niet meer gelukt.

  Al met al vond ik het testen met een screenreader erg leerzaam. Het laat goed zien hoe belangrijk kleine technische keuzes zijn voor de toegankelijkheid van een website, en waar ik in de toekomst beter op moet letten.

  Qua WCAG is het enige probleem dat met het kleuren contrast wat te verwachten was.

  Bevindingen:
  1. Scrollbare content niet altijd toetsenbord-toegankelijk
  2. Navigatie-overlay wordt voorgelezen terwijl deze dicht is
  3. Toetsenbordnavigatie kan op sommige plekken beter
  4. Interactieve elementen nog niet overal optimaal toegankelijk
</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  De meeting verliep goed. Ik heb conformatie gekregen dat ik goed opweg ben. Zowel met de ReadMe als met de code. Ik had een paar vragen over wat wel en niet geld als een extra surface plain item. Ik heb het zowle aan Ivo als de student assistenten kunnen vragen en kreeg te horen dat alles wat ik geselecteerd had van de og site om te maken prima was om te maken voor de surface plain.


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  Alles gaat goed

  - Javascript op homepagina telt als surface plain item
  - Die kleur verandernde banner op de detailpagina telt als surface plain item
  - die animatie van zweefende brownie telt als surface plain
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  Homepagina mobiel 
  <img src="readme-images/homepagina-github.jpg" width="375px" alt="Een screenshot van de homepagina, op mobiel format">

  Detailpagina mobiel 
  <img src="readme-images/detailpagina-github.jpg" width="375px" alt="Een screenshot van de detailpagina voor een granola bar, op mobiel format">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes
  <img src="readme-images/carrousel.jpg" width="375px" alt="carrousel homepagina">
  Die carrousel was makkelijker dan ik dacht. Voorheen had ik er nognooit 1 gemaakt dus ik dacht dat het een ding was wat met complexe css of javascript gemaakt moest worden, maar het was best simpel dankzij het W3school artikel wat uitlegde hoe je het moet maken. De code zelf was ook best straight-forward.

  <img src="readme-images/uitklapbare-option.jpg" width="375px" alt="uitklapbare-option detailpagina">
    Deze was veel lastiger. Ik had geen idee hoe ik die option uit en inklapbaar kon maken. Ik ben daarom maar begonnen met stylen en ben daarna pas gaan zoeken naar hoe andere het deden. Ik was toen op allerlei community pages terecht gekomen met allerlei complexe css of javascript oplossingen die voor mij niks deden of die gewoon teveel waren. Dus heb ik het aan ChatGPT gevraagd of er een manier was waarop ik simpel een gedeelte styling kan tonen maar alleen wanneer die option van een select actief is. Nadat was werkten het prima.

  <img src="readme-images/review-card.jpg" width="375px" alt="review cards detailpagina">
    Die review cards maken heeft me veel geholpen met het beter begrijpen van grids. Op dat punt was ik er al best redelijk mee maar na het maken van die review cards snapte ik het wat beter.

  <img src="readme-images/if.jpg" width="375px" alt="if">
    Ik wist niet dat als je op 2 pagina's werkt en er 1 element "niet bestaat" op de pagina waar je op bent, dat javascript dan denkt dat het niet bestaat en besluit te stoppen met werken. Dit was echt een gedoe want ik had al een flink stuk aan javascript dus moest ik alles 1 voor 1 checken of het wel goed gespelt was, goed geselecteerd, goed genoteerd in javascriot enz. Blijkt het gewoon te zijn vanwege die 2 pagina's dus heb ik opgezorgt hoe ik dat zou kunnen fiksen. Eenmaal gefikst deed alles het.


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/stomme-tabel-v1.jpg" width="375px" alt="tabel v1">
    Deze tabel, geen idee hoe ze de orginele gecodeerd hebben, maar bij lukte het voor geen meter. Eerst stonden die cellen los van elkaar als je het een border gaf (leerde later pas dat je met collapse dat kan voorkomen) vervolgens moest ik specifieke cellen selecteren omdat die verschillende kleuren hadden en de omranding had een border radius maar alleen op specifiek cellen, dus dat moest ik allemaal selecteren met die nth. Die first en last-type snapte ik nog en die nth in theorie ook wel, maar op een gegeven moment begon het als rekenen te voelen, het was me bij een paar dingen ook niet gelukt om het te selecteren. De afb. onderaan (tabel v2) is hoe het er nu voor staat en waar ik het bij laat.

  <img src="readme-images/stomme-tabel-v2.jpg" width="375px" alt="tabel v2">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.
  

  Fonts
  1. https://www.1001fonts.com/just-sans-outline-font.html
  2. https://www.whatfontis.com/FF_Florencesans-SC-Outline.font
  3. https://www.dafont.com/nexa.font
  4. https://befonts.com/atyp-font-family.html
  5. https://dafontsfree.net/cerebri-sans-bold-2-font-download.html

  HTML
  1. https://www.w3schools.com/html/html_form_input_types.asp-->
	2. https://www.w3schools.com/tags/att_input_type_email.asp
  3. https://www.w3schools.com/tags/tag_select.asp
  4. https://www.w3schools.com/html/html_tables.asp
  5. https://www.w3schools.com/tags/tag_select.asp
  6. https://www.w3schools.com/html/html_form_input_types.asp
  7. https://www.w3schools.com/tags/att_input_type_email.asp
  8. https://getemoji.com

  CSS
  1. https://www.w3schools.com/howto/howto_js_curtain_menu.asp
  2. https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:first-of-type
  3. https://www.youtube.com/watch?v=2_E5uoiLCLY
  4. https://www.w3schools.com/howto/howto_css_image_gallery_scroll.asp
  5. https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/overflow-x#:~:text=The%20overflow%2Dx%20CSS%20property,using%20the%20overflow%20shorthand%20property.
  6. https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp
  7. https://www.w3schools.com/howto/howto_css_hide_scrollbars.asp
  8. https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/transform-function/translateY
  9. https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/grid-template-columns
  10. https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/aspect-ratio
  11. https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout/Basic_concepts
  12. https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:nth-child
  13. https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/filter-function/drop-shadow#:~:text=The%20drop%2Dshadow()%20CSS,a%20.
  14. https://www.w3schools.com/css/css_border_sides.asp
  15. https://www.w3schools.com/cssref/atrule_keyframes.php
  16. https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position
  17. https://www.sliderrevolution.com/resources/css-animated-gradient/
  18. https://www.w3schools.com/html/html_table_styling.asp
  19. https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/table-layout
  20. https://www.youtube.com/watch?v=biI9OFH6Nmg
  21. https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Tables
  22. ChatGPT

  Javascript
  1. https://www.w3schools.com/jsref/jsref_foreach.asp
  2. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  3. ChatGPT
  
  Extra
  1. Sanne, JS 3-stap - Oefening 3 - uitwerking met alles: https://codepen.io/Alisha_Sheoraj/pen/VYageXJ?editors=0010
</details>
