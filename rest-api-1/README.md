# rest-api-1

Ši aplikacija naudojama rasti artimiausius programuotojus nuo pateiktų koordinačių. Aplikacijai sukurti buvo naudojami
MongoDB, Express.js, Node.js ir EJS. Taip pat naudojantis navigacija galima ne tik rasti programuotojus, tačiau tuo pačiu ir juos ištrinti iš duombazės pagal ID, redaguoti programuotojo duomenis pagal ID, pridėti naują programuotoją. Vaikščioti į skirtingus funkcionalumus buvo padaryti EJS šablonai, kurie nuveda į atitinkamus endpointus:
`/` – pagrindinis puslapis, paieška pagal koordinates,
`/create` – forma naujo programuotojo sukūrimui,
`/update` – forma esamo duomenų atnaujinimui,
`/delete` – forma ištrynimui.
